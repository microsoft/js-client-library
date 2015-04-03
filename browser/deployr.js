/*!
 * `deployr` JavaScript Client Library v7.4.0
 * http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc
 *
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 * Released under the Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Includes:
 *   - superagent: https://github.com/visionmedia/superagent
 *   - ws: https://github.com/einaros/ws
 *   - D.js: http://malko.github.io/D.js
 *   - yui-lang.js: https://github.com/yui/yui3 (DeployR port)
 *
 * superagent
 *
 * Copyright (c) 2014-2015 TJ Holowaychuk <tj@vision-media.ca>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * ws
 *
 * Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining 
 * a copy of this software and associated documentation files 
 * (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge
 * publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be 
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * D
 *
 * Copyright (C) 2013 Jonathan Gotti <jgotti at jgotti dot net>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * selfish
 *
 * Copyright 2011 Irakli Gozalishvili. All rights reserved
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * yui-lang
 *
 * The lang component is a DeployR port of yui-lang.js by Yahoo!
 *
 * Software License Agreement (BSD License)
 * Copyright (c) 2013, Yahoo! Inc. All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, 
 * with or without modification, are permitted provided that the 
 * following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer. Redistributions
 * in binary form must reproduce the above copyright notice, this list of
 * conditions and  the following disclaimer in the documentation and/or 
 * other materials provided with the distribution.
 * 
 * Neither the name of Yahoo! Inc. nor the names of YUI's contributors 
 * may be used to endorse or promote products derived from this software 
 * without specific prior written permission of Yahoo! Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT 
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT 
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT, 
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Date: 2015-04-02
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.deployr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
/*!
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var win         = (typeof window !== 'undefined'),   
    request     = require('superagent'),
    D           = require('d.js'),
    fs          = require('fs'),
    apis        = require('./apis.json'), 
    EventStream = require('./lib/es'),
    utils       = require('./lib/utils'),
    Lang        = require('./lib/lang'),   
    Logger      = require('./lib/logger'),   
    Queue       = require('./lib/queue'),
    Emitter     = require('./lib/emitter'),
    encoder     = require('./lib/encoder'),
    Base        = require('./lib/selfish').Base,
    RInput      = require('./lib/rinput'),    
    RInputs     = require('./lib/rinputs'),
    merge       = utils.merge;

/*
 * Turn global logging off by default
 */
Logger.setLevel(Logger.OFF);

/*
 * Global options that persist through all DeployR requests.
 */
var globalOptions = { 
  cors: false,
  logging: false,
  sticky: false,
  cookies: null,
  host: '',
  allowSelfSignedSSLCert: false,
  maxRequests: null, // no socket pooling in http.Agent
  events:{},
  set: function(prop, value) { 
    if (prop !== 'set') { 
      if (prop === 'host' && value) {         
         // Be more forgiving on the entered DeployR 'endpoint':
         //   - http(s)://dhost:port
         //   - http(s)://dhost:port/deployr
         //   - dhost:port
         //   - dhost:port/deployr         
         value = value.replace(/\/*$|\/*deployr\/*$/, '');
         value = (new RegExp('^(http|https)://', 'i')).test(value) ? value : 
            'http://' + value;
      }

      this[prop] = value; 
    } 
  }
};

/*
 * The top-level DeployR API response entities.
 */
var TOPLEVEL_ENTITIES = [
  'user', 
  'project', 
  'workspace', 
  'execution', 
  'directory', 
  'repository', 
  'packages' 
];

/*
 * Notify global IO error events accessible by all subscribers across requests.
 */
function raiseGlobalErrors(api, res) {
  var code    = res.deployr ? res.deployr.response.errorCode : res.status,
      context = this;

  // -- global events if provided --
  if (globalOptions.events) {
    if (!res.deployr) {
      res = res.text;
    }

    context = globalOptions.events.ctx || context;

    // -- general global failure --
    if (globalOptions.events.error) {
      globalOptions.events.error.apply(context, [api, res]);
    }

    // -- HTTP or DeployR global errors --    
    if (globalOptions.events[code]) {
      globalOptions.events[code].apply(context, [api, res]);
    }
  }
}

/**
 * The `DeployR` request class is a utility that brokers HTTP requests through a 
 * simplified fluid interface to DeployR.
 *
 * @module deployr
 * @for deployr
 */
var DeployR = Base.extend(Emitter, RInputs, {

  /**
   * The `DeployR` Request class is a utility that brokers HTTP requests through 
   * a simplified fluid interface to DeployR.
   * 
   * @class 
   * @constructor
   * @param {String} api The DeployR API
   * @param {Object} link The object literal containing the previous request.
   * @api private
   */
  initialize: function initialize(api, link) {
     Emitter.initialize.call(this, {});
  
     var opts = globalOptions;

     if (!apis[api]) { throw new Error('Invalid API "' + api + '"'); }
    
     this.api        = merge({ 'call': api }, apis[api]);    
     this.link       = link || {};
     this.q          = this.link.queue || new Queue();
     this.deferred   = this.link.deferred || D();
     this.cookies    = this.link.cookies;
     this.logger     = Logger.get(api, Logger.OFF); // transaction-level logging
     this.params     = {};
     this.inputs     = []; // rinputs list 
     this.outputs    = []; // routput object list
     this.rstream    = false;
     this.delayed    = false;
     this.globalEvts = true; // suppress|raise global events fot this `io`     
     this.file       = null; 
     this.filter     = null; 

     // preset deployr's assigned response format for `this` api
     this.data({ format: this.api.format });

     // wrap superagent for the heavy lifting     
     this.req = 
        request[this.api.method.toLowerCase()](opts.host + '/deployr' + api);
     this.req.timeout(20 * 60 * 1000); // default timeout --> 20 minutes

     // All CORS deployr calls require sticky sessions
     if (win && globalOptions.cors) { this.req.withCredentials(); }

     // Node.js - access an SSL endpoint with self signed certs for testing|dev
     if (!win && globalOptions.allowSelfSignedSSLCert) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';        
     }
  },

  /**
   * Binds the scope context for the configured `.end()` and `.error()` event    
   * handler callbacks on this request.
   *
   * @method ctx
   * @param {Object} context The `this` object for the configured `.end()` and
   * `.error()` event handlers on this request.
   * @api public   
   */ 
  ctx: function (context) {
    this.scope = context || this;

    return this;
  },

  /**
   * Suppress or raise global events for this `io` request.
   *
   * @method global
   * @param {Boolean} raise `true` to raise global events, `false` to supress 
   * event firing globally.
   * @return {DeployR} for chaining.
   * @api public
   */  
  global: function(raise) {
    this.globalEvts = Lang.isBoolean(raise) ? raise : this.globalEvts;

    return this;
  },  

  /**
   * Retrieve details about user.
   *   
   * @method about
   * @return {Object} details about user otherwies `null`.
   * @api public   
   */
  about: function() {
    var response = this.req.res;

    return this.api['call'] === '/r/user/login' && response ? 
           response.body.get('user') : null;
  },  

  /**
   * Shares the cookies from a diffrent `.io()` agent to preserve session state
   * across `this` request and all requests chained to it.
   *
   * @method share
   * @return {DeployR} for chaining.
   * @api public   
   */  
  share: function (cookies) {
    if (globalOptions.sticky) {
      if (globalOptions.cookies) {
        this.cookies = globalOptions.cookies.slice(0); 
      } else {
        if (cookies) { 
          this.cookies = cookies.slice(0); 
          globalOptions.set('cookies', this.cookies);
        }
      }
    } else {
      this.cookies = (cookies ? cookies.slice(0) : this.cookies);
    }

    return this;
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

  delay: function (ms) {
    // TODO: support delayed requests based on ms for now this is just a pause.
    this.delayed = !isNaN(parseFloat(ms)) && isFinite(ms) ? ms : true;

    return this;
  },   

  /**
   * Unwind the queue chain clearing requests that might have delays attached.
   *
   * @method drain
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public   
   */
  drain: function () {
    this.delayed = false;
    this.q.flush(); 

    return this.deferred.promise;
  },   

  /**
   * The `.promise()` method returns a dynamically generated Promise that is 
   * resolved once all DeployR `.io()` requests have ended.
   *   
   * @method promise
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public
   */     
  promise: function () {
    this.end();

    return this.deferred.promise;
  },

  /**
   * Abort the DeployR request.
   *
   * @method abort  
   * @return {DeployR} for chaining.
   * @api public
   */  
  abort: function () {
    this.req.abort();
    this.emit('abort');
    this.deferred.reject(this._handleError({ 
        status: 'abort',
        text: 'DeployR request aborted.'
    }));

    return this;
  },

 /**
  * Set timeout to `ms`.
  *
  * @method timeout  
  * @param {Number} ms
  * @return {DeployR} for chaining
  * @api public
  */  
  timeout: function (ms) {
    this.req.timeout(ms);

    return this;
  },

 /**
  * Turn logging on for the specific transaction.
  *
  * @method log
  * @return {DeployR} for chaining
  * @api public
  */ 
  log: function (level) {
    this.logger.setLevel(level || Logger.DEBUG);

    return this;
  },

  /**
   * Filters successful responses to contain only a top-level DeployR API 
   * response entities:
   * - 'user'
   * - 'project'
   * - 'workspace' 
   * - 'execution' 
   * - 'directory' 
   * - 'repository'
   * - 'packages' 
   *   
   * @method entity
   * @return {DeployR} for chaining
   * @api public
   */
  entity: function (entity) {
    this.filter = utils.inArray(TOPLEVEL_ENTITIES, entity);

    return this;
  },

  /**
   * Defines the request data being sent to a DeployR API. 
   *
   * @method data
   * @param {Object} data The object literal configuration hash. 
   * @return {DeployR} for chaining
   * @api public
   */
  data: function (data) {
    data = data || {};    

    // remove any inlined rinput(s) and attach them to the rinput(s) property
    if (data.rinput || data.rinputs) {
      this.rinput(data.rinput);
      this.rinputs(data.rinputs);
    } 

    // remove any `reserved` values that could have been passed by mistake
    var BLACKLIST = ['rinput', 'rinputs', '__cookies__'];
    BLACKLIST.forEach(function(param) { delete data[param]; });  

    this.params = merge(this.params, data);

    return this;
  },

  /**
   * Attaches a file to be uploaded. 
   *
   * @method attach
   * @param {File|Blob|path} file The file to be attached for an upload. For 
   * Browser environments the HTML5 File|Blob is used. For the Node.js 
   * environment, a file path is accepted.
   * @param {String} filename (optional) the name of the file to be uploaded. 
   * This name does not have to match the actual source filename.
   * @return {DeployR} for chaining
   * @api public
   */
  attach: function (file, filename) {
    if (this.api.upload) {
      this.file = file;

      // optional filename here for convenience
      if (filename) { this.data( { filename: filename } ); }
    }

    return this;
  },

  /**
   * Supported only in Node.js, this method works in conjunction with the 
   * attach method to indicate that the file should be read in as a readable 
   * stream during a file upload.
   *
   * @method stream
   * @param {Object} options (optional) the Readable Stream options hash.
   *  ```
   *    { flags: 'r',
   *      encoding: null,
   *      fd: null,
   *      mode: 0666,
   *      autoClose: true
   *    }
   * ```
   * @return {DeployR} for chaining
   * @api public
   */
  stream: function () {
    this.rstream = (!win && this.api.upload); //nodejs only

    return this;
  },
  
  /**
   * Acts as a finally statement allowing you to execute "cleanup" type tasks 
   * in a request chain. It arranges for cleanup to be called, with no 
   * arguments, when the DeployR request chain is either completely fulfilled 
   * or rejected.
   *
   * @method ensure
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public
   */  
  ensure: function (fn) {
    this.deferred.promise.ensure(fn);

    return this.deferred.promise;
  },
      
  /**
   * The general failure callback. If called, all DeployR errors for this 
   * transaction will be returned here when raised.
   *
   * @method error
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public
   */
  error: function (fn) {
    this.on('error', fn);

    return this;
  },

  /**
   * Stream the DeployR response into the pipe. It is important to note that if 
   * the `.pipe()` method is never called the request will not be sent.
   *
   * The `.pipe()` method should be be used as an alternative to `.end()` and 
   * never along side of it. `.pipe()` and `.end()` are an either-or.
   *
   * @method pipe
   * @param {Stream} stream A destination Stream.
   * @return {Stream} The passed in destination stream to be used for additional 
   * piping.
   * @api public
   */
  pipe: function (dest) {
    var q   = this.q,
        api = this.api;        

    q.add(function(responseChain, error, prevArgs) {    
      // brake the call chain on error      
      if (error) {        
        this.deferred.reject(error);      
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('pipe()', api, this.req);
      this.logger.info('pipe()', api, this.req);   

      var stream = this.req.pipe(dest);
      q.yield(true);
      stream.on('error', function () { });    
      stream.on('end', function() { });     
      stream.on('data', function() { });      
    }, this);
  
    if (q.size() <= 1) { q.flush(); }

    return dest;
  },

  /**
   * Indicates that the request is ready to be sent to DeployR. It is important 
   * to note that if the `.end()` method is never called the request will not be
   * sent.
   *
   * @method end
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining.
   * @api public
   */ 
  end: function (fn) {
    var self   = this,
        q      = this.q,
        api    = this.api,
        args   = null,
        entity = this.filter;

    q.add(function(responseChain, error, prevArgs) {
      // break the call chain on error      
      if (error) {        
        this.deferred.reject(error);        
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('io()', api, this.req);
      this.logger.info('io()', api, this.req);    

      this.req.end(function(res) {
        self.share(self.cookies || res.headers['set-cookie']);         

        // -- log cookies across requests --
        if (self.cookies) {
          Logger.info('cookies', api, self.cookies); 
          self.logger.info('cookies', api, self.cookies); 
        }

        error = self._handleError(res);
        var dres = (res.body && res.body.deployr ? res.body : res);             
      
        self.inputs = [];
        self.outputs = [];

        if (!error) {
           // -- Log global + transaction log --
           Logger.info('end()', api, dres, res);
           self.logger.info('end()', api, dres, res);

           // -- walk response for top-level entity response assignment --        
           if (entity) { dres = dres.deployr.response[entity] || dres; }

           dres.get = function(key) { 
              return utils.get(dres.deployr.response, key); 
           };

           dres.workspace = function(name) { 
              return utils.workspace(dres.deployr.response, name); 
           };

           // -- callback --
           if (fn) { args = fn.apply(self.scope, [dres, responseChain]);}

           // -- notify that the queue has been drained... --
           if (q.size() === 0) { 
             self._clear();
             self.deferred.resolve(responseChain || dres);
           }          

           // -- include cookies in next request in the queue --
           args = merge(args, { __cookies__: self.cookies });          
        }        

        q.yield(false);
        q.flush(dres, error, args); // pass result|error|args to next 
      });

      q.yield(true);
    }, this, this.delayed);
  
    if (!this.delayed && q.size() <= 1) { q.flush(); }

    return this;
  }, 

  /** 
   * Add an additional IO request to the exsisting sequential request chain.
   *
   * @method io
   * @param {String} api One of the supported DeployR APIs.
   * @return {DeployR} for chaining.
   * @api public
   */   
  io: function (api) {    
    return DeployR.new(api, { 
      cookies: this.cookies, 
      queue: this.q, 
      deferred: this.deferred
    });
  },

  /** 
   * Convenience function for adding an additional script execution to the 
   * exsisting sequential request chain.
   *
   * @method script
   * @param {Arguments} Arguments to define the fully qualified script for 
   * execution.
   * @return {DeployR} for chaining.   
   * @api public
   */
  script: function() {
     var args = utils.signature(arguments),
         opts = args.opts,
         api  = args.api,
         link = { 
          cookies: this.cookies, 
          queue: this.q, 
          deferred: this.deferred
        };  

    // convenience - if the project is a boolen `true` rather than a pid, first
    // create a new project and then prepare the project api call to execute
    if (args.create) {
      return DeployR.new('/r/project/create', link)
               .end(function(res) {
                  return { project: res.get('project').project };
                })
               .io(api)
               .data(opts);
    } else {
      return DeployR.new(api, link).data(opts);
    }    
  },

  /** 
   * Convenience function for adding an additional repository-managed shell 
   * script execution to the exsisting sequential request chain.
   *
   * This call executes repository-managed shell scripts .sh, .csh, .bash, .bat 
   * on the DeployR server. Due to the special security concerns associated with 
   * excuting shell scripts on the DeployR server, only shell scripts owned by 
   * _ADMINISTRATOR_ users can be executed on this API call. Any attempt to 
   * execute a shell script stored in the repository that is not owned by an 
   * _ADMINISTRATOR_ user will be rejected.
   *
   * To execute a repository-managed shell script the caller must provide 
   * parameter values for _author_, _directory_, _filename_. This can be
   * achieved by providing a fully qualified shell script 
   * `/<author>/<directory>/<filename>`, for example:
   *
   *  ```
   *  .shell('/admin/external:public:admin/echo.sh', 'echo.sh args to pass.')
   *  ```
   *
   * @method shell
   * @param {String} filepath to define the fully qualified shell script for
   * execution. 
   * @param {String} args (optional) arguments to be passed into the shell 
   * script on execution.
   * @return {DeployR} for chaining.   
   * @api public
   */
  shell: function(path, args) {   
    var link = { 
          cookies: this.cookies, 
          queue: this.q, 
          deferred: this.deferred
        },
        tokens = Lang.isString(path) ? path.split('\/') : [];

    // handle both: `/author/directory/filename` & `author/directory/filename`
    if (tokens.length > 3) { tokens = tokens.slice(1); }

    return DeployR.new('/r/repository/shell/execute', link).data({
      author: tokens[0],
      directory: tokens[1],
      filename: tokens[2],
      args: args
    });
  },

  /** 
   * Convenience function for executing a block of R code on the R session.

   * Example:
   *  ```
   *  .code('x<-5')
   *  // -- or --
   *  .code('x<-5', projectId)
   *  ```
   *   
   * @method code
   * @param {String} r - The block of R code to execute.
   * @param {String} project - (optional) if omitted a new project will first be 
   * created and used, otherwise it will execute on the R session identified by 
   * this `project`.
   * @return {DeployR} for chaining.   
   * @api public
   */
  code: function(r, project) {
     var link = {
             cookies: this.cookies,
             queue: this.q,
             deferred: this.deferred
         },
         api = '/r/project/execute/code';

     if (!project) {
         return DeployR.new('/r/project/create', link)
             .end(function(res) {
                 return { project: res.get('project').project };
             })
             .io(api)
             .data({ code: r });
     } else {
         return DeployR.new(api, link).data({ code: r, project: project });
     }
  },
  
  /** 
   * Release any residual project resources associated with the application 
   * instance whenever a client application terminates. This includes closing 
   * any supplied projects down and logging out.
   *
   * @method release
   * @param {String|Array} projects The project or list of projects to close.
   * @param {Boolean} auth (optional) to remain authenticated.
   * @return {DeployR} for chaining.   
   * @api public
   */
  release: function(projects, auth) {
     projects = Lang.isArray(projects) ? projects : [projects];

     var self     = this,
         deferred = D(),
         empty    = !projects || !projects[0],
         count    = 0,
         last     = !empty ? projects.length - 1 : count,
         cookies  = this.getCookies();           

    function logout(index) {
      if (index === last) {
        if (!auth) {
          DeployR.new('/r/user/logout')
          .share(cookies)
          .error(function() {          
            deferred.reject(false);
          })      
          .end(function() { 
            deferred.resolve(true);
          })
          .ensure(function() {
            self.destroy();
          });
        } else {
          deferred.resolve(true);
          self.destroy();
        }
      } 
    }

    if (!empty) {
      projects.forEach(function(project) {
        DeployR.new('/r/project/close')
        .data({ project: project })
        .share(cookies)
        .end()
        .ensure(function() {
          logout(count);
          count++;
        });
      });   
    } else {
      logout(count);
    }

    return deferred.promise;  
  },  

  /** 
   * A convenience alternative to multiple `.rinput()` calls. Defines a name 
   * list of R objects that will be returned as DeployR-encoded R objects on the 
   * response markup.
   *
   * Calling this method ~.routputs([ ... ])` is equivalent to invoking multiple 
   * `.routput(...)` calls.
   *
   * @method routputs
   * @param {Array} robjects A name list of R objects that will be returned.
   * @return {DeployR} for chaining.   
   * @api public
   */
  routputs: function (routputs) {
    if (routputs) { this.outputs = this.outputs.concat(routputs); }

    return this;
  },
  
  /** 
   * Defines the name of the R object that will be returned as a DeployR-encoded 
   * R object on the response markup.
   *
   * @method routput
   * @param {String} robject The name of the R object that will be returned.
   * @return {DeployR} for chaining.   
   * @api public
   */
  routput: function (routput) {
    if (routput) { this.routputs([routput]); }

    return this;
  },

  /** 
   * Used to pass multiple inputs at once from JavaScript to an R script using 
   * one of the defined `RInput` factories.
   *
   * @method rinputs
   * @param {Array} rinputs The `RInput` list of DeployR-specific encoded R 
   * object data for use on an API call.
   * @return {DeployR} for chaining.   
   * @api public
   */
  rinputs: function (rinputs) {
    if (rinputs) { this.inputs = this.inputs.concat(rinputs); }

    return this;
  },

  /** 
   * Used to pass multiple inputs at once from JavaScript to an R script using 
   * one of the defined `RInput` factories.
   *
   * @method rinput
   * @param {RInput} rinput The DeployR-specific encoded R object data for use 
   * on an API call.   
   * @return {DeployR} for chaining.   
   * @api public
   */
  rinput: function (rinput) {
    if (rinput) { this.inputs.push(rinput); }

    return this;
  },

  /**
   * Destroy lifecycle method. Fires the `destroy` event, prior to invoking 
   * destructors for the class hierarchy. Called internally when `.release()`
   * is called.
   *
   * @method destroy
   * @api public   
   */
  destroy: function () {
    try {
      this.emit('destroy');
      this.offAll();
    
      for (var key in this) {
        if (this.hasOwnProperty(key)) { 
          this[key] = null; 
          delete this[key];
        }
      }
    } catch(err) {}
  },  

  // --------------------------------------------------------------------------
  // Private methods
  // --------------------------------------------------------------------------

  /**
   * @api private
   */
  _clear: function() {    
    this.params  = {};
    this.inputs  = [];
    this.outputs = [];
    this.rstream = false;
    this.delayed = false;
    this.api     = null;    
    this.file    = null;  
    this.filter  = null;
  }, 

  /**
   * @api private
   */
  _prepRequest: function (responseChain, args) {
    var req  = this.req,
        file = this.file;

    // set the request type    
    if (this.api.upload) {
       // If the env is the Browser there is no need to manually set the
       // Content-Type. The browser will automatically set the 
       // "multipart/form-data; boundary=..." value. If the env is Node we need
       // to set it manually.
       if (!win) { this.req.type('multipart/form-data'); }    
    } else {
      req.type('form');
    }    

    req.on('error', function(err) { 
      err = err || {  code: 'UNKNOWN CODE', text: 'UNKNOWN ERROR' };

      this._handleError({ 
        status: err.code || 'UNKNOWN CODE',
        text: err
      });
    }.bind(this));    

    this.share(args ? args.__cookies__ : null);

    // arguments returned from prev request's io().end(function() { return x; })
    if (args) { 
       this.data(args);
    } 

    if (this.inputs.length > 0) { 
      this.data({ inputs: encoder.encode(this.inputs) }); 
    }
  
    if (this.outputs.length > 0) { 
      this.data({ robjects: this.outputs.join() }); 
    }    

    if (this.cookies) {     
      this.cookies.forEach( function(c) { req.set('Cookie', c); });
    }

    if (this.api.upload) {    
      for(var p in this.params) {
       req.field(p, this.params[p] ? this.params[p] + '' : '');  
      } 
      req.attach('file', this.rstream ? fs.createReadStream(file) : file);
    } else {
      req[this.api.method === 'GET' ? 'query' : 'send'](this.params);
    } 
  },

  /**
   * @api private
   */
  _handleError: function (raw) {
    var stat  = raw.status,
        res   = (raw.body && raw.body.deployr ? raw.body : raw),
        error = ((stat !== 200) || res.deployr && !res.deployr.response.success);

    // -- Handle errors --
    if (error) {
      res = {
        get: function(key) { 
          return utils.get(this.deployr.response, key); 
        },
        deployr: {          
          response: {
            success: false,
            call: this.api['call'],
            errorCode: res.deployr ? res.deployr.response.errorCode : stat,
            error: res.deployr ? res.deployr.response.error : res.text
          }
        }
      };

      Logger.error('error()', this.api, res, raw);
      this.logger.error('error()', this.api, res, raw);

      // -- notify global errors first (if any) for this call --      
      if (this.globalEvts) {
        raiseGlobalErrors(this.api['call'], res);        
      }

      // -- tranaction level HTTP or DeployR errors come next --    
      this.emit('error', res);
      this.emit('deployr-io:' + res.deployr.response.errorCode, res);
      this.deferred.reject(res);
    }

    return error;
  }
});

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

// Include the `deprecated` jsDeployR for now.
if (win) {
  window.Revolution = window.Revolution || require('./lib/deprecated');
}

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

/**
 * Expose for a cleaner client api into DeployR
 */
module.exports = {

  /**
   * Exposes the `DeployR` object for extending.
   *
   * ```var DeployR = require('deployr').DeployR;```
   *
   * @static
   * @api public
   * @return {DeployR} The `DeployR` object.
   */   
  DeployR: DeployR,

  /**
   * Exposes the supported DeployR APIs.
   *
   * @method apis
   * @param {Boolean} flat (optional) if `true` will return an array of just the 
   * API's endpoint properties, for example: 
   * ```
   * ['/r/user/login', '/r/user/logout', '/r/user/about', ...]
   * ```
   * @static
   * @api public
   * @return {Object|Array} The HTTP request to the DeployR server.      
   */  
  apis: function(flat) {
    return flat ? Object.keys(apis) : apis;
  },

  /**
   * Represents a static method for configuring all DeployR requests. Settings 
   * made here are applied globally across every request.
   *
   * @method configure
   * @param {Object} options The object literal configuration hash. 
   * @static
   * @chainable
   * @api public
   */
  configure: function(options) {
    options = options || {};

    for (var i in options) { globalOptions.set(i, options[i]); }

    // assert global cookies are empty if global `sticky` jsessionid is off
    if (!globalOptions.sticky)  { globalOptions.set('cookies', null); }

    // turn global logging on|off (off by default)
    Logger.setLevel(globalOptions.logging ? Logger.DEBUG : Logger.OFF);

    return this;
  },

  /**
   * Factory for creating new IO requests to `DeployR`.
   *
   * Example:
   * ```   
   *    deployr.io('/r/user/about').end(callback);
   * ```
   *
   * @method io
   * @param {String} api One of the supported DeployR APIs.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.
   * @api public   
   */
  io: function(api) {  
    return DeployR.new(api);
  },

  /**
   * Convenience function to sign the user in by authenticating the credentials 
   * with the DeployR server.   
   *
   * @method auth
   * @param {String} username Specifies the username.
   * @param {String} password Specifies the password.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.   
   * @api public   
   */   
  auth: function(un, pw) {
    var data = { username: un, password: pw };
    return DeployR.new('/r/user/login').data(data).end();    
  },

  /**
   * Convenience function to sign the user in by authenticating the credentials 
   * with the DeployR server.   
   *
   * Example:
   * ```
   *    deployr.script('/testuser/root/reduce.R')
   *    deployr.script({ filename: 'reduce.R', author: 'testuser',
   *                     directory: 'root'})
   *    deployr.script('reduce.R', 'testuser', 'root')
   *    deployr.script('/testuser/root/reduce.R', project)     
   * ```   
   *
   * @method script
   * @param {Arguments} arguments Arguments to define the fully qualified script 
   * for execution.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.   
   * @api public   
   */     
  script: function() {
    var args = utils.signature(arguments),
        opts = args.opts,
        api  = args.api;  

    // convenience - if the project is a boolen `true` rather than a pid, first
    // create a new project and then prepare the project api call to execute
    if (args.create) {
      return DeployR.new('/r/project/create')
               .end(function(res) {
                  return { project: res.get('project').project };
                })
               .io(api)
               .data(opts);
    } else {
      return DeployR.new(api).data(opts);
    }
  },  

  /**
   * Run an series of chained DeployR requests in sequence and without overlap.       
   *
   * @method pipline
   * @param {Array} tasks Specifies the list of `Function` tasks.
   * @static
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public   
   */
  pipeline: function(chains) {      
    var deployr  = this,
        deferred = D(),
        q        = new Queue(),
        results  = [],
        errors   = [],
        NOOP     = null, // NOOP errors|results for [a] batch request chain
        orig     = {
          sticky: globalOptions.sticky,
          cookies: globalOptions.cookies
        };

    // make a copy
    chains = chains.slice(0);

    // turn sticky session for these request (hacky)
    deployr.configure( { sticky: true });

    function add() {
      q.add(function() { 
        chains.shift().drain()
        .then(function(chain) {
          results.push(chain);  
          errors.push(NOOP);           
          if (q.isEmpty()) { 
            deployr.configure(orig); // reset
            deferred.resolve({ results: results, errors: errors }); 
          }  

          q.take();
        }, function(err) {          
          results.push(NOOP); 
          errors.push(err);
          // rejections are only met when they [all] fail
          if (q.isEmpty() && results.length === 0) { 
            deployr.configure(orig); // reset
            deferred.reject(errors); 
          }  
          q.take();
        });       
      }, null, true);
    }

    // convert to a seq queue for better handling
    for(var i = 0; i < chains.length; i++) { add(); }

    // start: dequeue first item and run it
    q.take();

    return deferred.promise;
  },

  /**
   * The event stream API is unique within the DeployR API as it supports push 
   * notifications from the DeployR server to client applications. Notifications 
   * correspond to discrete events that occur within the DeployR server. There 
   * are four distinct event categories:
   * 
   * - Stream Lifecycle events
   * - Execution events
   * - Job Lifecycle events
   * - Management events
   *
   * Example:
   * ```
   * deployr.es({ username: 'testuser', password: 'secret' })
   *    // -- connection choices for event types --
   *    .management()  //.session() | .all() | .project(id) | .job(id)
   *    .on('es:gridHeartbeat', function(data) {
   *        console.log('===================');
   *        console.log('es:gridHeartbeat');
   *        console.log('===================');          
   *     })
   *     .open();
   * ```
   * 
   * @method es
   * @param {Object} options The object literal configuration hash. 
   * @static
   * @return {EventStream} a new `EventStream` for binding.
   * @api public   
   */  
  es: function(options) {    
    var stream = EventStream.new(globalOptions.host, options);

    if (options && options.username && options.password) {
      var ruser = this.auth(options.username, options.password);
      ruser.ensure(function() { 
        stream.share(ruser.getCookies());
        stream.flush(); 
      });
    }

    return stream;
  },

  /**
   * Defines the factory for creating a DeployR-specific encoded R object to be 
   * sent as input parameters to an R script.
   *
   * Example:
   * ```
   *    var rinput = deployr.RInput.logical('logical_name', true);
   *    var rinput = deployr.RInput.numeric('numeric_name', 10.5);
   *    var rinput = deployr.RInput.integer('integer_name', 5);
   *    var rinput = deployr.RInput.character('character_name', 'Hello');
   *    // ect...
   * ```
   * @property RInput
   * @static
   * @api public
   */
  RInput: {
    numeric: function (name, value) {
      return RInput.new(name, value).numeric();
    },

    integer: function (name, value) {
      return RInput.new(name, value).integer();
    },

    logical: function (name, value) {
      return RInput.new(name, value).logical();
    },

    character: function (name, value) {
      return RInput.new(name, value).character();
    },

    date: function (name, value) {
      return RInput.new(name, value).date();
    },

    posixct: function (name, value) {
      return RInput.new(name, value).posixct();
    },  

    numericVector: function(name, value) {
      return RInput.new(name, value).numericVector();
    }, 

    integerVector: function (name, value) {
      return RInput.new(name, value).integerVector();
    },

    logicalVector: function (name, value) { 
      return RInput.new(name, value).logicalVector();
    },

    characterVector: function (name, value) { 
      return RInput.new(name, value).characterVector();
    },  

    dateVector: function (name, value) { 
      return RInput.new(name, value).dateVector();
    },  

    posixctVector: function (name, value) { 
      return RInput.new(name, value).posixctVector();
    },

    list: function (name, value) {
      return RInput.new(name, value).list(); 
    },

    dataframe: function (name, value) { 
      return RInput.new(name, value).dataframe();
    },
  
    factor: function (name, value, levels, labels) {
      var opts = { levels: levels, labels: labels };
      return RInput.new(name, value, opts).factor();
    },

    ordered: function (name, value, levels, labels) {
      var opts = { levels: levels, labels: labels };
      return RInput.new(name, value, opts).ordered();
    },

    numericMatrix: function (name, value) { 
      return RInput.new(name, value).numericMatrix();
    },

    integerMatrix: function (name, value) { 
      return RInput.new(name, value).integerMatrix();
    },

    logicalMatrix: function (name, value) { 
      return RInput.new(name, value).logicalMatrix();
    },

    characterMatrix: function (name, value) {
      return RInput.new(name, value).characterMatrix();
    }
  }
};
}).call(this,require('_process'))

},{"./apis.json":2,"./lib/deprecated":3,"./lib/emitter":4,"./lib/encoder":5,"./lib/es":6,"./lib/lang":7,"./lib/logger":8,"./lib/queue":10,"./lib/rinput":11,"./lib/rinputs":12,"./lib/selfish":14,"./lib/utils":15,"_process":17,"d.js":18,"fs":16,"superagent":19}],2:[function(require,module,exports){
module.exports={
    "/r/user/login": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/logout": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/about": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/autosave": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/release": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/create": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/pool": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/recycle": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/ping": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/about": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/about/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/save": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/saveas": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/close": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/grant": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/import": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/export": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/code": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/script": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/interrupt": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/console": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/history": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/flush": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/get": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/workspace/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/push": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/save": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/store": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/load": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/directory/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/write": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/store": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/load": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/attach": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/detach": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/submit": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/schedule": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/query": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/cancel": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/create": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/rename": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/copy": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/move": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/execute": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/render": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/interrupt": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/shell/execute": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/archive": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/repository/directory/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/fetch": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/fetch": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/repository/file/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/write": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/diff": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/revert": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/grant": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/copy": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/move": {
        "method": "POST",
        "format": "json"
    },

    "/r/server/info": {
        "method": "GET",
        "format": "json"
    }
}

},{}],3:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var Lang = require('./lang'),
    Base = require('./selfish').Base,
    RInput = require('./rinput');

var Deprecated,
    emitter,
    _config = {},
    TOPLEVEL_ENTITIES = [
        'user',
        'project',
        'workspace',
        'execution',
        'directory',
        'repository',
        'packages'
    ];

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

var SessionManager = {
    ENDPOINT_WHITELIST: {
        login: '/r/user/login',
        logout: '/r/user/logout',
        projectCreate: '/r/project/create',
        projectClose: '/r/project/close',
        projectAboutUpdate: '/r/project/about/update',
        projectSave: '/r/project/save',
        projectSaveAs: '/r/project/saveas',
        // --- private APIS ---
        clientProjectSave: '/r/client/project/save',
        clientProjectClose: '/r/client/project/close'
    },

    session: {},

    config: {},

    setUnloadConfig: function(config) {
        config = config || {};
        this.config = {
            disableautosave: config.disableautosave || true,
            dropworkspace: config.dropworkspace || true,
            dropdirectory: config.dropdirectory || true,
            drophistory: config.drophistory || true,
            flushhistory: config.flushhistory || true
        };
    },
    setSession: function(session) {
        this.session = session;
    },
    setProject: function(project) {
        this.session.project = project;
    },
    clearSession: function() {
        this.session = {};
    },
    clearProject: function() {
        this.session.project = null;
    },
    unloadHandler: function() {
        try {
            var project = this.session.project;
            if (project) {

                var data = this._config;
                data.project = project.id;
                data.projectcookie = project.cookie;

                deployr.io('/r/project/close')
                    .data(data)
                    .sync()
                    .end();
            }
        } catch (e) {
            throw new Error(e);
        }
    }
};

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

function format(response, transEntity) {
    // -- transaction entity formats override global entity formats --  
    //var format = transEntity || _config.entity;
    var format = transEntity || globalConfig.entity;

    if (format) {
        var resObj = response.deployr.response,
            // -- top-level entities --
            entities = TOPLEVEL_ENTITIES;

        for (var index = 0; index < entities.length; index++) {
            var entity = entities[index];

            if (resObj[entity] && format[entity]) { // response entity hit
                // -- user-defined parse for top-level entity --                
                if (format[entity].parser) {
                    var formatScope = format[entity].scope || this;
                    resObj[entity] = format[entity].parser.call(formatScope, resObj[entity]);
                }
            }
        }
    }

    return response;
}

function changeEndpoint(response, endpoint, args) {

    var resObj = response.deployr.response,
        ENDPOINT = SessionManager.ENDPOINT_WHITELIST;

    switch (endpoint) {

        case ENDPOINT.login:

            SessionManager.setSession({
                httpcookie: resObj.httpcookie,
                user: resObj.user,
                limits: resObj.limits,
                project: null
            });
            break;

        case ENDPOINT.logout:
            SessionManager.clearSession();
            break;

        case ENDPOINT.projectClose:
        case ENDPOINT.clientProjectClose:
            SessionManager.clearProject();
            break;

        case ENDPOINT.projectCreate:
        case ENDPOINT.projectAboutUpdate:
        case ENDPOINT.projectSave:
        case ENDPOINT.projectSaveAs:
        case ENDPOINT.clientProjectSave:
            var project = resObj.project;
            SessionManager.setProject({
                id: project.project,
                cookie: project.cookie
            });
            break;

    } // end switch

    Deprecated.Event.fire('DeployR:endpointChange', {
        response: response,
        endpoint: endpoint,
        args: args
    });
}


function camelCase(input) {
    // convert format: '/r/user/login' --> 'userLogin'
    input = input.replace('\/r\/', '');
    return input.toLowerCase().replace(/\/(.)/g, function(match, segment) {
        return segment.toUpperCase();
    });
}

// turn the old deprecated inputs into new inputs
function normalizeInputs(inputs) {
    var rinputs = [];

    for (var i = 0; i < inputs.length; i++) {
        rinputs.push(inputs[i].normalize());
    }

    return rinputs;
}

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

/**
 * The Deprecated interface.
 */
var RData = Base.extend({
    initialize: function(type, rclass, rinput) {
        this.type = type;
        this.rclass = rclass;
        this.rinput = rinput;
    },

    getType: function() {
        return this.type;
    },

    getRClass: function() {
        return this.rclass;
    },

    getName: function() {
        return this.rinput.name;
    },

    getValue: function() {
        return this.rinput.value;
    },

    getLevels: function() {
        return this.rinput.levels;
    },

    getLabels: function() {
        return this.rinput.labels;
    },

    getOrdered: function() {
        return this.rinput.ordered;
    },

    normalize: function() {
        return this.rinput;
    }
});

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

function Emitter(obj) {  
  
}

function debug(msg) {  
}

Emitter.prototype = {

  events: {},

  scope: null,

  /**
   * Adds a listener.  Multiple can be added per name.  Aliased as `on`.
   *
   * @param {String} name The name of the event
   * @param {Function} handler A callback
   */
  on: function(name, handler) {
    if (name in this.events === false) { this.events[name] = []; }        

    this.events[name].push(handler);
    debug('Emitter.on("' + name + '")');

    return this;
  },

  /**
   * Triggers all matching listeners.
   *
   * @param {String} name The name of the event
   * @returns {Boolean} `true` if an event fired
   */
  emit: function(name) {
    if (name in this.events === false) { return this; }

    for (var i = 0; i < this.events[name].length; i++) {
      debug('Fired event: "' + name + '"');
      this.events[name][i].apply(this.scope || this, Array.prototype.slice.call(arguments, 1));       
    }

    return this;
  },

  /**
   * Removes all matching listeners.
   *
   * @param {String} name The name of the event
   * @returns {Boolean} `true` if an event was removed
   */
  removeAllListeners: function(name) {
    if (!name) {
      for (var e in this.events) {
        delete this.events[e];
      }
    } else {
      if (name in this.events === false) { return this; }
      delete this.events[name];        
    }

    return this;
  },

  removeListenerAt: function(name, index) {
    var array = this.events[name],
        rest = array.slice(index + 1);

    array.length = index;
    array.push.apply(array, rest);
    this.events[name] = array;
  },

  /**
   * Removes a listener based on the handler function.
   *
   * @param {String} name The name of the event
   * @param {Function} handler The handler function to remove
   * @returns {Boolean} `true` if an event was removed
   */
  off: function(name, handler) {
    if (name in this.events === false) { return this; }

    // remove all events handlers by this name
    if (!handler) {
      return this.removeAllListeners(name);
    } else { // remove all events handlers == 'handler' by this name
      for (var i = 0; i < this.events[name].length; i++) {
        if (this.events[name][i] == handler) {
          this.removeListenerAt(name, i);
          return this;
        }
      }
    } 

    return this;
  }
};


emitter = new Emitter();

/**
 * Provides simple adapter methods which wrap the raw <code>Revolution.DeployR.io(...)</code>
 * remote DeployR API AJAX transactions. These methods are an opt-in feature to
 * complement the low level DeployR IO communication.
 *
 * @class Revolution.DeployR.PublicAdapter
 * @extensionfor Revolution.DeployR
 */

Deprecated = {
    version: require('../package').version,

    Event: {
        on: function(type, fn, scope) {
            emitter.on(type, fn, scope);
        },

        detach: function(type, fn, obj) {
            emitter.off(type, fn);            
        }
    },

    RDataFactory: {
        createNumeric: function(name, value) {
            return RData.new('primitive', 'numeric', RInput.new(name, value).numeric());
        },

        createInteger: function(name, value) {
            return RData.new('primitive', 'integer', RInput.new(name, value).integer());
        },

        createBoolean: function(name, value) {
            return RData.new('primitive', 'numeric', RInput.new(name, value).logical());
        },

        createString: function(name, value) {
            return RData.new('primitive', 'character', RInput.new(name, value).character());
        },

        createDate: function(name, value) {
            return RData.new('date', 'Date', RInput.new(name, value).date());
        },

        createPOSIXDate: function(name, value) {
            return RData.new('date', 'POSIXct', RInput.new(name, value).posixct());
        },

        createNumericVector: function(name, value) {
            return RData.new('vector', 'numeric', RInput.new(name, value).numericVector());
        },

        createIntegerVector: function(name, value) {
            return RData.new('vector', 'integer', RInput.new(name, value).integerVector());
        },

        createBooleanVector: function(name, value) {
            return RData.new('vector', 'logical', RInput.new(name, value).logicalVector());
        },

        createStringVector: function(name, value) {
            return RData.new('vector', 'character', RInput.new(name, value).characterVector());
        },

        createDateVector: function(name, value) {
            return RData.new('type', 'Date', RInput.new(name, value).dateVector());
        },

        createPOSIXDateVector: function(name, value) {
            return RData.new('vector', 'POSIXct', RInput.new(name, value).posixctVector());
        },

        createList: function(name, value) {
            return RData.new('list', 'list', RInput.new(name, value).list());
        },

        createDataframe: function(name, value) {
            return RData.new('dataframe', 'data.frame', RInput.new(name, value).dataframe());
        },

        createFactor: function(name, value, ordered, levels, labels) {
            var opts = {
                levels: levels,
                labels: labels
            };

            if (ordered) {
                return RData.new('factor', 'factor', RInput.new(name, value, opts).ordered());
            } else {
                return RData.new('factor', 'factor', RInput.new(name, value, opts).factor());
            }
        },

        createNumericMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).numericMatrix());
        },

        createIntegerMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).integerMatrix());
        },

        createBooleanMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).logicalMatrix());
        },

        createStringMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).characterMatrix());
        }
    }, // RDataFactory

    DeployR: {

        init: function(config) {
            config = config || {};

            // --- Assert JSDeploy compatability against the connected DeployR version ---
            if (config.compatibility) {
                //compatibilityCheck();
            }

            // --- Event registration ---
            if (config.events) {
                var events = config.events;

                // -- Manage cleanup on browser close (close project, logout, ect...)--
                if (events.unload) {
                    SessionManager.setUnloadConfig(events.unload);
                    Deprecated.Event.on('deployR:unload', SessionManager.unloadHandler, SessionManager);
                }

                // -- IO Global Events --
                if (events.globalIO) {
                    var scope = events.globalIO.scope || window,
                        lifecycle = events.globalIO.lifecycle,
                        statusCode = events.globalIO.statusCode;

                    if (lifecycle) {
                        for (var eventName in lifecycle) {
                            Deprecated.Event.on('deployR-io:' + eventName, lifecycle[eventName], scope);
                        }
                    }

                    if (statusCode) {
                        for (var eventName in statusCode) {
                            Deprecated.Event.on('deployR-io:' + eventName, statusCode[eventName], scope);
                        }
                    }
                }
            }

            // New API
            deployr.configure({
                host: config.deployrURI,
                cors: config.deployrURI ? true : false,
                logging: config.logging,
                sticky: true
            });
        },

        io: function(api, config, cb) {
            if (console) {
                console.warn('"' + camelCase(api) + '()" API is now deprecated.');
            }

            cb = cb || {};
            config = config || {};

            var transaction = config.transaction || {},
                transArgs = transaction['arguments'],
                statusCode = transaction.statusCode || {},
                scope = cb.scope || window,
                routputs = config.robjects,
                rinputs = config.inputs; // config.inputs = R.DeployR.parseInputs(config.inputs);

            // --- omit deprecated props ---
            if (config.transaction) {
                delete config.transaction;
            }
            if (config.method) {
                delete config.method;
            }
            if (config.on) {
                delete config.on;
            }
            if (config.format) {
                delete config.format;
            }
            if (config.inputs) {
                delete config.inputs;
            }
            if (config.robjects) {
                delete config.robjects;
            }

            // --- make the new request ---
            var io = deployr.io(api)
                .data(config || {})
                .error(function(response) {
                    // global-failure
                    emitter.emit('deployR-io:failure', [response, api, transArgs]);

                    // transaction-failure
                    if (cb.failure) {
                        cb.failure.apply(scope, [response, api, transArgs]);                        
                    }

                    // global-statusError
                    emitter.emit(('deployR-io:' + code), [response, api, transArgs]);
                });

            if (rinputs) {
                io.rinputs(normalizeInputs(rinputs));
            }
            if (routputs) {
                io.routputs(routputs);
            }
            if (transaction.sync) {
                io.sync();
            }
            if (transaction.timeout) {
                io.timeout(transaction.timeout);
            }

            // --- Error status code --- //
            if (statusCode) {

                for (var eventName in statusCode) {                    
                    io.on('deployr-io:' + eventName, function(response) {
                        var cb = statusCode;
                        var statusText = response.deployr.response.error;
                        var status = response.deployr.response.errorCode;
                        cb[status].apply(scope, [response, status, statusText, api, transArgs]);
                    });
                }                

                // @@@@TODO @@@@@@
            }

            // global-start
            emitter.emit('deployR-io:start');

            /// transaction-start
            if (cb.start) {
                cb.start.apply(scope, [api, transArgs]); 
            }

            io.end(function(response) {
                // global-complete
                emitter.emit('deployR-io:complete');

                // transaction-complete
                if (cb.complete) {
                    cb.complete.apply(scope, [response, api, transArgs]); 
                }

                // entity manipulation of the response
                if (transaction.entity) {
                    response = format(response, transaction.entity);
                }

                // global-success
                emitter.emit('deployR-io:success', [response, api]);

                // transaction-success
                if (cb.success) {
                    cb.success.apply(scope, [response, api, transArgs]);                    
                }

                // global-end
                emitter.emit('deployR-io:end', [response, api]);

                // transaction-end
                if (cb.end) {
                    cb.end.apply(scope, [response, api, transArgs]); 
                }                
            });

            return io;
        },

        /**
         * Flattens a given <code>Revolution.RData</code> type into a JSON
         * string representing the expected DeployR input format.
         *
         * @method parseInputs
         * @public
         * @param {Array} rdata An Array of RData Objects to be flattened.
         * @return {String} The flattend RData JSON string representing the
         * DeployR input format.
         */
        parseInputs: function(rdata) {
            return rdata;
        },

        /////////////////////////////////////
        // Project Workspace APIs
        //////////////////////////////////////

        /**
         * This call lists the objects in the workspace for the project indicated.
         *
         * @method projectWorkspaceList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>root</dt>
         *    <dd>(optional) specifies object graph root</dd>
         *
         *    <dt>clazz</dt>
         *    <dd>(optional) specifies R class based filter</dd>
         *
         *    <dt>filter</dt>
         *    <dd>(optional) specifies R object name based filter</dd>
         *
         *    <dt>restrict</dt>
         *    <dd>
         *       (optional) if <code>true</code, limits returned objects to object
         *       types with supported RevoDeployR-encoding
         *    </dd>
         *
         *    <dt>pagesize</dt>
         *    <dd>
         *       (optional) specifies the page size for paging results in response
         *       markup
         *    </dd>
         *
         *    <dt>pageoffset</dt>
         *    <dd>
         *       (optional) specifies the page offset for paging results in response
         *       markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceList: function(config, callback) {
            return this.io('/r/project/workspace/list', config, callback);
        },

        /**
         * This call retrieves RevoDeployR-encoded objects from the workspace for the
         * specified project.
         *
         * @method projectWorkspaceGet
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of object names</dd>
         *
         *    <dt>root</dt>
         *    <dd>optional) specifies object graph root</dd>
         *
         *    <dt>start</dt>
         *    <dd>optional) specifies the offset into object data</dd>
         *
         *    <dt>length</dt>
         *    <dd>optional) specifies the segment of object data to retrieve</dd>
         *
         *      <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies a custom value for Infinity appearing in R
         *       object data returned on the call, otherwise Infinity is represented
         *       by 0x7ff0000000000000L
         *    </dd>
         *
         *      <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on the call, otherwise NaN is represented by null
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if <code>true</code>, data.frame primitives are encoded
         *       vectors in R object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceGet: function(config, callback) {
            return this.io('/r/project/workspace/get', config, callback);
        },

        /**
         * This call uploads a binary object from file into the workspace for the
         * specified project.
         *
         * @method projectWorkspaceUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the name of the object file</dd>
         *
         *    <dt>file</dt>
         *    <dd>file content</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/workspace/upload', config, callback);
        },

        /**
         * This call transfers a binary object from a URL into the workspace for the
         * specified project.
         *
         * @method projectWorkspaceTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the name of the object file found on the URL</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies the URL</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceTransfer: function(config, callback) {
            return this.io('/r/project/workspace/transfer', config, callback);
        },

        /**
         * This call pushes a RevoDeployR-encoded object into the workspace for the
         * specified project.
         *
         * @method projectWorkspacePush
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded object inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspacePush: function(config, callback) {            
            return this.io('/r/project/workspace/push', config, callback);
        },

        /**
         * This call saves the workspace to a file in the working directory for the
         * specified project.
         *
         * If the name parameter is specified on the call then only the named object
         * is saved as a binary object file to the working directory. Otherwise the
         * entire contents of the workspace are saved.
         *
         * @method projectWorkspaceSave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>(optional) specifies a named object for saving</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) if true, the new file will be renamed to avoid
         *       overwriting
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceSave: function(config, callback) {            
            return this.io('/r/project/workspace/save', config, callback);
        },

        /**
         * This call stores the workspace as a binary object to the repository.
         *
         * If the name parameter is specified on the call, then only the named object
         * is stored as a binary object in the repository. Otherwise the entire
         * contents of the workspace are stored.
         *
         * @method projectWorkspaceStore
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *      <dt>name</dt>
         *      <dd>(optional) specifies a named object for storing</dd>
         *
         *      <dt>descr</dt>
         *      <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) comma-separated list of role names, which makes the file
         *       visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the file will be shared, which
         *       makes the file visible to authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the file will be published, which
         *       makes the file visible to authenticated and anonymous users
         *    </dd>
         *
         *      <dt>newversion</dt>
         *      <dd>
         *       (optional) if <code>true</code>, the new file will be renamed to
         *       avoid overwriting
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceStore: function(config, callback) {
            return this.io('/r/project/workspace/store', config, callback);
        },

        /**
         * This call loads a binary object from a file in the repository into the
         * workspace for the specified project.
         *
         * @method projectWorkspaceLoad
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>repo</dt>
         *    <dd>specifies the repository name</dd>
         *
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the repository file author</dd>
         *
         *      <dt>version</dt>
         *      <dd>(optional) specifies the repository file version</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceLoad: function(config, callback) {
            return this.io('/r/project/workspace/load', config, callback);
        },

        /**
         * This call deletes an object from the workspace for the specified project.
         *
         * @method projectWorkspaceDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the object name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceDelete: function(config, callback) {            
            return this.io('/r/project/workspace/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Management APIs
        /////////////////////////////////////

        /**
         * This call creates a new project for the currently authenticated user.
         * If the projectname parameter is specified on the call, then the newly
         * created project will be a persistent project . If the projectname parameter
         * is omitted on the call, then the newly created project will be a temporary
         * project. The projectdescr parameter is ignored if the projectname parameter
         * is omitted.
         *
         * The blackbox parameter ensures that calls on the temporary project are
         * limited to the Blackbox API Controls .
         *
         * Using the inputs , preloadfile , preloadobject and adopt parameters the
         * project can be pre-initialized with data in the workspace and/or working
         * directory.
         *
         * The inputs parameter allows the caller to pass RevoDeployR-encoded R object
         * values as inputs. These inputs are turned into R objects in the workspace
         * of the new R session before the call returns.
         *
         * The preloadfile parameters allow the caller to load one or more files from
         * the repository into the working directory of the new R session before the
         * call returns.
         *
         * The preloadobject parameters allow the caller to load one or more binary R
         * objects (.rData) from the repository into the workspace of the new R
         * session before the call returns.
         *
         * The adopt parameters allow the caller to load a pre-existing project
         * workspace, project working directory and/or project package dependencies
         * into the new R session before the call returns.
         *
         * @method projectCreate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>projectname</dt>
         *    <dd>(optional) names a new persistent project</dd>
         *
         *    <dt>projectdescr</dt>
         *    <dd>(optional) describes a new persistent project</dd>
         *
         *    <dt>blackbox</dt>
         *    <dd>
         *       (optional) when enabled, a temporary project is limited to blackbox
         *       API controls
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>
         *       (optional) comma-separated list of authors,
         *       author-per-preloadfilename
         *    </dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>
         *       (optional) comma-separated list of versions,
         *       version-per-preloadfilename
         *    </dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>
         *       (optional) comma-separated list of repository object (.rData)
         *       filenames
         *    </dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>
         *       (optional) comma-separated list of authors,
         *       author-per-preloadobjectname
         *    </dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>
         *       (optional) comma-separated list of versions,
         *       version-per-object-preloadobjectname
         *    </dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>
         *       (optional) identifies the project whose workspace is to be adopted
         *    </dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>
         *       (optional) identifies the project whose directory is to be adopted
         *    </dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>
         *       (optional) identifies the project whose package dependencies are to
         *       be adopted
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectCreate: function(config, callback) {
            return this.io('/r/project/create', config, callback);            
        },

        /**
         * This call creates a pool of temporary projects for the currently
         * authenticated user. The caller can specify their preferred number of
         * projects to create using the poolsize parameter. RevoDeployR will attempt
         * to create up to poolsize number of projects. However, standard com
         * policy contraints apply to individual users and on the grid so there is no
         * guarantee that poolsize projects will be returned. If the number of
         * projects returned on this call is less than poolsize the caller can inspect
         * the error and errorCode properties in the response markup to determine
         * exactly why their pool size was limited.
         *
         * The blackbox parameter ensures that calls on each project in the pool are
         * limited to the Blackbox API Controls .
         *
         * Using the inputs, preloadfile, preloadobject and adopt parameters each
         * project in the pool can be pre-initialized with data in the workspace
         * and/or working directory.
         *
         * The inputs parameter allows the caller to pass RevoDeployR-encoded R object
         * values as inputs. These inputs are turned into R objects in the workspace
         * of the new R session before the call returns.
         *
         * The preloadfile parameters allow the caller to load one or more files from
         * the repository into the working directory of the new R session before the
         * call returns.
         *
         * The preloadobject parameters allow the caller to load one or more binary R
         * objects (.rData) from the repository into the workspace of the new R
         * session before the call returns.
         *
         * The adopt parameters allow the caller to load a pre-existing project
         * workspace, project working directory and/or project package dependencies
         * into the new R session before the call returns.
         *
         * @method projectPool
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>poolsize</dt>
         *    <dd>the preferred size of the pool of temporary projects</dd>
         *    <dt>blackbox</dd>
         *    <dd>(optional) when enabled, each temporary project in the pool is limited to blackbox API controls</dd>
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded inputs</dd>
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPool: function(config, callback) {
            return this.io('/r/project/pool', config, callback);
        },

        /**
         * This call recycles the R session associated with the project by deleting
         * all R objects from the workspace and all files from the working directory.
         *
         * Recycling a project is a convenient and efficient alternative to starting
         * over by closing an existing project and then creating a new project.
         *
         * @method projectRecycle
         * @static
         * @param {Object} config the call configuration. The configuration object
         * supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *    <dt>preserveworkspace</dt>
         *    <dd>(optional) if true, the objects in the workspace are preserved on recycle</dd>
         *    <dt>preservedirectory</dt>
         *    <dd>(optional) if true, the files in the working directory are preserved on recycle</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectRecycle: function(config, callback) {
            return this.io('/r/project/recycle', config, callback);
        },

        /**
         * This call lists all projects owned by the currently authenticated user
         * and/or all projects shared by other users.
         *
         * Shared projects are available as read-only projects to the caller. The
         * shared or private nature of a project can be controlled using the
         * <code>/r/project/about/update</code> call
         * <a href="#method_projectAboutUpdate">projectAboutUpdate</a>.
         *
         * @method projectList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>sharedprojectsalso</dt>
         *    <dd>
         *       (optional) when true, the project response list contains the caller's
         *       projects plus projects shared by other users
         *    </dd>
         *
         *    <dt>sharedprojectsonly</dt>
         *    <dd>
         *       (optional) when true, the project response list contains only
         *       projects shared by other users and not the users's own projects
         *    </dd>
         *
         *    <dt>isordered</dt>
         *    <dd>
         *       (optional) when true, the project response list is ordered in a
         *       most-recently-modified first order. Otherwise the list is ordered
         *       chronologically by creation date
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectList: function(config, callback) {
            return this.io('/r/project/list', config, callback);
        },
        /**
         * This call pings the specified project to determine if the project is live
         * on the RevoDeployR grid.
         *
         * @method projectPing
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *      <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPing: function(config, callback) {
            return this.io('/r/project/ping', config, callback);
        },

        /**
         * This call retrieves a set of properties that describe the specified
         * project.
         *
         * @method projectAbout
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectAbout: function(config, callback) {
            return this.io('/r/project/about', config, callback);
        },

        /**
         * This call updates a set of properties that describe the specified project.
         *
         * @method projectAboutUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, specifies that the project is a
         *       shared project
         *    </dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>
         *       (optional) specifies a client-application specific project cookie
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectAboutUpdate: function(config, callback) {
            return this.io('/r/project/about/update', config, callback);
        },

        /**
         * This call saves the persistent state of the project indicated.
         *
         * The set of drop parameters allows the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when saving. The flushhistory parameter allows the caller to preserve
         * the project execution history itself while destroying all generated console
         * output and results associated with that history.
         *
         * @method projectSave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>(optional) specifies the project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>(optional) if true, specifies the project is a shared project</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific project cookie</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on save</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on save</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on save</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on save</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectSave: function(config, callback) {
            return this.io('/r/project/save', config, callback);
        },

        /**
         * This call saves the persistent state of the specified project to a new
         * persistent project.
         *
         * The set of drop parameters allows the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when saving to the new project. The flushhistory parameter allows the
         * caller to preserve the project execution history itself for the new project
         * while dropping all generated console output and results associated with the
         * original history.
         *
         * @method projectSaveas
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the new project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the new project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the new project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>(optional) if true, specifies the new project is a shared project</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific cookie for the new project</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the original project's workspace is dropped when saving to the new project</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped when saving to the new project</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped when saving to the new project</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed when saving to the new project</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectSaveas: function(config, callback) {
            return this.io('/r/project/saveas', config, callback);
        },

        /**
         * This call closes the project indicated.
         *
         * Closing a live project releases all resources associated with the project
         * on the RevoDeployR grid. If the specified project is a persistent project
         * then the default autosave semantics will cause the project to be saved
         * automatically. The caller can override that default behavior using the
         * disableautosave parameter.
         *
         * The set of drop parameters allow the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history, of the project
         * state when closing. The flushhistory parameter allows the caller to
         * preserve the project execution history itself while destroying all
         * generated console output and results associated with that history.
         *
         * @method projectClose
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>disableautosave</dt>
         *    <dd>(optional) if true, the default autosave semantics for persistent projects are disabled</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific project cookie</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on close</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on close</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on close</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on close</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectClose: function(config, callback) {
            return this.io('/r/project/close', config, callback);
        },

        /**
         * This call grants authorship of the specified project to other users.
         *
         * @method projectGrant
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>newauthor</dt>
         *    <dd>
         *       specifies a comma-separated list of usernames indicating the new
         *       owners
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectGrant: function(config, callback) {
            return this.io('/r/project/grant', config, callback);
        },

        /**
         * This call imports the specified project archive as a new persistent
         * project.
         *
         * @method projectImport
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>specifies the name of the project archive file</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description for the newly imported project
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectImport: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/import', config, callback);
        },
        /**
         * This call exports a compressed archive file for the specified project.
         *
         * The set of drop parameters allow the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when generating the archive. The flushhistory parameter allows the
         * caller to preserve the project execution history itself while excluding all
         * generated console output and results associated with that history.
         *
         * @method projectExport
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on export</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on export</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on export</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on export</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExport: function(config, callback) {
            return this.io('/r/project/export', config, callback);
        },

        /**
         * This call deletes the specified project.
         * Deleting a project is a permanent operation that cannot be undone or
         * recovered.
         *
         * @method projectDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDelete: function(config, callback) {
            return this.io('/r/project/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Execution APIs
        /////////////////////////////////////

        /**
         * This call executes a block of R code on the R session identified by the
         * project parameter.
         *
         * Please note the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         * </ol>
         *
         *  <strong>Some key data indicated in the response markup on this call:</strong>
         *
         * <ol>
         *    <li>code - indicates the code that has been executed</li>
         *    <li>
         *       console - indicates the console output resulting from the code
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>
         *       interrupted - indicates the interrupted status of execution
         *    </li>
         *    <li>
         *       error - on failure, indicates the reason for failure
         *    </li>
         *    <li>
         *       errorCode - on failure, indicates the error code for failure
         *    </li>
         * </ol>
         *
         * @method projectExecuteCode
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>code</dt>
         *    <dd>specifies the block of R code</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>(optional) if true console output is not returned in the response markup</dd>
         *
         *      <dt>graphics</dt>
         *      <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *      <dt>graphicswidth</dt>
         *      <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *      <dt>graphicsheight</dt>
         *      <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *      <dt>robjects</dt>
         *      <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *      <dt>storefile</dt>
         *      <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *      <dt>storeobject</dt>
         *      <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *      <dt>storeworkspace</dt>
         *      <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *      <dt>storenewversion</dt>
         *      <dd>(optional) if <code>true</code>, ensures each file stored in
         *    repository results in new version being created if needed</dd>
         *
         *      <dt>storepublic</dt>
         *      <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *      <dt>infinity</dt>
         *      <dd>(optional) specifies custom value for Infinity appearing in R object
         *    data returned on call, otherwise Infinity is represented by <code>0x7ff0000000000000L</code>
         *    </dd>
         *
         *      <dt>nan</dt>
         *      <dd>(optional) specifies custom value for NaN appearing in R object data
         *    returned on call, otherwise NaN is represented by <code>null</code></dd>
         *
         *      <dt>encodeDataFramePrimitiveAsVector</dt>
         *      <dd>(optional) if <code>true</code>, data.frame primitives are encoded vectors in R object data returned on call</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteCode: function(config, callback) {           
            return this.io('/r/project/execute/code', config, callback);
        },
        /**
         * This call executes executes repository-managed scripts or external scripts
         * on the R session identified by the project parameter.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename, author and optionally version. To execute
         * a chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL or
         * file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of values
         * on the externalsource parameter. Note, to execute an external script the
         * caller must have POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         * </ol>
         *
         * <strong>
         *    Some of the key data indicated in the response markup on this call
         *    include:
         * </strong>
         *
         * <ol>
         *    <li>
         *       console - indicates the console output resulting from the script
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects - indicates the list of R objects returned from the workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>interrupted - indicates the interrupted status of execution</li>
         *    <li>error - on failure, indicates the reason for failure</li>
         *    <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         *
         * @method projectExecuteScript
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-filename</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-filename</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dd>adoptpackages</dd>
         *    <dt>(optional) identifies project from which package dependencies are to be adopted</dt>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>(optional) specifies custom value for Infinity appearing in R object data returned on call, otherwise Infinity is represented by <code>0x7ff0000000000000L</code></dd>
         *
         *    <dt>nan</dt>
         *    <dd>(optional) specifies custom value for NaN appearing in R object data returned on call, otherwise NaN is represented by <code>null</code></dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>(optional) if <code>true</code>, data.frame primitives are encoded vectors in R object data returned on call</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteScript: function(config, callback) {            
            return this.io('/r/project/execute/script', config, callback);
        },

        /**
         * This call interrupts the current execution on specified project.
         *
         * @method projectExecuteInterrupt
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *      <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteInterrupt: function(config, callback) {
            return this.io('/r/project/execute/interrupt', config, callback);
        },

        /**
         * This call retrieves the R console output for the latest execution on
         * specified project.
         *
         * @method projectExecuteConsole
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteConsole: function(config, callback) {
            return this.io('/r/project/execute/console', config, callback);
        },

        /**
         * This call retrieves the execution history for the specified project.
         *
         * Some of the key data indicated for each history item in the response markup
         * on this call include:
         *
         * <ol>
         *  <li>code - indicates the code that has been executed</li>
         *  <li>console - indicates the console output resulting from the code execution</li>
         *  <li>resultsGenerated - indicates the number of generated results on the execution</li>
         *  <li>resultsAvailable - indicates the number of generated results still stored on the execution</li>
         *  <li>resourceUsage - indicates the current storage byte count for results on the execution</li>
         *  <li>execution - indicates the execution identifier, which can then be used on /r/project/execution/result calls to retrieve or manage results</li>
         *  <li>interrupted - indicates the interrupted status of execution</li>
         *  <li>error - on failure, indicates the reason for failure</li>
         *  <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         * @method projectExecuteHistory
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filterdepth</dt>
         *    <dd>specifies the max number of executions to be returned in the history</dd>
         *
         *    <dt>execution</dt>
         *    <dd>(optional) specifies the comma-separated list of execution identifiers on which to filter history</dd>
         *
         *    <dt>filtertag</dt>
         *    <dd>(optional) specifies the execution tag on which to filter history</dd>
         *
         *    <dt>reversed</dt>
         *    <dd>
         *       (optional) if true, the execution history is returned in a
         *       reverse-chronological order
         *    </dt>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteHistory: function(config, callback) {
            return this.io('/r/project/execute/history', config, callback);
        },

        /**
         * This call flushes executions in the history on the specified project.
         * Flushing an execution deletes both the R console output and the generated
         * results associated with that execution but does not remove the execution
         * itself from the history. By omitting the execution parameter, the caller
         * can flush every execution in the history on the specified project.
         *
         * This flushing facility is provided to help users manage the levels of
         * resource usage associated with their persistent projects.
         *
         * @method projectExecuteFlush
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>(optional) comma-separated list of execution identifiers</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteFlush: function(config, callback) {
            return this.io('/r/project/execute/flush', config, callback);
        },

        /**
         * This call lists the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can limit the
         * response to those results found on a specific execution or set of
         * executions.
         *
         * <blockquote>
         *    Important! The URLs indicated in the response markup on this call remain
         *    valid for as long as the results remain part of the project.
         * </blockquote>
         *
         * @method projectExecuteResultList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of execution identifiers
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultList: function(config, callback) {
            return this.io('/r/project/execute/result/list', config, callback);
        },

        /**
         * This call downloads the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can download
         * only results on the specified executions. By specifying a value for the
         * filename parameter the caller can download a specific result on the
         * specified execution.
         *
         * @method projectExecuteResultDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of execution identifiers
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies a result file name</dd>
         *
         *    <dt>inline</dt>
         *    <dd>
         *       (optional) if true, the Content-Disposition response header
         *       indicating attachment is omitted
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultDownload: function(config, callback) {
            return this.io('/r/project/execute/result/download', config, callback);
        },

        /**
         * This call deletes the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can delete
         * only those results on the specified executions. By specifying a value for
         * the filename parameter the caller can delete a specific result on the
         * specified executions.
         *
         * @method projectExecuteResultDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *   <dt>project</dt>
         *   <dd>specifies the project identifier</dd>
         *
         *   <dt>execution</dt>
         *   <dd>
         *      (optional) specifies a comma-separated list of execution identifiers
         *   </dd>
         *
         *   <dt>filename</dt>
         *   <dd>(optional) specifies a result file name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultDelete: function(config, callback) {
            return this.io('/r/project/execute/result/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Directory APIs
        /////////////////////////////////////

        /**
         * This call lists working directory files for the specified project.
         *
         * The filter parameter can be specified on the call to filter, the types of
         * files returned according to their category. The following filter values are
         * supported:
         *
         * <ol>
         *    <li>plot - files ending with a .png, .svg or .jpg extension</li>
         *    <li>script - files ending with a .R or .r extension</li>
         *    <li>R - files ending with a .rData or .rdata extension</li>
         *    <li>data - files ending with a .csv or .xls extension</li>
         *    <li>text - files ending with a .txt extension</li>
         * </ol>
         *
         * @method projectDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filter</dt>
         *    <dd>(optional) specifies the filter by category value</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryList: function(config, callback) {
            return this.io('/r/project/directory/list', config, callback);
        },

        /**
         * This call uploads a file into the working directory for the specified
         * project.
         *
         * @method projectDirectoryUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/directory/upload', config, callback);
        },

        /**
         * This call transfers a file from a URL into the working directory for the
         * specified project.
         *
         * @method projectDirectoryTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies the URL for the file</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryTransfer: function(config, callback) {
            return this.io('/r/project/directory/transfer', config, callback);
        },

        /**
         * This call writes a text file into the working directory for the specified
         * project.
         *
         * @method projectDirectoryWrite
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>text</dt>
         *    <dd>specifies the text content for the file</dd>
         *
         *    <dt>delimiter</dt>
         *    <dd>
         *       (optional) specifies a custom delimiter for text when writing
         *       multiple files, defaults to #,#
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryWrite: function(config, callback) {
            return this.io('/r/project/directory/write', config, callback);
        },

        /** 
         * This call updates a file name and/or description in the working directory
         * for the specified project.
         *
         * @method projectDirectoryUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>rename</dt>
         *    <dd>(optional) specifies the new name for the file</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifices the new description for the file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryUpdate: function(config, callback) {
            return this.io('/r/project/directory/update', config, callback);
        },

        /**
         * This call stores a file from the working directory to the repository.
         *
         * @method projectDirectoryStore
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies the file for storing</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *        (optional) comma-separated list of role names, which makes the file
         *        visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if true, the file will be shared , which makes the file
         *       visible to authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if true, the file will be published , which makes the
         *       file visible to authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if true, the new file will be renamed to avoid overwriting
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryStore: function(config, callback) {
            return this.io('/r/project/directory/store', config, callback);
        },

        /**
         * This call loads a file from the repository into the working directory for
         * the specified project.
         *
         * @method projectDirectoryLoad
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the author name</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) specifies the repository file version</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryLoad: function(config, callback) {
            return this.io('/r/project/directory/load', config, callback);
        },

        /**
         * This call downloads the working directory contents for the specified
         * project.
         *
         * By specifying a single value for the filename parameter, the caller can
         * download a specific file. By specifying multiple values for the filename
         * parameter, the caller can download a zip archive of those files. By
         * omitting the filename parameter, then the caller can download a zip archive
         * with all of the files in the working directory.
         *
         * @method projectDirectoryDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies comma-separated file names for download</dd>
         *
         *    <dt>inline</dt>
         *    <dd>
         *       (optional) if true, the Content-Disposition response header
         *       indicating attachment is omitted
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryDownload: function(config, callback) {
            return this.io('/r/project/directory/download', config, callback);
        },

        /**
         * This call deletes files from the working directory for the specified
         * project.
         *
         * @method projectDirectoryDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies a comma-separated list of file names for deletion</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryDelete: function(config, callback) {
            return this.io('/r/project/directory/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Package APIs
        /////////////////////////////////////

        /**
         * This call lists R package dependencies for the specified project.
         *
         * @method projectPackageList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>installed</dt>
         *    <dd>
         *       if true, response lists all packages installed in project environment
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageList: function(config, callback) {
            return this.io('/r/project/package/list', config, callback);
        },

        /**
         * This call attaches R package dependencies for the specified project.
         *
         * @method projectPackageAttach
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of R package names to attach</dd>
         *
         *    <dt>repo</dt>
         *    <dd>(optional) specifies R repository location for named packages</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageAttach: function(config, callback) {
            return this.io('/r/project/package/attach', config, callback);
        },

        /**
         * This call detaches R package dependencies for the specified project.
         *
         * @method projectPackageDetach
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of R package names to detach</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageDetach: function(config, callback) {
            return this.io('/r/project/package/detach', config, callback);
        },

        /////////////////////////////////////
        // User APIs
        /////////////////////////////////////

        /**
         * This call signs the user in by authenticating the credentials with the
         * RevoDeployR server.
         *
         * @method userLogin
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>username</dt>
         *    <dd>specifies the username</dd>
         *
         *    <dt>password</dt>
         *    <dd>specifies the password</dd>
         *
         *    <dt>disableautosave</dt>
         *    <dd>
         *       (optional) when true, disables autosave semantics for persistent
         *       projects
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userLogin: function(config, callback) {
            return this.io('/r/user/login', config, callback);            
        },

        /**
         * This call signs out the currently authenticated user.
         *
         * @method userLogout
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>usercookie</dt>
         *    <dd>
         *       (optional) when specified, value sets application-specific persistent
         *       user cookie, which is retrievable on response to
         *       <a href="#method_userLogin">userLogin</a> call.
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userLogout: function(config, callback) {
            return this.io('/r/user/logout', config, callback);            
        },

        /**
         * This call retrieves details about the currently authenticated user. The
         * details returned in the response markup on this call are exactly the same
         * details as those returned in the response markup on the
         * <a href="#method_userLogin">userLogin</a> call.
         *
         * @method userAbout
         * @static
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userAbout: function(callback) {            
            return this.io('/r/user/about', {}, callback);
        },

        /**
         * This call enables or disables the autosave semantics on persistent projects
         * for the duration of the current users HTTP session. By default, all live
         * persistent projects are autosaved under the following conditions:
         *
         * <ul>
         *    <li>
         *       When a user closes a project using the
         *       <a href="#method_projectClose">projectClose</a> call.
         *    </li>
         *    <li>
         *       When a user signs-out using the
         *       <a href="#method_userLogout">userLogout</a> call.
         *    </li>
         *    <li>
         *       When a user is automatically signed-out by the system after a
         *       prolonged period of inactivity.
         *    </li>
         * </ul>
         *
         * When the autosave feature is disabled a user must make an explicit call on
         * <a href="#method_projectSave">projectSave</a> in order to save a project.
         *
         * @method userAutosave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>enable</dt>
         *    <dd>(optional) toggles autosave semantics for persistent projects.</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userAutosave: function(config, callback) {
            return this.io('/r/user/autosave', config, callback);
        },

        /////////////////////////////////////
        // Repository Script APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed scripts.
         *
         * This call is available to authenticated and anonymous users. However, if
         * the caller is an anonymous user then only published scripts will be
         * returned in the response markup.
         *
         * @method repositoryScriptList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) when specified, call returns list of script versions for
         *       filename
         *   </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files that are restricted but
         *       visible or shared by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, scripts published by other users are
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptList: function(callback) {            
            return this.io('/r/repository/script/list', {}, callback);
        },
        /**
         * This call executes repository-managed scripts or external scripts on an
         * Anonymous Project.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename, author and optionally version. To execute a
         * chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL
         * or file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of
         * values on the externalsource parameter. Note, to execute an external script
         * the caller must have POWER_USER privileges so this feature is not available
         * to anonymous users on this call.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The infinity , nan and encodeDataFramePrimitiveAsVector parameters
         *       allow the caller to control how RevoDeployR-encoded R object data is
         *       encoded in the response markkup.
         *    </li>
         * </ol>
         *
         *  <strong>
         *     Some key data indicated in the response markup on this call:
         *  </strong>
         *
         *  <ol>
         *    <li>
         *       console - indicates the console output resulting from the code
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>interrupted - indicates the interrupted status of execution</li>
         *    <li>error - on failure, indicates the reason for failure</li>
         *    <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         * @method repositoryScriptExecute
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-filename</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-filename</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *    <dt>blackbox</dt>
         *      <dd>
         *       (optional) if true, the execution will occur on the HTTP blackbox
         *       project for the current HTTP session
         *    </dd>
         *
         *      <dt>recycle</dt>
         *      <dd>
         *       (optional) if true, recycles the R session associated with the HTTP
         *       blackbox project on the current HTTP session
         *    </dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) </dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies custom value for Infinity appearing in R object
         *       data returned on call, otherwise Infinity is represented by
         *       <code>0x7ff0000000000000L</code>
         *    </dd>
         *
         *    <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on call, otherwise NaN is represented by <code>null</code>
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if <code>true</code>, data.frame primitives are encoded
         *       vectors in R object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptExecute: function(config, callback) {            
            return this.io('/r/repository/script/execute', config, callback);
        },


        /**
         * This call executes repository-managed scripts or external scripts on an
         * Anonymous Project and returns a simple HTML page that displays the results
         * generated on the execution.
         *
         * On a successful execution, the HTML page will display the following data
         * when available on the response:
         *
         * <ul>
         *    <li>R console output</li>
         *    <li>R workspace object data</li>
         *    <li>R generated plots</li>
         *    <li>Links to R working directory artifacts</li>
         *    <li>Links to Repository stored artifacts</li>
         * </ul>
         *
         * On a failed execution, the HTML page will display an error message
         * indicating the cause of the failure and when available, R console output.
         *
         * The API call makes it very simple to integrate outputs generated by
         * RevoDeployR-managed R scripts into any third-party application. It can also
         * be used as a very simple test and debugging aid for R script and
         * application developers.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename , author and optionally version . To execute
         * a chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL or
         * file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of values
         * on the externalsource parameter. Note, to execute an external script the
         * caller must have POWER_USER privileges so this feature is not available to
         * anonymous users on this call.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * Please note the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The csvinputs parameter allows the caller to pass R object primitive
         *       values as comma-separated name/value pairs. These inputs are turned
         *       into R objects in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller to specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller to specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *      The infinity , nan and encodeDataFramePrimitiveAsVector parameters
         *      allow the caller to control how RevoDeployR-encoded R object data is
         *      encoded in the response markkup.
         *    </li>
         * </ol>
         *
         * <strong>Some key data indicated in the response markup on this call:</strong>
         *
         * <ol>
         *    <li>
         *       console - indicates the R console output resulting from the execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>
         *       interrupted - indicates the interrupted status of execution
         *    </li>
         *    <li>
         *       error - on failure, indicates the reason for failure
         *    </li>
         *    <li>
         *       errorCode - on failure, indicates the error code for failure
         *    </li>
         * </ol>
         *
         * @method repositoryScriptRender
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed script
         *       filenames
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>
         *       (optional) comma-separated list of authors, one author per filename
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) comma-separated list of versions, one version per filename
         *    </dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>
         *       (optional) comma-separated list of URLs or file paths to external
         *       scripts
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>blackbox</dt>
         *      <dd>(optional) if true, the execution will occur on the HTTP blackbox project for the current HTTP session</dd>
         *
         *      <dt>recycle</dt>
         *      <dd>(optional) if true, recycles the R session associated with the HTTP blackbox project on the current HTTP session</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>(optional) if true console output is not returned in the response markup</dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies custom value for Infinity appearing in R object
         *       data returned on call, otherwise Infinity is represented by
         *       0x7ff0000000000000L
         *    </dd>
         *
         *    <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on call, otherwise NaN is represented by null
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if true, data.frame primitives are encoded vectors in R
         *       object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptRender: function(config, callback) {
            return this.io('/r/repository/script/render', config, callback);
        },

        /**
         * This call interrupts the current execution on the HTTP Blackbox project
         * associated with the current HTTP session.
         *
         * @method repositoryScriptInterrupt
         * @static
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptInterrupt: function(callback) {            
            return this.io('/r/repository/script/interrupt', config, callback);
        },

        /////////////////////////////////////
        // Repository File APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed files.
         *
         * @method repositoryFiletList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) when specified, call returns list of script versions for
         *       filename
         *   </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files that are restricted but
         *       visible or shared by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, scripts published by other users are
         *       included in the response markup
         *    </dd>
         *
         *    <dt>categoryFilter</dt>
         *    <dd>
         *       (optional) when specified list of files in response markup is limited
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileList: function(config, callback) {            
            return this.io('/r/repository/file/list', config, callback);
        },
        /**
         * This call uploads a file from the user's computer to the repository.
         *
         * @method repositoryFileUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/repository/file/upload', config, callback);
        },

        /**
         * This call transfers a file from a URL to the repository.
         *
         * @method repositoryFileTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies a url of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileTransfer: function(config, callback) {
            return this.io('/r/repository/file/transfer', config, callback);
        },

        /**
         * This call writes a text file to the repository.
         *
         * @method repositoryFileWrite
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>text</dt>
         *    <dd>specifies the text content of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description to associate with the uploaded
         *       file
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) (optional) comma-separated list of role names, which makes
         *       the file visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>share</dt>
         *    <dd>
         *       (optional) if true, ile is shared and visible to authenticated users
         *    </dd>
         *
         *    <dt>publish</dt>
         *    <dd>
         *       (optional) if true, the file will be published which makes the file
         *       visible to authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if true, the repository will create new version rather
         *       than overwrite
         *    </dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>
         *       (optional) if newversion is true, message to associate with new
         *       version
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>
         *       (optional) specifies the inputs property on a repository-managed
         *       script
         *    </dd>
         *
         *    <dt>outputs</dt>
         *    <dd>
         *       (optional) specifies the outputs property on a repository-managed
         *       script
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileWrite: function(config, callback) {
            return this.io('/r/repository/file/write', config, callback);
        },

        /**
         * This call updates the properties on a repository-managed file.
         *
         * @method repositoryFileUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) (optional) comma-separated list of role names, which makes
         *       the file visible to authenticated users with these roles
         *    </dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileUpdate: function(config, callback) {
            return this.io('/r/repository/file/update', config, callback);
        },

        /**
         * This call reverts the current working copy of a file to a specific version
         * found in the files version history.
         *
         * @method repositoryFileRevert
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>version</dt>
         *    <dd>specifies the repository file version to revert into the current working copy</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileRevert: function(config, callback) {
            return this.io('/r/repository/file/revert', config, callback);
        },

        /**
         * This call generates a diff between the current working copy of a file and
         * a specific version found in the files version history.
         *
         * @method repositoryFileDiff
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the repository file author</dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       specifies the repository file version to diff against the current
         *       working copy
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDiff: function(config, callback) {
            return this.io('/r/repository/file/diff', config, callback);
        },

        /**
         * This call grants ownership rights on a file to one or more authenticated
         * users.
         *
         * Note, unlike most repository APIs that require both filename and author
         * parameters, there is no explicit author parameter on this call. The author
         * is understood to be the caller.
         *
         * @method repositoryFileGrant
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies the name of the repository file</dd>
         *
         *    <dt>newauthor</dt>
         *    <dd> specifies a comma-separated list of grantee usernames</dd>
         *
         *    <dt>revokeauthor</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of revokee usernames
         *    </dd>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileGrant: function(config, callback) {
            return this.io('/r/repository/file/grant', config, callback);
        },

        /**
         * This call downloads a repository-managed file.
         *
         * @method repositoryFileDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *      <dt>author</dt>
         *      <dd>specifies the repository author</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *      <dt>version</dt>
         *      <dd>(optional) specifies the repository file version</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDownload: function(config, callback) {
            return this.io('/r/repository/file/download', config, callback);
        },

        /**
         * This call deletes a file from the repository.
         *
         * @method repositoryFileDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDelete: function(config, callback) {
            return this.io('/r/repository/file/delete', config, callback);
        },

        /**
         * This call fetches the latest meta-data on a file in the repository.
         *
         * @method repositoryFileFetch
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>
         *       (optional) specifies the repository file author
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileFetch: function(config, callback) {
            return this.io('/r/repository/file/fetch', config, callback);
        },

        /**
         * This call copies one or more repository-managed files to the destination
         * directory.
         *
         * If the destination directory already contains a filename matching an
         * incoming filename, then a new version of the file is automatically created.
         *
         * @method repositoryFileCopy
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the name of the destination user directory in
         *       the repository
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         *
         *    <dt>filerename</dt>
         *    <dd>
         *       (optional) comma-separated list of new filenames for copied files
         *       identified on filename parameter
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileCopy: function(config, callback) {            
            return this.io('/r/repository/file/copy', config, callback);
        },

        /**
         * This call moves one or more repository-managed files to the destination
         * directory.
         *
         * If the destination directory already contains a filename matching an
         * incoming filename, then a new version of the file is automatically created.
         *
         * @method repositoryFileMove
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the name of the destination user directory in
         *       the repository
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileMove: function(config, callback) {            
            return this.io('/r/repository/file/move', config, callback);
        },

        /////////////////////////////////////
        // Repository Directory APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed directories.
         * By default, a list of the caller's user directories ( root and custom ) are
         * returned in the response markup.
         *
         * If the userfiles parameter is specified, the files in all of the caller's
         * user directories are listed in the response markup. Note, depending on the
         * number of files owned by the caller, when this parameter is enabled the
         * response markup returned on this call can be a verbose.
         *
         * If the directory parameter is specified then only the files in the
         * directory indicated are returned in the response markup.
         *
         * Additional parameters are provided to return files in the caller's archived
         * directories and/or files in the Restricted , Shared and Public system
         * directories.
         *
         * Note: The metadata property in the response markup on this call is provided
         * as a convenience for client application developers. It provides a complete
         * list fo the user directories available to the current caller.
         *
         * @method repositoryDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>userfiles</dt>
         *    <dd>
         *       (optional) if specified, files in all user directories are listed in
         *       the response markup
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>archived</dt>
         *    <dd>
         *       (optional) if true, files found in archived directories are included
         *       in the response markup
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if true, files that are restricted but visible or shared
         *       by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if true, files that are published by other users are
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryList: function(config, callback) {            
            return this.io('/r/repository/directory/list', config, callback);
        },

        /**
         * This call creates a repository-managed custom directory.
         *
         * If the name of the new custom directory is already in use by the caller the
         * response markup will indicate an appropriate error.
         *
         * @method repositoryDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryCreate: function(config, callback) {            
            return this.io('/r/repository/directory/create', config, callback);
        },

        /**
         * This call renames an existing repository-managed user directory
         * ( custom or archived ). When renaming a user directory, all files in the
         * source directory are automatically moved to the destination directory. If
         * the destination directory already exists the call will be rejected and the
         * response markup will indicate an appropriate error.
         *
         * You can use this call to convert an archived directory back into a custom
         * directory, essentially unarchiving the archived directory.
         *
         * Note: You can not rename the root directory. To move files from the root
         * directory use the /r/repository/directory/move call.
         *
         * <strong>Important:</strong>
         *
         * This call will only move files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as a result of collaboration using the
         * /r/repository/file/grant call, the file will not be moved to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryRename
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryRename: function(config, callback) {           
            return this.io('/r/repository/directory/rename', config, callback);
        },

        /** 
         * This call copies one or more repository-managed files from a source user
         * directory to a destination user directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are copied. Otherwise, all files in the source directory are
         * copied.
         *
         * To ensure copying files does not accidentally overwrite any existing files
         * in the destination directory, all copied files are created as new versions
         * in the destination directory.
         *
         * @method repositoryDirectoryCopy
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>filerename</dt>
         *    <dd>
         *       (optional) comma-separated list of new filenames for copied files
         *       identified on filename parameter
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryCopy: function(config, callback) {            
            return this.io('/r/repository/directory/copy', config, callback);
        },

        /**
         * This call moves one or more repository-managed files from a source user
         * directory to a destination user directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are moved. Otherwise, all files in the source directory are moved.
         *
         * To ensure moving files does not accidentally overwrite any existing files
         * in the destination directory, all moved files are created as new versions
         * in the destination directory.
         *
         * <strong>Important:</strong>
         *
         * This call will only move files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as result of collaboration using the
         * /r/repository/file/grant call, the file will not be moved to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryMove
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryMove: function(config, callback) {            
            return this.io('/r/repository/directory/move', config, callback);
        },

        /**
         * This call updates repository-managed file access controls by directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are updated. Otherwise, all files in the source directory are
         * updated.
         *
         * @method repositoryDirectoryUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryUpdate: function(config, callback) {
            return this.io('/r/repository/directory/update', config, callback);
        },

        /**
         * This call archives one or more repository-managed files from a source user
         * directory ( root or custom ) to an archive directory.
         *
         * If the value of the archive parameter indicates an existing archive
         * directory then the files in the source directory are added to the existing
         * archive. Otherwise, a new archive directory is automatically created on
         * behalf of the caller. Archived directories automatically have a .archive
         * postfix appended to their name if it is not supplied on the archive
         * parameter value.
         *
         * If all of the files in the source directory are successfully archived, the
         * source directory is automatically deleted from the repository. If the
         * source directory was root , an empty root directory is preserved. If any of
         * the files in the source directory are skipped or can not be archived (see
         * following note), those files and the source directory are preserved.
         *
         * <strong>Important:</strong>
         *
         * This call will only archive files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as a result of collaboration using the
         * /r/repository/file/grant call, the file will not be archived to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryArchive
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryArchive: function(config, callback) {

            return this.io('/r/repository/directory/archive', config, callback);
        },

        /**
         * This call uploads a set of files in a zip archive into an existing
         * repository-managed user directory ( root , custom or archived ).
         *
         * @method repositoryDirectoryUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>file</dt>
         *    <dd>
         *       ...zip archive file content...
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description to associate with the uploaded file
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the repository will create new
         *       version rather than overwrite
         *    </dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>
         *       (optional) if newversion is true, message to associate with new
         *       version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryUpload: function(config, callback) {
            config = config || {};
            config.format = 'text';
            var ioConfig = {
                data: config,
                method: 'POST',
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/repository/directory/upload', config, callback);
        },

        /**
         * This call downloads one or more repository-managed files from a directory
         * in the repository. The response type on this call is a zip archive file.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are downloaded. Otherwise, all files in the source directory are
         * downloaded.
         *
         * @method repositoryDirectoryDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryDownload: function(config, callback) {            
            return this.io('/r/repository/directory/download', config, callback);
        },

        /**
         * This call deletes a repository-managed user directory ( root , custom or
         * archived ).
         *
         * When deleting a user directory, all files in the directory are
         * automatically deleted along with the directory. If the target directory is
         * root, an empty root directory is preserved.
         *
         * @method repositoryDirectoryDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryDelete: function(config, callback) {
            return this.io('/r/repository/directory/delete', config, callback);
        },

        /////////////////////////////////////
        // Job APIs
        /////////////////////////////////////

        /**  
         * This call lists jobs for the currently authenticated user.
         *
         * The openonly parameter allows the caller to see only those jobs in an open
         * state. The set of job open states are shown here:
         *
         * <ul>
         *  <li>Scheduled : job is scheduled but not yet queued for running.</li>
         *  <li>Queued : job is queued for running.</li>
         *  <li>Running : job is running.</li>
         * </ul>
         *
         * <blockquote>
         *    Important! Any open job can be cancelled using the
         *    <a href="#method_jobCancel">jobCancel</a> call.
         * </blockquote>
         *
         * @method jobList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>openonly</dt>
         *    <dd>
         *       (optional) if true, only jobs in an open-state are listed in the
         *       response markup
         *    </dd>
         *
         *    <dt>extended</dt>
         *    <dd>
         *       (optional) If true, additional data properties describing each job
         *       are listed in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobList: function(config, callback) {
            return this.io('/r/job/list', config, callback);
        },

        /**
         * This call submits a job for background execution on behalf of the user.
         *
         * To submit the execution of an arbitrary block of R code the caller must
         * provide a value on the code parameter.
         *
         *
         * To submit the execution of a single repository-managed script the caller
         * must provide parameter values for rscriptname , rscriptauthor and
         * optionally rscriptversion . To submit the execution of a chain of
         * repository-managed scripts the caller must provide a comma-separated list
         * of values on the rscriptname,, _rscriptauthor and optionally rscriptversion
         * parameters.
         *
         *
         * To submit the execution of a single external script the caller must
         * provide a valid URL or file path using the externalsource parameter. To
         * submit the execution of a chain of external scripts the caller must
         * provide a comma-separated list of values on the externalsource parameter.
         * Note, to submit the execution of an external script the caller must have
         * POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session for the job, with execution
         * occuring in the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storenoproject parameter allows the caller to skip the
         *       persistence-to-project step after the execution.
         *    </li>
         * </ol>
         *
         * @method jobSubmit
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>job name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) job description</dd>
         *
         *    <dt>code</dt>
         *    <dd>(optional) R code to execute on job</dd>
         *
         *      <dt>rscriptname</dt>
         *      <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>rscriptdirectory</dt>
         *    <dd>(optional) comma-separated list of repository-managed directories for scripts, defaults to root</dd>
         *
         *      <dt>rscriptauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-rscriptname</dd>
         *
         *      <dt>rscriptversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-rscriptname</dd>
         *
         *      <dt>externalsource</dt>
         *      <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *      <dt>inputs</dt>
         *      <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *      <dt>preloadfilename</dt>
         *      <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *      <dt>preloadfileauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *      <dt>preloadfileversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *      <dt>preloadobjectname</dt>
         *      <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *      <dt>preloadobjectauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *      <dt>preloadobjectversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *      <dt>adoptworkspace</dt>
         *      <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *      <dt>adoptdirectory</dt>
         *      <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *      <dt>adoptpackages</dt>
         *      <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>priority</dt>
         *      <dd>(optional) specifies the scheduling priority for the job: low (default), medium or high</dd>
         *
         *      <dt>tag</dt>
         *      <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *      <dt>echooff</dt>
         *      <dd>
         *       (optional) if true R commands will not appear in the console output
         *       saved on the project execution history for the job
         *    </dd>
         *
         *      <dt>graphics</dt>
         *      <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *      <dt>graphicswidth</dt>
         *      <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *      <dt>graphicsheight</dt>
         *      <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *      <dt>storefile</dt>
         *      <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *      <dt>storeobject</dt>
         *      <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *      <dt>storeworkspace</dt>
         *      <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *      <dt>storenewversion</dt>
         *      <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *      <dt>storepublic</dt>
         *      <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *      <dt>storenoproject</dt>
         *      <dd>(optional) if <code>true</code>, no project persistence following job execution</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobSubmit: function(config, callback) {            
            return this.io('/r/job/submit', config, callback);
        },

        /**
         * This call schedules a job for background execution on behalf of the user.
         *
         * The schedstart parameter identifies the start time for the job. This
         * parameter value is specified as UTC in milliseconds. The schedrepeat
         * parameter indicates the number of times the job is to be repeated, and if
         * omitted the job is executed just once. The schedinterval parameter
         * indicates the interval, measured in milliseconds, between repeat
         * executions.
         *
         * To schedule the execution of an arbitrary block of R code the caller
         * must provide a value on the code parameter.
         *
         * To schedule the execution of a single repository-managed script the
         * caller must provide parameter values for rscriptname , rscriptauthor and
         * optionally rscriptversion . To schedule the execution of a chain of
         * repository-managed scripts the caller must provide a comma-separated list
         * of values on the rscriptname,, _rscriptauthor and optionally rscriptversion
         * parameters.
         *
         * To schedule the execution of a single external script the caller must
         * provide a valid URL or file path using the externalsource parameter. To
         * schedule the execution of a chain of external scripts the caller must
         * provide a comma-separated list of values on the externalsource parameter.
         * Note, to schedule the execution of an external script the caller must
         * have POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session for the job, with
         * execution occuring in the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storenoproject parameter allows the caller to skip the
         *       persistence-to-project step after the execution.
         *    </li>
         * </ol>
         *
         * @method jobSchedule
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>job name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) job description</dd>
         *
         *    <dt>schedstart</dt>
         *    <dd>(optional) specifies the start time for job</dd>
         *
         *    <dt>schedrepeat</dt>
         *    <dd>(optional) specifies the number of times job is to be repeated</dd>
         *
         *    <dt>schedinterval</dt>
         *    <dd>(optional) specifies the interval (ms) on which job is to be repeated</dd>
         *
         *    <dt>code</dt>
         *    <dd>(optional) R code to execute on job</dd>
         *
         *    <dt>rscriptname</dt>
         *    <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>rscriptdirectory</dt>
         *    <dd>(optional) comma-separated list of repository-managed directories for scripts, defaults to root</dd>
         *
         *    <dt>rscriptauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-rscriptname</dd>
         *
         *    <dt>rscriptversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-rscriptname</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>priority</dt>
         *      <dd>(optional) specifies the scheduling priority for the job: low (default), medium or high</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>
         *       (optional) if true R commands will not appear in the console output
         *       saved on the project execution history for the job
         *    </dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>
         *       (optional) if true console output is not saved on the project
         *       execution history for the job
         *    </dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>storenoproject</dt>
         *    <dd>(optional) if <code>true</code>, no project persistence following job execution</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobSchedule: function(config, callback) {           
            return this.io('/r/job/schedule', config, callback);
        },

        /**
         * This call queries the job status. The status property will indicate one of
         * the following values:
         *
         * Scheduled, Queued, Running, Completed, Cancelling, Cancelled, Interrupted,
         * Aborted, Failed.
         *
         * @method jobQuery
         * @static
         * @param {Object} config the call configuration. The configuration object
         * supports the following properties:
         * <dl>
         *    <dt>job</dt>
         *    <dd>specifies a comma-separated list of job identifiers</dd>
         *
         *    <dt>extended</dt>
         *    <dd>
         *       (optional) if true, only jobs in an extended-state are listed in the
         *       response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobQuery: function(config, callback) {
            return this.io('/r/job/query', config, callback);
        },

        /**
         * This call cancels the specified job.
         *
         * Only jobs in an open-state can be cancelled. The set of job open-states are
         * shown here:
         *
         * <ul>
         *    <li>Scheduled : job is scheduled but not yet queued for running.</li>
         *    <li>Queued : job is queued for running.</li>
         *    <li>Running : job is running.</li>
         * </ul>
         * @method jobCancel
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>job</dt>
         *    <dd>specifies a comma-separated list of job identifiers</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobCancel: function(config, callback) {
            return this.io('/r/job/list', config, callback);
        },

        /**
         * This call deletes the specified job.
         *
         * Only jobs in one of the completed-states can be deleted. The set of job
         * compelted-states are shown here:
         *
         * <ul>
         *    <li>Completed : job execution has run to successful completion.</li>
         *    <li>Interrupted : job execution has been interrupted.</li>
         *    <li>Cancelled : job has been cancelled.</li>
         *    <li>Aborted : job execution has been aborted.</li>
         *    <li>Failed : job execution has resulted in failure.</li>
         * </ul>
         *
         * Jobs in an open-state must first run to completion or be cancelled before
         * they are eligible for deletion.
         *
         * <blockquote>
         *    Important! Deleting jobs will not delete the projects that resulted from
         *    those jobs.
         * </blockquote>
         *
         * @method jobDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *  <dt>job</dt>
         *  <dd>specifies a comma-separated list of job identifiers</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobDelete: function(config, callback) {
            return this.io('/r/job/delete', config, callback);
        }
    } // DeployR

};

module.exports = Deprecated;
},{"../package":22,"./lang":7,"./rinput":11,"./selfish":14}],4:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base = require('./selfish').Base;

function debug(msg) { }

module.exports = Base.extend({

  initialize: function() {
    this.events = {};
    this.scope  = null;
  },

  /**
   * Adds a listener.  Multiple can be added per name.  Aliased as `on`.
   *
   * @param {String} name The name of the event
   * @param {Function} handler A callback
   * @return {Emitter} `this` for chaining      
   */
  on: function(name, handler) {
    if (name in this.events === false) { this.events[name] = []; }        

    this.events[name].push(handler);
    debug('Emitter.on("' + name + '")');

    return this;
  },

  /**
   * Triggers all matching listeners.
   *
   * @param {String} name The name of the event
   * @return {Emitter} `this` for chaining   
   */
  emit: function(name) {
    if (name in this.events === false) { return this; }

    for (var i = 0; i < this.events[name].length; i++) {
      debug('Fired event: "' + name + '"');
      this.events[name][i].apply(this.scope || this, Array.prototype.slice.call(arguments, 1));       
    }

    return this;
  },

  /**
   * Removes all matching listeners.
   *
   * @param {String} name The name of the event
   * @return {Emitter} `this` for chaining
   */
  offAll: function(name) {
    if (!name) {
      for (var e in this.events) {
        delete this.events[e];
      }
    } else {
      if (name in this.events === false) { return this; }
      delete this.events[name];        
    }

    return this;
  },

  /**
   * Removes a listener based on an index.
   *
   * @private
   * @param {String} name The name of the event
   * @param {Number} index The index of the event 
   */
  offAt: function(name, index) {
    var array = this.events[name],
        rest  = array.slice(index + 1);

    array.length = index;
    array.push.apply(array, rest);
    this.events[name] = array;
  },

  /**
   * Removes a listener based on the handler function.
   *
   * @param {String} name The name of the event
   * @param {Function} handler The handler function to remove
   * @return {Emitter} `this` for chaining
   */
  off: function(name, handler) {
    if (name in this.events === false) { return this; }

    // remove all events handlers by this name
    if (!handler) {
      return this.offAll(name);
    } else { // remove all events handlers == 'handler' by this name
      for (var i = 0; i < this.events[name].length; i++) {
        if (this.events[name][i] == handler) {
          this.offAt(name, i);
          return this;
        }
      }
    } 

    return this;
  }

}); 
},{"./selfish":14}],5:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var Lang = require('./lang'),
    RTypes = require('./rtypes'),
    R = RTypes.r,
    DeployR = RTypes.deployr;

function formatDates(dates, type) {
    var formats = [];

    for (var i = 0; i < dates.length; i++) {
        formats.push(formatDate(dates[i], type));
    }

    return formats;
}

function formatDate(date, type) {    
   var year   = date.getFullYear(),
       month  = (date.getMonth() + 1),
       day    = date.getDate(),    
       hour   = date.getHours(),
       min    = date.getMinutes(),
       sec    = date.getSeconds(),
       zone   = date.getTimezoneOffset(),
       format = '';

       month  = (month < 10 ? '0' + month : month);
       hour   = (hour < 10 ? '0' + hour : hour);
       min    = (min < 10 ? '0' + min : min);
       sec    = (sec < 10 ? '0' + sec : sec);       
       format = year + '-' + month + '-' + day;

    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }
   
    if (type === DeployR.RPOSIX_DATE || type === DeployR.RPOSIX_DATE_VECTOR) {
        var time  = hour + ':' + min + ':' + sec,
            a = -zone,
            b = "+";

        if (a < 0) {
            a = -a;
            b = "-";
        }

        zone = b + leftZeroFill((a / 60), 2) + '' + leftZeroFill(a % 60, 2);
        format += (' ' + time + ' ' + zone);
    }

    return format;
}

function encodeEmbeddedDataframe(obj, rdf) {
    var dfValue = obj.value;
    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];
        if (dfObj.type === DeployR.RDATAFRAME) {
            rdf = encodeEmbeddedDataframe(dfObj, rdf);
        } else {
            // format dates
            if (RTypes.isDate(dfObj.type)) {
                if (Lang.isArray(dfObj.value)) {
                    dfObj.value = formatDates(dfObj.value, dfObj.type);
                } else {
                    dfObj.value = formatDate(dfObj.value, dfObj.type);
                }
            }

            dfObj.type = RTypes.deployrToR(dfObj.type);
            rdf.value.push(dfObj);            
        }

    }
    return rdf;
};

function encodeDataframe(obj) {
    var rdf = {
            type: R.DATAFRAME,
            value: [],
            name: obj.name
        },
        dfValue = obj.value;

    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];

        if (dfObj.type === DeployR.RDATAFRAME) {
            rdf = encodeEmbeddedDataframe(dfObj, rdf);
        } else {
            // format dates
            if (RTypes.isDate(dfObj.type)) {
                if (Lang.isArray(dfObj.value)) {
                    dfObj.value = formatDates(dfObj.value, dfObj.type);
                } else {
                    dfObj.value = formatDate(dfObj.value, dfObj.type);
                }
            }

            dfObj.type = RTypes.deployrToR(dfObj.type);
            rdf.value.push(dfObj);
        }

    }
    return rdf;
};

function encodeList(obj) {
    var rlist = {
            type: R.LIST,
            value: [],
            name: obj.name
        },
        dfValue = obj.value,
        r;

    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];

        switch (dfObj.type) {
            case DeployR.RDATAFRAME:
                r = encodeDataframe(dfObj);
                break;

            case DeployR.RLIST:
                r = encodeList(dfObj);
                break;

            case DeployR.RNUMERIC_MATRIX:
            case DeployR.RINTEGER_MATRIX:
            case DeployR.RBOOLEAN_MATRIX:
            case DeployR.RSTRING_MATRIX:
                r = {
                    name: dfObj.name,
                    type: R.MATRIX,
                    value: dfObj.value
                };
                break;

            case DeployR.RDATE:
            case DeployR.RPOSIX_DATE:
                r = {
                    name: dfObj.name,
                    type: R.DATE,
                    format: dfObj.format,
                    value: formatDate(dfObj.value, dfObj.type)
                };
                break;

            case DeployR.RFACTOR:
            case DeployR.RORDERED:
                r = {
                    name: dfObj.name,
                    type: R.FACTOR,
                    ordered: dfObj.ordered,
                    labels: dfObj.labels,
                    levels: dfObj.levels,
                    value: dfObj.value
                };
                break;

            case DeployR.RSTRING:
            case DeployR.RBOOLEAN:
            case DeployR.RNUMERIC:
            case DeployR.RINTEGER:
                r = {
                    name: dfObj.name,
                    type: R.PRIMITIVE,
                    value: dfObj.value
                };
                break;

            case DeployR.RNUMERIC_VECTOR:
            case DeployR.RINTEGER_VECTOR:
            case DeployR.RBOOLEAN_VECTOR:
            case DeployR.RSTRING_VECTOR:
                r = {
                    name: dfObj.name,
                    type: R.VECTOR,
                    value: dfObj.value
                };
                break;

            case DeployR.RDATE_VECTOR:
            case DeployR.RPOSIX_DATE_VECTOR:
                r = {
                    name: dfObj.name,
                    type: R.VECTOR,                    
                    value: formatDates(dfObj.value, dfObj.type),
                    format: dfObj.format
                };
                break;

            default:
                throw new Error('No RDataType found for "' + dfObj.type + '"');
                break;
        }

        rlist.value.push(r);
    }
    return rlist;
};

module.exports = {

    /**
     * Flattens a given <code>Revolution.RData</code> type into a JSON string
     * representing the
     * expected DeployR input format.
     *
     * @method parseInputs
     * @public
     * @param {Array} rdata An Array of RData Objects to be flattened.
     * @return {String} The flattend RData JSON string representing the DeployR
     *                  input format.
     */
    encode: function(rdata) {
        var r = {};

        for (var index = 0; index < rdata.length; index++) {
            var obj = rdata[index];

            switch (obj.type) { // -- DeployR Type -- //

                case DeployR.RDATAFRAME:
                    r[obj.name] = encodeDataframe(obj);
                    break;

                case DeployR.RLIST:
                    r[obj.name] = encodeList(obj);
                    break;

                case DeployR.RNUMERIC_MATRIX:
                case DeployR.RINTEGER_MATRIX:
                case DeployR.RBOOLEAN_MATRIX:
                case DeployR.RSTRING_MATRIX:
                    r[obj.name] = {
                        type: R.MATRIX,
                        value: obj.value
                    };
                    break;

                case DeployR.RDATE:
                case DeployR.RPOSIX_DATE:
                    r[obj.name] = {
                        type: R.DATE,
                        format: obj.format,                        
                        value: formatDate(obj.value, obj.type)
                    };
                    break;

                case DeployR.RFACTOR:
                case DeployR.RORDERED:                
                    r[obj.name] = {
                        type: R.FACTOR,
                        ordered: obj.ordered,
                        labels: obj.labels,
                        levels: obj.levels,
                        value: obj.value
                    };
                    break;

                case DeployR.RSTRING:
                case DeployR.RBOOLEAN:
                case DeployR.RNUMERIC:
                case DeployR.RINTEGER:
                    r[obj.name] = {
                        type: R.PRIMITIVE,
                        value: obj.value
                    };
                    break;

                case DeployR.RNUMERIC_VECTOR:
                case DeployR.RINTEGER_VECTOR:
                case DeployR.RBOOLEAN_VECTOR:
                case DeployR.RSTRING_VECTOR:
                    r[obj.name] = {
                        type: R.VECTOR,
                        value: obj.value
                    };
                    break;

                case DeployR.RDATE_VECTOR:
                case DeployR.RPOSIX_DATE_VECTOR:
                    r[obj.name] = {
                        type: R.VECTOR,            
                        value: formatDates(obj.value, obj.type),
                        format: obj.format
                    };
                    break;

                default:
                    throw new Error('No RDataType found for "' + obj.type + '"');
                    break;
            }
        }

        return (JSON.stringify(r));
    }
};
},{"./lang":7,"./rtypes":13}],6:[function(require,module,exports){
 var optional = require('./optional'),
     WS       = optional('ws'),
     Queue    = require('./queue'),     
     Emitter  = require('./emitter'),
     Base     = require('./selfish').Base,
     merge    = require('./utils').merge;

/**
 * Initialize a new `EventStream` with the given set of `options`.
 *
 * @param {Object} options
 * @api private
 */
var EventStream = Base.extend(Emitter, {   

  initialize: function initialize(host, options) {
    Emitter.initialize.call(this, {});

    this.host        = host;
    this.options     = options || {};
    this.options.log = this.options.log || this.LOG.error;
    this.ws          = null;
    this.q           = new Queue();
    this.channel     = {};     
  },  

  LOG: { 
    info: 'info', 
    debug: 'debug', 
    error: 'error' 
  },
  
  open: function(options) {    
    var self   = this,
        uri    = (this.host || '') + '/deployr/r/event/stream?',
        params = [];

    options = options || {};
    options.headers = options.headers || {};
    options = this.options = merge(options, this.channel);    

    this.cookies = !this.cookies ? options.headers.Cookie : this.cookies;

    // -- append option parameters --
    if (options.project) {
      params.push('project=' + options.project);
    } else {
      if (options.job) {
        params.push('job=' + options.job);
      }
    }

    if (options.management) {
      params.push('managementEventOnly=true');
    } else {
      if (options.httponly) {
        params.push('httpEventOnly=true');
      } else {
        if (options.revoonly) {
          params.push('revoEventOnly=true');
        }
      }
    }

    uri += params.join('&').substr(0);
    uri = uri.replace(/^http/,'ws');

    this.q.yield(true);
    this.q.add(function() {

      var headers = this.cookies ? { 'Cookie': this.cookies } : {};
      this.emit('es:connecting', { uri: uri, headers: headers });

      var ws = new WS(uri, 'http', { headers: headers });

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
      ws.onclose = function (message) { self.emit('es:disconnect', message); };

      this.ws = ws;
    }, this);

    if (options.force) { this.flush(); }

    return this;    
  },

  close: function() {
    if (this.ws) { this.ws.close(); }

    return this;
  },

  error: function(fn) {
    this.on('es:error', fn);

    return this;
  },  

  all: function() {
    this.channel = { revoonly: true };  // revoEventOnly=true

    return this;
  },

  session: function() {
    this.channel = { httponly: true }; //httpEventOnly=true

    return this;
  },

  project: function(project) {
    this.channel = { project: project }; // project=12345

    return this;
  },

  job: function(job) {
    this.channel = { job: job }; //job=12345

    return this;
  },

  management: function() {
    this.channel = { management: true }; //managementEventOnly=true

    return this;
  },

  flush: function() {
    this.q.yield(false);
    this.q.flush();
  },

  share: function(cookies) {
    this.cookies = cookies;
  }

});

module.exports = EventStream;

},{"./emitter":4,"./optional":9,"./queue":10,"./selfish":14,"./utils":15}],7:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 *
 * This component is a DeployR port of yui-lang.js by Yahoo!
 *
 * Software License Agreement (BSD License)
 * Copyright (c) 2013, Yahoo! Inc. All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, with or 
 * without modification, are permitted provided that the following conditions 
 * are met:
 *
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer. Redistributions in binary 
 * form must reproduce the above copyright notice, this list of conditions and 
 * the following disclaimer in the documentation and/or other materials provided 
 * with the distribution.
 *
 * Neither the name of Yahoo! Inc. nor the names of YUI's contributors may be 
 * used to endorse or promote products derived from this software without 
 * specific prior written permission of Yahoo! Inc.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE  
 * POS SIBILITY OF SUCH DAMAGE.
 */

/**
 * Provides core language utilites and extensions used throughout DeployR.
 *
 * @class Lang
 * @static
 */
var L = {}, 
	TOSTRING = Object.prototype.toString, 
	TYPES = {	
		'undefined' : 'undefined',
		'number' : 'number',
		'boolean' : 'boolean',
		'string' : 'string',
		'[object Function]' : 'function',
		'[object RegExp]' : 'regexp',
		'[object Array]' : 'array',
		'[object Date]' : 'date',
		'[object Error]' : 'error'
	}, unsafeNatives = false;

/**
 * Determines whether or not the provided item is null.
 * @method isNull
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is null.
 */
L.isNull = function(o) {
	return o === null;
};

/**
 * Determines whether or not the provided item is undefined.
 * @method isUndefined
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is undefined.
 */
L.isUndefined = function(o) {
	return typeof o === 'undefined';
};

/**
 * Determines whether or not the provided item is of type object
 * or function. Note that arrays are also objects, so
 * <code>Y.Lang.isObject([]) === true</code>.
 * @method isObject
 * @static
 * @param o The object to test.
 * @param failfn {boolean} fail if the input is a function.
 * @return {boolean} true if o is an object.
 * @see isPlainObject
 */
L.isObject = function(o, failfn) {
	var t = typeof o;
	return (o && (t === 'object' || (!failfn && (t === 'function' || L.isFunction(o))))) || false;
};
/**
 * Determines whether or not the provided item is an array.
 *
 * Returns `false` for array-like collections such as the function `arguments`
 * collection or `HTMLElement` collections.
 *
 * @method isArray
 * @param o The object to test.
 * @return {boolean} true if o is an array.
 * @static
 */
L.isArray = (!unsafeNatives && Array.isArray) ||
function(o) {
	return L.type(o) === 'array';
};

L.isFunction = function isFunctionA(o) {
	return (typeof(o) === "function");
};

/**
 * Determines whether or not the provided item is a boolean.
 * @method isBoolean
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a boolean.
 */
L.isBoolean = function(o) {
	return typeof o === 'boolean';
};

/**
 * Determines whether or not the supplied item is a date instance.
 * @method isDate
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a date.
 */
L.isDate = function(o) {
	return L.type(o) === 'date' && o.toString() !== 'Invalid Date' && !isNaN(o);
};

/**
 * Determines whether or not the provided item is a legal number.
 * @method isNumber
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a number.
 */
L.isNumber = function(o) {
	return typeof o === 'number' && isFinite(o);
};

/**
 * Determines whether or not the provided item is a string.
 * @method isString
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a string.
 */
L.isString = function(o) {
	return typeof o === 'string';
};

/**
 * Returns a string representing the type of the item passed in.
 *
 * @method type
 * @param o the item to test.
 * @return {string} the detected type.
 * @static
 */
L.type = function(o) {
	return TYPES[ typeof o] || TYPES[TOSTRING.call(o)] || ( o ? 'object' : 'null');
};

module.exports = L;
},{}],8:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */
 
var Logger = {},
    loggerMap = {},
    globalLogger;

/**
 * Universal stdout|stderr printer
 */
function log(messages, context) {	
	if (!console) { return; }

	function sep(level) {
		var sep = '=========================================================' +
		          '=========================================================\n',
		    offset = 0;

		if (level === Logger.DEBUG || level === Logger.ERROR) offset = 8;
		else if (level === Logger.INFO || level === Logger.WARN) offset = 8;
		else offset = 7;

		return { start: sep.substring(offset), end: sep };
	}

	var hdlr,
	    args = Array.prototype.slice.call(messages, 0),
	    name = context.name,
	    error = context.level === Logger.ERROR,
  	    delim = sep(context.level);

  	if (context.level === Logger.WARN && console.warn) {
  		hdlr = 'warn';
  	} else if (context.level === Logger.ERROR && console.error) {
  		hdlr = 'error';
  	} else if (context.level === Logger.INFO && console.info) {
  		hdlr = 'info';
  	} else {
  		hdlr = 'log';
  	}

  	// -- custom format logging statement for deployr request/response/error --
  	args.unshift('[' + (error ? Logger.ERROR.name : name) + '] ' + delim.start);
  	args.push(delim.end);

  	console[hdlr](args[0], [args[1] + ' ---> ' + args[2]['call']]);

    for (var i = 2; i < args.length; i++) { console.log(args[i]); }  
}

/**
 * Logging category by id.
 */
function Category(id, level, fn) {
	this.id = id;
	this.context = level || Logger.DEBUG;
}

Category.prototype = {	
	log: function(level, msgArgs) {
		if (level.value >= this.context.value) {			
			log(msgArgs, { 
				level: level,
				name: this.context.name,
				value: this.context.value
			});		
		}
	},

	debug: function () {		
		this.log(Logger.DEBUG, arguments);
	},

	error: function () {
		this.log(Logger.ERROR, arguments);
	},

	info: function () {		
		this.log(Logger.INFO, arguments);
	},

	warn: function () {
		this.log(Logger.WARN, arguments);
	},

	setLevel: function(level) {
		if (level && 'value' in level) {
			this.context = level;
		}
	}
};

Logger.DEBUG = { value: 1, name: 'DEBUG' };
Logger.INFO  = { value: 2, name: 'INFO' };
Logger.WARN  = { value: 4, name: 'WARN' };
Logger.ERROR = { value: 8, name: 'ERROR' };
Logger.OFF   = { value: 99, name: 'OFF' };   		

Logger.setLevel = function(newLevel) {
	globalLogger.setLevel(newLevel);
};

Logger.debug = function () {
	globalLogger.debug.apply(globalLogger, arguments);
};

Logger.info = function () {
	globalLogger.info.apply(globalLogger, arguments);
};

Logger.warn = function () {
	globalLogger.warn.apply(globalLogger, arguments);
};

Logger.error = function () {
	globalLogger.error.apply(globalLogger, arguments);
};

Logger.get = function (id, level, fn) {	
	return (loggerMap[id] || (function() {
		loggerMap[id] = new Category(id, level, fn);
		return loggerMap[id];
	})());
};

// --- setup the global logger ---
globalLogger = Logger.get('global');

module.exports 	= Logger;

},{}],9:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */
 
module.exports = function(module) {
  try {
    return require(module);
  } catch (e) {}
};
},{}],10:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

function Queue() {
  this.emptyCallback = null;
  this.callbacks = [];
  this.yielded = false;
  this.response = null;
  this.responseChain = [];  
}

Queue.prototype = {

  add: function(fn, ctx, defer) {
    // currently not waiting and there is no defer delay just make call
    if (!this.yielded && !defer) {      
      fn.apply(ctx || this, [this.response]);
    } else { // add to queue
      this.callbacks.push({ fn: fn, ctx: ctx });
    }
  },

  size: function() {
    return this.callbacks.length;
  },

  isEmpty: function() {
    return this.callbacks.length === 0;
  },

  empty: function(fn, ctx) {
    this.emptyCallback = { fn: fn, ctx: ctx };
  },

  yield: function(yield) {
    this.yielded = yield;
  },

  take: function(response, error, args) { 
    var cb;

    if (response) {
      this.response = response;
      this.responseChain.push(response);
    }


    if (!this.yielded && this.callbacks[0]) {
      cb = this.callbacks.shift();
      cb.fn.apply(cb.ctx || this, [this.responseChain, error, args]);

      // notify that the queue is now empty   
      if (this.callbacks[0] && this.emptyCallback) {
        this.emptyCallback.fn.call(this.emptyCallback.ctx || this);         
      }
    }
  },
  
  flush: function(response, error, args) {        
    if (response) {
      this.response = response;
      this.responseChain.push(response);
    }

    // pop and call next inline
    while (this.callbacks[0]) {
      if (this.yielded) { break; }
      var cb = this.callbacks.shift();
      cb.fn.apply(cb.ctx || this, [this.responseChain, error, args]);

      // notify that the queue is now empty
      if (this.callbacks[0] && this.emptyCallback) {
        this.emptyCallback.fn.call(this.emptyCallback.ctx || this);         
      }
    }
  }
};

module.exports = Queue;
},{}],11:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base   = require('./selfish').Base,
    RTypes = require('./rtypes');

module.exports = Base.extend(RTypes, {
	initialize: function initialize(name, value, options) {  	
		this.name  = name;
		this.value = value;
		this.options = options || {};
	},

	numeric: function () {
		return this.assert({
			type: this.deployr.RNUMERIC,
			name: this.name, 
			value: this.value,
			toString: this.toString
		});
	},	

	integer: function () {
		return this.assert({ 
			type: this.deployr.RINTEGER,
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	logical: function () {
		return this.assert({ 
			type: this.deployr.RBOOLEAN, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	character: function () {
		return this.assert({ 
			type: this.deployr.RSTRING, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	date: function () {
		return this.assert({ 
			type: this.deployr.RDATE,
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd',
			toString: this.toString
		}); 
	},

	posixct: function () {
		return this.assert({ 
			type: this.deployr.RPOSIX_DATE, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd HH:mm:ss Z',
			toString: this.toString
		}); 
	},	
	
	numericVector: function () { 
		return this.assert({ 
			type: this.deployr.RNUMERIC_VECTOR,
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	integerVector: function () {
		return this.assert({ 
			type: this.deployr.RINTEGER_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	logicalVector: function () { 
		return this.assert({ 
			type: this.deployr.RBOOLEAN_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	characterVector: function () { 
		return this.assert({ 
			type: this.deployr.RSTRING_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},  
	
	dateVector: function () { 
		return this.assert({ 
			type: this.deployr.RDATE_VECTOR, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd',
			toString: this.toString
		}); 
	},	
	
	posixctVector: function () { 
		return this.assert({ 
			type: this.deployr.RPOSIX_DATE_VECTOR, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd HH:mm:ss Z',
			toString: this.toString
		}); 
	},
	
	list: function () {
		return this.assert({ 
			type: this.deployr.RLIST, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	dataframe: function () { 
		return this.assert({ 
			type: this.deployr.RDATAFRAME, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	factor: function () {
		var opts = this.options;

		return this.assert( { 
			type: this.deployr.RFACTOR, 
			name: this.name, 
			value: this.value,
			ordered: false,
			levels: opts.levels,
			labels: opts.labels,
			toString: this.toString
		}); 
	},

	ordered: function () {
		var opts = this.options;

		return this.assert( { 
			type: this.deployr.RORDERED, 
			name: this.name, 
			value: this.value,
			ordered: true,
			levels: opts.levels,
			labels: opts.labels,
			toString: this.toString
		}); 
	},		

	numericMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RNUMERIC_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	integerMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RINTEGER_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	logicalMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RBOOLEAN_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	characterMatrix: function () {
		return this.assert({ 
			type: this.deployr.RSTRING_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	toString: function() {
		var opts   = this.options || {},
		    levels = opts.levels ? '[ levels = ' + opts.levels + ']' : '',
		    labels = opts.labels ? '[ labels = ' + opts.labels + ']' : '';

		return '[ name = '  + this.name + ' ] ' +
		       '[ value = ' + this.value + ' ] ' +
		       '[ type = '  + this.type + ' ] ' +
		       levels + labels;		       
	}
});
},{"./rtypes":13,"./selfish":14}],12:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base   = require('./selfish').Base,
    RTypes = require('./rtypes'),
    Lang   = require('./lang'),
    RInput = require('./rinput'); 

function create(type, name, value, options) {
	var rinput;

	if (Lang.isObject(name)) {
		rinput = name;
		if (!rinput.type !== type) {
			throw new Error('IllegalArgumentError:' + 
				'Expecting "' + type + '" but found "' + rinput.type + '"');
		}
	} else {
	    rinput = RInput.new(name, value, options)[type]();
	} 

	return rinput;
}

module.exports = Base.extend(RTypes, {	
	numeric: function (name, value) {
		this.inputs.push(create(this.deployr.RNUMERIC, name, value));
		return this;
	},
	
	integer: function (name, value) {
		this.inputs.push(create(this.deployr.RINTEGER, name, value));
		return this; 
	},
	
	logical: function (name, value) {
		this.inputs.push(create(this.deployr.RBOOLEAN, name, value));
		return this; 
	},
	
	character: function (name, value) {
		this.inputs.push(create(this.deployr.RSTRING, name, value));
		return this; 
	},
	
	date: function (name, value) {
		this.inputs.push(create(this.deployr.RDATE, name, value));
		return this; 
	},

	posixct: function (name, value) {
		this.inputs.push(create(this.deployr.RPOSIX_DATE, name, value));
		return this; 
	},	
	
	numericVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RNUMERIC_VECTOR, name, value));
		return this; 
	},
	
	integerVector: function (name, value) {
		this.inputs.push(create(this.deployr.RINTEGER_VECTOR, name, value));
		return this; 
	},
	
	logicalVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RBOOLEAN_VECTOR, name, value));
		return this; 
	},
	
	characterVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RSTRING_VECTOR, name, value));
		return this; 
	},  
	
	dateVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RDATE_VECTOR, name, value));
		return this; 
	},	
	
	posixctVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RPOSIX_DATE_VECTOR, name, value));
		return this; 
	},
	
	list: function (name, value) {
		this.inputs.push(create(this.deployr.RLIST, name, value));
		return this; 
	},
	
	dataframe: function (name, value) { 
		this.inputs.push(create(this.deployr.RDATAFRAME, name, value));
		return this; 
	},	

	factor: function (name, value, levels, labels) {
		var opts = { levels: levels, labels: labels };
		this.inputs.push(create(this.deployr.RFACTOR, name, value, opts));
		return this;
	},

	ordered: function (name, value, levels, labels) {
		var opts = { levels: levels, labels: labels };
		this.inputs.push(create(this.deployr.RORDERED, name, value, opts));
		return this;
	},		

	numericMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RNUMERIC_MATRIX, name, value));
		return this; 
	},

	integerMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RINTEGER_MATRIX, name, value));
		return this; 
	},

	logicalMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RBOOLEAN_MATRIX, name, value));
		return this; 
	},

	characterMatrix: function (name, value) {
		this.inputs.push(create(this.deployr.RSTRING_MATRIX, name, value));
		return this;
	}
});
},{"./lang":7,"./rinput":11,"./rtypes":13,"./selfish":14}],13:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base = require('./selfish').Base,
    Lang = require('./lang'),
    map  = {}; // deployr->To->R catalog

module.exports = Base.extend({
	r: {
		PRIMITIVE: 'primitive',
		DATAFRAME: 'dataframe',
		LIST: 'list',
		MATRIX: 'matrix',
		DATE: 'date',
		FACTOR: 'factor',
		VECTOR: 'vector'
	},

	deployr: {
		RBOOLEAN: 'logical',
		RNUMERIC: 'numeric',
		RINTEGER: 'integer',
		RSTRING: 'character',
		RDATE: 'date',
		RPOSIX_DATE: 'posixct',
		RBOOLEAN_VECTOR: 'logicalVector',
		RNUMERIC_VECTOR:'numericVector',
		RINTEGER_VECTOR: 'integerVector',	
		RSTRING_VECTOR: 'characterVector',
		RDATE_VECTOR: 'dateVector',
		RPOSIX_DATE_VECTOR: 'posixctVector',
		RLIST: 'list',
		RDATAFRAME: 'dataframe',
		RFACTOR: 'factor',
		RORDERED: 'ordered',		
		RBOOLEAN_MATRIX: 'logicalMatrix',
		RNUMERIC_MATRIX: 'numericMatrix',
		RINTEGER_MATRIX: 'integerMatrix',		
		RSTRING_MATRIX: 'characterMatrix'
	},

	isDate: function(type) {
		return (type === this.deployr.RDATE || 
		        type === this.deployr.RPOSIX_DATE || 
		        type === this.deployr.RDATE_VECTOR ||
		        type === this.deployr.RPOSIX_DATE_VECTOR ||
		        type === this.r.DATE);
	},

	deployrToR: function(type) {	
		var deployr = this.deployr,
		    r       = this.r;

		if (!map[type]) { // build catalog only once	
			map[deployr.RBOOLEAN]           = r.PRIMITIVE;
			map[deployr.RNUMERIC]           = r.PRIMITIVE;
			map[deployr.RINTEGER]           = r.PRIMITIVE;
			map[deployr.RSTRING]            = r.PRIMITIVE;
			map[deployr.RDATE]              = r.DATE;
			map[deployr.RPOSIX_DATE]        = r.DATE;
			map[deployr.RBOOLEAN_VECTOR]    = r.VECTOR;
			map[deployr.RNUMERIC_VECTOR]    = r.VECTOR;
			map[deployr.RINTEGER_VECTOR]    = r.VECTOR;
			map[deployr.RSTRING_VECTOR]     = r.VECTOR;
			map[deployr.RDATE_VECTOR]       = r.VECTOR;
			map[deployr.RPOSIX_DATE_VECTOR] = r.VECTOR;
			map[deployr.RLIST]              = r.LIST;
			map[deployr.RDATAFRAME]         = r.DATAFRAME;
			map[deployr.RFACTOR]            = r.FACTOR;
			map[deployr.RORDERED]           = r.FACTOR;
			map[deployr.RBOOLEAN_MATRIX]    = r.MATRIX;
			map[deployr.RNUMERIC_MATRIX]    = r.MATRIX;
			map[deployr.RINTEGER_MATRIX]    = r.MATRIX;
			map[deployr.RSTRING_MATRIX]     = r.MATRIX;
		}

		return map[type];		
	},

	/**
	 * Assert that the `rinput` value is the correct JavaScript Data Type.
	 */
	assert: function (rinput) {
		var deployr = this.deployr,
    		NOOP    = null,
		    values  = rinput.value,
		    fn;

		values = !Lang.isArray(values) ? [values] : values;

		for (var i = 0; i < values.length; i++) {
			var value = values[i];

			switch (rinput.type) {
				case deployr.RNUMERIC :
				case deployr.RNUMERIC_VECTOR :
				case deployr.RNUMERIC_VECTOR :
				fn = Lang.isNumber;
				// support string numbers
				var val = parseFloat(value);
			    value = isNaN(val) ? value : val; 
			    break;

			    case deployr.RINTEGER :
			    case deployr.RINTEGER_VECTOR :
			    fn = Lang.isNumber;
			    // support string numbers
			    var val = parseFloat(value);
			    value = isNaN(val) ? value : val; 
			    break;

			    case deployr.RBOOLEAN :
			    case deployr.RBOOLEAN_VECTOR :
			    fn = Lang.isBoolean;
			    break;
			    
			    case deployr.RSTRING :
			    case deployr.RSTRING_VECTOR :	
			    fn = Lang.isString;
			    break;

			    case deployr.RDATE :
			    case deployr.RPOSIX_DATE :
			    case deployr.RDATE_VECTOR :
			    case deployr.RPOSIX_DATE_VECTOR :
			    fn = Lang.isDate;
			    break;

			    case deployr.RFACTOR :
			    case deployr.RORDERED :			    
			    case deployr.RDATAFRAME :
			    case deployr.RINTEGER_MATRIX :
			    case deployr.RBOOLEAN_MATRIX :
			    case deployr.RSTRING_MATRIX :	    
			    fn = NOOP;
			    break
			}

			if (fn && !fn(value)) {
				throw new Error('RInputFormatError: ' + '"' + value + 
					'" is not a valid "' + rinput.type + '" type.');
			}
		}

		return rinput;
	}
});
},{"./lang":7,"./selfish":14}],14:[function(require,module,exports){
/*!
 * https://github.com/Gozala/selfish
 */

/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint undef: true es5: true node: true devel: true evil: true
         forin: true latedef: false supernew: true */
/*global define: true */

!(typeof define !== "function" ? function($){ $(null, typeof exports !== 'undefined' ? exports : window); } : define)(function(require, exports) {

"use strict";

exports.Base = Object.freeze(Object.create(Object.prototype, {
  /**
   * Creates an object that inherits from `this` object (Analog of
   * `new Object()`).
   * @examples
   *
   *    var Dog = Base.extend({
   *      bark: function bark() {
   *        return 'Ruff! Ruff!'
   *      }
   *    });
   *    var dog = Dog.new();
   */
  'new': { value: function create() {
    var object = Object.create(this);
    object.initialize.apply(object, arguments);
    return object;
  }},
  /**
   * When new instance of the this prototype is created it's `initialize`
   * method is called with all the arguments passed to the `new`. You can
   * override `initialize` to set up an instance.
   */
  initialize: { value: function initialize() {
  }},
  /**
   * Merges all the properties of the passed objects into `this` instance (This
   * method can be used on instances only as prototype objects are frozen).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   *
   * @examples
   *
   *    var Pet = Dog.extend({
   *      initialize: function initialize(options) {
   *        // this.name = options.name -> would have thrown (frozen prototype)
   *        this.merge(options) // will override all properties.
   *      },
   *      call: function(name) {
   *        return this.name === name ? this.bark() : ''
   *      },
   *      name: null
   *    })
   *    var pet = Pet.new({ name: 'Benzy', breed: 'Labrador' })
   *    pet.call('Benzy')   // 'Ruff! Ruff!'
   */
  merge: { value: function merge() {
    var descriptor = {};
    Array.prototype.forEach.call(arguments, function (properties) {
      Object.getOwnPropertyNames(properties).forEach(function(name) {
        descriptor[name] = Object.getOwnPropertyDescriptor(properties, name);
      });
    });
    Object.defineProperties(this, descriptor);
    return this;
  }},
  /**
   * Takes any number of argument objects and returns frozen, composite object
   * that inherits from `this` object and combines all of the own properties of
   * the argument objects. (Objects returned by this function are frozen as
   * they are intended to be used as types).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   * @examples
   *
   *    // ## Object composition ##
   *
   *    var HEX = Base.extend({
   *      hex: function hex() {
   *        return '#' + this.color;
   *      }
   *    })
   *
   *    var RGB = Base.extend({
   *      red: function red() {
   *        return parseInt(this.color.substr(0, 2), 16);
   *      },
   *      green: function green() {
   *        return parseInt(this.color.substr(2, 2), 16);
   *      },
   *      blue: function blue() {
   *        return parseInt(this.color.substr(4, 2), 16);
   *      }
   *    })
   *
   *    var CMYK = Base.extend(RGB, {
   *      black: function black() {
   *        var color = Math.max(Math.max(this.red(), this.green()), this.blue());
   *        return (1 - color / 255).toFixed(4);
   *      },
   *      cyan: function cyan() {
   *        var K = this.black();
   *        return (((1 - this.red() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      magenta: function magenta() {
   *        var K = this.black();
   *        return (((1 - this.green() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      yellow: function yellow() {
   *        var K = this.black();
   *        return (((1 - this.blue() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      }
   *    })
   *
   *    var Color = Base.extend(HEX, RGB, CMYK, {
   *      initialize: function Color(color) {
   *        this.color = color;
   *      }
   *    });
   *
   *    // ## Prototypal inheritance ##
   *
   *    var Pixel = Color.extend({
   *      initialize: function Pixel(x, y, hex) {
   *        Color.initialize.call(this, hex);
   *        this.x = x;
   *        this.y = y;
   *      },
   *      toString: function toString() {
   *        return this.x + ':' + this.y + '@' + this.hex();
   *      }
   *    });
   *
   *    var pixel = Pixel.new(11, 23, 'CC3399')
   *    pixel.toString(); // 11:23@#CC3399
   *
   *    pixel.red();      // 204
   *    pixel.green();    // 51
   *    pixel.blue();     // 153
   *
   *    pixel.cyan();     // 0.0000
   *    pixel.magenta();  // 0.7500
   *    pixel.yellow();   // 0.2500
   *
   */
   extend: { value: function extend() {
    return Object.freeze(this.merge.apply(Object.create(this), arguments));
  }}
}));

});
},{}],15:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Lang = require('./lang');

var get = exports.get = function(s, key) {
    function traverse(obj, fn, parent) {
        for (var i in obj) {
            var result = fn.apply(this, [i, obj[i], parent]);
            if (result) {
                return result;
            } else {
                if (obj[i] instanceof Object && !(obj[i] instanceof Array)) {                
                   traverse(obj[i], fn, i);
               }
            }
        }
    }

    function getProperty(obj, property) {
        var acc = {};
        traverse(obj, function(key, value, parent) {
            if (key === property) {  
                acc = value;
                return acc;
            } else {
                return null;
            }
        });
        return acc;
    }

    function empty(obj) {
        for (var prop in obj) { if (obj.hasOwnProperty(prop)) return obj; }
        return !Lang.isObject(obj) ? obj : null;
    }

    return empty(getProperty(s, key));
};

var inArray = exports.inArray = function(haystack, needle, key) {
    var i, max = haystack.length;

    for (i = 0; i < max; i++) {
        if (key) {
            if (haystack[i][key] === needle) { return haystack[i]; }
        } else {
            if (haystack[i] === needle) { return haystack[i]; }
        }   
    }
    return null;
};

exports.merge = function(to, from) {        
    if (!to || typeof(to) !== 'object') { to = {}; }
    if (!from || typeof(from) !== 'object') { from = {}; }

    for (var k in from) { to[k] = from[k]; }

    return to;
};

exports.workspace = function(obj, name) {
    var ws = get(obj, 'workspace');
    return (ws ? name ? inArray(ws.objects, name, 'name') : ws.objects || ws.object: null);
};

exports.signature = function() {
    var args   = Array.prototype.slice.call(arguments['0'], 0),
        len    = args.length,
        create = false,
        opts   = {},
        api;

    if (len === 1 && Lang.isObject(args[0])) {
        opts = args[0];
        api  = opts.project ? '/r/project/execute/script' :
            '/r/repository/script/execute';
    } else if (len === 1 && Lang.isString(args[0])) {
        args = args[0].split('\/');
        api  = '/r/repository/script/execute'
        opts = {
            author: args[1],
            directory: args[2],
            filename: args[3]
        };
    } else if (len === 2) {
        // ex: .script('/testuser/root/DeployR - Hello World.R', project)
        var project = args[1];
        api = project ? '/r/project/execute/script' : '/r/repository/script/execute';

        args = args[0].split('\/');
        opts = {
            project: project,
            author: args[1],
            directory: args[2],
            filename: args[3]
        };
    } else if (len > 2) {
        // ex: .script('DeployR - Hello World.R', 'testuser', 'root')
        opts = {
            author: args[2],
            directory: args[1],
            filename: args[0]
        };
    }

    // indicate a new project should be created
    if (opts.project && Lang.isBoolean(opts.project)) {
      delete opts['project'];
      create = true;
    }

    return {
        api: api,
        opts: opts,
        create: create
    };
};
},{"./lang":7}],16:[function(require,module,exports){

},{}],17:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],18:[function(require,module,exports){
(function (process){
/**
* attempt of a simple defer/promise library for mobile development
* @author Jonathan Gotti < jgotti at jgotti dot net>
* @since 2012-10
* @version 0.6.0
* @changelog
*           - 2013-12-07 - last promise 1.1 specs test passings (thx to wizardwerdna)
 *                       - reduce promises footprint by unscoping methods that could be
*           - 2013-10-23 - make it workig across node-webkit contexts
*           - 2013-07-03 - bug correction in promixify method (thx to adrien gibrat )
*           - 2013-06-22 - bug correction in nodeCapsule method
*           - 2013-06-17 - remove unnecessary Array.indexOf method dependency
*           - 2013-04-18 - add try/catch block around nodeCapsuled methods
*           - 2013-04-13 - check promises/A+ conformity
*                        - make some minication optimisations
*           - 2013-03-26 - add resolved, fulfilled and rejected methods
*           - 2013-03-21 - browser/node compatible
*                        - new method nodeCapsule
*                        - simpler promixify with full api support
*           - 2013-01-25 - add rethrow method
*                        - nextTick optimisation -> add support for process.nextTick + MessageChannel where available
*           - 2012-12-28 - add apply method to promise
*           - 2012-12-20 - add alwaysAsync parameters and property for default setting
*/
(function(undef){
	"use strict";

	var nextTick
		, isFunc = function(f){ return ( typeof f === 'function' ); }
		, isArray = function(a){ return Array.isArray ? Array.isArray(a) : (a instanceof Array); }
		, isObjOrFunc = function(o){ return !!(o && (typeof o).match(/function|object/)); }
		, isNotVal = function(v){ return (v === false || v === undef || v === null); }
		, slice = function(a, offset){ return [].slice.call(a, offset); }
		, undefStr = 'undefined'
		, tErr = typeof TypeError === undefStr ? Error : TypeError
	;
	if ( (typeof process !== undefStr) && process.nextTick ) {
		nextTick = process.nextTick;
	} else if ( typeof MessageChannel !== undefStr ) {
		var ntickChannel = new MessageChannel(), queue = [];
		ntickChannel.port1.onmessage = function(){ queue.length && (queue.shift())(); };
		nextTick = function(cb){
			queue.push(cb);
			ntickChannel.port2.postMessage(0);
		};
	} else {
		nextTick = function(cb){ setTimeout(cb, 0); };
	}
	function rethrow(e){ nextTick(function(){ throw e;}); }

	/**
	 * @typedef deferred
	 * @property {promise} promise
	 * @method resolve
	 * @method fulfill
	 * @method reject
	 */

	/**
	 * @typedef {function} fulfilled
	 * @param {*} value promise resolved value
	 * @returns {*} next promise resolution value
	 */

	/**
	 * @typedef {function} failed
	 * @param {*} reason promise rejection reason
	 * @returns {*} next promise resolution value or rethrow the reason
	 */

	//-- defining unenclosed promise methods --//
	/**
	 * same as then without failed callback
	 * @param {fulfilled} fulfilled callback
	 * @returns {promise} a new promise
	 */
	function promise_success(fulfilled){ return this.then(fulfilled, undef); }

	/**
	 * same as then with only a failed callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_error(failed){ return this.then(undef, failed); }


	/**
	 * same as then but fulfilled callback will receive multiple parameters when promise is fulfilled with an Array
	 * @param {fulfilled} fulfilled callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_apply(fulfilled, failed){
		return this.then(
			function(a){
				return isFunc(fulfilled) ? fulfilled.apply(null, isArray(a) ? a : [a]) : (defer.onlyFuncs ? a : fulfilled);
			}
			, failed || undef
		);
	}

	/**
	 * cleanup method which will be always executed regardless fulfillment or rejection
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore
	 * @returns {promise} the same promise untouched
	 */
	function promise_ensure(cb){
		function _cb(){ cb(); }
		this.then(_cb, _cb);
		return this;
	}

	/**
	 * take a single callback which wait for an error as first parameter. other resolution values are passed as with the apply/spread method
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore with error as first parameter if any as in node style
	 *                      callback. Rest of parameters will be applied as with the apply method.
	 * @returns {promise} a new promise
	 */
	function promise_nodify(cb){
		return this.then(
			function(a){
				return isFunc(cb) ? cb.apply(null, isArray(a) ? a.splice(0,0,undefined) && a : [undefined,a]) : (defer.onlyFuncs ? a : cb);
			}
			, function(e){
				return cb(e);
			}
		);
	}

	/**
	 *
	 * @param {function} [failed] without parameter will only rethrow promise rejection reason outside of the promise library on next tick
	 *                            if passed a failed method then will call failed on rejection and throw the error again if failed didn't
	 * @returns {promise} a new promise
	 */
	function promise_rethrow(failed){
		return this.then(
			undef
			, failed ? function(e){ failed(e); throw e; } : rethrow
		);
	}

	/**
	* @param {boolean} [alwaysAsync] if set force the async resolution for this promise independantly of the D.alwaysAsync option
	* @returns {deferred} defered object with property 'promise' and methods reject,fulfill,resolve (fulfill being an alias for resolve)
	*/
	var defer = function (alwaysAsync){
		var alwaysAsyncFn = (undef !== alwaysAsync ? alwaysAsync : defer.alwaysAsync) ? nextTick : function(fn){fn();}
			, status = 0 // -1 failed | 1 fulfilled
			, pendings = []
			, value
			/**
			 * @typedef promise
			 */
			, _promise  = {
				/**
				 * @param {fulfilled|function} fulfilled callback
				 * @param {failed|function} failed callback
				 * @returns {promise} a new promise
				 */
				then: function(fulfilled, failed){
					var d = defer();
					pendings.push([
						function(value){
							try{
								if( isNotVal(fulfilled)){
									d.resolve(value);
								} else {
									d.resolve(isFunc(fulfilled) ? fulfilled(value) : (defer.onlyFuncs ? value : fulfilled));
								}
							}catch(e){
								d.reject(e);
							}
						}
						, function(err){
							if ( isNotVal(failed) || ((!isFunc(failed)) && defer.onlyFuncs) ) {
								d.reject(err);
							}
							if ( failed ) {
								try{ d.resolve(isFunc(failed) ? failed(err) : failed); }catch(e){ d.reject(e);}
							}
						}
					]);
					status !== 0 && alwaysAsyncFn(execCallbacks);
					return d.promise;
				}

				, success: promise_success

				, error: promise_error
				, otherwise: promise_error

				, apply: promise_apply
				, spread: promise_apply

				, ensure: promise_ensure

				, nodify: promise_nodify

				, rethrow: promise_rethrow

				, isPending: function(){ return !!(status === 0); }

				, getStatus: function(){ return status; }
			}
		;
		_promise.toSource = _promise.toString = _promise.valueOf = function(){return value === undef ? this : value; };


		function execCallbacks(){
			if ( status === 0 ) {
				return;
			}
			var cbs = pendings, i = 0, l = cbs.length, cbIndex = ~status ? 0 : 1, cb;
			pendings = [];
			for( ; i < l; i++ ){
				(cb = cbs[i][cbIndex]) && cb(value);
			}
		}

		/**
		 * fulfill deferred with given value
		 * @param {*} val
		 * @returns {deferred} this for method chaining
		 */
		function _resolve(val){
			var done = false;
			function once(f){
				return function(x){
					if (done) {
						return undefined;
					} else {
						done = true;
						return f(x);
					}
				};
			}
			if ( status ) {
				return this;
			}
			try {
				var then = isObjOrFunc(val) && val.then;
				if ( isFunc(then) ) { // managing a promise
					if( val === _promise ){
						throw new tErr("Promise can't resolve itself");
					}
					then.call(val, once(_resolve), once(_reject));
					return this;
				}
			} catch (e) {
				once(_reject)(e);
				return this;
			}
			alwaysAsyncFn(function(){
				value = val;
				status = 1;
				execCallbacks();
			});
			return this;
		}

		/**
		 * reject deferred with given reason
		 * @param {*} Err
		 * @returns {deferred} this for method chaining
		 */
		function _reject(Err){
			status || alwaysAsyncFn(function(){
				try{ throw(Err); }catch(e){ value = e; }
				status = -1;
				execCallbacks();
			});
			return this;
		}
		return /**@type deferred */ {
			promise:_promise
			,resolve:_resolve
			,fulfill:_resolve // alias
			,reject:_reject
		};
	};

	defer.deferred = defer.defer = defer;
	defer.nextTick = nextTick;
	defer.alwaysAsync = true; // setting this will change default behaviour. use it only if necessary as asynchronicity will force some delay between your promise resolutions and is not always what you want.
	/**
	* setting onlyFuncs to false will break promises/A+ conformity by allowing you to pass non undefined/null values instead of callbacks
	* instead of just ignoring any non function parameters to then,success,error... it will accept non null|undefined values.
	* this will allow you shortcuts like promise.then('val','handled error'')
	* to be equivalent of promise.then(function(){ return 'val';},function(){ return 'handled error'})
	*/
	defer.onlyFuncs = true;

	/**
	 * return a fulfilled promise of given value (always async resolution)
	 * @param {*} value
	 * @returns {promise}
	 */
	defer.resolved = defer.fulfilled = function(value){ return defer(true).resolve(value).promise; };

	/**
	 * return a rejected promise with given reason of rejection (always async rejection)
	 * @param {*} reason
	 * @returns {promise}
	 */
	defer.rejected = function(reason){ return defer(true).reject(reason).promise; };

	/**
	 * return a promise with no resolution value which will be resolved in time ms (using setTimeout)
	 * @param {int} [time] in ms default to 0
	 * @returns {promise}
	 */
	defer.wait = function(time){
		var d = defer();
		setTimeout(d.resolve, time || 0);
		return d.promise;
	};

	/**
	 * return a promise for the return value of function call which will be fulfilled in delay ms or rejected if given fn throw an error
	 * @param {function} fn
	 * @param {int} [delay] in ms default to 0
	 * @returns {promise}
	 */
	defer.delay = function(fn, delay){
		var d = defer();
		setTimeout(function(){ try{ d.resolve(fn.apply(null)); }catch(e){ d.reject(e); } }, delay || 0);
		return d.promise;
	};

	/**
	 * if given value is not a promise return a fulfilled promise resolved to given value
	 * @param {*} promise a value or a promise
	 * @returns {promise}
	 */
	defer.promisify = function(promise){
		if ( promise && isFunc(promise.then) ) { return promise;}
		return defer.resolved(promise);
	};

	function multiPromiseResolver(callerArguments, returnPromises){
		var promises = slice(callerArguments);
		if ( promises.length === 1 && isArray(promises[0]) ) {
			if(! promises[0].length ){
				return defer.fulfilled([]);
			}
			promises = promises[0];
		}
		var args = []
			, d = defer()
			, c = promises.length
		;
		if ( !c ) {
			d.resolve(args);
		} else {
			var resolver = function(i){
				promises[i] = defer.promisify(promises[i]);
				promises[i].then(
					function(v){
						if (! (i in args) ) { //@todo check this is still required as promises can't be resolve more than once
							args[i] = returnPromises ? promises[i] : v;
							(--c) || d.resolve(args);
						}
					}
					, function(e){
						if(! (i in args) ){
							if( ! returnPromises ){
								d.reject(e);
							} else {
								args[i] = promises[i];
								(--c) || d.resolve(args);
							}
						}
					}
				);
			};
			for( var i = 0, l = c; i < l; i++ ){
				resolver(i);
			}
		}
		return d.promise;
	}

	/**
	 * return a promise for all given promises / values.
	 * the returned promises will be fulfilled with a list of resolved value.
	 * if any given promise is rejected then on the first rejection the returned promised will be rejected with the same reason
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 * @returns {promise} of a list of given promise resolution value
	 */
	defer.all = function(){ return multiPromiseResolver(arguments,false); };

	/**
	 * return an always fulfilled promise of array<promise> list of promises/values regardless they resolve fulfilled or rejected
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 *                     (non promise values will be promisified)
	 * @returns {promise} of the list of given promises
	 */
	defer.resolveAll = function(){ return multiPromiseResolver(arguments,true); };

	/**
	 * transform a typical nodejs async method awaiting a callback as last parameter, receiving error as first parameter to a function that
	 * will return a promise instead. the returned promise will resolve with normal callback value minus the first error parameter on
	 * fulfill and will be rejected with that error as reason in case of error.
	 * @param {object} [subject] optional subject of the method to encapsulate
	 * @param {function} fn the function to encapsulate if the normal callback should receive more than a single parameter (minus the error)
	 *                      the promise will resolve with the list or parameters as fulfillment value. If only one parameter is sent to the
	 *                      callback then it will be used as the resolution value.
	 * @returns {Function}
	 */
	defer.nodeCapsule = function(subject, fn){
		if ( !fn ) {
			fn = subject;
			subject = void(0);
		}
		return function(){
			var d = defer(), args = slice(arguments);
			args.push(function(err, res){
				err ? d.reject(err) : d.resolve(arguments.length > 2 ? slice(arguments, 1) : res);
			});
			try{
				fn.apply(subject, args);
			}catch(e){
				d.reject(e);
			}
			return d.promise;
		};
	};

	typeof window !== undefStr && (window.D = defer);
	typeof module !== undefStr && module.exports && (module.exports = defer);

})();

}).call(this,require('_process'))

},{"_process":17}],19:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root = 'undefined' == typeof window
  ? this
  : window;

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

function getXHR() {
  if (root.XMLHttpRequest
    && ('file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
}

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  this.text = this.req.method !='HEAD' 
     ? this.xhr.responseText 
     : null;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && str.length
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  var type = status / 100 | 0;

  // status / class
  this.status = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status || 1223 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self); 
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
    }

    self.callback(err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  if (2 == fn.length) return fn(err, res);
  if (err) return this.emit('error', err);
  fn(res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;
    if (0 == xhr.status) {
      if (self.aborted) return self.timeoutError();
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  if (xhr.upload) {
    xhr.upload.onprogress = function(e){
      e.percent = e.loaded / e.total * 100;
      self.emit('progress', e);
    };
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var serialize = request.serialize[this.getHeader('Content-Type')];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":20,"reduce":21}],20:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],21:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],22:[function(require,module,exports){
module.exports={
  "name": "deployr",
  "version": "7.4.0",
  "description": "Simplified JavaScript client library for making requests to DeployR.",
  "keywords": [
    "deployr",
    "deployr.io",
    "ajax",
    "R",
    "api",
    "simple"
  ],
  "author": "DeployR - Revolution Analytics Inc.",
  "contributors": [
    {
      "name": "Sean Wells"
    }
  ],
  "repository": {
    "type": "git",
    "url": "git://github.com/deployr/js-client-library.git"
  },
  "homepage": "http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc",
  "scripts": {
    "start": "gulp start",
    "build": "gulp"
  },
  "devDependencies": {
    "browserify": "^9.0.3",
    "gulp": "^3.8.11",
    "gulp-connect": "^2.2.0",
    "gulp-header": "^1.2.2",
    "gulp-jshint": "^1.9.2",
    "gulp-livereload": "^3.8.0",
    "gulp-plumber": "^0.6.6",
    "gulp-uglifyjs": "^0.6.0",
    "gulp-util": "^3.0.4",
    "tape": "^3.5.0",
    "vinyl-source-stream": "^1.0.0"
  },
  "dependencies": {
    "d.js": "^0.6.0",
    "superagent": "^0.21.0",
    "ws": "^0.4.32"
  },
  "main": "deployr.js",
  "engines": {
    "node": ">= 0.10.0"
  },
  "license": "Apache 2.0 License"
}

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXBsb3lyLmpzIiwiYXBpcy5qc29uIiwibGliL2RlcHJlY2F0ZWQuanMiLCJsaWIvZW1pdHRlci5qcyIsImxpYi9lbmNvZGVyLmpzIiwibGliL2VzLmpzIiwibGliL2xhbmcuanMiLCJsaWIvbG9nZ2VyLmpzIiwibGliL29wdGlvbmFsLmpzIiwibGliL3F1ZXVlLmpzIiwibGliL3JpbnB1dC5qcyIsImxpYi9yaW5wdXRzLmpzIiwibGliL3J0eXBlcy5qcyIsImxpYi9zZWxmaXNoLmpzIiwibGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvZC5qcy9saWIvRC5qcyIsIm5vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCJub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9ub2RlX21vZHVsZXMvcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qcyIsInBhY2thZ2UuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2p6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9hQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0eUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6akNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE1IGJ5IFJldm9sdXRpb24gQW5hbHl0aWNzIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIHdpbiAgICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSwgICBcbiAgICByZXF1ZXN0ICAgICA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKSxcbiAgICBEICAgICAgICAgICA9IHJlcXVpcmUoJ2QuanMnKSxcbiAgICBmcyAgICAgICAgICA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgYXBpcyAgICAgICAgPSByZXF1aXJlKCcuL2FwaXMuanNvbicpLCBcbiAgICBFdmVudFN0cmVhbSA9IHJlcXVpcmUoJy4vbGliL2VzJyksXG4gICAgdXRpbHMgICAgICAgPSByZXF1aXJlKCcuL2xpYi91dGlscycpLFxuICAgIExhbmcgICAgICAgID0gcmVxdWlyZSgnLi9saWIvbGFuZycpLCAgIFxuICAgIExvZ2dlciAgICAgID0gcmVxdWlyZSgnLi9saWIvbG9nZ2VyJyksICAgXG4gICAgUXVldWUgICAgICAgPSByZXF1aXJlKCcuL2xpYi9xdWV1ZScpLFxuICAgIEVtaXR0ZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW1pdHRlcicpLFxuICAgIGVuY29kZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW5jb2RlcicpLFxuICAgIEJhc2UgICAgICAgID0gcmVxdWlyZSgnLi9saWIvc2VsZmlzaCcpLkJhc2UsXG4gICAgUklucHV0ICAgICAgPSByZXF1aXJlKCcuL2xpYi9yaW5wdXQnKSwgICAgXG4gICAgUklucHV0cyAgICAgPSByZXF1aXJlKCcuL2xpYi9yaW5wdXRzJyksXG4gICAgbWVyZ2UgICAgICAgPSB1dGlscy5tZXJnZTtcblxuLypcbiAqIFR1cm4gZ2xvYmFsIGxvZ2dpbmcgb2ZmIGJ5IGRlZmF1bHRcbiAqL1xuTG9nZ2VyLnNldExldmVsKExvZ2dlci5PRkYpO1xuXG4vKlxuICogR2xvYmFsIG9wdGlvbnMgdGhhdCBwZXJzaXN0IHRocm91Z2ggYWxsIERlcGxveVIgcmVxdWVzdHMuXG4gKi9cbnZhciBnbG9iYWxPcHRpb25zID0geyBcbiAgY29yczogZmFsc2UsXG4gIGxvZ2dpbmc6IGZhbHNlLFxuICBzdGlja3k6IGZhbHNlLFxuICBjb29raWVzOiBudWxsLFxuICBob3N0OiAnJyxcbiAgYWxsb3dTZWxmU2lnbmVkU1NMQ2VydDogZmFsc2UsXG4gIG1heFJlcXVlc3RzOiBudWxsLCAvLyBubyBzb2NrZXQgcG9vbGluZyBpbiBodHRwLkFnZW50XG4gIGV2ZW50czp7fSxcbiAgc2V0OiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkgeyBcbiAgICBpZiAocHJvcCAhPT0gJ3NldCcpIHsgXG4gICAgICBpZiAocHJvcCA9PT0gJ2hvc3QnICYmIHZhbHVlKSB7ICAgICAgICAgXG4gICAgICAgICAvLyBCZSBtb3JlIGZvcmdpdmluZyBvbiB0aGUgZW50ZXJlZCBEZXBsb3lSICdlbmRwb2ludCc6XG4gICAgICAgICAvLyAgIC0gaHR0cChzKTovL2Rob3N0OnBvcnRcbiAgICAgICAgIC8vICAgLSBodHRwKHMpOi8vZGhvc3Q6cG9ydC9kZXBsb3lyXG4gICAgICAgICAvLyAgIC0gZGhvc3Q6cG9ydFxuICAgICAgICAgLy8gICAtIGRob3N0OnBvcnQvZGVwbG95ciAgICAgICAgIFxuICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8qJHxcXC8qZGVwbG95clxcLyokLywgJycpO1xuICAgICAgICAgdmFsdWUgPSAobmV3IFJlZ0V4cCgnXihodHRwfGh0dHBzKTovLycsICdpJykpLnRlc3QodmFsdWUpID8gdmFsdWUgOiBcbiAgICAgICAgICAgICdodHRwOi8vJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzW3Byb3BdID0gdmFsdWU7IFxuICAgIH0gXG4gIH1cbn07XG5cbi8qXG4gKiBUaGUgdG9wLWxldmVsIERlcGxveVIgQVBJIHJlc3BvbnNlIGVudGl0aWVzLlxuICovXG52YXIgVE9QTEVWRUxfRU5USVRJRVMgPSBbXG4gICd1c2VyJywgXG4gICdwcm9qZWN0JywgXG4gICd3b3Jrc3BhY2UnLCBcbiAgJ2V4ZWN1dGlvbicsIFxuICAnZGlyZWN0b3J5JywgXG4gICdyZXBvc2l0b3J5JywgXG4gICdwYWNrYWdlcycgXG5dO1xuXG4vKlxuICogTm90aWZ5IGdsb2JhbCBJTyBlcnJvciBldmVudHMgYWNjZXNzaWJsZSBieSBhbGwgc3Vic2NyaWJlcnMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5mdW5jdGlvbiByYWlzZUdsb2JhbEVycm9ycyhhcGksIHJlcykge1xuICB2YXIgY29kZSAgICA9IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlIDogcmVzLnN0YXR1cyxcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuXG4gIC8vIC0tIGdsb2JhbCBldmVudHMgaWYgcHJvdmlkZWQgLS1cbiAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzKSB7XG4gICAgaWYgKCFyZXMuZGVwbG95cikge1xuICAgICAgcmVzID0gcmVzLnRleHQ7XG4gICAgfVxuXG4gICAgY29udGV4dCA9IGdsb2JhbE9wdGlvbnMuZXZlbnRzLmN0eCB8fCBjb250ZXh0O1xuXG4gICAgLy8gLS0gZ2VuZXJhbCBnbG9iYWwgZmFpbHVyZSAtLVxuICAgIGlmIChnbG9iYWxPcHRpb25zLmV2ZW50cy5lcnJvcikge1xuICAgICAgZ2xvYmFsT3B0aW9ucy5ldmVudHMuZXJyb3IuYXBwbHkoY29udGV4dCwgW2FwaSwgcmVzXSk7XG4gICAgfVxuXG4gICAgLy8gLS0gSFRUUCBvciBEZXBsb3lSIGdsb2JhbCBlcnJvcnMgLS0gICAgXG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzW2NvZGVdKSB7XG4gICAgICBnbG9iYWxPcHRpb25zLmV2ZW50c1tjb2RlXS5hcHBseShjb250ZXh0LCBbYXBpLCByZXNdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYERlcGxveVJgIHJlcXVlc3QgY2xhc3MgaXMgYSB1dGlsaXR5IHRoYXQgYnJva2VycyBIVFRQIHJlcXVlc3RzIHRocm91Z2ggYSBcbiAqIHNpbXBsaWZpZWQgZmx1aWQgaW50ZXJmYWNlIHRvIERlcGxveVIuXG4gKlxuICogQG1vZHVsZSBkZXBsb3lyXG4gKiBAZm9yIGRlcGxveXJcbiAqL1xudmFyIERlcGxveVIgPSBCYXNlLmV4dGVuZChFbWl0dGVyLCBSSW5wdXRzLCB7XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVwbG95UmAgUmVxdWVzdCBjbGFzcyBpcyBhIHV0aWxpdHkgdGhhdCBicm9rZXJzIEhUVFAgcmVxdWVzdHMgdGhyb3VnaCBcbiAgICogYSBzaW1wbGlmaWVkIGZsdWlkIGludGVyZmFjZSB0byBEZXBsb3lSLlxuICAgKiBcbiAgICogQGNsYXNzIFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgRGVwbG95UiBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpbmsgVGhlIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgdGhlIHByZXZpb3VzIHJlcXVlc3QuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShhcGksIGxpbmspIHtcbiAgICAgRW1pdHRlci5pbml0aWFsaXplLmNhbGwodGhpcywge30pO1xuICBcbiAgICAgdmFyIG9wdHMgPSBnbG9iYWxPcHRpb25zO1xuXG4gICAgIGlmICghYXBpc1thcGldKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBUEkgXCInICsgYXBpICsgJ1wiJyk7IH1cbiAgICBcbiAgICAgdGhpcy5hcGkgICAgICAgID0gbWVyZ2UoeyAnY2FsbCc6IGFwaSB9LCBhcGlzW2FwaV0pOyAgICBcbiAgICAgdGhpcy5saW5rICAgICAgID0gbGluayB8fCB7fTtcbiAgICAgdGhpcy5xICAgICAgICAgID0gdGhpcy5saW5rLnF1ZXVlIHx8IG5ldyBRdWV1ZSgpO1xuICAgICB0aGlzLmRlZmVycmVkICAgPSB0aGlzLmxpbmsuZGVmZXJyZWQgfHwgRCgpO1xuICAgICB0aGlzLmNvb2tpZXMgICAgPSB0aGlzLmxpbmsuY29va2llcztcbiAgICAgdGhpcy5sb2dnZXIgICAgID0gTG9nZ2VyLmdldChhcGksIExvZ2dlci5PRkYpOyAvLyB0cmFuc2FjdGlvbi1sZXZlbCBsb2dnaW5nXG4gICAgIHRoaXMucGFyYW1zICAgICA9IHt9O1xuICAgICB0aGlzLmlucHV0cyAgICAgPSBbXTsgLy8gcmlucHV0cyBsaXN0IFxuICAgICB0aGlzLm91dHB1dHMgICAgPSBbXTsgLy8gcm91dHB1dCBvYmplY3QgbGlzdFxuICAgICB0aGlzLnJzdHJlYW0gICAgPSBmYWxzZTtcbiAgICAgdGhpcy5kZWxheWVkICAgID0gZmFsc2U7XG4gICAgIHRoaXMuZ2xvYmFsRXZ0cyA9IHRydWU7IC8vIHN1cHByZXNzfHJhaXNlIGdsb2JhbCBldmVudHMgZm90IHRoaXMgYGlvYCAgICAgXG4gICAgIHRoaXMuZmlsZSAgICAgICA9IG51bGw7IFxuICAgICB0aGlzLmZpbHRlciAgICAgPSBudWxsOyBcblxuICAgICAvLyBwcmVzZXQgZGVwbG95cidzIGFzc2lnbmVkIHJlc3BvbnNlIGZvcm1hdCBmb3IgYHRoaXNgIGFwaVxuICAgICB0aGlzLmRhdGEoeyBmb3JtYXQ6IHRoaXMuYXBpLmZvcm1hdCB9KTtcblxuICAgICAvLyB3cmFwIHN1cGVyYWdlbnQgZm9yIHRoZSBoZWF2eSBsaWZ0aW5nICAgICBcbiAgICAgdGhpcy5yZXEgPSBcbiAgICAgICAgcmVxdWVzdFt0aGlzLmFwaS5tZXRob2QudG9Mb3dlckNhc2UoKV0ob3B0cy5ob3N0ICsgJy9kZXBsb3lyJyArIGFwaSk7XG4gICAgIHRoaXMucmVxLnRpbWVvdXQoMjAgKiA2MCAqIDEwMDApOyAvLyBkZWZhdWx0IHRpbWVvdXQgLS0+IDIwIG1pbnV0ZXNcblxuICAgICAvLyBBbGwgQ09SUyBkZXBsb3lyIGNhbGxzIHJlcXVpcmUgc3RpY2t5IHNlc3Npb25zXG4gICAgIGlmICh3aW4gJiYgZ2xvYmFsT3B0aW9ucy5jb3JzKSB7IHRoaXMucmVxLndpdGhDcmVkZW50aWFscygpOyB9XG5cbiAgICAgLy8gTm9kZS5qcyAtIGFjY2VzcyBhbiBTU0wgZW5kcG9pbnQgd2l0aCBzZWxmIHNpZ25lZCBjZXJ0cyBmb3IgdGVzdGluZ3xkZXZcbiAgICAgaWYgKCF3aW4gJiYgZ2xvYmFsT3B0aW9ucy5hbGxvd1NlbGZTaWduZWRTU0xDZXJ0KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCc7ICAgICAgICBcbiAgICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgc2NvcGUgY29udGV4dCBmb3IgdGhlIGNvbmZpZ3VyZWQgYC5lbmQoKWAgYW5kIGAuZXJyb3IoKWAgZXZlbnQgICAgXG4gICAqIGhhbmRsZXIgY2FsbGJhY2tzIG9uIHRoaXMgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBjdHhcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgVGhlIGB0aGlzYCBvYmplY3QgZm9yIHRoZSBjb25maWd1cmVkIGAuZW5kKClgIGFuZFxuICAgKiBgLmVycm9yKClgIGV2ZW50IGhhbmRsZXJzIG9uIHRoaXMgcmVxdWVzdC5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovIFxuICBjdHg6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdGhpcy5zY29wZSA9IGNvbnRleHQgfHwgdGhpcztcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdXBwcmVzcyBvciByYWlzZSBnbG9iYWwgZXZlbnRzIGZvciB0aGlzIGBpb2AgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBnbG9iYWxcbiAgICogQHBhcmFtIHtCb29sZWFufSByYWlzZSBgdHJ1ZWAgdG8gcmFpc2UgZ2xvYmFsIGV2ZW50cywgYGZhbHNlYCB0byBzdXByZXNzIFxuICAgKiBldmVudCBmaXJpbmcgZ2xvYmFsbHkuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICBcbiAgZ2xvYmFsOiBmdW5jdGlvbihyYWlzZSkge1xuICAgIHRoaXMuZ2xvYmFsRXZ0cyA9IExhbmcuaXNCb29sZWFuKHJhaXNlKSA/IHJhaXNlIDogdGhpcy5nbG9iYWxFdnRzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICBcblxuICAvKipcbiAgICogUmV0cmlldmUgZGV0YWlscyBhYm91dCB1c2VyLlxuICAgKiAgIFxuICAgKiBAbWV0aG9kIGFib3V0XG4gICAqIEByZXR1cm4ge09iamVjdH0gZGV0YWlscyBhYm91dCB1c2VyIG90aGVyd2llcyBgbnVsbGAuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBhYm91dDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gdGhpcy5yZXEucmVzO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpWydjYWxsJ10gPT09ICcvci91c2VyL2xvZ2luJyAmJiByZXNwb25zZSA/IFxuICAgICAgICAgICByZXNwb25zZS5ib2R5LmdldCgndXNlcicpIDogbnVsbDtcbiAgfSwgIFxuXG4gIC8qKlxuICAgKiBTaGFyZXMgdGhlIGNvb2tpZXMgZnJvbSBhIGRpZmZyZW50IGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZVxuICAgKiBhY3Jvc3MgYHRoaXNgIHJlcXVlc3QgYW5kIGFsbCByZXF1ZXN0cyBjaGFpbmVkIHRvIGl0LlxuICAgKlxuICAgKiBAbWV0aG9kIHNoYXJlXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgc2hhcmU6IGZ1bmN0aW9uIChjb29raWVzKSB7XG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuc3RpY2t5KSB7XG4gICAgICBpZiAoZ2xvYmFsT3B0aW9ucy5jb29raWVzKSB7XG4gICAgICAgIHRoaXMuY29va2llcyA9IGdsb2JhbE9wdGlvbnMuY29va2llcy5zbGljZSgwKTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29va2llcykgeyBcbiAgICAgICAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzLnNsaWNlKDApOyBcbiAgICAgICAgICBnbG9iYWxPcHRpb25zLnNldCgnY29va2llcycsIHRoaXMuY29va2llcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb29raWVzID0gKGNvb2tpZXMgPyBjb29raWVzLnNsaWNlKDApIDogdGhpcy5jb29raWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSFRUUCBjb29raWUgcHJldmlvdXNseSBzZW50IGJ5IHRoZSBzZXJ2ZXIgd2l0aCBTZXQtQ29va2llLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBwYXNzZWQgdG8gYC5zaGFyZShydXNlci5nZXRDb29raWVzKCkpYCBvZiBhIGRpZmZyZW50XG4gICAqIGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZSBhY3Jvc3MgcmVxdWVzdHMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0Q29va2llc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIEhUVFAgY29va2llIHByZXZpb3VzbHkgc2VudCBieSB0aGUgc2VydmVyIHdpdGggXG4gICAqIFNldC1Db29raWUuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGdldENvb2tpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jb29raWVzO1xuICB9LCBcblxuICBkZWxheTogZnVuY3Rpb24gKG1zKSB7XG4gICAgLy8gVE9ETzogc3VwcG9ydCBkZWxheWVkIHJlcXVlc3RzIGJhc2VkIG9uIG1zIGZvciBub3cgdGhpcyBpcyBqdXN0IGEgcGF1c2UuXG4gICAgdGhpcy5kZWxheWVkID0gIWlzTmFOKHBhcnNlRmxvYXQobXMpKSAmJiBpc0Zpbml0ZShtcykgPyBtcyA6IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgICBcblxuICAvKipcbiAgICogVW53aW5kIHRoZSBxdWV1ZSBjaGFpbiBjbGVhcmluZyByZXF1ZXN0cyB0aGF0IG1pZ2h0IGhhdmUgZGVsYXlzIGF0dGFjaGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIGRyYWluXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgb3JcbiAgICogXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGRyYWluOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5xLmZsdXNoKCk7IFxuXG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWQucHJvbWlzZTtcbiAgfSwgICBcblxuICAvKipcbiAgICogVGhlIGAucHJvbWlzZSgpYCBtZXRob2QgcmV0dXJucyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBQcm9taXNlIHRoYXQgaXMgXG4gICAqIHJlc29sdmVkIG9uY2UgYWxsIERlcGxveVIgYC5pbygpYCByZXF1ZXN0cyBoYXZlIGVuZGVkLlxuICAgKiAgIFxuICAgKiBAbWV0aG9kIHByb21pc2VcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvclxuICAgKiBcInJlamVjdFwiIGNhbGxiYWNrLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gICAgIFxuICBwcm9taXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmQoKTtcblxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkLnByb21pc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFib3J0IHRoZSBEZXBsb3lSIHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgYWJvcnQgIFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXEuYWJvcnQoKTtcbiAgICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gICAgdGhpcy5kZWZlcnJlZC5yZWplY3QodGhpcy5faGFuZGxlRXJyb3IoeyBcbiAgICAgICAgc3RhdHVzOiAnYWJvcnQnLFxuICAgICAgICB0ZXh0OiAnRGVwbG95UiByZXF1ZXN0IGFib3J0ZWQuJ1xuICAgIH0pKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gLyoqXG4gICogU2V0IHRpbWVvdXQgdG8gYG1zYC5cbiAgKlxuICAqIEBtZXRob2QgdGltZW91dCAgXG4gICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICogQGFwaSBwdWJsaWNcbiAgKi8gIFxuICB0aW1lb3V0OiBmdW5jdGlvbiAobXMpIHtcbiAgICB0aGlzLnJlcS50aW1lb3V0KG1zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gLyoqXG4gICogVHVybiBsb2dnaW5nIG9uIGZvciB0aGUgc3BlY2lmaWMgdHJhbnNhY3Rpb24uXG4gICpcbiAgKiBAbWV0aG9kIGxvZ1xuICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAqIEBhcGkgcHVibGljXG4gICovIFxuICBsb2c6IGZ1bmN0aW9uIChsZXZlbCkge1xuICAgIHRoaXMubG9nZ2VyLnNldExldmVsKGxldmVsIHx8IExvZ2dlci5ERUJVRyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRmlsdGVycyBzdWNjZXNzZnVsIHJlc3BvbnNlcyB0byBjb250YWluIG9ubHkgYSB0b3AtbGV2ZWwgRGVwbG95UiBBUEkgXG4gICAqIHJlc3BvbnNlIGVudGl0aWVzOlxuICAgKiAtICd1c2VyJ1xuICAgKiAtICdwcm9qZWN0J1xuICAgKiAtICd3b3Jrc3BhY2UnIFxuICAgKiAtICdleGVjdXRpb24nIFxuICAgKiAtICdkaXJlY3RvcnknIFxuICAgKiAtICdyZXBvc2l0b3J5J1xuICAgKiAtICdwYWNrYWdlcycgXG4gICAqICAgXG4gICAqIEBtZXRob2QgZW50aXR5XG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZW50aXR5OiBmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgdGhpcy5maWx0ZXIgPSB1dGlscy5pbkFycmF5KFRPUExFVkVMX0VOVElUSUVTLCBlbnRpdHkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHJlcXVlc3QgZGF0YSBiZWluZyBzZW50IHRvIGEgRGVwbG95UiBBUEkuIFxuICAgKlxuICAgKiBAbWV0aG9kIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIG9iamVjdCBsaXRlcmFsIGNvbmZpZ3VyYXRpb24gaGFzaC4gXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fTsgICAgXG5cbiAgICAvLyByZW1vdmUgYW55IGlubGluZWQgcmlucHV0KHMpIGFuZCBhdHRhY2ggdGhlbSB0byB0aGUgcmlucHV0KHMpIHByb3BlcnR5XG4gICAgaWYgKGRhdGEucmlucHV0IHx8IGRhdGEucmlucHV0cykge1xuICAgICAgdGhpcy5yaW5wdXQoZGF0YS5yaW5wdXQpO1xuICAgICAgdGhpcy5yaW5wdXRzKGRhdGEucmlucHV0cyk7XG4gICAgfSBcblxuICAgIC8vIHJlbW92ZSBhbnkgYHJlc2VydmVkYCB2YWx1ZXMgdGhhdCBjb3VsZCBoYXZlIGJlZW4gcGFzc2VkIGJ5IG1pc3Rha2VcbiAgICB2YXIgQkxBQ0tMSVNUID0gWydyaW5wdXQnLCAncmlucHV0cycsICdfX2Nvb2tpZXNfXyddO1xuICAgIEJMQUNLTElTVC5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7IGRlbGV0ZSBkYXRhW3BhcmFtXTsgfSk7ICBcblxuICAgIHRoaXMucGFyYW1zID0gbWVyZ2UodGhpcy5wYXJhbXMsIGRhdGEpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGEgZmlsZSB0byBiZSB1cGxvYWRlZC4gXG4gICAqXG4gICAqIEBtZXRob2QgYXR0YWNoXG4gICAqIEBwYXJhbSB7RmlsZXxCbG9ifHBhdGh9IGZpbGUgVGhlIGZpbGUgdG8gYmUgYXR0YWNoZWQgZm9yIGFuIHVwbG9hZC4gRm9yIFxuICAgKiBCcm93c2VyIGVudmlyb25tZW50cyB0aGUgSFRNTDUgRmlsZXxCbG9iIGlzIHVzZWQuIEZvciB0aGUgTm9kZS5qcyBcbiAgICogZW52aXJvbm1lbnQsIGEgZmlsZSBwYXRoIGlzIGFjY2VwdGVkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgKG9wdGlvbmFsKSB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byBiZSB1cGxvYWRlZC4gXG4gICAqIFRoaXMgbmFtZSBkb2VzIG5vdCBoYXZlIHRvIG1hdGNoIHRoZSBhY3R1YWwgc291cmNlIGZpbGVuYW1lLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGF0dGFjaDogZnVuY3Rpb24gKGZpbGUsIGZpbGVuYW1lKSB7XG4gICAgaWYgKHRoaXMuYXBpLnVwbG9hZCkge1xuICAgICAgdGhpcy5maWxlID0gZmlsZTtcblxuICAgICAgLy8gb3B0aW9uYWwgZmlsZW5hbWUgaGVyZSBmb3IgY29udmVuaWVuY2VcbiAgICAgIGlmIChmaWxlbmFtZSkgeyB0aGlzLmRhdGEoIHsgZmlsZW5hbWU6IGZpbGVuYW1lIH0gKTsgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdXBwb3J0ZWQgb25seSBpbiBOb2RlLmpzLCB0aGlzIG1ldGhvZCB3b3JrcyBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBcbiAgICogYXR0YWNoIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBmaWxlIHNob3VsZCBiZSByZWFkIGluIGFzIGEgcmVhZGFibGUgXG4gICAqIHN0cmVhbSBkdXJpbmcgYSBmaWxlIHVwbG9hZC5cbiAgICpcbiAgICogQG1ldGhvZCBzdHJlYW1cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgKG9wdGlvbmFsKSB0aGUgUmVhZGFibGUgU3RyZWFtIG9wdGlvbnMgaGFzaC5cbiAgICogIGBgYFxuICAgKiAgICB7IGZsYWdzOiAncicsXG4gICAqICAgICAgZW5jb2Rpbmc6IG51bGwsXG4gICAqICAgICAgZmQ6IG51bGwsXG4gICAqICAgICAgbW9kZTogMDY2NixcbiAgICogICAgICBhdXRvQ2xvc2U6IHRydWVcbiAgICogICAgfVxuICAgKiBgYGBcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBzdHJlYW06IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJzdHJlYW0gPSAoIXdpbiAmJiB0aGlzLmFwaS51cGxvYWQpOyAvL25vZGVqcyBvbmx5XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgXG4gIC8qKlxuICAgKiBBY3RzIGFzIGEgZmluYWxseSBzdGF0ZW1lbnQgYWxsb3dpbmcgeW91IHRvIGV4ZWN1dGUgXCJjbGVhbnVwXCIgdHlwZSB0YXNrcyBcbiAgICogaW4gYSByZXF1ZXN0IGNoYWluLiBJdCBhcnJhbmdlcyBmb3IgY2xlYW51cCB0byBiZSBjYWxsZWQsIHdpdGggbm8gXG4gICAqIGFyZ3VtZW50cywgd2hlbiB0aGUgRGVwbG95UiByZXF1ZXN0IGNoYWluIGlzIGVpdGhlciBjb21wbGV0ZWx5IGZ1bGZpbGxlZCBcbiAgICogb3IgcmVqZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZW5zdXJlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGVuc3VyZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5kZWZlcnJlZC5wcm9taXNlLmVuc3VyZShmbik7XG5cbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuICB9LFxuICAgICAgXG4gIC8qKlxuICAgKiBUaGUgZ2VuZXJhbCBmYWlsdXJlIGNhbGxiYWNrLiBJZiBjYWxsZWQsIGFsbCBEZXBsb3lSIGVycm9ycyBmb3IgdGhpcyBcbiAgICogdHJhbnNhY3Rpb24gd2lsbCBiZSByZXR1cm5lZCBoZXJlIHdoZW4gcmFpc2VkLlxuICAgKlxuICAgKiBAbWV0aG9kIGVycm9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBlcnJvcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5vbignZXJyb3InLCBmbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogU3RyZWFtIHRoZSBEZXBsb3lSIHJlc3BvbnNlIGludG8gdGhlIHBpcGUuIEl0IGlzIGltcG9ydGFudCB0byBub3RlIHRoYXQgaWYgXG4gICAqIHRoZSBgLnBpcGUoKWAgbWV0aG9kIGlzIG5ldmVyIGNhbGxlZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBiZSBzZW50LlxuICAgKlxuICAgKiBUaGUgYC5waXBlKClgIG1ldGhvZCBzaG91bGQgYmUgYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byBgLmVuZCgpYCBhbmQgXG4gICAqIG5ldmVyIGFsb25nIHNpZGUgb2YgaXQuIGAucGlwZSgpYCBhbmQgYC5lbmQoKWAgYXJlIGFuIGVpdGhlci1vci5cbiAgICpcbiAgICogQG1ldGhvZCBwaXBlXG4gICAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gQSBkZXN0aW5hdGlvbiBTdHJlYW0uXG4gICAqIEByZXR1cm4ge1N0cmVhbX0gVGhlIHBhc3NlZCBpbiBkZXN0aW5hdGlvbiBzdHJlYW0gdG8gYmUgdXNlZCBmb3IgYWRkaXRpb25hbCBcbiAgICogcGlwaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcGlwZTogZnVuY3Rpb24gKGRlc3QpIHtcbiAgICB2YXIgcSAgID0gdGhpcy5xLFxuICAgICAgICBhcGkgPSB0aGlzLmFwaTsgICAgICAgIFxuXG4gICAgcS5hZGQoZnVuY3Rpb24ocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKSB7ICAgIFxuICAgICAgLy8gYnJha2UgdGhlIGNhbGwgY2hhaW4gb24gZXJyb3IgICAgICBcbiAgICAgIGlmIChlcnJvcikgeyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KGVycm9yKTsgICAgICBcbiAgICAgICAgcS5mbHVzaChyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpOyAvLyBkcmFpbiB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9wcmVwUmVxdWVzdChyZXNwb25zZUNoYWluLCBwcmV2QXJncyk7XG5cbiAgICAgIExvZ2dlci5pbmZvKCdwaXBlKCknLCBhcGksIHRoaXMucmVxKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ3BpcGUoKScsIGFwaSwgdGhpcy5yZXEpOyAgIFxuXG4gICAgICB2YXIgc3RyZWFtID0gdGhpcy5yZXEucGlwZShkZXN0KTtcbiAgICAgIHEueWllbGQodHJ1ZSk7XG4gICAgICBzdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKCkgeyB9KTsgICAgXG4gICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uKCkgeyB9KTsgICAgIFxuICAgICAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24oKSB7IH0pOyAgICAgIFxuICAgIH0sIHRoaXMpO1xuICBcbiAgICBpZiAocS5zaXplKCkgPD0gMSkgeyBxLmZsdXNoKCk7IH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBpcyByZWFkeSB0byBiZSBzZW50IHRvIERlcGxveVIuIEl0IGlzIGltcG9ydGFudCBcbiAgICogdG8gbm90ZSB0aGF0IGlmIHRoZSBgLmVuZCgpYCBtZXRob2QgaXMgbmV2ZXIgY2FsbGVkIHRoZSByZXF1ZXN0IHdpbGwgbm90IGJlXG4gICAqIHNlbnQuXG4gICAqXG4gICAqIEBtZXRob2QgZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gXG4gIGVuZDogZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHNlbGYgICA9IHRoaXMsXG4gICAgICAgIHEgICAgICA9IHRoaXMucSxcbiAgICAgICAgYXBpICAgID0gdGhpcy5hcGksXG4gICAgICAgIGFyZ3MgICA9IG51bGwsXG4gICAgICAgIGVudGl0eSA9IHRoaXMuZmlsdGVyO1xuXG4gICAgcS5hZGQoZnVuY3Rpb24ocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKSB7XG4gICAgICAvLyBicmVhayB0aGUgY2FsbCBjaGFpbiBvbiBlcnJvciAgICAgIFxuICAgICAgaWYgKGVycm9yKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QoZXJyb3IpOyAgICAgICAgXG4gICAgICAgIHEuZmx1c2gocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKTsgLy8gZHJhaW4gdGhlIHF1ZXVlXG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fcHJlcFJlcXVlc3QocmVzcG9uc2VDaGFpbiwgcHJldkFyZ3MpO1xuXG4gICAgICBMb2dnZXIuaW5mbygnaW8oKScsIGFwaSwgdGhpcy5yZXEpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnaW8oKScsIGFwaSwgdGhpcy5yZXEpOyAgICBcblxuICAgICAgdGhpcy5yZXEuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLnNoYXJlKHNlbGYuY29va2llcyB8fCByZXMuaGVhZGVyc1snc2V0LWNvb2tpZSddKTsgICAgICAgICBcblxuICAgICAgICAvLyAtLSBsb2cgY29va2llcyBhY3Jvc3MgcmVxdWVzdHMgLS1cbiAgICAgICAgaWYgKHNlbGYuY29va2llcykge1xuICAgICAgICAgIExvZ2dlci5pbmZvKCdjb29raWVzJywgYXBpLCBzZWxmLmNvb2tpZXMpOyBcbiAgICAgICAgICBzZWxmLmxvZ2dlci5pbmZvKCdjb29raWVzJywgYXBpLCBzZWxmLmNvb2tpZXMpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9yID0gc2VsZi5faGFuZGxlRXJyb3IocmVzKTtcbiAgICAgICAgdmFyIGRyZXMgPSAocmVzLmJvZHkgJiYgcmVzLmJvZHkuZGVwbG95ciA/IHJlcy5ib2R5IDogcmVzKTsgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgc2VsZi5pbnB1dHMgPSBbXTtcbiAgICAgICAgc2VsZi5vdXRwdXRzID0gW107XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAvLyAtLSBMb2cgZ2xvYmFsICsgdHJhbnNhY3Rpb24gbG9nIC0tXG4gICAgICAgICAgIExvZ2dlci5pbmZvKCdlbmQoKScsIGFwaSwgZHJlcywgcmVzKTtcbiAgICAgICAgICAgc2VsZi5sb2dnZXIuaW5mbygnZW5kKCknLCBhcGksIGRyZXMsIHJlcyk7XG5cbiAgICAgICAgICAgLy8gLS0gd2FsayByZXNwb25zZSBmb3IgdG9wLWxldmVsIGVudGl0eSByZXNwb25zZSBhc3NpZ25tZW50IC0tICAgICAgICBcbiAgICAgICAgICAgaWYgKGVudGl0eSkgeyBkcmVzID0gZHJlcy5kZXBsb3lyLnJlc3BvbnNlW2VudGl0eV0gfHwgZHJlczsgfVxuXG4gICAgICAgICAgIGRyZXMuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7IFxuICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZ2V0KGRyZXMuZGVwbG95ci5yZXNwb25zZSwga2V5KTsgXG4gICAgICAgICAgIH07XG5cbiAgICAgICAgICAgZHJlcy53b3Jrc3BhY2UgPSBmdW5jdGlvbihuYW1lKSB7IFxuICAgICAgICAgICAgICByZXR1cm4gdXRpbHMud29ya3NwYWNlKGRyZXMuZGVwbG95ci5yZXNwb25zZSwgbmFtZSk7IFxuICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIC8vIC0tIGNhbGxiYWNrIC0tXG4gICAgICAgICAgIGlmIChmbikgeyBhcmdzID0gZm4uYXBwbHkoc2VsZi5zY29wZSwgW2RyZXMsIHJlc3BvbnNlQ2hhaW5dKTt9XG5cbiAgICAgICAgICAgLy8gLS0gbm90aWZ5IHRoYXQgdGhlIHF1ZXVlIGhhcyBiZWVuIGRyYWluZWQuLi4gLS1cbiAgICAgICAgICAgaWYgKHEuc2l6ZSgpID09PSAwKSB7IFxuICAgICAgICAgICAgIHNlbGYuX2NsZWFyKCk7XG4gICAgICAgICAgICAgc2VsZi5kZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlQ2hhaW4gfHwgZHJlcyk7XG4gICAgICAgICAgIH0gICAgICAgICAgXG5cbiAgICAgICAgICAgLy8gLS0gaW5jbHVkZSBjb29raWVzIGluIG5leHQgcmVxdWVzdCBpbiB0aGUgcXVldWUgLS1cbiAgICAgICAgICAgYXJncyA9IG1lcmdlKGFyZ3MsIHsgX19jb29raWVzX186IHNlbGYuY29va2llcyB9KTsgICAgICAgICAgXG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgIHEueWllbGQoZmFsc2UpO1xuICAgICAgICBxLmZsdXNoKGRyZXMsIGVycm9yLCBhcmdzKTsgLy8gcGFzcyByZXN1bHR8ZXJyb3J8YXJncyB0byBuZXh0IFxuICAgICAgfSk7XG5cbiAgICAgIHEueWllbGQodHJ1ZSk7XG4gICAgfSwgdGhpcywgdGhpcy5kZWxheWVkKTtcbiAgXG4gICAgaWYgKCF0aGlzLmRlbGF5ZWQgJiYgcS5zaXplKCkgPD0gMSkgeyBxLmZsdXNoKCk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LCBcblxuICAvKiogXG4gICAqIEFkZCBhbiBhZGRpdGlvbmFsIElPIHJlcXVlc3QgdG8gdGhlIGV4c2lzdGluZyBzZXF1ZW50aWFsIHJlcXVlc3QgY2hhaW4uXG4gICAqXG4gICAqIEBtZXRob2QgaW9cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBPbmUgb2YgdGhlIHN1cHBvcnRlZCBEZXBsb3lSIEFQSXMuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICAgXG4gIGlvOiBmdW5jdGlvbiAoYXBpKSB7ICAgIFxuICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGksIHsgXG4gICAgICBjb29raWVzOiB0aGlzLmNvb2tpZXMsIFxuICAgICAgcXVldWU6IHRoaXMucSwgXG4gICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiBcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGFkZGluZyBhbiBhZGRpdGlvbmFsIHNjcmlwdCBleGVjdXRpb24gdG8gdGhlIFxuICAgKiBleHNpc3Rpbmcgc2VxdWVudGlhbCByZXF1ZXN0IGNoYWluLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcmlwdFxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gQXJndW1lbnRzIHRvIGRlZmluZSB0aGUgZnVsbHkgcXVhbGlmaWVkIHNjcmlwdCBmb3IgXG4gICAqIGV4ZWN1dGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgc2NyaXB0OiBmdW5jdGlvbigpIHtcbiAgICAgdmFyIGFyZ3MgPSB1dGlscy5zaWduYXR1cmUoYXJndW1lbnRzKSxcbiAgICAgICAgIG9wdHMgPSBhcmdzLm9wdHMsXG4gICAgICAgICBhcGkgID0gYXJncy5hcGksXG4gICAgICAgICBsaW5rID0geyBcbiAgICAgICAgICBjb29raWVzOiB0aGlzLmNvb2tpZXMsIFxuICAgICAgICAgIHF1ZXVlOiB0aGlzLnEsIFxuICAgICAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgICAgIH07ICBcblxuICAgIC8vIGNvbnZlbmllbmNlIC0gaWYgdGhlIHByb2plY3QgaXMgYSBib29sZW4gYHRydWVgIHJhdGhlciB0aGFuIGEgcGlkLCBmaXJzdFxuICAgIC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCB0aGVuIHByZXBhcmUgdGhlIHByb2plY3QgYXBpIGNhbGwgdG8gZXhlY3V0ZVxuICAgIGlmIChhcmdzLmNyZWF0ZSkge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2NyZWF0ZScsIGxpbmspXG4gICAgICAgICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvamVjdDogcmVzLmdldCgncHJvamVjdCcpLnByb2plY3QgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLmlvKGFwaSlcbiAgICAgICAgICAgICAgIC5kYXRhKG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpLCBsaW5rKS5kYXRhKG9wdHMpO1xuICAgIH0gICAgXG4gIH0sXG5cbiAgLyoqIFxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgYWRkaW5nIGFuIGFkZGl0aW9uYWwgcmVwb3NpdG9yeS1tYW5hZ2VkIHNoZWxsIFxuICAgKiBzY3JpcHQgZXhlY3V0aW9uIHRvIHRoZSBleHNpc3Rpbmcgc2VxdWVudGlhbCByZXF1ZXN0IGNoYWluLlxuICAgKlxuICAgKiBUaGlzIGNhbGwgZXhlY3V0ZXMgcmVwb3NpdG9yeS1tYW5hZ2VkIHNoZWxsIHNjcmlwdHMgLnNoLCAuY3NoLCAuYmFzaCwgLmJhdCBcbiAgICogb24gdGhlIERlcGxveVIgc2VydmVyLiBEdWUgdG8gdGhlIHNwZWNpYWwgc2VjdXJpdHkgY29uY2VybnMgYXNzb2NpYXRlZCB3aXRoIFxuICAgKiBleGN1dGluZyBzaGVsbCBzY3JpcHRzIG9uIHRoZSBEZXBsb3lSIHNlcnZlciwgb25seSBzaGVsbCBzY3JpcHRzIG93bmVkIGJ5IFxuICAgKiBfQURNSU5JU1RSQVRPUl8gdXNlcnMgY2FuIGJlIGV4ZWN1dGVkIG9uIHRoaXMgQVBJIGNhbGwuIEFueSBhdHRlbXB0IHRvIFxuICAgKiBleGVjdXRlIGEgc2hlbGwgc2NyaXB0IHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSB0aGF0IGlzIG5vdCBvd25lZCBieSBhbiBcbiAgICogX0FETUlOSVNUUkFUT1JfIHVzZXIgd2lsbCBiZSByZWplY3RlZC5cbiAgICpcbiAgICogVG8gZXhlY3V0ZSBhIHJlcG9zaXRvcnktbWFuYWdlZCBzaGVsbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgXG4gICAqIHBhcmFtZXRlciB2YWx1ZXMgZm9yIF9hdXRob3JfLCBfZGlyZWN0b3J5XywgX2ZpbGVuYW1lXy4gVGhpcyBjYW4gYmVcbiAgICogYWNoaWV2ZWQgYnkgcHJvdmlkaW5nIGEgZnVsbHkgcXVhbGlmaWVkIHNoZWxsIHNjcmlwdCBcbiAgICogYC88YXV0aG9yPi88ZGlyZWN0b3J5Pi88ZmlsZW5hbWU+YCwgZm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICBgYGBcbiAgICogIC5zaGVsbCgnL2FkbWluL2V4dGVybmFsOnB1YmxpYzphZG1pbi9lY2hvLnNoJywgJ2VjaG8uc2ggYXJncyB0byBwYXNzLicpXG4gICAqICBgYGBcbiAgICpcbiAgICogQG1ldGhvZCBzaGVsbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZXBhdGggdG8gZGVmaW5lIHRoZSBmdWxseSBxdWFsaWZpZWQgc2hlbGwgc2NyaXB0IGZvclxuICAgKiBleGVjdXRpb24uIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXJncyAob3B0aW9uYWwpIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgaW50byB0aGUgc2hlbGwgXG4gICAqIHNjcmlwdCBvbiBleGVjdXRpb24uXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHNoZWxsOiBmdW5jdGlvbihwYXRoLCBhcmdzKSB7ICAgXG4gICAgdmFyIGxpbmsgPSB7IFxuICAgICAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcywgXG4gICAgICAgICAgcXVldWU6IHRoaXMucSwgXG4gICAgICAgICAgZGVmZXJyZWQ6IHRoaXMuZGVmZXJyZWRcbiAgICAgICAgfSxcbiAgICAgICAgdG9rZW5zID0gTGFuZy5pc1N0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJ1xcLycpIDogW107XG5cbiAgICAvLyBoYW5kbGUgYm90aDogYC9hdXRob3IvZGlyZWN0b3J5L2ZpbGVuYW1lYCAmIGBhdXRob3IvZGlyZWN0b3J5L2ZpbGVuYW1lYFxuICAgIGlmICh0b2tlbnMubGVuZ3RoID4gMykgeyB0b2tlbnMgPSB0b2tlbnMuc2xpY2UoMSk7IH1cblxuICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcmVwb3NpdG9yeS9zaGVsbC9leGVjdXRlJywgbGluaykuZGF0YSh7XG4gICAgICBhdXRob3I6IHRva2Vuc1swXSxcbiAgICAgIGRpcmVjdG9yeTogdG9rZW5zWzFdLFxuICAgICAgZmlsZW5hbWU6IHRva2Vuc1syXSxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KTtcbiAgfSxcblxuICAvKiogXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBleGVjdXRpbmcgYSBibG9jayBvZiBSIGNvZGUgb24gdGhlIFIgc2Vzc2lvbi5cblxuICAgKiBFeGFtcGxlOlxuICAgKiAgYGBgXG4gICAqICAuY29kZSgneDwtNScpXG4gICAqICAvLyAtLSBvciAtLVxuICAgKiAgLmNvZGUoJ3g8LTUnLCBwcm9qZWN0SWQpXG4gICAqICBgYGBcbiAgICogICBcbiAgICogQG1ldGhvZCBjb2RlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByIC0gVGhlIGJsb2NrIG9mIFIgY29kZSB0byBleGVjdXRlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvamVjdCAtIChvcHRpb25hbCkgaWYgb21pdHRlZCBhIG5ldyBwcm9qZWN0IHdpbGwgZmlyc3QgYmUgXG4gICAqIGNyZWF0ZWQgYW5kIHVzZWQsIG90aGVyd2lzZSBpdCB3aWxsIGV4ZWN1dGUgb24gdGhlIFIgc2Vzc2lvbiBpZGVudGlmaWVkIGJ5IFxuICAgKiB0aGlzIGBwcm9qZWN0YC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29kZTogZnVuY3Rpb24ociwgcHJvamVjdCkge1xuICAgICB2YXIgbGluayA9IHtcbiAgICAgICAgICAgICBjb29raWVzOiB0aGlzLmNvb2tpZXMsXG4gICAgICAgICAgICAgcXVldWU6IHRoaXMucSxcbiAgICAgICAgICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgICAgICAgfSxcbiAgICAgICAgIGFwaSA9ICcvci9wcm9qZWN0L2V4ZWN1dGUvY29kZSc7XG5cbiAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3Byb2plY3QvY3JlYXRlJywgbGluaylcbiAgICAgICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9qZWN0OiByZXMuZ2V0KCdwcm9qZWN0JykucHJvamVjdCB9O1xuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLmlvKGFwaSlcbiAgICAgICAgICAgICAuZGF0YSh7IGNvZGU6IHIgfSk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpLCBsaW5rKS5kYXRhKHsgY29kZTogciwgcHJvamVjdDogcHJvamVjdCB9KTtcbiAgICAgfVxuICB9LFxuICBcbiAgLyoqIFxuICAgKiBSZWxlYXNlIGFueSByZXNpZHVhbCBwcm9qZWN0IHJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGFwcGxpY2F0aW9uIFxuICAgKiBpbnN0YW5jZSB3aGVuZXZlciBhIGNsaWVudCBhcHBsaWNhdGlvbiB0ZXJtaW5hdGVzLiBUaGlzIGluY2x1ZGVzIGNsb3NpbmcgXG4gICAqIGFueSBzdXBwbGllZCBwcm9qZWN0cyBkb3duIGFuZCBsb2dnaW5nIG91dC5cbiAgICpcbiAgICogQG1ldGhvZCByZWxlYXNlXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBwcm9qZWN0cyBUaGUgcHJvamVjdCBvciBsaXN0IG9mIHByb2plY3RzIHRvIGNsb3NlLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGF1dGggKG9wdGlvbmFsKSB0byByZW1haW4gYXV0aGVudGljYXRlZC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcmVsZWFzZTogZnVuY3Rpb24ocHJvamVjdHMsIGF1dGgpIHtcbiAgICAgcHJvamVjdHMgPSBMYW5nLmlzQXJyYXkocHJvamVjdHMpID8gcHJvamVjdHMgOiBbcHJvamVjdHNdO1xuXG4gICAgIHZhciBzZWxmICAgICA9IHRoaXMsXG4gICAgICAgICBkZWZlcnJlZCA9IEQoKSxcbiAgICAgICAgIGVtcHR5ICAgID0gIXByb2plY3RzIHx8ICFwcm9qZWN0c1swXSxcbiAgICAgICAgIGNvdW50ICAgID0gMCxcbiAgICAgICAgIGxhc3QgICAgID0gIWVtcHR5ID8gcHJvamVjdHMubGVuZ3RoIC0gMSA6IGNvdW50LFxuICAgICAgICAgY29va2llcyAgPSB0aGlzLmdldENvb2tpZXMoKTsgICAgICAgICAgIFxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IGxhc3QpIHtcbiAgICAgICAgaWYgKCFhdXRoKSB7XG4gICAgICAgICAgRGVwbG95Ui5uZXcoJy9yL3VzZXIvbG9nb3V0JylcbiAgICAgICAgICAuc2hhcmUoY29va2llcylcbiAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oKSB7ICAgICAgICAgIFxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KSAgICAgIFxuICAgICAgICAgIC5lbmQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lbnN1cmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmRlc3Ryb3koKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgIHNlbGYuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgIH1cblxuICAgIGlmICghZW1wdHkpIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jbG9zZScpXG4gICAgICAgIC5kYXRhKHsgcHJvamVjdDogcHJvamVjdCB9KVxuICAgICAgICAuc2hhcmUoY29va2llcylcbiAgICAgICAgLmVuZCgpXG4gICAgICAgIC5lbnN1cmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG9nb3V0KGNvdW50KTtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dvdXQoY291bnQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlOyAgXG4gIH0sICBcblxuICAvKiogXG4gICAqIEEgY29udmVuaWVuY2UgYWx0ZXJuYXRpdmUgdG8gbXVsdGlwbGUgYC5yaW5wdXQoKWAgY2FsbHMuIERlZmluZXMgYSBuYW1lIFxuICAgKiBsaXN0IG9mIFIgb2JqZWN0cyB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgYXMgRGVwbG95Ui1lbmNvZGVkIFIgb2JqZWN0cyBvbiB0aGUgXG4gICAqIHJlc3BvbnNlIG1hcmt1cC5cbiAgICpcbiAgICogQ2FsbGluZyB0aGlzIG1ldGhvZCB+LnJvdXRwdXRzKFsgLi4uIF0pYCBpcyBlcXVpdmFsZW50IHRvIGludm9raW5nIG11bHRpcGxlIFxuICAgKiBgLnJvdXRwdXQoLi4uKWAgY2FsbHMuXG4gICAqXG4gICAqIEBtZXRob2Qgcm91dHB1dHNcbiAgICogQHBhcmFtIHtBcnJheX0gcm9iamVjdHMgQSBuYW1lIGxpc3Qgb2YgUiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcm91dHB1dHM6IGZ1bmN0aW9uIChyb3V0cHV0cykge1xuICAgIGlmIChyb3V0cHV0cykgeyB0aGlzLm91dHB1dHMgPSB0aGlzLm91dHB1dHMuY29uY2F0KHJvdXRwdXRzKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIFxuICAvKiogXG4gICAqIERlZmluZXMgdGhlIG5hbWUgb2YgdGhlIFIgb2JqZWN0IHRoYXQgd2lsbCBiZSByZXR1cm5lZCBhcyBhIERlcGxveVItZW5jb2RlZCBcbiAgICogUiBvYmplY3Qgb24gdGhlIHJlc3BvbnNlIG1hcmt1cC5cbiAgICpcbiAgICogQG1ldGhvZCByb3V0cHV0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb2JqZWN0IFRoZSBuYW1lIG9mIHRoZSBSIG9iamVjdCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJvdXRwdXQ6IGZ1bmN0aW9uIChyb3V0cHV0KSB7XG4gICAgaWYgKHJvdXRwdXQpIHsgdGhpcy5yb3V0cHV0cyhbcm91dHB1dF0pOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKiogXG4gICAqIFVzZWQgdG8gcGFzcyBtdWx0aXBsZSBpbnB1dHMgYXQgb25jZSBmcm9tIEphdmFTY3JpcHQgdG8gYW4gUiBzY3JpcHQgdXNpbmcgXG4gICAqIG9uZSBvZiB0aGUgZGVmaW5lZCBgUklucHV0YCBmYWN0b3JpZXMuXG4gICAqXG4gICAqIEBtZXRob2QgcmlucHV0c1xuICAgKiBAcGFyYW0ge0FycmF5fSByaW5wdXRzIFRoZSBgUklucHV0YCBsaXN0IG9mIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIFxuICAgKiBvYmplY3QgZGF0YSBmb3IgdXNlIG9uIGFuIEFQSSBjYWxsLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByaW5wdXRzOiBmdW5jdGlvbiAocmlucHV0cykge1xuICAgIGlmIChyaW5wdXRzKSB7IHRoaXMuaW5wdXRzID0gdGhpcy5pbnB1dHMuY29uY2F0KHJpbnB1dHMpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKiogXG4gICAqIFVzZWQgdG8gcGFzcyBtdWx0aXBsZSBpbnB1dHMgYXQgb25jZSBmcm9tIEphdmFTY3JpcHQgdG8gYW4gUiBzY3JpcHQgdXNpbmcgXG4gICAqIG9uZSBvZiB0aGUgZGVmaW5lZCBgUklucHV0YCBmYWN0b3JpZXMuXG4gICAqXG4gICAqIEBtZXRob2QgcmlucHV0XG4gICAqIEBwYXJhbSB7UklucHV0fSByaW5wdXQgVGhlIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIG9iamVjdCBkYXRhIGZvciB1c2UgXG4gICAqIG9uIGFuIEFQSSBjYWxsLiAgIFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByaW5wdXQ6IGZ1bmN0aW9uIChyaW5wdXQpIHtcbiAgICBpZiAocmlucHV0KSB7IHRoaXMuaW5wdXRzLnB1c2gocmlucHV0KTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgbGlmZWN5Y2xlIG1ldGhvZC4gRmlyZXMgdGhlIGBkZXN0cm95YCBldmVudCwgcHJpb3IgdG8gaW52b2tpbmcgXG4gICAqIGRlc3RydWN0b3JzIGZvciB0aGUgY2xhc3MgaGllcmFyY2h5LiBDYWxsZWQgaW50ZXJuYWxseSB3aGVuIGAucmVsZWFzZSgpYFxuICAgKiBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgICAgIHRoaXMub2ZmQWxsKCk7XG4gICAgXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcykge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IFxuICAgICAgICAgIHRoaXNba2V5XSA9IG51bGw7IFxuICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge31cbiAgfSwgIFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFByaXZhdGUgbWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIF9jbGVhcjogZnVuY3Rpb24oKSB7ICAgIFxuICAgIHRoaXMucGFyYW1zICA9IHt9O1xuICAgIHRoaXMuaW5wdXRzICA9IFtdO1xuICAgIHRoaXMub3V0cHV0cyA9IFtdO1xuICAgIHRoaXMucnN0cmVhbSA9IGZhbHNlO1xuICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgIHRoaXMuYXBpICAgICA9IG51bGw7ICAgIFxuICAgIHRoaXMuZmlsZSAgICA9IG51bGw7ICBcbiAgICB0aGlzLmZpbHRlciAgPSBudWxsO1xuICB9LCBcblxuICAvKipcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBfcHJlcFJlcXVlc3Q6IGZ1bmN0aW9uIChyZXNwb25zZUNoYWluLCBhcmdzKSB7XG4gICAgdmFyIHJlcSAgPSB0aGlzLnJlcSxcbiAgICAgICAgZmlsZSA9IHRoaXMuZmlsZTtcblxuICAgIC8vIHNldCB0aGUgcmVxdWVzdCB0eXBlICAgIFxuICAgIGlmICh0aGlzLmFwaS51cGxvYWQpIHtcbiAgICAgICAvLyBJZiB0aGUgZW52IGlzIHRoZSBCcm93c2VyIHRoZXJlIGlzIG5vIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZVxuICAgICAgIC8vIENvbnRlbnQtVHlwZS4gVGhlIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHNldCB0aGUgXG4gICAgICAgLy8gXCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0uLi5cIiB2YWx1ZS4gSWYgdGhlIGVudiBpcyBOb2RlIHdlIG5lZWRcbiAgICAgICAvLyB0byBzZXQgaXQgbWFudWFsbHkuXG4gICAgICAgaWYgKCF3aW4pIHsgdGhpcy5yZXEudHlwZSgnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpOyB9ICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXEudHlwZSgnZm9ybScpO1xuICAgIH0gICAgXG5cbiAgICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7IFxuICAgICAgZXJyID0gZXJyIHx8IHsgIGNvZGU6ICdVTktOT1dOIENPREUnLCB0ZXh0OiAnVU5LTk9XTiBFUlJPUicgfTtcblxuICAgICAgdGhpcy5faGFuZGxlRXJyb3IoeyBcbiAgICAgICAgc3RhdHVzOiBlcnIuY29kZSB8fCAnVU5LTk9XTiBDT0RFJyxcbiAgICAgICAgdGV4dDogZXJyXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpOyAgICBcblxuICAgIHRoaXMuc2hhcmUoYXJncyA/IGFyZ3MuX19jb29raWVzX18gOiBudWxsKTtcblxuICAgIC8vIGFyZ3VtZW50cyByZXR1cm5lZCBmcm9tIHByZXYgcmVxdWVzdCdzIGlvKCkuZW5kKGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfSlcbiAgICBpZiAoYXJncykgeyBcbiAgICAgICB0aGlzLmRhdGEoYXJncyk7XG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlucHV0cy5sZW5ndGggPiAwKSB7IFxuICAgICAgdGhpcy5kYXRhKHsgaW5wdXRzOiBlbmNvZGVyLmVuY29kZSh0aGlzLmlucHV0cykgfSk7IFxuICAgIH1cbiAgXG4gICAgaWYgKHRoaXMub3V0cHV0cy5sZW5ndGggPiAwKSB7IFxuICAgICAgdGhpcy5kYXRhKHsgcm9iamVjdHM6IHRoaXMub3V0cHV0cy5qb2luKCkgfSk7IFxuICAgIH0gICAgXG5cbiAgICBpZiAodGhpcy5jb29raWVzKSB7ICAgICBcbiAgICAgIHRoaXMuY29va2llcy5mb3JFYWNoKCBmdW5jdGlvbihjKSB7IHJlcS5zZXQoJ0Nvb2tpZScsIGMpOyB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcGkudXBsb2FkKSB7ICAgIFxuICAgICAgZm9yKHZhciBwIGluIHRoaXMucGFyYW1zKSB7XG4gICAgICAgcmVxLmZpZWxkKHAsIHRoaXMucGFyYW1zW3BdID8gdGhpcy5wYXJhbXNbcF0gKyAnJyA6ICcnKTsgIFxuICAgICAgfSBcbiAgICAgIHJlcS5hdHRhY2goJ2ZpbGUnLCB0aGlzLnJzdHJlYW0gPyBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpIDogZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcVt0aGlzLmFwaS5tZXRob2QgPT09ICdHRVQnID8gJ3F1ZXJ5JyA6ICdzZW5kJ10odGhpcy5wYXJhbXMpO1xuICAgIH0gXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIHN0YXQgID0gcmF3LnN0YXR1cyxcbiAgICAgICAgcmVzICAgPSAocmF3LmJvZHkgJiYgcmF3LmJvZHkuZGVwbG95ciA/IHJhdy5ib2R5IDogcmF3KSxcbiAgICAgICAgZXJyb3IgPSAoKHN0YXQgIT09IDIwMCkgfHwgcmVzLmRlcGxveXIgJiYgIXJlcy5kZXBsb3lyLnJlc3BvbnNlLnN1Y2Nlc3MpO1xuXG4gICAgLy8gLS0gSGFuZGxlIGVycm9ycyAtLVxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmVzID0ge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSkgeyBcbiAgICAgICAgICByZXR1cm4gdXRpbHMuZ2V0KHRoaXMuZGVwbG95ci5yZXNwb25zZSwga2V5KTsgXG4gICAgICAgIH0sXG4gICAgICAgIGRlcGxveXI6IHsgICAgICAgICAgXG4gICAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbDogdGhpcy5hcGlbJ2NhbGwnXSxcbiAgICAgICAgICAgIGVycm9yQ29kZTogcmVzLmRlcGxveXIgPyByZXMuZGVwbG95ci5yZXNwb25zZS5lcnJvckNvZGUgOiBzdGF0LFxuICAgICAgICAgICAgZXJyb3I6IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3IgOiByZXMudGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgTG9nZ2VyLmVycm9yKCdlcnJvcigpJywgdGhpcy5hcGksIHJlcywgcmF3KTtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdlcnJvcigpJywgdGhpcy5hcGksIHJlcywgcmF3KTtcblxuICAgICAgLy8gLS0gbm90aWZ5IGdsb2JhbCBlcnJvcnMgZmlyc3QgKGlmIGFueSkgZm9yIHRoaXMgY2FsbCAtLSAgICAgIFxuICAgICAgaWYgKHRoaXMuZ2xvYmFsRXZ0cykge1xuICAgICAgICByYWlzZUdsb2JhbEVycm9ycyh0aGlzLmFwaVsnY2FsbCddLCByZXMpOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIC8vIC0tIHRyYW5hY3Rpb24gbGV2ZWwgSFRUUCBvciBEZXBsb3lSIGVycm9ycyBjb21lIG5leHQgLS0gICAgXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgcmVzKTtcbiAgICAgIHRoaXMuZW1pdCgnZGVwbG95ci1pbzonICsgcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlLCByZXMpO1xuICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QocmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEluY2x1ZGUgdGhlIGBkZXByZWNhdGVkYCBqc0RlcGxveVIgZm9yIG5vdy5cbmlmICh3aW4pIHtcbiAgd2luZG93LlJldm9sdXRpb24gPSB3aW5kb3cuUmV2b2x1dGlvbiB8fCByZXF1aXJlKCcuL2xpYi9kZXByZWNhdGVkJyk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBFeHBvc2UgZm9yIGEgY2xlYW5lciBjbGllbnQgYXBpIGludG8gRGVwbG95UlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvKipcbiAgICogRXhwb3NlcyB0aGUgYERlcGxveVJgIG9iamVjdCBmb3IgZXh0ZW5kaW5nLlxuICAgKlxuICAgKiBgYGB2YXIgRGVwbG95UiA9IHJlcXVpcmUoJ2RlcGxveXInKS5EZXBsb3lSO2BgYFxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBhcGkgcHVibGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBgRGVwbG95UmAgb2JqZWN0LlxuICAgKi8gICBcbiAgRGVwbG95UjogRGVwbG95UixcblxuICAvKipcbiAgICogRXhwb3NlcyB0aGUgc3VwcG9ydGVkIERlcGxveVIgQVBJcy5cbiAgICpcbiAgICogQG1ldGhvZCBhcGlzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhdCAob3B0aW9uYWwpIGlmIGB0cnVlYCB3aWxsIHJldHVybiBhbiBhcnJheSBvZiBqdXN0IHRoZSBcbiAgICogQVBJJ3MgZW5kcG9pbnQgcHJvcGVydGllcywgZm9yIGV4YW1wbGU6IFxuICAgKiBgYGBcbiAgICogWycvci91c2VyL2xvZ2luJywgJy9yL3VzZXIvbG9nb3V0JywgJy9yL3VzZXIvYWJvdXQnLCAuLi5dXG4gICAqIGBgYFxuICAgKiBAc3RhdGljXG4gICAqIEBhcGkgcHVibGljXG4gICAqIEByZXR1cm4ge09iamVjdHxBcnJheX0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgICAgXG4gICAqLyAgXG4gIGFwaXM6IGZ1bmN0aW9uKGZsYXQpIHtcbiAgICByZXR1cm4gZmxhdCA/IE9iamVjdC5rZXlzKGFwaXMpIDogYXBpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHN0YXRpYyBtZXRob2QgZm9yIGNvbmZpZ3VyaW5nIGFsbCBEZXBsb3lSIHJlcXVlc3RzLiBTZXR0aW5ncyBcbiAgICogbWFkZSBoZXJlIGFyZSBhcHBsaWVkIGdsb2JhbGx5IGFjcm9zcyBldmVyeSByZXF1ZXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGNvbmZpZ3VyZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb2JqZWN0IGxpdGVyYWwgY29uZmlndXJhdGlvbiBoYXNoLiBcbiAgICogQHN0YXRpY1xuICAgKiBAY2hhaW5hYmxlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25maWd1cmU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykgeyBnbG9iYWxPcHRpb25zLnNldChpLCBvcHRpb25zW2ldKTsgfVxuXG4gICAgLy8gYXNzZXJ0IGdsb2JhbCBjb29raWVzIGFyZSBlbXB0eSBpZiBnbG9iYWwgYHN0aWNreWAganNlc3Npb25pZCBpcyBvZmZcbiAgICBpZiAoIWdsb2JhbE9wdGlvbnMuc3RpY2t5KSAgeyBnbG9iYWxPcHRpb25zLnNldCgnY29va2llcycsIG51bGwpOyB9XG5cbiAgICAvLyB0dXJuIGdsb2JhbCBsb2dnaW5nIG9ufG9mZiAob2ZmIGJ5IGRlZmF1bHQpXG4gICAgTG9nZ2VyLnNldExldmVsKGdsb2JhbE9wdGlvbnMubG9nZ2luZyA/IExvZ2dlci5ERUJVRyA6IExvZ2dlci5PRkYpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBJTyByZXF1ZXN0cyB0byBgRGVwbG95UmAuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYCAgIFxuICAgKiAgICBkZXBsb3lyLmlvKCcvci91c2VyL2Fib3V0JykuZW5kKGNhbGxiYWNrKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBtZXRob2QgaW9cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBPbmUgb2YgdGhlIHN1cHBvcnRlZCBEZXBsb3lSIEFQSXMuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBpbzogZnVuY3Rpb24oYXBpKSB7ICBcbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpKTtcbiAgfSxcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gc2lnbiB0aGUgdXNlciBpbiBieSBhdXRoZW50aWNhdGluZyB0aGUgY3JlZGVudGlhbHMgXG4gICAqIHdpdGggdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKlxuICAgKiBAbWV0aG9kIGF1dGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJuYW1lIFNwZWNpZmllcyB0aGUgdXNlcm5hbWUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzd29yZCBTcGVjaWZpZXMgdGhlIHBhc3N3b3JkLlxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gICBcbiAgYXV0aDogZnVuY3Rpb24odW4sIHB3KSB7XG4gICAgdmFyIGRhdGEgPSB7IHVzZXJuYW1lOiB1biwgcGFzc3dvcmQ6IHB3IH07XG4gICAgcmV0dXJuIERlcGxveVIubmV3KCcvci91c2VyL2xvZ2luJykuZGF0YShkYXRhKS5lbmQoKTsgICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHNpZ24gdGhlIHVzZXIgaW4gYnkgYXV0aGVudGljYXRpbmcgdGhlIGNyZWRlbnRpYWxzIFxuICAgKiB3aXRoIHRoZSBEZXBsb3lSIHNlcnZlci4gICBcbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KCcvdGVzdHVzZXIvcm9vdC9yZWR1Y2UuUicpXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KHsgZmlsZW5hbWU6ICdyZWR1Y2UuUicsIGF1dGhvcjogJ3Rlc3R1c2VyJyxcbiAgICogICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6ICdyb290J30pXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KCdyZWR1Y2UuUicsICd0ZXN0dXNlcicsICdyb290JylcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJy90ZXN0dXNlci9yb290L3JlZHVjZS5SJywgcHJvamVjdCkgICAgIFxuICAgKiBgYGAgICBcbiAgICpcbiAgICogQG1ldGhvZCBzY3JpcHRcbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IGFyZ3VtZW50cyBBcmd1bWVudHMgdG8gZGVmaW5lIHRoZSBmdWxseSBxdWFsaWZpZWQgc2NyaXB0IFxuICAgKiBmb3IgZXhlY3V0aW9uLlxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gICAgIFxuICBzY3JpcHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gdXRpbHMuc2lnbmF0dXJlKGFyZ3VtZW50cyksXG4gICAgICAgIG9wdHMgPSBhcmdzLm9wdHMsXG4gICAgICAgIGFwaSAgPSBhcmdzLmFwaTsgIFxuXG4gICAgLy8gY29udmVuaWVuY2UgLSBpZiB0aGUgcHJvamVjdCBpcyBhIGJvb2xlbiBgdHJ1ZWAgcmF0aGVyIHRoYW4gYSBwaWQsIGZpcnN0XG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIHRoZW4gcHJlcGFyZSB0aGUgcHJvamVjdCBhcGkgY2FsbCB0byBleGVjdXRlXG4gICAgaWYgKGFyZ3MuY3JlYXRlKSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3Byb2plY3QvY3JlYXRlJylcbiAgICAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9qZWN0OiByZXMuZ2V0KCdwcm9qZWN0JykucHJvamVjdCB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuaW8oYXBpKVxuICAgICAgICAgICAgICAgLmRhdGEob3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGkpLmRhdGEob3B0cyk7XG4gICAgfVxuICB9LCAgXG5cbiAgLyoqXG4gICAqIFJ1biBhbiBzZXJpZXMgb2YgY2hhaW5lZCBEZXBsb3lSIHJlcXVlc3RzIGluIHNlcXVlbmNlIGFuZCB3aXRob3V0IG92ZXJsYXAuICAgICAgIFxuICAgKlxuICAgKiBAbWV0aG9kIHBpcGxpbmVcbiAgICogQHBhcmFtIHtBcnJheX0gdGFza3MgU3BlY2lmaWVzIHRoZSBsaXN0IG9mIGBGdW5jdGlvbmAgdGFza3MuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvclxuICAgKiBcInJlamVjdFwiIGNhbGxiYWNrLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgcGlwZWxpbmU6IGZ1bmN0aW9uKGNoYWlucykgeyAgICAgIFxuICAgIHZhciBkZXBsb3lyICA9IHRoaXMsXG4gICAgICAgIGRlZmVycmVkID0gRCgpLFxuICAgICAgICBxICAgICAgICA9IG5ldyBRdWV1ZSgpLFxuICAgICAgICByZXN1bHRzICA9IFtdLFxuICAgICAgICBlcnJvcnMgICA9IFtdLFxuICAgICAgICBOT09QICAgICA9IG51bGwsIC8vIE5PT1AgZXJyb3JzfHJlc3VsdHMgZm9yIFthXSBiYXRjaCByZXF1ZXN0IGNoYWluXG4gICAgICAgIG9yaWcgICAgID0ge1xuICAgICAgICAgIHN0aWNreTogZ2xvYmFsT3B0aW9ucy5zdGlja3ksXG4gICAgICAgICAgY29va2llczogZ2xvYmFsT3B0aW9ucy5jb29raWVzXG4gICAgICAgIH07XG5cbiAgICAvLyBtYWtlIGEgY29weVxuICAgIGNoYWlucyA9IGNoYWlucy5zbGljZSgwKTtcblxuICAgIC8vIHR1cm4gc3RpY2t5IHNlc3Npb24gZm9yIHRoZXNlIHJlcXVlc3QgKGhhY2t5KVxuICAgIGRlcGxveXIuY29uZmlndXJlKCB7IHN0aWNreTogdHJ1ZSB9KTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHEuYWRkKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgY2hhaW5zLnNoaWZ0KCkuZHJhaW4oKVxuICAgICAgICAudGhlbihmdW5jdGlvbihjaGFpbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChjaGFpbik7ICBcbiAgICAgICAgICBlcnJvcnMucHVzaChOT09QKTsgICAgICAgICAgIFxuICAgICAgICAgIGlmIChxLmlzRW1wdHkoKSkgeyBcbiAgICAgICAgICAgIGRlcGxveXIuY29uZmlndXJlKG9yaWcpOyAvLyByZXNldFxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7IHJlc3VsdHM6IHJlc3VsdHMsIGVycm9yczogZXJyb3JzIH0pOyBcbiAgICAgICAgICB9ICBcblxuICAgICAgICAgIHEudGFrZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHsgICAgICAgICAgXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKE5PT1ApOyBcbiAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgIC8vIHJlamVjdGlvbnMgYXJlIG9ubHkgbWV0IHdoZW4gdGhleSBbYWxsXSBmYWlsXG4gICAgICAgICAgaWYgKHEuaXNFbXB0eSgpICYmIHJlc3VsdHMubGVuZ3RoID09PSAwKSB7IFxuICAgICAgICAgICAgZGVwbG95ci5jb25maWd1cmUob3JpZyk7IC8vIHJlc2V0XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3JzKTsgXG4gICAgICAgICAgfSAgXG4gICAgICAgICAgcS50YWtlKCk7XG4gICAgICAgIH0pOyAgICAgICBcbiAgICAgIH0sIG51bGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIGNvbnZlcnQgdG8gYSBzZXEgcXVldWUgZm9yIGJldHRlciBoYW5kbGluZ1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjaGFpbnMubGVuZ3RoOyBpKyspIHsgYWRkKCk7IH1cblxuICAgIC8vIHN0YXJ0OiBkZXF1ZXVlIGZpcnN0IGl0ZW0gYW5kIHJ1biBpdFxuICAgIHEudGFrZSgpO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBzdHJlYW0gQVBJIGlzIHVuaXF1ZSB3aXRoaW4gdGhlIERlcGxveVIgQVBJIGFzIGl0IHN1cHBvcnRzIHB1c2ggXG4gICAqIG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgRGVwbG95UiBzZXJ2ZXIgdG8gY2xpZW50IGFwcGxpY2F0aW9ucy4gTm90aWZpY2F0aW9ucyBcbiAgICogY29ycmVzcG9uZCB0byBkaXNjcmV0ZSBldmVudHMgdGhhdCBvY2N1ciB3aXRoaW4gdGhlIERlcGxveVIgc2VydmVyLiBUaGVyZSBcbiAgICogYXJlIGZvdXIgZGlzdGluY3QgZXZlbnQgY2F0ZWdvcmllczpcbiAgICogXG4gICAqIC0gU3RyZWFtIExpZmVjeWNsZSBldmVudHNcbiAgICogLSBFeGVjdXRpb24gZXZlbnRzXG4gICAqIC0gSm9iIExpZmVjeWNsZSBldmVudHNcbiAgICogLSBNYW5hZ2VtZW50IGV2ZW50c1xuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogZGVwbG95ci5lcyh7IHVzZXJuYW1lOiAndGVzdHVzZXInLCBwYXNzd29yZDogJ3NlY3JldCcgfSlcbiAgICogICAgLy8gLS0gY29ubmVjdGlvbiBjaG9pY2VzIGZvciBldmVudCB0eXBlcyAtLVxuICAgKiAgICAubWFuYWdlbWVudCgpICAvLy5zZXNzaW9uKCkgfCAuYWxsKCkgfCAucHJvamVjdChpZCkgfCAuam9iKGlkKVxuICAgKiAgICAub24oJ2VzOmdyaWRIZWFydGJlYXQnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAqICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpO1xuICAgKiAgICAgICAgY29uc29sZS5sb2coJ2VzOmdyaWRIZWFydGJlYXQnKTtcbiAgICogICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09Jyk7ICAgICAgICAgIFxuICAgKiAgICAgfSlcbiAgICogICAgIC5vcGVuKCk7XG4gICAqIGBgYFxuICAgKiBcbiAgICogQG1ldGhvZCBlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb2JqZWN0IGxpdGVyYWwgY29uZmlndXJhdGlvbiBoYXNoLiBcbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gYSBuZXcgYEV2ZW50U3RyZWFtYCBmb3IgYmluZGluZy5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgZXM6IGZ1bmN0aW9uKG9wdGlvbnMpIHsgICAgXG4gICAgdmFyIHN0cmVhbSA9IEV2ZW50U3RyZWFtLm5ldyhnbG9iYWxPcHRpb25zLmhvc3QsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy51c2VybmFtZSAmJiBvcHRpb25zLnBhc3N3b3JkKSB7XG4gICAgICB2YXIgcnVzZXIgPSB0aGlzLmF1dGgob3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZCk7XG4gICAgICBydXNlci5lbnN1cmUoZnVuY3Rpb24oKSB7IFxuICAgICAgICBzdHJlYW0uc2hhcmUocnVzZXIuZ2V0Q29va2llcygpKTtcbiAgICAgICAgc3RyZWFtLmZsdXNoKCk7IFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmVhbTtcbiAgfSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgZmFjdG9yeSBmb3IgY3JlYXRpbmcgYSBEZXBsb3lSLXNwZWNpZmljIGVuY29kZWQgUiBvYmplY3QgdG8gYmUgXG4gICAqIHNlbnQgYXMgaW5wdXQgcGFyYW1ldGVycyB0byBhbiBSIHNjcmlwdC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5sb2dpY2FsKCdsb2dpY2FsX25hbWUnLCB0cnVlKTtcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0Lm51bWVyaWMoJ251bWVyaWNfbmFtZScsIDEwLjUpO1xuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQuaW50ZWdlcignaW50ZWdlcl9uYW1lJywgNSk7XG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5jaGFyYWN0ZXIoJ2NoYXJhY3Rlcl9uYW1lJywgJ0hlbGxvJyk7XG4gICAqICAgIC8vIGVjdC4uLlxuICAgKiBgYGBcbiAgICogQHByb3BlcnR5IFJJbnB1dFxuICAgKiBAc3RhdGljXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBSSW5wdXQ6IHtcbiAgICBudW1lcmljOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljKCk7XG4gICAgfSxcblxuICAgIGludGVnZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXIoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbCgpO1xuICAgIH0sXG5cbiAgICBjaGFyYWN0ZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3RlcigpO1xuICAgIH0sXG5cbiAgICBkYXRlOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRlKCk7XG4gICAgfSxcblxuICAgIHBvc2l4Y3Q6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLnBvc2l4Y3QoKTtcbiAgICB9LCAgXG5cbiAgICBudW1lcmljVmVjdG9yOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWNWZWN0b3IoKTtcbiAgICB9LCBcblxuICAgIGludGVnZXJWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXJWZWN0b3IoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWxWZWN0b3IoKTtcbiAgICB9LFxuXG4gICAgY2hhcmFjdGVyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyVmVjdG9yKCk7XG4gICAgfSwgIFxuXG4gICAgZGF0ZVZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGVWZWN0b3IoKTtcbiAgICB9LCAgXG5cbiAgICBwb3NpeGN0VmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkucG9zaXhjdFZlY3RvcigpO1xuICAgIH0sXG5cbiAgICBsaXN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5saXN0KCk7IFxuICAgIH0sXG5cbiAgICBkYXRhZnJhbWU6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRhZnJhbWUoKTtcbiAgICB9LFxuICBcbiAgICBmYWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgbGV2ZWxzLCBsYWJlbHMpIHtcbiAgICAgIHZhciBvcHRzID0geyBsZXZlbHM6IGxldmVscywgbGFiZWxzOiBsYWJlbHMgfTtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlLCBvcHRzKS5mYWN0b3IoKTtcbiAgICB9LFxuXG4gICAgb3JkZXJlZDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBsZXZlbHMsIGxhYmVscykge1xuICAgICAgdmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdHMpLm9yZGVyZWQoKTtcbiAgICB9LFxuXG4gICAgbnVtZXJpY01hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWNNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgaW50ZWdlck1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXJNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbE1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWxNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgY2hhcmFjdGVyTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXJNYXRyaXgoKTtcbiAgICB9XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiL3IvdXNlci9sb2dpblwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3VzZXIvbG9nb3V0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvdXNlci9hYm91dFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3VzZXIvYXV0b3NhdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci91c2VyL3JlbGVhc2VcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2NyZWF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcG9vbFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcmVjeWNsZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcGluZ1wiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvYWJvdXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2Fib3V0L3VwZGF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvc2F2ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvc2F2ZWFzXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9jbG9zZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZ3JhbnRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2ltcG9ydFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhwb3J0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvY29kZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9zY3JpcHRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvaW50ZXJydXB0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL2NvbnNvbGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvaGlzdG9yeVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9mbHVzaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvZG93bmxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvcmVzdWx0L2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9nZXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS91cGxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCIsXG4gICAgICAgIFwidXBsb2FkXCI6IHRydWVcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS90cmFuc2ZlclwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3B1c2hcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9zYXZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2Uvc3RvcmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2UvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3VwbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3RyYW5zZmVyXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3Rvcnkvd3JpdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS91cGRhdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS9zdG9yZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L2xvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS9kb3dubG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcGFja2FnZS9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wYWNrYWdlL2F0dGFjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcGFja2FnZS9kZXRhY2hcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9zdWJtaXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2Ivc2NoZWR1bGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvcXVlcnlcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvY2FuY2VsXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3Ivam9iL2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9jcmVhdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9yZW5hbWVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9jb3B5XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvbW92ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3VwZGF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvc2NyaXB0L2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9zY3JpcHQvcmVuZGVyXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9zY3JpcHQvaW50ZXJydXB0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9zaGVsbC9leGVjdXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvYXJjaGl2ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3VwbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2Rvd25sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvZmV0Y2hcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvZmV0Y2hcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvdXBsb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL3RyYW5zZmVyXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL3dyaXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL3VwZGF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9kaWZmXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL3JldmVydFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9ncmFudFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9kb3dubG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvY29weVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9tb3ZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3Ivc2VydmVyL2luZm9cIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH1cbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICovXG52YXIgTGFuZyA9IHJlcXVpcmUoJy4vbGFuZycpLFxuICAgIEJhc2UgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJJbnB1dCA9IHJlcXVpcmUoJy4vcmlucHV0Jyk7XG5cbnZhciBEZXByZWNhdGVkLFxuICAgIGVtaXR0ZXIsXG4gICAgX2NvbmZpZyA9IHt9LFxuICAgIFRPUExFVkVMX0VOVElUSUVTID0gW1xuICAgICAgICAndXNlcicsXG4gICAgICAgICdwcm9qZWN0JyxcbiAgICAgICAgJ3dvcmtzcGFjZScsXG4gICAgICAgICdleGVjdXRpb24nLFxuICAgICAgICAnZGlyZWN0b3J5JyxcbiAgICAgICAgJ3JlcG9zaXRvcnknLFxuICAgICAgICAncGFja2FnZXMnXG4gICAgXTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgU2Vzc2lvbk1hbmFnZXIgPSB7XG4gICAgRU5EUE9JTlRfV0hJVEVMSVNUOiB7XG4gICAgICAgIGxvZ2luOiAnL3IvdXNlci9sb2dpbicsXG4gICAgICAgIGxvZ291dDogJy9yL3VzZXIvbG9nb3V0JyxcbiAgICAgICAgcHJvamVjdENyZWF0ZTogJy9yL3Byb2plY3QvY3JlYXRlJyxcbiAgICAgICAgcHJvamVjdENsb3NlOiAnL3IvcHJvamVjdC9jbG9zZScsXG4gICAgICAgIHByb2plY3RBYm91dFVwZGF0ZTogJy9yL3Byb2plY3QvYWJvdXQvdXBkYXRlJyxcbiAgICAgICAgcHJvamVjdFNhdmU6ICcvci9wcm9qZWN0L3NhdmUnLFxuICAgICAgICBwcm9qZWN0U2F2ZUFzOiAnL3IvcHJvamVjdC9zYXZlYXMnLFxuICAgICAgICAvLyAtLS0gcHJpdmF0ZSBBUElTIC0tLVxuICAgICAgICBjbGllbnRQcm9qZWN0U2F2ZTogJy9yL2NsaWVudC9wcm9qZWN0L3NhdmUnLFxuICAgICAgICBjbGllbnRQcm9qZWN0Q2xvc2U6ICcvci9jbGllbnQvcHJvamVjdC9jbG9zZSdcbiAgICB9LFxuXG4gICAgc2Vzc2lvbjoge30sXG5cbiAgICBjb25maWc6IHt9LFxuXG4gICAgc2V0VW5sb2FkQ29uZmlnOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIGRpc2FibGVhdXRvc2F2ZTogY29uZmlnLmRpc2FibGVhdXRvc2F2ZSB8fCB0cnVlLFxuICAgICAgICAgICAgZHJvcHdvcmtzcGFjZTogY29uZmlnLmRyb3B3b3Jrc3BhY2UgfHwgdHJ1ZSxcbiAgICAgICAgICAgIGRyb3BkaXJlY3Rvcnk6IGNvbmZpZy5kcm9wZGlyZWN0b3J5IHx8IHRydWUsXG4gICAgICAgICAgICBkcm9waGlzdG9yeTogY29uZmlnLmRyb3BoaXN0b3J5IHx8IHRydWUsXG4gICAgICAgICAgICBmbHVzaGhpc3Rvcnk6IGNvbmZpZy5mbHVzaGhpc3RvcnkgfHwgdHJ1ZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgc2V0U2Vzc2lvbjogZnVuY3Rpb24oc2Vzc2lvbikge1xuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0UHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICB0aGlzLnNlc3Npb24ucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfSxcbiAgICBjbGVhclNlc3Npb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlc3Npb24gPSB7fTtcbiAgICB9LFxuICAgIGNsZWFyUHJvamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbi5wcm9qZWN0ID0gbnVsbDtcbiAgICB9LFxuICAgIHVubG9hZEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHByb2plY3QgPSB0aGlzLnNlc3Npb24ucHJvamVjdDtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0KSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2NvbmZpZztcbiAgICAgICAgICAgICAgICBkYXRhLnByb2plY3QgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdGNvb2tpZSA9IHByb2plY3QuY29va2llO1xuXG4gICAgICAgICAgICAgICAgZGVwbG95ci5pbygnL3IvcHJvamVjdC9jbG9zZScpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC5zeW5jKClcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIGZvcm1hdChyZXNwb25zZSwgdHJhbnNFbnRpdHkpIHtcbiAgICAvLyAtLSB0cmFuc2FjdGlvbiBlbnRpdHkgZm9ybWF0cyBvdmVycmlkZSBnbG9iYWwgZW50aXR5IGZvcm1hdHMgLS0gIFxuICAgIC8vdmFyIGZvcm1hdCA9IHRyYW5zRW50aXR5IHx8IF9jb25maWcuZW50aXR5O1xuICAgIHZhciBmb3JtYXQgPSB0cmFuc0VudGl0eSB8fCBnbG9iYWxDb25maWcuZW50aXR5O1xuXG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgICB2YXIgcmVzT2JqID0gcmVzcG9uc2UuZGVwbG95ci5yZXNwb25zZSxcbiAgICAgICAgICAgIC8vIC0tIHRvcC1sZXZlbCBlbnRpdGllcyAtLVxuICAgICAgICAgICAgZW50aXRpZXMgPSBUT1BMRVZFTF9FTlRJVElFUztcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZW50aXRpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gZW50aXRpZXNbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAocmVzT2JqW2VudGl0eV0gJiYgZm9ybWF0W2VudGl0eV0pIHsgLy8gcmVzcG9uc2UgZW50aXR5IGhpdFxuICAgICAgICAgICAgICAgIC8vIC0tIHVzZXItZGVmaW5lZCBwYXJzZSBmb3IgdG9wLWxldmVsIGVudGl0eSAtLSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0W2VudGl0eV0ucGFyc2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXRTY29wZSA9IGZvcm1hdFtlbnRpdHldLnNjb3BlIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHJlc09ialtlbnRpdHldID0gZm9ybWF0W2VudGl0eV0ucGFyc2VyLmNhbGwoZm9ybWF0U2NvcGUsIHJlc09ialtlbnRpdHldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUVuZHBvaW50KHJlc3BvbnNlLCBlbmRwb2ludCwgYXJncykge1xuXG4gICAgdmFyIHJlc09iaiA9IHJlc3BvbnNlLmRlcGxveXIucmVzcG9uc2UsXG4gICAgICAgIEVORFBPSU5UID0gU2Vzc2lvbk1hbmFnZXIuRU5EUE9JTlRfV0hJVEVMSVNUO1xuXG4gICAgc3dpdGNoIChlbmRwb2ludCkge1xuXG4gICAgICAgIGNhc2UgRU5EUE9JTlQubG9naW46XG5cbiAgICAgICAgICAgIFNlc3Npb25NYW5hZ2VyLnNldFNlc3Npb24oe1xuICAgICAgICAgICAgICAgIGh0dHBjb29raWU6IHJlc09iai5odHRwY29va2llLFxuICAgICAgICAgICAgICAgIHVzZXI6IHJlc09iai51c2VyLFxuICAgICAgICAgICAgICAgIGxpbWl0czogcmVzT2JqLmxpbWl0cyxcbiAgICAgICAgICAgICAgICBwcm9qZWN0OiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRU5EUE9JTlQubG9nb3V0OlxuICAgICAgICAgICAgU2Vzc2lvbk1hbmFnZXIuY2xlYXJTZXNzaW9uKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVORFBPSU5ULnByb2plY3RDbG9zZTpcbiAgICAgICAgY2FzZSBFTkRQT0lOVC5jbGllbnRQcm9qZWN0Q2xvc2U6XG4gICAgICAgICAgICBTZXNzaW9uTWFuYWdlci5jbGVhclByb2plY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRU5EUE9JTlQucHJvamVjdENyZWF0ZTpcbiAgICAgICAgY2FzZSBFTkRQT0lOVC5wcm9qZWN0QWJvdXRVcGRhdGU6XG4gICAgICAgIGNhc2UgRU5EUE9JTlQucHJvamVjdFNhdmU6XG4gICAgICAgIGNhc2UgRU5EUE9JTlQucHJvamVjdFNhdmVBczpcbiAgICAgICAgY2FzZSBFTkRQT0lOVC5jbGllbnRQcm9qZWN0U2F2ZTpcbiAgICAgICAgICAgIHZhciBwcm9qZWN0ID0gcmVzT2JqLnByb2plY3Q7XG4gICAgICAgICAgICBTZXNzaW9uTWFuYWdlci5zZXRQcm9qZWN0KHtcbiAgICAgICAgICAgICAgICBpZDogcHJvamVjdC5wcm9qZWN0LFxuICAgICAgICAgICAgICAgIGNvb2tpZTogcHJvamVjdC5jb29raWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICB9IC8vIGVuZCBzd2l0Y2hcblxuICAgIERlcHJlY2F0ZWQuRXZlbnQuZmlyZSgnRGVwbG95UjplbmRwb2ludENoYW5nZScsIHtcbiAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXG4gICAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBjYW1lbENhc2UoaW5wdXQpIHtcbiAgICAvLyBjb252ZXJ0IGZvcm1hdDogJy9yL3VzZXIvbG9naW4nIC0tPiAndXNlckxvZ2luJ1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgnXFwvclxcLycsICcnKTtcbiAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC8oLikvZywgZnVuY3Rpb24obWF0Y2gsIHNlZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cblxuLy8gdHVybiB0aGUgb2xkIGRlcHJlY2F0ZWQgaW5wdXRzIGludG8gbmV3IGlucHV0c1xuZnVuY3Rpb24gbm9ybWFsaXplSW5wdXRzKGlucHV0cykge1xuICAgIHZhciByaW5wdXRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByaW5wdXRzLnB1c2goaW5wdXRzW2ldLm5vcm1hbGl6ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmlucHV0cztcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIFRoZSBEZXByZWNhdGVkIGludGVyZmFjZS5cbiAqL1xudmFyIFJEYXRhID0gQmFzZS5leHRlbmQoe1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKHR5cGUsIHJjbGFzcywgcmlucHV0KSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucmNsYXNzID0gcmNsYXNzO1xuICAgICAgICB0aGlzLnJpbnB1dCA9IHJpbnB1dDtcbiAgICB9LFxuXG4gICAgZ2V0VHlwZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfSxcblxuICAgIGdldFJDbGFzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJjbGFzcztcbiAgICB9LFxuXG4gICAgZ2V0TmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpbnB1dC5uYW1lO1xuICAgIH0sXG5cbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpbnB1dC52YWx1ZTtcbiAgICB9LFxuXG4gICAgZ2V0TGV2ZWxzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlucHV0LmxldmVscztcbiAgICB9LFxuXG4gICAgZ2V0TGFiZWxzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlucHV0LmxhYmVscztcbiAgICB9LFxuXG4gICAgZ2V0T3JkZXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpbnB1dC5vcmRlcmVkO1xuICAgIH0sXG5cbiAgICBub3JtYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yaW5wdXQ7XG4gICAgfVxufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHsgIFxuICBcbn1cblxuZnVuY3Rpb24gZGVidWcobXNnKSB7ICBcbn1cblxuRW1pdHRlci5wcm90b3R5cGUgPSB7XG5cbiAgZXZlbnRzOiB7fSxcblxuICBzY29wZTogbnVsbCxcblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyLiAgTXVsdGlwbGUgY2FuIGJlIGFkZGVkIHBlciBuYW1lLiAgQWxpYXNlZCBhcyBgb25gLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqL1xuICBvbjogZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyB0aGlzLmV2ZW50c1tuYW1lXSA9IFtdOyB9ICAgICAgICBcblxuICAgIHRoaXMuZXZlbnRzW25hbWVdLnB1c2goaGFuZGxlcik7XG4gICAgZGVidWcoJ0VtaXR0ZXIub24oXCInICsgbmFtZSArICdcIiknKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiBhbiBldmVudCBmaXJlZFxuICAgKi9cbiAgZW1pdDogZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoJ0ZpcmVkIGV2ZW50OiBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgICB0aGlzLmV2ZW50c1tuYW1lXVtpXS5hcHBseSh0aGlzLnNjb3BlIHx8IHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpOyAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiBhbiBldmVudCB3YXMgcmVtb3ZlZFxuICAgKi9cbiAgcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBmb3IgKHZhciBlIGluIHRoaXMuZXZlbnRzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tlXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG4gICAgICBkZWxldGUgdGhpcy5ldmVudHNbbmFtZV07ICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICByZW1vdmVMaXN0ZW5lckF0OiBmdW5jdGlvbihuYW1lLCBpbmRleCkge1xuICAgIHZhciBhcnJheSA9IHRoaXMuZXZlbnRzW25hbWVdLFxuICAgICAgICByZXN0ID0gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcblxuICAgIGFycmF5Lmxlbmd0aCA9IGluZGV4O1xuICAgIGFycmF5LnB1c2guYXBwbHkoYXJyYXksIHJlc3QpO1xuICAgIHRoaXMuZXZlbnRzW25hbWVdID0gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lciBiYXNlZCBvbiB0aGUgaGFuZGxlciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgYW4gZXZlbnQgd2FzIHJlbW92ZWRcbiAgICovXG4gIG9mZjogZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBldmVudHMgaGFuZGxlcnMgYnkgdGhpcyBuYW1lXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMobmFtZSk7XG4gICAgfSBlbHNlIHsgLy8gcmVtb3ZlIGFsbCBldmVudHMgaGFuZGxlcnMgPT0gJ2hhbmRsZXInIGJ5IHRoaXMgbmFtZVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbbmFtZV1baV0gPT0gaGFuZGxlcikge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJBdChuYW1lLCBpKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxuXG5lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuLyoqXG4gKiBQcm92aWRlcyBzaW1wbGUgYWRhcHRlciBtZXRob2RzIHdoaWNoIHdyYXAgdGhlIHJhdyA8Y29kZT5SZXZvbHV0aW9uLkRlcGxveVIuaW8oLi4uKTwvY29kZT5cbiAqIHJlbW90ZSBEZXBsb3lSIEFQSSBBSkFYIHRyYW5zYWN0aW9ucy4gVGhlc2UgbWV0aG9kcyBhcmUgYW4gb3B0LWluIGZlYXR1cmUgdG9cbiAqIGNvbXBsZW1lbnQgdGhlIGxvdyBsZXZlbCBEZXBsb3lSIElPIGNvbW11bmljYXRpb24uXG4gKlxuICogQGNsYXNzIFJldm9sdXRpb24uRGVwbG95Ui5QdWJsaWNBZGFwdGVyXG4gKiBAZXh0ZW5zaW9uZm9yIFJldm9sdXRpb24uRGVwbG95UlxuICovXG5cbkRlcHJlY2F0ZWQgPSB7XG4gICAgdmVyc2lvbjogcmVxdWlyZSgnLi4vcGFja2FnZScpLnZlcnNpb24sXG5cbiAgICBFdmVudDoge1xuICAgICAgICBvbjogZnVuY3Rpb24odHlwZSwgZm4sIHNjb3BlKSB7XG4gICAgICAgICAgICBlbWl0dGVyLm9uKHR5cGUsIGZuLCBzY29wZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbih0eXBlLCBmbiwgb2JqKSB7XG4gICAgICAgICAgICBlbWl0dGVyLm9mZih0eXBlLCBmbik7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgUkRhdGFGYWN0b3J5OiB7XG4gICAgICAgIGNyZWF0ZU51bWVyaWM6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdwcmltaXRpdmUnLCAnbnVtZXJpYycsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWMoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlSW50ZWdlcjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ3ByaW1pdGl2ZScsICdpbnRlZ2VyJywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlcigpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVCb29sZWFuOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygncHJpbWl0aXZlJywgJ251bWVyaWMnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5sb2dpY2FsKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZVN0cmluZzogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ3ByaW1pdGl2ZScsICdjaGFyYWN0ZXInLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXIoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlRGF0ZTogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ2RhdGUnLCAnRGF0ZScsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGUoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlUE9TSVhEYXRlOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygnZGF0ZScsICdQT1NJWGN0JywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkucG9zaXhjdCgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVOdW1lcmljVmVjdG9yOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygndmVjdG9yJywgJ251bWVyaWMnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljVmVjdG9yKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUludGVnZXJWZWN0b3I6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCd2ZWN0b3InLCAnaW50ZWdlcicsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXJWZWN0b3IoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlQm9vbGVhblZlY3RvcjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ3ZlY3RvcicsICdsb2dpY2FsJywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbFZlY3RvcigpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVTdHJpbmdWZWN0b3I6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCd2ZWN0b3InLCAnY2hhcmFjdGVyJywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyVmVjdG9yKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZURhdGVWZWN0b3I6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCd0eXBlJywgJ0RhdGUnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRlVmVjdG9yKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZVBPU0lYRGF0ZVZlY3RvcjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ3ZlY3RvcicsICdQT1NJWGN0JywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkucG9zaXhjdFZlY3RvcigpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVMaXN0OiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygnbGlzdCcsICdsaXN0JywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubGlzdCgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVEYXRhZnJhbWU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdkYXRhZnJhbWUnLCAnZGF0YS5mcmFtZScsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGFmcmFtZSgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVGYWN0b3I6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBvcmRlcmVkLCBsZXZlbHMsIGxhYmVscykge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBsZXZlbHMsXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHNcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChvcmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygnZmFjdG9yJywgJ2ZhY3RvcicsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdHMpLm9yZGVyZWQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ2ZhY3RvcicsICdmYWN0b3InLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlLCBvcHRzKS5mYWN0b3IoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlTnVtZXJpY01hdHJpeDogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ21hdHJpeCcsICdtYXRyaXgnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljTWF0cml4KCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUludGVnZXJNYXRyaXg6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdtYXRyaXgnLCAnbWF0cml4JywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlck1hdHJpeCgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVCb29sZWFuTWF0cml4OiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygnbWF0cml4JywgJ21hdHJpeCcsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWxNYXRyaXgoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlU3RyaW5nTWF0cml4OiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygnbWF0cml4JywgJ21hdHJpeCcsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3Rlck1hdHJpeCgpKTtcbiAgICAgICAgfVxuICAgIH0sIC8vIFJEYXRhRmFjdG9yeVxuXG4gICAgRGVwbG95Ujoge1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgICAgICAgICAvLyAtLS0gQXNzZXJ0IEpTRGVwbG95IGNvbXBhdGFiaWxpdHkgYWdhaW5zdCB0aGUgY29ubmVjdGVkIERlcGxveVIgdmVyc2lvbiAtLS1cbiAgICAgICAgICAgIGlmIChjb25maWcuY29tcGF0aWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIC8vY29tcGF0aWJpbGl0eUNoZWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLSBFdmVudCByZWdpc3RyYXRpb24gLS0tXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV2ZW50cykge1xuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBjb25maWcuZXZlbnRzO1xuXG4gICAgICAgICAgICAgICAgLy8gLS0gTWFuYWdlIGNsZWFudXAgb24gYnJvd3NlciBjbG9zZSAoY2xvc2UgcHJvamVjdCwgbG9nb3V0LCBlY3QuLi4pLS1cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzLnVubG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBTZXNzaW9uTWFuYWdlci5zZXRVbmxvYWRDb25maWcoZXZlbnRzLnVubG9hZCk7XG4gICAgICAgICAgICAgICAgICAgIERlcHJlY2F0ZWQuRXZlbnQub24oJ2RlcGxveVI6dW5sb2FkJywgU2Vzc2lvbk1hbmFnZXIudW5sb2FkSGFuZGxlciwgU2Vzc2lvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIC0tIElPIEdsb2JhbCBFdmVudHMgLS1cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzLmdsb2JhbElPKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY29wZSA9IGV2ZW50cy5nbG9iYWxJTy5zY29wZSB8fCB3aW5kb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWZlY3ljbGUgPSBldmVudHMuZ2xvYmFsSU8ubGlmZWN5Y2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA9IGV2ZW50cy5nbG9iYWxJTy5zdGF0dXNDb2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGV2ZW50TmFtZSBpbiBsaWZlY3ljbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXByZWNhdGVkLkV2ZW50Lm9uKCdkZXBsb3lSLWlvOicgKyBldmVudE5hbWUsIGxpZmVjeWNsZVtldmVudE5hbWVdLCBzY29wZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZXZlbnROYW1lIGluIHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXByZWNhdGVkLkV2ZW50Lm9uKCdkZXBsb3lSLWlvOicgKyBldmVudE5hbWUsIHN0YXR1c0NvZGVbZXZlbnROYW1lXSwgc2NvcGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBOZXcgQVBJXG4gICAgICAgICAgICBkZXBsb3lyLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICAgICAgaG9zdDogY29uZmlnLmRlcGxveXJVUkksXG4gICAgICAgICAgICAgICAgY29yczogY29uZmlnLmRlcGxveXJVUkkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9nZ2luZzogY29uZmlnLmxvZ2dpbmcsXG4gICAgICAgICAgICAgICAgc3RpY2t5OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbzogZnVuY3Rpb24oYXBpLCBjb25maWcsIGNiKSB7XG4gICAgICAgICAgICBpZiAoY29uc29sZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignXCInICsgY2FtZWxDYXNlKGFwaSkgKyAnKClcIiBBUEkgaXMgbm93IGRlcHJlY2F0ZWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNiID0gY2IgfHwge307XG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAgICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IGNvbmZpZy50cmFuc2FjdGlvbiB8fCB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc0FyZ3MgPSB0cmFuc2FjdGlvblsnYXJndW1lbnRzJ10sXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA9IHRyYW5zYWN0aW9uLnN0YXR1c0NvZGUgfHwge30sXG4gICAgICAgICAgICAgICAgc2NvcGUgPSBjYi5zY29wZSB8fCB3aW5kb3csXG4gICAgICAgICAgICAgICAgcm91dHB1dHMgPSBjb25maWcucm9iamVjdHMsXG4gICAgICAgICAgICAgICAgcmlucHV0cyA9IGNvbmZpZy5pbnB1dHM7IC8vIGNvbmZpZy5pbnB1dHMgPSBSLkRlcGxveVIucGFyc2VJbnB1dHMoY29uZmlnLmlucHV0cyk7XG5cbiAgICAgICAgICAgIC8vIC0tLSBvbWl0IGRlcHJlY2F0ZWQgcHJvcHMgLS0tXG4gICAgICAgICAgICBpZiAoY29uZmlnLnRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy50cmFuc2FjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5tZXRob2Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm9uKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5vbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcuZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5mb3JtYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLmlucHV0cykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuaW5wdXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5yb2JqZWN0cykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcucm9iamVjdHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLSBtYWtlIHRoZSBuZXcgcmVxdWVzdCAtLS1cbiAgICAgICAgICAgIHZhciBpbyA9IGRlcGxveXIuaW8oYXBpKVxuICAgICAgICAgICAgICAgIC5kYXRhKGNvbmZpZyB8fCB7fSlcbiAgICAgICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2xvYmFsLWZhaWx1cmVcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KCdkZXBsb3lSLWlvOmZhaWx1cmUnLCBbcmVzcG9uc2UsIGFwaSwgdHJhbnNBcmdzXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNhY3Rpb24tZmFpbHVyZVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2IuZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IuZmFpbHVyZS5hcHBseShzY29wZSwgW3Jlc3BvbnNlLCBhcGksIHRyYW5zQXJnc10pOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZ2xvYmFsLXN0YXR1c0Vycm9yXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdCgoJ2RlcGxveVItaW86JyArIGNvZGUpLCBbcmVzcG9uc2UsIGFwaSwgdHJhbnNBcmdzXSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyaW5wdXRzKSB7XG4gICAgICAgICAgICAgICAgaW8ucmlucHV0cyhub3JtYWxpemVJbnB1dHMocmlucHV0cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvdXRwdXRzKSB7XG4gICAgICAgICAgICAgICAgaW8ucm91dHB1dHMocm91dHB1dHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLnN5bmMpIHtcbiAgICAgICAgICAgICAgICBpby5zeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24udGltZW91dCkge1xuICAgICAgICAgICAgICAgIGlvLnRpbWVvdXQodHJhbnNhY3Rpb24udGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLSBFcnJvciBzdGF0dXMgY29kZSAtLS0gLy9cbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBldmVudE5hbWUgaW4gc3RhdHVzQ29kZSkgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlvLm9uKCdkZXBsb3lyLWlvOicgKyBldmVudE5hbWUsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1c1RleHQgPSByZXNwb25zZS5kZXBsb3lyLnJlc3BvbnNlLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHJlc3BvbnNlLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Jbc3RhdHVzXS5hcHBseShzY29wZSwgW3Jlc3BvbnNlLCBzdGF0dXMsIHN0YXR1c1RleHQsIGFwaSwgdHJhbnNBcmdzXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyBAQEBAVE9ETyBAQEBAQEBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZ2xvYmFsLXN0YXJ0XG4gICAgICAgICAgICBlbWl0dGVyLmVtaXQoJ2RlcGxveVItaW86c3RhcnQnKTtcblxuICAgICAgICAgICAgLy8vIHRyYW5zYWN0aW9uLXN0YXJ0XG4gICAgICAgICAgICBpZiAoY2Iuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICBjYi5zdGFydC5hcHBseShzY29wZSwgW2FwaSwgdHJhbnNBcmdzXSk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpby5lbmQoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBnbG9iYWwtY29tcGxldGVcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoJ2RlcGxveVItaW86Y29tcGxldGUnKTtcblxuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uLWNvbXBsZXRlXG4gICAgICAgICAgICAgICAgaWYgKGNiLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiLmNvbXBsZXRlLmFwcGx5KHNjb3BlLCBbcmVzcG9uc2UsIGFwaSwgdHJhbnNBcmdzXSk7IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGVudGl0eSBtYW5pcHVsYXRpb24gb2YgdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmVudGl0eSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGZvcm1hdChyZXNwb25zZSwgdHJhbnNhY3Rpb24uZW50aXR5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBnbG9iYWwtc3VjY2Vzc1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnZGVwbG95Ui1pbzpzdWNjZXNzJywgW3Jlc3BvbnNlLCBhcGldKTtcblxuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uLXN1Y2Nlc3NcbiAgICAgICAgICAgICAgICBpZiAoY2Iuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzLmFwcGx5KHNjb3BlLCBbcmVzcG9uc2UsIGFwaSwgdHJhbnNBcmdzXSk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBnbG9iYWwtZW5kXG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KCdkZXBsb3lSLWlvOmVuZCcsIFtyZXNwb25zZSwgYXBpXSk7XG5cbiAgICAgICAgICAgICAgICAvLyB0cmFuc2FjdGlvbi1lbmRcbiAgICAgICAgICAgICAgICBpZiAoY2IuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiLmVuZC5hcHBseShzY29wZSwgW3Jlc3BvbnNlLCBhcGksIHRyYW5zQXJnc10pOyBcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmxhdHRlbnMgYSBnaXZlbiA8Y29kZT5SZXZvbHV0aW9uLlJEYXRhPC9jb2RlPiB0eXBlIGludG8gYSBKU09OXG4gICAgICAgICAqIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGV4cGVjdGVkIERlcGxveVIgaW5wdXQgZm9ybWF0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHBhcnNlSW5wdXRzXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gcmRhdGEgQW4gQXJyYXkgb2YgUkRhdGEgT2JqZWN0cyB0byBiZSBmbGF0dGVuZWQuXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGZsYXR0ZW5kIFJEYXRhIEpTT04gc3RyaW5nIHJlcHJlc2VudGluZyB0aGVcbiAgICAgICAgICogRGVwbG95UiBpbnB1dCBmb3JtYXQuXG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZUlucHV0czogZnVuY3Rpb24ocmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZGF0YTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIFByb2plY3QgV29ya3NwYWNlIEFQSXNcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGxpc3RzIHRoZSBvYmplY3RzIGluIHRoZSB3b3Jrc3BhY2UgZm9yIHRoZSBwcm9qZWN0IGluZGljYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0V29ya3NwYWNlTGlzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cm9vdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBvYmplY3QgZ3JhcGggcm9vdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jbGF6ejwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBSIGNsYXNzIGJhc2VkIGZpbHRlcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWx0ZXI8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgUiBvYmplY3QgbmFtZSBiYXNlZCBmaWx0ZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZSwgbGltaXRzIHJldHVybmVkIG9iamVjdHMgdG8gb2JqZWN0XG4gICAgICAgICAqICAgICAgIHR5cGVzIHdpdGggc3VwcG9ydGVkIFJldm9EZXBsb3lSLWVuY29kaW5nXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wYWdlc2l6ZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHBhZ2Ugc2l6ZSBmb3IgcGFnaW5nIHJlc3VsdHMgaW4gcmVzcG9uc2VcbiAgICAgICAgICogICAgICAgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wYWdlb2Zmc2V0PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcGFnZSBvZmZzZXQgZm9yIHBhZ2luZyByZXN1bHRzIGluIHJlc3BvbnNlXG4gICAgICAgICAqICAgICAgIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RXb3Jrc3BhY2VMaXN0OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC93b3Jrc3BhY2UvbGlzdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgcmV0cmlldmVzIFJldm9EZXBsb3lSLWVuY29kZWQgb2JqZWN0cyBmcm9tIHRoZSB3b3Jrc3BhY2UgZm9yIHRoZVxuICAgICAgICAgKiBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0V29ya3NwYWNlR2V0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIG9iamVjdCBuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yb290PC9kdD5cbiAgICAgICAgICogICAgPGRkPm9wdGlvbmFsKSBzcGVjaWZpZXMgb2JqZWN0IGdyYXBoIHJvb3Q8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RhcnQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+b3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgb2Zmc2V0IGludG8gb2JqZWN0IGRhdGE8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bGVuZ3RoPC9kdD5cbiAgICAgICAgICogICAgPGRkPm9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHNlZ21lbnQgb2Ygb2JqZWN0IGRhdGEgdG8gcmV0cmlldmU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5pbmZpbml0eTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjdXN0b20gdmFsdWUgZm9yIEluZmluaXR5IGFwcGVhcmluZyBpbiBSXG4gICAgICAgICAqICAgICAgIG9iamVjdCBkYXRhIHJldHVybmVkIG9uIHRoZSBjYWxsLCBvdGhlcndpc2UgSW5maW5pdHkgaXMgcmVwcmVzZW50ZWRcbiAgICAgICAgICogICAgICAgYnkgMHg3ZmYwMDAwMDAwMDAwMDAwTFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5uYW48L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGN1c3RvbSB2YWx1ZSBmb3IgTmFOIGFwcGVhcmluZyBpbiBSIG9iamVjdCBkYXRhXG4gICAgICAgICAqICAgICAgIHJldHVybmVkIG9uIHRoZSBjYWxsLCBvdGhlcndpc2UgTmFOIGlzIHJlcHJlc2VudGVkIGJ5IG51bGxcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmVuY29kZURhdGFGcmFtZVByaW1pdGl2ZUFzVmVjdG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBkYXRhLmZyYW1lIHByaW1pdGl2ZXMgYXJlIGVuY29kZWRcbiAgICAgICAgICogICAgICAgdmVjdG9ycyBpbiBSIG9iamVjdCBkYXRhIHJldHVybmVkIG9uIGNhbGxcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0V29ya3NwYWNlR2V0OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC93b3Jrc3BhY2UvZ2V0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB1cGxvYWRzIGEgYmluYXJ5IG9iamVjdCBmcm9tIGZpbGUgaW50byB0aGUgd29ya3NwYWNlIGZvciB0aGVcbiAgICAgICAgICogc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFdvcmtzcGFjZVVwbG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIG9iamVjdCBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+ZmlsZSBjb250ZW50PC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0V29ya3NwYWNlVXBsb2FkOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25maWcuZm9ybWF0ID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICB2YXIgaW9Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogY29uZmlnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgICAgICBpZDogY29uZmlnLmZvcm1JZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IGNhbGxiYWNrXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3Qvd29ya3NwYWNlL3VwbG9hZCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdHJhbnNmZXJzIGEgYmluYXJ5IG9iamVjdCBmcm9tIGEgVVJMIGludG8gdGhlIHdvcmtzcGFjZSBmb3IgdGhlXG4gICAgICAgICAqIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RXb3Jrc3BhY2VUcmFuc2ZlclxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIG9iamVjdCBmaWxlIGZvdW5kIG9uIHRoZSBVUkw8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dXJsPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgVVJMPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0V29ya3NwYWNlVHJhbnNmZXI6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3dvcmtzcGFjZS90cmFuc2ZlcicsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgcHVzaGVzIGEgUmV2b0RlcGxveVItZW5jb2RlZCBvYmplY3QgaW50byB0aGUgd29ya3NwYWNlIGZvciB0aGVcbiAgICAgICAgICogc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFdvcmtzcGFjZVB1c2hcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIFJldm9EZXBsb3lSLWVuY29kZWQgb2JqZWN0IGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jc3ZpbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBwcmltaXRpdmUgbmFtZS92YWx1ZSBpbnB1dHM8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RXb3Jrc3BhY2VQdXNoOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC93b3Jrc3BhY2UvcHVzaCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgc2F2ZXMgdGhlIHdvcmtzcGFjZSB0byBhIGZpbGUgaW4gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGZvciB0aGVcbiAgICAgICAgICogc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBuYW1lIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgb24gdGhlIGNhbGwgdGhlbiBvbmx5IHRoZSBuYW1lZCBvYmplY3RcbiAgICAgICAgICogaXMgc2F2ZWQgYXMgYSBiaW5hcnkgb2JqZWN0IGZpbGUgdG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5LiBPdGhlcndpc2UgdGhlXG4gICAgICAgICAqIGVudGlyZSBjb250ZW50cyBvZiB0aGUgd29ya3NwYWNlIGFyZSBzYXZlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0V29ya3NwYWNlU2F2ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIG5hbWVkIG9iamVjdCBmb3Igc2F2aW5nPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgZGVzY3JpcHRpb24gdG8gYWNjb21wYW55IHRoZSBzYXZlZCBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIG5ldyBmaWxlIHdpbGwgYmUgcmVuYW1lZCB0byBhdm9pZFxuICAgICAgICAgKiAgICAgICBvdmVyd3JpdGluZ1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RXb3Jrc3BhY2VTYXZlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC93b3Jrc3BhY2Uvc2F2ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgc3RvcmVzIHRoZSB3b3Jrc3BhY2UgYXMgYSBiaW5hcnkgb2JqZWN0IHRvIHRoZSByZXBvc2l0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgbmFtZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkIG9uIHRoZSBjYWxsLCB0aGVuIG9ubHkgdGhlIG5hbWVkIG9iamVjdFxuICAgICAgICAgKiBpcyBzdG9yZWQgYXMgYSBiaW5hcnkgb2JqZWN0IGluIHRoZSByZXBvc2l0b3J5LiBPdGhlcndpc2UgdGhlIGVudGlyZVxuICAgICAgICAgKiBjb250ZW50cyBvZiB0aGUgd29ya3NwYWNlIGFyZSBzdG9yZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFdvcmtzcGFjZVN0b3JlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0Pm5hbWU8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIG5hbWVkIG9iamVjdCBmb3Igc3RvcmluZzwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBkZXNjcmlwdGlvbiB0byBhY2NvbXBhbnkgdGhlIHNhdmVkIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGFnIHdvcmRzIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSByZXBvc2l0b3J5IGZpbGVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJlc3RyaWN0ZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygcm9sZSBuYW1lcywgd2hpY2ggbWFrZXMgdGhlIGZpbGVcbiAgICAgICAgICogICAgICAgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzIHdpdGggdGhlc2Ugcm9sZXNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgdGhlIGZpbGUgd2lsbCBiZSBzaGFyZWQsIHdoaWNoXG4gICAgICAgICAqICAgICAgIG1ha2VzIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2Vyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHVibGlzaGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCB0aGUgZmlsZSB3aWxsIGJlIHB1Ymxpc2hlZCwgd2hpY2hcbiAgICAgICAgICogICAgICAgbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+bmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCB0aGUgbmV3IGZpbGUgd2lsbCBiZSByZW5hbWVkIHRvXG4gICAgICAgICAqICAgICAgIGF2b2lkIG92ZXJ3cml0aW5nXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqICA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RXb3Jrc3BhY2VTdG9yZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3Qvd29ya3NwYWNlL3N0b3JlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBsb2FkcyBhIGJpbmFyeSBvYmplY3QgZnJvbSBhIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgaW50byB0aGVcbiAgICAgICAgICogd29ya3NwYWNlIGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFdvcmtzcGFjZUxvYWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJlcG88L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPnNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIGF1dGhvcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIHZlcnNpb248L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0V29ya3NwYWNlTG9hZDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3Qvd29ya3NwYWNlL2xvYWQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGRlbGV0ZXMgYW4gb2JqZWN0IGZyb20gdGhlIHdvcmtzcGFjZSBmb3IgdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RXb3Jrc3BhY2VEZWxldGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBvYmplY3QgbmFtZTwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFdvcmtzcGFjZURlbGV0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3Qvd29ya3NwYWNlL2RlbGV0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gUHJvamVjdCBNYW5hZ2VtZW50IEFQSXNcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgY3JlYXRlcyBhIG5ldyBwcm9qZWN0IGZvciB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlci5cbiAgICAgICAgICogSWYgdGhlIHByb2plY3RuYW1lIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgb24gdGhlIGNhbGwsIHRoZW4gdGhlIG5ld2x5XG4gICAgICAgICAqIGNyZWF0ZWQgcHJvamVjdCB3aWxsIGJlIGEgcGVyc2lzdGVudCBwcm9qZWN0IC4gSWYgdGhlIHByb2plY3RuYW1lIHBhcmFtZXRlclxuICAgICAgICAgKiBpcyBvbWl0dGVkIG9uIHRoZSBjYWxsLCB0aGVuIHRoZSBuZXdseSBjcmVhdGVkIHByb2plY3Qgd2lsbCBiZSBhIHRlbXBvcmFyeVxuICAgICAgICAgKiBwcm9qZWN0LiBUaGUgcHJvamVjdGRlc2NyIHBhcmFtZXRlciBpcyBpZ25vcmVkIGlmIHRoZSBwcm9qZWN0bmFtZSBwYXJhbWV0ZXJcbiAgICAgICAgICogaXMgb21pdHRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGJsYWNrYm94IHBhcmFtZXRlciBlbnN1cmVzIHRoYXQgY2FsbHMgb24gdGhlIHRlbXBvcmFyeSBwcm9qZWN0IGFyZVxuICAgICAgICAgKiBsaW1pdGVkIHRvIHRoZSBCbGFja2JveCBBUEkgQ29udHJvbHMgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2luZyB0aGUgaW5wdXRzICwgcHJlbG9hZGZpbGUgLCBwcmVsb2Fkb2JqZWN0IGFuZCBhZG9wdCBwYXJhbWV0ZXJzIHRoZVxuICAgICAgICAgKiBwcm9qZWN0IGNhbiBiZSBwcmUtaW5pdGlhbGl6ZWQgd2l0aCBkYXRhIGluIHRoZSB3b3Jrc3BhY2UgYW5kL29yIHdvcmtpbmdcbiAgICAgICAgICogZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgaW5wdXRzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBwYXNzIFJldm9EZXBsb3lSLWVuY29kZWQgUiBvYmplY3RcbiAgICAgICAgICogdmFsdWVzIGFzIGlucHV0cy4gVGhlc2UgaW5wdXRzIGFyZSB0dXJuZWQgaW50byBSIG9iamVjdHMgaW4gdGhlIHdvcmtzcGFjZVxuICAgICAgICAgKiBvZiB0aGUgbmV3IFIgc2Vzc2lvbiBiZWZvcmUgdGhlIGNhbGwgcmV0dXJucy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHByZWxvYWRmaWxlIHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlIGZpbGVzIGZyb21cbiAgICAgICAgICogdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya2luZyBkaXJlY3Rvcnkgb2YgdGhlIG5ldyBSIHNlc3Npb24gYmVmb3JlIHRoZVxuICAgICAgICAgKiBjYWxsIHJldHVybnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBwcmVsb2Fkb2JqZWN0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlIGJpbmFyeSBSXG4gICAgICAgICAqIG9iamVjdHMgKC5yRGF0YSkgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3Jrc3BhY2Ugb2YgdGhlIG5ldyBSXG4gICAgICAgICAqIHNlc3Npb24gYmVmb3JlIHRoZSBjYWxsIHJldHVybnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBhZG9wdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBhIHByZS1leGlzdGluZyBwcm9qZWN0XG4gICAgICAgICAqIHdvcmtzcGFjZSwgcHJvamVjdCB3b3JraW5nIGRpcmVjdG9yeSBhbmQvb3IgcHJvamVjdCBwYWNrYWdlIGRlcGVuZGVuY2llc1xuICAgICAgICAgKiBpbnRvIHRoZSBuZXcgUiBzZXNzaW9uIGJlZm9yZSB0aGUgY2FsbCByZXR1cm5zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RDcmVhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIG5hbWVzIGEgbmV3IHBlcnNpc3RlbnQgcHJvamVjdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBkZXNjcmliZXMgYSBuZXcgcGVyc2lzdGVudCBwcm9qZWN0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmJsYWNrYm94PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHdoZW4gZW5hYmxlZCwgYSB0ZW1wb3JhcnkgcHJvamVjdCBpcyBsaW1pdGVkIHRvIGJsYWNrYm94XG4gICAgICAgICAqICAgICAgIEFQSSBjb250cm9sc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUmV2b0RlcGxveVItZW5jb2RlZCBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y3N2aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcHJpbWl0aXZlIG5hbWUvdmFsdWUgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlYXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsXG4gICAgICAgICAqICAgICAgIGF1dGhvci1wZXItcHJlbG9hZGZpbGVuYW1lXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZXZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsXG4gICAgICAgICAqICAgICAgIHZlcnNpb24tcGVyLXByZWxvYWRmaWxlbmFtZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdG5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBvYmplY3QgKC5yRGF0YSlcbiAgICAgICAgICogICAgICAgZmlsZW5hbWVzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsXG4gICAgICAgICAqICAgICAgIGF1dGhvci1wZXItcHJlbG9hZG9iamVjdG5hbWVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3R2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLFxuICAgICAgICAgKiAgICAgICB2ZXJzaW9uLXBlci1vYmplY3QtcHJlbG9hZG9iamVjdG5hbWVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0d29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlkZW50aWZpZXMgdGhlIHByb2plY3Qgd2hvc2Ugd29ya3NwYWNlIGlzIHRvIGJlIGFkb3B0ZWRcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlkZW50aWZpZXMgdGhlIHByb2plY3Qgd2hvc2UgZGlyZWN0b3J5IGlzIHRvIGJlIGFkb3B0ZWRcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0cGFja2FnZXM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWRlbnRpZmllcyB0aGUgcHJvamVjdCB3aG9zZSBwYWNrYWdlIGRlcGVuZGVuY2llcyBhcmUgdG9cbiAgICAgICAgICogICAgICAgYmUgYWRvcHRlZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RDcmVhdGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2NyZWF0ZScsIGNvbmZpZywgY2FsbGJhY2spOyAgICAgICAgICAgIFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgY3JlYXRlcyBhIHBvb2wgb2YgdGVtcG9yYXJ5IHByb2plY3RzIGZvciB0aGUgY3VycmVudGx5XG4gICAgICAgICAqIGF1dGhlbnRpY2F0ZWQgdXNlci4gVGhlIGNhbGxlciBjYW4gc3BlY2lmeSB0aGVpciBwcmVmZXJyZWQgbnVtYmVyIG9mXG4gICAgICAgICAqIHByb2plY3RzIHRvIGNyZWF0ZSB1c2luZyB0aGUgcG9vbHNpemUgcGFyYW1ldGVyLiBSZXZvRGVwbG95UiB3aWxsIGF0dGVtcHRcbiAgICAgICAgICogdG8gY3JlYXRlIHVwIHRvIHBvb2xzaXplIG51bWJlciBvZiBwcm9qZWN0cy4gSG93ZXZlciwgc3RhbmRhcmQgY29tXG4gICAgICAgICAqIHBvbGljeSBjb250cmFpbnRzIGFwcGx5IHRvIGluZGl2aWR1YWwgdXNlcnMgYW5kIG9uIHRoZSBncmlkIHNvIHRoZXJlIGlzIG5vXG4gICAgICAgICAqIGd1YXJhbnRlZSB0aGF0IHBvb2xzaXplIHByb2plY3RzIHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBudW1iZXIgb2ZcbiAgICAgICAgICogcHJvamVjdHMgcmV0dXJuZWQgb24gdGhpcyBjYWxsIGlzIGxlc3MgdGhhbiBwb29sc2l6ZSB0aGUgY2FsbGVyIGNhbiBpbnNwZWN0XG4gICAgICAgICAqIHRoZSBlcnJvciBhbmQgZXJyb3JDb2RlIHByb3BlcnRpZXMgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cCB0byBkZXRlcm1pbmVcbiAgICAgICAgICogZXhhY3RseSB3aHkgdGhlaXIgcG9vbCBzaXplIHdhcyBsaW1pdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgYmxhY2tib3ggcGFyYW1ldGVyIGVuc3VyZXMgdGhhdCBjYWxscyBvbiBlYWNoIHByb2plY3QgaW4gdGhlIHBvb2wgYXJlXG4gICAgICAgICAqIGxpbWl0ZWQgdG8gdGhlIEJsYWNrYm94IEFQSSBDb250cm9scyAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFVzaW5nIHRoZSBpbnB1dHMsIHByZWxvYWRmaWxlLCBwcmVsb2Fkb2JqZWN0IGFuZCBhZG9wdCBwYXJhbWV0ZXJzIGVhY2hcbiAgICAgICAgICogcHJvamVjdCBpbiB0aGUgcG9vbCBjYW4gYmUgcHJlLWluaXRpYWxpemVkIHdpdGggZGF0YSBpbiB0aGUgd29ya3NwYWNlXG4gICAgICAgICAqIGFuZC9vciB3b3JraW5nIGRpcmVjdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGlucHV0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gcGFzcyBSZXZvRGVwbG95Ui1lbmNvZGVkIFIgb2JqZWN0XG4gICAgICAgICAqIHZhbHVlcyBhcyBpbnB1dHMuIFRoZXNlIGlucHV0cyBhcmUgdHVybmVkIGludG8gUiBvYmplY3RzIGluIHRoZSB3b3Jrc3BhY2VcbiAgICAgICAgICogb2YgdGhlIG5ldyBSIHNlc3Npb24gYmVmb3JlIHRoZSBjYWxsIHJldHVybnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBwcmVsb2FkZmlsZSBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZSBmaWxlcyBmcm9tXG4gICAgICAgICAqIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IG9mIHRoZSBuZXcgUiBzZXNzaW9uIGJlZm9yZSB0aGVcbiAgICAgICAgICogY2FsbCByZXR1cm5zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgcHJlbG9hZG9iamVjdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZSBiaW5hcnkgUlxuICAgICAgICAgKiBvYmplY3RzICguckRhdGEpIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya3NwYWNlIG9mIHRoZSBuZXcgUlxuICAgICAgICAgKiBzZXNzaW9uIGJlZm9yZSB0aGUgY2FsbCByZXR1cm5zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgYWRvcHQgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgYSBwcmUtZXhpc3RpbmcgcHJvamVjdFxuICAgICAgICAgKiB3b3Jrc3BhY2UsIHByb2plY3Qgd29ya2luZyBkaXJlY3RvcnkgYW5kL29yIHByb2plY3QgcGFja2FnZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgICogaW50byB0aGUgbmV3IFIgc2Vzc2lvbiBiZWZvcmUgdGhlIGNhbGwgcmV0dXJucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0UG9vbFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnBvb2xzaXplPC9kdD5cbiAgICAgICAgICogICAgPGRkPnRoZSBwcmVmZXJyZWQgc2l6ZSBvZiB0aGUgcG9vbCBvZiB0ZW1wb3JhcnkgcHJvamVjdHM8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+YmxhY2tib3g8L2RkPlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSB3aGVuIGVuYWJsZWQsIGVhY2ggdGVtcG9yYXJ5IHByb2plY3QgaW4gdGhlIHBvb2wgaXMgbGltaXRlZCB0byBibGFja2JveCBBUEkgY29udHJvbHM8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUmV2b0RlcGxveVItZW5jb2RlZCBpbnB1dHM8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGVhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZXZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItcHJlbG9hZGZpbGVuYW1lPC9kZD5cbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3RuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBvYmplY3QgKC5yRGF0YSkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3RhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3R2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLW9iamVjdC1wcmVsb2Fkb2JqZWN0bmFtZTwvZGQ+XG4gICAgICAgICAqICAgIDxkdD5hZG9wdHdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIHdvcmtzcGFjZSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICogICAgPGR0PmFkb3B0ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggZGlyZWN0b3J5IGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRwYWNrYWdlczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIHBhY2thZ2UgZGVwZW5kZW5jaWVzIGFyZSB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0UG9vbDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvcG9vbCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgcmVjeWNsZXMgdGhlIFIgc2Vzc2lvbiBhc3NvY2lhdGVkIHdpdGggdGhlIHByb2plY3QgYnkgZGVsZXRpbmdcbiAgICAgICAgICogYWxsIFIgb2JqZWN0cyBmcm9tIHRoZSB3b3Jrc3BhY2UgYW5kIGFsbCBmaWxlcyBmcm9tIHRoZSB3b3JraW5nIGRpcmVjdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogUmVjeWNsaW5nIGEgcHJvamVjdCBpcyBhIGNvbnZlbmllbnQgYW5kIGVmZmljaWVudCBhbHRlcm5hdGl2ZSB0byBzdGFydGluZ1xuICAgICAgICAgKiBvdmVyIGJ5IGNsb3NpbmcgYW4gZXhpc3RpbmcgcHJvamVjdCBhbmQgdGhlbiBjcmVhdGluZyBhIG5ldyBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RSZWN5Y2xlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICogICAgPGR0PnByZXNlcnZld29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIG9iamVjdHMgaW4gdGhlIHdvcmtzcGFjZSBhcmUgcHJlc2VydmVkIG9uIHJlY3ljbGU8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+cHJlc2VydmVkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZXMgaW4gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGFyZSBwcmVzZXJ2ZWQgb24gcmVjeWNsZTwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFJlY3ljbGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3JlY3ljbGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGxpc3RzIGFsbCBwcm9qZWN0cyBvd25lZCBieSB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgICAgICAgKiBhbmQvb3IgYWxsIHByb2plY3RzIHNoYXJlZCBieSBvdGhlciB1c2Vycy5cbiAgICAgICAgICpcbiAgICAgICAgICogU2hhcmVkIHByb2plY3RzIGFyZSBhdmFpbGFibGUgYXMgcmVhZC1vbmx5IHByb2plY3RzIHRvIHRoZSBjYWxsZXIuIFRoZVxuICAgICAgICAgKiBzaGFyZWQgb3IgcHJpdmF0ZSBuYXR1cmUgb2YgYSBwcm9qZWN0IGNhbiBiZSBjb250cm9sbGVkIHVzaW5nIHRoZVxuICAgICAgICAgKiA8Y29kZT4vci9wcm9qZWN0L2Fib3V0L3VwZGF0ZTwvY29kZT4gY2FsbFxuICAgICAgICAgKiA8YSBocmVmPVwiI21ldGhvZF9wcm9qZWN0QWJvdXRVcGRhdGVcIj5wcm9qZWN0QWJvdXRVcGRhdGU8L2E+LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RMaXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkcHJvamVjdHNhbHNvPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHdoZW4gdHJ1ZSwgdGhlIHByb2plY3QgcmVzcG9uc2UgbGlzdCBjb250YWlucyB0aGUgY2FsbGVyJ3NcbiAgICAgICAgICogICAgICAgcHJvamVjdHMgcGx1cyBwcm9qZWN0cyBzaGFyZWQgYnkgb3RoZXIgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZHByb2plY3Rzb25seTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSB3aGVuIHRydWUsIHRoZSBwcm9qZWN0IHJlc3BvbnNlIGxpc3QgY29udGFpbnMgb25seVxuICAgICAgICAgKiAgICAgICBwcm9qZWN0cyBzaGFyZWQgYnkgb3RoZXIgdXNlcnMgYW5kIG5vdCB0aGUgdXNlcnMncyBvd24gcHJvamVjdHNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pmlzb3JkZXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSB3aGVuIHRydWUsIHRoZSBwcm9qZWN0IHJlc3BvbnNlIGxpc3QgaXMgb3JkZXJlZCBpbiBhXG4gICAgICAgICAqICAgICAgIG1vc3QtcmVjZW50bHktbW9kaWZpZWQgZmlyc3Qgb3JkZXIuIE90aGVyd2lzZSB0aGUgbGlzdCBpcyBvcmRlcmVkXG4gICAgICAgICAqICAgICAgIGNocm9ub2xvZ2ljYWxseSBieSBjcmVhdGlvbiBkYXRlXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdExpc3Q6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2xpc3QnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBwaW5ncyB0aGUgc3BlY2lmaWVkIHByb2plY3QgdG8gZGV0ZXJtaW5lIGlmIHRoZSBwcm9qZWN0IGlzIGxpdmVcbiAgICAgICAgICogb24gdGhlIFJldm9EZXBsb3lSIGdyaWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFBpbmdcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiAgPGRsPlxuICAgICAgICAgKiAgICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0UGluZzogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvcGluZycsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgcmV0cmlldmVzIGEgc2V0IG9mIHByb3BlcnRpZXMgdGhhdCBkZXNjcmliZSB0aGUgc3BlY2lmaWVkXG4gICAgICAgICAqIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdEFib3V0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEFib3V0OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9hYm91dCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdXBkYXRlcyBhIHNldCBvZiBwcm9wZXJ0aWVzIHRoYXQgZGVzY3JpYmUgdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RBYm91dFVwZGF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcHJvamVjdCBkZXNjcmlwdGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5sb25nZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHByb2plY3QgbG9uZyBkZXNjcmlwdGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHNwZWNpZmllcyB0aGF0IHRoZSBwcm9qZWN0IGlzIGFcbiAgICAgICAgICogICAgICAgc2hhcmVkIHByb2plY3RcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByb2plY3Rjb29raWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGEgY2xpZW50LWFwcGxpY2F0aW9uIHNwZWNpZmljIHByb2plY3QgY29va2llXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqICA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RBYm91dFVwZGF0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvYWJvdXQvdXBkYXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBzYXZlcyB0aGUgcGVyc2lzdGVudCBzdGF0ZSBvZiB0aGUgcHJvamVjdCBpbmRpY2F0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBzZXQgb2YgZHJvcCBwYXJhbWV0ZXJzIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNlbGVjdGl2ZWx5IGRyb3AgYXNwZWN0cyxcbiAgICAgICAgICogc3VjaCBhcyB3b3Jrc3BhY2UsIHdvcmtpbmcgZGlyZWN0b3J5LCBvciBleGVjdXRpb24gaGlzdG9yeSBvZiB0aGUgcHJvamVjdFxuICAgICAgICAgKiBzdGF0ZSB3aGVuIHNhdmluZy4gVGhlIGZsdXNoaGlzdG9yeSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gcHJlc2VydmVcbiAgICAgICAgICogdGhlIHByb2plY3QgZXhlY3V0aW9uIGhpc3RvcnkgaXRzZWxmIHdoaWxlIGRlc3Ryb3lpbmcgYWxsIGdlbmVyYXRlZCBjb25zb2xlXG4gICAgICAgICAqIG91dHB1dCBhbmQgcmVzdWx0cyBhc3NvY2lhdGVkIHdpdGggdGhhdCBoaXN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RTYXZlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHByb2plY3QgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcHJvamVjdCBkZXNjcmlwdGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5sb25nZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHByb2plY3QgbG9uZyBkZXNjcmlwdGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCBzcGVjaWZpZXMgdGhlIHByb2plY3QgaXMgYSBzaGFyZWQgcHJvamVjdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0Y29va2llPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgY2xpZW50LWFwcGxpY2F0aW9uIHNwZWNpZmljIHByb2plY3QgY29va2llPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRyb3B3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCdzIHdvcmtzcGFjZSBpcyBkcm9wcGVkIG9uIHNhdmU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0J3Mgd29ya2luZyBkaXJlY3RvcnkgaXMgZHJvcHBlZCBvbiBzYXZlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRyb3BoaXN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHByb2plY3QncyBleGVjdXRpb24gaGlzdG9yeSBpcyBkcm9wcGVkIG9uIHNhdmU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Zmx1c2hoaXN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHByb2plY3QncyBleGVjdXRpb24gaGlzdG9yeSBpcyBmbHVzaGVkIG9uIHNhdmU8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RTYXZlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9zYXZlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBzYXZlcyB0aGUgcGVyc2lzdGVudCBzdGF0ZSBvZiB0aGUgc3BlY2lmaWVkIHByb2plY3QgdG8gYSBuZXdcbiAgICAgICAgICogcGVyc2lzdGVudCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgc2V0IG9mIGRyb3AgcGFyYW1ldGVycyBhbGxvd3MgdGhlIGNhbGxlciB0byBzZWxlY3RpdmVseSBkcm9wIGFzcGVjdHMsXG4gICAgICAgICAqIHN1Y2ggYXMgd29ya3NwYWNlLCB3b3JraW5nIGRpcmVjdG9yeSwgb3IgZXhlY3V0aW9uIGhpc3Rvcnkgb2YgdGhlIHByb2plY3RcbiAgICAgICAgICogc3RhdGUgd2hlbiBzYXZpbmcgdG8gdGhlIG5ldyBwcm9qZWN0LiBUaGUgZmx1c2hoaXN0b3J5IHBhcmFtZXRlciBhbGxvd3MgdGhlXG4gICAgICAgICAqIGNhbGxlciB0byBwcmVzZXJ2ZSB0aGUgcHJvamVjdCBleGVjdXRpb24gaGlzdG9yeSBpdHNlbGYgZm9yIHRoZSBuZXcgcHJvamVjdFxuICAgICAgICAgKiB3aGlsZSBkcm9wcGluZyBhbGwgZ2VuZXJhdGVkIGNvbnNvbGUgb3V0cHV0IGFuZCByZXN1bHRzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgICAgICogb3JpZ2luYWwgaGlzdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0U2F2ZWFzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBuZXcgcHJvamVjdCBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBuZXcgcHJvamVjdCBkZXNjcmlwdGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5sb25nZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5ldyBwcm9qZWN0IGxvbmcgZGVzY3JpcHRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgc3BlY2lmaWVzIHRoZSBuZXcgcHJvamVjdCBpcyBhIHNoYXJlZCBwcm9qZWN0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByb2plY3Rjb29raWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjbGllbnQtYXBwbGljYXRpb24gc3BlY2lmaWMgY29va2llIGZvciB0aGUgbmV3IHByb2plY3Q8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcHdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBjb250ZW50IG9mIHRoZSBvcmlnaW5hbCBwcm9qZWN0J3Mgd29ya3NwYWNlIGlzIGRyb3BwZWQgd2hlbiBzYXZpbmcgdG8gdGhlIG5ldyBwcm9qZWN0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRyb3BkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCdzIHdvcmtpbmcgZGlyZWN0b3J5IGlzIGRyb3BwZWQgd2hlbiBzYXZpbmcgdG8gdGhlIG5ldyBwcm9qZWN0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRyb3BoaXN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHByb2plY3QncyBleGVjdXRpb24gaGlzdG9yeSBpcyBkcm9wcGVkIHdoZW4gc2F2aW5nIHRvIHRoZSBuZXcgcHJvamVjdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5mbHVzaGhpc3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgcHJvamVjdCdzIGV4ZWN1dGlvbiBoaXN0b3J5IGlzIGZsdXNoZWQgd2hlbiBzYXZpbmcgdG8gdGhlIG5ldyBwcm9qZWN0PC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0U2F2ZWFzOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9zYXZlYXMnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGNsb3NlcyB0aGUgcHJvamVjdCBpbmRpY2F0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIENsb3NpbmcgYSBsaXZlIHByb2plY3QgcmVsZWFzZXMgYWxsIHJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHByb2plY3RcbiAgICAgICAgICogb24gdGhlIFJldm9EZXBsb3lSIGdyaWQuIElmIHRoZSBzcGVjaWZpZWQgcHJvamVjdCBpcyBhIHBlcnNpc3RlbnQgcHJvamVjdFxuICAgICAgICAgKiB0aGVuIHRoZSBkZWZhdWx0IGF1dG9zYXZlIHNlbWFudGljcyB3aWxsIGNhdXNlIHRoZSBwcm9qZWN0IHRvIGJlIHNhdmVkXG4gICAgICAgICAqIGF1dG9tYXRpY2FsbHkuIFRoZSBjYWxsZXIgY2FuIG92ZXJyaWRlIHRoYXQgZGVmYXVsdCBiZWhhdmlvciB1c2luZyB0aGVcbiAgICAgICAgICogZGlzYWJsZWF1dG9zYXZlIHBhcmFtZXRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHNldCBvZiBkcm9wIHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBzZWxlY3RpdmVseSBkcm9wIGFzcGVjdHMsXG4gICAgICAgICAqIHN1Y2ggYXMgd29ya3NwYWNlLCB3b3JraW5nIGRpcmVjdG9yeSwgb3IgZXhlY3V0aW9uIGhpc3RvcnksIG9mIHRoZSBwcm9qZWN0XG4gICAgICAgICAqIHN0YXRlIHdoZW4gY2xvc2luZy4gVGhlIGZsdXNoaGlzdG9yeSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG9cbiAgICAgICAgICogcHJlc2VydmUgdGhlIHByb2plY3QgZXhlY3V0aW9uIGhpc3RvcnkgaXRzZWxmIHdoaWxlIGRlc3Ryb3lpbmcgYWxsXG4gICAgICAgICAqIGdlbmVyYXRlZCBjb25zb2xlIG91dHB1dCBhbmQgcmVzdWx0cyBhc3NvY2lhdGVkIHdpdGggdGhhdCBoaXN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RDbG9zZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXNhYmxlYXV0b3NhdmU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZGVmYXVsdCBhdXRvc2F2ZSBzZW1hbnRpY3MgZm9yIHBlcnNpc3RlbnQgcHJvamVjdHMgYXJlIGRpc2FibGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByb2plY3Rjb29raWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjbGllbnQtYXBwbGljYXRpb24gc3BlY2lmaWMgcHJvamVjdCBjb29raWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcHdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0J3Mgd29ya3NwYWNlIGlzIGRyb3BwZWQgb24gY2xvc2U8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0J3Mgd29ya2luZyBkaXJlY3RvcnkgaXMgZHJvcHBlZCBvbiBjbG9zZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kcm9waGlzdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBwcm9qZWN0J3MgZXhlY3V0aW9uIGhpc3RvcnkgaXMgZHJvcHBlZCBvbiBjbG9zZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5mbHVzaGhpc3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgcHJvamVjdCdzIGV4ZWN1dGlvbiBoaXN0b3J5IGlzIGZsdXNoZWQgb24gY2xvc2U8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RDbG9zZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvY2xvc2UnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGdyYW50cyBhdXRob3JzaGlwIG9mIHRoZSBzcGVjaWZpZWQgcHJvamVjdCB0byBvdGhlciB1c2Vycy5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0R3JhbnRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld2F1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgc3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdXNlcm5hbWVzIGluZGljYXRpbmcgdGhlIG5ld1xuICAgICAgICAgKiAgICAgICBvd25lcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0R3JhbnQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2dyYW50JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBpbXBvcnRzIHRoZSBzcGVjaWZpZWQgcHJvamVjdCBhcmNoaXZlIGFzIGEgbmV3IHBlcnNpc3RlbnRcbiAgICAgICAgICogcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0SW1wb3J0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIHByb2plY3QgYXJjaGl2ZSBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+Li4uZmlsZSBjb250ZW50Li4uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBhIGRlc2NyaXB0aW9uIGZvciB0aGUgbmV3bHkgaW1wb3J0ZWQgcHJvamVjdFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RJbXBvcnQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbmZpZy5mb3JtYXQgPSBcInRleHRcIjtcbiAgICAgICAgICAgIHZhciBpb0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjb25maWcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb25maWcuZm9ybUlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogY2FsbGJhY2tcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9pbXBvcnQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBleHBvcnRzIGEgY29tcHJlc3NlZCBhcmNoaXZlIGZpbGUgZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHNldCBvZiBkcm9wIHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBzZWxlY3RpdmVseSBkcm9wIGFzcGVjdHMsXG4gICAgICAgICAqIHN1Y2ggYXMgd29ya3NwYWNlLCB3b3JraW5nIGRpcmVjdG9yeSwgb3IgZXhlY3V0aW9uIGhpc3Rvcnkgb2YgdGhlIHByb2plY3RcbiAgICAgICAgICogc3RhdGUgd2hlbiBnZW5lcmF0aW5nIHRoZSBhcmNoaXZlLiBUaGUgZmx1c2hoaXN0b3J5IHBhcmFtZXRlciBhbGxvd3MgdGhlXG4gICAgICAgICAqIGNhbGxlciB0byBwcmVzZXJ2ZSB0aGUgcHJvamVjdCBleGVjdXRpb24gaGlzdG9yeSBpdHNlbGYgd2hpbGUgZXhjbHVkaW5nIGFsbFxuICAgICAgICAgKiBnZW5lcmF0ZWQgY29uc29sZSBvdXRwdXQgYW5kIHJlc3VsdHMgYXNzb2NpYXRlZCB3aXRoIHRoYXQgaGlzdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RXhwb3J0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRyb3B3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCdzIHdvcmtzcGFjZSBpcyBkcm9wcGVkIG9uIGV4cG9ydDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kcm9wZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QncyB3b3JraW5nIGRpcmVjdG9yeSBpcyBkcm9wcGVkIG9uIGV4cG9ydDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kcm9waGlzdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBwcm9qZWN0J3MgZXhlY3V0aW9uIGhpc3RvcnkgaXMgZHJvcHBlZCBvbiBleHBvcnQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Zmx1c2hoaXN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHByb2plY3QncyBleGVjdXRpb24gaGlzdG9yeSBpcyBmbHVzaGVkIG9uIGV4cG9ydDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEV4cG9ydDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhwb3J0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBkZWxldGVzIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICogRGVsZXRpbmcgYSBwcm9qZWN0IGlzIGEgcGVybWFuZW50IG9wZXJhdGlvbiB0aGF0IGNhbm5vdCBiZSB1bmRvbmUgb3JcbiAgICAgICAgICogcmVjb3ZlcmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3REZWxldGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3REZWxldGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RlbGV0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gUHJvamVjdCBFeGVjdXRpb24gQVBJc1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBleGVjdXRlcyBhIGJsb2NrIG9mIFIgY29kZSBvbiB0aGUgUiBzZXNzaW9uIGlkZW50aWZpZWQgYnkgdGhlXG4gICAgICAgICAqIHByb2plY3QgcGFyYW1ldGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBQbGVhc2Ugbm90ZSB0aGUgZm9sbG93aW5nIHByZSBhbmQgcG9zdCBleGVjdXRpb24gcGFyYW1ldGVyczpcbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5QcmUtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgaW5wdXRzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBwYXNzIFJldm9EZXBsb3lSLWVuY29kZWRcbiAgICAgICAgICogICAgICAgUiBvYmplY3QgdmFsdWVzIGFzIGlucHV0cy4gVGhlc2UgaW5wdXRzIGFyZSB0dXJuZWQgaW50byBSIG9iamVjdHNcbiAgICAgICAgICogICAgICAgaW4gdGhlIHdvcmtzcGFjZSBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRmaWxlIHBhcmFtZXRlcnMgYWxsb3dzIHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBmaWxlcyBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGJlZm9yZSB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcHJlbG9hZG9iamVjdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBiaW5hcnkgUiBvYmplY3RzICguckRhdGEpIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya3NwYWNlXG4gICAgICAgICAqICAgICAgIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgYWRvcHQgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgYSBwcmUtZXhpc3RpbmdcbiAgICAgICAgICogICAgICAgcHJvamVjdCB3b3Jrc3BhY2UsIHByb2plY3Qgd29ya2luZyBkaXJlY3RvcnkgYW5kL29yIHByb2plY3QgcGFja2FnZVxuICAgICAgICAgKiAgICAgICBkZXBlbmRlbmNpZXMgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPlBvc3QtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcm9iamVjdHMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiBvYmplY3QgbmFtZXMgdGhhdCB3aWxsIGJlIHJldHVybmVkIGFzIFJldm9EZXBsb3lSLWVuY29kZWQgUlxuICAgICAgICAgKiAgICAgICBvYmplY3RzIG9uIHRoZSByZXNwb25zZSBtYXJrdXAgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlZmlsZSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlclxuICAgICAgICAgKiAgICAgICB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVvYmplY3QgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiB3b3Jrc3BhY2Ugb2JqZWN0cyB0byBiZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jld29ya3NwYWNlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzdG9yZSB0aGUgZW50aXJlXG4gICAgICAgICAqICAgICAgIHdvcmtzcGFjZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVkaXJlY3RvcnkgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSB0YXJnZXRcbiAgICAgICAgICogICAgICAgcmVwb3NpdG9yeSBkaXJlY3RvcnkgZm9yIHN0b3JlZCBmaWxlcyBhbmQgb2JqZWN0cyBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVuZXd2ZXJzaW9uIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBjcmVhdGUgbmV3XG4gICAgICAgICAqICAgICAgIHZlcnNpb25zIG9mIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICAgICBjb21wbGV0ZXMuIEJ5IGRlZmF1bHQsIHN0b3JlZCBmaWxlcyBvdmVyd3JpdGUgYW55IHByZS1leGlzdGluZyBmaWxlXG4gICAgICAgICAqICAgICAgIGJ5IHRoZSBzYW1lIG5hbWUuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlcHVibGljIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBhc3NpZ24gcHVibGljIGFjY2Vzc1xuICAgICAgICAgKiAgICAgICB0byBlYWNoIHN0b3JlZCBmaWxlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgPHN0cm9uZz5Tb21lIGtleSBkYXRhIGluZGljYXRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwIG9uIHRoaXMgY2FsbDo8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgICA8bGk+Y29kZSAtIGluZGljYXRlcyB0aGUgY29kZSB0aGF0IGhhcyBiZWVuIGV4ZWN1dGVkPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBjb25zb2xlIC0gaW5kaWNhdGVzIHRoZSBjb25zb2xlIG91dHB1dCByZXN1bHRpbmcgZnJvbSB0aGUgY29kZVxuICAgICAgICAgKiAgICAgICBleGVjdXRpb25cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICByZXN1bHRzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgUiBncmFwaGljc1xuICAgICAgICAgKiAgICAgICBkZXZpY2VcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBhcnRpZmFjdHMgLSBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgZmlsZXMgZ2VuZXJhdGVkIG9yIG1vZGlmaWVkIGluIHRoZVxuICAgICAgICAgKiAgICAgICB3b3JraW5nIGRpcmVjdG9yeVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIG9iamVjdHMgLSAgaW5kaWNhdGVzIHRoZSBsaXN0IG9mIFIgb2JqZWN0cyByZXR1cm5lZCBmcm9tIHRoZVxuICAgICAgICAgKiAgICAgICB3b3Jrc3BhY2VcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBmaWxlcyAtIGluZGljYXRlcyB0aGUgbGlzdCBvZiBmaWxlcyBhbmQgb2JqZWN0cyBzdG9yZWQgaW4gdGhlXG4gICAgICAgICAqICAgICAgIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXNcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBpbnRlcnJ1cHRlZCAtIGluZGljYXRlcyB0aGUgaW50ZXJydXB0ZWQgc3RhdHVzIG9mIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGVycm9yIC0gb24gZmFpbHVyZSwgaW5kaWNhdGVzIHRoZSByZWFzb24gZm9yIGZhaWx1cmVcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBlcnJvckNvZGUgLSBvbiBmYWlsdXJlLCBpbmRpY2F0ZXMgdGhlIGVycm9yIGNvZGUgZm9yIGZhaWx1cmVcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RXhlY3V0ZUNvZGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNvZGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBibG9jayBvZiBSIGNvZGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUmV2b0RlcGxveVItZW5jb2RlZCBzY3JpcHQgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNzdmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHByaW1pdGl2ZSBuYW1lL3ZhbHVlIGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZWF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZGZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxldmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdG5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IG9iamVjdCAoLnJEYXRhKSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdGF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdHZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItb2JqZWN0LXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0d29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggd29ya3NwYWNlIGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBkaXJlY3RvcnkgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdHBhY2thZ2VzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggcGFja2FnZSBkZXBlbmRlbmNpZXMgYXJlIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgdGFnIHRoYXQgbGFiZWxzIHRoZSBleGVjdXRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZWNob29mZjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUgUiBjb21tYW5kcyB3aWxsIG5vdCBhcHBlYXIgaW4gdGhlIGNvbnNvbGUgb3V0cHV0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNvbnNvbGVvZmY8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlIGNvbnNvbGUgb3V0cHV0IGlzIG5vdCByZXR1cm5lZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+Z3JhcGhpY3M8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgUiBncmFwaGljcyBkZXZpY2UgZm9yIGV4ZWN1dGlvbjogcG5nIG9yIHN2ZzwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmdyYXBoaWNzd2lkdGg8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgd2lkdGggZm9yIFIgZ3JhcGhpY3MgZGV2aWNlIGltYWdlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmdyYXBoaWNzaGVpZ2h0PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIGhlaWdodCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cm9iamVjdHM8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIG9iamVjdHMgZm9yIHJldHJpZXZhbCBmb2xsb3dpbmcgdGhlIGV4ZWN1dGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnN0b3JlZmlsZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+c3RvcmVvYmplY3Q8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3QgbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5zdG9yZXdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgZmlsZW5hbWUgKC5yRGF0YSkgd2hlcmUgd29ya3NwYWNlIGNvbnRlbnRzIHdpbGwgYmUgc2F2ZWQgaW4gdGhlIHJlcG9zaXRvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5zdG9yZW5ld3ZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBlbnN1cmVzIGVhY2ggZmlsZSBzdG9yZWQgaW5cbiAgICAgICAgICogICAgcmVwb3NpdG9yeSByZXN1bHRzIGluIG5ldyB2ZXJzaW9uIGJlaW5nIGNyZWF0ZWQgaWYgbmVlZGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+c3RvcmVwdWJsaWM8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBwdWJsaXNoZXMgZWFjaCBmaWxlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmluZmluaXR5PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgY3VzdG9tIHZhbHVlIGZvciBJbmZpbml0eSBhcHBlYXJpbmcgaW4gUiBvYmplY3RcbiAgICAgICAgICogICAgZGF0YSByZXR1cm5lZCBvbiBjYWxsLCBvdGhlcndpc2UgSW5maW5pdHkgaXMgcmVwcmVzZW50ZWQgYnkgPGNvZGU+MHg3ZmYwMDAwMDAwMDAwMDAwTDwvY29kZT5cbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+bmFuPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgY3VzdG9tIHZhbHVlIGZvciBOYU4gYXBwZWFyaW5nIGluIFIgb2JqZWN0IGRhdGFcbiAgICAgICAgICogICAgcmV0dXJuZWQgb24gY2FsbCwgb3RoZXJ3aXNlIE5hTiBpcyByZXByZXNlbnRlZCBieSA8Y29kZT5udWxsPC9jb2RlPjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmVuY29kZURhdGFGcmFtZVByaW1pdGl2ZUFzVmVjdG9yPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZGF0YS5mcmFtZSBwcmltaXRpdmVzIGFyZSBlbmNvZGVkIHZlY3RvcnMgaW4gUiBvYmplY3QgZGF0YSByZXR1cm5lZCBvbiBjYWxsPC9kZD5cbiAgICAgICAgICogIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEV4ZWN1dGVDb2RlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2V4ZWN1dGUvY29kZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGV4ZWN1dGVzIGV4ZWN1dGVzIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHRzIG9yIGV4dGVybmFsIHNjcmlwdHNcbiAgICAgICAgICogb24gdGhlIFIgc2Vzc2lvbiBpZGVudGlmaWVkIGJ5IHRoZSBwcm9qZWN0IHBhcmFtZXRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZXhlY3V0ZSBhIHNpbmdsZSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlXG4gICAgICAgICAqIHBhcmFtZXRlciB2YWx1ZXMgZm9yIGZpbGVuYW1lLCBhdXRob3IgYW5kIG9wdGlvbmFsbHkgdmVyc2lvbi4gVG8gZXhlY3V0ZVxuICAgICAgICAgKiBhIGNoYWluIG9mIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHRzIHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlIGFcbiAgICAgICAgICogY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmFsdWVzIG9uIHRoZSBmaWxlbmFtZSAsIGF1dGhvciBhbmQgb3B0aW9uYWxseVxuICAgICAgICAgKiB2ZXJzaW9uIHBhcmFtZXRlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGV4ZWN1dGUgYSBzaW5nbGUgZXh0ZXJuYWwgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlIGEgdmFsaWQgVVJMIG9yXG4gICAgICAgICAqIGZpbGUgcGF0aCB1c2luZyB0aGUgZXh0ZXJuYWxzb3VyY2UgcGFyYW1ldGVyLiBUbyBleGVjdXRlIGEgY2hhaW4gb2ZcbiAgICAgICAgICogZXh0ZXJuYWwgc2NyaXB0cyB0aGUgY2FsbGVyIG11c3QgcHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZhbHVlc1xuICAgICAgICAgKiBvbiB0aGUgZXh0ZXJuYWxzb3VyY2UgcGFyYW1ldGVyLiBOb3RlLCB0byBleGVjdXRlIGFuIGV4dGVybmFsIHNjcmlwdCB0aGVcbiAgICAgICAgICogY2FsbGVyIG11c3QgaGF2ZSBQT1dFUl9VU0VSIHByaXZpbGVnZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IEEgY2hhaW5lZCBleGVjdXRpb24gZXhlY3V0ZXMgZWFjaCBvZiB0aGUgc2NyaXB0cyBpZGVudGlmaWVkIG9uIHRoZVxuICAgICAgICAgKiBjYWxsIGluIGEgc2VxdWVudGlhbCBmYXNoaW9uIG9uIHRoZSBSIHNlc3Npb24sIHdpdGggZXhlY3V0aW9uIG9jY3VyaW5nIGluXG4gICAgICAgICAqIHRoZSBvcmRlciBzcGVjaWZpZWQgb24gdGhlIHBhcmFtZXRlciBsaXN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBQbGVhc2Ugbm90IHRoZSBmb2xsb3dpbmcgcHJlIGFuZCBwb3N0IGV4ZWN1dGlvbiBwYXJhbWV0ZXJzOlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPlByZS1leGVjdXRpb24gcGFyYW1ldGVyczo8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBpbnB1dHMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHBhc3MgUmV2b0RlcGxveVItZW5jb2RlZFxuICAgICAgICAgKiAgICAgICBSIG9iamVjdCB2YWx1ZXMgYXMgaW5wdXRzLiBUaGVzZSBpbnB1dHMgYXJlIHR1cm5lZCBpbnRvIFIgb2JqZWN0c1xuICAgICAgICAgKiAgICAgICBpbiB0aGUgd29ya3NwYWNlIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcHJlbG9hZGZpbGUgcGFyYW1ldGVycyBhbGxvd3MgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlXG4gICAgICAgICAqICAgICAgIGZpbGVzIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya2luZyBkaXJlY3RvcnkgYmVmb3JlIHRoZVxuICAgICAgICAgKiAgICAgICBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBwcmVsb2Fkb2JqZWN0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlXG4gICAgICAgICAqICAgICAgIGJpbmFyeSBSIG9iamVjdHMgKC5yRGF0YSkgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3Jrc3BhY2VcbiAgICAgICAgICogICAgICAgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBhZG9wdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBhIHByZS1leGlzdGluZ1xuICAgICAgICAgKiAgICAgICBwcm9qZWN0IHdvcmtzcGFjZSwgcHJvamVjdCB3b3JraW5nIGRpcmVjdG9yeSBhbmQvb3IgcHJvamVjdCBwYWNrYWdlXG4gICAgICAgICAqICAgICAgIGRlcGVuZGVuY2llcyBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+UG9zdC1leGVjdXRpb24gcGFyYW1ldGVyczo8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSByb2JqZWN0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIG9iamVjdCBuYW1lcyB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgYXMgUmV2b0RlcGxveVItZW5jb2RlZCBSXG4gICAgICAgICAqICAgICAgIG9iamVjdHMgb24gdGhlIHJlc3BvbnNlIG1hcmt1cCBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVmaWxlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZXMgdG8gYmUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyXG4gICAgICAgICAqICAgICAgIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW9iamVjdCBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3RzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmV3b3Jrc3BhY2UgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHN0b3JlIHRoZSBlbnRpcmVcbiAgICAgICAgICogICAgICAgd29ya3NwYWNlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZWRpcmVjdG9yeSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIHRhcmdldFxuICAgICAgICAgKiAgICAgICByZXBvc2l0b3J5IGRpcmVjdG9yeSBmb3Igc3RvcmVkIGZpbGVzIGFuZCBvYmplY3RzIGFmdGVyIHRoZSBleGVjdXRpb25cbiAgICAgICAgICogICAgICAgY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW5ld3ZlcnNpb24gcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGNyZWF0ZSBuZXdcbiAgICAgICAgICogICAgICAgdmVyc2lvbnMgb2YgZWFjaCBzdG9yZWQgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy4gQnkgZGVmYXVsdCwgc3RvcmVkIGZpbGVzIG92ZXJ3cml0ZSBhbnkgcHJlLWV4aXN0aW5nIGZpbGVcbiAgICAgICAgICogICAgICAgYnkgdGhlIHNhbWUgbmFtZS5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVwdWJsaWMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGFzc2lnbiBwdWJsaWMgYWNjZXNzXG4gICAgICAgICAqICAgICAgIHRvIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+XG4gICAgICAgICAqICAgIFNvbWUgb2YgdGhlIGtleSBkYXRhIGluZGljYXRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwIG9uIHRoaXMgY2FsbFxuICAgICAgICAgKiAgICBpbmNsdWRlOlxuICAgICAgICAgKiA8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGNvbnNvbGUgLSBpbmRpY2F0ZXMgdGhlIGNvbnNvbGUgb3V0cHV0IHJlc3VsdGluZyBmcm9tIHRoZSBzY3JpcHRcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgcmVzdWx0cyAtIGluZGljYXRlcyB0aGUgbGlzdCBvZiBmaWxlcyBnZW5lcmF0ZWQgYnkgdGhlIFIgZ3JhcGhpY3NcbiAgICAgICAgICogICAgICAgZGV2aWNlXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgYXJ0aWZhY3RzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGdlbmVyYXRlZCBvciBtb2RpZmllZCBpbiB0aGVcbiAgICAgICAgICogICAgICAgd29ya2luZyBkaXJlY3RvcnlcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBvYmplY3RzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIFIgb2JqZWN0cyByZXR1cm5lZCBmcm9tIHRoZSB3b3Jrc3BhY2VcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBmaWxlcyAtIGluZGljYXRlcyB0aGUgbGlzdCBvZiBmaWxlcyBhbmQgb2JqZWN0cyBzdG9yZWQgaW4gdGhlXG4gICAgICAgICAqICAgICAgIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXNcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPmludGVycnVwdGVkIC0gaW5kaWNhdGVzIHRoZSBpbnRlcnJ1cHRlZCBzdGF0dXMgb2YgZXhlY3V0aW9uPC9saT5cbiAgICAgICAgICogICAgPGxpPmVycm9yIC0gb24gZmFpbHVyZSwgaW5kaWNhdGVzIHRoZSByZWFzb24gZm9yIGZhaWx1cmU8L2xpPlxuICAgICAgICAgKiAgICA8bGk+ZXJyb3JDb2RlIC0gb24gZmFpbHVyZSwgaW5kaWNhdGVzIHRoZSBlcnJvciBjb2RlIGZvciBmYWlsdXJlPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RXhlY3V0ZVNjcmlwdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqICA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdCBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnktbWFuYWdlZCBkaXJlY3RvcmllcyBmb3JcbiAgICAgICAgICogICAgICAgc2NyaXB0cywgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1maWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD52ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLWZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmV4dGVybmFsc291cmNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgVVJMcyBvciBmaWxlIHBhdGhzIHRvIGV4dGVybmFsIHNjcmlwdHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUmV2b0RlcGxveVItZW5jb2RlZCBzY3JpcHQgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNzdmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHByaW1pdGl2ZSBuYW1lL3ZhbHVlIGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZWF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZGZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxldmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdG5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IG9iamVjdCAoLnJEYXRhKSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdGF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdHZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItb2JqZWN0LXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0d29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggd29ya3NwYWNlIGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBkaXJlY3RvcnkgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkZD5hZG9wdHBhY2thZ2VzPC9kZD5cbiAgICAgICAgICogICAgPGR0PihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggcGFja2FnZSBkZXBlbmRlbmNpZXMgYXJlIHRvIGJlIGFkb3B0ZWQ8L2R0PlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgdGFnIHRoYXQgbGFiZWxzIHRoZSBleGVjdXRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZWNob29mZjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUgUiBjb21tYW5kcyB3aWxsIG5vdCBhcHBlYXIgaW4gdGhlIGNvbnNvbGUgb3V0cHV0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmdyYXBoaWNzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCBSIGdyYXBoaWNzIGRldmljZSBmb3IgZXhlY3V0aW9uOiBwbmcgb3Igc3ZnPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmdyYXBoaWNzd2lkdGg8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIHdpZHRoIGZvciBSIGdyYXBoaWNzIGRldmljZSBpbWFnZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3NoZWlnaHQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIGhlaWdodCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJvYmplY3RzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygb2JqZWN0cyBmb3IgcmV0cmlldmFsIGZvbGxvd2luZyB0aGUgZXhlY3V0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlZmlsZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZW9iamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3QgbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmV3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBmaWxlbmFtZSAoLnJEYXRhKSB3aGVyZSB3b3Jrc3BhY2UgY29udGVudHMgd2lsbCBiZSBzYXZlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZW5ld3ZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZW5zdXJlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHJlcG9zaXRvcnkgcmVzdWx0cyBpbiBuZXcgdmVyc2lvbiBiZWluZyBjcmVhdGVkIGlmIG5lZWRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZXB1YmxpYzwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBwdWJsaXNoZXMgZWFjaCBmaWxlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbmZpbml0eTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBjdXN0b20gdmFsdWUgZm9yIEluZmluaXR5IGFwcGVhcmluZyBpbiBSIG9iamVjdCBkYXRhIHJldHVybmVkIG9uIGNhbGwsIG90aGVyd2lzZSBJbmZpbml0eSBpcyByZXByZXNlbnRlZCBieSA8Y29kZT4weDdmZjAwMDAwMDAwMDAwMDBMPC9jb2RlPjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uYW48L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgY3VzdG9tIHZhbHVlIGZvciBOYU4gYXBwZWFyaW5nIGluIFIgb2JqZWN0IGRhdGEgcmV0dXJuZWQgb24gY2FsbCwgb3RoZXJ3aXNlIE5hTiBpcyByZXByZXNlbnRlZCBieSA8Y29kZT5udWxsPC9jb2RlPjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5lbmNvZGVEYXRhRnJhbWVQcmltaXRpdmVBc1ZlY3RvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBkYXRhLmZyYW1lIHByaW1pdGl2ZXMgYXJlIGVuY29kZWQgdmVjdG9ycyBpbiBSIG9iamVjdCBkYXRhIHJldHVybmVkIG9uIGNhbGw8L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhlY3V0ZVNjcmlwdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9zY3JpcHQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGludGVycnVwdHMgdGhlIGN1cnJlbnQgZXhlY3V0aW9uIG9uIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeGVjdXRlSW50ZXJydXB0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogIDxkbD5cbiAgICAgICAgICogICAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICogIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEV4ZWN1dGVJbnRlcnJ1cHQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2V4ZWN1dGUvaW50ZXJydXB0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCByZXRyaWV2ZXMgdGhlIFIgY29uc29sZSBvdXRwdXQgZm9yIHRoZSBsYXRlc3QgZXhlY3V0aW9uIG9uXG4gICAgICAgICAqIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeGVjdXRlQ29uc29sZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqICA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhlY3V0ZUNvbnNvbGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2V4ZWN1dGUvY29uc29sZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgcmV0cmlldmVzIHRoZSBleGVjdXRpb24gaGlzdG9yeSBmb3IgdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBTb21lIG9mIHRoZSBrZXkgZGF0YSBpbmRpY2F0ZWQgZm9yIGVhY2ggaGlzdG9yeSBpdGVtIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogb24gdGhpcyBjYWxsIGluY2x1ZGU6XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogIDxsaT5jb2RlIC0gaW5kaWNhdGVzIHRoZSBjb2RlIHRoYXQgaGFzIGJlZW4gZXhlY3V0ZWQ8L2xpPlxuICAgICAgICAgKiAgPGxpPmNvbnNvbGUgLSBpbmRpY2F0ZXMgdGhlIGNvbnNvbGUgb3V0cHV0IHJlc3VsdGluZyBmcm9tIHRoZSBjb2RlIGV4ZWN1dGlvbjwvbGk+XG4gICAgICAgICAqICA8bGk+cmVzdWx0c0dlbmVyYXRlZCAtIGluZGljYXRlcyB0aGUgbnVtYmVyIG9mIGdlbmVyYXRlZCByZXN1bHRzIG9uIHRoZSBleGVjdXRpb248L2xpPlxuICAgICAgICAgKiAgPGxpPnJlc3VsdHNBdmFpbGFibGUgLSBpbmRpY2F0ZXMgdGhlIG51bWJlciBvZiBnZW5lcmF0ZWQgcmVzdWx0cyBzdGlsbCBzdG9yZWQgb24gdGhlIGV4ZWN1dGlvbjwvbGk+XG4gICAgICAgICAqICA8bGk+cmVzb3VyY2VVc2FnZSAtIGluZGljYXRlcyB0aGUgY3VycmVudCBzdG9yYWdlIGJ5dGUgY291bnQgZm9yIHJlc3VsdHMgb24gdGhlIGV4ZWN1dGlvbjwvbGk+XG4gICAgICAgICAqICA8bGk+ZXhlY3V0aW9uIC0gaW5kaWNhdGVzIHRoZSBleGVjdXRpb24gaWRlbnRpZmllciwgd2hpY2ggY2FuIHRoZW4gYmUgdXNlZCBvbiAvci9wcm9qZWN0L2V4ZWN1dGlvbi9yZXN1bHQgY2FsbHMgdG8gcmV0cmlldmUgb3IgbWFuYWdlIHJlc3VsdHM8L2xpPlxuICAgICAgICAgKiAgPGxpPmludGVycnVwdGVkIC0gaW5kaWNhdGVzIHRoZSBpbnRlcnJ1cHRlZCBzdGF0dXMgb2YgZXhlY3V0aW9uPC9saT5cbiAgICAgICAgICogIDxsaT5lcnJvciAtIG9uIGZhaWx1cmUsIGluZGljYXRlcyB0aGUgcmVhc29uIGZvciBmYWlsdXJlPC9saT5cbiAgICAgICAgICogIDxsaT5lcnJvckNvZGUgLSBvbiBmYWlsdXJlLCBpbmRpY2F0ZXMgdGhlIGVycm9yIGNvZGUgZm9yIGZhaWx1cmU8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeGVjdXRlSGlzdG9yeVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsdGVyZGVwdGg8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBtYXggbnVtYmVyIG9mIGV4ZWN1dGlvbnMgdG8gYmUgcmV0dXJuZWQgaW4gdGhlIGhpc3Rvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZXhlY3V0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBleGVjdXRpb24gaWRlbnRpZmllcnMgb24gd2hpY2ggdG8gZmlsdGVyIGhpc3Rvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsdGVydGFnPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBleGVjdXRpb24gdGFnIG9uIHdoaWNoIHRvIGZpbHRlciBoaXN0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJldmVyc2VkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBleGVjdXRpb24gaGlzdG9yeSBpcyByZXR1cm5lZCBpbiBhXG4gICAgICAgICAqICAgICAgIHJldmVyc2UtY2hyb25vbG9naWNhbCBvcmRlclxuICAgICAgICAgKiAgICA8L2R0PlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RFeGVjdXRlSGlzdG9yeTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9oaXN0b3J5JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBmbHVzaGVzIGV4ZWN1dGlvbnMgaW4gdGhlIGhpc3Rvcnkgb24gdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKiBGbHVzaGluZyBhbiBleGVjdXRpb24gZGVsZXRlcyBib3RoIHRoZSBSIGNvbnNvbGUgb3V0cHV0IGFuZCB0aGUgZ2VuZXJhdGVkXG4gICAgICAgICAqIHJlc3VsdHMgYXNzb2NpYXRlZCB3aXRoIHRoYXQgZXhlY3V0aW9uIGJ1dCBkb2VzIG5vdCByZW1vdmUgdGhlIGV4ZWN1dGlvblxuICAgICAgICAgKiBpdHNlbGYgZnJvbSB0aGUgaGlzdG9yeS4gQnkgb21pdHRpbmcgdGhlIGV4ZWN1dGlvbiBwYXJhbWV0ZXIsIHRoZSBjYWxsZXJcbiAgICAgICAgICogY2FuIGZsdXNoIGV2ZXJ5IGV4ZWN1dGlvbiBpbiB0aGUgaGlzdG9yeSBvbiB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgZmx1c2hpbmcgZmFjaWxpdHkgaXMgcHJvdmlkZWQgdG8gaGVscCB1c2VycyBtYW5hZ2UgdGhlIGxldmVscyBvZlxuICAgICAgICAgKiByZXNvdXJjZSB1c2FnZSBhc3NvY2lhdGVkIHdpdGggdGhlaXIgcGVyc2lzdGVudCBwcm9qZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RXhlY3V0ZUZsdXNoXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZXhlY3V0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZXhlY3V0aW9uIGlkZW50aWZpZXJzPC9kZD5cbiAgICAgICAgICogIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEV4ZWN1dGVGbHVzaDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9mbHVzaCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgbGlzdHMgdGhlIGV4ZWN1dGlvbiByZXN1bHRzIGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IHNwZWNpZnlpbmcgYSB2YWx1ZSBmb3IgdGhlIGV4ZWN1dGlvbiBwYXJhbWV0ZXIgdGhlIGNhbGxlciBjYW4gbGltaXQgdGhlXG4gICAgICAgICAqIHJlc3BvbnNlIHRvIHRob3NlIHJlc3VsdHMgZm91bmQgb24gYSBzcGVjaWZpYyBleGVjdXRpb24gb3Igc2V0IG9mXG4gICAgICAgICAqIGV4ZWN1dGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIDxibG9ja3F1b3RlPlxuICAgICAgICAgKiAgICBJbXBvcnRhbnQhIFRoZSBVUkxzIGluZGljYXRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwIG9uIHRoaXMgY2FsbCByZW1haW5cbiAgICAgICAgICogICAgdmFsaWQgZm9yIGFzIGxvbmcgYXMgdGhlIHJlc3VsdHMgcmVtYWluIHBhcnQgb2YgdGhlIHByb2plY3QuXG4gICAgICAgICAqIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RXhlY3V0ZVJlc3VsdExpc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmV4ZWN1dGlvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBleGVjdXRpb24gaWRlbnRpZmllcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhlY3V0ZVJlc3VsdExpc3Q6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2V4ZWN1dGUvcmVzdWx0L2xpc3QnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGRvd25sb2FkcyB0aGUgZXhlY3V0aW9uIHJlc3VsdHMgZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgc3BlY2lmeWluZyBhIHZhbHVlIGZvciB0aGUgZXhlY3V0aW9uIHBhcmFtZXRlciB0aGUgY2FsbGVyIGNhbiBkb3dubG9hZFxuICAgICAgICAgKiBvbmx5IHJlc3VsdHMgb24gdGhlIHNwZWNpZmllZCBleGVjdXRpb25zLiBCeSBzcGVjaWZ5aW5nIGEgdmFsdWUgZm9yIHRoZVxuICAgICAgICAgKiBmaWxlbmFtZSBwYXJhbWV0ZXIgdGhlIGNhbGxlciBjYW4gZG93bmxvYWQgYSBzcGVjaWZpYyByZXN1bHQgb24gdGhlXG4gICAgICAgICAqIHNwZWNpZmllZCBleGVjdXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdEV4ZWN1dGVSZXN1bHREb3dubG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZXhlY3V0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGV4ZWN1dGlvbiBpZGVudGlmaWVyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSByZXN1bHQgZmlsZSBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlubGluZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgQ29udGVudC1EaXNwb3NpdGlvbiByZXNwb25zZSBoZWFkZXJcbiAgICAgICAgICogICAgICAgaW5kaWNhdGluZyBhdHRhY2htZW50IGlzIG9taXR0ZWRcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEV4ZWN1dGVSZXN1bHREb3dubG9hZDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvZG93bmxvYWQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGRlbGV0ZXMgdGhlIGV4ZWN1dGlvbiByZXN1bHRzIGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IHNwZWNpZnlpbmcgYSB2YWx1ZSBmb3IgdGhlIGV4ZWN1dGlvbiBwYXJhbWV0ZXIgdGhlIGNhbGxlciBjYW4gZGVsZXRlXG4gICAgICAgICAqIG9ubHkgdGhvc2UgcmVzdWx0cyBvbiB0aGUgc3BlY2lmaWVkIGV4ZWN1dGlvbnMuIEJ5IHNwZWNpZnlpbmcgYSB2YWx1ZSBmb3JcbiAgICAgICAgICogdGhlIGZpbGVuYW1lIHBhcmFtZXRlciB0aGUgY2FsbGVyIGNhbiBkZWxldGUgYSBzcGVjaWZpYyByZXN1bHQgb24gdGhlXG4gICAgICAgICAqIHNwZWNpZmllZCBleGVjdXRpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeGVjdXRlUmVzdWx0RGVsZXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIDxkdD5leGVjdXRpb248L2R0PlxuICAgICAgICAgKiAgIDxkZD5cbiAgICAgICAgICogICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGV4ZWN1dGlvbiBpZGVudGlmaWVyc1xuICAgICAgICAgKiAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSByZXN1bHQgZmlsZSBuYW1lPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhlY3V0ZVJlc3VsdERlbGV0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvZGVsZXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBQcm9qZWN0IERpcmVjdG9yeSBBUElzXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGxpc3RzIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVzIGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBmaWx0ZXIgcGFyYW1ldGVyIGNhbiBiZSBzcGVjaWZpZWQgb24gdGhlIGNhbGwgdG8gZmlsdGVyLCB0aGUgdHlwZXMgb2ZcbiAgICAgICAgICogZmlsZXMgcmV0dXJuZWQgYWNjb3JkaW5nIHRvIHRoZWlyIGNhdGVnb3J5LiBUaGUgZm9sbG93aW5nIGZpbHRlciB2YWx1ZXMgYXJlXG4gICAgICAgICAqIHN1cHBvcnRlZDpcbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgICA8bGk+cGxvdCAtIGZpbGVzIGVuZGluZyB3aXRoIGEgLnBuZywgLnN2ZyBvciAuanBnIGV4dGVuc2lvbjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5zY3JpcHQgLSBmaWxlcyBlbmRpbmcgd2l0aCBhIC5SIG9yIC5yIGV4dGVuc2lvbjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5SIC0gZmlsZXMgZW5kaW5nIHdpdGggYSAuckRhdGEgb3IgLnJkYXRhIGV4dGVuc2lvbjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5kYXRhIC0gZmlsZXMgZW5kaW5nIHdpdGggYSAuY3N2IG9yIC54bHMgZXh0ZW5zaW9uPC9saT5cbiAgICAgICAgICogICAgPGxpPnRleHQgLSBmaWxlcyBlbmRpbmcgd2l0aCBhIC50eHQgZXh0ZW5zaW9uPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RGlyZWN0b3J5TGlzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsdGVyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBmaWx0ZXIgYnkgY2F0ZWdvcnkgdmFsdWU8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3REaXJlY3RvcnlMaXN0OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9kaXJlY3RvcnkvbGlzdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdXBsb2FkcyBhIGZpbGUgaW50byB0aGUgd29ya2luZyBkaXJlY3RvcnkgZm9yIHRoZSBzcGVjaWZpZWRcbiAgICAgICAgICogcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RGlyZWN0b3J5VXBsb2FkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4uLi5maWxlIGNvbnRlbnQuLi48L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGRlc2NyaXB0aW9uIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm92ZXJ3cml0ZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIG92ZXJ3cml0ZXMgdGhlIGV4aXN0aW5nIGZpbGUgb2Ygc2FtZSBuYW1lPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RGlyZWN0b3J5VXBsb2FkOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25maWcuZm9ybWF0ID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICB2YXIgaW9Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogY29uZmlnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgICAgICBpZDogY29uZmlnLmZvcm1JZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IGNhbGxiYWNrXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZGlyZWN0b3J5L3VwbG9hZCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdHJhbnNmZXJzIGEgZmlsZSBmcm9tIGEgVVJMIGludG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGZvciB0aGVcbiAgICAgICAgICogc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdERpcmVjdG9yeVRyYW5zZmVyXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dXJsPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgVVJMIGZvciB0aGUgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgZGVzY3JpcHRpb24gdG8gYmUgYXNzb2NpYXRlZCB3aXRoIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+b3ZlcndyaXRlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgb3ZlcndyaXRlcyB0aGUgZXhpc3RpbmcgZmlsZSBvZiBzYW1lIG5hbWU8L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RGlyZWN0b3J5VHJhbnNmZXI6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RpcmVjdG9yeS90cmFuc2ZlcicsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgd3JpdGVzIGEgdGV4dCBmaWxlIGludG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGZvciB0aGUgc3BlY2lmaWVkXG4gICAgICAgICAqIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdERpcmVjdG9yeVdyaXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGV4dDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHRleHQgY29udGVudCBmb3IgdGhlIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVsaW1pdGVyPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBhIGN1c3RvbSBkZWxpbWl0ZXIgZm9yIHRleHQgd2hlbiB3cml0aW5nXG4gICAgICAgICAqICAgICAgIG11bHRpcGxlIGZpbGVzLCBkZWZhdWx0cyB0byAjLCNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBkZXNjcmlwdGlvbiB0byBiZSBhc3NvY2lhdGVkIHdpdGggZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5vdmVyd3JpdGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCBvdmVyd3JpdGVzIHRoZSBleGlzdGluZyBmaWxlIG9mIHNhbWUgbmFtZTwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdERpcmVjdG9yeVdyaXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9kaXJlY3Rvcnkvd3JpdGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogXG4gICAgICAgICAqIFRoaXMgY2FsbCB1cGRhdGVzIGEgZmlsZSBuYW1lIGFuZC9vciBkZXNjcmlwdGlvbiBpbiB0aGUgd29ya2luZyBkaXJlY3RvcnlcbiAgICAgICAgICogZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RGlyZWN0b3J5VXBkYXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBuZXcgbmFtZSBmb3IgdGhlIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpY2VzIHRoZSBuZXcgZGVzY3JpcHRpb24gZm9yIHRoZSBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm92ZXJ3cml0ZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIG92ZXJ3cml0ZXMgdGhlIGV4aXN0aW5nIGZpbGUgb2Ygc2FtZSBuYW1lPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RGlyZWN0b3J5VXBkYXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9kaXJlY3RvcnkvdXBkYXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBzdG9yZXMgYSBmaWxlIGZyb20gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IHRvIHRoZSByZXBvc2l0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3REaXJlY3RvcnlTdG9yZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGZpbGUgZm9yIHN0b3Jpbmc8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBkZXNjcmlwdGlvbiB0byBhY2NvbXBhbnkgdGhlIHNhdmVkIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGFnIHdvcmRzIHRvIGFzc29jaWF0ZSB3aXRoIHJlcG9zaXRvcnkgZmlsZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygcm9sZSBuYW1lcywgd2hpY2ggbWFrZXMgdGhlIGZpbGVcbiAgICAgICAgICogICAgICAgIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2VycyB3aXRoIHRoZXNlIHJvbGVzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGZpbGUgd2lsbCBiZSBzaGFyZWQgLCB3aGljaCBtYWtlcyB0aGUgZmlsZVxuICAgICAgICAgKiAgICAgICB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHB1Ymxpc2hlZCAsIHdoaWNoIG1ha2VzIHRoZVxuICAgICAgICAgKiAgICAgICBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCBhbmQgYW5vbnltb3VzIHVzZXJzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXd2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBuZXcgZmlsZSB3aWxsIGJlIHJlbmFtZWQgdG8gYXZvaWQgb3ZlcndyaXRpbmdcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RGlyZWN0b3J5U3RvcmU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RpcmVjdG9yeS9zdG9yZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgbG9hZHMgYSBmaWxlIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya2luZyBkaXJlY3RvcnkgZm9yXG4gICAgICAgICAqIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RGlyZWN0b3J5TG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBhdXRob3IgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD52ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgdmVyc2lvbjwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdERpcmVjdG9yeUxvYWQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RpcmVjdG9yeS9sb2FkJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBkb3dubG9hZHMgdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGNvbnRlbnRzIGZvciB0aGUgc3BlY2lmaWVkXG4gICAgICAgICAqIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IHNwZWNpZnlpbmcgYSBzaW5nbGUgdmFsdWUgZm9yIHRoZSBmaWxlbmFtZSBwYXJhbWV0ZXIsIHRoZSBjYWxsZXIgY2FuXG4gICAgICAgICAqIGRvd25sb2FkIGEgc3BlY2lmaWMgZmlsZS4gQnkgc3BlY2lmeWluZyBtdWx0aXBsZSB2YWx1ZXMgZm9yIHRoZSBmaWxlbmFtZVxuICAgICAgICAgKiBwYXJhbWV0ZXIsIHRoZSBjYWxsZXIgY2FuIGRvd25sb2FkIGEgemlwIGFyY2hpdmUgb2YgdGhvc2UgZmlsZXMuIEJ5XG4gICAgICAgICAqIG9taXR0aW5nIHRoZSBmaWxlbmFtZSBwYXJhbWV0ZXIsIHRoZW4gdGhlIGNhbGxlciBjYW4gZG93bmxvYWQgYSB6aXAgYXJjaGl2ZVxuICAgICAgICAgKiB3aXRoIGFsbCBvZiB0aGUgZmlsZXMgaW4gdGhlIHdvcmtpbmcgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3REaXJlY3RvcnlEb3dubG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgY29tbWEtc2VwYXJhdGVkIGZpbGUgbmFtZXMgZm9yIGRvd25sb2FkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlubGluZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgQ29udGVudC1EaXNwb3NpdGlvbiByZXNwb25zZSBoZWFkZXJcbiAgICAgICAgICogICAgICAgaW5kaWNhdGluZyBhdHRhY2htZW50IGlzIG9taXR0ZWRcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RGlyZWN0b3J5RG93bmxvYWQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RpcmVjdG9yeS9kb3dubG9hZCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZGVsZXRlcyBmaWxlcyBmcm9tIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBmb3IgdGhlIHNwZWNpZmllZFxuICAgICAgICAgKiBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3REaXJlY3RvcnlEZWxldGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGZpbGUgbmFtZXMgZm9yIGRlbGV0aW9uPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RGlyZWN0b3J5RGVsZXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9kaXJlY3RvcnkvZGVsZXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBQcm9qZWN0IFBhY2thZ2UgQVBJc1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBsaXN0cyBSIHBhY2thZ2UgZGVwZW5kZW5jaWVzIGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFBhY2thZ2VMaXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnN0YWxsZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIGlmIHRydWUsIHJlc3BvbnNlIGxpc3RzIGFsbCBwYWNrYWdlcyBpbnN0YWxsZWQgaW4gcHJvamVjdCBlbnZpcm9ubWVudFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RQYWNrYWdlTGlzdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvcGFja2FnZS9saXN0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBhdHRhY2hlcyBSIHBhY2thZ2UgZGVwZW5kZW5jaWVzIGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFBhY2thZ2VBdHRhY2hcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgUiBwYWNrYWdlIG5hbWVzIHRvIGF0dGFjaDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXBvPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIFIgcmVwb3NpdG9yeSBsb2NhdGlvbiBmb3IgbmFtZWQgcGFja2FnZXM8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RQYWNrYWdlQXR0YWNoOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9wYWNrYWdlL2F0dGFjaCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZGV0YWNoZXMgUiBwYWNrYWdlIGRlcGVuZGVuY2llcyBmb3IgdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RQYWNrYWdlRGV0YWNoXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIFIgcGFja2FnZSBuYW1lcyB0byBkZXRhY2g8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RQYWNrYWdlRGV0YWNoOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9wYWNrYWdlL2RldGFjaCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gVXNlciBBUElzXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHNpZ25zIHRoZSB1c2VyIGluIGJ5IGF1dGhlbnRpY2F0aW5nIHRoZSBjcmVkZW50aWFscyB3aXRoIHRoZVxuICAgICAgICAgKiBSZXZvRGVwbG95UiBzZXJ2ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgdXNlckxvZ2luXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+dXNlcm5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSB1c2VybmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wYXNzd29yZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHBhc3N3b3JkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpc2FibGVhdXRvc2F2ZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSB3aGVuIHRydWUsIGRpc2FibGVzIGF1dG9zYXZlIHNlbWFudGljcyBmb3IgcGVyc2lzdGVudFxuICAgICAgICAgKiAgICAgICBwcm9qZWN0c1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJMb2dpbjogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3VzZXIvbG9naW4nLCBjb25maWcsIGNhbGxiYWNrKTsgICAgICAgICAgICBcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHNpZ25zIG91dCB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCB1c2VyTG9nb3V0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+dXNlcmNvb2tpZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSB3aGVuIHNwZWNpZmllZCwgdmFsdWUgc2V0cyBhcHBsaWNhdGlvbi1zcGVjaWZpYyBwZXJzaXN0ZW50XG4gICAgICAgICAqICAgICAgIHVzZXIgY29va2llLCB3aGljaCBpcyByZXRyaWV2YWJsZSBvbiByZXNwb25zZSB0b1xuICAgICAgICAgKiAgICAgICA8YSBocmVmPVwiI21ldGhvZF91c2VyTG9naW5cIj51c2VyTG9naW48L2E+IGNhbGwuXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdXNlckxvZ291dDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3VzZXIvbG9nb3V0JywgY29uZmlnLCBjYWxsYmFjayk7ICAgICAgICAgICAgXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCByZXRyaWV2ZXMgZGV0YWlscyBhYm91dCB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlci4gVGhlXG4gICAgICAgICAqIGRldGFpbHMgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cCBvbiB0aGlzIGNhbGwgYXJlIGV4YWN0bHkgdGhlIHNhbWVcbiAgICAgICAgICogZGV0YWlscyBhcyB0aG9zZSByZXR1cm5lZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwIG9uIHRoZVxuICAgICAgICAgKiA8YSBocmVmPVwiI21ldGhvZF91c2VyTG9naW5cIj51c2VyTG9naW48L2E+IGNhbGwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgdXNlckFib3V0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyQWJvdXQ6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvdXNlci9hYm91dCcsIHt9LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBlbmFibGVzIG9yIGRpc2FibGVzIHRoZSBhdXRvc2F2ZSBzZW1hbnRpY3Mgb24gcGVyc2lzdGVudCBwcm9qZWN0c1xuICAgICAgICAgKiBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBjdXJyZW50IHVzZXJzIEhUVFAgc2Vzc2lvbi4gQnkgZGVmYXVsdCwgYWxsIGxpdmVcbiAgICAgICAgICogcGVyc2lzdGVudCBwcm9qZWN0cyBhcmUgYXV0b3NhdmVkIHVuZGVyIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgICAgICAgICpcbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFdoZW4gYSB1c2VyIGNsb3NlcyBhIHByb2plY3QgdXNpbmcgdGhlXG4gICAgICAgICAqICAgICAgIDxhIGhyZWY9XCIjbWV0aG9kX3Byb2plY3RDbG9zZVwiPnByb2plY3RDbG9zZTwvYT4gY2FsbC5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBXaGVuIGEgdXNlciBzaWducy1vdXQgdXNpbmcgdGhlXG4gICAgICAgICAqICAgICAgIDxhIGhyZWY9XCIjbWV0aG9kX3VzZXJMb2dvdXRcIj51c2VyTG9nb3V0PC9hPiBjYWxsLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFdoZW4gYSB1c2VyIGlzIGF1dG9tYXRpY2FsbHkgc2lnbmVkLW91dCBieSB0aGUgc3lzdGVtIGFmdGVyIGFcbiAgICAgICAgICogICAgICAgcHJvbG9uZ2VkIHBlcmlvZCBvZiBpbmFjdGl2aXR5LlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L3VsPlxuICAgICAgICAgKlxuICAgICAgICAgKiBXaGVuIHRoZSBhdXRvc2F2ZSBmZWF0dXJlIGlzIGRpc2FibGVkIGEgdXNlciBtdXN0IG1ha2UgYW4gZXhwbGljaXQgY2FsbCBvblxuICAgICAgICAgKiA8YSBocmVmPVwiI21ldGhvZF9wcm9qZWN0U2F2ZVwiPnByb2plY3RTYXZlPC9hPiBpbiBvcmRlciB0byBzYXZlIGEgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCB1c2VyQXV0b3NhdmVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5lbmFibGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSB0b2dnbGVzIGF1dG9zYXZlIHNlbWFudGljcyBmb3IgcGVyc2lzdGVudCBwcm9qZWN0cy48L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJBdXRvc2F2ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3VzZXIvYXV0b3NhdmUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIFJlcG9zaXRvcnkgU2NyaXB0IEFQSXNcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgbGlzdHMgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgY2FsbCBpcyBhdmFpbGFibGUgdG8gYXV0aGVudGljYXRlZCBhbmQgYW5vbnltb3VzIHVzZXJzLiBIb3dldmVyLCBpZlxuICAgICAgICAgKiB0aGUgY2FsbGVyIGlzIGFuIGFub255bW91cyB1c2VyIHRoZW4gb25seSBwdWJsaXNoZWQgc2NyaXB0cyB3aWxsIGJlXG4gICAgICAgICAqIHJldHVybmVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeVNjcmlwdExpc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSB3aGVuIHNwZWNpZmllZCwgY2FsbCByZXR1cm5zIGxpc3Qgb2Ygc2NyaXB0IHZlcnNpb25zIGZvclxuICAgICAgICAgKiAgICAgICBmaWxlbmFtZVxuICAgICAgICAgKiAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGZpbGVzIHRoYXQgYXJlIHJlc3RyaWN0ZWQgYnV0XG4gICAgICAgICAqICAgICAgIHZpc2libGUgb3Igc2hhcmVkIGJ5IG90aGVyIHVzZXJzIGFyZSBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wdWJsaXNoZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHNjcmlwdHMgcHVibGlzaGVkIGJ5IG90aGVyIHVzZXJzIGFyZVxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeVNjcmlwdExpc3Q6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9zY3JpcHQvbGlzdCcsIHt9LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZXhlY3V0ZXMgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdHMgb3IgZXh0ZXJuYWwgc2NyaXB0cyBvbiBhblxuICAgICAgICAgKiBBbm9ueW1vdXMgUHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZXhlY3V0ZSBhIHNpbmdsZSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlXG4gICAgICAgICAqIHBhcmFtZXRlciB2YWx1ZXMgZm9yIGZpbGVuYW1lLCBhdXRob3IgYW5kIG9wdGlvbmFsbHkgdmVyc2lvbi4gVG8gZXhlY3V0ZSBhXG4gICAgICAgICAqIGNoYWluIG9mIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHRzIHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlIGFcbiAgICAgICAgICogY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmFsdWVzIG9uIHRoZSBmaWxlbmFtZSAsIGF1dGhvciBhbmQgb3B0aW9uYWxseVxuICAgICAgICAgKiB2ZXJzaW9uIHBhcmFtZXRlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGV4ZWN1dGUgYSBzaW5nbGUgZXh0ZXJuYWwgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlIGEgdmFsaWQgVVJMXG4gICAgICAgICAqIG9yIGZpbGUgcGF0aCB1c2luZyB0aGUgZXh0ZXJuYWxzb3VyY2UgcGFyYW1ldGVyLiBUbyBleGVjdXRlIGEgY2hhaW4gb2ZcbiAgICAgICAgICogZXh0ZXJuYWwgc2NyaXB0cyB0aGUgY2FsbGVyIG11c3QgcHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mXG4gICAgICAgICAqIHZhbHVlcyBvbiB0aGUgZXh0ZXJuYWxzb3VyY2UgcGFyYW1ldGVyLiBOb3RlLCB0byBleGVjdXRlIGFuIGV4dGVybmFsIHNjcmlwdFxuICAgICAgICAgKiB0aGUgY2FsbGVyIG11c3QgaGF2ZSBQT1dFUl9VU0VSIHByaXZpbGVnZXMgc28gdGhpcyBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICogdG8gYW5vbnltb3VzIHVzZXJzIG9uIHRoaXMgY2FsbC5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogQSBjaGFpbmVkIGV4ZWN1dGlvbiBleGVjdXRlcyBlYWNoIG9mIHRoZSBzY3JpcHRzIGlkZW50aWZpZWQgb24gdGhlXG4gICAgICAgICAqIGNhbGwgaW4gYSBzZXF1ZW50aWFsIGZhc2hpb24gb24gdGhlIFIgc2Vzc2lvbiwgd2l0aCBleGVjdXRpb24gb2NjdXJpbmcgaW5cbiAgICAgICAgICogdGhlIG9yZGVyIHNwZWNpZmllZCBvbiB0aGUgcGFyYW1ldGVyIGxpc3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+UHJlLWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGlucHV0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gcGFzcyBSZXZvRGVwbG95Ui1lbmNvZGVkXG4gICAgICAgICAqICAgICAgIFIgb2JqZWN0IHZhbHVlcyBhcyBpbnB1dHMuIFRoZXNlIGlucHV0cyBhcmUgdHVybmVkIGludG8gUiBvYmplY3RzXG4gICAgICAgICAqICAgICAgIGluIHRoZSB3b3Jrc3BhY2UgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBwcmVsb2FkZmlsZSBwYXJhbWV0ZXJzIGFsbG93cyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmVcbiAgICAgICAgICogICAgICAgZmlsZXMgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBiZWZvcmUgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRvYmplY3QgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmVcbiAgICAgICAgICogICAgICAgYmluYXJ5IFIgb2JqZWN0cyAoLnJEYXRhKSBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtzcGFjZVxuICAgICAgICAgKiAgICAgICBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGFkb3B0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIGEgcHJlLWV4aXN0aW5nXG4gICAgICAgICAqICAgICAgIHByb2plY3Qgd29ya3NwYWNlLCBwcm9qZWN0IHdvcmtpbmcgZGlyZWN0b3J5IGFuZC9vciBwcm9qZWN0IHBhY2thZ2VcbiAgICAgICAgICogICAgICAgZGVwZW5kZW5jaWVzIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5Qb3N0LWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHJvYmplY3RzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygb2JqZWN0IG5hbWVzIHRoYXQgd2lsbCBiZSByZXR1cm5lZCBhcyBSZXZvRGVwbG95Ui1lbmNvZGVkIFJcbiAgICAgICAgICogICAgICAgb2JqZWN0cyBvbiB0aGUgcmVzcG9uc2UgbWFya3VwIGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZWZpbGUgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiB3b3JraW5nIGRpcmVjdG9yeSBmaWxlcyB0byBiZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXJcbiAgICAgICAgICogICAgICAgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jlb2JqZWN0IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygd29ya3NwYWNlIG9iamVjdHMgdG8gYmUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZVxuICAgICAgICAgKiAgICAgICBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZXdvcmtzcGFjZSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3RvcmUgdGhlIGVudGlyZVxuICAgICAgICAgKiAgICAgICB3b3Jrc3BhY2UgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlZGlyZWN0b3J5IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzcGVjaWZ5IGEgdGFyZ2V0XG4gICAgICAgICAqICAgICAgIHJlcG9zaXRvcnkgZGlyZWN0b3J5IGZvciBzdG9yZWQgZmlsZXMgYW5kIG9iamVjdHMgYWZ0ZXIgdGhlIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICAgICBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlbmV3dmVyc2lvbiBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gY3JlYXRlIG5ld1xuICAgICAgICAgKiAgICAgICB2ZXJzaW9ucyBvZiBlYWNoIHN0b3JlZCBmaWxlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb25cbiAgICAgICAgICogICAgICAgY29tcGxldGVzLiBCeSBkZWZhdWx0LCBzdG9yZWQgZmlsZXMgb3ZlcndyaXRlIGFueSBwcmUtZXhpc3RpbmcgZmlsZVxuICAgICAgICAgKiAgICAgICBieSB0aGUgc2FtZSBuYW1lLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZXB1YmxpYyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gYXNzaWduIHB1YmxpYyBhY2Nlc3NcbiAgICAgICAgICogICAgICAgdG8gZWFjaCBzdG9yZWQgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgaW5maW5pdHkgLCBuYW4gYW5kIGVuY29kZURhdGFGcmFtZVByaW1pdGl2ZUFzVmVjdG9yIHBhcmFtZXRlcnNcbiAgICAgICAgICogICAgICAgYWxsb3cgdGhlIGNhbGxlciB0byBjb250cm9sIGhvdyBSZXZvRGVwbG95Ui1lbmNvZGVkIFIgb2JqZWN0IGRhdGEgaXNcbiAgICAgICAgICogICAgICAgZW5jb2RlZCBpbiB0aGUgcmVzcG9uc2UgbWFya2t1cC5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogIDxzdHJvbmc+XG4gICAgICAgICAqICAgICBTb21lIGtleSBkYXRhIGluZGljYXRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwIG9uIHRoaXMgY2FsbDpcbiAgICAgICAgICogIDwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgPG9sPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGNvbnNvbGUgLSBpbmRpY2F0ZXMgdGhlIGNvbnNvbGUgb3V0cHV0IHJlc3VsdGluZyBmcm9tIHRoZSBjb2RlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIHJlc3VsdHMgLSBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBSIGdyYXBoaWNzXG4gICAgICAgICAqICAgICAgIGRldmljZVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGFydGlmYWN0cyAtIGluZGljYXRlcyB0aGUgbGlzdCBvZiBmaWxlcyBnZW5lcmF0ZWQgb3IgbW9kaWZpZWQgaW4gdGhlXG4gICAgICAgICAqICAgICAgIHdvcmtpbmcgZGlyZWN0b3J5XG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgb2JqZWN0cyAtICBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgUiBvYmplY3RzIHJldHVybmVkIGZyb20gdGhlXG4gICAgICAgICAqICAgICAgIHdvcmtzcGFjZVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGZpbGVzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGFuZCBvYmplY3RzIHN0b3JlZCBpbiB0aGVcbiAgICAgICAgICogICAgICAgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlc1xuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+aW50ZXJydXB0ZWQgLSBpbmRpY2F0ZXMgdGhlIGludGVycnVwdGVkIHN0YXR1cyBvZiBleGVjdXRpb248L2xpPlxuICAgICAgICAgKiAgICA8bGk+ZXJyb3IgLSBvbiBmYWlsdXJlLCBpbmRpY2F0ZXMgdGhlIHJlYXNvbiBmb3IgZmFpbHVyZTwvbGk+XG4gICAgICAgICAqICAgIDxsaT5lcnJvckNvZGUgLSBvbiBmYWlsdXJlLCBpbmRpY2F0ZXMgdGhlIGVycm9yIGNvZGUgZm9yIGZhaWx1cmU8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlTY3JpcHRFeGVjdXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5jb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIGRpcmVjdG9yaWVzIGZvclxuICAgICAgICAgKiAgICAgICBzY3JpcHRzLCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLWZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZXh0ZXJuYWxzb3VyY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBVUkxzIG9yIGZpbGUgcGF0aHMgdG8gZXh0ZXJuYWwgc2NyaXB0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBSZXZvRGVwbG95Ui1lbmNvZGVkIHNjcmlwdCBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y3N2aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcHJpbWl0aXZlIG5hbWUvdmFsdWUgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlYXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGV2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgb2JqZWN0ICguckRhdGEpIGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2Fkb2JqZWN0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1vYmplY3QtcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHR3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCB3b3Jrc3BhY2UgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIGRpcmVjdG9yeSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0cGFja2FnZXM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBwYWNrYWdlIGRlcGVuZGVuY2llcyBhcmUgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5ibGFja2JveDwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBleGVjdXRpb24gd2lsbCBvY2N1ciBvbiB0aGUgSFRUUCBibGFja2JveFxuICAgICAgICAgKiAgICAgICBwcm9qZWN0IGZvciB0aGUgY3VycmVudCBIVFRQIHNlc3Npb25cbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cmVjeWNsZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIHJlY3ljbGVzIHRoZSBSIHNlc3Npb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBIVFRQXG4gICAgICAgICAqICAgICAgIGJsYWNrYm94IHByb2plY3Qgb24gdGhlIGN1cnJlbnQgSFRUUCBzZXNzaW9uXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWc8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSB0YWcgdGhhdCBsYWJlbHMgdGhlIGV4ZWN1dGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5lY2hvb2ZmPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmdyYXBoaWNzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCBSIGdyYXBoaWNzIGRldmljZSBmb3IgZXhlY3V0aW9uOiBwbmcgb3Igc3ZnPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmdyYXBoaWNzd2lkdGg8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIHdpZHRoIGZvciBSIGdyYXBoaWNzIGRldmljZSBpbWFnZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3NoZWlnaHQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIGhlaWdodCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJvYmplY3RzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygb2JqZWN0cyBmb3IgcmV0cmlldmFsIGZvbGxvd2luZyB0aGUgZXhlY3V0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlZmlsZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZW9iamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3QgbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmV3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBmaWxlbmFtZSAoLnJEYXRhKSB3aGVyZSB3b3Jrc3BhY2UgY29udGVudHMgd2lsbCBiZSBzYXZlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZW5ld3ZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZW5zdXJlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHJlcG9zaXRvcnkgcmVzdWx0cyBpbiBuZXcgdmVyc2lvbiBiZWluZyBjcmVhdGVkIGlmIG5lZWRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZXB1YmxpYzwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBwdWJsaXNoZXMgZWFjaCBmaWxlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbmZpbml0eTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgY3VzdG9tIHZhbHVlIGZvciBJbmZpbml0eSBhcHBlYXJpbmcgaW4gUiBvYmplY3RcbiAgICAgICAgICogICAgICAgZGF0YSByZXR1cm5lZCBvbiBjYWxsLCBvdGhlcndpc2UgSW5maW5pdHkgaXMgcmVwcmVzZW50ZWQgYnlcbiAgICAgICAgICogICAgICAgPGNvZGU+MHg3ZmYwMDAwMDAwMDAwMDAwTDwvY29kZT5cbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgY3VzdG9tIHZhbHVlIGZvciBOYU4gYXBwZWFyaW5nIGluIFIgb2JqZWN0IGRhdGFcbiAgICAgICAgICogICAgICAgcmV0dXJuZWQgb24gY2FsbCwgb3RoZXJ3aXNlIE5hTiBpcyByZXByZXNlbnRlZCBieSA8Y29kZT5udWxsPC9jb2RlPlxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZW5jb2RlRGF0YUZyYW1lUHJpbWl0aXZlQXNWZWN0b3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGRhdGEuZnJhbWUgcHJpbWl0aXZlcyBhcmUgZW5jb2RlZFxuICAgICAgICAgKiAgICAgICB2ZWN0b3JzIGluIFIgb2JqZWN0IGRhdGEgcmV0dXJuZWQgb24gY2FsbFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlTY3JpcHRFeGVjdXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBleGVjdXRlcyByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0cyBvciBleHRlcm5hbCBzY3JpcHRzIG9uIGFuXG4gICAgICAgICAqIEFub255bW91cyBQcm9qZWN0IGFuZCByZXR1cm5zIGEgc2ltcGxlIEhUTUwgcGFnZSB0aGF0IGRpc3BsYXlzIHRoZSByZXN1bHRzXG4gICAgICAgICAqIGdlbmVyYXRlZCBvbiB0aGUgZXhlY3V0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBPbiBhIHN1Y2Nlc3NmdWwgZXhlY3V0aW9uLCB0aGUgSFRNTCBwYWdlIHdpbGwgZGlzcGxheSB0aGUgZm9sbG93aW5nIGRhdGFcbiAgICAgICAgICogd2hlbiBhdmFpbGFibGUgb24gdGhlIHJlc3BvbnNlOlxuICAgICAgICAgKlxuICAgICAgICAgKiA8dWw+XG4gICAgICAgICAqICAgIDxsaT5SIGNvbnNvbGUgb3V0cHV0PC9saT5cbiAgICAgICAgICogICAgPGxpPlIgd29ya3NwYWNlIG9iamVjdCBkYXRhPC9saT5cbiAgICAgICAgICogICAgPGxpPlIgZ2VuZXJhdGVkIHBsb3RzPC9saT5cbiAgICAgICAgICogICAgPGxpPkxpbmtzIHRvIFIgd29ya2luZyBkaXJlY3RvcnkgYXJ0aWZhY3RzPC9saT5cbiAgICAgICAgICogICAgPGxpPkxpbmtzIHRvIFJlcG9zaXRvcnkgc3RvcmVkIGFydGlmYWN0czwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqXG4gICAgICAgICAqIE9uIGEgZmFpbGVkIGV4ZWN1dGlvbiwgdGhlIEhUTUwgcGFnZSB3aWxsIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZVxuICAgICAgICAgKiBpbmRpY2F0aW5nIHRoZSBjYXVzZSBvZiB0aGUgZmFpbHVyZSBhbmQgd2hlbiBhdmFpbGFibGUsIFIgY29uc29sZSBvdXRwdXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBBUEkgY2FsbCBtYWtlcyBpdCB2ZXJ5IHNpbXBsZSB0byBpbnRlZ3JhdGUgb3V0cHV0cyBnZW5lcmF0ZWQgYnlcbiAgICAgICAgICogUmV2b0RlcGxveVItbWFuYWdlZCBSIHNjcmlwdHMgaW50byBhbnkgdGhpcmQtcGFydHkgYXBwbGljYXRpb24uIEl0IGNhbiBhbHNvXG4gICAgICAgICAqIGJlIHVzZWQgYXMgYSB2ZXJ5IHNpbXBsZSB0ZXN0IGFuZCBkZWJ1Z2dpbmcgYWlkIGZvciBSIHNjcmlwdCBhbmRcbiAgICAgICAgICogYXBwbGljYXRpb24gZGV2ZWxvcGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZXhlY3V0ZSBhIHNpbmdsZSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlXG4gICAgICAgICAqIHBhcmFtZXRlciB2YWx1ZXMgZm9yIGZpbGVuYW1lICwgYXV0aG9yIGFuZCBvcHRpb25hbGx5IHZlcnNpb24gLiBUbyBleGVjdXRlXG4gICAgICAgICAqIGEgY2hhaW4gb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdHMgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYVxuICAgICAgICAgKiBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2YWx1ZXMgb24gdGhlIGZpbGVuYW1lICwgYXV0aG9yIGFuZCBvcHRpb25hbGx5XG4gICAgICAgICAqIHZlcnNpb24gcGFyYW1ldGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZXhlY3V0ZSBhIHNpbmdsZSBleHRlcm5hbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYSB2YWxpZCBVUkwgb3JcbiAgICAgICAgICogZmlsZSBwYXRoIHVzaW5nIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuIFRvIGV4ZWN1dGUgYSBjaGFpbiBvZlxuICAgICAgICAgKiBleHRlcm5hbCBzY3JpcHRzIHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmFsdWVzXG4gICAgICAgICAqIG9uIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuIE5vdGUsIHRvIGV4ZWN1dGUgYW4gZXh0ZXJuYWwgc2NyaXB0IHRoZVxuICAgICAgICAgKiBjYWxsZXIgbXVzdCBoYXZlIFBPV0VSX1VTRVIgcHJpdmlsZWdlcyBzbyB0aGlzIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZSB0b1xuICAgICAgICAgKiBhbm9ueW1vdXMgdXNlcnMgb24gdGhpcyBjYWxsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBBIGNoYWluZWQgZXhlY3V0aW9uIGV4ZWN1dGVzIGVhY2ggb2YgdGhlIHNjcmlwdHMgaWRlbnRpZmllZCBvbiB0aGVcbiAgICAgICAgICogY2FsbCBpbiBhIHNlcXVlbnRpYWwgZmFzaGlvbiBvbiB0aGUgUiBzZXNzaW9uLCB3aXRoIGV4ZWN1dGlvbiBvY2N1cmluZyBpblxuICAgICAgICAgKiB0aGUgb3JkZXIgc3BlY2lmaWVkIG9uIHRoZSBwYXJhbWV0ZXIgbGlzdC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGxlYXNlIG5vdGUgdGhlIGZvbGxvd2luZyBwcmUgYW5kIHBvc3QgZXhlY3V0aW9uIHBhcmFtZXRlcnM6XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+UHJlLWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGlucHV0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gcGFzcyBSZXZvRGVwbG95Ui1lbmNvZGVkXG4gICAgICAgICAqICAgICAgIFIgb2JqZWN0IHZhbHVlcyBhcyBpbnB1dHMuIFRoZXNlIGlucHV0cyBhcmUgdHVybmVkIGludG8gUiBvYmplY3RzXG4gICAgICAgICAqICAgICAgIGluIHRoZSB3b3Jrc3BhY2UgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBjc3ZpbnB1dHMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHBhc3MgUiBvYmplY3QgcHJpbWl0aXZlXG4gICAgICAgICAqICAgICAgIHZhbHVlcyBhcyBjb21tYS1zZXBhcmF0ZWQgbmFtZS92YWx1ZSBwYWlycy4gVGhlc2UgaW5wdXRzIGFyZSB0dXJuZWRcbiAgICAgICAgICogICAgICAgaW50byBSIG9iamVjdHMgaW4gdGhlIHdvcmtzcGFjZSBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRmaWxlIHBhcmFtZXRlcnMgYWxsb3dzIHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBmaWxlcyBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGJlZm9yZSB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcHJlbG9hZG9iamVjdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBiaW5hcnkgUiBvYmplY3RzICguckRhdGEpIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya3NwYWNlXG4gICAgICAgICAqICAgICAgIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgYWRvcHQgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgYSBwcmUtZXhpc3RpbmdcbiAgICAgICAgICogICAgICAgcHJvamVjdCB3b3Jrc3BhY2UsIHByb2plY3Qgd29ya2luZyBkaXJlY3RvcnkgYW5kL29yIHByb2plY3QgcGFja2FnZVxuICAgICAgICAgKiAgICAgICBkZXBlbmRlbmNpZXMgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPlBvc3QtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcm9iamVjdHMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiBvYmplY3QgbmFtZXMgdGhhdCB3aWxsIGJlIHJldHVybmVkIGFzIFJldm9EZXBsb3lSLWVuY29kZWQgUlxuICAgICAgICAgKiAgICAgICBvYmplY3RzIG9uIHRoZSByZXNwb25zZSBtYXJrdXAgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlZmlsZSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlclxuICAgICAgICAgKiAgICAgICB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVvYmplY3QgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiB3b3Jrc3BhY2Ugb2JqZWN0cyB0byBiZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jld29ya3NwYWNlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzdG9yZSB0aGUgZW50aXJlXG4gICAgICAgICAqICAgICAgIHdvcmtzcGFjZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVkaXJlY3RvcnkgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSB0YXJnZXRcbiAgICAgICAgICogICAgICAgcmVwb3NpdG9yeSBkaXJlY3RvcnkgZm9yIHN0b3JlZCBmaWxlcyBhbmQgb2JqZWN0cyBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVuZXd2ZXJzaW9uIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBjcmVhdGUgbmV3XG4gICAgICAgICAqICAgICAgIHZlcnNpb25zIG9mIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICAgICBjb21wbGV0ZXMuIEJ5IGRlZmF1bHQsIHN0b3JlZCBmaWxlcyBvdmVyd3JpdGUgYW55IHByZS1leGlzdGluZyBmaWxlXG4gICAgICAgICAqICAgICAgIGJ5IHRoZSBzYW1lIG5hbWUuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlcHVibGljIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBhc3NpZ24gcHVibGljIGFjY2Vzc1xuICAgICAgICAgKiAgICAgICB0byBlYWNoIHN0b3JlZCBmaWxlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgVGhlIGluZmluaXR5ICwgbmFuIGFuZCBlbmNvZGVEYXRhRnJhbWVQcmltaXRpdmVBc1ZlY3RvciBwYXJhbWV0ZXJzXG4gICAgICAgICAqICAgICAgYWxsb3cgdGhlIGNhbGxlciB0byBjb250cm9sIGhvdyBSZXZvRGVwbG95Ui1lbmNvZGVkIFIgb2JqZWN0IGRhdGEgaXNcbiAgICAgICAgICogICAgICBlbmNvZGVkIGluIHRoZSByZXNwb25zZSBtYXJra3VwLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPlNvbWUga2V5IGRhdGEgaW5kaWNhdGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAgb24gdGhpcyBjYWxsOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgY29uc29sZSAtIGluZGljYXRlcyB0aGUgUiBjb25zb2xlIG91dHB1dCByZXN1bHRpbmcgZnJvbSB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgcmVzdWx0cyAtIGluZGljYXRlcyB0aGUgbGlzdCBvZiBmaWxlcyBnZW5lcmF0ZWQgYnkgdGhlIFIgZ3JhcGhpY3NcbiAgICAgICAgICogICAgICAgZGV2aWNlXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgYXJ0aWZhY3RzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGdlbmVyYXRlZCBvciBtb2RpZmllZCBpbiB0aGVcbiAgICAgICAgICogICAgICAgd29ya2luZyBkaXJlY3RvcnlcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBvYmplY3RzIC0gIGluZGljYXRlcyB0aGUgbGlzdCBvZiBSIG9iamVjdHMgcmV0dXJuZWQgZnJvbSB0aGVcbiAgICAgICAgICogICAgICAgd29ya3NwYWNlXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgZmlsZXMgLSBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgZmlsZXMgYW5kIG9iamVjdHMgc3RvcmVkIGluIHRoZVxuICAgICAgICAgKiAgICAgICByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgaW50ZXJydXB0ZWQgLSBpbmRpY2F0ZXMgdGhlIGludGVycnVwdGVkIHN0YXR1cyBvZiBleGVjdXRpb25cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBlcnJvciAtIG9uIGZhaWx1cmUsIGluZGljYXRlcyB0aGUgcmVhc29uIGZvciBmYWlsdXJlXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgZXJyb3JDb2RlIC0gb24gZmFpbHVyZSwgaW5kaWNhdGVzIHRoZSBlcnJvciBjb2RlIGZvciBmYWlsdXJlXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeVNjcmlwdFJlbmRlclxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdFxuICAgICAgICAgKiAgICAgICBmaWxlbmFtZXNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5LW1hbmFnZWQgZGlyZWN0b3JpZXMgZm9yXG4gICAgICAgICAqICAgICAgIHNjcmlwdHMsIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBvbmUgYXV0aG9yIHBlciBmaWxlbmFtZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgb25lIHZlcnNpb24gcGVyIGZpbGVuYW1lXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5leHRlcm5hbHNvdXJjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBVUkxzIG9yIGZpbGUgcGF0aHMgdG8gZXh0ZXJuYWxcbiAgICAgICAgICogICAgICAgc2NyaXB0c1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUmV2b0RlcGxveVItZW5jb2RlZCBzY3JpcHQgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNzdmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHByaW1pdGl2ZSBuYW1lL3ZhbHVlIGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZWF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZGZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxldmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdG5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IG9iamVjdCAoLnJEYXRhKSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdGF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdHZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItb2JqZWN0LXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0d29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggd29ya3NwYWNlIGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBkaXJlY3RvcnkgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdHBhY2thZ2VzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggcGFja2FnZSBkZXBlbmRlbmNpZXMgYXJlIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5ibGFja2JveDwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGV4ZWN1dGlvbiB3aWxsIG9jY3VyIG9uIHRoZSBIVFRQIGJsYWNrYm94IHByb2plY3QgZm9yIHRoZSBjdXJyZW50IEhUVFAgc2Vzc2lvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnJlY3ljbGU8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHJlY3ljbGVzIHRoZSBSIHNlc3Npb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBIVFRQIGJsYWNrYm94IHByb2plY3Qgb24gdGhlIGN1cnJlbnQgSFRUUCBzZXNzaW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnRhZzwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIHRhZyB0aGF0IGxhYmVscyB0aGUgZXhlY3V0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmVjaG9vZmY8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlIFIgY29tbWFuZHMgd2lsbCBub3QgYXBwZWFyIGluIHRoZSBjb25zb2xlIG91dHB1dDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jb25zb2xlb2ZmPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSBjb25zb2xlIG91dHB1dCBpcyBub3QgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5ncmFwaGljczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgUiBncmFwaGljcyBkZXZpY2UgZm9yIGV4ZWN1dGlvbjogcG5nIG9yIHN2ZzwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5ncmFwaGljc3dpZHRoPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCB3aWR0aCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmdyYXBoaWNzaGVpZ2h0PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCBoZWlnaHQgZm9yIFIgZ3JhcGhpY3MgZGV2aWNlIGltYWdlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yb2JqZWN0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIG9iamVjdHMgZm9yIHJldHJpZXZhbCBmb2xsb3dpbmcgdGhlIGV4ZWN1dGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZWZpbGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB3b3JraW5nIGRpcmVjdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVvYmplY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB3b3Jrc3BhY2Ugb2JqZWN0IG5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3Jld29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgZmlsZW5hbWUgKC5yRGF0YSkgd2hlcmUgd29ya3NwYWNlIGNvbnRlbnRzIHdpbGwgYmUgc2F2ZWQgaW4gdGhlIHJlcG9zaXRvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVuZXd2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGVuc3VyZXMgZWFjaCBmaWxlIHN0b3JlZCBpbiByZXBvc2l0b3J5IHJlc3VsdHMgaW4gbmV3IHZlcnNpb24gYmVpbmcgY3JlYXRlZCBpZiBuZWVkZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVwdWJsaWM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgcHVibGlzaGVzIGVhY2ggZmlsZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5maW5pdHk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGN1c3RvbSB2YWx1ZSBmb3IgSW5maW5pdHkgYXBwZWFyaW5nIGluIFIgb2JqZWN0XG4gICAgICAgICAqICAgICAgIGRhdGEgcmV0dXJuZWQgb24gY2FsbCwgb3RoZXJ3aXNlIEluZmluaXR5IGlzIHJlcHJlc2VudGVkIGJ5XG4gICAgICAgICAqICAgICAgIDB4N2ZmMDAwMDAwMDAwMDAwMExcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgY3VzdG9tIHZhbHVlIGZvciBOYU4gYXBwZWFyaW5nIGluIFIgb2JqZWN0IGRhdGFcbiAgICAgICAgICogICAgICAgcmV0dXJuZWQgb24gY2FsbCwgb3RoZXJ3aXNlIE5hTiBpcyByZXByZXNlbnRlZCBieSBudWxsXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5lbmNvZGVEYXRhRnJhbWVQcmltaXRpdmVBc1ZlY3RvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCBkYXRhLmZyYW1lIHByaW1pdGl2ZXMgYXJlIGVuY29kZWQgdmVjdG9ycyBpbiBSXG4gICAgICAgICAqICAgICAgIG9iamVjdCBkYXRhIHJldHVybmVkIG9uIGNhbGxcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5U2NyaXB0UmVuZGVyOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9zY3JpcHQvcmVuZGVyJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBpbnRlcnJ1cHRzIHRoZSBjdXJyZW50IGV4ZWN1dGlvbiBvbiB0aGUgSFRUUCBCbGFja2JveCBwcm9qZWN0XG4gICAgICAgICAqIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCBIVFRQIHNlc3Npb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeVNjcmlwdEludGVycnVwdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeVNjcmlwdEludGVycnVwdDogZnVuY3Rpb24oY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L3NjcmlwdC9pbnRlcnJ1cHQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIFJlcG9zaXRvcnkgRmlsZSBBUElzXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGxpc3RzIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RmlsZXRMaXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgd2hlbiBzcGVjaWZpZWQsIGNhbGwgcmV0dXJucyBsaXN0IG9mIHNjcmlwdCB2ZXJzaW9ucyBmb3JcbiAgICAgICAgICogICAgICAgZmlsZW5hbWVcbiAgICAgICAgICogICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZmlsZXMgdGhhdCBhcmUgcmVzdHJpY3RlZCBidXRcbiAgICAgICAgICogICAgICAgdmlzaWJsZSBvciBzaGFyZWQgYnkgb3RoZXIgdXNlcnMgYXJlIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgc2NyaXB0cyBwdWJsaXNoZWQgYnkgb3RoZXIgdXNlcnMgYXJlXG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNhdGVnb3J5RmlsdGVyPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHdoZW4gc3BlY2lmaWVkIGxpc3Qgb2YgZmlsZXMgaW4gcmVzcG9uc2UgbWFya3VwIGlzIGxpbWl0ZWRcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZUxpc3Q6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvbGlzdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHVwbG9hZHMgYSBmaWxlIGZyb20gdGhlIHVzZXIncyBjb21wdXRlciB0byB0aGUgcmVwb3NpdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RmlsZVVwbG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBuYW1lIG9mIHRoZSBmaWxlIHRvIHVwbG9hZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlPC9kdD5cbiAgICAgICAgICogICAgPGRkPi4uLmZpbGUgY29udGVudC4uLjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGRlc2NyaXB0aW9uIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSB1cGxvYWRlZCBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWdzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRhZyB3b3JkcyB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcmVwb3NpdG9yeSBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJlc3RyaWN0ZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJvbGUgbmFtZXMsIHdoaWNoIG1ha2VzIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2VycyB3aXRoIHRoZXNlIHJvbGVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGZpbGUgd2lsbCBiZSBzaGFyZWQgd2hpY2ggbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBmaWxlIHdpbGwgYmUgcHVibGlzaGVkIHdoaWNoIG1ha2VzIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCBhbmQgYW5vbnltb3VzIHVzZXJzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld3ZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgcmVwb3NpdG9yeSB3aWxsIGNyZWF0ZSBuZXcgdmVyc2lvbiByYXRoZXIgdGhhbiBvdmVyd3JpdGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmV3dmVyc2lvbm1zZzwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIG5ld3ZlcnNpb24gaXMgdHJ1ZSwgbWVzc2FnZSB0byBhc3NvY2lhdGUgd2l0aCBuZXcgdmVyc2lvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGlucHV0cyBwcm9wZXJ0eSBvbiBhIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+b3V0cHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgb3V0cHV0cyBwcm9wZXJ0eSBvbiBhIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQ8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlGaWxlVXBsb2FkOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25maWcuZm9ybWF0ID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICB2YXIgaW9Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogY29uZmlnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgICAgICBpZDogY29uZmlnLmZvcm1JZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IGNhbGxiYWNrXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS91cGxvYWQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHRyYW5zZmVycyBhIGZpbGUgZnJvbSBhIFVSTCB0byB0aGUgcmVwb3NpdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RmlsZVRyYW5zZmVyXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIG5hbWUgb2YgdGhlIGZpbGUgdG8gdXBsb2FkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnVybDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgYSB1cmwgb2YgdGhlIGZpbGUgdG8gdXBsb2FkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGRlc2NyaXB0aW9uIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSB1cGxvYWRlZCBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnRhZ3M8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGFnIHdvcmRzIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSByZXBvc2l0b3J5IGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygcm9sZSBuYW1lcywgd2hpY2ggbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzIHdpdGggdGhlc2Ugcm9sZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHNoYXJlZCB3aGljaCBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgdXNlcnM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHVibGlzaGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGZpbGUgd2lsbCBiZSBwdWJsaXNoZWQgd2hpY2ggbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSByZXBvc2l0b3J5IHdpbGwgY3JlYXRlIG5ldyB2ZXJzaW9uIHJhdGhlciB0aGFuIG92ZXJ3cml0ZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXd2ZXJzaW9ubXNnPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgbmV3dmVyc2lvbiBpcyB0cnVlLCBtZXNzYWdlIHRvIGFzc29jaWF0ZSB3aXRoIG5ldyB2ZXJzaW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgaW5wdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5vdXRwdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBvdXRwdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVUcmFuc2ZlcjogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS90cmFuc2ZlcicsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgd3JpdGVzIGEgdGV4dCBmaWxlIHRvIHRoZSByZXBvc2l0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlV3JpdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgbmFtZSBvZiB0aGUgZmlsZSB0byB1cGxvYWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGV4dDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZmlsZSB0byB1cGxvYWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBhIGRlc2NyaXB0aW9uIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSB1cGxvYWRlZFxuICAgICAgICAgKiAgICAgICBmaWxlXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWdzPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0YWcgd29yZHMgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHJlcG9zaXRvcnkgZmlsZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJvbGUgbmFtZXMsIHdoaWNoIG1ha2VzXG4gICAgICAgICAqICAgICAgIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2VycyB3aXRoIHRoZXNlIHJvbGVzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zaGFyZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCBpbGUgaXMgc2hhcmVkIGFuZCB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2g8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGZpbGUgd2lsbCBiZSBwdWJsaXNoZWQgd2hpY2ggbWFrZXMgdGhlIGZpbGVcbiAgICAgICAgICogICAgICAgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld3ZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHJlcG9zaXRvcnkgd2lsbCBjcmVhdGUgbmV3IHZlcnNpb24gcmF0aGVyXG4gICAgICAgICAqICAgICAgIHRoYW4gb3ZlcndyaXRlXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXd2ZXJzaW9ubXNnPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIG5ld3ZlcnNpb24gaXMgdHJ1ZSwgbWVzc2FnZSB0byBhc3NvY2lhdGUgd2l0aCBuZXdcbiAgICAgICAgICogICAgICAgdmVyc2lvblxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgaW5wdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkXG4gICAgICAgICAqICAgICAgIHNjcmlwdFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+b3V0cHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG91dHB1dHMgcHJvcGVydHkgb24gYSByZXBvc2l0b3J5LW1hbmFnZWRcbiAgICAgICAgICogICAgICAgc2NyaXB0XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVXcml0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS93cml0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdXBkYXRlcyB0aGUgcHJvcGVydGllcyBvbiBhIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlVXBkYXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIG5hbWUgb2YgdGhlIGZpbGUgdG8gdXBsb2FkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGRlc2NyaXB0aW9uIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSB1cGxvYWRlZCBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnRhZ3M8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGFnIHdvcmRzIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSByZXBvc2l0b3J5IGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJvbGUgbmFtZXMsIHdoaWNoIG1ha2VzXG4gICAgICAgICAqICAgICAgIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2VycyB3aXRoIHRoZXNlIHJvbGVzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBmaWxlIHdpbGwgYmUgc2hhcmVkIHdoaWNoIG1ha2VzIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2VyczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wdWJsaXNoZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHB1Ymxpc2hlZCB3aGljaCBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgYW5kIGFub255bW91cyB1c2VyczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGlucHV0cyBwcm9wZXJ0eSBvbiBhIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+b3V0cHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgb3V0cHV0cyBwcm9wZXJ0eSBvbiBhIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQ8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlGaWxlVXBkYXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9maWxlL3VwZGF0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgcmV2ZXJ0cyB0aGUgY3VycmVudCB3b3JraW5nIGNvcHkgb2YgYSBmaWxlIHRvIGEgc3BlY2lmaWMgdmVyc2lvblxuICAgICAgICAgKiBmb3VuZCBpbiB0aGUgZmlsZXMgdmVyc2lvbiBoaXN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlUmV2ZXJ0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIG5hbWUgb2YgdGhlIGZpbGUgdG8gdXBsb2FkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgdmVyc2lvbiB0byByZXZlcnQgaW50byB0aGUgY3VycmVudCB3b3JraW5nIGNvcHk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgZGVzY3JpcHRpb24gdG8gYXNzb2NpYXRlIHdpdGggdGhlIHVwbG9hZGVkIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygcm9sZSBuYW1lcywgd2hpY2ggbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzIHdpdGggdGhlc2Ugcm9sZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHNoYXJlZCB3aGljaCBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgdXNlcnM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHVibGlzaGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGZpbGUgd2lsbCBiZSBwdWJsaXNoZWQgd2hpY2ggbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSByZXBvc2l0b3J5IHdpbGwgY3JlYXRlIG5ldyB2ZXJzaW9uIHJhdGhlciB0aGFuIG92ZXJ3cml0ZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXd2ZXJzaW9ubXNnPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgbmV3dmVyc2lvbiBpcyB0cnVlLCBtZXNzYWdlIHRvIGFzc29jaWF0ZSB3aXRoIG5ldyB2ZXJzaW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgaW5wdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5vdXRwdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBvdXRwdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVSZXZlcnQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvcmV2ZXJ0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBnZW5lcmF0ZXMgYSBkaWZmIGJldHdlZW4gdGhlIGN1cnJlbnQgd29ya2luZyBjb3B5IG9mIGEgZmlsZSBhbmRcbiAgICAgICAgICogYSBzcGVjaWZpYyB2ZXJzaW9uIGZvdW5kIGluIHRoZSBmaWxlcyB2ZXJzaW9uIGhpc3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeUZpbGVEaWZmXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgYXV0aG9yPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIHNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIHZlcnNpb24gdG8gZGlmZiBhZ2FpbnN0IHRoZSBjdXJyZW50XG4gICAgICAgICAqICAgICAgIHdvcmtpbmcgY29weVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZURpZmY6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvZGlmZicsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZ3JhbnRzIG93bmVyc2hpcCByaWdodHMgb24gYSBmaWxlIHRvIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0ZWRcbiAgICAgICAgICogdXNlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGUsIHVubGlrZSBtb3N0IHJlcG9zaXRvcnkgQVBJcyB0aGF0IHJlcXVpcmUgYm90aCBmaWxlbmFtZSBhbmQgYXV0aG9yXG4gICAgICAgICAqIHBhcmFtZXRlcnMsIHRoZXJlIGlzIG5vIGV4cGxpY2l0IGF1dGhvciBwYXJhbWV0ZXIgb24gdGhpcyBjYWxsLiBUaGUgYXV0aG9yXG4gICAgICAgICAqIGlzIHVuZGVyc3Rvb2QgdG8gYmUgdGhlIGNhbGxlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RmlsZUdyYW50XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmV3YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPiBzcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBncmFudGVlIHVzZXJuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXZva2VhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmV2b2tlZSB1c2VybmFtZXNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlGaWxlR3JhbnQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvZ3JhbnQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGRvd25sb2FkcyBhIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlRG93bmxvYWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPnNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBhdXRob3I8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgdmVyc2lvbjwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVEb3dubG9hZDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9kb3dubG9hZCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZGVsZXRlcyBhIGZpbGUgZnJvbSB0aGUgcmVwb3NpdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RmlsZURlbGV0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD5zcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVEZWxldGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvZGVsZXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBmZXRjaGVzIHRoZSBsYXRlc3QgbWV0YS1kYXRhIG9uIGEgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RmlsZUZldGNoXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPnNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIGF1dGhvclxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgdmVyc2lvblxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlGaWxlRmV0Y2g6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvZmV0Y2gnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGNvcGllcyBvbmUgb3IgbW9yZSByZXBvc2l0b3J5LW1hbmFnZWQgZmlsZXMgdG8gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAqIGRpcmVjdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBhbHJlYWR5IGNvbnRhaW5zIGEgZmlsZW5hbWUgbWF0Y2hpbmcgYW5cbiAgICAgICAgICogaW5jb21pbmcgZmlsZW5hbWUsIHRoZW4gYSBuZXcgdmVyc2lvbiBvZiB0aGUgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeUZpbGVDb3B5XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPnNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc3RpbmF0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGVzdGluYXRpb24gdXNlciBkaXJlY3RvcnkgaW5cbiAgICAgICAgICogICAgICAgdGhlIHJlcG9zaXRvcnlcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgdmVyc2lvblxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZXJlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBuZXcgZmlsZW5hbWVzIGZvciBjb3BpZWQgZmlsZXNcbiAgICAgICAgICogICAgICAgaWRlbnRpZmllZCBvbiBmaWxlbmFtZSBwYXJhbWV0ZXJcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZUNvcHk6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvY29weScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgbW92ZXMgb25lIG9yIG1vcmUgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGVzIHRvIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgKiBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgYWxyZWFkeSBjb250YWlucyBhIGZpbGVuYW1lIG1hdGNoaW5nIGFuXG4gICAgICAgICAqIGluY29taW5nIGZpbGVuYW1lLCB0aGVuIGEgbmV3IHZlcnNpb24gb2YgdGhlIGZpbGUgaXMgYXV0b21hdGljYWxseSBjcmVhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlTW92ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD5zcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXN0aW5hdGlvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRlc3RpbmF0aW9uIHVzZXIgZGlyZWN0b3J5IGluXG4gICAgICAgICAqICAgICAgIHRoZSByZXBvc2l0b3J5XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD52ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIHZlcnNpb25cbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZU1vdmU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvbW92ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gUmVwb3NpdG9yeSBEaXJlY3RvcnkgQVBJc1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBsaXN0cyByZXBvc2l0b3J5LW1hbmFnZWQgZGlyZWN0b3JpZXMuXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIGEgbGlzdCBvZiB0aGUgY2FsbGVyJ3MgdXNlciBkaXJlY3RvcmllcyAoIHJvb3QgYW5kIGN1c3RvbSApIGFyZVxuICAgICAgICAgKiByZXR1cm5lZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgdXNlcmZpbGVzIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQsIHRoZSBmaWxlcyBpbiBhbGwgb2YgdGhlIGNhbGxlcidzXG4gICAgICAgICAqIHVzZXIgZGlyZWN0b3JpZXMgYXJlIGxpc3RlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwLiBOb3RlLCBkZXBlbmRpbmcgb24gdGhlXG4gICAgICAgICAqIG51bWJlciBvZiBmaWxlcyBvd25lZCBieSB0aGUgY2FsbGVyLCB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIGVuYWJsZWQgdGhlXG4gICAgICAgICAqIHJlc3BvbnNlIG1hcmt1cCByZXR1cm5lZCBvbiB0aGlzIGNhbGwgY2FuIGJlIGEgdmVyYm9zZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGRpcmVjdG9yeSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkIHRoZW4gb25seSB0aGUgZmlsZXMgaW4gdGhlXG4gICAgICAgICAqIGRpcmVjdG9yeSBpbmRpY2F0ZWQgYXJlIHJldHVybmVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQgdG8gcmV0dXJuIGZpbGVzIGluIHRoZSBjYWxsZXIncyBhcmNoaXZlZFxuICAgICAgICAgKiBkaXJlY3RvcmllcyBhbmQvb3IgZmlsZXMgaW4gdGhlIFJlc3RyaWN0ZWQgLCBTaGFyZWQgYW5kIFB1YmxpYyBzeXN0ZW1cbiAgICAgICAgICogZGlyZWN0b3JpZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IFRoZSBtZXRhZGF0YSBwcm9wZXJ0eSBpbiB0aGUgcmVzcG9uc2UgbWFya3VwIG9uIHRoaXMgY2FsbCBpcyBwcm92aWRlZFxuICAgICAgICAgKiBhcyBhIGNvbnZlbmllbmNlIGZvciBjbGllbnQgYXBwbGljYXRpb24gZGV2ZWxvcGVycy4gSXQgcHJvdmlkZXMgYSBjb21wbGV0ZVxuICAgICAgICAgKiBsaXN0IGZvIHRoZSB1c2VyIGRpcmVjdG9yaWVzIGF2YWlsYWJsZSB0byB0aGUgY3VycmVudCBjYWxsZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeURpcmVjdG9yeUxpc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD51c2VyZmlsZXM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgc3BlY2lmaWVkLCBmaWxlcyBpbiBhbGwgdXNlciBkaXJlY3RvcmllcyBhcmUgbGlzdGVkIGluXG4gICAgICAgICAqICAgICAgIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hcmNoaXZlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCBmaWxlcyBmb3VuZCBpbiBhcmNoaXZlZCBkaXJlY3RvcmllcyBhcmUgaW5jbHVkZWRcbiAgICAgICAgICogICAgICAgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIGZpbGVzIHRoYXQgYXJlIHJlc3RyaWN0ZWQgYnV0IHZpc2libGUgb3Igc2hhcmVkXG4gICAgICAgICAqICAgICAgIGJ5IG90aGVyIHVzZXJzIGFyZSBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wdWJsaXNoZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgZmlsZXMgdGhhdCBhcmUgcHVibGlzaGVkIGJ5IG90aGVyIHVzZXJzIGFyZVxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeUxpc3Q6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9saXN0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBjcmVhdGVzIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIGN1c3RvbSBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBuYW1lIG9mIHRoZSBuZXcgY3VzdG9tIGRpcmVjdG9yeSBpcyBhbHJlYWR5IGluIHVzZSBieSB0aGUgY2FsbGVyIHRoZVxuICAgICAgICAgKiByZXNwb25zZSBtYXJrdXAgd2lsbCBpbmRpY2F0ZSBhbiBhcHByb3ByaWF0ZSBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RGlyZWN0b3J5TGlzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeUNyZWF0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2NyZWF0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgcmVuYW1lcyBhbiBleGlzdGluZyByZXBvc2l0b3J5LW1hbmFnZWQgdXNlciBkaXJlY3RvcnlcbiAgICAgICAgICogKCBjdXN0b20gb3IgYXJjaGl2ZWQgKS4gV2hlbiByZW5hbWluZyBhIHVzZXIgZGlyZWN0b3J5LCBhbGwgZmlsZXMgaW4gdGhlXG4gICAgICAgICAqIHNvdXJjZSBkaXJlY3RvcnkgYXJlIGF1dG9tYXRpY2FsbHkgbW92ZWQgdG8gdGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeS4gSWZcbiAgICAgICAgICogdGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBhbHJlYWR5IGV4aXN0cyB0aGUgY2FsbCB3aWxsIGJlIHJlamVjdGVkIGFuZCB0aGVcbiAgICAgICAgICogcmVzcG9uc2UgbWFya3VwIHdpbGwgaW5kaWNhdGUgYW4gYXBwcm9wcmlhdGUgZXJyb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIFlvdSBjYW4gdXNlIHRoaXMgY2FsbCB0byBjb252ZXJ0IGFuIGFyY2hpdmVkIGRpcmVjdG9yeSBiYWNrIGludG8gYSBjdXN0b21cbiAgICAgICAgICogZGlyZWN0b3J5LCBlc3NlbnRpYWxseSB1bmFyY2hpdmluZyB0aGUgYXJjaGl2ZWQgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBZb3UgY2FuIG5vdCByZW5hbWUgdGhlIHJvb3QgZGlyZWN0b3J5LiBUbyBtb3ZlIGZpbGVzIGZyb20gdGhlIHJvb3RcbiAgICAgICAgICogZGlyZWN0b3J5IHVzZSB0aGUgL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvbW92ZSBjYWxsLlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPkltcG9ydGFudDo8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBjYWxsIHdpbGwgb25seSBtb3ZlIGZpbGVzIHRoYXQgYXJlIG93bmVkIGJ5IGEgc2luZ2xlIGF1dGhvciB0byB0aGVcbiAgICAgICAgICogZGVzdGluYXRpb24gZGlyZWN0b3J5LiBJZiBhIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5XG4gICAgICAgICAqIGhhcyBtdWx0aXBsZSBhdXRob3JzLCBhcyBhIHJlc3VsdCBvZiBjb2xsYWJvcmF0aW9uIHVzaW5nIHRoZVxuICAgICAgICAgKiAvci9yZXBvc2l0b3J5L2ZpbGUvZ3JhbnQgY2FsbCwgdGhlIGZpbGUgd2lsbCBub3QgYmUgbW92ZWQgdG8gdGhlXG4gICAgICAgICAqIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBhbmQgYSB3YXJuaW5nIHRvIHRoYXQgYWZmZWN0IHdpbGwgYmUgaW5kaWNhdGVkIGluIHRoZVxuICAgICAgICAgKiByZXNwb25zZSBtYXJrdXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeURpcmVjdG9yeVJlbmFtZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXN0aW5hdGlvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5ldyBuYW1lIGZvciB0aGUgZGVzdGluYXRpb24gY3VzdG9tIGRpcmVjdG9yeVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlEaXJlY3RvcnlSZW5hbWU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3JlbmFtZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBcbiAgICAgICAgICogVGhpcyBjYWxsIGNvcGllcyBvbmUgb3IgbW9yZSByZXBvc2l0b3J5LW1hbmFnZWQgZmlsZXMgZnJvbSBhIHNvdXJjZSB1c2VyXG4gICAgICAgICAqIGRpcmVjdG9yeSB0byBhIGRlc3RpbmF0aW9uIHVzZXIgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgZmlsZW5hbWUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCwgb25seSB0aG9zZSBmaWxlcyBpbmRpY2F0ZWQgb24gdGhhdFxuICAgICAgICAgKiBwYXJhbWV0ZXIgYXJlIGNvcGllZC4gT3RoZXJ3aXNlLCBhbGwgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlXG4gICAgICAgICAqIGNvcGllZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZW5zdXJlIGNvcHlpbmcgZmlsZXMgZG9lcyBub3QgYWNjaWRlbnRhbGx5IG92ZXJ3cml0ZSBhbnkgZXhpc3RpbmcgZmlsZXNcbiAgICAgICAgICogaW4gdGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSwgYWxsIGNvcGllZCBmaWxlcyBhcmUgY3JlYXRlZCBhcyBuZXcgdmVyc2lvbnNcbiAgICAgICAgICogaW4gdGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RGlyZWN0b3J5Q29weVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXN0aW5hdGlvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5ldyBuYW1lIGZvciB0aGUgZGVzdGluYXRpb24gY3VzdG9tIGRpcmVjdG9yeVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZmlsZW5hbWVzIHRvIGJlIGNvcGllZC4gSWYgb21pdHRlZCxcbiAgICAgICAgICogICAgICAgYWxsIGZpbGVzIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5IGFyZSBjb3BpZWRcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVyZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgbmV3IGZpbGVuYW1lcyBmb3IgY29waWVkIGZpbGVzXG4gICAgICAgICAqICAgICAgIGlkZW50aWZpZWQgb24gZmlsZW5hbWUgcGFyYW1ldGVyXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeUNvcHk6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9jb3B5JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBtb3ZlcyBvbmUgb3IgbW9yZSByZXBvc2l0b3J5LW1hbmFnZWQgZmlsZXMgZnJvbSBhIHNvdXJjZSB1c2VyXG4gICAgICAgICAqIGRpcmVjdG9yeSB0byBhIGRlc3RpbmF0aW9uIHVzZXIgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgZmlsZW5hbWUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCwgb25seSB0aG9zZSBmaWxlcyBpbmRpY2F0ZWQgb24gdGhhdFxuICAgICAgICAgKiBwYXJhbWV0ZXIgYXJlIG1vdmVkLiBPdGhlcndpc2UsIGFsbCBmaWxlcyBpbiB0aGUgc291cmNlIGRpcmVjdG9yeSBhcmUgbW92ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGVuc3VyZSBtb3ZpbmcgZmlsZXMgZG9lcyBub3QgYWNjaWRlbnRhbGx5IG92ZXJ3cml0ZSBhbnkgZXhpc3RpbmcgZmlsZXNcbiAgICAgICAgICogaW4gdGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSwgYWxsIG1vdmVkIGZpbGVzIGFyZSBjcmVhdGVkIGFzIG5ldyB2ZXJzaW9uc1xuICAgICAgICAgKiBpbiB0aGUgZGVzdGluYXRpb24gZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPkltcG9ydGFudDo8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBjYWxsIHdpbGwgb25seSBtb3ZlIGZpbGVzIHRoYXQgYXJlIG93bmVkIGJ5IGEgc2luZ2xlIGF1dGhvciB0byB0aGVcbiAgICAgICAgICogZGVzdGluYXRpb24gZGlyZWN0b3J5LiBJZiBhIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5XG4gICAgICAgICAqIGhhcyBtdWx0aXBsZSBhdXRob3JzLCBhcyByZXN1bHQgb2YgY29sbGFib3JhdGlvbiB1c2luZyB0aGVcbiAgICAgICAgICogL3IvcmVwb3NpdG9yeS9maWxlL2dyYW50IGNhbGwsIHRoZSBmaWxlIHdpbGwgbm90IGJlIG1vdmVkIHRvIHRoZVxuICAgICAgICAgKiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgYW5kIGEgd2FybmluZyB0byB0aGF0IGFmZmVjdCB3aWxsIGJlIGluZGljYXRlZCBpbiB0aGVcbiAgICAgICAgICogcmVzcG9uc2UgbWFya3VwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlEaXJlY3RvcnlNb3ZlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc3RpbmF0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgbmV3IG5hbWUgZm9yIHRoZSBkZXN0aW5hdGlvbiBjdXN0b20gZGlyZWN0b3J5XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBmaWxlbmFtZXMgdG8gYmUgY29waWVkLiBJZiBvbWl0dGVkLFxuICAgICAgICAgKiAgICAgICBhbGwgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlIGNvcGllZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlEaXJlY3RvcnlNb3ZlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvbW92ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdXBkYXRlcyByZXBvc2l0b3J5LW1hbmFnZWQgZmlsZSBhY2Nlc3MgY29udHJvbHMgYnkgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgZmlsZW5hbWUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCwgb25seSB0aG9zZSBmaWxlcyBpbmRpY2F0ZWQgb24gdGhhdFxuICAgICAgICAgKiBwYXJhbWV0ZXIgYXJlIHVwZGF0ZWQuIE90aGVyd2lzZSwgYWxsIGZpbGVzIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5IGFyZVxuICAgICAgICAgKiB1cGRhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlEaXJlY3RvcnlVcGRhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZmlsZW5hbWVzIHRvIGJlIGNvcGllZC4gSWYgb21pdHRlZCxcbiAgICAgICAgICogICAgICAgYWxsIGZpbGVzIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5IGFyZSBjb3BpZWRcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJlc3RyaWN0ZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBuZXcgbmFtZSBmb3IgdGhlIGRlc3RpbmF0aW9uIGN1c3RvbSBkaXJlY3RvcnlcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZmlsZXMgYXJlIHNoYXJlZCBhbmQgdmlzaWJsZSB0b1xuICAgICAgICAgKiAgICAgICBhdXRoZW50aWNhdGVkIHVzZXJzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wdWJsaXNoZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGZpbGVzIGFyZSBwdWJsaXNoZWQgYW5kIHZpc2libGUgdG9cbiAgICAgICAgICogICAgICAgYXV0aGVudGljYXRlZCBhbmQgYW5vbnltb3VzIHVzZXJzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeVVwZGF0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3VwZGF0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgYXJjaGl2ZXMgb25lIG9yIG1vcmUgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGVzIGZyb20gYSBzb3VyY2UgdXNlclxuICAgICAgICAgKiBkaXJlY3RvcnkgKCByb290IG9yIGN1c3RvbSApIHRvIGFuIGFyY2hpdmUgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgdmFsdWUgb2YgdGhlIGFyY2hpdmUgcGFyYW1ldGVyIGluZGljYXRlcyBhbiBleGlzdGluZyBhcmNoaXZlXG4gICAgICAgICAqIGRpcmVjdG9yeSB0aGVuIHRoZSBmaWxlcyBpbiB0aGUgc291cmNlIGRpcmVjdG9yeSBhcmUgYWRkZWQgdG8gdGhlIGV4aXN0aW5nXG4gICAgICAgICAqIGFyY2hpdmUuIE90aGVyd2lzZSwgYSBuZXcgYXJjaGl2ZSBkaXJlY3RvcnkgaXMgYXV0b21hdGljYWxseSBjcmVhdGVkIG9uXG4gICAgICAgICAqIGJlaGFsZiBvZiB0aGUgY2FsbGVyLiBBcmNoaXZlZCBkaXJlY3RvcmllcyBhdXRvbWF0aWNhbGx5IGhhdmUgYSAuYXJjaGl2ZVxuICAgICAgICAgKiBwb3N0Zml4IGFwcGVuZGVkIHRvIHRoZWlyIG5hbWUgaWYgaXQgaXMgbm90IHN1cHBsaWVkIG9uIHRoZSBhcmNoaXZlXG4gICAgICAgICAqIHBhcmFtZXRlciB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYWxsIG9mIHRoZSBmaWxlcyBpbiB0aGUgc291cmNlIGRpcmVjdG9yeSBhcmUgc3VjY2Vzc2Z1bGx5IGFyY2hpdmVkLCB0aGVcbiAgICAgICAgICogc291cmNlIGRpcmVjdG9yeSBpcyBhdXRvbWF0aWNhbGx5IGRlbGV0ZWQgZnJvbSB0aGUgcmVwb3NpdG9yeS4gSWYgdGhlXG4gICAgICAgICAqIHNvdXJjZSBkaXJlY3Rvcnkgd2FzIHJvb3QgLCBhbiBlbXB0eSByb290IGRpcmVjdG9yeSBpcyBwcmVzZXJ2ZWQuIElmIGFueSBvZlxuICAgICAgICAgKiB0aGUgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlIHNraXBwZWQgb3IgY2FuIG5vdCBiZSBhcmNoaXZlZCAoc2VlXG4gICAgICAgICAqIGZvbGxvd2luZyBub3RlKSwgdGhvc2UgZmlsZXMgYW5kIHRoZSBzb3VyY2UgZGlyZWN0b3J5IGFyZSBwcmVzZXJ2ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+SW1wb3J0YW50Ojwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGNhbGwgd2lsbCBvbmx5IGFyY2hpdmUgZmlsZXMgdGhhdCBhcmUgb3duZWQgYnkgYSBzaW5nbGUgYXV0aG9yIHRvIHRoZVxuICAgICAgICAgKiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkuIElmIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGUgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnlcbiAgICAgICAgICogaGFzIG11bHRpcGxlIGF1dGhvcnMsIGFzIGEgcmVzdWx0IG9mIGNvbGxhYm9yYXRpb24gdXNpbmcgdGhlXG4gICAgICAgICAqIC9yL3JlcG9zaXRvcnkvZmlsZS9ncmFudCBjYWxsLCB0aGUgZmlsZSB3aWxsIG5vdCBiZSBhcmNoaXZlZCB0byB0aGVcbiAgICAgICAgICogZGVzdGluYXRpb24gZGlyZWN0b3J5IGFuZCBhIHdhcm5pbmcgdG8gdGhhdCBhZmZlY3Qgd2lsbCBiZSBpbmRpY2F0ZWQgaW4gdGhlXG4gICAgICAgICAqIHJlc3BvbnNlIG1hcmt1cC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RGlyZWN0b3J5QXJjaGl2ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBmaWxlbmFtZXMgdG8gYmUgY29waWVkLiBJZiBvbWl0dGVkLFxuICAgICAgICAgKiAgICAgICBhbGwgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlIGNvcGllZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5ldyBuYW1lIGZvciB0aGUgZGVzdGluYXRpb24gY3VzdG9tIGRpcmVjdG9yeVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBmaWxlcyBhcmUgc2hhcmVkIGFuZCB2aXNpYmxlIHRvXG4gICAgICAgICAqICAgICAgIGF1dGhlbnRpY2F0ZWQgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZmlsZXMgYXJlIHB1Ymxpc2hlZCBhbmQgdmlzaWJsZSB0b1xuICAgICAgICAgKiAgICAgICBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RGlyZWN0b3J5QXJjaGl2ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvYXJjaGl2ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdXBsb2FkcyBhIHNldCBvZiBmaWxlcyBpbiBhIHppcCBhcmNoaXZlIGludG8gYW4gZXhpc3RpbmdcbiAgICAgICAgICogcmVwb3NpdG9yeS1tYW5hZ2VkIHVzZXIgZGlyZWN0b3J5ICggcm9vdCAsIGN1c3RvbSBvciBhcmNoaXZlZCApLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlEaXJlY3RvcnlVcGxvYWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAuLi56aXAgYXJjaGl2ZSBmaWxlIGNvbnRlbnQuLi5cbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBkZXNjcmlwdGlvbiB0byBhc3NvY2lhdGUgd2l0aCB0aGUgdXBsb2FkZWQgZmlsZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGFnIHdvcmRzIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSByZXBvc2l0b3J5IGZpbGVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJlc3RyaWN0ZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBuZXcgbmFtZSBmb3IgdGhlIGRlc3RpbmF0aW9uIGN1c3RvbSBkaXJlY3RvcnlcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZmlsZXMgYXJlIHNoYXJlZCBhbmQgdmlzaWJsZSB0b1xuICAgICAgICAgKiAgICAgICBhdXRoZW50aWNhdGVkIHVzZXJzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wdWJsaXNoZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGZpbGVzIGFyZSBwdWJsaXNoZWQgYW5kIHZpc2libGUgdG9cbiAgICAgICAgICogICAgICAgYXV0aGVudGljYXRlZCBhbmQgYW5vbnltb3VzIHVzZXJzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXd2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCB0aGUgcmVwb3NpdG9yeSB3aWxsIGNyZWF0ZSBuZXdcbiAgICAgICAgICogICAgICAgdmVyc2lvbiByYXRoZXIgdGhhbiBvdmVyd3JpdGVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld3ZlcnNpb25tc2c8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgbmV3dmVyc2lvbiBpcyB0cnVlLCBtZXNzYWdlIHRvIGFzc29jaWF0ZSB3aXRoIG5ld1xuICAgICAgICAgKiAgICAgICB2ZXJzaW9uXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeVVwbG9hZDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgICAgICAgY29uZmlnLmZvcm1hdCA9ICd0ZXh0JztcbiAgICAgICAgICAgIHZhciBpb0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjb25maWcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgICAgICBpZDogY29uZmlnLmZvcm1JZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IGNhbGxiYWNrXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3VwbG9hZCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZG93bmxvYWRzIG9uZSBvciBtb3JlIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlcyBmcm9tIGEgZGlyZWN0b3J5XG4gICAgICAgICAqIGluIHRoZSByZXBvc2l0b3J5LiBUaGUgcmVzcG9uc2UgdHlwZSBvbiB0aGlzIGNhbGwgaXMgYSB6aXAgYXJjaGl2ZSBmaWxlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgZmlsZW5hbWUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCwgb25seSB0aG9zZSBmaWxlcyBpbmRpY2F0ZWQgb24gdGhhdFxuICAgICAgICAgKiBwYXJhbWV0ZXIgYXJlIGRvd25sb2FkZWQuIE90aGVyd2lzZSwgYWxsIGZpbGVzIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5IGFyZVxuICAgICAgICAgKiBkb3dubG9hZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlEaXJlY3RvcnlEb3dubG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBmaWxlbmFtZXMgdG8gYmUgY29waWVkLiBJZiBvbWl0dGVkLFxuICAgICAgICAgKiAgICAgICBhbGwgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlIGNvcGllZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlEaXJlY3RvcnlEb3dubG9hZDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2Rvd25sb2FkJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBkZWxldGVzIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHVzZXIgZGlyZWN0b3J5ICggcm9vdCAsIGN1c3RvbSBvclxuICAgICAgICAgKiBhcmNoaXZlZCApLlxuICAgICAgICAgKlxuICAgICAgICAgKiBXaGVuIGRlbGV0aW5nIGEgdXNlciBkaXJlY3RvcnksIGFsbCBmaWxlcyBpbiB0aGUgZGlyZWN0b3J5IGFyZVxuICAgICAgICAgKiBhdXRvbWF0aWNhbGx5IGRlbGV0ZWQgYWxvbmcgd2l0aCB0aGUgZGlyZWN0b3J5LiBJZiB0aGUgdGFyZ2V0IGRpcmVjdG9yeSBpc1xuICAgICAgICAgKiByb290LCBhbiBlbXB0eSByb290IGRpcmVjdG9yeSBpcyBwcmVzZXJ2ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeURpcmVjdG9yeURlbGV0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeURlbGV0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2RlbGV0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gSm9iIEFQSXNcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8qKiAgXG4gICAgICAgICAqIFRoaXMgY2FsbCBsaXN0cyBqb2JzIGZvciB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlci5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIG9wZW5vbmx5IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzZWUgb25seSB0aG9zZSBqb2JzIGluIGFuIG9wZW5cbiAgICAgICAgICogc3RhdGUuIFRoZSBzZXQgb2Ygam9iIG9wZW4gc3RhdGVzIGFyZSBzaG93biBoZXJlOlxuICAgICAgICAgKlxuICAgICAgICAgKiA8dWw+XG4gICAgICAgICAqICA8bGk+U2NoZWR1bGVkIDogam9iIGlzIHNjaGVkdWxlZCBidXQgbm90IHlldCBxdWV1ZWQgZm9yIHJ1bm5pbmcuPC9saT5cbiAgICAgICAgICogIDxsaT5RdWV1ZWQgOiBqb2IgaXMgcXVldWVkIGZvciBydW5uaW5nLjwvbGk+XG4gICAgICAgICAqICA8bGk+UnVubmluZyA6IGpvYiBpcyBydW5uaW5nLjwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxibG9ja3F1b3RlPlxuICAgICAgICAgKiAgICBJbXBvcnRhbnQhIEFueSBvcGVuIGpvYiBjYW4gYmUgY2FuY2VsbGVkIHVzaW5nIHRoZVxuICAgICAgICAgKiAgICA8YSBocmVmPVwiI21ldGhvZF9qb2JDYW5jZWxcIj5qb2JDYW5jZWw8L2E+IGNhbGwuXG4gICAgICAgICAqIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBqb2JMaXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+b3Blbm9ubHk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgb25seSBqb2JzIGluIGFuIG9wZW4tc3RhdGUgYXJlIGxpc3RlZCBpbiB0aGVcbiAgICAgICAgICogICAgICAgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5leHRlbmRlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBJZiB0cnVlLCBhZGRpdGlvbmFsIGRhdGEgcHJvcGVydGllcyBkZXNjcmliaW5nIGVhY2ggam9iXG4gICAgICAgICAqICAgICAgIGFyZSBsaXN0ZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGpvYkxpc3Q6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9qb2IvbGlzdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgc3VibWl0cyBhIGpvYiBmb3IgYmFja2dyb3VuZCBleGVjdXRpb24gb24gYmVoYWxmIG9mIHRoZSB1c2VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBzdWJtaXQgdGhlIGV4ZWN1dGlvbiBvZiBhbiBhcmJpdHJhcnkgYmxvY2sgb2YgUiBjb2RlIHRoZSBjYWxsZXIgbXVzdFxuICAgICAgICAgKiBwcm92aWRlIGEgdmFsdWUgb24gdGhlIGNvZGUgcGFyYW1ldGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBzdWJtaXQgdGhlIGV4ZWN1dGlvbiBvZiBhIHNpbmdsZSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0IHRoZSBjYWxsZXJcbiAgICAgICAgICogbXVzdCBwcm92aWRlIHBhcmFtZXRlciB2YWx1ZXMgZm9yIHJzY3JpcHRuYW1lICwgcnNjcmlwdGF1dGhvciBhbmRcbiAgICAgICAgICogb3B0aW9uYWxseSByc2NyaXB0dmVyc2lvbiAuIFRvIHN1Ym1pdCB0aGUgZXhlY3V0aW9uIG9mIGEgY2hhaW4gb2ZcbiAgICAgICAgICogcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdHMgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdFxuICAgICAgICAgKiBvZiB2YWx1ZXMgb24gdGhlIHJzY3JpcHRuYW1lLCwgX3JzY3JpcHRhdXRob3IgYW5kIG9wdGlvbmFsbHkgcnNjcmlwdHZlcnNpb25cbiAgICAgICAgICogcGFyYW1ldGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogVG8gc3VibWl0IHRoZSBleGVjdXRpb24gb2YgYSBzaW5nbGUgZXh0ZXJuYWwgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdFxuICAgICAgICAgKiBwcm92aWRlIGEgdmFsaWQgVVJMIG9yIGZpbGUgcGF0aCB1c2luZyB0aGUgZXh0ZXJuYWxzb3VyY2UgcGFyYW1ldGVyLiBUb1xuICAgICAgICAgKiBzdWJtaXQgdGhlIGV4ZWN1dGlvbiBvZiBhIGNoYWluIG9mIGV4dGVybmFsIHNjcmlwdHMgdGhlIGNhbGxlciBtdXN0XG4gICAgICAgICAqIHByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2YWx1ZXMgb24gdGhlIGV4dGVybmFsc291cmNlIHBhcmFtZXRlci5cbiAgICAgICAgICogTm90ZSwgdG8gc3VibWl0IHRoZSBleGVjdXRpb24gb2YgYW4gZXh0ZXJuYWwgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdCBoYXZlXG4gICAgICAgICAqIFBPV0VSX1VTRVIgcHJpdmlsZWdlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogQSBjaGFpbmVkIGV4ZWN1dGlvbiBleGVjdXRlcyBlYWNoIG9mIHRoZSBzY3JpcHRzIGlkZW50aWZpZWQgb24gdGhlXG4gICAgICAgICAqIGNhbGwgaW4gYSBzZXF1ZW50aWFsIGZhc2hpb24gb24gdGhlIFIgc2Vzc2lvbiBmb3IgdGhlIGpvYiwgd2l0aCBleGVjdXRpb25cbiAgICAgICAgICogb2NjdXJpbmcgaW4gdGhlIG9yZGVyIHNwZWNpZmllZCBvbiB0aGUgcGFyYW1ldGVyIGxpc3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFBsZWFzZSBub3QgdGhlIGZvbGxvd2luZyBwcmUgYW5kIHBvc3QgZXhlY3V0aW9uIHBhcmFtZXRlcnM6XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+UHJlLWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGlucHV0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gcGFzcyBSZXZvRGVwbG95Ui1lbmNvZGVkXG4gICAgICAgICAqICAgICAgIFIgb2JqZWN0IHZhbHVlcyBhcyBpbnB1dHMuIFRoZXNlIGlucHV0cyBhcmUgdHVybmVkIGludG8gUiBvYmplY3RzXG4gICAgICAgICAqICAgICAgIGluIHRoZSB3b3Jrc3BhY2UgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBwcmVsb2FkZmlsZSBwYXJhbWV0ZXJzIGFsbG93cyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmVcbiAgICAgICAgICogICAgICAgZmlsZXMgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBiZWZvcmUgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRvYmplY3QgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmVcbiAgICAgICAgICogICAgICAgYmluYXJ5IFIgb2JqZWN0cyAoLnJEYXRhKSBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtzcGFjZVxuICAgICAgICAgKiAgICAgICBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGFkb3B0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIGEgcHJlLWV4aXN0aW5nXG4gICAgICAgICAqICAgICAgIHByb2plY3Qgd29ya3NwYWNlLCBwcm9qZWN0IHdvcmtpbmcgZGlyZWN0b3J5IGFuZC9vciBwcm9qZWN0IHBhY2thZ2VcbiAgICAgICAgICogICAgICAgZGVwZW5kZW5jaWVzIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5Qb3N0LWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlZmlsZSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlclxuICAgICAgICAgKiAgICAgICB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVvYmplY3QgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiB3b3Jrc3BhY2Ugb2JqZWN0cyB0byBiZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jld29ya3NwYWNlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzdG9yZSB0aGUgZW50aXJlXG4gICAgICAgICAqICAgICAgIHdvcmtzcGFjZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVkaXJlY3RvcnkgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSB0YXJnZXRcbiAgICAgICAgICogICAgICAgcmVwb3NpdG9yeSBkaXJlY3RvcnkgZm9yIHN0b3JlZCBmaWxlcyBhbmQgb2JqZWN0cyBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVuZXd2ZXJzaW9uIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBjcmVhdGUgbmV3XG4gICAgICAgICAqICAgICAgIHZlcnNpb25zIG9mIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICAgICBjb21wbGV0ZXMuIEJ5IGRlZmF1bHQsIHN0b3JlZCBmaWxlcyBvdmVyd3JpdGUgYW55IHByZS1leGlzdGluZyBmaWxlXG4gICAgICAgICAqICAgICAgIGJ5IHRoZSBzYW1lIG5hbWUuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlcHVibGljIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBhc3NpZ24gcHVibGljIGFjY2Vzc1xuICAgICAgICAgKiAgICAgICB0byBlYWNoIHN0b3JlZCBmaWxlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW5vcHJvamVjdCBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc2tpcCB0aGVcbiAgICAgICAgICogICAgICAgcGVyc2lzdGVuY2UtdG8tcHJvamVjdCBzdGVwIGFmdGVyIHRoZSBleGVjdXRpb24uXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2Qgam9iU3VibWl0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5qb2IgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGpvYiBkZXNjcmlwdGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jb2RlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUiBjb2RlIHRvIGV4ZWN1dGUgb24gam9iPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cnNjcmlwdG5hbWU8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJzY3JpcHRkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5LW1hbmFnZWQgZGlyZWN0b3JpZXMgZm9yIHNjcmlwdHMsIGRlZmF1bHRzIHRvIHJvb3Q8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5yc2NyaXB0YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXJzY3JpcHRuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cnNjcmlwdHZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1yc2NyaXB0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmV4dGVybmFsc291cmNlPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBVUkxzIG9yIGZpbGUgcGF0aHMgdG8gZXh0ZXJuYWwgc2NyaXB0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgUmV2b0RlcGxveVItZW5jb2RlZCBzY3JpcHQgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNzdmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHByaW1pdGl2ZSBuYW1lL3ZhbHVlIGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnByZWxvYWRmaWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5wcmVsb2FkZmlsZWF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5wcmVsb2FkZmlsZXZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5wcmVsb2Fkb2JqZWN0bmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBvYmplY3QgKC5yRGF0YSkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cHJlbG9hZG9iamVjdGF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2Fkb2JqZWN0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnByZWxvYWRvYmplY3R2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItb2JqZWN0LXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+YWRvcHR3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIHdvcmtzcGFjZSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+YWRvcHRkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIGRpcmVjdG9yeSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+YWRvcHRwYWNrYWdlczwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggcGFja2FnZSBkZXBlbmRlbmNpZXMgYXJlIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5wcmlvcml0eTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBzY2hlZHVsaW5nIHByaW9yaXR5IGZvciB0aGUgam9iOiBsb3cgKGRlZmF1bHQpLCBtZWRpdW0gb3IgaGlnaDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnRhZzwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgdGFnIHRoYXQgbGFiZWxzIHRoZSBleGVjdXRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5lY2hvb2ZmPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSBSIGNvbW1hbmRzIHdpbGwgbm90IGFwcGVhciBpbiB0aGUgY29uc29sZSBvdXRwdXRcbiAgICAgICAgICogICAgICAgc2F2ZWQgb24gdGhlIHByb2plY3QgZXhlY3V0aW9uIGhpc3RvcnkgZm9yIHRoZSBqb2JcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+Z3JhcGhpY3M8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgUiBncmFwaGljcyBkZXZpY2UgZm9yIGV4ZWN1dGlvbjogcG5nIG9yIHN2ZzwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmdyYXBoaWNzd2lkdGg8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgd2lkdGggZm9yIFIgZ3JhcGhpY3MgZGV2aWNlIGltYWdlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmdyYXBoaWNzaGVpZ2h0PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIGhlaWdodCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+c3RvcmVmaWxlPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB3b3JraW5nIGRpcmVjdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5zdG9yZW9iamVjdDwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya3NwYWNlIG9iamVjdCBuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnN0b3Jld29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBmaWxlbmFtZSAoLnJEYXRhKSB3aGVyZSB3b3Jrc3BhY2UgY29udGVudHMgd2lsbCBiZSBzYXZlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnN0b3JlbmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGVuc3VyZXMgZWFjaCBmaWxlIHN0b3JlZCBpbiByZXBvc2l0b3J5IHJlc3VsdHMgaW4gbmV3IHZlcnNpb24gYmVpbmcgY3JlYXRlZCBpZiBuZWVkZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5zdG9yZXB1YmxpYzwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHB1Ymxpc2hlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+c3RvcmVub3Byb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBubyBwcm9qZWN0IHBlcnNpc3RlbmNlIGZvbGxvd2luZyBqb2IgZXhlY3V0aW9uPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBqb2JTdWJtaXQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9qb2Ivc3VibWl0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBzY2hlZHVsZXMgYSBqb2IgZm9yIGJhY2tncm91bmQgZXhlY3V0aW9uIG9uIGJlaGFsZiBvZiB0aGUgdXNlci5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHNjaGVkc3RhcnQgcGFyYW1ldGVyIGlkZW50aWZpZXMgdGhlIHN0YXJ0IHRpbWUgZm9yIHRoZSBqb2IuIFRoaXNcbiAgICAgICAgICogcGFyYW1ldGVyIHZhbHVlIGlzIHNwZWNpZmllZCBhcyBVVEMgaW4gbWlsbGlzZWNvbmRzLiBUaGUgc2NoZWRyZXBlYXRcbiAgICAgICAgICogcGFyYW1ldGVyIGluZGljYXRlcyB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBqb2IgaXMgdG8gYmUgcmVwZWF0ZWQsIGFuZCBpZlxuICAgICAgICAgKiBvbWl0dGVkIHRoZSBqb2IgaXMgZXhlY3V0ZWQganVzdCBvbmNlLiBUaGUgc2NoZWRpbnRlcnZhbCBwYXJhbWV0ZXJcbiAgICAgICAgICogaW5kaWNhdGVzIHRoZSBpbnRlcnZhbCwgbWVhc3VyZWQgaW4gbWlsbGlzZWNvbmRzLCBiZXR3ZWVuIHJlcGVhdFxuICAgICAgICAgKiBleGVjdXRpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBzY2hlZHVsZSB0aGUgZXhlY3V0aW9uIG9mIGFuIGFyYml0cmFyeSBibG9jayBvZiBSIGNvZGUgdGhlIGNhbGxlclxuICAgICAgICAgKiBtdXN0IHByb3ZpZGUgYSB2YWx1ZSBvbiB0aGUgY29kZSBwYXJhbWV0ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIHNjaGVkdWxlIHRoZSBleGVjdXRpb24gb2YgYSBzaW5nbGUgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdCB0aGVcbiAgICAgICAgICogY2FsbGVyIG11c3QgcHJvdmlkZSBwYXJhbWV0ZXIgdmFsdWVzIGZvciByc2NyaXB0bmFtZSAsIHJzY3JpcHRhdXRob3IgYW5kXG4gICAgICAgICAqIG9wdGlvbmFsbHkgcnNjcmlwdHZlcnNpb24gLiBUbyBzY2hlZHVsZSB0aGUgZXhlY3V0aW9uIG9mIGEgY2hhaW4gb2ZcbiAgICAgICAgICogcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdHMgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdFxuICAgICAgICAgKiBvZiB2YWx1ZXMgb24gdGhlIHJzY3JpcHRuYW1lLCwgX3JzY3JpcHRhdXRob3IgYW5kIG9wdGlvbmFsbHkgcnNjcmlwdHZlcnNpb25cbiAgICAgICAgICogcGFyYW1ldGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gc2NoZWR1bGUgdGhlIGV4ZWN1dGlvbiBvZiBhIHNpbmdsZSBleHRlcm5hbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0XG4gICAgICAgICAqIHByb3ZpZGUgYSB2YWxpZCBVUkwgb3IgZmlsZSBwYXRoIHVzaW5nIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuIFRvXG4gICAgICAgICAqIHNjaGVkdWxlIHRoZSBleGVjdXRpb24gb2YgYSBjaGFpbiBvZiBleHRlcm5hbCBzY3JpcHRzIHRoZSBjYWxsZXIgbXVzdFxuICAgICAgICAgKiBwcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmFsdWVzIG9uIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuXG4gICAgICAgICAqIE5vdGUsIHRvIHNjaGVkdWxlIHRoZSBleGVjdXRpb24gb2YgYW4gZXh0ZXJuYWwgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdFxuICAgICAgICAgKiBoYXZlIFBPV0VSX1VTRVIgcHJpdmlsZWdlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogQSBjaGFpbmVkIGV4ZWN1dGlvbiBleGVjdXRlcyBlYWNoIG9mIHRoZSBzY3JpcHRzIGlkZW50aWZpZWQgb24gdGhlXG4gICAgICAgICAqIGNhbGwgaW4gYSBzZXF1ZW50aWFsIGZhc2hpb24gb24gdGhlIFIgc2Vzc2lvbiBmb3IgdGhlIGpvYiwgd2l0aFxuICAgICAgICAgKiBleGVjdXRpb24gb2NjdXJpbmcgaW4gdGhlIG9yZGVyIHNwZWNpZmllZCBvbiB0aGUgcGFyYW1ldGVyIGxpc3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFBsZWFzZSBub3QgdGhlIGZvbGxvd2luZyBwcmUgYW5kIHBvc3QgZXhlY3V0aW9uIHBhcmFtZXRlcnM6XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+UHJlLWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGlucHV0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gcGFzcyBSZXZvRGVwbG95Ui1lbmNvZGVkXG4gICAgICAgICAqICAgICAgIFIgb2JqZWN0IHZhbHVlcyBhcyBpbnB1dHMuIFRoZXNlIGlucHV0cyBhcmUgdHVybmVkIGludG8gUiBvYmplY3RzXG4gICAgICAgICAqICAgICAgIGluIHRoZSB3b3Jrc3BhY2UgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBwcmVsb2FkZmlsZSBwYXJhbWV0ZXJzIGFsbG93cyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmVcbiAgICAgICAgICogICAgICAgZmlsZXMgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBiZWZvcmUgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRvYmplY3QgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmVcbiAgICAgICAgICogICAgICAgYmluYXJ5IFIgb2JqZWN0cyAoLnJEYXRhKSBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtzcGFjZVxuICAgICAgICAgKiAgICAgICBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGFkb3B0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIGEgcHJlLWV4aXN0aW5nXG4gICAgICAgICAqICAgICAgIHByb2plY3Qgd29ya3NwYWNlLCBwcm9qZWN0IHdvcmtpbmcgZGlyZWN0b3J5IGFuZC9vciBwcm9qZWN0IHBhY2thZ2VcbiAgICAgICAgICogICAgICAgZGVwZW5kZW5jaWVzIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5Qb3N0LWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlZmlsZSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlclxuICAgICAgICAgKiAgICAgICB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVvYmplY3QgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiB3b3Jrc3BhY2Ugb2JqZWN0cyB0byBiZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jld29ya3NwYWNlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzdG9yZSB0aGUgZW50aXJlXG4gICAgICAgICAqICAgICAgIHdvcmtzcGFjZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVkaXJlY3RvcnkgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSB0YXJnZXRcbiAgICAgICAgICogICAgICAgcmVwb3NpdG9yeSBkaXJlY3RvcnkgZm9yIHN0b3JlZCBmaWxlcyBhbmQgb2JqZWN0cyBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVuZXd2ZXJzaW9uIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBjcmVhdGUgbmV3XG4gICAgICAgICAqICAgICAgIHZlcnNpb25zIG9mIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICAgICBjb21wbGV0ZXMuIEJ5IGRlZmF1bHQsIHN0b3JlZCBmaWxlcyBvdmVyd3JpdGUgYW55IHByZS1leGlzdGluZyBmaWxlXG4gICAgICAgICAqICAgICAgIGJ5IHRoZSBzYW1lIG5hbWUuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlcHVibGljIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBhc3NpZ24gcHVibGljIGFjY2Vzc1xuICAgICAgICAgKiAgICAgICB0byBlYWNoIHN0b3JlZCBmaWxlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW5vcHJvamVjdCBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc2tpcCB0aGVcbiAgICAgICAgICogICAgICAgcGVyc2lzdGVuY2UtdG8tcHJvamVjdCBzdGVwIGFmdGVyIHRoZSBleGVjdXRpb24uXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2Qgam9iU2NoZWR1bGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPmpvYiBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgam9iIGRlc2NyaXB0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNjaGVkc3RhcnQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHN0YXJ0IHRpbWUgZm9yIGpvYjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zY2hlZHJlcGVhdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRpbWVzIGpvYiBpcyB0byBiZSByZXBlYXRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zY2hlZGludGVydmFsPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBpbnRlcnZhbCAobXMpIG9uIHdoaWNoIGpvYiBpcyB0byBiZSByZXBlYXRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jb2RlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUiBjb2RlIHRvIGV4ZWN1dGUgb24gam9iPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJzY3JpcHRuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdCBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cnNjcmlwdGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnktbWFuYWdlZCBkaXJlY3RvcmllcyBmb3Igc2NyaXB0cywgZGVmYXVsdHMgdG8gcm9vdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yc2NyaXB0YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1yc2NyaXB0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yc2NyaXB0dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1yc2NyaXB0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5leHRlcm5hbHNvdXJjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIFVSTHMgb3IgZmlsZSBwYXRocyB0byBleHRlcm5hbCBzY3JpcHRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIFJldm9EZXBsb3lSLWVuY29kZWQgc2NyaXB0IGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jc3ZpbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBwcmltaXRpdmUgbmFtZS92YWx1ZSBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGVhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZXZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItcHJlbG9hZGZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3RuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBvYmplY3QgKC5yRGF0YSkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3RhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3R2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLW9iamVjdC1wcmVsb2Fkb2JqZWN0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdHdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIHdvcmtzcGFjZSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggZGlyZWN0b3J5IGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRwYWNrYWdlczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIHBhY2thZ2UgZGVwZW5kZW5jaWVzIGFyZSB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cHJpb3JpdHk8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgc2NoZWR1bGluZyBwcmlvcml0eSBmb3IgdGhlIGpvYjogbG93IChkZWZhdWx0KSwgbWVkaXVtIG9yIGhpZ2g8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgdGFnIHRoYXQgbGFiZWxzIHRoZSBleGVjdXRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZWNob29mZjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlIFIgY29tbWFuZHMgd2lsbCBub3QgYXBwZWFyIGluIHRoZSBjb25zb2xlIG91dHB1dFxuICAgICAgICAgKiAgICAgICBzYXZlZCBvbiB0aGUgcHJvamVjdCBleGVjdXRpb24gaGlzdG9yeSBmb3IgdGhlIGpvYlxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y29uc29sZW9mZjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlIGNvbnNvbGUgb3V0cHV0IGlzIG5vdCBzYXZlZCBvbiB0aGUgcHJvamVjdFxuICAgICAgICAgKiAgICAgICBleGVjdXRpb24gaGlzdG9yeSBmb3IgdGhlIGpvYlxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3M8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIFIgZ3JhcGhpY3MgZGV2aWNlIGZvciBleGVjdXRpb246IHBuZyBvciBzdmc8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3N3aWR0aDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgd2lkdGggZm9yIFIgZ3JhcGhpY3MgZGV2aWNlIGltYWdlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5ncmFwaGljc2hlaWdodDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgaGVpZ2h0IGZvciBSIGdyYXBoaWNzIGRldmljZSBpbWFnZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVmaWxlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3Jlb2JqZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya3NwYWNlIG9iamVjdCBuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZXdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGZpbGVuYW1lICguckRhdGEpIHdoZXJlIHdvcmtzcGFjZSBjb250ZW50cyB3aWxsIGJlIHNhdmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlbmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBlbnN1cmVzIGVhY2ggZmlsZSBzdG9yZWQgaW4gcmVwb3NpdG9yeSByZXN1bHRzIGluIG5ldyB2ZXJzaW9uIGJlaW5nIGNyZWF0ZWQgaWYgbmVlZGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlcHVibGljPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHB1Ymxpc2hlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3Jlbm9wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIG5vIHByb2plY3QgcGVyc2lzdGVuY2UgZm9sbG93aW5nIGpvYiBleGVjdXRpb248L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGpvYlNjaGVkdWxlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9qb2Ivc2NoZWR1bGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHF1ZXJpZXMgdGhlIGpvYiBzdGF0dXMuIFRoZSBzdGF0dXMgcHJvcGVydHkgd2lsbCBpbmRpY2F0ZSBvbmUgb2ZcbiAgICAgICAgICogdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAgICAgICAqXG4gICAgICAgICAqIFNjaGVkdWxlZCwgUXVldWVkLCBSdW5uaW5nLCBDb21wbGV0ZWQsIENhbmNlbGxpbmcsIENhbmNlbGxlZCwgSW50ZXJydXB0ZWQsXG4gICAgICAgICAqIEFib3J0ZWQsIEZhaWxlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBqb2JRdWVyeVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+am9iPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGpvYiBpZGVudGlmaWVyczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5leHRlbmRlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCBvbmx5IGpvYnMgaW4gYW4gZXh0ZW5kZWQtc3RhdGUgYXJlIGxpc3RlZCBpbiB0aGVcbiAgICAgICAgICogICAgICAgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgam9iUXVlcnk6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9qb2IvcXVlcnknLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGNhbmNlbHMgdGhlIHNwZWNpZmllZCBqb2IuXG4gICAgICAgICAqXG4gICAgICAgICAqIE9ubHkgam9icyBpbiBhbiBvcGVuLXN0YXRlIGNhbiBiZSBjYW5jZWxsZWQuIFRoZSBzZXQgb2Ygam9iIG9wZW4tc3RhdGVzIGFyZVxuICAgICAgICAgKiBzaG93biBoZXJlOlxuICAgICAgICAgKlxuICAgICAgICAgKiA8dWw+XG4gICAgICAgICAqICAgIDxsaT5TY2hlZHVsZWQgOiBqb2IgaXMgc2NoZWR1bGVkIGJ1dCBub3QgeWV0IHF1ZXVlZCBmb3IgcnVubmluZy48L2xpPlxuICAgICAgICAgKiAgICA8bGk+UXVldWVkIDogam9iIGlzIHF1ZXVlZCBmb3IgcnVubmluZy48L2xpPlxuICAgICAgICAgKiAgICA8bGk+UnVubmluZyA6IGpvYiBpcyBydW5uaW5nLjwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqIEBtZXRob2Qgam9iQ2FuY2VsXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+am9iPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGpvYiBpZGVudGlmaWVyczwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgam9iQ2FuY2VsOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3Ivam9iL2xpc3QnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGRlbGV0ZXMgdGhlIHNwZWNpZmllZCBqb2IuXG4gICAgICAgICAqXG4gICAgICAgICAqIE9ubHkgam9icyBpbiBvbmUgb2YgdGhlIGNvbXBsZXRlZC1zdGF0ZXMgY2FuIGJlIGRlbGV0ZWQuIFRoZSBzZXQgb2Ygam9iXG4gICAgICAgICAqIGNvbXBlbHRlZC1zdGF0ZXMgYXJlIHNob3duIGhlcmU6XG4gICAgICAgICAqXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogICAgPGxpPkNvbXBsZXRlZCA6IGpvYiBleGVjdXRpb24gaGFzIHJ1biB0byBzdWNjZXNzZnVsIGNvbXBsZXRpb24uPC9saT5cbiAgICAgICAgICogICAgPGxpPkludGVycnVwdGVkIDogam9iIGV4ZWN1dGlvbiBoYXMgYmVlbiBpbnRlcnJ1cHRlZC48L2xpPlxuICAgICAgICAgKiAgICA8bGk+Q2FuY2VsbGVkIDogam9iIGhhcyBiZWVuIGNhbmNlbGxlZC48L2xpPlxuICAgICAgICAgKiAgICA8bGk+QWJvcnRlZCA6IGpvYiBleGVjdXRpb24gaGFzIGJlZW4gYWJvcnRlZC48L2xpPlxuICAgICAgICAgKiAgICA8bGk+RmFpbGVkIDogam9iIGV4ZWN1dGlvbiBoYXMgcmVzdWx0ZWQgaW4gZmFpbHVyZS48L2xpPlxuICAgICAgICAgKiA8L3VsPlxuICAgICAgICAgKlxuICAgICAgICAgKiBKb2JzIGluIGFuIG9wZW4tc3RhdGUgbXVzdCBmaXJzdCBydW4gdG8gY29tcGxldGlvbiBvciBiZSBjYW5jZWxsZWQgYmVmb3JlXG4gICAgICAgICAqIHRoZXkgYXJlIGVsaWdpYmxlIGZvciBkZWxldGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogPGJsb2NrcXVvdGU+XG4gICAgICAgICAqICAgIEltcG9ydGFudCEgRGVsZXRpbmcgam9icyB3aWxsIG5vdCBkZWxldGUgdGhlIHByb2plY3RzIHRoYXQgcmVzdWx0ZWQgZnJvbVxuICAgICAgICAgKiAgICB0aG9zZSBqb2JzLlxuICAgICAgICAgKiA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2Qgam9iRGVsZXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgPGR0PmpvYjwvZHQ+XG4gICAgICAgICAqICA8ZGQ+c3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygam9iIGlkZW50aWZpZXJzPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBqb2JEZWxldGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9qb2IvZGVsZXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9IC8vIERlcGxveVJcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZXByZWNhdGVkOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSA9IHJlcXVpcmUoJy4vc2VsZmlzaCcpLkJhc2U7XG5cbmZ1bmN0aW9uIGRlYnVnKG1zZykgeyB9XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoe1xuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgdGhpcy5zY29wZSAgPSBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIuICBNdWx0aXBsZSBjYW4gYmUgYWRkZWQgcGVyIG5hbWUuICBBbGlhc2VkIGFzIGBvbmAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZyAgICAgIFxuICAgKi9cbiAgb246IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAobmFtZSBpbiB0aGlzLmV2ZW50cyA9PT0gZmFsc2UpIHsgdGhpcy5ldmVudHNbbmFtZV0gPSBbXTsgfSAgICAgICAgXG5cbiAgICB0aGlzLmV2ZW50c1tuYW1lXS5wdXNoKGhhbmRsZXIpO1xuICAgIGRlYnVnKCdFbWl0dGVyLm9uKFwiJyArIG5hbWUgKyAnXCIpJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogVHJpZ2dlcnMgYWxsIG1hdGNoaW5nIGxpc3RlbmVycy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm4ge0VtaXR0ZXJ9IGB0aGlzYCBmb3IgY2hhaW5pbmcgICBcbiAgICovXG4gIGVtaXQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobmFtZSBpbiB0aGlzLmV2ZW50cyA9PT0gZmFsc2UpIHsgcmV0dXJuIHRoaXM7IH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHNbbmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKCdGaXJlZCBldmVudDogXCInICsgbmFtZSArICdcIicpO1xuICAgICAgdGhpcy5ldmVudHNbbmFtZV1baV0uYXBwbHkodGhpcy5zY29wZSB8fCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTsgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIG1hdGNoaW5nIGxpc3RlbmVycy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm4ge0VtaXR0ZXJ9IGB0aGlzYCBmb3IgY2hhaW5pbmdcbiAgICovXG4gIG9mZkFsbDogZnVuY3Rpb24obmFtZSkge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgZm9yICh2YXIgZSBpbiB0aGlzLmV2ZW50cykge1xuICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW25hbWVdOyAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lciBiYXNlZCBvbiBhbiBpbmRleC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGV2ZW50IFxuICAgKi9cbiAgb2ZmQXQ6IGZ1bmN0aW9uKG5hbWUsIGluZGV4KSB7XG4gICAgdmFyIGFycmF5ID0gdGhpcy5ldmVudHNbbmFtZV0sXG4gICAgICAgIHJlc3QgID0gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcblxuICAgIGFycmF5Lmxlbmd0aCA9IGluZGV4O1xuICAgIGFycmF5LnB1c2guYXBwbHkoYXJyYXksIHJlc3QpO1xuICAgIHRoaXMuZXZlbnRzW25hbWVdID0gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lciBiYXNlZCBvbiB0aGUgaGFuZGxlciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG4gICAqIEByZXR1cm4ge0VtaXR0ZXJ9IGB0aGlzYCBmb3IgY2hhaW5pbmdcbiAgICovXG4gIG9mZjogZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBldmVudHMgaGFuZGxlcnMgYnkgdGhpcyBuYW1lXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5vZmZBbGwobmFtZSk7XG4gICAgfSBlbHNlIHsgLy8gcmVtb3ZlIGFsbCBldmVudHMgaGFuZGxlcnMgPT0gJ2hhbmRsZXInIGJ5IHRoaXMgbmFtZVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbbmFtZV1baV0gPT0gaGFuZGxlcikge1xuICAgICAgICAgIHRoaXMub2ZmQXQobmFtZSwgaSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IFxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufSk7ICIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICovXG52YXIgTGFuZyA9IHJlcXVpcmUoJy4vbGFuZycpLFxuICAgIFJUeXBlcyA9IHJlcXVpcmUoJy4vcnR5cGVzJyksXG4gICAgUiA9IFJUeXBlcy5yLFxuICAgIERlcGxveVIgPSBSVHlwZXMuZGVwbG95cjtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZXMoZGF0ZXMsIHR5cGUpIHtcbiAgICB2YXIgZm9ybWF0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtYXRzLnB1c2goZm9ybWF0RGF0ZShkYXRlc1tpXSwgdHlwZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXRzO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIHR5cGUpIHsgICAgXG4gICB2YXIgeWVhciAgID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgIG1vbnRoICA9IChkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICBkYXkgICAgPSBkYXRlLmdldERhdGUoKSwgICAgXG4gICAgICAgaG91ciAgID0gZGF0ZS5nZXRIb3VycygpLFxuICAgICAgIG1pbiAgICA9IGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgIHNlYyAgICA9IGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgIHpvbmUgICA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSxcbiAgICAgICBmb3JtYXQgPSAnJztcblxuICAgICAgIG1vbnRoICA9IChtb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aCk7XG4gICAgICAgaG91ciAgID0gKGhvdXIgPCAxMCA/ICcwJyArIGhvdXIgOiBob3VyKTtcbiAgICAgICBtaW4gICAgPSAobWluIDwgMTAgPyAnMCcgKyBtaW4gOiBtaW4pO1xuICAgICAgIHNlYyAgICA9IChzZWMgPCAxMCA/ICcwJyArIHNlYyA6IHNlYyk7ICAgICAgIFxuICAgICAgIGZvcm1hdCA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcblxuICAgIGZ1bmN0aW9uIGxlZnRaZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG5cbiAgICAgICAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICAgICAgICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArIG91dHB1dDtcbiAgICB9XG4gICBcbiAgICBpZiAodHlwZSA9PT0gRGVwbG95Ui5SUE9TSVhfREFURSB8fCB0eXBlID09PSBEZXBsb3lSLlJQT1NJWF9EQVRFX1ZFQ1RPUikge1xuICAgICAgICB2YXIgdGltZSAgPSBob3VyICsgJzonICsgbWluICsgJzonICsgc2VjLFxuICAgICAgICAgICAgYSA9IC16b25lLFxuICAgICAgICAgICAgYiA9IFwiK1wiO1xuXG4gICAgICAgIGlmIChhIDwgMCkge1xuICAgICAgICAgICAgYSA9IC1hO1xuICAgICAgICAgICAgYiA9IFwiLVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgem9uZSA9IGIgKyBsZWZ0WmVyb0ZpbGwoKGEgLyA2MCksIDIpICsgJycgKyBsZWZ0WmVyb0ZpbGwoYSAlIDYwLCAyKTtcbiAgICAgICAgZm9ybWF0ICs9ICgnICcgKyB0aW1lICsgJyAnICsgem9uZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxuZnVuY3Rpb24gZW5jb2RlRW1iZWRkZWREYXRhZnJhbWUob2JqLCByZGYpIHtcbiAgICB2YXIgZGZWYWx1ZSA9IG9iai52YWx1ZTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG4gICAgICAgIGlmIChkZk9iai50eXBlID09PSBEZXBsb3lSLlJEQVRBRlJBTUUpIHtcbiAgICAgICAgICAgIHJkZiA9IGVuY29kZUVtYmVkZGVkRGF0YWZyYW1lKGRmT2JqLCByZGYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZm9ybWF0IGRhdGVzXG4gICAgICAgICAgICBpZiAoUlR5cGVzLmlzRGF0ZShkZk9iai50eXBlKSkge1xuICAgICAgICAgICAgICAgIGlmIChMYW5nLmlzQXJyYXkoZGZPYmoudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRmT2JqLnZhbHVlID0gZm9ybWF0RGF0ZXMoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRmT2JqLnZhbHVlID0gZm9ybWF0RGF0ZShkZk9iai52YWx1ZSwgZGZPYmoudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZk9iai50eXBlID0gUlR5cGVzLmRlcGxveXJUb1IoZGZPYmoudHlwZSk7XG4gICAgICAgICAgICByZGYudmFsdWUucHVzaChkZk9iaik7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gcmRmO1xufTtcblxuZnVuY3Rpb24gZW5jb2RlRGF0YWZyYW1lKG9iaikge1xuICAgIHZhciByZGYgPSB7XG4gICAgICAgICAgICB0eXBlOiBSLkRBVEFGUkFNRSxcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgIG5hbWU6IG9iai5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGRmVmFsdWUgPSBvYmoudmFsdWU7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG5cbiAgICAgICAgaWYgKGRmT2JqLnR5cGUgPT09IERlcGxveVIuUkRBVEFGUkFNRSkge1xuICAgICAgICAgICAgcmRmID0gZW5jb2RlRW1iZWRkZWREYXRhZnJhbWUoZGZPYmosIHJkZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmb3JtYXQgZGF0ZXNcbiAgICAgICAgICAgIGlmIChSVHlwZXMuaXNEYXRlKGRmT2JqLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKExhbmcuaXNBcnJheShkZk9iai52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGZPYmoudmFsdWUgPSBmb3JtYXREYXRlcyhkZk9iai52YWx1ZSwgZGZPYmoudHlwZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGZPYmoudmFsdWUgPSBmb3JtYXREYXRlKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRmT2JqLnR5cGUgPSBSVHlwZXMuZGVwbG95clRvUihkZk9iai50eXBlKTtcbiAgICAgICAgICAgIHJkZi52YWx1ZS5wdXNoKGRmT2JqKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiByZGY7XG59O1xuXG5mdW5jdGlvbiBlbmNvZGVMaXN0KG9iaikge1xuICAgIHZhciBybGlzdCA9IHtcbiAgICAgICAgICAgIHR5cGU6IFIuTElTVCxcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgIG5hbWU6IG9iai5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGRmVmFsdWUgPSBvYmoudmFsdWUsXG4gICAgICAgIHI7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG5cbiAgICAgICAgc3dpdGNoIChkZk9iai50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEFGUkFNRTpcbiAgICAgICAgICAgICAgICByID0gZW5jb2RlRGF0YWZyYW1lKGRmT2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJMSVNUOlxuICAgICAgICAgICAgICAgIHIgPSBlbmNvZGVMaXN0KGRmT2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJOVU1FUklDX01BVFJJWDpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUl9NQVRSSVg6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fTUFUUklYOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJTVFJJTkdfTUFUUklYOlxuICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRmT2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuTUFUUklYLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGZPYmoudmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEU6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUlBPU0lYX0RBVEU6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5EQVRFLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGRmT2JqLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdERhdGUoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJGQUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUk9SREVSRUQ6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5GQUNUT1IsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWQ6IGRmT2JqLm9yZGVyZWQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogZGZPYmoubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICBsZXZlbHM6IGRmT2JqLmxldmVscyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRmT2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJTVFJJTkc6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU46XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUM6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUklOVEVHRVI6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5QUklNSVRJVkUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZk9iai52YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19WRUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUklOVEVHRVJfVkVDVE9SOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOX1ZFQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkZk9iai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlZFQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRmT2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRFX1ZFQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURV9WRUNUT1I6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdERhdGVzKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBkZk9iai5mb3JtYXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gUkRhdGFUeXBlIGZvdW5kIGZvciBcIicgKyBkZk9iai50eXBlICsgJ1wiJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBybGlzdC52YWx1ZS5wdXNoKHIpO1xuICAgIH1cbiAgICByZXR1cm4gcmxpc3Q7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qKlxuICAgICAqIEZsYXR0ZW5zIGEgZ2l2ZW4gPGNvZGU+UmV2b2x1dGlvbi5SRGF0YTwvY29kZT4gdHlwZSBpbnRvIGEgSlNPTiBzdHJpbmdcbiAgICAgKiByZXByZXNlbnRpbmcgdGhlXG4gICAgICogZXhwZWN0ZWQgRGVwbG95UiBpbnB1dCBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHBhcnNlSW5wdXRzXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IHJkYXRhIEFuIEFycmF5IG9mIFJEYXRhIE9iamVjdHMgdG8gYmUgZmxhdHRlbmVkLlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGZsYXR0ZW5kIFJEYXRhIEpTT04gc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgRGVwbG95UlxuICAgICAqICAgICAgICAgICAgICAgICAgaW5wdXQgZm9ybWF0LlxuICAgICAqL1xuICAgIGVuY29kZTogZnVuY3Rpb24ocmRhdGEpIHtcbiAgICAgICAgdmFyIHIgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gcmRhdGFbaW5kZXhdO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7IC8vIC0tIERlcGxveVIgVHlwZSAtLSAvL1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRBRlJBTUU6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0gZW5jb2RlRGF0YWZyYW1lKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJMSVNUOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IGVuY29kZUxpc3Qob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUNfTUFUUklYOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUl9NQVRSSVg6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOX01BVFJJWDpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklOR19NQVRSSVg6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5NQVRSSVgsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRFOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURTpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLkRBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG9iai5mb3JtYXQsICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0RGF0ZShvYmoudmFsdWUsIG9iai50eXBlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SRkFDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5ST1JERVJFRDogICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5GQUNUT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmVkOiBvYmoub3JkZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogb2JqLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsczogb2JqLmxldmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklORzpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU46XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJOVU1FUklDOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUjpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlBSSU1JVElWRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUNfVkVDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUl9WRUNUT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklOR19WRUNUT1I6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRFX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUlBPU0lYX0RBVEVfVkVDVE9SOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuVkVDVE9SLCAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdERhdGVzKG9iai52YWx1ZSwgb2JqLnR5cGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBvYmouZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBSRGF0YVR5cGUgZm91bmQgZm9yIFwiJyArIG9iai50eXBlICsgJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChKU09OLnN0cmluZ2lmeShyKSk7XG4gICAgfVxufTsiLCIgdmFyIG9wdGlvbmFsID0gcmVxdWlyZSgnLi9vcHRpb25hbCcpLFxuICAgICBXUyAgICAgICA9IG9wdGlvbmFsKCd3cycpLFxuICAgICBRdWV1ZSAgICA9IHJlcXVpcmUoJy4vcXVldWUnKSwgICAgIFxuICAgICBFbWl0dGVyICA9IHJlcXVpcmUoJy4vZW1pdHRlcicpLFxuICAgICBCYXNlICAgICA9IHJlcXVpcmUoJy4vc2VsZmlzaCcpLkJhc2UsXG4gICAgIG1lcmdlICAgID0gcmVxdWlyZSgnLi91dGlscycpLm1lcmdlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEV2ZW50U3RyZWFtYCB3aXRoIHRoZSBnaXZlbiBzZXQgb2YgYG9wdGlvbnNgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xudmFyIEV2ZW50U3RyZWFtID0gQmFzZS5leHRlbmQoRW1pdHRlciwgeyAgIFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUoaG9zdCwgb3B0aW9ucykge1xuICAgIEVtaXR0ZXIuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHt9KTtcblxuICAgIHRoaXMuaG9zdCAgICAgICAgPSBob3N0O1xuICAgIHRoaXMub3B0aW9ucyAgICAgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMub3B0aW9ucy5sb2cgPSB0aGlzLm9wdGlvbnMubG9nIHx8IHRoaXMuTE9HLmVycm9yO1xuICAgIHRoaXMud3MgICAgICAgICAgPSBudWxsO1xuICAgIHRoaXMucSAgICAgICAgICAgPSBuZXcgUXVldWUoKTtcbiAgICB0aGlzLmNoYW5uZWwgICAgID0ge307ICAgICBcbiAgfSwgIFxuXG4gIExPRzogeyBcbiAgICBpbmZvOiAnaW5mbycsIFxuICAgIGRlYnVnOiAnZGVidWcnLCBcbiAgICBlcnJvcjogJ2Vycm9yJyBcbiAgfSxcbiAgXG4gIG9wZW46IGZ1bmN0aW9uKG9wdGlvbnMpIHsgICAgXG4gICAgdmFyIHNlbGYgICA9IHRoaXMsXG4gICAgICAgIHVyaSAgICA9ICh0aGlzLmhvc3QgfHwgJycpICsgJy9kZXBsb3lyL3IvZXZlbnQvc3RyZWFtPycsXG4gICAgICAgIHBhcmFtcyA9IFtdO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSBtZXJnZShvcHRpb25zLCB0aGlzLmNoYW5uZWwpOyAgICBcblxuICAgIHRoaXMuY29va2llcyA9ICF0aGlzLmNvb2tpZXMgPyBvcHRpb25zLmhlYWRlcnMuQ29va2llIDogdGhpcy5jb29raWVzO1xuXG4gICAgLy8gLS0gYXBwZW5kIG9wdGlvbiBwYXJhbWV0ZXJzIC0tXG4gICAgaWYgKG9wdGlvbnMucHJvamVjdCkge1xuICAgICAgcGFyYW1zLnB1c2goJ3Byb2plY3Q9JyArIG9wdGlvbnMucHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLmpvYikge1xuICAgICAgICBwYXJhbXMucHVzaCgnam9iPScgKyBvcHRpb25zLmpvYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubWFuYWdlbWVudCkge1xuICAgICAgcGFyYW1zLnB1c2goJ21hbmFnZW1lbnRFdmVudE9ubHk9dHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5odHRwb25seSkge1xuICAgICAgICBwYXJhbXMucHVzaCgnaHR0cEV2ZW50T25seT10cnVlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3B0aW9ucy5yZXZvb25seSkge1xuICAgICAgICAgIHBhcmFtcy5wdXNoKCdyZXZvRXZlbnRPbmx5PXRydWUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHVyaSArPSBwYXJhbXMuam9pbignJicpLnN1YnN0cigwKTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXmh0dHAvLCd3cycpO1xuXG4gICAgdGhpcy5xLnlpZWxkKHRydWUpO1xuICAgIHRoaXMucS5hZGQoZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5jb29raWVzID8geyAnQ29va2llJzogdGhpcy5jb29raWVzIH0gOiB7fTtcbiAgICAgIHRoaXMuZW1pdCgnZXM6Y29ubmVjdGluZycsIHsgdXJpOiB1cmksIGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICAgIHZhciB3cyA9IG5ldyBXUyh1cmksICdodHRwJywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuXG4gICAgICB3cy5vbm9wZW4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBzZWxmLmVtaXQoJ2VzOm9wZW4nLCBtZXNzYWdlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfbWVzc2FnZSA9ICcnO1xuICAgICAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdHJ5IHsgICAgICAgICAgXG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5zcGxpdCgnIXwhJylbMV0pIHtcbiAgICAgICAgICAgIF9tZXNzYWdlID0gX21lc3NhZ2UgKyBtZXNzYWdlLmRhdGEuc3BsaXQoJyF8IScpWzFdO1xuICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoX21lc3NhZ2UpO1xuICAgICAgICAgICAgX21lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHZhciB0eXBlID0gbWVzc2FnZS5kZXBsb3lyLnJlc3BvbnNlLmV2ZW50LnR5cGU7XG4gICAgICAgICAgICBzZWxmLmVtaXQoJ2VzOicgKyB0eXBlLnJlcGxhY2UoJ0V2ZW50JywgJycpLCBtZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9IFxuICAgICAgfTtcblxuICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5lbWl0KCdlczplcnJvcicsIGVycik7IH07XG4gICAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHsgc2VsZi5lbWl0KCdlczpkaXNjb25uZWN0JywgbWVzc2FnZSk7IH07XG5cbiAgICAgIHRoaXMud3MgPSB3cztcbiAgICB9LCB0aGlzKTtcblxuICAgIGlmIChvcHRpb25zLmZvcmNlKSB7IHRoaXMuZmx1c2goKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7ICAgIFxuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy53cykgeyB0aGlzLndzLmNsb3NlKCk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGVycm9yOiBmdW5jdGlvbihmbikge1xuICAgIHRoaXMub24oJ2VzOmVycm9yJywgZm4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICBcblxuICBhbGw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2hhbm5lbCA9IHsgcmV2b29ubHk6IHRydWUgfTsgIC8vIHJldm9FdmVudE9ubHk9dHJ1ZVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgc2Vzc2lvbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jaGFubmVsID0geyBodHRwb25seTogdHJ1ZSB9OyAvL2h0dHBFdmVudE9ubHk9dHJ1ZVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgcHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIHRoaXMuY2hhbm5lbCA9IHsgcHJvamVjdDogcHJvamVjdCB9OyAvLyBwcm9qZWN0PTEyMzQ1XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBqb2I6IGZ1bmN0aW9uKGpvYikge1xuICAgIHRoaXMuY2hhbm5lbCA9IHsgam9iOiBqb2IgfTsgLy9qb2I9MTIzNDVcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG1hbmFnZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2hhbm5lbCA9IHsgbWFuYWdlbWVudDogdHJ1ZSB9OyAvL21hbmFnZW1lbnRFdmVudE9ubHk9dHJ1ZVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgZmx1c2g6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucS55aWVsZChmYWxzZSk7XG4gICAgdGhpcy5xLmZsdXNoKCk7XG4gIH0sXG5cbiAgc2hhcmU6IGZ1bmN0aW9uKGNvb2tpZXMpIHtcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzO1xuICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50U3RyZWFtO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGEgRGVwbG95UiBwb3J0IG9mIHl1aS1sYW5nLmpzIGJ5IFlhaG9vIVxuICpcbiAqIFNvZnR3YXJlIExpY2Vuc2UgQWdyZWVtZW50IChCU0QgTGljZW5zZSlcbiAqIENvcHlyaWdodCAoYykgMjAxMywgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIG9mIHRoaXMgc29mdHdhcmUgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3IgXG4gKiB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBcbiAqIGFyZSBtZXQ6XG4gKlxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIFxuICogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgXG4gKiBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgXG4gKiB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCBcbiAqIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIFlhaG9vISBJbmMuIG5vciB0aGUgbmFtZXMgb2YgWVVJJ3MgY29udHJpYnV0b3JzIG1heSBiZSBcbiAqIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgXG4gKiBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24gb2YgWWFob28hIEluYy5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBcbiAqIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBcbiAqIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgXG4gKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBcbiAqIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBcbiAqIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIFxuICogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgXG4gKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSAgXG4gKiBQT1MgU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBjb3JlIGxhbmd1YWdlIHV0aWxpdGVzIGFuZCBleHRlbnNpb25zIHVzZWQgdGhyb3VnaG91dCBEZXBsb3lSLlxuICpcbiAqIEBjbGFzcyBMYW5nXG4gKiBAc3RhdGljXG4gKi9cbnZhciBMID0ge30sIFxuXHRUT1NUUklORyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsIFxuXHRUWVBFUyA9IHtcdFxuXHRcdCd1bmRlZmluZWQnIDogJ3VuZGVmaW5lZCcsXG5cdFx0J251bWJlcicgOiAnbnVtYmVyJyxcblx0XHQnYm9vbGVhbicgOiAnYm9vbGVhbicsXG5cdFx0J3N0cmluZycgOiAnc3RyaW5nJyxcblx0XHQnW29iamVjdCBGdW5jdGlvbl0nIDogJ2Z1bmN0aW9uJyxcblx0XHQnW29iamVjdCBSZWdFeHBdJyA6ICdyZWdleHAnLFxuXHRcdCdbb2JqZWN0IEFycmF5XScgOiAnYXJyYXknLFxuXHRcdCdbb2JqZWN0IERhdGVdJyA6ICdkYXRlJyxcblx0XHQnW29iamVjdCBFcnJvcl0nIDogJ2Vycm9yJ1xuXHR9LCB1bnNhZmVOYXRpdmVzID0gZmFsc2U7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBudWxsLlxuICogQG1ldGhvZCBpc051bGxcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBudWxsLlxuICovXG5MLmlzTnVsbCA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIG8gPT09IG51bGw7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIGl0ZW0gaXMgdW5kZWZpbmVkLlxuICogQG1ldGhvZCBpc1VuZGVmaW5lZFxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIHVuZGVmaW5lZC5cbiAqL1xuTC5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIHR5cGVvZiBvID09PSAndW5kZWZpbmVkJztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBvZiB0eXBlIG9iamVjdFxuICogb3IgZnVuY3Rpb24uIE5vdGUgdGhhdCBhcnJheXMgYXJlIGFsc28gb2JqZWN0cywgc29cbiAqIDxjb2RlPlkuTGFuZy5pc09iamVjdChbXSkgPT09IHRydWU8L2NvZGU+LlxuICogQG1ldGhvZCBpc09iamVjdFxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHBhcmFtIGZhaWxmbiB7Ym9vbGVhbn0gZmFpbCBpZiB0aGUgaW5wdXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBhbiBvYmplY3QuXG4gKiBAc2VlIGlzUGxhaW5PYmplY3RcbiAqL1xuTC5pc09iamVjdCA9IGZ1bmN0aW9uKG8sIGZhaWxmbikge1xuXHR2YXIgdCA9IHR5cGVvZiBvO1xuXHRyZXR1cm4gKG8gJiYgKHQgPT09ICdvYmplY3QnIHx8ICghZmFpbGZuICYmICh0ID09PSAnZnVuY3Rpb24nIHx8IEwuaXNGdW5jdGlvbihvKSkpKSkgfHwgZmFsc2U7XG59O1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIGFuIGFycmF5LlxuICpcbiAqIFJldHVybnMgYGZhbHNlYCBmb3IgYXJyYXktbGlrZSBjb2xsZWN0aW9ucyBzdWNoIGFzIHRoZSBmdW5jdGlvbiBgYXJndW1lbnRzYFxuICogY29sbGVjdGlvbiBvciBgSFRNTEVsZW1lbnRgIGNvbGxlY3Rpb25zLlxuICpcbiAqIEBtZXRob2QgaXNBcnJheVxuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGFuIGFycmF5LlxuICogQHN0YXRpY1xuICovXG5MLmlzQXJyYXkgPSAoIXVuc2FmZU5hdGl2ZXMgJiYgQXJyYXkuaXNBcnJheSkgfHxcbmZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIEwudHlwZShvKSA9PT0gJ2FycmF5Jztcbn07XG5cbkwuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb25BKG8pIHtcblx0cmV0dXJuICh0eXBlb2YobykgPT09IFwiZnVuY3Rpb25cIik7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIGl0ZW0gaXMgYSBib29sZWFuLlxuICogQG1ldGhvZCBpc0Jvb2xlYW5cbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBhIGJvb2xlYW4uXG4gKi9cbkwuaXNCb29sZWFuID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICdib29sZWFuJztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgc3VwcGxpZWQgaXRlbSBpcyBhIGRhdGUgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGlzRGF0ZVxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgZGF0ZS5cbiAqL1xuTC5pc0RhdGUgPSBmdW5jdGlvbihvKSB7XG5cdHJldHVybiBMLnR5cGUobykgPT09ICdkYXRlJyAmJiBvLnRvU3RyaW5nKCkgIT09ICdJbnZhbGlkIERhdGUnICYmICFpc05hTihvKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBhIGxlZ2FsIG51bWJlci5cbiAqIEBtZXRob2QgaXNOdW1iZXJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBhIG51bWJlci5cbiAqL1xuTC5pc051bWJlciA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShvKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBhIHN0cmluZy5cbiAqIEBtZXRob2QgaXNTdHJpbmdcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBhIHN0cmluZy5cbiAqL1xuTC5pc1N0cmluZyA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJztcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgb2YgdGhlIGl0ZW0gcGFzc2VkIGluLlxuICpcbiAqIEBtZXRob2QgdHlwZVxuICogQHBhcmFtIG8gdGhlIGl0ZW0gdG8gdGVzdC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGRldGVjdGVkIHR5cGUuXG4gKiBAc3RhdGljXG4gKi9cbkwudHlwZSA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIFRZUEVTWyB0eXBlb2Ygb10gfHwgVFlQRVNbVE9TVFJJTkcuY2FsbChvKV0gfHwgKCBvID8gJ29iamVjdCcgOiAnbnVsbCcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuIFxudmFyIExvZ2dlciA9IHt9LFxuICAgIGxvZ2dlck1hcCA9IHt9LFxuICAgIGdsb2JhbExvZ2dlcjtcblxuLyoqXG4gKiBVbml2ZXJzYWwgc3Rkb3V0fHN0ZGVyciBwcmludGVyXG4gKi9cbmZ1bmN0aW9uIGxvZyhtZXNzYWdlcywgY29udGV4dCkge1x0XG5cdGlmICghY29uc29sZSkgeyByZXR1cm47IH1cblxuXHRmdW5jdGlvbiBzZXAobGV2ZWwpIHtcblx0XHR2YXIgc2VwID0gJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScgK1xuXHRcdCAgICAgICAgICAnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJyxcblx0XHQgICAgb2Zmc2V0ID0gMDtcblxuXHRcdGlmIChsZXZlbCA9PT0gTG9nZ2VyLkRFQlVHIHx8IGxldmVsID09PSBMb2dnZXIuRVJST1IpIG9mZnNldCA9IDg7XG5cdFx0ZWxzZSBpZiAobGV2ZWwgPT09IExvZ2dlci5JTkZPIHx8IGxldmVsID09PSBMb2dnZXIuV0FSTikgb2Zmc2V0ID0gODtcblx0XHRlbHNlIG9mZnNldCA9IDc7XG5cblx0XHRyZXR1cm4geyBzdGFydDogc2VwLnN1YnN0cmluZyhvZmZzZXQpLCBlbmQ6IHNlcCB9O1xuXHR9XG5cblx0dmFyIGhkbHIsXG5cdCAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZXMsIDApLFxuXHQgICAgbmFtZSA9IGNvbnRleHQubmFtZSxcblx0ICAgIGVycm9yID0gY29udGV4dC5sZXZlbCA9PT0gTG9nZ2VyLkVSUk9SLFxuICBcdCAgICBkZWxpbSA9IHNlcChjb250ZXh0LmxldmVsKTtcblxuICBcdGlmIChjb250ZXh0LmxldmVsID09PSBMb2dnZXIuV0FSTiAmJiBjb25zb2xlLndhcm4pIHtcbiAgXHRcdGhkbHIgPSAnd2Fybic7XG4gIFx0fSBlbHNlIGlmIChjb250ZXh0LmxldmVsID09PSBMb2dnZXIuRVJST1IgJiYgY29uc29sZS5lcnJvcikge1xuICBcdFx0aGRsciA9ICdlcnJvcic7XG4gIFx0fSBlbHNlIGlmIChjb250ZXh0LmxldmVsID09PSBMb2dnZXIuSU5GTyAmJiBjb25zb2xlLmluZm8pIHtcbiAgXHRcdGhkbHIgPSAnaW5mbyc7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdGhkbHIgPSAnbG9nJztcbiAgXHR9XG5cbiAgXHQvLyAtLSBjdXN0b20gZm9ybWF0IGxvZ2dpbmcgc3RhdGVtZW50IGZvciBkZXBsb3lyIHJlcXVlc3QvcmVzcG9uc2UvZXJyb3IgLS1cbiAgXHRhcmdzLnVuc2hpZnQoJ1snICsgKGVycm9yID8gTG9nZ2VyLkVSUk9SLm5hbWUgOiBuYW1lKSArICddICcgKyBkZWxpbS5zdGFydCk7XG4gIFx0YXJncy5wdXNoKGRlbGltLmVuZCk7XG5cbiAgXHRjb25zb2xlW2hkbHJdKGFyZ3NbMF0sIFthcmdzWzFdICsgJyAtLS0+ICcgKyBhcmdzWzJdWydjYWxsJ11dKTtcblxuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJncy5sZW5ndGg7IGkrKykgeyBjb25zb2xlLmxvZyhhcmdzW2ldKTsgfSAgXG59XG5cbi8qKlxuICogTG9nZ2luZyBjYXRlZ29yeSBieSBpZC5cbiAqL1xuZnVuY3Rpb24gQ2F0ZWdvcnkoaWQsIGxldmVsLCBmbikge1xuXHR0aGlzLmlkID0gaWQ7XG5cdHRoaXMuY29udGV4dCA9IGxldmVsIHx8IExvZ2dlci5ERUJVRztcbn1cblxuQ2F0ZWdvcnkucHJvdG90eXBlID0ge1x0XG5cdGxvZzogZnVuY3Rpb24obGV2ZWwsIG1zZ0FyZ3MpIHtcblx0XHRpZiAobGV2ZWwudmFsdWUgPj0gdGhpcy5jb250ZXh0LnZhbHVlKSB7XHRcdFx0XG5cdFx0XHRsb2cobXNnQXJncywgeyBcblx0XHRcdFx0bGV2ZWw6IGxldmVsLFxuXHRcdFx0XHRuYW1lOiB0aGlzLmNvbnRleHQubmFtZSxcblx0XHRcdFx0dmFsdWU6IHRoaXMuY29udGV4dC52YWx1ZVxuXHRcdFx0fSk7XHRcdFxuXHRcdH1cblx0fSxcblxuXHRkZWJ1ZzogZnVuY3Rpb24gKCkge1x0XHRcblx0XHR0aGlzLmxvZyhMb2dnZXIuREVCVUcsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0ZXJyb3I6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmxvZyhMb2dnZXIuRVJST1IsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0aW5mbzogZnVuY3Rpb24gKCkge1x0XHRcblx0XHR0aGlzLmxvZyhMb2dnZXIuSU5GTywgYXJndW1lbnRzKTtcblx0fSxcblxuXHR3YXJuOiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5sb2coTG9nZ2VyLldBUk4sIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0c2V0TGV2ZWw6IGZ1bmN0aW9uKGxldmVsKSB7XG5cdFx0aWYgKGxldmVsICYmICd2YWx1ZScgaW4gbGV2ZWwpIHtcblx0XHRcdHRoaXMuY29udGV4dCA9IGxldmVsO1xuXHRcdH1cblx0fVxufTtcblxuTG9nZ2VyLkRFQlVHID0geyB2YWx1ZTogMSwgbmFtZTogJ0RFQlVHJyB9O1xuTG9nZ2VyLklORk8gID0geyB2YWx1ZTogMiwgbmFtZTogJ0lORk8nIH07XG5Mb2dnZXIuV0FSTiAgPSB7IHZhbHVlOiA0LCBuYW1lOiAnV0FSTicgfTtcbkxvZ2dlci5FUlJPUiA9IHsgdmFsdWU6IDgsIG5hbWU6ICdFUlJPUicgfTtcbkxvZ2dlci5PRkYgICA9IHsgdmFsdWU6IDk5LCBuYW1lOiAnT0ZGJyB9OyAgIFx0XHRcblxuTG9nZ2VyLnNldExldmVsID0gZnVuY3Rpb24obmV3TGV2ZWwpIHtcblx0Z2xvYmFsTG9nZ2VyLnNldExldmVsKG5ld0xldmVsKTtcbn07XG5cbkxvZ2dlci5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcblx0Z2xvYmFsTG9nZ2VyLmRlYnVnLmFwcGx5KGdsb2JhbExvZ2dlciwgYXJndW1lbnRzKTtcbn07XG5cbkxvZ2dlci5pbmZvID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIuaW5mby5hcHBseShnbG9iYWxMb2dnZXIsIGFyZ3VtZW50cyk7XG59O1xuXG5Mb2dnZXIud2FybiA9IGZ1bmN0aW9uICgpIHtcblx0Z2xvYmFsTG9nZ2VyLndhcm4uYXBwbHkoZ2xvYmFsTG9nZ2VyLCBhcmd1bWVudHMpO1xufTtcblxuTG9nZ2VyLmVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIuZXJyb3IuYXBwbHkoZ2xvYmFsTG9nZ2VyLCBhcmd1bWVudHMpO1xufTtcblxuTG9nZ2VyLmdldCA9IGZ1bmN0aW9uIChpZCwgbGV2ZWwsIGZuKSB7XHRcblx0cmV0dXJuIChsb2dnZXJNYXBbaWRdIHx8IChmdW5jdGlvbigpIHtcblx0XHRsb2dnZXJNYXBbaWRdID0gbmV3IENhdGVnb3J5KGlkLCBsZXZlbCwgZm4pO1xuXHRcdHJldHVybiBsb2dnZXJNYXBbaWRdO1xuXHR9KSgpKTtcbn07XG5cbi8vIC0tLSBzZXR1cCB0aGUgZ2xvYmFsIGxvZ2dlciAtLS1cbmdsb2JhbExvZ2dlciA9IExvZ2dlci5nZXQoJ2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyBcdD0gTG9nZ2VyO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG4gXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICB0cnkge1xuICAgIHJldHVybiByZXF1aXJlKG1vZHVsZSk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59OyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG5mdW5jdGlvbiBRdWV1ZSgpIHtcbiAgdGhpcy5lbXB0eUNhbGxiYWNrID0gbnVsbDtcbiAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgdGhpcy55aWVsZGVkID0gZmFsc2U7XG4gIHRoaXMucmVzcG9uc2UgPSBudWxsO1xuICB0aGlzLnJlc3BvbnNlQ2hhaW4gPSBbXTsgIFxufVxuXG5RdWV1ZS5wcm90b3R5cGUgPSB7XG5cbiAgYWRkOiBmdW5jdGlvbihmbiwgY3R4LCBkZWZlcikge1xuICAgIC8vIGN1cnJlbnRseSBub3Qgd2FpdGluZyBhbmQgdGhlcmUgaXMgbm8gZGVmZXIgZGVsYXkganVzdCBtYWtlIGNhbGxcbiAgICBpZiAoIXRoaXMueWllbGRlZCAmJiAhZGVmZXIpIHsgICAgICBcbiAgICAgIGZuLmFwcGx5KGN0eCB8fCB0aGlzLCBbdGhpcy5yZXNwb25zZV0pO1xuICAgIH0gZWxzZSB7IC8vIGFkZCB0byBxdWV1ZVxuICAgICAgdGhpcy5jYWxsYmFja3MucHVzaCh7IGZuOiBmbiwgY3R4OiBjdHggfSk7XG4gICAgfVxuICB9LFxuXG4gIHNpemU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrcy5sZW5ndGg7XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzLmxlbmd0aCA9PT0gMDtcbiAgfSxcblxuICBlbXB0eTogZnVuY3Rpb24oZm4sIGN0eCkge1xuICAgIHRoaXMuZW1wdHlDYWxsYmFjayA9IHsgZm46IGZuLCBjdHg6IGN0eCB9O1xuICB9LFxuXG4gIHlpZWxkOiBmdW5jdGlvbih5aWVsZCkge1xuICAgIHRoaXMueWllbGRlZCA9IHlpZWxkO1xuICB9LFxuXG4gIHRha2U6IGZ1bmN0aW9uKHJlc3BvbnNlLCBlcnJvciwgYXJncykgeyBcbiAgICB2YXIgY2I7XG5cbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgIHRoaXMucmVzcG9uc2VDaGFpbi5wdXNoKHJlc3BvbnNlKTtcbiAgICB9XG5cblxuICAgIGlmICghdGhpcy55aWVsZGVkICYmIHRoaXMuY2FsbGJhY2tzWzBdKSB7XG4gICAgICBjYiA9IHRoaXMuY2FsbGJhY2tzLnNoaWZ0KCk7XG4gICAgICBjYi5mbi5hcHBseShjYi5jdHggfHwgdGhpcywgW3RoaXMucmVzcG9uc2VDaGFpbiwgZXJyb3IsIGFyZ3NdKTtcblxuICAgICAgLy8gbm90aWZ5IHRoYXQgdGhlIHF1ZXVlIGlzIG5vdyBlbXB0eSAgIFxuICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzWzBdICYmIHRoaXMuZW1wdHlDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVtcHR5Q2FsbGJhY2suZm4uY2FsbCh0aGlzLmVtcHR5Q2FsbGJhY2suY3R4IHx8IHRoaXMpOyAgICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXG4gIGZsdXNoOiBmdW5jdGlvbihyZXNwb25zZSwgZXJyb3IsIGFyZ3MpIHsgICAgICAgIFxuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5yZXNwb25zZUNoYWluLnB1c2gocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIC8vIHBvcCBhbmQgY2FsbCBuZXh0IGlubGluZVxuICAgIHdoaWxlICh0aGlzLmNhbGxiYWNrc1swXSkge1xuICAgICAgaWYgKHRoaXMueWllbGRlZCkgeyBicmVhazsgfVxuICAgICAgdmFyIGNiID0gdGhpcy5jYWxsYmFja3Muc2hpZnQoKTtcbiAgICAgIGNiLmZuLmFwcGx5KGNiLmN0eCB8fCB0aGlzLCBbdGhpcy5yZXNwb25zZUNoYWluLCBlcnJvciwgYXJnc10pO1xuXG4gICAgICAvLyBub3RpZnkgdGhhdCB0aGUgcXVldWUgaXMgbm93IGVtcHR5XG4gICAgICBpZiAodGhpcy5jYWxsYmFja3NbMF0gJiYgdGhpcy5lbXB0eUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZW1wdHlDYWxsYmFjay5mbi5jYWxsKHRoaXMuZW1wdHlDYWxsYmFjay5jdHggfHwgdGhpcyk7ICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSAgID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZSxcbiAgICBSVHlwZXMgPSByZXF1aXJlKCcuL3J0eXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKFJUeXBlcywge1xuXHRpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7ICBcdFxuXHRcdHRoaXMubmFtZSAgPSBuYW1lO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHR9LFxuXG5cdG51bWVyaWM6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoe1xuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJOVU1FUklDLFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTtcblx0fSxcdFxuXG5cdGludGVnZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SSU5URUdFUixcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0bG9naWNhbDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJCT09MRUFOLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0Y2hhcmFjdGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlNUUklORywgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SREFURSxcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdGZvcm1hdDogJ3l5eXktTU0tZGQnLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0cG9zaXhjdDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdGZvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MgWicsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcdFxuXHRcblx0bnVtZXJpY1ZlY3RvcjogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5STlVNRVJJQ19WRUNUT1IsXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGludGVnZXJWZWN0b3I6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SSU5URUdFUl9WRUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRsb2dpY2FsVmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJCT09MRUFOX1ZFQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGNoYXJhY3RlclZlY3RvcjogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SU1RSSU5HX1ZFQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSwgIFxuXHRcblx0ZGF0ZVZlY3RvcjogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SREFURV9WRUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0Zm9ybWF0OiAneXl5eS1NTS1kZCcsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcdFxuXHRcblx0cG9zaXhjdFZlY3RvcjogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SUE9TSVhfREFURV9WRUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0Zm9ybWF0OiAneXl5eS1NTS1kZCBISDptbTpzcyBaJyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0bGlzdDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJMSVNULCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0ZGF0YWZyYW1lOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJEQVRBRlJBTUUsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0ZmFjdG9yOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoIHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkZBQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRvcmRlcmVkOiBmYWxzZSxcblx0XHRcdGxldmVsczogb3B0cy5sZXZlbHMsXG5cdFx0XHRsYWJlbHM6IG9wdHMubGFiZWxzLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0b3JkZXJlZDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KCB7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJPUkRFUkVELCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdG9yZGVyZWQ6IHRydWUsXG5cdFx0XHRsZXZlbHM6IG9wdHMubGV2ZWxzLFxuXHRcdFx0bGFiZWxzOiBvcHRzLmxhYmVscyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFx0XHRcblxuXHRudW1lcmljTWF0cml4OiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJOVU1FUklDX01BVFJJWCwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRpbnRlZ2VyTWF0cml4OiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJJTlRFR0VSX01BVFJJWCwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRsb2dpY2FsTWF0cml4OiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJCT09MRUFOX01BVFJJWCwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRjaGFyYWN0ZXJNYXRyaXg6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SU1RSSU5HX01BVFJJWCwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHR0b1N0cmluZzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG9wdHMgICA9IHRoaXMub3B0aW9ucyB8fCB7fSxcblx0XHQgICAgbGV2ZWxzID0gb3B0cy5sZXZlbHMgPyAnWyBsZXZlbHMgPSAnICsgb3B0cy5sZXZlbHMgKyAnXScgOiAnJyxcblx0XHQgICAgbGFiZWxzID0gb3B0cy5sYWJlbHMgPyAnWyBsYWJlbHMgPSAnICsgb3B0cy5sYWJlbHMgKyAnXScgOiAnJztcblxuXHRcdHJldHVybiAnWyBuYW1lID0gJyAgKyB0aGlzLm5hbWUgKyAnIF0gJyArXG5cdFx0ICAgICAgICdbIHZhbHVlID0gJyArIHRoaXMudmFsdWUgKyAnIF0gJyArXG5cdFx0ICAgICAgICdbIHR5cGUgPSAnICArIHRoaXMudHlwZSArICcgXSAnICtcblx0XHQgICAgICAgbGV2ZWxzICsgbGFiZWxzO1x0XHQgICAgICAgXG5cdH1cbn0pOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSAgID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZSxcbiAgICBSVHlwZXMgPSByZXF1aXJlKCcuL3J0eXBlcycpLFxuICAgIExhbmcgICA9IHJlcXVpcmUoJy4vbGFuZycpLFxuICAgIFJJbnB1dCA9IHJlcXVpcmUoJy4vcmlucHV0Jyk7IFxuXG5mdW5jdGlvbiBjcmVhdGUodHlwZSwgbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcblx0dmFyIHJpbnB1dDtcblxuXHRpZiAoTGFuZy5pc09iamVjdChuYW1lKSkge1xuXHRcdHJpbnB1dCA9IG5hbWU7XG5cdFx0aWYgKCFyaW5wdXQudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsQXJndW1lbnRFcnJvcjonICsgXG5cdFx0XHRcdCdFeHBlY3RpbmcgXCInICsgdHlwZSArICdcIiBidXQgZm91bmQgXCInICsgcmlucHV0LnR5cGUgKyAnXCInKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdCAgICByaW5wdXQgPSBSSW5wdXQubmV3KG5hbWUsIHZhbHVlLCBvcHRpb25zKVt0eXBlXSgpO1xuXHR9IFxuXG5cdHJldHVybiByaW5wdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoUlR5cGVzLCB7XHRcblx0bnVtZXJpYzogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJOVU1FUklDLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRcblx0aW50ZWdlcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJJTlRFR0VSLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGxvZ2ljYWw6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SQk9PTEVBTiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRjaGFyYWN0ZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SU1RSSU5HLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGRhdGU6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SREFURSwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cblx0cG9zaXhjdDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcdFxuXHRcblx0bnVtZXJpY1ZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5STlVNRVJJQ19WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0aW50ZWdlclZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJJTlRFR0VSX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRsb2dpY2FsVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJCT09MRUFOX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRjaGFyYWN0ZXJWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUlNUUklOR19WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LCAgXG5cdFxuXHRkYXRlVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJEQVRFX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXHRcblx0XG5cdHBvc2l4Y3RWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEVfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGxpc3Q6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5STElTVCwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRkYXRhZnJhbWU6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkRBVEFGUkFNRSwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXHRcblxuXHRmYWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgbGV2ZWxzLCBsYWJlbHMpIHtcblx0XHR2YXIgb3B0cyA9IHsgbGV2ZWxzOiBsZXZlbHMsIGxhYmVsczogbGFiZWxzIH07XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJGQUNUT1IsIG5hbWUsIHZhbHVlLCBvcHRzKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0b3JkZXJlZDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBsZXZlbHMsIGxhYmVscykge1xuXHRcdHZhciBvcHRzID0geyBsZXZlbHM6IGxldmVscywgbGFiZWxzOiBsYWJlbHMgfTtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUk9SREVSRUQsIG5hbWUsIHZhbHVlLCBvcHRzKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXHRcdFxuXG5cdG51bWVyaWNNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUk5VTUVSSUNfTUFUUklYLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblxuXHRpbnRlZ2VyTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJJTlRFR0VSX01BVFJJWCwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cblx0bG9naWNhbE1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SQk9PTEVBTl9NQVRSSVgsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXG5cdGNoYXJhY3Rlck1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJTVFJJTkdfTUFUUklYLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59KTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE0IGJ5IFJldm9sdXRpb24gQW5hbHl0aWNzIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIEJhc2UgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgIExhbmcgPSByZXF1aXJlKCcuL2xhbmcnKSxcbiAgICBtYXAgID0ge307IC8vIGRlcGxveXItPlRvLT5SIGNhdGFsb2dcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlLmV4dGVuZCh7XG5cdHI6IHtcblx0XHRQUklNSVRJVkU6ICdwcmltaXRpdmUnLFxuXHRcdERBVEFGUkFNRTogJ2RhdGFmcmFtZScsXG5cdFx0TElTVDogJ2xpc3QnLFxuXHRcdE1BVFJJWDogJ21hdHJpeCcsXG5cdFx0REFURTogJ2RhdGUnLFxuXHRcdEZBQ1RPUjogJ2ZhY3RvcicsXG5cdFx0VkVDVE9SOiAndmVjdG9yJ1xuXHR9LFxuXG5cdGRlcGxveXI6IHtcblx0XHRSQk9PTEVBTjogJ2xvZ2ljYWwnLFxuXHRcdFJOVU1FUklDOiAnbnVtZXJpYycsXG5cdFx0UklOVEVHRVI6ICdpbnRlZ2VyJyxcblx0XHRSU1RSSU5HOiAnY2hhcmFjdGVyJyxcblx0XHRSREFURTogJ2RhdGUnLFxuXHRcdFJQT1NJWF9EQVRFOiAncG9zaXhjdCcsXG5cdFx0UkJPT0xFQU5fVkVDVE9SOiAnbG9naWNhbFZlY3RvcicsXG5cdFx0Uk5VTUVSSUNfVkVDVE9SOidudW1lcmljVmVjdG9yJyxcblx0XHRSSU5URUdFUl9WRUNUT1I6ICdpbnRlZ2VyVmVjdG9yJyxcdFxuXHRcdFJTVFJJTkdfVkVDVE9SOiAnY2hhcmFjdGVyVmVjdG9yJyxcblx0XHRSREFURV9WRUNUT1I6ICdkYXRlVmVjdG9yJyxcblx0XHRSUE9TSVhfREFURV9WRUNUT1I6ICdwb3NpeGN0VmVjdG9yJyxcblx0XHRSTElTVDogJ2xpc3QnLFxuXHRcdFJEQVRBRlJBTUU6ICdkYXRhZnJhbWUnLFxuXHRcdFJGQUNUT1I6ICdmYWN0b3InLFxuXHRcdFJPUkRFUkVEOiAnb3JkZXJlZCcsXHRcdFxuXHRcdFJCT09MRUFOX01BVFJJWDogJ2xvZ2ljYWxNYXRyaXgnLFxuXHRcdFJOVU1FUklDX01BVFJJWDogJ251bWVyaWNNYXRyaXgnLFxuXHRcdFJJTlRFR0VSX01BVFJJWDogJ2ludGVnZXJNYXRyaXgnLFx0XHRcblx0XHRSU1RSSU5HX01BVFJJWDogJ2NoYXJhY3Rlck1hdHJpeCdcblx0fSxcblxuXHRpc0RhdGU6IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRyZXR1cm4gKHR5cGUgPT09IHRoaXMuZGVwbG95ci5SREFURSB8fCBcblx0XHQgICAgICAgIHR5cGUgPT09IHRoaXMuZGVwbG95ci5SUE9TSVhfREFURSB8fCBcblx0XHQgICAgICAgIHR5cGUgPT09IHRoaXMuZGVwbG95ci5SREFURV9WRUNUT1IgfHxcblx0XHQgICAgICAgIHR5cGUgPT09IHRoaXMuZGVwbG95ci5SUE9TSVhfREFURV9WRUNUT1IgfHxcblx0XHQgICAgICAgIHR5cGUgPT09IHRoaXMuci5EQVRFKTtcblx0fSxcblxuXHRkZXBsb3lyVG9SOiBmdW5jdGlvbih0eXBlKSB7XHRcblx0XHR2YXIgZGVwbG95ciA9IHRoaXMuZGVwbG95cixcblx0XHQgICAgciAgICAgICA9IHRoaXMucjtcblxuXHRcdGlmICghbWFwW3R5cGVdKSB7IC8vIGJ1aWxkIGNhdGFsb2cgb25seSBvbmNlXHRcblx0XHRcdG1hcFtkZXBsb3lyLlJCT09MRUFOXSAgICAgICAgICAgPSByLlBSSU1JVElWRTtcblx0XHRcdG1hcFtkZXBsb3lyLlJOVU1FUklDXSAgICAgICAgICAgPSByLlBSSU1JVElWRTtcblx0XHRcdG1hcFtkZXBsb3lyLlJJTlRFR0VSXSAgICAgICAgICAgPSByLlBSSU1JVElWRTtcblx0XHRcdG1hcFtkZXBsb3lyLlJTVFJJTkddICAgICAgICAgICAgPSByLlBSSU1JVElWRTtcblx0XHRcdG1hcFtkZXBsb3lyLlJEQVRFXSAgICAgICAgICAgICAgPSByLkRBVEU7XG5cdFx0XHRtYXBbZGVwbG95ci5SUE9TSVhfREFURV0gICAgICAgID0gci5EQVRFO1xuXHRcdFx0bWFwW2RlcGxveXIuUkJPT0xFQU5fVkVDVE9SXSAgICA9IHIuVkVDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUk5VTUVSSUNfVkVDVE9SXSAgICA9IHIuVkVDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUklOVEVHRVJfVkVDVE9SXSAgICA9IHIuVkVDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUlNUUklOR19WRUNUT1JdICAgICA9IHIuVkVDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUkRBVEVfVkVDVE9SXSAgICAgICA9IHIuVkVDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUlBPU0lYX0RBVEVfVkVDVE9SXSA9IHIuVkVDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUkxJU1RdICAgICAgICAgICAgICA9IHIuTElTVDtcblx0XHRcdG1hcFtkZXBsb3lyLlJEQVRBRlJBTUVdICAgICAgICAgPSByLkRBVEFGUkFNRTtcblx0XHRcdG1hcFtkZXBsb3lyLlJGQUNUT1JdICAgICAgICAgICAgPSByLkZBQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJPUkRFUkVEXSAgICAgICAgICAgPSByLkZBQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJCT09MRUFOX01BVFJJWF0gICAgPSByLk1BVFJJWDtcblx0XHRcdG1hcFtkZXBsb3lyLlJOVU1FUklDX01BVFJJWF0gICAgPSByLk1BVFJJWDtcblx0XHRcdG1hcFtkZXBsb3lyLlJJTlRFR0VSX01BVFJJWF0gICAgPSByLk1BVFJJWDtcblx0XHRcdG1hcFtkZXBsb3lyLlJTVFJJTkdfTUFUUklYXSAgICAgPSByLk1BVFJJWDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwW3R5cGVdO1x0XHRcblx0fSxcblxuXHQvKipcblx0ICogQXNzZXJ0IHRoYXQgdGhlIGByaW5wdXRgIHZhbHVlIGlzIHRoZSBjb3JyZWN0IEphdmFTY3JpcHQgRGF0YSBUeXBlLlxuXHQgKi9cblx0YXNzZXJ0OiBmdW5jdGlvbiAocmlucHV0KSB7XG5cdFx0dmFyIGRlcGxveXIgPSB0aGlzLmRlcGxveXIsXG4gICAgXHRcdE5PT1AgICAgPSBudWxsLFxuXHRcdCAgICB2YWx1ZXMgID0gcmlucHV0LnZhbHVlLFxuXHRcdCAgICBmbjtcblxuXHRcdHZhbHVlcyA9ICFMYW5nLmlzQXJyYXkodmFsdWVzKSA/IFt2YWx1ZXNdIDogdmFsdWVzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB2YWx1ZSA9IHZhbHVlc1tpXTtcblxuXHRcdFx0c3dpdGNoIChyaW5wdXQudHlwZSkge1xuXHRcdFx0XHRjYXNlIGRlcGxveXIuUk5VTUVSSUMgOlxuXHRcdFx0XHRjYXNlIGRlcGxveXIuUk5VTUVSSUNfVkVDVE9SIDpcblx0XHRcdFx0Y2FzZSBkZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUiA6XG5cdFx0XHRcdGZuID0gTGFuZy5pc051bWJlcjtcblx0XHRcdFx0Ly8gc3VwcG9ydCBzdHJpbmcgbnVtYmVyc1xuXHRcdFx0XHR2YXIgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cdFx0XHQgICAgdmFsdWUgPSBpc05hTih2YWwpID8gdmFsdWUgOiB2YWw7IFxuXHRcdFx0ICAgIGJyZWFrO1xuXG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJJTlRFR0VSIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUklOVEVHRVJfVkVDVE9SIDpcblx0XHRcdCAgICBmbiA9IExhbmcuaXNOdW1iZXI7XG5cdFx0XHQgICAgLy8gc3VwcG9ydCBzdHJpbmcgbnVtYmVyc1xuXHRcdFx0ICAgIHZhciB2YWwgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblx0XHRcdCAgICB2YWx1ZSA9IGlzTmFOKHZhbCkgPyB2YWx1ZSA6IHZhbDsgXG5cdFx0XHQgICAgYnJlYWs7XG5cblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkJPT0xFQU4gOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SQk9PTEVBTl9WRUNUT1IgOlxuXHRcdFx0ICAgIGZuID0gTGFuZy5pc0Jvb2xlYW47XG5cdFx0XHQgICAgYnJlYWs7XG5cdFx0XHQgICAgXG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJTVFJJTkcgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SU1RSSU5HX1ZFQ1RPUiA6XHRcblx0XHRcdCAgICBmbiA9IExhbmcuaXNTdHJpbmc7XG5cdFx0XHQgICAgYnJlYWs7XG5cblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkRBVEUgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SUE9TSVhfREFURSA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJEQVRFX1ZFQ1RPUiA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiA6XG5cdFx0XHQgICAgZm4gPSBMYW5nLmlzRGF0ZTtcblx0XHRcdCAgICBicmVhaztcblxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SRkFDVE9SIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUk9SREVSRUQgOlx0XHRcdCAgICBcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkRBVEFGUkFNRSA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJJTlRFR0VSX01BVFJJWCA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJCT09MRUFOX01BVFJJWCA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJTVFJJTkdfTUFUUklYIDpcdCAgICBcblx0XHRcdCAgICBmbiA9IE5PT1A7XG5cdFx0XHQgICAgYnJlYWtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuICYmICFmbih2YWx1ZSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdSSW5wdXRGb3JtYXRFcnJvcjogJyArICdcIicgKyB2YWx1ZSArIFxuXHRcdFx0XHRcdCdcIiBpcyBub3QgYSB2YWxpZCBcIicgKyByaW5wdXQudHlwZSArICdcIiB0eXBlLicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByaW5wdXQ7XG5cdH1cbn0pOyIsIi8qIVxuICogaHR0cHM6Ly9naXRodWIuY29tL0dvemFsYS9zZWxmaXNoXG4gKi9cblxuLyogdmltOnNldCB0cz0yIHN3PTIgc3RzPTIgZXhwYW5kdGFiICovXG4vKmpzaGludCB1bmRlZjogdHJ1ZSBlczU6IHRydWUgbm9kZTogdHJ1ZSBkZXZlbDogdHJ1ZSBldmlsOiB0cnVlXG4gICAgICAgICBmb3JpbjogdHJ1ZSBsYXRlZGVmOiBmYWxzZSBzdXBlcm5ldzogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiB0cnVlICovXG5cbiEodHlwZW9mIGRlZmluZSAhPT0gXCJmdW5jdGlvblwiID8gZnVuY3Rpb24oJCl7ICQobnVsbCwgdHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnID8gZXhwb3J0cyA6IHdpbmRvdyk7IH0gOiBkZWZpbmUpKGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuQmFzZSA9IE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShPYmplY3QucHJvdG90eXBlLCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYHRoaXNgIG9iamVjdCAoQW5hbG9nIG9mXG4gICAqIGBuZXcgT2JqZWN0KClgKS5cbiAgICogQGV4YW1wbGVzXG4gICAqXG4gICAqICAgIHZhciBEb2cgPSBCYXNlLmV4dGVuZCh7XG4gICAqICAgICAgYmFyazogZnVuY3Rpb24gYmFyaygpIHtcbiAgICogICAgICAgIHJldHVybiAnUnVmZiEgUnVmZiEnXG4gICAqICAgICAgfVxuICAgKiAgICB9KTtcbiAgICogICAgdmFyIGRvZyA9IERvZy5uZXcoKTtcbiAgICovXG4gICduZXcnOiB7IHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgb2JqZWN0LmluaXRpYWxpemUuYXBwbHkob2JqZWN0LCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH19LFxuICAvKipcbiAgICogV2hlbiBuZXcgaW5zdGFuY2Ugb2YgdGhlIHRoaXMgcHJvdG90eXBlIGlzIGNyZWF0ZWQgaXQncyBgaW5pdGlhbGl6ZWBcbiAgICogbWV0aG9kIGlzIGNhbGxlZCB3aXRoIGFsbCB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgYG5ld2AuIFlvdSBjYW5cbiAgICogb3ZlcnJpZGUgYGluaXRpYWxpemVgIHRvIHNldCB1cCBhbiBpbnN0YW5jZS5cbiAgICovXG4gIGluaXRpYWxpemU6IHsgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIH19LFxuICAvKipcbiAgICogTWVyZ2VzIGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgcGFzc2VkIG9iamVjdHMgaW50byBgdGhpc2AgaW5zdGFuY2UgKFRoaXNcbiAgICogbWV0aG9kIGNhbiBiZSB1c2VkIG9uIGluc3RhbmNlcyBvbmx5IGFzIHByb3RvdHlwZSBvYmplY3RzIGFyZSBmcm96ZW4pLlxuICAgKlxuICAgKiBJZiB0d28gb3IgbW9yZSBhcmd1bWVudCBvYmplY3RzIGhhdmUgb3duIHByb3BlcnRpZXMgd2l0aCB0aGUgc2FtZSBuYW1lLFxuICAgKiB0aGUgcHJvcGVydHkgaXMgb3ZlcnJpZGRlbiwgd2l0aCBwcmVjZWRlbmNlIGZyb20gcmlnaHQgdG8gbGVmdCwgaW1wbHlpbmcsXG4gICAqIHRoYXQgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IG9uIHRoZSBsZWZ0IGFyZSBvdmVycmlkZGVuIGJ5IGEgc2FtZSBuYW1lZFxuICAgKiBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0IG9uIHRoZSByaWdodC5cbiAgICpcbiAgICogQGV4YW1wbGVzXG4gICAqXG4gICAqICAgIHZhciBQZXQgPSBEb2cuZXh0ZW5kKHtcbiAgICogICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICogICAgICAgIC8vIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZSAtPiB3b3VsZCBoYXZlIHRocm93biAoZnJvemVuIHByb3RvdHlwZSlcbiAgICogICAgICAgIHRoaXMubWVyZ2Uob3B0aW9ucykgLy8gd2lsbCBvdmVycmlkZSBhbGwgcHJvcGVydGllcy5cbiAgICogICAgICB9LFxuICAgKiAgICAgIGNhbGw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICogICAgICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG5hbWUgPyB0aGlzLmJhcmsoKSA6ICcnXG4gICAqICAgICAgfSxcbiAgICogICAgICBuYW1lOiBudWxsXG4gICAqICAgIH0pXG4gICAqICAgIHZhciBwZXQgPSBQZXQubmV3KHsgbmFtZTogJ0Jlbnp5JywgYnJlZWQ6ICdMYWJyYWRvcicgfSlcbiAgICogICAgcGV0LmNhbGwoJ0Jlbnp5JykgICAvLyAnUnVmZiEgUnVmZiEnXG4gICAqL1xuICBtZXJnZTogeyB2YWx1ZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSB7fTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZXNjcmlwdG9yW25hbWVdID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm9wZXJ0aWVzLCBuYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIGRlc2NyaXB0b3IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9fSxcbiAgLyoqXG4gICAqIFRha2VzIGFueSBudW1iZXIgb2YgYXJndW1lbnQgb2JqZWN0cyBhbmQgcmV0dXJucyBmcm96ZW4sIGNvbXBvc2l0ZSBvYmplY3RcbiAgICogdGhhdCBpbmhlcml0cyBmcm9tIGB0aGlzYCBvYmplY3QgYW5kIGNvbWJpbmVzIGFsbCBvZiB0aGUgb3duIHByb3BlcnRpZXMgb2ZcbiAgICogdGhlIGFyZ3VtZW50IG9iamVjdHMuIChPYmplY3RzIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gYXJlIGZyb3plbiBhc1xuICAgKiB0aGV5IGFyZSBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIHR5cGVzKS5cbiAgICpcbiAgICogSWYgdHdvIG9yIG1vcmUgYXJndW1lbnQgb2JqZWN0cyBoYXZlIG93biBwcm9wZXJ0aWVzIHdpdGggdGhlIHNhbWUgbmFtZSxcbiAgICogdGhlIHByb3BlcnR5IGlzIG92ZXJyaWRkZW4sIHdpdGggcHJlY2VkZW5jZSBmcm9tIHJpZ2h0IHRvIGxlZnQsIGltcGx5aW5nLFxuICAgKiB0aGF0IHByb3BlcnRpZXMgb2YgdGhlIG9iamVjdCBvbiB0aGUgbGVmdCBhcmUgb3ZlcnJpZGRlbiBieSBhIHNhbWUgbmFtZWRcbiAgICogcHJvcGVydHkgb2YgdGhlIG9iamVjdCBvbiB0aGUgcmlnaHQuXG4gICAqIEBleGFtcGxlc1xuICAgKlxuICAgKiAgICAvLyAjIyBPYmplY3QgY29tcG9zaXRpb24gIyNcbiAgICpcbiAgICogICAgdmFyIEhFWCA9IEJhc2UuZXh0ZW5kKHtcbiAgICogICAgICBoZXg6IGZ1bmN0aW9uIGhleCgpIHtcbiAgICogICAgICAgIHJldHVybiAnIycgKyB0aGlzLmNvbG9yO1xuICAgKiAgICAgIH1cbiAgICogICAgfSlcbiAgICpcbiAgICogICAgdmFyIFJHQiA9IEJhc2UuZXh0ZW5kKHtcbiAgICogICAgICByZWQ6IGZ1bmN0aW9uIHJlZCgpIHtcbiAgICogICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xuICAgKiAgICAgIH0sXG4gICAqICAgICAgZ3JlZW46IGZ1bmN0aW9uIGdyZWVuKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XG4gICAqICAgICAgfSxcbiAgICogICAgICBibHVlOiBmdW5jdGlvbiBibHVlKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gICAqICAgICAgfVxuICAgKiAgICB9KVxuICAgKlxuICAgKiAgICB2YXIgQ01ZSyA9IEJhc2UuZXh0ZW5kKFJHQiwge1xuICAgKiAgICAgIGJsYWNrOiBmdW5jdGlvbiBibGFjaygpIHtcbiAgICogICAgICAgIHZhciBjb2xvciA9IE1hdGgubWF4KE1hdGgubWF4KHRoaXMucmVkKCksIHRoaXMuZ3JlZW4oKSksIHRoaXMuYmx1ZSgpKTtcbiAgICogICAgICAgIHJldHVybiAoMSAtIGNvbG9yIC8gMjU1KS50b0ZpeGVkKDQpO1xuICAgKiAgICAgIH0sXG4gICAqICAgICAgY3lhbjogZnVuY3Rpb24gY3lhbigpIHtcbiAgICogICAgICAgIHZhciBLID0gdGhpcy5ibGFjaygpO1xuICAgKiAgICAgICAgcmV0dXJuICgoKDEgLSB0aGlzLnJlZCgpIC8gMjU1KS50b0ZpeGVkKDQpIC0gSykgLyAoMSAtIEspKS50b0ZpeGVkKDQpO1xuICAgKiAgICAgIH0sXG4gICAqICAgICAgbWFnZW50YTogZnVuY3Rpb24gbWFnZW50YSgpIHtcbiAgICogICAgICAgIHZhciBLID0gdGhpcy5ibGFjaygpO1xuICAgKiAgICAgICAgcmV0dXJuICgoKDEgLSB0aGlzLmdyZWVuKCkgLyAyNTUpLnRvRml4ZWQoNCkgLSBLKSAvICgxIC0gSykpLnRvRml4ZWQoNCk7XG4gICAqICAgICAgfSxcbiAgICogICAgICB5ZWxsb3c6IGZ1bmN0aW9uIHllbGxvdygpIHtcbiAgICogICAgICAgIHZhciBLID0gdGhpcy5ibGFjaygpO1xuICAgKiAgICAgICAgcmV0dXJuICgoKDEgLSB0aGlzLmJsdWUoKSAvIDI1NSkudG9GaXhlZCg0KSAtIEspIC8gKDEgLSBLKSkudG9GaXhlZCg0KTtcbiAgICogICAgICB9XG4gICAqICAgIH0pXG4gICAqXG4gICAqICAgIHZhciBDb2xvciA9IEJhc2UuZXh0ZW5kKEhFWCwgUkdCLCBDTVlLLCB7XG4gICAqICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gQ29sb3IoY29sb3IpIHtcbiAgICogICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICogICAgICB9XG4gICAqICAgIH0pO1xuICAgKlxuICAgKiAgICAvLyAjIyBQcm90b3R5cGFsIGluaGVyaXRhbmNlICMjXG4gICAqXG4gICAqICAgIHZhciBQaXhlbCA9IENvbG9yLmV4dGVuZCh7XG4gICAqICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gUGl4ZWwoeCwgeSwgaGV4KSB7XG4gICAqICAgICAgICBDb2xvci5pbml0aWFsaXplLmNhbGwodGhpcywgaGV4KTtcbiAgICogICAgICAgIHRoaXMueCA9IHg7XG4gICAqICAgICAgICB0aGlzLnkgPSB5O1xuICAgKiAgICAgIH0sXG4gICAqICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHRoaXMueCArICc6JyArIHRoaXMueSArICdAJyArIHRoaXMuaGV4KCk7XG4gICAqICAgICAgfVxuICAgKiAgICB9KTtcbiAgICpcbiAgICogICAgdmFyIHBpeGVsID0gUGl4ZWwubmV3KDExLCAyMywgJ0NDMzM5OScpXG4gICAqICAgIHBpeGVsLnRvU3RyaW5nKCk7IC8vIDExOjIzQCNDQzMzOTlcbiAgICpcbiAgICogICAgcGl4ZWwucmVkKCk7ICAgICAgLy8gMjA0XG4gICAqICAgIHBpeGVsLmdyZWVuKCk7ICAgIC8vIDUxXG4gICAqICAgIHBpeGVsLmJsdWUoKTsgICAgIC8vIDE1M1xuICAgKlxuICAgKiAgICBwaXhlbC5jeWFuKCk7ICAgICAvLyAwLjAwMDBcbiAgICogICAgcGl4ZWwubWFnZW50YSgpOyAgLy8gMC43NTAwXG4gICAqICAgIHBpeGVsLnllbGxvdygpOyAgIC8vIDAuMjUwMFxuICAgKlxuICAgKi9cbiAgIGV4dGVuZDogeyB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHRoaXMubWVyZ2UuYXBwbHkoT2JqZWN0LmNyZWF0ZSh0aGlzKSwgYXJndW1lbnRzKSk7XG4gIH19XG59KSk7XG5cbn0pOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBMYW5nID0gcmVxdWlyZSgnLi9sYW5nJyk7XG5cbnZhciBnZXQgPSBleHBvcnRzLmdldCA9IGZ1bmN0aW9uKHMsIGtleSkge1xuICAgIGZ1bmN0aW9uIHRyYXZlcnNlKG9iaiwgZm4sIHBhcmVudCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KHRoaXMsIFtpLCBvYmpbaV0sIHBhcmVudF0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvYmpbaV0gaW5zdGFuY2VvZiBPYmplY3QgJiYgIShvYmpbaV0gaW5zdGFuY2VvZiBBcnJheSkpIHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgdHJhdmVyc2Uob2JqW2ldLCBmbiwgaSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5KSB7XG4gICAgICAgIHZhciBhY2MgPSB7fTtcbiAgICAgICAgdHJhdmVyc2Uob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlLCBwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHByb3BlcnR5KSB7ICBcbiAgICAgICAgICAgICAgICBhY2MgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1wdHkob2JqKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7IGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHJldHVybiBvYmo7IH1cbiAgICAgICAgcmV0dXJuICFMYW5nLmlzT2JqZWN0KG9iaikgPyBvYmogOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBlbXB0eShnZXRQcm9wZXJ0eShzLCBrZXkpKTtcbn07XG5cbnZhciBpbkFycmF5ID0gZXhwb3J0cy5pbkFycmF5ID0gZnVuY3Rpb24oaGF5c3RhY2ssIG5lZWRsZSwga2V5KSB7XG4gICAgdmFyIGksIG1heCA9IGhheXN0YWNrLmxlbmd0aDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV1ba2V5XSA9PT0gbmVlZGxlKSB7IHJldHVybiBoYXlzdGFja1tpXTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldID09PSBuZWVkbGUpIHsgcmV0dXJuIGhheXN0YWNrW2ldOyB9XG4gICAgICAgIH0gICBcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24odG8sIGZyb20pIHsgICAgICAgIFxuICAgIGlmICghdG8gfHwgdHlwZW9mKHRvKSAhPT0gJ29iamVjdCcpIHsgdG8gPSB7fTsgfVxuICAgIGlmICghZnJvbSB8fCB0eXBlb2YoZnJvbSkgIT09ICdvYmplY3QnKSB7IGZyb20gPSB7fTsgfVxuXG4gICAgZm9yICh2YXIgayBpbiBmcm9tKSB7IHRvW2tdID0gZnJvbVtrXTsgfVxuXG4gICAgcmV0dXJuIHRvO1xufTtcblxuZXhwb3J0cy53b3Jrc3BhY2UgPSBmdW5jdGlvbihvYmosIG5hbWUpIHtcbiAgICB2YXIgd3MgPSBnZXQob2JqLCAnd29ya3NwYWNlJyk7XG4gICAgcmV0dXJuICh3cyA/IG5hbWUgPyBpbkFycmF5KHdzLm9iamVjdHMsIG5hbWUsICduYW1lJykgOiB3cy5vYmplY3RzIHx8IHdzLm9iamVjdDogbnVsbCk7XG59O1xuXG5leHBvcnRzLnNpZ25hdHVyZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHNbJzAnXSwgMCksXG4gICAgICAgIGxlbiAgICA9IGFyZ3MubGVuZ3RoLFxuICAgICAgICBjcmVhdGUgPSBmYWxzZSxcbiAgICAgICAgb3B0cyAgID0ge30sXG4gICAgICAgIGFwaTtcblxuICAgIGlmIChsZW4gPT09IDEgJiYgTGFuZy5pc09iamVjdChhcmdzWzBdKSkge1xuICAgICAgICBvcHRzID0gYXJnc1swXTtcbiAgICAgICAgYXBpICA9IG9wdHMucHJvamVjdCA/ICcvci9wcm9qZWN0L2V4ZWN1dGUvc2NyaXB0JyA6XG4gICAgICAgICAgICAnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZSc7XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDEgJiYgTGFuZy5pc1N0cmluZyhhcmdzWzBdKSkge1xuICAgICAgICBhcmdzID0gYXJnc1swXS5zcGxpdCgnXFwvJyk7XG4gICAgICAgIGFwaSAgPSAnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZSdcbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIGF1dGhvcjogYXJnc1sxXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogYXJnc1syXSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhcmdzWzNdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICAgICAgLy8gZXg6IC5zY3JpcHQoJy90ZXN0dXNlci9yb290L0RlcGxveVIgLSBIZWxsbyBXb3JsZC5SJywgcHJvamVjdClcbiAgICAgICAgdmFyIHByb2plY3QgPSBhcmdzWzFdO1xuICAgICAgICBhcGkgPSBwcm9qZWN0ID8gJy9yL3Byb2plY3QvZXhlY3V0ZS9zY3JpcHQnIDogJy9yL3JlcG9zaXRvcnkvc2NyaXB0L2V4ZWN1dGUnO1xuXG4gICAgICAgIGFyZ3MgPSBhcmdzWzBdLnNwbGl0KCdcXC8nKTtcbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3QsXG4gICAgICAgICAgICBhdXRob3I6IGFyZ3NbMV0sXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGFyZ3NbMl0sXG4gICAgICAgICAgICBmaWxlbmFtZTogYXJnc1szXVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAobGVuID4gMikge1xuICAgICAgICAvLyBleDogLnNjcmlwdCgnRGVwbG95UiAtIEhlbGxvIFdvcmxkLlInLCAndGVzdHVzZXInLCAncm9vdCcpXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICBhdXRob3I6IGFyZ3NbMl0sXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGFyZ3NbMV0sXG4gICAgICAgICAgICBmaWxlbmFtZTogYXJnc1swXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGluZGljYXRlIGEgbmV3IHByb2plY3Qgc2hvdWxkIGJlIGNyZWF0ZWRcbiAgICBpZiAob3B0cy5wcm9qZWN0ICYmIExhbmcuaXNCb29sZWFuKG9wdHMucHJvamVjdCkpIHtcbiAgICAgIGRlbGV0ZSBvcHRzWydwcm9qZWN0J107XG4gICAgICBjcmVhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFwaTogYXBpLFxuICAgICAgICBvcHRzOiBvcHRzLFxuICAgICAgICBjcmVhdGU6IGNyZWF0ZVxuICAgIH07XG59OyIsbnVsbCwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50UXVldWU7XG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHZhciBpID0gLTE7XG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtpXSgpO1xuICAgICAgICB9XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbn1cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgcXVldWUucHVzaChmdW4pO1xuICAgIGlmICghZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuKiBhdHRlbXB0IG9mIGEgc2ltcGxlIGRlZmVyL3Byb21pc2UgbGlicmFyeSBmb3IgbW9iaWxlIGRldmVsb3BtZW50XG4qIEBhdXRob3IgSm9uYXRoYW4gR290dGkgPCBqZ290dGkgYXQgamdvdHRpIGRvdCBuZXQ+XG4qIEBzaW5jZSAyMDEyLTEwXG4qIEB2ZXJzaW9uIDAuNi4wXG4qIEBjaGFuZ2Vsb2dcbiogICAgICAgICAgIC0gMjAxMy0xMi0wNyAtIGxhc3QgcHJvbWlzZSAxLjEgc3BlY3MgdGVzdCBwYXNzaW5ncyAodGh4IHRvIHdpemFyZHdlcmRuYSlcbiAqICAgICAgICAgICAgICAgICAgICAgICAtIHJlZHVjZSBwcm9taXNlcyBmb290cHJpbnQgYnkgdW5zY29waW5nIG1ldGhvZHMgdGhhdCBjb3VsZCBiZVxuKiAgICAgICAgICAgLSAyMDEzLTEwLTIzIC0gbWFrZSBpdCB3b3JraWcgYWNyb3NzIG5vZGUtd2Via2l0IGNvbnRleHRzXG4qICAgICAgICAgICAtIDIwMTMtMDctMDMgLSBidWcgY29ycmVjdGlvbiBpbiBwcm9taXhpZnkgbWV0aG9kICh0aHggdG8gYWRyaWVuIGdpYnJhdCApXG4qICAgICAgICAgICAtIDIwMTMtMDYtMjIgLSBidWcgY29ycmVjdGlvbiBpbiBub2RlQ2Fwc3VsZSBtZXRob2RcbiogICAgICAgICAgIC0gMjAxMy0wNi0xNyAtIHJlbW92ZSB1bm5lY2Vzc2FyeSBBcnJheS5pbmRleE9mIG1ldGhvZCBkZXBlbmRlbmN5XG4qICAgICAgICAgICAtIDIwMTMtMDQtMTggLSBhZGQgdHJ5L2NhdGNoIGJsb2NrIGFyb3VuZCBub2RlQ2Fwc3VsZWQgbWV0aG9kc1xuKiAgICAgICAgICAgLSAyMDEzLTA0LTEzIC0gY2hlY2sgcHJvbWlzZXMvQSsgY29uZm9ybWl0eVxuKiAgICAgICAgICAgICAgICAgICAgICAgIC0gbWFrZSBzb21lIG1pbmljYXRpb24gb3B0aW1pc2F0aW9uc1xuKiAgICAgICAgICAgLSAyMDEzLTAzLTI2IC0gYWRkIHJlc29sdmVkLCBmdWxmaWxsZWQgYW5kIHJlamVjdGVkIG1ldGhvZHNcbiogICAgICAgICAgIC0gMjAxMy0wMy0yMSAtIGJyb3dzZXIvbm9kZSBjb21wYXRpYmxlXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBuZXcgbWV0aG9kIG5vZGVDYXBzdWxlXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBzaW1wbGVyIHByb21peGlmeSB3aXRoIGZ1bGwgYXBpIHN1cHBvcnRcbiogICAgICAgICAgIC0gMjAxMy0wMS0yNSAtIGFkZCByZXRocm93IG1ldGhvZFxuKiAgICAgICAgICAgICAgICAgICAgICAgIC0gbmV4dFRpY2sgb3B0aW1pc2F0aW9uIC0+IGFkZCBzdXBwb3J0IGZvciBwcm9jZXNzLm5leHRUaWNrICsgTWVzc2FnZUNoYW5uZWwgd2hlcmUgYXZhaWxhYmxlXG4qICAgICAgICAgICAtIDIwMTItMTItMjggLSBhZGQgYXBwbHkgbWV0aG9kIHRvIHByb21pc2VcbiogICAgICAgICAgIC0gMjAxMi0xMi0yMCAtIGFkZCBhbHdheXNBc3luYyBwYXJhbWV0ZXJzIGFuZCBwcm9wZXJ0eSBmb3IgZGVmYXVsdCBzZXR0aW5nXG4qL1xuKGZ1bmN0aW9uKHVuZGVmKXtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIG5leHRUaWNrXG5cdFx0LCBpc0Z1bmMgPSBmdW5jdGlvbihmKXsgcmV0dXJuICggdHlwZW9mIGYgPT09ICdmdW5jdGlvbicgKTsgfVxuXHRcdCwgaXNBcnJheSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkoYSkgOiAoYSBpbnN0YW5jZW9mIEFycmF5KTsgfVxuXHRcdCwgaXNPYmpPckZ1bmMgPSBmdW5jdGlvbihvKXsgcmV0dXJuICEhKG8gJiYgKHR5cGVvZiBvKS5tYXRjaCgvZnVuY3Rpb258b2JqZWN0LykpOyB9XG5cdFx0LCBpc05vdFZhbCA9IGZ1bmN0aW9uKHYpeyByZXR1cm4gKHYgPT09IGZhbHNlIHx8IHYgPT09IHVuZGVmIHx8IHYgPT09IG51bGwpOyB9XG5cdFx0LCBzbGljZSA9IGZ1bmN0aW9uKGEsIG9mZnNldCl7IHJldHVybiBbXS5zbGljZS5jYWxsKGEsIG9mZnNldCk7IH1cblx0XHQsIHVuZGVmU3RyID0gJ3VuZGVmaW5lZCdcblx0XHQsIHRFcnIgPSB0eXBlb2YgVHlwZUVycm9yID09PSB1bmRlZlN0ciA/IEVycm9yIDogVHlwZUVycm9yXG5cdDtcblx0aWYgKCAodHlwZW9mIHByb2Nlc3MgIT09IHVuZGVmU3RyKSAmJiBwcm9jZXNzLm5leHRUaWNrICkge1xuXHRcdG5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcblx0fSBlbHNlIGlmICggdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSB1bmRlZlN0ciApIHtcblx0XHR2YXIgbnRpY2tDaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCksIHF1ZXVlID0gW107XG5cdFx0bnRpY2tDaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCl7IHF1ZXVlLmxlbmd0aCAmJiAocXVldWUuc2hpZnQoKSkoKTsgfTtcblx0XHRuZXh0VGljayA9IGZ1bmN0aW9uKGNiKXtcblx0XHRcdHF1ZXVlLnB1c2goY2IpO1xuXHRcdFx0bnRpY2tDaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0bmV4dFRpY2sgPSBmdW5jdGlvbihjYil7IHNldFRpbWVvdXQoY2IsIDApOyB9O1xuXHR9XG5cdGZ1bmN0aW9uIHJldGhyb3coZSl7IG5leHRUaWNrKGZ1bmN0aW9uKCl7IHRocm93IGU7fSk7IH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYgZGVmZXJyZWRcblx0ICogQHByb3BlcnR5IHtwcm9taXNlfSBwcm9taXNlXG5cdCAqIEBtZXRob2QgcmVzb2x2ZVxuXHQgKiBAbWV0aG9kIGZ1bGZpbGxcblx0ICogQG1ldGhvZCByZWplY3Rcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gZnVsZmlsbGVkXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgcHJvbWlzZSByZXNvbHZlZCB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Kn0gbmV4dCBwcm9taXNlIHJlc29sdXRpb24gdmFsdWVcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gZmFpbGVkXG5cdCAqIEBwYXJhbSB7Kn0gcmVhc29uIHByb21pc2UgcmVqZWN0aW9uIHJlYXNvblxuXHQgKiBAcmV0dXJucyB7Kn0gbmV4dCBwcm9taXNlIHJlc29sdXRpb24gdmFsdWUgb3IgcmV0aHJvdyB0aGUgcmVhc29uXG5cdCAqL1xuXG5cdC8vLS0gZGVmaW5pbmcgdW5lbmNsb3NlZCBwcm9taXNlIG1ldGhvZHMgLS0vL1xuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIHdpdGhvdXQgZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2Vfc3VjY2VzcyhmdWxmaWxsZWQpeyByZXR1cm4gdGhpcy50aGVuKGZ1bGZpbGxlZCwgdW5kZWYpOyB9XG5cblx0LyoqXG5cdCAqIHNhbWUgYXMgdGhlbiB3aXRoIG9ubHkgYSBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmYWlsZWR9IGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9lcnJvcihmYWlsZWQpeyByZXR1cm4gdGhpcy50aGVuKHVuZGVmLCBmYWlsZWQpOyB9XG5cblxuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIGJ1dCBmdWxmaWxsZWQgY2FsbGJhY2sgd2lsbCByZWNlaXZlIG11bHRpcGxlIHBhcmFtZXRlcnMgd2hlbiBwcm9taXNlIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIEFycmF5XG5cdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmYWlsZWR9IGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9hcHBseShmdWxmaWxsZWQsIGZhaWxlZCl7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdGZ1bmN0aW9uKGEpe1xuXHRcdFx0XHRyZXR1cm4gaXNGdW5jKGZ1bGZpbGxlZCkgPyBmdWxmaWxsZWQuYXBwbHkobnVsbCwgaXNBcnJheShhKSA/IGEgOiBbYV0pIDogKGRlZmVyLm9ubHlGdW5jcyA/IGEgOiBmdWxmaWxsZWQpO1xuXHRcdFx0fVxuXHRcdFx0LCBmYWlsZWQgfHwgdW5kZWZcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIGNsZWFudXAgbWV0aG9kIHdoaWNoIHdpbGwgYmUgYWx3YXlzIGV4ZWN1dGVkIHJlZ2FyZGxlc3MgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIGEgY2FsbGJhY2sgY2FsbGVkIHJlZ2FyZGxlc3Mgb2YgdGhlIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBvZiB0aGUgcHJvbWlzZSB3aGljaCB3aWxsIGJlIGNhbGxlZFxuXHQgKiAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSBwcm9taXNlIGlzIG5vdCBwZW5kaW5nIGFueW1vcmVcblx0ICogQHJldHVybnMge3Byb21pc2V9IHRoZSBzYW1lIHByb21pc2UgdW50b3VjaGVkXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2Vuc3VyZShjYil7XG5cdFx0ZnVuY3Rpb24gX2NiKCl7IGNiKCk7IH1cblx0XHR0aGlzLnRoZW4oX2NiLCBfY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRha2UgYSBzaW5nbGUgY2FsbGJhY2sgd2hpY2ggd2FpdCBmb3IgYW4gZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyLiBvdGhlciByZXNvbHV0aW9uIHZhbHVlcyBhcmUgcGFzc2VkIGFzIHdpdGggdGhlIGFwcGx5L3NwcmVhZCBtZXRob2Rcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgYSBjYWxsYmFjayBjYWxsZWQgcmVnYXJkbGVzcyBvZiB0aGUgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHByb21pc2UgaXMgbm90IHBlbmRpbmcgYW55bW9yZSB3aXRoIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlciBpZiBhbnkgYXMgaW4gbm9kZSBzdHlsZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay4gUmVzdCBvZiBwYXJhbWV0ZXJzIHdpbGwgYmUgYXBwbGllZCBhcyB3aXRoIHRoZSBhcHBseSBtZXRob2QuXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX25vZGlmeShjYil7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdGZ1bmN0aW9uKGEpe1xuXHRcdFx0XHRyZXR1cm4gaXNGdW5jKGNiKSA/IGNiLmFwcGx5KG51bGwsIGlzQXJyYXkoYSkgPyBhLnNwbGljZSgwLDAsdW5kZWZpbmVkKSAmJiBhIDogW3VuZGVmaW5lZCxhXSkgOiAoZGVmZXIub25seUZ1bmNzID8gYSA6IGNiKTtcblx0XHRcdH1cblx0XHRcdCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdHJldHVybiBjYihlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmYWlsZWRdIHdpdGhvdXQgcGFyYW1ldGVyIHdpbGwgb25seSByZXRocm93IHByb21pc2UgcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIG9mIHRoZSBwcm9taXNlIGxpYnJhcnkgb24gbmV4dCB0aWNrXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHBhc3NlZCBhIGZhaWxlZCBtZXRob2QgdGhlbiB3aWxsIGNhbGwgZmFpbGVkIG9uIHJlamVjdGlvbiBhbmQgdGhyb3cgdGhlIGVycm9yIGFnYWluIGlmIGZhaWxlZCBkaWRuJ3Rcblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfcmV0aHJvdyhmYWlsZWQpe1xuXHRcdHJldHVybiB0aGlzLnRoZW4oXG5cdFx0XHR1bmRlZlxuXHRcdFx0LCBmYWlsZWQgPyBmdW5jdGlvbihlKXsgZmFpbGVkKGUpOyB0aHJvdyBlOyB9IDogcmV0aHJvd1xuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0KiBAcGFyYW0ge2Jvb2xlYW59IFthbHdheXNBc3luY10gaWYgc2V0IGZvcmNlIHRoZSBhc3luYyByZXNvbHV0aW9uIGZvciB0aGlzIHByb21pc2UgaW5kZXBlbmRhbnRseSBvZiB0aGUgRC5hbHdheXNBc3luYyBvcHRpb25cblx0KiBAcmV0dXJucyB7ZGVmZXJyZWR9IGRlZmVyZWQgb2JqZWN0IHdpdGggcHJvcGVydHkgJ3Byb21pc2UnIGFuZCBtZXRob2RzIHJlamVjdCxmdWxmaWxsLHJlc29sdmUgKGZ1bGZpbGwgYmVpbmcgYW4gYWxpYXMgZm9yIHJlc29sdmUpXG5cdCovXG5cdHZhciBkZWZlciA9IGZ1bmN0aW9uIChhbHdheXNBc3luYyl7XG5cdFx0dmFyIGFsd2F5c0FzeW5jRm4gPSAodW5kZWYgIT09IGFsd2F5c0FzeW5jID8gYWx3YXlzQXN5bmMgOiBkZWZlci5hbHdheXNBc3luYykgPyBuZXh0VGljayA6IGZ1bmN0aW9uKGZuKXtmbigpO31cblx0XHRcdCwgc3RhdHVzID0gMCAvLyAtMSBmYWlsZWQgfCAxIGZ1bGZpbGxlZFxuXHRcdFx0LCBwZW5kaW5ncyA9IFtdXG5cdFx0XHQsIHZhbHVlXG5cdFx0XHQvKipcblx0XHRcdCAqIEB0eXBlZGVmIHByb21pc2Vcblx0XHRcdCAqL1xuXHRcdFx0LCBfcHJvbWlzZSAgPSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAcGFyYW0ge2Z1bGZpbGxlZHxmdW5jdGlvbn0gZnVsZmlsbGVkIGNhbGxiYWNrXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZmFpbGVkfGZ1bmN0aW9ufSBmYWlsZWQgY2FsbGJhY2tcblx0XHRcdFx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoZW46IGZ1bmN0aW9uKGZ1bGZpbGxlZCwgZmFpbGVkKXtcblx0XHRcdFx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0XHRcdFx0cGVuZGluZ3MucHVzaChbXG5cdFx0XHRcdFx0XHRmdW5jdGlvbih2YWx1ZSl7XG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRpZiggaXNOb3RWYWwoZnVsZmlsbGVkKSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRkLnJlc29sdmUodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkLnJlc29sdmUoaXNGdW5jKGZ1bGZpbGxlZCkgPyBmdWxmaWxsZWQodmFsdWUpIDogKGRlZmVyLm9ubHlGdW5jcyA/IHZhbHVlIDogZnVsZmlsbGVkKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCwgZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0XHRcdFx0aWYgKCBpc05vdFZhbChmYWlsZWQpIHx8ICgoIWlzRnVuYyhmYWlsZWQpKSAmJiBkZWZlci5vbmx5RnVuY3MpICkge1xuXHRcdFx0XHRcdFx0XHRcdGQucmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCBmYWlsZWQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJ5eyBkLnJlc29sdmUoaXNGdW5jKGZhaWxlZCkgPyBmYWlsZWQoZXJyKSA6IGZhaWxlZCk7IH1jYXRjaChlKXsgZC5yZWplY3QoZSk7fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0c3RhdHVzICE9PSAwICYmIGFsd2F5c0FzeW5jRm4oZXhlY0NhbGxiYWNrcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCwgc3VjY2VzczogcHJvbWlzZV9zdWNjZXNzXG5cblx0XHRcdFx0LCBlcnJvcjogcHJvbWlzZV9lcnJvclxuXHRcdFx0XHQsIG90aGVyd2lzZTogcHJvbWlzZV9lcnJvclxuXG5cdFx0XHRcdCwgYXBwbHk6IHByb21pc2VfYXBwbHlcblx0XHRcdFx0LCBzcHJlYWQ6IHByb21pc2VfYXBwbHlcblxuXHRcdFx0XHQsIGVuc3VyZTogcHJvbWlzZV9lbnN1cmVcblxuXHRcdFx0XHQsIG5vZGlmeTogcHJvbWlzZV9ub2RpZnlcblxuXHRcdFx0XHQsIHJldGhyb3c6IHByb21pc2VfcmV0aHJvd1xuXG5cdFx0XHRcdCwgaXNQZW5kaW5nOiBmdW5jdGlvbigpeyByZXR1cm4gISEoc3RhdHVzID09PSAwKTsgfVxuXG5cdFx0XHRcdCwgZ2V0U3RhdHVzOiBmdW5jdGlvbigpeyByZXR1cm4gc3RhdHVzOyB9XG5cdFx0XHR9XG5cdFx0O1xuXHRcdF9wcm9taXNlLnRvU291cmNlID0gX3Byb21pc2UudG9TdHJpbmcgPSBfcHJvbWlzZS52YWx1ZU9mID0gZnVuY3Rpb24oKXtyZXR1cm4gdmFsdWUgPT09IHVuZGVmID8gdGhpcyA6IHZhbHVlOyB9O1xuXG5cblx0XHRmdW5jdGlvbiBleGVjQ2FsbGJhY2tzKCl7XG5cdFx0XHRpZiAoIHN0YXR1cyA9PT0gMCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNicyA9IHBlbmRpbmdzLCBpID0gMCwgbCA9IGNicy5sZW5ndGgsIGNiSW5kZXggPSB+c3RhdHVzID8gMCA6IDEsIGNiO1xuXHRcdFx0cGVuZGluZ3MgPSBbXTtcblx0XHRcdGZvciggOyBpIDwgbDsgaSsrICl7XG5cdFx0XHRcdChjYiA9IGNic1tpXVtjYkluZGV4XSkgJiYgY2IodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZ1bGZpbGwgZGVmZXJyZWQgd2l0aCBnaXZlbiB2YWx1ZVxuXHRcdCAqIEBwYXJhbSB7Kn0gdmFsXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVzb2x2ZSh2YWwpe1xuXHRcdFx0dmFyIGRvbmUgPSBmYWxzZTtcblx0XHRcdGZ1bmN0aW9uIG9uY2UoZil7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRpZiAoZG9uZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZih4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHN0YXR1cyApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgdGhlbiA9IGlzT2JqT3JGdW5jKHZhbCkgJiYgdmFsLnRoZW47XG5cdFx0XHRcdGlmICggaXNGdW5jKHRoZW4pICkgeyAvLyBtYW5hZ2luZyBhIHByb21pc2Vcblx0XHRcdFx0XHRpZiggdmFsID09PSBfcHJvbWlzZSApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IHRFcnIoXCJQcm9taXNlIGNhbid0IHJlc29sdmUgaXRzZWxmXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGVuLmNhbGwodmFsLCBvbmNlKF9yZXNvbHZlKSwgb25jZShfcmVqZWN0KSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0b25jZShfcmVqZWN0KShlKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhbHVlID0gdmFsO1xuXHRcdFx0XHRzdGF0dXMgPSAxO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIHJlamVjdCBkZWZlcnJlZCB3aXRoIGdpdmVuIHJlYXNvblxuXHRcdCAqIEBwYXJhbSB7Kn0gRXJyXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVqZWN0KEVycil7XG5cdFx0XHRzdGF0dXMgfHwgYWx3YXlzQXN5bmNGbihmdW5jdGlvbigpe1xuXHRcdFx0XHR0cnl7IHRocm93KEVycik7IH1jYXRjaChlKXsgdmFsdWUgPSBlOyB9XG5cdFx0XHRcdHN0YXR1cyA9IC0xO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gLyoqQHR5cGUgZGVmZXJyZWQgKi8ge1xuXHRcdFx0cHJvbWlzZTpfcHJvbWlzZVxuXHRcdFx0LHJlc29sdmU6X3Jlc29sdmVcblx0XHRcdCxmdWxmaWxsOl9yZXNvbHZlIC8vIGFsaWFzXG5cdFx0XHQscmVqZWN0Ol9yZWplY3Rcblx0XHR9O1xuXHR9O1xuXG5cdGRlZmVyLmRlZmVycmVkID0gZGVmZXIuZGVmZXIgPSBkZWZlcjtcblx0ZGVmZXIubmV4dFRpY2sgPSBuZXh0VGljaztcblx0ZGVmZXIuYWx3YXlzQXN5bmMgPSB0cnVlOyAvLyBzZXR0aW5nIHRoaXMgd2lsbCBjaGFuZ2UgZGVmYXVsdCBiZWhhdmlvdXIuIHVzZSBpdCBvbmx5IGlmIG5lY2Vzc2FyeSBhcyBhc3luY2hyb25pY2l0eSB3aWxsIGZvcmNlIHNvbWUgZGVsYXkgYmV0d2VlbiB5b3VyIHByb21pc2UgcmVzb2x1dGlvbnMgYW5kIGlzIG5vdCBhbHdheXMgd2hhdCB5b3Ugd2FudC5cblx0LyoqXG5cdCogc2V0dGluZyBvbmx5RnVuY3MgdG8gZmFsc2Ugd2lsbCBicmVhayBwcm9taXNlcy9BKyBjb25mb3JtaXR5IGJ5IGFsbG93aW5nIHlvdSB0byBwYXNzIG5vbiB1bmRlZmluZWQvbnVsbCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxsYmFja3Ncblx0KiBpbnN0ZWFkIG9mIGp1c3QgaWdub3JpbmcgYW55IG5vbiBmdW5jdGlvbiBwYXJhbWV0ZXJzIHRvIHRoZW4sc3VjY2VzcyxlcnJvci4uLiBpdCB3aWxsIGFjY2VwdCBub24gbnVsbHx1bmRlZmluZWQgdmFsdWVzLlxuXHQqIHRoaXMgd2lsbCBhbGxvdyB5b3Ugc2hvcnRjdXRzIGxpa2UgcHJvbWlzZS50aGVuKCd2YWwnLCdoYW5kbGVkIGVycm9yJycpXG5cdCogdG8gYmUgZXF1aXZhbGVudCBvZiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKXsgcmV0dXJuICd2YWwnO30sZnVuY3Rpb24oKXsgcmV0dXJuICdoYW5kbGVkIGVycm9yJ30pXG5cdCovXG5cdGRlZmVyLm9ubHlGdW5jcyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIG9mIGdpdmVuIHZhbHVlIChhbHdheXMgYXN5bmMgcmVzb2x1dGlvbilcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnJlc29sdmVkID0gZGVmZXIuZnVsZmlsbGVkID0gZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gZGVmZXIodHJ1ZSkucmVzb2x2ZSh2YWx1ZSkucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSB3aXRoIGdpdmVuIHJlYXNvbiBvZiByZWplY3Rpb24gKGFsd2F5cyBhc3luYyByZWplY3Rpb24pXG5cdCAqIEBwYXJhbSB7Kn0gcmVhc29uXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVqZWN0ZWQgPSBmdW5jdGlvbihyZWFzb24peyByZXR1cm4gZGVmZXIodHJ1ZSkucmVqZWN0KHJlYXNvbikucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSB3aXRoIG5vIHJlc29sdXRpb24gdmFsdWUgd2hpY2ggd2lsbCBiZSByZXNvbHZlZCBpbiB0aW1lIG1zICh1c2luZyBzZXRUaW1lb3V0KVxuXHQgKiBAcGFyYW0ge2ludH0gW3RpbWVdIGluIG1zIGRlZmF1bHQgdG8gMFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLndhaXQgPSBmdW5jdGlvbih0aW1lKXtcblx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0c2V0VGltZW91dChkLnJlc29sdmUsIHRpbWUgfHwgMCk7XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvZiBmdW5jdGlvbiBjYWxsIHdoaWNoIHdpbGwgYmUgZnVsZmlsbGVkIGluIGRlbGF5IG1zIG9yIHJlamVjdGVkIGlmIGdpdmVuIGZuIHRocm93IGFuIGVycm9yXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG5cdCAqIEBwYXJhbSB7aW50fSBbZGVsYXldIGluIG1zIGRlZmF1bHQgdG8gMFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLmRlbGF5ID0gZnVuY3Rpb24oZm4sIGRlbGF5KXtcblx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyB0cnl7IGQucmVzb2x2ZShmbi5hcHBseShudWxsKSk7IH1jYXRjaChlKXsgZC5yZWplY3QoZSk7IH0gfSwgZGVsYXkgfHwgMCk7XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fTtcblxuXHQvKipcblx0ICogaWYgZ2l2ZW4gdmFsdWUgaXMgbm90IGEgcHJvbWlzZSByZXR1cm4gYSBmdWxmaWxsZWQgcHJvbWlzZSByZXNvbHZlZCB0byBnaXZlbiB2YWx1ZVxuXHQgKiBAcGFyYW0geyp9IHByb21pc2UgYSB2YWx1ZSBvciBhIHByb21pc2Vcblx0ICogQHJldHVybnMge3Byb21pc2V9XG5cdCAqL1xuXHRkZWZlci5wcm9taXNpZnkgPSBmdW5jdGlvbihwcm9taXNlKXtcblx0XHRpZiAoIHByb21pc2UgJiYgaXNGdW5jKHByb21pc2UudGhlbikgKSB7IHJldHVybiBwcm9taXNlO31cblx0XHRyZXR1cm4gZGVmZXIucmVzb2x2ZWQocHJvbWlzZSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gbXVsdGlQcm9taXNlUmVzb2x2ZXIoY2FsbGVyQXJndW1lbnRzLCByZXR1cm5Qcm9taXNlcyl7XG5cdFx0dmFyIHByb21pc2VzID0gc2xpY2UoY2FsbGVyQXJndW1lbnRzKTtcblx0XHRpZiAoIHByb21pc2VzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KHByb21pc2VzWzBdKSApIHtcblx0XHRcdGlmKCEgcHJvbWlzZXNbMF0ubGVuZ3RoICl7XG5cdFx0XHRcdHJldHVybiBkZWZlci5mdWxmaWxsZWQoW10pO1xuXHRcdFx0fVxuXHRcdFx0cHJvbWlzZXMgPSBwcm9taXNlc1swXTtcblx0XHR9XG5cdFx0dmFyIGFyZ3MgPSBbXVxuXHRcdFx0LCBkID0gZGVmZXIoKVxuXHRcdFx0LCBjID0gcHJvbWlzZXMubGVuZ3RoXG5cdFx0O1xuXHRcdGlmICggIWMgKSB7XG5cdFx0XHRkLnJlc29sdmUoYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciByZXNvbHZlciA9IGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRwcm9taXNlc1tpXSA9IGRlZmVyLnByb21pc2lmeShwcm9taXNlc1tpXSk7XG5cdFx0XHRcdHByb21pc2VzW2ldLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24odil7XG5cdFx0XHRcdFx0XHRpZiAoISAoaSBpbiBhcmdzKSApIHsgLy9AdG9kbyBjaGVjayB0aGlzIGlzIHN0aWxsIHJlcXVpcmVkIGFzIHByb21pc2VzIGNhbid0IGJlIHJlc29sdmUgbW9yZSB0aGFuIG9uY2Vcblx0XHRcdFx0XHRcdFx0YXJnc1tpXSA9IHJldHVyblByb21pc2VzID8gcHJvbWlzZXNbaV0gOiB2O1xuXHRcdFx0XHRcdFx0XHQoLS1jKSB8fCBkLnJlc29sdmUoYXJncyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHRpZighIChpIGluIGFyZ3MpICl7XG5cdFx0XHRcdFx0XHRcdGlmKCAhIHJldHVyblByb21pc2VzICl7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0YXJnc1tpXSA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH07XG5cdFx0XHRmb3IoIHZhciBpID0gMCwgbCA9IGM7IGkgPCBsOyBpKysgKXtcblx0XHRcdFx0cmVzb2x2ZXIoaSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkLnByb21pc2U7XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgYWxsIGdpdmVuIHByb21pc2VzIC8gdmFsdWVzLlxuXHQgKiB0aGUgcmV0dXJuZWQgcHJvbWlzZXMgd2lsbCBiZSBmdWxmaWxsZWQgd2l0aCBhIGxpc3Qgb2YgcmVzb2x2ZWQgdmFsdWUuXG5cdCAqIGlmIGFueSBnaXZlbiBwcm9taXNlIGlzIHJlamVjdGVkIHRoZW4gb24gdGhlIGZpcnN0IHJlamVjdGlvbiB0aGUgcmV0dXJuZWQgcHJvbWlzZWQgd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lIHJlYXNvblxuXHQgKiBAcGFyYW0ge2FycmF5fC4uLip9IFtwcm9taXNlXSBjYW4gYmUgYSBzaW5nbGUgYXJyYXkgb2YgcHJvbWlzZS92YWx1ZXMgYXMgZmlyc3QgcGFyYW1ldGVyIG9yIGEgbGlzdCBvZiBkaXJlY3QgcGFyYW1ldGVycyBwcm9taXNlL3ZhbHVlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBvZiBhIGxpc3Qgb2YgZ2l2ZW4gcHJvbWlzZSByZXNvbHV0aW9uIHZhbHVlXG5cdCAqL1xuXHRkZWZlci5hbGwgPSBmdW5jdGlvbigpeyByZXR1cm4gbXVsdGlQcm9taXNlUmVzb2x2ZXIoYXJndW1lbnRzLGZhbHNlKTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGFuIGFsd2F5cyBmdWxmaWxsZWQgcHJvbWlzZSBvZiBhcnJheTxwcm9taXNlPiBsaXN0IG9mIHByb21pc2VzL3ZhbHVlcyByZWdhcmRsZXNzIHRoZXkgcmVzb2x2ZSBmdWxmaWxsZWQgb3IgcmVqZWN0ZWRcblx0ICogQHBhcmFtIHthcnJheXwuLi4qfSBbcHJvbWlzZV0gY2FuIGJlIGEgc2luZ2xlIGFycmF5IG9mIHByb21pc2UvdmFsdWVzIGFzIGZpcnN0IHBhcmFtZXRlciBvciBhIGxpc3Qgb2YgZGlyZWN0IHBhcmFtZXRlcnMgcHJvbWlzZS92YWx1ZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgIChub24gcHJvbWlzZSB2YWx1ZXMgd2lsbCBiZSBwcm9taXNpZmllZClcblx0ICogQHJldHVybnMge3Byb21pc2V9IG9mIHRoZSBsaXN0IG9mIGdpdmVuIHByb21pc2VzXG5cdCAqL1xuXHRkZWZlci5yZXNvbHZlQWxsID0gZnVuY3Rpb24oKXsgcmV0dXJuIG11bHRpUHJvbWlzZVJlc29sdmVyKGFyZ3VtZW50cyx0cnVlKTsgfTtcblxuXHQvKipcblx0ICogdHJhbnNmb3JtIGEgdHlwaWNhbCBub2RlanMgYXN5bmMgbWV0aG9kIGF3YWl0aW5nIGEgY2FsbGJhY2sgYXMgbGFzdCBwYXJhbWV0ZXIsIHJlY2VpdmluZyBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIgdG8gYSBmdW5jdGlvbiB0aGF0XG5cdCAqIHdpbGwgcmV0dXJuIGEgcHJvbWlzZSBpbnN0ZWFkLiB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCBub3JtYWwgY2FsbGJhY2sgdmFsdWUgbWludXMgdGhlIGZpcnN0IGVycm9yIHBhcmFtZXRlciBvblxuXHQgKiBmdWxmaWxsIGFuZCB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhhdCBlcnJvciBhcyByZWFzb24gaW4gY2FzZSBvZiBlcnJvci5cblx0ICogQHBhcmFtIHtvYmplY3R9IFtzdWJqZWN0XSBvcHRpb25hbCBzdWJqZWN0IG9mIHRoZSBtZXRob2QgdG8gZW5jYXBzdWxhdGVcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gdGhlIGZ1bmN0aW9uIHRvIGVuY2Fwc3VsYXRlIGlmIHRoZSBub3JtYWwgY2FsbGJhY2sgc2hvdWxkIHJlY2VpdmUgbW9yZSB0aGFuIGEgc2luZ2xlIHBhcmFtZXRlciAobWludXMgdGhlIGVycm9yKVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICB0aGUgcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCB0aGUgbGlzdCBvciBwYXJhbWV0ZXJzIGFzIGZ1bGZpbGxtZW50IHZhbHVlLiBJZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgc2VudCB0byB0aGVcblx0ICogICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgdGhlbiBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJlc29sdXRpb24gdmFsdWUuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn1cblx0ICovXG5cdGRlZmVyLm5vZGVDYXBzdWxlID0gZnVuY3Rpb24oc3ViamVjdCwgZm4pe1xuXHRcdGlmICggIWZuICkge1xuXHRcdFx0Zm4gPSBzdWJqZWN0O1xuXHRcdFx0c3ViamVjdCA9IHZvaWQoMCk7XG5cdFx0fVxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGQgPSBkZWZlcigpLCBhcmdzID0gc2xpY2UoYXJndW1lbnRzKTtcblx0XHRcdGFyZ3MucHVzaChmdW5jdGlvbihlcnIsIHJlcyl7XG5cdFx0XHRcdGVyciA/IGQucmVqZWN0KGVycikgOiBkLnJlc29sdmUoYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBzbGljZShhcmd1bWVudHMsIDEpIDogcmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRmbi5hcHBseShzdWJqZWN0LCBhcmdzKTtcblx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdH07XG5cdH07XG5cblx0dHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZTdHIgJiYgKHdpbmRvdy5EID0gZGVmZXIpO1xuXHR0eXBlb2YgbW9kdWxlICE9PSB1bmRlZlN0ciAmJiBtb2R1bGUuZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSBkZWZlcik7XG5cbn0pKCk7XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3QgPSAndW5kZWZpbmVkJyA9PSB0eXBlb2Ygd2luZG93XG4gID8gdGhpc1xuICA6IHdpbmRvdztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIFRPRE86IGZ1dHVyZSBwcm9vZiwgbW92ZSB0byBjb21wb2VudCBsYW5kXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSG9zdChvYmopIHtcbiAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgJ1tvYmplY3QgRmlsZV0nOlxuICAgIGNhc2UgJ1tvYmplY3QgQmxvYl0nOlxuICAgIGNhc2UgJ1tvYmplY3QgRm9ybURhdGFdJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgWEhSLlxuICovXG5cbmZ1bmN0aW9uIGdldFhIUigpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAmJiAoJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sIHx8ICFyb290LkFjdGl2ZVhPYmplY3QpKSB7XG4gICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjYuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC4zLjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciB0cmltID0gJycudHJpbVxuICA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMudHJpbSgpOyB9XG4gIDogZnVuY3Rpb24ocykgeyByZXR1cm4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csICcnKTsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChudWxsICE9IG9ialtrZXldKSB7XG4gICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpXG4gICAgICAgICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59XG5cbi8qKlxuICogRXhwb3NlIHNlcmlhbGl6YXRpb24gbWV0aG9kLlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdCA9IHNlcmlhbGl6ZTtcblxuIC8qKlxuICAqIFBhcnNlIHRoZSBnaXZlbiB4LXd3dy1mb3JtLXVybGVuY29kZWQgYHN0cmAuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICogQHJldHVybiB7T2JqZWN0fVxuICAqIEBhcGkgcHJpdmF0ZVxuICAqL1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgdmFyIHBhcnRzO1xuICB2YXIgcGFpcjtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgcGFydHMgPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzFdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogRXhwb3NlIHBhcnNlci5cbiAqL1xuXG5yZXF1ZXN0LnBhcnNlU3RyaW5nID0gcGFyc2VTdHJpbmc7XG5cbi8qKlxuICogRGVmYXVsdCBNSU1FIHR5cGUgbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqL1xuXG5yZXF1ZXN0LnR5cGVzID0ge1xuICBodG1sOiAndGV4dC9odG1sJyxcbiAganNvbjogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB4bWw6ICdhcHBsaWNhdGlvbi94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0nOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc2VyaWFsaXphdGlvbiBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuc2VyaWFsaXplWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKG9iail7XG4gKiAgICAgICByZXR1cm4gJ2dlbmVyYXRlZCB4bWwgaGVyZSc7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHNlcmlhbGl6ZSxcbiAgICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbiB9O1xuXG4gLyoqXG4gICogRGVmYXVsdCBwYXJzZXJzLlxuICAqXG4gICogICAgIHN1cGVyYWdlbnQucGFyc2VbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24oc3RyKXtcbiAgKiAgICAgICByZXR1cm4geyBvYmplY3QgcGFyc2VkIGZyb20gc3RyIH07XG4gICogICAgIH07XG4gICpcbiAgKi9cblxucmVxdWVzdC5wYXJzZSA9IHtcbiAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHBhcnNlU3RyaW5nLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04ucGFyc2Vcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGhlYWRlciBgc3RyYCBpbnRvXG4gKiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbWFwcGVkIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcihzdHIpIHtcbiAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBmaWVsZHMgPSB7fTtcbiAgdmFyIGluZGV4O1xuICB2YXIgbGluZTtcbiAgdmFyIGZpZWxkO1xuICB2YXIgdmFsO1xuXG4gIGxpbmVzLnBvcCgpOyAvLyB0cmFpbGluZyBDUkxGXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbGluZSA9IGxpbmVzW2ldO1xuICAgIGluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAgZmllbGQgPSBsaW5lLnNsaWNlKDAsIGluZGV4KS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHRyaW0obGluZS5zbGljZShpbmRleCArIDEpKTtcbiAgICBmaWVsZHNbZmllbGRdID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHR5cGUoc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5zaGlmdCgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyYW1zKHN0cil7XG4gIHJldHVybiByZWR1Y2Uoc3RyLnNwbGl0KC8gKjsgKi8pLCBmdW5jdGlvbihvYmosIHN0cil7XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKj0gKi8pXG4gICAgICAsIGtleSA9IHBhcnRzLnNoaWZ0KClcbiAgICAgICwgdmFsID0gcGFydHMuc2hpZnQoKTtcblxuICAgIGlmIChrZXkgJiYgdmFsKSBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBgeGhyYC5cbiAqXG4gKiAgLSBzZXQgZmxhZ3MgKC5vaywgLmVycm9yLCBldGMpXG4gKiAgLSBwYXJzZSBoZWFkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgQWxpYXNpbmcgYHN1cGVyYWdlbnRgIGFzIGByZXF1ZXN0YCBpcyBuaWNlOlxuICpcbiAqICAgICAgcmVxdWVzdCA9IHN1cGVyYWdlbnQ7XG4gKlxuICogIFdlIGNhbiB1c2UgdGhlIHByb21pc2UtbGlrZSBBUEksIG9yIHBhc3MgY2FsbGJhY2tzOlxuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nKS5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nLCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBTZW5kaW5nIGRhdGEgY2FuIGJlIGNoYWluZWQ6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnNlbmQoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAucG9zdCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogT3IgZnVydGhlciByZWR1Y2VkIHRvIGEgc2luZ2xlIGNhbGwgZm9yIHNpbXBsZSBjYXNlczpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBAcGFyYW0ge1hNTEhUVFBSZXF1ZXN0fSB4aHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZShyZXEsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucmVxID0gcmVxO1xuICB0aGlzLnhociA9IHRoaXMucmVxLnhocjtcbiAgdGhpcy50ZXh0ID0gdGhpcy5yZXEubWV0aG9kICE9J0hFQUQnIFxuICAgICA/IHRoaXMueGhyLnJlc3BvbnNlVGV4dCBcbiAgICAgOiBudWxsO1xuICB0aGlzLnNldFN0YXR1c1Byb3BlcnRpZXModGhpcy54aHIuc3RhdHVzKTtcbiAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlcnMgPSBwYXJzZUhlYWRlcih0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gIC8vIGdldEFsbFJlc3BvbnNlSGVhZGVycyBzb21ldGltZXMgZmFsc2VseSByZXR1cm5zIFwiXCIgZm9yIENPUlMgcmVxdWVzdHMsIGJ1dFxuICAvLyBnZXRSZXNwb25zZUhlYWRlciBzdGlsbCB3b3Jrcy4gc28gd2UgZ2V0IGNvbnRlbnQtdHlwZSBldmVuIGlmIGdldHRpbmdcbiAgLy8gb3RoZXIgaGVhZGVycyBmYWlscy5cbiAgdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpO1xuICB0aGlzLnNldEhlYWRlclByb3BlcnRpZXModGhpcy5oZWFkZXIpO1xuICB0aGlzLmJvZHkgPSB0aGlzLnJlcS5tZXRob2QgIT0gJ0hFQUQnXG4gICAgPyB0aGlzLnBhcnNlQm9keSh0aGlzLnRleHQpXG4gICAgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0SGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uKGhlYWRlcil7XG4gIC8vIGNvbnRlbnQtdHlwZVxuICB2YXIgY3QgPSB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gfHwgJyc7XG4gIHRoaXMudHlwZSA9IHR5cGUoY3QpO1xuXG4gIC8vIHBhcmFtc1xuICB2YXIgb2JqID0gcGFyYW1zKGN0KTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikgdGhpc1trZXldID0gb2JqW2tleV07XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnBhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiBzdHIubGVuZ3RoXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cyB8fCAxMjIzID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307XG4gIHRoaXMuX2hlYWRlciA9IHt9O1xuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTsgXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZTtcbiAgICB9XG5cbiAgICBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWl4aW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEFsbG93IGZvciBleHRlbnNpb25cbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbihmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogU2V0IHRpbWVvdXQgdG8gYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24obXMpe1xuICB0aGlzLl90aW1lb3V0ID0gbXM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbGVhciBwcmV2aW91cyB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFib3J0IHRoZSByZXF1ZXN0LCBhbmQgY2xlYXIgcG90ZW50aWFsIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5hYm9ydGVkKSByZXR1cm47XG4gIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gIHRoaXMueGhyLmFib3J0KCk7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtQVBJLUtleSc6ICdmb29iYXInIH0pXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGZpZWxkLCB2YWwpe1xuICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGZpZWxkKSB7XG4gICAgICB0aGlzLnNldChrZXksIGZpZWxkW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0gPSB2YWw7XG4gIHRoaXMuaGVhZGVyW2ZpZWxkXSA9IHZhbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBoZWFkZXIgYGZpZWxkYC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnVuc2V0KCdVc2VyLUFnZW50JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgZGVsZXRlIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbiAgZGVsZXRlIHRoaXMuaGVhZGVyW2ZpZWxkXTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGhlYWRlciBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZ2V0SGVhZGVyID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgQ29udGVudC1UeXBlIHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgneG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCdhcHBsaWNhdGlvbi94bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQWNjZXB0IHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLmpzb24gPSAnYXBwbGljYXRpb24vanNvbic7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdqc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0FjY2VwdCcsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQXV0aG9yaXphdGlvbiBmaWVsZCB2YWx1ZSB3aXRoIGB1c2VyYCBhbmQgYHBhc3NgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFzc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzKXtcbiAgdmFyIHN0ciA9IGJ0b2EodXNlciArICc6JyArIHBhc3MpO1xuICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgc3RyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiogQWRkIHF1ZXJ5LXN0cmluZyBgdmFsYC5cbipcbiogRXhhbXBsZXM6XG4qXG4qICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4qICAgICAucXVlcnkoJ3NpemU9MTAnKVxuKiAgICAgLnF1ZXJ5KHsgY29sb3I6ICdibHVlJyB9KVxuKlxuKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbFxuKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiogQGFwaSBwdWJsaWNcbiovXG5cblJlcXVlc3QucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24odmFsKXtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHZhbCA9IHNlcmlhbGl6ZSh2YWwpO1xuICBpZiAodmFsKSB0aGlzLl9xdWVyeS5wdXNoKHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBXcml0ZSB0aGUgZmllbGQgYG5hbWVgIGFuZCBgdmFsYCBmb3IgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAqIHJlcXVlc3QgYm9kaWVzLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmZpZWxkKCdmb28nLCAnYmFyJylcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd8QmxvYnxGaWxlfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbCl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2gobmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kIGBkYXRhYCwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBxdWVyeXN0cmluZ1xuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG11bHRpcGxlIGRhdGEgXCJ3cml0ZXNcIlxuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuc2VuZCh7IHNlYXJjaDogJ3F1ZXJ5JyB9KVxuICogICAgICAgICAuc2VuZCh7IHJhbmdlOiAnMS4uNScgfSlcbiAqICAgICAgICAgLnNlbmQoeyBvcmRlcjogJ2Rlc2MnIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIG9iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcblxuICAvLyBtZXJnZVxuICBpZiAob2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnID09IHR5cGUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhXG4gICAgICAgID8gdGhpcy5fZGF0YSArICcmJyArIGRhdGFcbiAgICAgICAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIW9iaikgcmV0dXJuIHRoaXM7XG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGlmICgyID09IGZuLmxlbmd0aCkgcmV0dXJuIGZuKGVyciwgcmVzKTtcbiAgaWYgKGVycikgcmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICBmbihyZXMpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB4LWRvbWFpbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcm9zc0RvbWFpbkVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignT3JpZ2luIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicpO1xuICBlcnIuY3Jvc3NEb21haW4gPSB0cnVlO1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHRpbWVvdXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dEVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCd0aW1lb3V0IG9mICcgKyB0aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyk7XG4gIGVyci50aW1lb3V0ID0gdGltZW91dDtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBFbmFibGUgdHJhbnNtaXNzaW9uIG9mIGNvb2tpZXMgd2l0aCB4LWRvbWFpbiByZXF1ZXN0cy5cbiAqXG4gKiBOb3RlIHRoYXQgZm9yIHRoaXMgdG8gd29yayB0aGUgb3JpZ2luIG11c3Qgbm90IGJlXG4gKiB1c2luZyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiIHdpdGggYSB3aWxkY2FyZCxcbiAqIGFuZCBhbHNvIG11c3Qgc2V0IFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIlxuICogdG8gXCJ0cnVlXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbigpe1xuICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgeGhyID0gdGhpcy54aHIgPSBnZXRYSFIoKTtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgaWYgKDAgPT0geGhyLnN0YXR1cykge1xuICAgICAgaWYgKHNlbGYuYWJvcnRlZCkgcmV0dXJuIHNlbGYudGltZW91dEVycm9yKCk7XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgaWYgKHhoci51cGxvYWQpIHtcbiAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihlKXtcbiAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gdGltZW91dFxuICBpZiAodGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIC8vIHF1ZXJ5c3RyaW5nXG4gIGlmIChxdWVyeSkge1xuICAgIHF1ZXJ5ID0gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QocXVlcnkpO1xuICAgIHRoaXMudXJsICs9IH50aGlzLnVybC5pbmRleE9mKCc/JylcbiAgICAgID8gJyYnICsgcXVlcnlcbiAgICAgIDogJz8nICsgcXVlcnk7XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG5cbiAgLy8gQ09SU1xuICBpZiAodGhpcy5fd2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAvLyBib2R5XG4gIGlmICgnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIWlzSG9zdChkYXRhKSkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIHZhciBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVt0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyldO1xuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICAvLyBzZW5kIHN0dWZmXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuICB4aHIuc2VuZChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBJc3N1ZSBhIHJlcXVlc3Q6XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVxdWVzdCgnR0VUJywgJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycsIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB1cmwgb3IgY2FsbGJhY2tcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmRlbCA9IGZ1bmN0aW9uKHVybCwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3Q7XG4iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG4iLCJcbi8qKlxuICogUmVkdWNlIGBhcnJgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge01peGVkfSBpbml0aWFsXG4gKlxuICogVE9ETzogY29tYmF0aWJsZSBlcnJvciBoYW5kbGluZz9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgZm4sIGluaXRpYWwpeyAgXG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIGN1cnIgPSBhcmd1bWVudHMubGVuZ3RoID09IDNcbiAgICA/IGluaXRpYWxcbiAgICA6IGFycltpZHgrK107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGN1cnIgPSBmbi5jYWxsKG51bGwsIGN1cnIsIGFycltpZHhdLCArK2lkeCwgYXJyKTtcbiAgfVxuICBcbiAgcmV0dXJuIGN1cnI7XG59OyIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwiZGVwbG95clwiLFxuICBcInZlcnNpb25cIjogXCI3LjQuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2ltcGxpZmllZCBKYXZhU2NyaXB0IGNsaWVudCBsaWJyYXJ5IGZvciBtYWtpbmcgcmVxdWVzdHMgdG8gRGVwbG95Ui5cIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJkZXBsb3lyXCIsXG4gICAgXCJkZXBsb3lyLmlvXCIsXG4gICAgXCJhamF4XCIsXG4gICAgXCJSXCIsXG4gICAgXCJhcGlcIixcbiAgICBcInNpbXBsZVwiXG4gIF0sXG4gIFwiYXV0aG9yXCI6IFwiRGVwbG95UiAtIFJldm9sdXRpb24gQW5hbHl0aWNzIEluYy5cIixcbiAgXCJjb250cmlidXRvcnNcIjogW1xuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNlYW4gV2VsbHNcIlxuICAgIH1cbiAgXSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdDovL2dpdGh1Yi5jb20vZGVwbG95ci9qcy1jbGllbnQtbGlicmFyeS5naXRcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cDovL2RlcGxveXIucmV2b2x1dGlvbmFuYWx5dGljcy5jb20vZG9jdW1lbnRzL2Rldi9jbGllbnQtanNkb2NcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInN0YXJ0XCI6IFwiZ3VscCBzdGFydFwiLFxuICAgIFwiYnVpbGRcIjogXCJndWxwXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl45LjAuM1wiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjguMTFcIixcbiAgICBcImd1bHAtY29ubmVjdFwiOiBcIl4yLjIuMFwiLFxuICAgIFwiZ3VscC1oZWFkZXJcIjogXCJeMS4yLjJcIixcbiAgICBcImd1bHAtanNoaW50XCI6IFwiXjEuOS4yXCIsXG4gICAgXCJndWxwLWxpdmVyZWxvYWRcIjogXCJeMy44LjBcIixcbiAgICBcImd1bHAtcGx1bWJlclwiOiBcIl4wLjYuNlwiLFxuICAgIFwiZ3VscC11Z2xpZnlqc1wiOiBcIl4wLjYuMFwiLFxuICAgIFwiZ3VscC11dGlsXCI6IFwiXjMuMC40XCIsXG4gICAgXCJ0YXBlXCI6IFwiXjMuNS4wXCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMC4wXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiZC5qc1wiOiBcIl4wLjYuMFwiLFxuICAgIFwic3VwZXJhZ2VudFwiOiBcIl4wLjIxLjBcIixcbiAgICBcIndzXCI6IFwiXjAuNC4zMlwiXG4gIH0sXG4gIFwibWFpblwiOiBcImRlcGxveXIuanNcIixcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PSAwLjEwLjBcIlxuICB9LFxuICBcImxpY2Vuc2VcIjogXCJBcGFjaGUgMi4wIExpY2Vuc2VcIlxufVxuIl19
