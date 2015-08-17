 var win       = (typeof window !== 'undefined'),
     optional  = require('./optional'),     
     WebSocket = win ? window.WebSocket : optional('ws'),
     Queue     = require('./queue'),     
     Emitter   = require('./emitter'),
     Base      = require('./selfish').Base,
     merge     = require('./utils').merge;

module.exports = Base.extend(Emitter, {   

  /**
   * The `EventStream` class acts as a client listener for the DeployR event 
   * stream API `/r/event/stream` notifications. Notifications correspond to 
   * discrete  events that occur within the DeployR server. There are four 
   * distinct event categories:
   *
   * - Stream Lifecycle events
   * - Execution events
   * - Job Lifecycle events
   * - Management events   
   * 
   * @class 
   * @constructor
   * @param {String} endpoint The DeployR server endpoint.
   * @param {Object} options Object literal hash of options.
   * @api private
   */
  initialize: function initialize(endpoint, options) {
    Emitter.initialize.call(this, {});
  
    this.api     = (endpoint || '') + '/deployr/r/event/stream',
    this.options = options || {};
    this.ws      = null;
    this.q       = new Queue();
    this.filter  = {};  
    this.cookies = this.options.cookies;
  },  

  /**
   * This call connects to one of the following event streams: authenticated, 
   * anonymous, or management.

   * @method open
   * @param {Object} options Object literal hash of supported options:
   *  - yield: false (default) - 
   *  - cookies: null (default)
   *  - project: null (default)
   *  - job: null (default)
   *  - httpEventOnly: false (default)
   *  - revoEventOnly: false (default)
   *  - managementEventOnly: false (default)
   *
   * ```
   *  {
   *     //
   *     // Wait for authentication to complete before establishing connection.
   *     // 
   *     yield: false, 
   *
   *     //
   *     // Shared cookies from other authenticated DeployR requests
   *     //
   *     cookies: [ 'JSESSIONID=086669ABC226EB78; Path=/deployr/; HttpOnly' ]
   *
   *     //
   *     // Indicate the DeployR event stream to push events only for this 
   *     // project.
   *     //
   *     project: 'PROJECT-ID',
   *
   *     //
   *     // Indicate the DeployR event stream to push events only for this job.
   *     //
   *     job: 'JOB-ID',      
   *   
   *     //
   *     // httpEventOnly=true parameter is specified then an authenticated 
   *     // event stream will see only execution events associated with the 
   *     // current HTTP session.
   *     //
   *     httpEventOnly: true,   
   *                                        
   *     //
   *     // revoEventOnly=true, then execution executionConsoleEvent 
   *     // events are suppressed on the stream
   *     //
   *     revoEventOnly: true,       
   *                   
   *     // 
   *     // managementEventOnly=true, then event stream connection type is 
   *     // management    
   *     //                      
   *     managementEventOnly: true    
   * }
   * ```   
   * @return {EventStream} for chaining.
   * @api public
   */
  open: function(options) {    
    var self = this, url;

    options = this.options = merge(options || {}, this.options);    

    this.cookies = !this.cookies ? options.cookies : this.cookies;

    //
    // Append event filters
    //  
    if (options.project) { this.project(options.project); }
    if (options.job) { this.job(options.job); }
    if (options.managementEventOnly) { this.managementEventOnly(); }
    if (options.revoEventOnly) { this.revoEventOnly(); } 
    if (options.httpEventOnly) { this.httpEventOnly(); }

    url = this.getRequestURL();

    this.q.yield(true);
    this.q.add(function() {
      var headers = this.cookies ? { 'Cookie': this.cookies } : {};
      this.emit('es:connecting', { url: url, headers: headers });

      // For Browsers the thrid argument `opts` isignored
      var ws = (win ? new WebSocket(url) : 
        new WebSocket(url, 'http', { headers: headers }));

      ws.onopen = function (message) {
        self.emit('es:open', message);
      };

      var _message = '';
      ws.onmessage = function (message) {
        try {          
          if (message.data.split('!|!')[1]) {
            _message = _message + message.data.split('!|!')[1];
            message = JSON.parse(_message);
            _message = '';
            var type = message.deployr.response.event.type;
            self.emit('es:' + type.replace('Event', ''), message);
          }
        } catch (e) {} 
      };

      ws.onerror = function (err) { self.emit('es:error', err); };
      ws.onclose = function (message) { self.emit('es:close', message); };

      this.ws = ws;
    }, this);

    //
    // open socket immediately
    //
    if (!options.yield) { this.flush(); }

    return this;    
  },

  /**
   * Terminates the WebSocket closing any connection to DeployR's event stream.
   * @method close
   * @api public   
   */
  close: function() {
    if (this.ws) { this.ws.close(); }

    return this;
  },

  /**
   * Reconstructs the event stream URL the client uses to make the request.
   *
   * Example:
   * ```
   * ws://dhost:7400/deployr/r/event/stream?revoEventOnly=true&project=PID
   * ws://dhost:7400/deployr/r/event/stream
   * ```
   * @method getRequestURL
   * @api public     
   */
  getRequestURL: function() {
    var url    = this.api.replace(/^http/,'ws'),
        filter = this.filter;

    url += (filter.type ? '?' + filter.type : '');  

    if (filter.project) { url += '&' + filter.project; }
    if (filter.job) { url += '&' + filter.job; }

    return  url;
  },

  /**
   * Returns the HTTP cookie previously sent by the server with Set-Cookie.
   * This value can be passed to `.share(ruser.getCookies())` of a diffrent
   * `.io()` agent to preserve session state across requests.
   *
   * @method getCookies
   * @return {Array} The HTTP cookie previously sent by the server with 
   * Set-Cookie.
   * @api public   
   */  
  getCookies: function () {
    return this.cookies;
  },   

  /**
   * Destroy lifecycle method. Fires the `destroy` event, prior to invoking 
   * destructors for the class hierarchy. 
   *
   * @method destroy
   * @api public   
   */
  destroy: function () {    
    this.emit('destroy');
    this.close();
    this.offAll();

    this.ws      = null;
    this.host    = null;
    this.options = null;
    this.ws      = null;
    this.q       = null;
    this.filter  = null;     
  },

  /**
   * Drains the yield queue in situations where `open()` is waiting for 
   * authentication to complete before establishing a connection.
   */
  flush: function() {
    this.q.yield(false);
    this.q.flush();
  },

  /**
   * Shares the cookies from a differen `.io()` agent to preserve session state
   * across `this` request and all requests chained to it.
   *
   * @method share
   * @return {EventStream} for chaining.
   * @api public   
   */ 
  share: function(cookies) {
    this.cookies = cookies;

    return this;
  },

  /**
   * Indicate the DeployR event stream to push events only for this project.
   *
   * @method project
   * @param {String} project The project identifier.
   * @return {EventStream} for chaining.   
   * @api public   
   */
  project: function(project) {
    this.filter.project = 'project=' + project; 
    this.filter.job = null;

    return this;
  },

  /**
   * Indicate the DeployR event stream to push events only for this job.
   *
   * @method project
   * @param {String} job The job identifier.
   * @return {EventStream} for chaining.   
   * @api public   
   */
  job: function(job) {
    this.filter.job = 'job=' +  job; 
    this.filter.project = null;    

    return this;
  },

  /**
   * If specified then event stream connection type is management.
   *
   * @method managementEventOnly
   * @return {EventStream} for chaining.   
   * @api public   
   */  
  managementEventOnly: function() {
    this.filter = {
      type: 'managementEventOnly=true',
      project: null,
      job: null
    };

    return this;
  },

  /**
   * If specified then an authenticated event stream will see only execution 
   * events associated with the current HTTP session.
   *
   * @method httpEventOnly
   * @return {EventStream} for chaining.   
   * @api public   
   */  
  httpEventOnly: function() {
    this.filter.type = 'httpEventOnly=true';

    return this;
  },  

  /**
   * If specified then execution `executionConsoleEvent` events are suppressed
   * on the event stream.
   *
   * @method revoEventOnly
   * @return {EventStream} for chaining.   
   * @api public   
   */ 
  revoEventOnly: function() {
    this.filter.type = 'revoEventOnly=true';

    return this;
  },

  /**
   * @deprecated
   */
  all: function() {
    this.filter = { type: null, project: null, job: null };

    return this;
  },

  /**
   * @deprecated
   */
  session: function() {
    return this.httpEventOnly();
  }, 

  /**
   * @deprecated
   */
  management: function() {
    return this.managementEventOnly();
  }
});