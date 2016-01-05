/*!
 * `deployr` JavaScript Client Library v8.0.0
 * http://go.microsoft.com/fwlink/?LinkID=698842
 *
 * Copyright (C) 2010-2016, Microsoft Corporation
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
 * Date: 2016-01-05
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.deployr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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
     this.entities   = null; 
     this.ioFilter   = function() { return true; };

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
   * Shares the cookies from a differen `.io()` agent to preserve session state
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
    this.entities = utils.inArray(TOPLEVEL_ENTITIES, entity);

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
   * The `filter(λ)` method removes this DeployR request from the request chain
   * if the provided function does *not* pass the test implemented by it.
   *
   * Examples:
   *
   * ```
   * // Remove from the request chain
   * .filter(function(args) {
   *    return 5 > 10;
   * })
   *
   * // Keep in the request chain
   * .filter(function(args) {
   *    return 10 > 5;
   * })   
   * ```
   *
   * @method filter
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public   
   */
  filter: function(fn) {
    if (fn) {
      this.ioFilter = function(prevArgs) {
        var args = {}, keep;

        // copy over previous arguments and filter out internal __cookies__ 
        for (var key in prevArgs) {
           if (key !== '__cookies__') { 
              args[key] = prevArgs[key];
           }
        }

        keep = fn(args);
        return (keep || keep === false ? keep : true);
      };
    }

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
    var self     = this,
        q        = this.q,
        api      = this.api,
        args     = null,
        entities =  this.entities;

    q.add(function(responseChain, error, prevArgs) {
      // break the call chain on error      
      if (error) {        
        this.deferred.reject(error);        
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }

      // filter out responses    
      if (!this.ioFilter(prevArgs)) {
        if (q.size() === 0) { 
          this.deferred.resolve(responseChain || prevArgs);
        }

        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('io()', api, this.req);
      this.logger.info('io()', api, this.req);    

      // send next request
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
           if (entities) { dres = dres.deployr.response[entities] || dres; }

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
    this.params   = {};
    this.inputs   = [];
    this.outputs  = [];
    this.rstream  = false;
    this.delayed  = false;
    this.api      = null;    
    this.file     = null;  
    this.entities = null;
    this.ioFilter = null;
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
        req.field(p, (this.params[p] || this.params[p] === false) ? 
           this.params[p] + '' : '');
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
  es: function(credentials) {
    var auth   = (credentials && credentials.username && credentials.password),
        stream = EventStream.new(globalOptions.host, { yield: auth });

    if (auth) {
      var ruser = this.auth(credentials.username, credentials.password);      
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGxveXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciB3aW4gICAgICAgICA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyksICAgXG4gICAgcmVxdWVzdCAgICAgPSByZXF1aXJlKCdzdXBlcmFnZW50JyksXG4gICAgRCAgICAgICAgICAgPSByZXF1aXJlKCdkLmpzJyksXG4gICAgZnMgICAgICAgICAgPSByZXF1aXJlKCdmcycpLFxuICAgIGFwaXMgICAgICAgID0gcmVxdWlyZSgnLi9hcGlzLmpzb24nKSwgXG4gICAgRXZlbnRTdHJlYW0gPSByZXF1aXJlKCcuL2xpYi9lcycpLFxuICAgIHV0aWxzICAgICAgID0gcmVxdWlyZSgnLi9saWIvdXRpbHMnKSxcbiAgICBMYW5nICAgICAgICA9IHJlcXVpcmUoJy4vbGliL2xhbmcnKSwgICBcbiAgICBMb2dnZXIgICAgICA9IHJlcXVpcmUoJy4vbGliL2xvZ2dlcicpLCAgIFxuICAgIFF1ZXVlICAgICAgID0gcmVxdWlyZSgnLi9saWIvcXVldWUnKSxcbiAgICBFbWl0dGVyICAgICA9IHJlcXVpcmUoJy4vbGliL2VtaXR0ZXInKSxcbiAgICBlbmNvZGVyICAgICA9IHJlcXVpcmUoJy4vbGliL2VuY29kZXInKSxcbiAgICBCYXNlICAgICAgICA9IHJlcXVpcmUoJy4vbGliL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJJbnB1dCAgICAgID0gcmVxdWlyZSgnLi9saWIvcmlucHV0JyksICAgIFxuICAgIFJJbnB1dHMgICAgID0gcmVxdWlyZSgnLi9saWIvcmlucHV0cycpLFxuICAgIG1lcmdlICAgICAgID0gdXRpbHMubWVyZ2U7XG5cbi8qXG4gKiBUdXJuIGdsb2JhbCBsb2dnaW5nIG9mZiBieSBkZWZhdWx0XG4gKi9cbkxvZ2dlci5zZXRMZXZlbChMb2dnZXIuT0ZGKTtcblxuLypcbiAqIEdsb2JhbCBvcHRpb25zIHRoYXQgcGVyc2lzdCB0aHJvdWdoIGFsbCBEZXBsb3lSIHJlcXVlc3RzLlxuICovXG52YXIgZ2xvYmFsT3B0aW9ucyA9IHsgXG4gIGNvcnM6IGZhbHNlLFxuICBsb2dnaW5nOiBmYWxzZSxcbiAgc3RpY2t5OiBmYWxzZSxcbiAgY29va2llczogbnVsbCxcbiAgaG9zdDogJycsXG4gIGFsbG93U2VsZlNpZ25lZFNTTENlcnQ6IGZhbHNlLFxuICBtYXhSZXF1ZXN0czogbnVsbCwgLy8gbm8gc29ja2V0IHBvb2xpbmcgaW4gaHR0cC5BZ2VudFxuICBldmVudHM6e30sXG4gIHNldDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHsgXG4gICAgaWYgKHByb3AgIT09ICdzZXQnKSB7IFxuICAgICAgaWYgKHByb3AgPT09ICdob3N0JyAmJiB2YWx1ZSkgeyAgICAgICAgIFxuICAgICAgICAgLy8gQmUgbW9yZSBmb3JnaXZpbmcgb24gdGhlIGVudGVyZWQgRGVwbG95UiAnZW5kcG9pbnQnOlxuICAgICAgICAgLy8gICAtIGh0dHAocyk6Ly9kaG9zdDpwb3J0XG4gICAgICAgICAvLyAgIC0gaHR0cChzKTovL2Rob3N0OnBvcnQvZGVwbG95clxuICAgICAgICAgLy8gICAtIGRob3N0OnBvcnRcbiAgICAgICAgIC8vICAgLSBkaG9zdDpwb3J0L2RlcGxveXIgICAgICAgICBcbiAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwvKiR8XFwvKmRlcGxveXJcXC8qJC8sICcnKTtcbiAgICAgICAgIHZhbHVlID0gKG5ldyBSZWdFeHAoJ14oaHR0cHxodHRwcyk6Ly8nLCAnaScpKS50ZXN0KHZhbHVlKSA/IHZhbHVlIDogXG4gICAgICAgICAgICAnaHR0cDovLycgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpc1twcm9wXSA9IHZhbHVlOyBcbiAgICB9IFxuICB9XG59O1xuXG4vKlxuICogVGhlIHRvcC1sZXZlbCBEZXBsb3lSIEFQSSByZXNwb25zZSBlbnRpdGllcy5cbiAqL1xudmFyIFRPUExFVkVMX0VOVElUSUVTID0gW1xuICAndXNlcicsIFxuICAncHJvamVjdCcsIFxuICAnd29ya3NwYWNlJywgXG4gICdleGVjdXRpb24nLCBcbiAgJ2RpcmVjdG9yeScsIFxuICAncmVwb3NpdG9yeScsIFxuICAncGFja2FnZXMnIFxuXTtcblxuLypcbiAqIE5vdGlmeSBnbG9iYWwgSU8gZXJyb3IgZXZlbnRzIGFjY2Vzc2libGUgYnkgYWxsIHN1YnNjcmliZXJzIGFjcm9zcyByZXF1ZXN0cy5cbiAqL1xuZnVuY3Rpb24gcmFpc2VHbG9iYWxFcnJvcnMoYXBpLCByZXMpIHtcbiAgdmFyIGNvZGUgICAgPSByZXMuZGVwbG95ciA/IHJlcy5kZXBsb3lyLnJlc3BvbnNlLmVycm9yQ29kZSA6IHJlcy5zdGF0dXMsXG4gICAgICBjb250ZXh0ID0gdGhpcztcblxuICAvLyAtLSBnbG9iYWwgZXZlbnRzIGlmIHByb3ZpZGVkIC0tXG4gIGlmIChnbG9iYWxPcHRpb25zLmV2ZW50cykge1xuICAgIGlmICghcmVzLmRlcGxveXIpIHtcbiAgICAgIHJlcyA9IHJlcy50ZXh0O1xuICAgIH1cblxuICAgIGNvbnRleHQgPSBnbG9iYWxPcHRpb25zLmV2ZW50cy5jdHggfHwgY29udGV4dDtcblxuICAgIC8vIC0tIGdlbmVyYWwgZ2xvYmFsIGZhaWx1cmUgLS1cbiAgICBpZiAoZ2xvYmFsT3B0aW9ucy5ldmVudHMuZXJyb3IpIHtcbiAgICAgIGdsb2JhbE9wdGlvbnMuZXZlbnRzLmVycm9yLmFwcGx5KGNvbnRleHQsIFthcGksIHJlc10pO1xuICAgIH1cblxuICAgIC8vIC0tIEhUVFAgb3IgRGVwbG95UiBnbG9iYWwgZXJyb3JzIC0tICAgIFxuICAgIGlmIChnbG9iYWxPcHRpb25zLmV2ZW50c1tjb2RlXSkge1xuICAgICAgZ2xvYmFsT3B0aW9ucy5ldmVudHNbY29kZV0uYXBwbHkoY29udGV4dCwgW2FwaSwgcmVzXSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhlIGBEZXBsb3lSYCByZXF1ZXN0IGNsYXNzIGlzIGEgdXRpbGl0eSB0aGF0IGJyb2tlcnMgSFRUUCByZXF1ZXN0cyB0aHJvdWdoIGEgXG4gKiBzaW1wbGlmaWVkIGZsdWlkIGludGVyZmFjZSB0byBEZXBsb3lSLlxuICpcbiAqIEBtb2R1bGUgZGVwbG95clxuICogQGZvciBkZXBsb3lyXG4gKi9cbnZhciBEZXBsb3lSID0gQmFzZS5leHRlbmQoRW1pdHRlciwgUklucHV0cywge1xuXG4gIC8qKlxuICAgKiBUaGUgYERlcGxveVJgIFJlcXVlc3QgY2xhc3MgaXMgYSB1dGlsaXR5IHRoYXQgYnJva2VycyBIVFRQIHJlcXVlc3RzIHRocm91Z2ggXG4gICAqIGEgc2ltcGxpZmllZCBmbHVpZCBpbnRlcmZhY2UgdG8gRGVwbG95Ui5cbiAgICogXG4gICAqIEBjbGFzcyBcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIERlcGxveVIgQVBJXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsaW5rIFRoZSBvYmplY3QgbGl0ZXJhbCBjb250YWluaW5nIHRoZSBwcmV2aW91cyByZXF1ZXN0LlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUoYXBpLCBsaW5rKSB7XG4gICAgIEVtaXR0ZXIuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHt9KTtcbiAgXG4gICAgIHZhciBvcHRzID0gZ2xvYmFsT3B0aW9ucztcblxuICAgICBpZiAoIWFwaXNbYXBpXSkgeyB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQVBJIFwiJyArIGFwaSArICdcIicpOyB9XG4gICAgXG4gICAgIHRoaXMuYXBpICAgICAgICA9IG1lcmdlKHsgJ2NhbGwnOiBhcGkgfSwgYXBpc1thcGldKTsgICAgXG4gICAgIHRoaXMubGluayAgICAgICA9IGxpbmsgfHwge307XG4gICAgIHRoaXMucSAgICAgICAgICA9IHRoaXMubGluay5xdWV1ZSB8fCBuZXcgUXVldWUoKTtcbiAgICAgdGhpcy5kZWZlcnJlZCAgID0gdGhpcy5saW5rLmRlZmVycmVkIHx8IEQoKTtcbiAgICAgdGhpcy5jb29raWVzICAgID0gdGhpcy5saW5rLmNvb2tpZXM7XG4gICAgIHRoaXMubG9nZ2VyICAgICA9IExvZ2dlci5nZXQoYXBpLCBMb2dnZXIuT0ZGKTsgLy8gdHJhbnNhY3Rpb24tbGV2ZWwgbG9nZ2luZ1xuICAgICB0aGlzLnBhcmFtcyAgICAgPSB7fTtcbiAgICAgdGhpcy5pbnB1dHMgICAgID0gW107IC8vIHJpbnB1dHMgbGlzdCBcbiAgICAgdGhpcy5vdXRwdXRzICAgID0gW107IC8vIHJvdXRwdXQgb2JqZWN0IGxpc3RcbiAgICAgdGhpcy5yc3RyZWFtICAgID0gZmFsc2U7XG4gICAgIHRoaXMuZGVsYXllZCAgICA9IGZhbHNlO1xuICAgICB0aGlzLmdsb2JhbEV2dHMgPSB0cnVlOyAvLyBzdXBwcmVzc3xyYWlzZSBnbG9iYWwgZXZlbnRzIGZvdCB0aGlzIGBpb2AgICAgIFxuICAgICB0aGlzLmZpbGUgICAgICAgPSBudWxsOyBcbiAgICAgdGhpcy5lbnRpdGllcyAgID0gbnVsbDsgXG4gICAgIHRoaXMuaW9GaWx0ZXIgICA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfTtcblxuICAgICAvLyBwcmVzZXQgZGVwbG95cidzIGFzc2lnbmVkIHJlc3BvbnNlIGZvcm1hdCBmb3IgYHRoaXNgIGFwaVxuICAgICB0aGlzLmRhdGEoeyBmb3JtYXQ6IHRoaXMuYXBpLmZvcm1hdCB9KTtcblxuICAgICAvLyB3cmFwIHN1cGVyYWdlbnQgZm9yIHRoZSBoZWF2eSBsaWZ0aW5nICAgICBcbiAgICAgdGhpcy5yZXEgPSBcbiAgICAgICAgcmVxdWVzdFt0aGlzLmFwaS5tZXRob2QudG9Mb3dlckNhc2UoKV0ob3B0cy5ob3N0ICsgJy9kZXBsb3lyJyArIGFwaSk7XG4gICAgIHRoaXMucmVxLnRpbWVvdXQoMjAgKiA2MCAqIDEwMDApOyAvLyBkZWZhdWx0IHRpbWVvdXQgLS0+IDIwIG1pbnV0ZXNcblxuICAgICAvLyBBbGwgQ09SUyBkZXBsb3lyIGNhbGxzIHJlcXVpcmUgc3RpY2t5IHNlc3Npb25zXG4gICAgIGlmICh3aW4gJiYgZ2xvYmFsT3B0aW9ucy5jb3JzKSB7IHRoaXMucmVxLndpdGhDcmVkZW50aWFscygpOyB9XG5cbiAgICAgLy8gTm9kZS5qcyAtIGFjY2VzcyBhbiBTU0wgZW5kcG9pbnQgd2l0aCBzZWxmIHNpZ25lZCBjZXJ0cyBmb3IgdGVzdGluZ3xkZXZcbiAgICAgaWYgKCF3aW4gJiYgZ2xvYmFsT3B0aW9ucy5hbGxvd1NlbGZTaWduZWRTU0xDZXJ0KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCc7ICAgICAgICBcbiAgICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBCaW5kcyB0aGUgc2NvcGUgY29udGV4dCBmb3IgdGhlIGNvbmZpZ3VyZWQgYC5lbmQoKWAgYW5kIGAuZXJyb3IoKWAgZXZlbnQgICAgXG4gICAqIGhhbmRsZXIgY2FsbGJhY2tzIG9uIHRoaXMgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBjdHhcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgVGhlIGB0aGlzYCBvYmplY3QgZm9yIHRoZSBjb25maWd1cmVkIGAuZW5kKClgIGFuZFxuICAgKiBgLmVycm9yKClgIGV2ZW50IGhhbmRsZXJzIG9uIHRoaXMgcmVxdWVzdC5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovIFxuICBjdHg6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdGhpcy5zY29wZSA9IGNvbnRleHQgfHwgdGhpcztcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdXBwcmVzcyBvciByYWlzZSBnbG9iYWwgZXZlbnRzIGZvciB0aGlzIGBpb2AgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBnbG9iYWxcbiAgICogQHBhcmFtIHtCb29sZWFufSByYWlzZSBgdHJ1ZWAgdG8gcmFpc2UgZ2xvYmFsIGV2ZW50cywgYGZhbHNlYCB0byBzdXByZXNzIFxuICAgKiBldmVudCBmaXJpbmcgZ2xvYmFsbHkuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICBcbiAgZ2xvYmFsOiBmdW5jdGlvbihyYWlzZSkge1xuICAgIHRoaXMuZ2xvYmFsRXZ0cyA9IExhbmcuaXNCb29sZWFuKHJhaXNlKSA/IHJhaXNlIDogdGhpcy5nbG9iYWxFdnRzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICBcblxuICAvKipcbiAgICogUmV0cmlldmUgZGV0YWlscyBhYm91dCB1c2VyLlxuICAgKiAgIFxuICAgKiBAbWV0aG9kIGFib3V0XG4gICAqIEByZXR1cm4ge09iamVjdH0gZGV0YWlscyBhYm91dCB1c2VyIG90aGVyd2llcyBgbnVsbGAuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBhYm91dDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gdGhpcy5yZXEucmVzO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpWydjYWxsJ10gPT09ICcvci91c2VyL2xvZ2luJyAmJiByZXNwb25zZSA/IFxuICAgICAgICAgICByZXNwb25zZS5ib2R5LmdldCgndXNlcicpIDogbnVsbDtcbiAgfSwgIFxuXG4gIC8qKlxuICAgKiBTaGFyZXMgdGhlIGNvb2tpZXMgZnJvbSBhIGRpZmZlcmVuIGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZVxuICAgKiBhY3Jvc3MgYHRoaXNgIHJlcXVlc3QgYW5kIGFsbCByZXF1ZXN0cyBjaGFpbmVkIHRvIGl0LlxuICAgKlxuICAgKiBAbWV0aG9kIHNoYXJlXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgc2hhcmU6IGZ1bmN0aW9uIChjb29raWVzKSB7XG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuc3RpY2t5KSB7XG4gICAgICBpZiAoZ2xvYmFsT3B0aW9ucy5jb29raWVzKSB7XG4gICAgICAgIHRoaXMuY29va2llcyA9IGdsb2JhbE9wdGlvbnMuY29va2llcy5zbGljZSgwKTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29va2llcykgeyBcbiAgICAgICAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzLnNsaWNlKDApOyBcbiAgICAgICAgICBnbG9iYWxPcHRpb25zLnNldCgnY29va2llcycsIHRoaXMuY29va2llcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb29raWVzID0gKGNvb2tpZXMgPyBjb29raWVzLnNsaWNlKDApIDogdGhpcy5jb29raWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSFRUUCBjb29raWUgcHJldmlvdXNseSBzZW50IGJ5IHRoZSBzZXJ2ZXIgd2l0aCBTZXQtQ29va2llLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBwYXNzZWQgdG8gYC5zaGFyZShydXNlci5nZXRDb29raWVzKCkpYCBvZiBhIGRpZmZyZW50XG4gICAqIGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZSBhY3Jvc3MgcmVxdWVzdHMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0Q29va2llc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIEhUVFAgY29va2llIHByZXZpb3VzbHkgc2VudCBieSB0aGUgc2VydmVyIHdpdGggXG4gICAqIFNldC1Db29raWUuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGdldENvb2tpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jb29raWVzO1xuICB9LCBcblxuICBkZWxheTogZnVuY3Rpb24gKG1zKSB7XG4gICAgLy8gVE9ETzogc3VwcG9ydCBkZWxheWVkIHJlcXVlc3RzIGJhc2VkIG9uIG1zIGZvciBub3cgdGhpcyBpcyBqdXN0IGEgcGF1c2UuXG4gICAgdGhpcy5kZWxheWVkID0gIWlzTmFOKHBhcnNlRmxvYXQobXMpKSAmJiBpc0Zpbml0ZShtcykgPyBtcyA6IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgICBcblxuICAvKipcbiAgICogVW53aW5kIHRoZSBxdWV1ZSBjaGFpbiBjbGVhcmluZyByZXF1ZXN0cyB0aGF0IG1pZ2h0IGhhdmUgZGVsYXlzIGF0dGFjaGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIGRyYWluXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgb3JcbiAgICogXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGRyYWluOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5xLmZsdXNoKCk7IFxuXG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWQucHJvbWlzZTtcbiAgfSwgICBcblxuICAvKipcbiAgICogVGhlIGAucHJvbWlzZSgpYCBtZXRob2QgcmV0dXJucyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBQcm9taXNlIHRoYXQgaXMgXG4gICAqIHJlc29sdmVkIG9uY2UgYWxsIERlcGxveVIgYC5pbygpYCByZXF1ZXN0cyBoYXZlIGVuZGVkLlxuICAgKiAgIFxuICAgKiBAbWV0aG9kIHByb21pc2VcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvclxuICAgKiBcInJlamVjdFwiIGNhbGxiYWNrLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gICAgIFxuICBwcm9taXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmQoKTtcblxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkLnByb21pc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFib3J0IHRoZSBEZXBsb3lSIHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgYWJvcnQgIFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXEuYWJvcnQoKTtcbiAgICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gICAgdGhpcy5kZWZlcnJlZC5yZWplY3QodGhpcy5faGFuZGxlRXJyb3IoeyBcbiAgICAgICAgc3RhdHVzOiAnYWJvcnQnLFxuICAgICAgICB0ZXh0OiAnRGVwbG95UiByZXF1ZXN0IGFib3J0ZWQuJ1xuICAgIH0pKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gLyoqXG4gICogU2V0IHRpbWVvdXQgdG8gYG1zYC5cbiAgKlxuICAqIEBtZXRob2QgdGltZW91dCAgXG4gICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICogQGFwaSBwdWJsaWNcbiAgKi8gIFxuICB0aW1lb3V0OiBmdW5jdGlvbiAobXMpIHtcbiAgICB0aGlzLnJlcS50aW1lb3V0KG1zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gLyoqXG4gICogVHVybiBsb2dnaW5nIG9uIGZvciB0aGUgc3BlY2lmaWMgdHJhbnNhY3Rpb24uXG4gICpcbiAgKiBAbWV0aG9kIGxvZ1xuICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAqIEBhcGkgcHVibGljXG4gICovIFxuICBsb2c6IGZ1bmN0aW9uIChsZXZlbCkge1xuICAgIHRoaXMubG9nZ2VyLnNldExldmVsKGxldmVsIHx8IExvZ2dlci5ERUJVRyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRmlsdGVycyBzdWNjZXNzZnVsIHJlc3BvbnNlcyB0byBjb250YWluIG9ubHkgYSB0b3AtbGV2ZWwgRGVwbG95UiBBUEkgXG4gICAqIHJlc3BvbnNlIGVudGl0aWVzOlxuICAgKiAtICd1c2VyJ1xuICAgKiAtICdwcm9qZWN0J1xuICAgKiAtICd3b3Jrc3BhY2UnIFxuICAgKiAtICdleGVjdXRpb24nIFxuICAgKiAtICdkaXJlY3RvcnknIFxuICAgKiAtICdyZXBvc2l0b3J5J1xuICAgKiAtICdwYWNrYWdlcycgXG4gICAqICAgXG4gICAqIEBtZXRob2QgZW50aXR5XG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZW50aXR5OiBmdW5jdGlvbiAoZW50aXR5KSB7XG4gICAgdGhpcy5lbnRpdGllcyA9IHV0aWxzLmluQXJyYXkoVE9QTEVWRUxfRU5USVRJRVMsIGVudGl0eSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgcmVxdWVzdCBkYXRhIGJlaW5nIHNlbnQgdG8gYSBEZXBsb3lSIEFQSS4gXG4gICAqXG4gICAqIEBtZXRob2QgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgb2JqZWN0IGxpdGVyYWwgY29uZmlndXJhdGlvbiBoYXNoLiBcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBkYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9OyAgICBcblxuICAgIC8vIHJlbW92ZSBhbnkgaW5saW5lZCByaW5wdXQocykgYW5kIGF0dGFjaCB0aGVtIHRvIHRoZSByaW5wdXQocykgcHJvcGVydHlcbiAgICBpZiAoZGF0YS5yaW5wdXQgfHwgZGF0YS5yaW5wdXRzKSB7XG4gICAgICB0aGlzLnJpbnB1dChkYXRhLnJpbnB1dCk7XG4gICAgICB0aGlzLnJpbnB1dHMoZGF0YS5yaW5wdXRzKTtcbiAgICB9IFxuXG4gICAgLy8gcmVtb3ZlIGFueSBgcmVzZXJ2ZWRgIHZhbHVlcyB0aGF0IGNvdWxkIGhhdmUgYmVlbiBwYXNzZWQgYnkgbWlzdGFrZVxuICAgIHZhciBCTEFDS0xJU1QgPSBbJ3JpbnB1dCcsICdyaW5wdXRzJywgJ19fY29va2llc19fJ107XG4gICAgQkxBQ0tMSVNULmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHsgZGVsZXRlIGRhdGFbcGFyYW1dOyB9KTsgIFxuXG4gICAgdGhpcy5wYXJhbXMgPSBtZXJnZSh0aGlzLnBhcmFtcywgZGF0YSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogQXR0YWNoZXMgYSBmaWxlIHRvIGJlIHVwbG9hZGVkLiBcbiAgICpcbiAgICogQG1ldGhvZCBhdHRhY2hcbiAgICogQHBhcmFtIHtGaWxlfEJsb2J8cGF0aH0gZmlsZSBUaGUgZmlsZSB0byBiZSBhdHRhY2hlZCBmb3IgYW4gdXBsb2FkLiBGb3IgXG4gICAqIEJyb3dzZXIgZW52aXJvbm1lbnRzIHRoZSBIVE1MNSBGaWxlfEJsb2IgaXMgdXNlZC4gRm9yIHRoZSBOb2RlLmpzIFxuICAgKiBlbnZpcm9ubWVudCwgYSBmaWxlIHBhdGggaXMgYWNjZXB0ZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAob3B0aW9uYWwpIHRoZSBuYW1lIG9mIHRoZSBmaWxlIHRvIGJlIHVwbG9hZGVkLiBcbiAgICogVGhpcyBuYW1lIGRvZXMgbm90IGhhdmUgdG8gbWF0Y2ggdGhlIGFjdHVhbCBzb3VyY2UgZmlsZW5hbWUuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgYXR0YWNoOiBmdW5jdGlvbiAoZmlsZSwgZmlsZW5hbWUpIHtcbiAgICBpZiAodGhpcy5hcGkudXBsb2FkKSB7XG4gICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuXG4gICAgICAvLyBvcHRpb25hbCBmaWxlbmFtZSBoZXJlIGZvciBjb252ZW5pZW5jZVxuICAgICAgaWYgKGZpbGVuYW1lKSB7IHRoaXMuZGF0YSggeyBmaWxlbmFtZTogZmlsZW5hbWUgfSApOyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN1cHBvcnRlZCBvbmx5IGluIE5vZGUuanMsIHRoaXMgbWV0aG9kIHdvcmtzIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIFxuICAgKiBhdHRhY2ggbWV0aG9kIHRvIGluZGljYXRlIHRoYXQgdGhlIGZpbGUgc2hvdWxkIGJlIHJlYWQgaW4gYXMgYSByZWFkYWJsZSBcbiAgICogc3RyZWFtIGR1cmluZyBhIGZpbGUgdXBsb2FkLlxuICAgKlxuICAgKiBAbWV0aG9kIHN0cmVhbVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAob3B0aW9uYWwpIHRoZSBSZWFkYWJsZSBTdHJlYW0gb3B0aW9ucyBoYXNoLlxuICAgKiAgYGBgXG4gICAqICAgIHsgZmxhZ3M6ICdyJyxcbiAgICogICAgICBlbmNvZGluZzogbnVsbCxcbiAgICogICAgICBmZDogbnVsbCxcbiAgICogICAgICBtb2RlOiAwNjY2LFxuICAgKiAgICAgIGF1dG9DbG9zZTogdHJ1ZVxuICAgKiAgICB9XG4gICAqIGBgYFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHN0cmVhbTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucnN0cmVhbSA9ICghd2luICYmIHRoaXMuYXBpLnVwbG9hZCk7IC8vbm9kZWpzIG9ubHlcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgYGZpbHRlcijOuylgIG1ldGhvZCByZW1vdmVzIHRoaXMgRGVwbG95UiByZXF1ZXN0IGZyb20gdGhlIHJlcXVlc3QgY2hhaW5cbiAgICogaWYgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGRvZXMgKm5vdCogcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSBpdC5cbiAgICpcbiAgICogRXhhbXBsZXM6XG4gICAqXG4gICAqIGBgYFxuICAgKiAvLyBSZW1vdmUgZnJvbSB0aGUgcmVxdWVzdCBjaGFpblxuICAgKiAuZmlsdGVyKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICogICAgcmV0dXJuIDUgPiAxMDtcbiAgICogfSlcbiAgICpcbiAgICogLy8gS2VlcCBpbiB0aGUgcmVxdWVzdCBjaGFpblxuICAgKiAuZmlsdGVyKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICogICAgcmV0dXJuIDEwID4gNTtcbiAgICogfSkgICBcbiAgICogYGBgXG4gICAqXG4gICAqIEBtZXRob2QgZmlsdGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBmaWx0ZXI6IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKGZuKSB7XG4gICAgICB0aGlzLmlvRmlsdGVyID0gZnVuY3Rpb24ocHJldkFyZ3MpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSB7fSwga2VlcDtcblxuICAgICAgICAvLyBjb3B5IG92ZXIgcHJldmlvdXMgYXJndW1lbnRzIGFuZCBmaWx0ZXIgb3V0IGludGVybmFsIF9fY29va2llc19fIFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJldkFyZ3MpIHtcbiAgICAgICAgICAgaWYgKGtleSAhPT0gJ19fY29va2llc19fJykgeyBcbiAgICAgICAgICAgICAgYXJnc1trZXldID0gcHJldkFyZ3Nba2V5XTtcbiAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAga2VlcCA9IGZuKGFyZ3MpO1xuICAgICAgICByZXR1cm4gKGtlZXAgfHwga2VlcCA9PT0gZmFsc2UgPyBrZWVwIDogdHJ1ZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LCAgXG4gIFxuICAvKipcbiAgICogQWN0cyBhcyBhIGZpbmFsbHkgc3RhdGVtZW50IGFsbG93aW5nIHlvdSB0byBleGVjdXRlIFwiY2xlYW51cFwiIHR5cGUgdGFza3MgXG4gICAqIGluIGEgcmVxdWVzdCBjaGFpbi4gSXQgYXJyYW5nZXMgZm9yIGNsZWFudXAgdG8gYmUgY2FsbGVkLCB3aXRoIG5vIFxuICAgKiBhcmd1bWVudHMsIHdoZW4gdGhlIERlcGxveVIgcmVxdWVzdCBjaGFpbiBpcyBlaXRoZXIgY29tcGxldGVseSBmdWxmaWxsZWQgXG4gICAqIG9yIHJlamVjdGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIGVuc3VyZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSDOuyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gIFxuICBlbnN1cmU6IGZ1bmN0aW9uIChmbikge1xuICAgIHRoaXMuZGVmZXJyZWQucHJvbWlzZS5lbnN1cmUoZm4pO1xuXG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWQucHJvbWlzZTtcbiAgfSxcbiAgICAgIFxuICAvKipcbiAgICogVGhlIGdlbmVyYWwgZmFpbHVyZSBjYWxsYmFjay4gSWYgY2FsbGVkLCBhbGwgRGVwbG95UiBlcnJvcnMgZm9yIHRoaXMgXG4gICAqIHRyYW5zYWN0aW9uIHdpbGwgYmUgcmV0dXJuZWQgaGVyZSB3aGVuIHJhaXNlZC5cbiAgICpcbiAgICogQG1ldGhvZCBlcnJvclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSDOuyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZXJyb3I6IGZ1bmN0aW9uIChmbikge1xuICAgIHRoaXMub24oJ2Vycm9yJywgZm4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN0cmVhbSB0aGUgRGVwbG95UiByZXNwb25zZSBpbnRvIHRoZSBwaXBlLiBJdCBpcyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IGlmIFxuICAgKiB0aGUgYC5waXBlKClgIG1ldGhvZCBpcyBuZXZlciBjYWxsZWQgdGhlIHJlcXVlc3Qgd2lsbCBub3QgYmUgc2VudC5cbiAgICpcbiAgICogVGhlIGAucGlwZSgpYCBtZXRob2Qgc2hvdWxkIGJlIGJlIHVzZWQgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gYC5lbmQoKWAgYW5kIFxuICAgKiBuZXZlciBhbG9uZyBzaWRlIG9mIGl0LiBgLnBpcGUoKWAgYW5kIGAuZW5kKClgIGFyZSBhbiBlaXRoZXItb3IuXG4gICAqXG4gICAqIEBtZXRob2QgcGlwZVxuICAgKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIEEgZGVzdGluYXRpb24gU3RyZWFtLlxuICAgKiBAcmV0dXJuIHtTdHJlYW19IFRoZSBwYXNzZWQgaW4gZGVzdGluYXRpb24gc3RyZWFtIHRvIGJlIHVzZWQgZm9yIGFkZGl0aW9uYWwgXG4gICAqIHBpcGluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHBpcGU6IGZ1bmN0aW9uIChkZXN0KSB7XG4gICAgdmFyIHEgICA9IHRoaXMucSxcbiAgICAgICAgYXBpID0gdGhpcy5hcGk7ICAgICAgICBcblxuICAgIHEuYWRkKGZ1bmN0aW9uKHJlc3BvbnNlQ2hhaW4sIGVycm9yLCBwcmV2QXJncykgeyAgICBcbiAgICAgIC8vIGJyYWtlIHRoZSBjYWxsIGNoYWluIG9uIGVycm9yICAgICAgXG4gICAgICBpZiAoZXJyb3IpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmRlZmVycmVkLnJlamVjdChlcnJvcik7ICAgICAgXG4gICAgICAgIHEuZmx1c2gocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKTsgLy8gZHJhaW4gdGhlIHF1ZXVlXG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fcHJlcFJlcXVlc3QocmVzcG9uc2VDaGFpbiwgcHJldkFyZ3MpO1xuXG4gICAgICBMb2dnZXIuaW5mbygncGlwZSgpJywgYXBpLCB0aGlzLnJlcSk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdwaXBlKCknLCBhcGksIHRoaXMucmVxKTsgICBcblxuICAgICAgdmFyIHN0cmVhbSA9IHRoaXMucmVxLnBpcGUoZGVzdCk7XG4gICAgICBxLnlpZWxkKHRydWUpO1xuICAgICAgc3RyZWFtLm9uKCdlcnJvcicsIGZ1bmN0aW9uICgpIHsgfSk7ICAgIFxuICAgICAgc3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbigpIHsgfSk7ICAgICBcbiAgICAgIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uKCkgeyB9KTsgICAgICBcbiAgICB9LCB0aGlzKTtcbiAgXG4gICAgaWYgKHEuc2l6ZSgpIDw9IDEpIHsgcS5mbHVzaCgpOyB9XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfSxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHJlcXVlc3QgaXMgcmVhZHkgdG8gYmUgc2VudCB0byBEZXBsb3lSLiBJdCBpcyBpbXBvcnRhbnQgXG4gICAqIHRvIG5vdGUgdGhhdCBpZiB0aGUgYC5lbmQoKWAgbWV0aG9kIGlzIG5ldmVyIGNhbGxlZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBiZVxuICAgKiBzZW50LlxuICAgKlxuICAgKiBAbWV0aG9kIGVuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSDOuyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovIFxuICBlbmQ6IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBzZWxmICAgICA9IHRoaXMsXG4gICAgICAgIHEgICAgICAgID0gdGhpcy5xLFxuICAgICAgICBhcGkgICAgICA9IHRoaXMuYXBpLFxuICAgICAgICBhcmdzICAgICA9IG51bGwsXG4gICAgICAgIGVudGl0aWVzID0gIHRoaXMuZW50aXRpZXM7XG5cbiAgICBxLmFkZChmdW5jdGlvbihyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpIHtcbiAgICAgIC8vIGJyZWFrIHRoZSBjYWxsIGNoYWluIG9uIGVycm9yICAgICAgXG4gICAgICBpZiAoZXJyb3IpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmRlZmVycmVkLnJlamVjdChlcnJvcik7ICAgICAgICBcbiAgICAgICAgcS5mbHVzaChyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpOyAvLyBkcmFpbiB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBmaWx0ZXIgb3V0IHJlc3BvbnNlcyAgICBcbiAgICAgIGlmICghdGhpcy5pb0ZpbHRlcihwcmV2QXJncykpIHtcbiAgICAgICAgaWYgKHEuc2l6ZSgpID09PSAwKSB7IFxuICAgICAgICAgIHRoaXMuZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZUNoYWluIHx8IHByZXZBcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHEuZmx1c2gocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKTsgLy8gZHJhaW4gdGhlIHF1ZXVlXG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fcHJlcFJlcXVlc3QocmVzcG9uc2VDaGFpbiwgcHJldkFyZ3MpO1xuXG4gICAgICBMb2dnZXIuaW5mbygnaW8oKScsIGFwaSwgdGhpcy5yZXEpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnaW8oKScsIGFwaSwgdGhpcy5yZXEpOyAgICBcblxuICAgICAgLy8gc2VuZCBuZXh0IHJlcXVlc3RcbiAgICAgIHRoaXMucmVxLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5zaGFyZShzZWxmLmNvb2tpZXMgfHwgcmVzLmhlYWRlcnNbJ3NldC1jb29raWUnXSk7ICAgICAgICAgXG5cbiAgICAgICAgLy8gLS0gbG9nIGNvb2tpZXMgYWNyb3NzIHJlcXVlc3RzIC0tXG4gICAgICAgIGlmIChzZWxmLmNvb2tpZXMpIHtcbiAgICAgICAgICBMb2dnZXIuaW5mbygnY29va2llcycsIGFwaSwgc2VsZi5jb29raWVzKTsgXG4gICAgICAgICAgc2VsZi5sb2dnZXIuaW5mbygnY29va2llcycsIGFwaSwgc2VsZi5jb29raWVzKTsgXG4gICAgICAgIH1cblxuICAgICAgICBlcnJvciA9IHNlbGYuX2hhbmRsZUVycm9yKHJlcyk7XG4gICAgICAgIHZhciBkcmVzID0gKHJlcy5ib2R5ICYmIHJlcy5ib2R5LmRlcGxveXIgPyByZXMuYm9keSA6IHJlcyk7ICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAgIHNlbGYuaW5wdXRzID0gW107XG4gICAgICAgIHNlbGYub3V0cHV0cyA9IFtdO1xuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgLy8gLS0gTG9nIGdsb2JhbCArIHRyYW5zYWN0aW9uIGxvZyAtLVxuICAgICAgICAgICBMb2dnZXIuaW5mbygnZW5kKCknLCBhcGksIGRyZXMsIHJlcyk7XG4gICAgICAgICAgIHNlbGYubG9nZ2VyLmluZm8oJ2VuZCgpJywgYXBpLCBkcmVzLCByZXMpO1xuXG4gICAgICAgICAgIC8vIC0tIHdhbGsgcmVzcG9uc2UgZm9yIHRvcC1sZXZlbCBlbnRpdHkgcmVzcG9uc2UgYXNzaWdubWVudCAtLSAgICAgICAgXG4gICAgICAgICAgIGlmIChlbnRpdGllcykgeyBkcmVzID0gZHJlcy5kZXBsb3lyLnJlc3BvbnNlW2VudGl0aWVzXSB8fCBkcmVzOyB9XG5cbiAgICAgICAgICAgZHJlcy5nZXQgPSBmdW5jdGlvbihrZXkpIHsgXG4gICAgICAgICAgICAgIHJldHVybiB1dGlscy5nZXQoZHJlcy5kZXBsb3lyLnJlc3BvbnNlLCBrZXkpOyBcbiAgICAgICAgICAgfTtcblxuICAgICAgICAgICBkcmVzLndvcmtzcGFjZSA9IGZ1bmN0aW9uKG5hbWUpIHsgXG4gICAgICAgICAgICAgIHJldHVybiB1dGlscy53b3Jrc3BhY2UoZHJlcy5kZXBsb3lyLnJlc3BvbnNlLCBuYW1lKTsgXG4gICAgICAgICAgIH07XG5cbiAgICAgICAgICAgLy8gLS0gY2FsbGJhY2sgLS1cbiAgICAgICAgICAgaWYgKGZuKSB7IGFyZ3MgPSBmbi5hcHBseShzZWxmLnNjb3BlLCBbZHJlcywgcmVzcG9uc2VDaGFpbl0pO31cblxuICAgICAgICAgICAvLyAtLSBub3RpZnkgdGhhdCB0aGUgcXVldWUgaGFzIGJlZW4gZHJhaW5lZC4uLiAtLVxuICAgICAgICAgICBpZiAocS5zaXplKCkgPT09IDApIHsgXG4gICAgICAgICAgICAgc2VsZi5fY2xlYXIoKTtcbiAgICAgICAgICAgICBzZWxmLmRlZmVycmVkLnJlc29sdmUocmVzcG9uc2VDaGFpbiB8fCBkcmVzKTtcbiAgICAgICAgICAgfSAgICAgICAgICBcblxuICAgICAgICAgICAvLyAtLSBpbmNsdWRlIGNvb2tpZXMgaW4gbmV4dCByZXF1ZXN0IGluIHRoZSBxdWV1ZSAtLVxuICAgICAgICAgICBhcmdzID0gbWVyZ2UoYXJncywgeyBfX2Nvb2tpZXNfXzogc2VsZi5jb29raWVzIH0pOyAgICAgICAgICBcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgcS55aWVsZChmYWxzZSk7XG4gICAgICAgIHEuZmx1c2goZHJlcywgZXJyb3IsIGFyZ3MpOyAvLyBwYXNzIHJlc3VsdHxlcnJvcnxhcmdzIHRvIG5leHQgXG4gICAgICB9KTtcblxuICAgICAgcS55aWVsZCh0cnVlKTtcbiAgICB9LCB0aGlzLCB0aGlzLmRlbGF5ZWQpO1xuICBcbiAgICBpZiAoIXRoaXMuZGVsYXllZCAmJiBxLnNpemUoKSA8PSAxKSB7IHEuZmx1c2goKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sIFxuXG4gIC8qKiBcbiAgICogQWRkIGFuIGFkZGl0aW9uYWwgSU8gcmVxdWVzdCB0byB0aGUgZXhzaXN0aW5nIHNlcXVlbnRpYWwgcmVxdWVzdCBjaGFpbi5cbiAgICpcbiAgICogQG1ldGhvZCBpb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpIE9uZSBvZiB0aGUgc3VwcG9ydGVkIERlcGxveVIgQVBJcy5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gICBcbiAgaW86IGZ1bmN0aW9uIChhcGkpIHsgICAgXG4gICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSwgeyBcbiAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcywgXG4gICAgICBxdWV1ZTogdGhpcy5xLCBcbiAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIFxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgYWRkaW5nIGFuIGFkZGl0aW9uYWwgc2NyaXB0IGV4ZWN1dGlvbiB0byB0aGUgXG4gICAqIGV4c2lzdGluZyBzZXF1ZW50aWFsIHJlcXVlc3QgY2hhaW4uXG4gICAqXG4gICAqIEBtZXRob2Qgc2NyaXB0XG4gICAqIEBwYXJhbSB7QXJndW1lbnRzfSBBcmd1bWVudHMgdG8gZGVmaW5lIHRoZSBmdWxseSBxdWFsaWZpZWQgc2NyaXB0IGZvciBcbiAgICogZXhlY3V0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBzY3JpcHQ6IGZ1bmN0aW9uKCkge1xuICAgICB2YXIgYXJncyA9IHV0aWxzLnNpZ25hdHVyZShhcmd1bWVudHMpLFxuICAgICAgICAgb3B0cyA9IGFyZ3Mub3B0cyxcbiAgICAgICAgIGFwaSAgPSBhcmdzLmFwaSxcbiAgICAgICAgIGxpbmsgPSB7IFxuICAgICAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcywgXG4gICAgICAgICAgcXVldWU6IHRoaXMucSwgXG4gICAgICAgICAgZGVmZXJyZWQ6IHRoaXMuZGVmZXJyZWRcbiAgICAgICAgfTsgIFxuXG4gICAgLy8gY29udmVuaWVuY2UgLSBpZiB0aGUgcHJvamVjdCBpcyBhIGJvb2xlbiBgdHJ1ZWAgcmF0aGVyIHRoYW4gYSBwaWQsIGZpcnN0XG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIHRoZW4gcHJlcGFyZSB0aGUgcHJvamVjdCBhcGkgY2FsbCB0byBleGVjdXRlXG4gICAgaWYgKGFyZ3MuY3JlYXRlKSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3Byb2plY3QvY3JlYXRlJywgbGluaylcbiAgICAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9qZWN0OiByZXMuZ2V0KCdwcm9qZWN0JykucHJvamVjdCB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuaW8oYXBpKVxuICAgICAgICAgICAgICAgLmRhdGEob3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGksIGxpbmspLmRhdGEob3B0cyk7XG4gICAgfSAgICBcbiAgfSxcblxuICAvKiogXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBhZGRpbmcgYW4gYWRkaXRpb25hbCByZXBvc2l0b3J5LW1hbmFnZWQgc2hlbGwgXG4gICAqIHNjcmlwdCBleGVjdXRpb24gdG8gdGhlIGV4c2lzdGluZyBzZXF1ZW50aWFsIHJlcXVlc3QgY2hhaW4uXG4gICAqXG4gICAqIFRoaXMgY2FsbCBleGVjdXRlcyByZXBvc2l0b3J5LW1hbmFnZWQgc2hlbGwgc2NyaXB0cyAuc2gsIC5jc2gsIC5iYXNoLCAuYmF0IFxuICAgKiBvbiB0aGUgRGVwbG95UiBzZXJ2ZXIuIER1ZSB0byB0aGUgc3BlY2lhbCBzZWN1cml0eSBjb25jZXJucyBhc3NvY2lhdGVkIHdpdGggXG4gICAqIGV4Y3V0aW5nIHNoZWxsIHNjcmlwdHMgb24gdGhlIERlcGxveVIgc2VydmVyLCBvbmx5IHNoZWxsIHNjcmlwdHMgb3duZWQgYnkgXG4gICAqIF9BRE1JTklTVFJBVE9SXyB1c2VycyBjYW4gYmUgZXhlY3V0ZWQgb24gdGhpcyBBUEkgY2FsbC4gQW55IGF0dGVtcHQgdG8gXG4gICAqIGV4ZWN1dGUgYSBzaGVsbCBzY3JpcHQgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IHRoYXQgaXMgbm90IG93bmVkIGJ5IGFuIFxuICAgKiBfQURNSU5JU1RSQVRPUl8gdXNlciB3aWxsIGJlIHJlamVjdGVkLlxuICAgKlxuICAgKiBUbyBleGVjdXRlIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNoZWxsIHNjcmlwdCB0aGUgY2FsbGVyIG11c3QgcHJvdmlkZSBcbiAgICogcGFyYW1ldGVyIHZhbHVlcyBmb3IgX2F1dGhvcl8sIF9kaXJlY3RvcnlfLCBfZmlsZW5hbWVfLiBUaGlzIGNhbiBiZVxuICAgKiBhY2hpZXZlZCBieSBwcm92aWRpbmcgYSBmdWxseSBxdWFsaWZpZWQgc2hlbGwgc2NyaXB0IFxuICAgKiBgLzxhdXRob3I+LzxkaXJlY3Rvcnk+LzxmaWxlbmFtZT5gLCBmb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIGBgYFxuICAgKiAgLnNoZWxsKCcvYWRtaW4vZXh0ZXJuYWw6cHVibGljOmFkbWluL2VjaG8uc2gnLCAnZWNoby5zaCBhcmdzIHRvIHBhc3MuJylcbiAgICogIGBgYFxuICAgKlxuICAgKiBAbWV0aG9kIHNoZWxsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlcGF0aCB0byBkZWZpbmUgdGhlIGZ1bGx5IHF1YWxpZmllZCBzaGVsbCBzY3JpcHQgZm9yXG4gICAqIGV4ZWN1dGlvbi4gXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcmdzIChvcHRpb25hbCkgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBzaGVsbCBcbiAgICogc2NyaXB0IG9uIGV4ZWN1dGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgc2hlbGw6IGZ1bmN0aW9uKHBhdGgsIGFyZ3MpIHsgICBcbiAgICB2YXIgbGluayA9IHsgXG4gICAgICAgICAgY29va2llczogdGhpcy5jb29raWVzLCBcbiAgICAgICAgICBxdWV1ZTogdGhpcy5xLCBcbiAgICAgICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgICAgICB9LFxuICAgICAgICB0b2tlbnMgPSBMYW5nLmlzU3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnXFwvJykgOiBbXTtcblxuICAgIC8vIGhhbmRsZSBib3RoOiBgL2F1dGhvci9kaXJlY3RvcnkvZmlsZW5hbWVgICYgYGF1dGhvci9kaXJlY3RvcnkvZmlsZW5hbWVgXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPiAzKSB7IHRva2VucyA9IHRva2Vucy5zbGljZSgxKTsgfVxuXG4gICAgcmV0dXJuIERlcGxveVIubmV3KCcvci9yZXBvc2l0b3J5L3NoZWxsL2V4ZWN1dGUnLCBsaW5rKS5kYXRhKHtcbiAgICAgIGF1dGhvcjogdG9rZW5zWzBdLFxuICAgICAgZGlyZWN0b3J5OiB0b2tlbnNbMV0sXG4gICAgICBmaWxlbmFtZTogdG9rZW5zWzJdLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKiBcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGV4ZWN1dGluZyBhIGJsb2NrIG9mIFIgY29kZSBvbiB0aGUgUiBzZXNzaW9uLlxuXG4gICAqIEV4YW1wbGU6XG4gICAqICBgYGBcbiAgICogIC5jb2RlKCd4PC01JylcbiAgICogIC8vIC0tIG9yIC0tXG4gICAqICAuY29kZSgneDwtNScsIHByb2plY3RJZClcbiAgICogIGBgYFxuICAgKiAgIFxuICAgKiBAbWV0aG9kIGNvZGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHIgLSBUaGUgYmxvY2sgb2YgUiBjb2RlIHRvIGV4ZWN1dGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9qZWN0IC0gKG9wdGlvbmFsKSBpZiBvbWl0dGVkIGEgbmV3IHByb2plY3Qgd2lsbCBmaXJzdCBiZSBcbiAgICogY3JlYXRlZCBhbmQgdXNlZCwgb3RoZXJ3aXNlIGl0IHdpbGwgZXhlY3V0ZSBvbiB0aGUgUiBzZXNzaW9uIGlkZW50aWZpZWQgYnkgXG4gICAqIHRoaXMgYHByb2plY3RgLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb2RlOiBmdW5jdGlvbihyLCBwcm9qZWN0KSB7XG4gICAgIHZhciBsaW5rID0ge1xuICAgICAgICAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcyxcbiAgICAgICAgICAgICBxdWV1ZTogdGhpcy5xLFxuICAgICAgICAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgICAgICB9LFxuICAgICAgICAgYXBpID0gJy9yL3Byb2plY3QvZXhlY3V0ZS9jb2RlJztcblxuICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jcmVhdGUnLCBsaW5rKVxuICAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2plY3Q6IHJlcy5nZXQoJ3Byb2plY3QnKS5wcm9qZWN0IH07XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuaW8oYXBpKVxuICAgICAgICAgICAgIC5kYXRhKHsgY29kZTogciB9KTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGksIGxpbmspLmRhdGEoeyBjb2RlOiByLCBwcm9qZWN0OiBwcm9qZWN0IH0pO1xuICAgICB9XG4gIH0sXG4gIFxuICAvKiogXG4gICAqIFJlbGVhc2UgYW55IHJlc2lkdWFsIHByb2plY3QgcmVzb3VyY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgYXBwbGljYXRpb24gXG4gICAqIGluc3RhbmNlIHdoZW5ldmVyIGEgY2xpZW50IGFwcGxpY2F0aW9uIHRlcm1pbmF0ZXMuIFRoaXMgaW5jbHVkZXMgY2xvc2luZyBcbiAgICogYW55IHN1cHBsaWVkIHByb2plY3RzIGRvd24gYW5kIGxvZ2dpbmcgb3V0LlxuICAgKlxuICAgKiBAbWV0aG9kIHJlbGVhc2VcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHByb2plY3RzIFRoZSBwcm9qZWN0IG9yIGxpc3Qgb2YgcHJvamVjdHMgdG8gY2xvc2UuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYXV0aCAob3B0aW9uYWwpIHRvIHJlbWFpbiBhdXRoZW50aWNhdGVkLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByZWxlYXNlOiBmdW5jdGlvbihwcm9qZWN0cywgYXV0aCkge1xuICAgICBwcm9qZWN0cyA9IExhbmcuaXNBcnJheShwcm9qZWN0cykgPyBwcm9qZWN0cyA6IFtwcm9qZWN0c107XG5cbiAgICAgdmFyIHNlbGYgICAgID0gdGhpcyxcbiAgICAgICAgIGRlZmVycmVkID0gRCgpLFxuICAgICAgICAgZW1wdHkgICAgPSAhcHJvamVjdHMgfHwgIXByb2plY3RzWzBdLFxuICAgICAgICAgY291bnQgICAgPSAwLFxuICAgICAgICAgbGFzdCAgICAgPSAhZW1wdHkgPyBwcm9qZWN0cy5sZW5ndGggLSAxIDogY291bnQsXG4gICAgICAgICBjb29raWVzICA9IHRoaXMuZ2V0Q29va2llcygpOyAgICAgICAgICAgXG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gbGFzdCkge1xuICAgICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICBEZXBsb3lSLm5ldygnL3IvdXNlci9sb2dvdXQnKVxuICAgICAgICAgIC5zaGFyZShjb29raWVzKVxuICAgICAgICAgIC5lcnJvcihmdW5jdGlvbigpIHsgICAgICAgICAgXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pICAgICAgXG4gICAgICAgICAgLmVuZChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVuc3VyZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZGVzdHJveSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgc2VsZi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgfVxuXG4gICAgaWYgKCFlbXB0eSkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2Nsb3NlJylcbiAgICAgICAgLmRhdGEoeyBwcm9qZWN0OiBwcm9qZWN0IH0pXG4gICAgICAgIC5zaGFyZShjb29raWVzKVxuICAgICAgICAuZW5kKClcbiAgICAgICAgLmVuc3VyZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb2dvdXQoY291bnQpO1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7ICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ291dChjb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7ICBcbiAgfSwgIFxuXG4gIC8qKiBcbiAgICogQSBjb252ZW5pZW5jZSBhbHRlcm5hdGl2ZSB0byBtdWx0aXBsZSBgLnJpbnB1dCgpYCBjYWxscy4gRGVmaW5lcyBhIG5hbWUgXG4gICAqIGxpc3Qgb2YgUiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXR1cm5lZCBhcyBEZXBsb3lSLWVuY29kZWQgUiBvYmplY3RzIG9uIHRoZSBcbiAgICogcmVzcG9uc2UgbWFya3VwLlxuICAgKlxuICAgKiBDYWxsaW5nIHRoaXMgbWV0aG9kIH4ucm91dHB1dHMoWyAuLi4gXSlgIGlzIGVxdWl2YWxlbnQgdG8gaW52b2tpbmcgbXVsdGlwbGUgXG4gICAqIGAucm91dHB1dCguLi4pYCBjYWxscy5cbiAgICpcbiAgICogQG1ldGhvZCByb3V0cHV0c1xuICAgKiBAcGFyYW0ge0FycmF5fSByb2JqZWN0cyBBIG5hbWUgbGlzdCBvZiBSIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByb3V0cHV0czogZnVuY3Rpb24gKHJvdXRwdXRzKSB7XG4gICAgaWYgKHJvdXRwdXRzKSB7IHRoaXMub3V0cHV0cyA9IHRoaXMub3V0cHV0cy5jb25jYXQocm91dHB1dHMpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgXG4gIC8qKiBcbiAgICogRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgUiBvYmplY3QgdGhhdCB3aWxsIGJlIHJldHVybmVkIGFzIGEgRGVwbG95Ui1lbmNvZGVkIFxuICAgKiBSIG9iamVjdCBvbiB0aGUgcmVzcG9uc2UgbWFya3VwLlxuICAgKlxuICAgKiBAbWV0aG9kIHJvdXRwdXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvYmplY3QgVGhlIG5hbWUgb2YgdGhlIFIgb2JqZWN0IHRoYXQgd2lsbCBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcm91dHB1dDogZnVuY3Rpb24gKHJvdXRwdXQpIHtcbiAgICBpZiAocm91dHB1dCkgeyB0aGlzLnJvdXRwdXRzKFtyb3V0cHV0XSk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKiBcbiAgICogVXNlZCB0byBwYXNzIG11bHRpcGxlIGlucHV0cyBhdCBvbmNlIGZyb20gSmF2YVNjcmlwdCB0byBhbiBSIHNjcmlwdCB1c2luZyBcbiAgICogb25lIG9mIHRoZSBkZWZpbmVkIGBSSW5wdXRgIGZhY3Rvcmllcy5cbiAgICpcbiAgICogQG1ldGhvZCByaW5wdXRzXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJpbnB1dHMgVGhlIGBSSW5wdXRgIGxpc3Qgb2YgRGVwbG95Ui1zcGVjaWZpYyBlbmNvZGVkIFIgXG4gICAqIG9iamVjdCBkYXRhIGZvciB1c2Ugb24gYW4gQVBJIGNhbGwuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJpbnB1dHM6IGZ1bmN0aW9uIChyaW5wdXRzKSB7XG4gICAgaWYgKHJpbnB1dHMpIHsgdGhpcy5pbnB1dHMgPSB0aGlzLmlucHV0cy5jb25jYXQocmlucHV0cyk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKiBcbiAgICogVXNlZCB0byBwYXNzIG11bHRpcGxlIGlucHV0cyBhdCBvbmNlIGZyb20gSmF2YVNjcmlwdCB0byBhbiBSIHNjcmlwdCB1c2luZyBcbiAgICogb25lIG9mIHRoZSBkZWZpbmVkIGBSSW5wdXRgIGZhY3Rvcmllcy5cbiAgICpcbiAgICogQG1ldGhvZCByaW5wdXRcbiAgICogQHBhcmFtIHtSSW5wdXR9IHJpbnB1dCBUaGUgRGVwbG95Ui1zcGVjaWZpYyBlbmNvZGVkIFIgb2JqZWN0IGRhdGEgZm9yIHVzZSBcbiAgICogb24gYW4gQVBJIGNhbGwuICAgXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJpbnB1dDogZnVuY3Rpb24gKHJpbnB1dCkge1xuICAgIGlmIChyaW5wdXQpIHsgdGhpcy5pbnB1dHMucHVzaChyaW5wdXQpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRGVzdHJveSBsaWZlY3ljbGUgbWV0aG9kLiBGaXJlcyB0aGUgYGRlc3Ryb3lgIGV2ZW50LCBwcmlvciB0byBpbnZva2luZyBcbiAgICogZGVzdHJ1Y3RvcnMgZm9yIHRoZSBjbGFzcyBoaWVyYXJjaHkuIENhbGxlZCBpbnRlcm5hbGx5IHdoZW4gYC5yZWxlYXNlKClgXG4gICAqIGlzIGNhbGxlZC5cbiAgICpcbiAgICogQG1ldGhvZCBkZXN0cm95XG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScpO1xuICAgICAgdGhpcy5vZmZBbGwoKTtcbiAgICBcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHsgXG4gICAgICAgICAgdGhpc1trZXldID0gbnVsbDsgXG4gICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2goZXJyKSB7fVxuICB9LCAgXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFyOiBmdW5jdGlvbigpIHsgICAgXG4gICAgdGhpcy5wYXJhbXMgICA9IHt9O1xuICAgIHRoaXMuaW5wdXRzICAgPSBbXTtcbiAgICB0aGlzLm91dHB1dHMgID0gW107XG4gICAgdGhpcy5yc3RyZWFtICA9IGZhbHNlO1xuICAgIHRoaXMuZGVsYXllZCAgPSBmYWxzZTtcbiAgICB0aGlzLmFwaSAgICAgID0gbnVsbDsgICAgXG4gICAgdGhpcy5maWxlICAgICA9IG51bGw7ICBcbiAgICB0aGlzLmVudGl0aWVzID0gbnVsbDtcbiAgICB0aGlzLmlvRmlsdGVyID0gbnVsbDtcbiAgfSwgXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX3ByZXBSZXF1ZXN0OiBmdW5jdGlvbiAocmVzcG9uc2VDaGFpbiwgYXJncykge1xuICAgIHZhciByZXEgID0gdGhpcy5yZXEsXG4gICAgICAgIGZpbGUgPSB0aGlzLmZpbGU7XG5cbiAgICAvLyBzZXQgdGhlIHJlcXVlc3QgdHlwZSAgICBcbiAgICBpZiAodGhpcy5hcGkudXBsb2FkKSB7XG4gICAgICAgLy8gSWYgdGhlIGVudiBpcyB0aGUgQnJvd3NlciB0aGVyZSBpcyBubyBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGVcbiAgICAgICAvLyBDb250ZW50LVR5cGUuIFRoZSBicm93c2VyIHdpbGwgYXV0b21hdGljYWxseSBzZXQgdGhlIFxuICAgICAgIC8vIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9Li4uXCIgdmFsdWUuIElmIHRoZSBlbnYgaXMgTm9kZSB3ZSBuZWVkXG4gICAgICAgLy8gdG8gc2V0IGl0IG1hbnVhbGx5LlxuICAgICAgIGlmICghd2luKSB7IHRoaXMucmVxLnR5cGUoJ211bHRpcGFydC9mb3JtLWRhdGEnKTsgfSAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxLnR5cGUoJ2Zvcm0nKTtcbiAgICB9ICAgIFxuXG4gICAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikgeyBcbiAgICAgIGVyciA9IGVyciB8fCB7ICBjb2RlOiAnVU5LTk9XTiBDT0RFJywgdGV4dDogJ1VOS05PV04gRVJST1InIH07XG5cbiAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHsgXG4gICAgICAgIHN0YXR1czogZXJyLmNvZGUgfHwgJ1VOS05PV04gQ09ERScsXG4gICAgICAgIHRleHQ6IGVyclxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTsgICAgXG5cbiAgICB0aGlzLnNoYXJlKGFyZ3MgPyBhcmdzLl9fY29va2llc19fIDogbnVsbCk7XG5cbiAgICAvLyBhcmd1bWVudHMgcmV0dXJuZWQgZnJvbSBwcmV2IHJlcXVlc3QncyBpbygpLmVuZChmdW5jdGlvbigpIHsgcmV0dXJuIHg7IH0pXG4gICAgaWYgKGFyZ3MpIHsgXG4gICAgICAgdGhpcy5kYXRhKGFyZ3MpO1xuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pbnB1dHMubGVuZ3RoID4gMCkgeyBcbiAgICAgIHRoaXMuZGF0YSh7IGlucHV0czogZW5jb2Rlci5lbmNvZGUodGhpcy5pbnB1dHMpIH0pOyBcbiAgICB9XG4gIFxuICAgIGlmICh0aGlzLm91dHB1dHMubGVuZ3RoID4gMCkgeyBcbiAgICAgIHRoaXMuZGF0YSh7IHJvYmplY3RzOiB0aGlzLm91dHB1dHMuam9pbigpIH0pOyBcbiAgICB9ICAgIFxuXG4gICAgaWYgKHRoaXMuY29va2llcykgeyAgICAgXG4gICAgICB0aGlzLmNvb2tpZXMuZm9yRWFjaCggZnVuY3Rpb24oYykgeyByZXEuc2V0KCdDb29raWUnLCBjKTsgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXBpLnVwbG9hZCkgeyAgICBcbiAgICAgIGZvcih2YXIgcCBpbiB0aGlzLnBhcmFtcykge1xuICAgICAgICByZXEuZmllbGQocCwgKHRoaXMucGFyYW1zW3BdIHx8IHRoaXMucGFyYW1zW3BdID09PSBmYWxzZSkgPyBcbiAgICAgICAgICAgdGhpcy5wYXJhbXNbcF0gKyAnJyA6ICcnKTtcbiAgICAgIH0gXG4gICAgICByZXEuYXR0YWNoKCdmaWxlJywgdGhpcy5yc3RyZWFtID8gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKSA6IGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXFbdGhpcy5hcGkubWV0aG9kID09PSAnR0VUJyA/ICdxdWVyeScgOiAnc2VuZCddKHRoaXMucGFyYW1zKTtcbiAgICB9IFxuICB9LFxuXG4gIC8qKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIF9oYW5kbGVFcnJvcjogZnVuY3Rpb24gKHJhdykge1xuICAgIHZhciBzdGF0ICA9IHJhdy5zdGF0dXMsXG4gICAgICAgIHJlcyAgID0gKHJhdy5ib2R5ICYmIHJhdy5ib2R5LmRlcGxveXIgPyByYXcuYm9keSA6IHJhdyksXG4gICAgICAgIGVycm9yID0gKChzdGF0ICE9PSAyMDApIHx8IHJlcy5kZXBsb3lyICYmICFyZXMuZGVwbG95ci5yZXNwb25zZS5zdWNjZXNzKTtcblxuICAgIC8vIC0tIEhhbmRsZSBlcnJvcnMgLS1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJlcyA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbihrZXkpIHsgXG4gICAgICAgICAgcmV0dXJuIHV0aWxzLmdldCh0aGlzLmRlcGxveXIucmVzcG9uc2UsIGtleSk7IFxuICAgICAgICB9LFxuICAgICAgICBkZXBsb3lyOiB7ICAgICAgICAgIFxuICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGw6IHRoaXMuYXBpWydjYWxsJ10sXG4gICAgICAgICAgICBlcnJvckNvZGU6IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlIDogc3RhdCxcbiAgICAgICAgICAgIGVycm9yOiByZXMuZGVwbG95ciA/IHJlcy5kZXBsb3lyLnJlc3BvbnNlLmVycm9yIDogcmVzLnRleHRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIExvZ2dlci5lcnJvcignZXJyb3IoKScsIHRoaXMuYXBpLCByZXMsIHJhdyk7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignZXJyb3IoKScsIHRoaXMuYXBpLCByZXMsIHJhdyk7XG5cbiAgICAgIC8vIC0tIG5vdGlmeSBnbG9iYWwgZXJyb3JzIGZpcnN0IChpZiBhbnkpIGZvciB0aGlzIGNhbGwgLS0gICAgICBcbiAgICAgIGlmICh0aGlzLmdsb2JhbEV2dHMpIHtcbiAgICAgICAgcmFpc2VHbG9iYWxFcnJvcnModGhpcy5hcGlbJ2NhbGwnXSwgcmVzKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICAvLyAtLSB0cmFuYWN0aW9uIGxldmVsIEhUVFAgb3IgRGVwbG95UiBlcnJvcnMgY29tZSBuZXh0IC0tICAgIFxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHJlcyk7XG4gICAgICB0aGlzLmVtaXQoJ2RlcGxveXItaW86JyArIHJlcy5kZXBsb3lyLnJlc3BvbnNlLmVycm9yQ29kZSwgcmVzKTtcbiAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KHJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIEV4cG9zZSBmb3IgYSBjbGVhbmVyIGNsaWVudCBhcGkgaW50byBEZXBsb3lSXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgKiBFeHBvc2VzIHRoZSBgRGVwbG95UmAgb2JqZWN0IGZvciBleHRlbmRpbmcuXG4gICAqXG4gICAqIGBgYHZhciBEZXBsb3lSID0gcmVxdWlyZSgnZGVwbG95cicpLkRlcGxveVI7YGBgXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQGFwaSBwdWJsaWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIGBEZXBsb3lSYCBvYmplY3QuXG4gICAqLyAgIFxuICBEZXBsb3lSOiBEZXBsb3lSLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VzIHRoZSBzdXBwb3J0ZWQgRGVwbG95UiBBUElzLlxuICAgKlxuICAgKiBAbWV0aG9kIGFwaXNcbiAgICogQHBhcmFtIHtCb29sZWFufSBmbGF0IChvcHRpb25hbCkgaWYgYHRydWVgIHdpbGwgcmV0dXJuIGFuIGFycmF5IG9mIGp1c3QgdGhlIFxuICAgKiBBUEkncyBlbmRwb2ludCBwcm9wZXJ0aWVzLCBmb3IgZXhhbXBsZTogXG4gICAqIGBgYFxuICAgKiBbJy9yL3VzZXIvbG9naW4nLCAnL3IvdXNlci9sb2dvdXQnLCAnL3IvdXNlci9hYm91dCcsIC4uLl1cbiAgICogYGBgXG4gICAqIEBzdGF0aWNcbiAgICogQGFwaSBwdWJsaWNcbiAgICogQHJldHVybiB7T2JqZWN0fEFycmF5fSBUaGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBEZXBsb3lSIHNlcnZlci4gICAgICBcbiAgICovICBcbiAgYXBpczogZnVuY3Rpb24oZmxhdCkge1xuICAgIHJldHVybiBmbGF0ID8gT2JqZWN0LmtleXMoYXBpcykgOiBhcGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgc3RhdGljIG1ldGhvZCBmb3IgY29uZmlndXJpbmcgYWxsIERlcGxveVIgcmVxdWVzdHMuIFNldHRpbmdzIFxuICAgKiBtYWRlIGhlcmUgYXJlIGFwcGxpZWQgZ2xvYmFsbHkgYWNyb3NzIGV2ZXJ5IHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgY29uZmlndXJlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvYmplY3QgbGl0ZXJhbCBjb25maWd1cmF0aW9uIGhhc2guIFxuICAgKiBAc3RhdGljXG4gICAqIEBjaGFpbmFibGVcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbmZpZ3VyZTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7IGdsb2JhbE9wdGlvbnMuc2V0KGksIG9wdGlvbnNbaV0pOyB9XG5cbiAgICAvLyBhc3NlcnQgZ2xvYmFsIGNvb2tpZXMgYXJlIGVtcHR5IGlmIGdsb2JhbCBgc3RpY2t5YCBqc2Vzc2lvbmlkIGlzIG9mZlxuICAgIGlmICghZ2xvYmFsT3B0aW9ucy5zdGlja3kpICB7IGdsb2JhbE9wdGlvbnMuc2V0KCdjb29raWVzJywgbnVsbCk7IH1cblxuICAgIC8vIHR1cm4gZ2xvYmFsIGxvZ2dpbmcgb258b2ZmIChvZmYgYnkgZGVmYXVsdClcbiAgICBMb2dnZXIuc2V0TGV2ZWwoZ2xvYmFsT3B0aW9ucy5sb2dnaW5nID8gTG9nZ2VyLkRFQlVHIDogTG9nZ2VyLk9GRik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IElPIHJlcXVlc3RzIHRvIGBEZXBsb3lSYC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgICAgXG4gICAqICAgIGRlcGxveXIuaW8oJy9yL3VzZXIvYWJvdXQnKS5lbmQoY2FsbGJhY2spO1xuICAgKiBgYGBcbiAgICpcbiAgICogQG1ldGhvZCBpb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpIE9uZSBvZiB0aGUgc3VwcG9ydGVkIERlcGxveVIgQVBJcy5cbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBUaGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBEZXBsb3lSIHNlcnZlci5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGlvOiBmdW5jdGlvbihhcGkpIHsgIFxuICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBzaWduIHRoZSB1c2VyIGluIGJ5IGF1dGhlbnRpY2F0aW5nIHRoZSBjcmVkZW50aWFscyBcbiAgICogd2l0aCB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqXG4gICAqIEBtZXRob2QgYXV0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlcm5hbWUgU3BlY2lmaWVzIHRoZSB1c2VybmFtZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhc3N3b3JkIFNwZWNpZmllcyB0aGUgcGFzc3dvcmQuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgIFxuICBhdXRoOiBmdW5jdGlvbih1biwgcHcpIHtcbiAgICB2YXIgZGF0YSA9IHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfTtcbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3VzZXIvbG9naW4nKS5kYXRhKGRhdGEpLmVuZCgpOyAgICBcbiAgfSxcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gc2lnbiB0aGUgdXNlciBpbiBieSBhdXRoZW50aWNhdGluZyB0aGUgY3JlZGVudGlhbHMgXG4gICAqIHdpdGggdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJy90ZXN0dXNlci9yb290L3JlZHVjZS5SJylcbiAgICogICAgZGVwbG95ci5zY3JpcHQoeyBmaWxlbmFtZTogJ3JlZHVjZS5SJywgYXV0aG9yOiAndGVzdHVzZXInLFxuICAgKiAgICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogJ3Jvb3QnfSlcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJ3JlZHVjZS5SJywgJ3Rlc3R1c2VyJywgJ3Jvb3QnKVxuICAgKiAgICBkZXBsb3lyLnNjcmlwdCgnL3Rlc3R1c2VyL3Jvb3QvcmVkdWNlLlInLCBwcm9qZWN0KSAgICAgXG4gICAqIGBgYCAgIFxuICAgKlxuICAgKiBAbWV0aG9kIHNjcmlwdFxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gYXJndW1lbnRzIEFyZ3VtZW50cyB0byBkZWZpbmUgdGhlIGZ1bGx5IHF1YWxpZmllZCBzY3JpcHQgXG4gICAqIGZvciBleGVjdXRpb24uXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgICAgXG4gIHNjcmlwdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSB1dGlscy5zaWduYXR1cmUoYXJndW1lbnRzKSxcbiAgICAgICAgb3B0cyA9IGFyZ3Mub3B0cyxcbiAgICAgICAgYXBpICA9IGFyZ3MuYXBpOyAgXG5cbiAgICAvLyBjb252ZW5pZW5jZSAtIGlmIHRoZSBwcm9qZWN0IGlzIGEgYm9vbGVuIGB0cnVlYCByYXRoZXIgdGhhbiBhIHBpZCwgZmlyc3RcbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgdGhlbiBwcmVwYXJlIHRoZSBwcm9qZWN0IGFwaSBjYWxsIHRvIGV4ZWN1dGVcbiAgICBpZiAoYXJncy5jcmVhdGUpIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jcmVhdGUnKVxuICAgICAgICAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2plY3Q6IHJlcy5nZXQoJ3Byb2plY3QnKS5wcm9qZWN0IH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5pbyhhcGkpXG4gICAgICAgICAgICAgICAuZGF0YShvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSkuZGF0YShvcHRzKTtcbiAgICB9XG4gIH0sICBcblxuICAvKipcbiAgICogUnVuIGFuIHNlcmllcyBvZiBjaGFpbmVkIERlcGxveVIgcmVxdWVzdHMgaW4gc2VxdWVuY2UgYW5kIHdpdGhvdXQgb3ZlcmxhcC4gICAgICAgXG4gICAqXG4gICAqIEBtZXRob2QgcGlwbGluZVxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrcyBTcGVjaWZpZXMgdGhlIGxpc3Qgb2YgYEZ1bmN0aW9uYCB0YXNrcy5cbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2Ugd3JhcHBpbmcgdGhlIHJlc29sdXRpb24gb2YgZWl0aGVyIFwicmVzb2x2ZVwiIG9yXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBwaXBlbGluZTogZnVuY3Rpb24oY2hhaW5zKSB7ICAgICAgXG4gICAgdmFyIGRlcGxveXIgID0gdGhpcyxcbiAgICAgICAgZGVmZXJyZWQgPSBEKCksXG4gICAgICAgIHEgICAgICAgID0gbmV3IFF1ZXVlKCksXG4gICAgICAgIHJlc3VsdHMgID0gW10sXG4gICAgICAgIGVycm9ycyAgID0gW10sXG4gICAgICAgIE5PT1AgICAgID0gbnVsbCwgLy8gTk9PUCBlcnJvcnN8cmVzdWx0cyBmb3IgW2FdIGJhdGNoIHJlcXVlc3QgY2hhaW5cbiAgICAgICAgb3JpZyAgICAgPSB7XG4gICAgICAgICAgc3RpY2t5OiBnbG9iYWxPcHRpb25zLnN0aWNreSxcbiAgICAgICAgICBjb29raWVzOiBnbG9iYWxPcHRpb25zLmNvb2tpZXNcbiAgICAgICAgfTtcblxuICAgIC8vIG1ha2UgYSBjb3B5XG4gICAgY2hhaW5zID0gY2hhaW5zLnNsaWNlKDApO1xuXG4gICAgLy8gdHVybiBzdGlja3kgc2Vzc2lvbiBmb3IgdGhlc2UgcmVxdWVzdCAoaGFja3kpXG4gICAgZGVwbG95ci5jb25maWd1cmUoIHsgc3RpY2t5OiB0cnVlIH0pO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgcS5hZGQoZnVuY3Rpb24oKSB7IFxuICAgICAgICBjaGFpbnMuc2hpZnQoKS5kcmFpbigpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGNoYWluKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGNoYWluKTsgIFxuICAgICAgICAgIGVycm9ycy5wdXNoKE5PT1ApOyAgICAgICAgICAgXG4gICAgICAgICAgaWYgKHEuaXNFbXB0eSgpKSB7IFxuICAgICAgICAgICAgZGVwbG95ci5jb25maWd1cmUob3JpZyk7IC8vIHJlc2V0XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHsgcmVzdWx0czogcmVzdWx0cywgZXJyb3JzOiBlcnJvcnMgfSk7IFxuICAgICAgICAgIH0gIFxuXG4gICAgICAgICAgcS50YWtlKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycikgeyAgICAgICAgICBcbiAgICAgICAgICByZXN1bHRzLnB1c2goTk9PUCk7IFxuICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgLy8gcmVqZWN0aW9ucyBhcmUgb25seSBtZXQgd2hlbiB0aGV5IFthbGxdIGZhaWxcbiAgICAgICAgICBpZiAocS5pc0VtcHR5KCkgJiYgcmVzdWx0cy5sZW5ndGggPT09IDApIHsgXG4gICAgICAgICAgICBkZXBsb3lyLmNvbmZpZ3VyZShvcmlnKTsgLy8gcmVzZXRcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcnMpOyBcbiAgICAgICAgICB9ICBcbiAgICAgICAgICBxLnRha2UoKTtcbiAgICAgICAgfSk7ICAgICAgIFxuICAgICAgfSwgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gY29udmVydCB0byBhIHNlcSBxdWV1ZSBmb3IgYmV0dGVyIGhhbmRsaW5nXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNoYWlucy5sZW5ndGg7IGkrKykgeyBhZGQoKTsgfVxuXG4gICAgLy8gc3RhcnQ6IGRlcXVldWUgZmlyc3QgaXRlbSBhbmQgcnVuIGl0XG4gICAgcS50YWtlKCk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGV2ZW50IHN0cmVhbSBBUEkgaXMgdW5pcXVlIHdpdGhpbiB0aGUgRGVwbG95UiBBUEkgYXMgaXQgc3VwcG9ydHMgcHVzaCBcbiAgICogbm90aWZpY2F0aW9ucyBmcm9tIHRoZSBEZXBsb3lSIHNlcnZlciB0byBjbGllbnQgYXBwbGljYXRpb25zLiBOb3RpZmljYXRpb25zIFxuICAgKiBjb3JyZXNwb25kIHRvIGRpc2NyZXRlIGV2ZW50cyB0aGF0IG9jY3VyIHdpdGhpbiB0aGUgRGVwbG95UiBzZXJ2ZXIuIFRoZXJlIFxuICAgKiBhcmUgZm91ciBkaXN0aW5jdCBldmVudCBjYXRlZ29yaWVzOlxuICAgKiBcbiAgICogLSBTdHJlYW0gTGlmZWN5Y2xlIGV2ZW50c1xuICAgKiAtIEV4ZWN1dGlvbiBldmVudHNcbiAgICogLSBKb2IgTGlmZWN5Y2xlIGV2ZW50c1xuICAgKiAtIE1hbmFnZW1lbnQgZXZlbnRzXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiBkZXBsb3lyLmVzKHsgdXNlcm5hbWU6ICd0ZXN0dXNlcicsIHBhc3N3b3JkOiAnc2VjcmV0JyB9KVxuICAgKiAgICAvLyAtLSBjb25uZWN0aW9uIGNob2ljZXMgZm9yIGV2ZW50IHR5cGVzIC0tXG4gICAqICAgIC5tYW5hZ2VtZW50KCkgIC8vLnNlc3Npb24oKSB8IC5hbGwoKSB8IC5wcm9qZWN0KGlkKSB8IC5qb2IoaWQpXG4gICAqICAgIC5vbignZXM6Z3JpZEhlYXJ0YmVhdCcsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICogICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09Jyk7XG4gICAqICAgICAgICBjb25zb2xlLmxvZygnZXM6Z3JpZEhlYXJ0YmVhdCcpO1xuICAgKiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT0nKTsgICAgICAgICAgXG4gICAqICAgICB9KVxuICAgKiAgICAgLm9wZW4oKTtcbiAgICogYGBgXG4gICAqIFxuICAgKiBAbWV0aG9kIGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvYmplY3QgbGl0ZXJhbCBjb25maWd1cmF0aW9uIGhhc2guIFxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0V2ZW50U3RyZWFtfSBhIG5ldyBgRXZlbnRTdHJlYW1gIGZvciBiaW5kaW5nLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gIFxuICBlczogZnVuY3Rpb24oY3JlZGVudGlhbHMpIHtcbiAgICB2YXIgYXV0aCAgID0gKGNyZWRlbnRpYWxzICYmIGNyZWRlbnRpYWxzLnVzZXJuYW1lICYmIGNyZWRlbnRpYWxzLnBhc3N3b3JkKSxcbiAgICAgICAgc3RyZWFtID0gRXZlbnRTdHJlYW0ubmV3KGdsb2JhbE9wdGlvbnMuaG9zdCwgeyB5aWVsZDogYXV0aCB9KTtcblxuICAgIGlmIChhdXRoKSB7XG4gICAgICB2YXIgcnVzZXIgPSB0aGlzLmF1dGgoY3JlZGVudGlhbHMudXNlcm5hbWUsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTsgICAgICBcbiAgICAgIHJ1c2VyLmVuc3VyZShmdW5jdGlvbigpIHsgXG4gICAgICAgIHN0cmVhbS5zaGFyZShydXNlci5nZXRDb29raWVzKCkpO1xuICAgICAgICBzdHJlYW0uZmx1c2goKTsgXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyZWFtO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBmYWN0b3J5IGZvciBjcmVhdGluZyBhIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIG9iamVjdCB0byBiZSBcbiAgICogc2VudCBhcyBpbnB1dCBwYXJhbWV0ZXJzIHRvIGFuIFIgc2NyaXB0LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0LmxvZ2ljYWwoJ2xvZ2ljYWxfbmFtZScsIHRydWUpO1xuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQubnVtZXJpYygnbnVtZXJpY19uYW1lJywgMTAuNSk7XG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5pbnRlZ2VyKCdpbnRlZ2VyX25hbWUnLCA1KTtcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0LmNoYXJhY3RlcignY2hhcmFjdGVyX25hbWUnLCAnSGVsbG8nKTtcbiAgICogICAgLy8gZWN0Li4uXG4gICAqIGBgYFxuICAgKiBAcHJvcGVydHkgUklucHV0XG4gICAqIEBzdGF0aWNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIFJJbnB1dDoge1xuICAgIG51bWVyaWM6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWMoKTtcbiAgICB9LFxuXG4gICAgaW50ZWdlcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlcigpO1xuICAgIH0sXG5cbiAgICBsb2dpY2FsOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5sb2dpY2FsKCk7XG4gICAgfSxcblxuICAgIGNoYXJhY3RlcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyKCk7XG4gICAgfSxcblxuICAgIGRhdGU6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGUoKTtcbiAgICB9LFxuXG4gICAgcG9zaXhjdDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkucG9zaXhjdCgpO1xuICAgIH0sICBcblxuICAgIG51bWVyaWNWZWN0b3I6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubnVtZXJpY1ZlY3RvcigpO1xuICAgIH0sIFxuXG4gICAgaW50ZWdlclZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlclZlY3RvcigpO1xuICAgIH0sXG5cbiAgICBsb2dpY2FsVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbFZlY3RvcigpO1xuICAgIH0sXG5cbiAgICBjaGFyYWN0ZXJWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXJWZWN0b3IoKTtcbiAgICB9LCAgXG5cbiAgICBkYXRlVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuZGF0ZVZlY3RvcigpO1xuICAgIH0sICBcblxuICAgIHBvc2l4Y3RWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5wb3NpeGN0VmVjdG9yKCk7XG4gICAgfSxcblxuICAgIGxpc3Q6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxpc3QoKTsgXG4gICAgfSxcblxuICAgIGRhdGFmcmFtZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGFmcmFtZSgpO1xuICAgIH0sXG4gIFxuICAgIGZhY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBsZXZlbHMsIGxhYmVscykge1xuICAgICAgdmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdHMpLmZhY3RvcigpO1xuICAgIH0sXG5cbiAgICBvcmRlcmVkOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGxldmVscywgbGFiZWxzKSB7XG4gICAgICB2YXIgb3B0cyA9IHsgbGV2ZWxzOiBsZXZlbHMsIGxhYmVsczogbGFiZWxzIH07XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSwgb3B0cykub3JkZXJlZCgpO1xuICAgIH0sXG5cbiAgICBudW1lcmljTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubnVtZXJpY01hdHJpeCgpO1xuICAgIH0sXG5cbiAgICBpbnRlZ2VyTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlck1hdHJpeCgpO1xuICAgIH0sXG5cbiAgICBsb2dpY2FsTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbE1hdHJpeCgpO1xuICAgIH0sXG5cbiAgICBjaGFyYWN0ZXJNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3Rlck1hdHJpeCgpO1xuICAgIH1cbiAgfVxufTsiXX0=
},{"./apis.json":2,"./lib/emitter":3,"./lib/encoder":4,"./lib/es":5,"./lib/lang":6,"./lib/logger":7,"./lib/queue":9,"./lib/rinput":10,"./lib/rinputs":11,"./lib/selfish":13,"./lib/utils":14,"_process":16,"d.js":17,"fs":15,"superagent":18}],2:[function(require,module,exports){
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
 * Copyright (C) 2010-2016, Microsoft Corporation
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
},{"./selfish":13}],4:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var Lang    = require('./lang'),
    RTypes  = require('./rtypes'),
    R       = RTypes.r,
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
     * Flattens a given `RInput` type into a JSON string representing the     
     * expected DeployR input format.
     *
     * @method encode
     * @public
     * @param {Array} rdata An Array of `RInput` Objects to be flattened.
     * @return {String} The flattend `RInput` JSON string representing the 
     *                  DeployR input format.
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
},{"./lang":6,"./rtypes":12}],5:[function(require,module,exports){
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
},{"./emitter":3,"./optional":8,"./queue":9,"./selfish":13,"./utils":14}],6:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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
},{}],7:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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

},{}],8:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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
},{}],9:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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
},{}],10:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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
		// support `String` numbers (e.g. "1.2")
		this.value = parseFloat(this.value);

		return this.assert({
			type: this.deployr.RNUMERIC,
			name: this.name, 
			value: this.value,
			toString: this.toString
		});
	},	

	integer: function () {
		// support `String` integer (e.g. "15")
		this.value = parseInt(this.value, 10);

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
},{"./rtypes":12,"./selfish":13}],11:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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
},{"./lang":6,"./rinput":10,"./rtypes":12,"./selfish":13}],12:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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
			    case deployr.RINTEGER :
			    case deployr.RINTEGER_VECTOR :
			    fn = Lang.isNumber;
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
					'" is not a valid "' + rinput.type + '" type for input ' +
					'"' + rinput.name + '"');					
			}
		}

		return rinput;
	}
});
},{"./lang":6,"./selfish":13}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
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
},{"./lang":6}],15:[function(require,module,exports){

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9kLmpzL2xpYi9ELmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIGF0dGVtcHQgb2YgYSBzaW1wbGUgZGVmZXIvcHJvbWlzZSBsaWJyYXJ5IGZvciBtb2JpbGUgZGV2ZWxvcG1lbnRcbiogQGF1dGhvciBKb25hdGhhbiBHb3R0aSA8IGpnb3R0aSBhdCBqZ290dGkgZG90IG5ldD5cbiogQHNpbmNlIDIwMTItMTBcbiogQHZlcnNpb24gMC42LjBcbiogQGNoYW5nZWxvZ1xuKiAgICAgICAgICAgLSAyMDEzLTEyLTA3IC0gbGFzdCBwcm9taXNlIDEuMSBzcGVjcyB0ZXN0IHBhc3NpbmdzICh0aHggdG8gd2l6YXJkd2VyZG5hKVxuICogICAgICAgICAgICAgICAgICAgICAgIC0gcmVkdWNlIHByb21pc2VzIGZvb3RwcmludCBieSB1bnNjb3BpbmcgbWV0aG9kcyB0aGF0IGNvdWxkIGJlXG4qICAgICAgICAgICAtIDIwMTMtMTAtMjMgLSBtYWtlIGl0IHdvcmtpZyBhY3Jvc3Mgbm9kZS13ZWJraXQgY29udGV4dHNcbiogICAgICAgICAgIC0gMjAxMy0wNy0wMyAtIGJ1ZyBjb3JyZWN0aW9uIGluIHByb21peGlmeSBtZXRob2QgKHRoeCB0byBhZHJpZW4gZ2licmF0IClcbiogICAgICAgICAgIC0gMjAxMy0wNi0yMiAtIGJ1ZyBjb3JyZWN0aW9uIGluIG5vZGVDYXBzdWxlIG1ldGhvZFxuKiAgICAgICAgICAgLSAyMDEzLTA2LTE3IC0gcmVtb3ZlIHVubmVjZXNzYXJ5IEFycmF5LmluZGV4T2YgbWV0aG9kIGRlcGVuZGVuY3lcbiogICAgICAgICAgIC0gMjAxMy0wNC0xOCAtIGFkZCB0cnkvY2F0Y2ggYmxvY2sgYXJvdW5kIG5vZGVDYXBzdWxlZCBtZXRob2RzXG4qICAgICAgICAgICAtIDIwMTMtMDQtMTMgLSBjaGVjayBwcm9taXNlcy9BKyBjb25mb3JtaXR5XG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBtYWtlIHNvbWUgbWluaWNhdGlvbiBvcHRpbWlzYXRpb25zXG4qICAgICAgICAgICAtIDIwMTMtMDMtMjYgLSBhZGQgcmVzb2x2ZWQsIGZ1bGZpbGxlZCBhbmQgcmVqZWN0ZWQgbWV0aG9kc1xuKiAgICAgICAgICAgLSAyMDEzLTAzLTIxIC0gYnJvd3Nlci9ub2RlIGNvbXBhdGlibGVcbiogICAgICAgICAgICAgICAgICAgICAgICAtIG5ldyBtZXRob2Qgbm9kZUNhcHN1bGVcbiogICAgICAgICAgICAgICAgICAgICAgICAtIHNpbXBsZXIgcHJvbWl4aWZ5IHdpdGggZnVsbCBhcGkgc3VwcG9ydFxuKiAgICAgICAgICAgLSAyMDEzLTAxLTI1IC0gYWRkIHJldGhyb3cgbWV0aG9kXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBuZXh0VGljayBvcHRpbWlzYXRpb24gLT4gYWRkIHN1cHBvcnQgZm9yIHByb2Nlc3MubmV4dFRpY2sgKyBNZXNzYWdlQ2hhbm5lbCB3aGVyZSBhdmFpbGFibGVcbiogICAgICAgICAgIC0gMjAxMi0xMi0yOCAtIGFkZCBhcHBseSBtZXRob2QgdG8gcHJvbWlzZVxuKiAgICAgICAgICAgLSAyMDEyLTEyLTIwIC0gYWRkIGFsd2F5c0FzeW5jIHBhcmFtZXRlcnMgYW5kIHByb3BlcnR5IGZvciBkZWZhdWx0IHNldHRpbmdcbiovXG4oZnVuY3Rpb24odW5kZWYpe1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgbmV4dFRpY2tcblx0XHQsIGlzRnVuYyA9IGZ1bmN0aW9uKGYpeyByZXR1cm4gKCB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyApOyB9XG5cdFx0LCBpc0FycmF5ID0gZnVuY3Rpb24oYSl7IHJldHVybiBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheShhKSA6IChhIGluc3RhbmNlb2YgQXJyYXkpOyB9XG5cdFx0LCBpc09iak9yRnVuYyA9IGZ1bmN0aW9uKG8peyByZXR1cm4gISEobyAmJiAodHlwZW9mIG8pLm1hdGNoKC9mdW5jdGlvbnxvYmplY3QvKSk7IH1cblx0XHQsIGlzTm90VmFsID0gZnVuY3Rpb24odil7IHJldHVybiAodiA9PT0gZmFsc2UgfHwgdiA9PT0gdW5kZWYgfHwgdiA9PT0gbnVsbCk7IH1cblx0XHQsIHNsaWNlID0gZnVuY3Rpb24oYSwgb2Zmc2V0KXsgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYSwgb2Zmc2V0KTsgfVxuXHRcdCwgdW5kZWZTdHIgPSAndW5kZWZpbmVkJ1xuXHRcdCwgdEVyciA9IHR5cGVvZiBUeXBlRXJyb3IgPT09IHVuZGVmU3RyID8gRXJyb3IgOiBUeXBlRXJyb3Jcblx0O1xuXHRpZiAoICh0eXBlb2YgcHJvY2VzcyAhPT0gdW5kZWZTdHIpICYmIHByb2Nlc3MubmV4dFRpY2sgKSB7XG5cdFx0bmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IHVuZGVmU3RyICkge1xuXHRcdHZhciBudGlja0NoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKSwgcXVldWUgPSBbXTtcblx0XHRudGlja0NoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oKXsgcXVldWUubGVuZ3RoICYmIChxdWV1ZS5zaGlmdCgpKSgpOyB9O1xuXHRcdG5leHRUaWNrID0gZnVuY3Rpb24oY2Ipe1xuXHRcdFx0cXVldWUucHVzaChjYik7XG5cdFx0XHRudGlja0NoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRuZXh0VGljayA9IGZ1bmN0aW9uKGNiKXsgc2V0VGltZW91dChjYiwgMCk7IH07XG5cdH1cblx0ZnVuY3Rpb24gcmV0aHJvdyhlKXsgbmV4dFRpY2soZnVuY3Rpb24oKXsgdGhyb3cgZTt9KTsgfVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiBkZWZlcnJlZFxuXHQgKiBAcHJvcGVydHkge3Byb21pc2V9IHByb21pc2Vcblx0ICogQG1ldGhvZCByZXNvbHZlXG5cdCAqIEBtZXRob2QgZnVsZmlsbFxuXHQgKiBAbWV0aG9kIHJlamVjdFxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmdWxmaWxsZWRcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBwcm9taXNlIHJlc29sdmVkIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZVxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmYWlsZWRcblx0ICogQHBhcmFtIHsqfSByZWFzb24gcHJvbWlzZSByZWplY3Rpb24gcmVhc29uXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZSBvciByZXRocm93IHRoZSByZWFzb25cblx0ICovXG5cblx0Ly8tLSBkZWZpbmluZyB1bmVuY2xvc2VkIHByb21pc2UgbWV0aG9kcyAtLS8vXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gd2l0aG91dCBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9zdWNjZXNzKGZ1bGZpbGxlZCl7IHJldHVybiB0aGlzLnRoZW4oZnVsZmlsbGVkLCB1bmRlZik7IH1cblxuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIHdpdGggb25seSBhIGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2Vycm9yKGZhaWxlZCl7IHJldHVybiB0aGlzLnRoZW4odW5kZWYsIGZhaWxlZCk7IH1cblxuXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gYnV0IGZ1bGZpbGxlZCBjYWxsYmFjayB3aWxsIHJlY2VpdmUgbXVsdGlwbGUgcGFyYW1ldGVycyB3aGVuIHByb21pc2UgaXMgZnVsZmlsbGVkIHdpdGggYW4gQXJyYXlcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2FwcGx5KGZ1bGZpbGxlZCwgZmFpbGVkKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZC5hcHBseShudWxsLCBpc0FycmF5KGEpID8gYSA6IFthXSkgOiAoZGVmZXIub25seUZ1bmNzID8gYSA6IGZ1bGZpbGxlZCk7XG5cdFx0XHR9XG5cdFx0XHQsIGZhaWxlZCB8fCB1bmRlZlxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogY2xlYW51cCBtZXRob2Qgd2hpY2ggd2lsbCBiZSBhbHdheXMgZXhlY3V0ZWQgcmVnYXJkbGVzcyBmdWxmaWxsbWVudCBvciByZWplY3Rpb25cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgYSBjYWxsYmFjayBjYWxsZWQgcmVnYXJkbGVzcyBvZiB0aGUgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHByb21pc2UgaXMgbm90IHBlbmRpbmcgYW55bW9yZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gdGhlIHNhbWUgcHJvbWlzZSB1bnRvdWNoZWRcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfZW5zdXJlKGNiKXtcblx0XHRmdW5jdGlvbiBfY2IoKXsgY2IoKTsgfVxuXHRcdHRoaXMudGhlbihfY2IsIF9jYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogdGFrZSBhIHNpbmdsZSBjYWxsYmFjayB3aGljaCB3YWl0IGZvciBhbiBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIuIG90aGVyIHJlc29sdXRpb24gdmFsdWVzIGFyZSBwYXNzZWQgYXMgd2l0aCB0aGUgYXBwbHkvc3ByZWFkIG1ldGhvZFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBhIGNhbGxiYWNrIGNhbGxlZCByZWdhcmRsZXNzIG9mIHRoZSBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gb2YgdGhlIHByb21pc2Ugd2hpY2ggd2lsbCBiZSBjYWxsZWRcblx0ICogICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgcHJvbWlzZSBpcyBub3QgcGVuZGluZyBhbnltb3JlIHdpdGggZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyIGlmIGFueSBhcyBpbiBub2RlIHN0eWxlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLiBSZXN0IG9mIHBhcmFtZXRlcnMgd2lsbCBiZSBhcHBsaWVkIGFzIHdpdGggdGhlIGFwcGx5IG1ldGhvZC5cblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2Vfbm9kaWZ5KGNiKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoY2IpID8gY2IuYXBwbHkobnVsbCwgaXNBcnJheShhKSA/IGEuc3BsaWNlKDAsMCx1bmRlZmluZWQpICYmIGEgOiBbdW5kZWZpbmVkLGFdKSA6IChkZWZlci5vbmx5RnVuY3MgPyBhIDogY2IpO1xuXHRcdFx0fVxuXHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0cmV0dXJuIGNiKGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZhaWxlZF0gd2l0aG91dCBwYXJhbWV0ZXIgd2lsbCBvbmx5IHJldGhyb3cgcHJvbWlzZSByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgb2YgdGhlIHByb21pc2UgbGlicmFyeSBvbiBuZXh0IHRpY2tcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgcGFzc2VkIGEgZmFpbGVkIG1ldGhvZCB0aGVuIHdpbGwgY2FsbCBmYWlsZWQgb24gcmVqZWN0aW9uIGFuZCB0aHJvdyB0aGUgZXJyb3IgYWdhaW4gaWYgZmFpbGVkIGRpZG4ndFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9yZXRocm93KGZhaWxlZCl7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdHVuZGVmXG5cdFx0XHQsIGZhaWxlZCA/IGZ1bmN0aW9uKGUpeyBmYWlsZWQoZSk7IHRocm93IGU7IH0gOiByZXRocm93XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gW2Fsd2F5c0FzeW5jXSBpZiBzZXQgZm9yY2UgdGhlIGFzeW5jIHJlc29sdXRpb24gZm9yIHRoaXMgcHJvbWlzZSBpbmRlcGVuZGFudGx5IG9mIHRoZSBELmFsd2F5c0FzeW5jIG9wdGlvblxuXHQqIEByZXR1cm5zIHtkZWZlcnJlZH0gZGVmZXJlZCBvYmplY3Qgd2l0aCBwcm9wZXJ0eSAncHJvbWlzZScgYW5kIG1ldGhvZHMgcmVqZWN0LGZ1bGZpbGwscmVzb2x2ZSAoZnVsZmlsbCBiZWluZyBhbiBhbGlhcyBmb3IgcmVzb2x2ZSlcblx0Ki9cblx0dmFyIGRlZmVyID0gZnVuY3Rpb24gKGFsd2F5c0FzeW5jKXtcblx0XHR2YXIgYWx3YXlzQXN5bmNGbiA9ICh1bmRlZiAhPT0gYWx3YXlzQXN5bmMgPyBhbHdheXNBc3luYyA6IGRlZmVyLmFsd2F5c0FzeW5jKSA/IG5leHRUaWNrIDogZnVuY3Rpb24oZm4pe2ZuKCk7fVxuXHRcdFx0LCBzdGF0dXMgPSAwIC8vIC0xIGZhaWxlZCB8IDEgZnVsZmlsbGVkXG5cdFx0XHQsIHBlbmRpbmdzID0gW11cblx0XHRcdCwgdmFsdWVcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGVkZWYgcHJvbWlzZVxuXHRcdFx0ICovXG5cdFx0XHQsIF9wcm9taXNlICA9IHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfGZ1bmN0aW9ufSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0XHRcdFx0ICogQHBhcmFtIHtmYWlsZWR8ZnVuY3Rpb259IGZhaWxlZCBjYWxsYmFja1xuXHRcdFx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oZnVsZmlsbGVkLCBmYWlsZWQpe1xuXHRcdFx0XHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRcdFx0XHRwZW5kaW5ncy5wdXNoKFtcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGlmKCBpc05vdFZhbChmdWxmaWxsZWQpKXtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZShpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZCh2YWx1ZSkgOiAoZGVmZXIub25seUZ1bmNzID8gdmFsdWUgOiBmdWxmaWxsZWQpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzTm90VmFsKGZhaWxlZCkgfHwgKCghaXNGdW5jKGZhaWxlZCkpICYmIGRlZmVyLm9ubHlGdW5jcykgKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIGZhaWxlZCApIHtcblx0XHRcdFx0XHRcdFx0XHR0cnl7IGQucmVzb2x2ZShpc0Z1bmMoZmFpbGVkKSA/IGZhaWxlZChlcnIpIDogZmFpbGVkKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTt9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRzdGF0dXMgIT09IDAgJiYgYWx3YXlzQXN5bmNGbihleGVjQ2FsbGJhY2tzKTtcblx0XHRcdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LCBzdWNjZXNzOiBwcm9taXNlX3N1Y2Nlc3NcblxuXHRcdFx0XHQsIGVycm9yOiBwcm9taXNlX2Vycm9yXG5cdFx0XHRcdCwgb3RoZXJ3aXNlOiBwcm9taXNlX2Vycm9yXG5cblx0XHRcdFx0LCBhcHBseTogcHJvbWlzZV9hcHBseVxuXHRcdFx0XHQsIHNwcmVhZDogcHJvbWlzZV9hcHBseVxuXG5cdFx0XHRcdCwgZW5zdXJlOiBwcm9taXNlX2Vuc3VyZVxuXG5cdFx0XHRcdCwgbm9kaWZ5OiBwcm9taXNlX25vZGlmeVxuXG5cdFx0XHRcdCwgcmV0aHJvdzogcHJvbWlzZV9yZXRocm93XG5cblx0XHRcdFx0LCBpc1BlbmRpbmc6IGZ1bmN0aW9uKCl7IHJldHVybiAhIShzdGF0dXMgPT09IDApOyB9XG5cblx0XHRcdFx0LCBnZXRTdGF0dXM6IGZ1bmN0aW9uKCl7IHJldHVybiBzdGF0dXM7IH1cblx0XHRcdH1cblx0XHQ7XG5cdFx0X3Byb21pc2UudG9Tb3VyY2UgPSBfcHJvbWlzZS50b1N0cmluZyA9IF9wcm9taXNlLnZhbHVlT2YgPSBmdW5jdGlvbigpe3JldHVybiB2YWx1ZSA9PT0gdW5kZWYgPyB0aGlzIDogdmFsdWU7IH07XG5cblxuXHRcdGZ1bmN0aW9uIGV4ZWNDYWxsYmFja3MoKXtcblx0XHRcdGlmICggc3RhdHVzID09PSAwICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgY2JzID0gcGVuZGluZ3MsIGkgPSAwLCBsID0gY2JzLmxlbmd0aCwgY2JJbmRleCA9IH5zdGF0dXMgPyAwIDogMSwgY2I7XG5cdFx0XHRwZW5kaW5ncyA9IFtdO1xuXHRcdFx0Zm9yKCA7IGkgPCBsOyBpKysgKXtcblx0XHRcdFx0KGNiID0gY2JzW2ldW2NiSW5kZXhdKSAmJiBjYih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogZnVsZmlsbCBkZWZlcnJlZCB3aXRoIGdpdmVuIHZhbHVlXG5cdFx0ICogQHBhcmFtIHsqfSB2YWxcblx0XHQgKiBAcmV0dXJucyB7ZGVmZXJyZWR9IHRoaXMgZm9yIG1ldGhvZCBjaGFpbmluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIF9yZXNvbHZlKHZhbCl7XG5cdFx0XHR2YXIgZG9uZSA9IGZhbHNlO1xuXHRcdFx0ZnVuY3Rpb24gb25jZShmKXtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdGlmIChkb25lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHJldHVybiBmKHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICggc3RhdHVzICkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciB0aGVuID0gaXNPYmpPckZ1bmModmFsKSAmJiB2YWwudGhlbjtcblx0XHRcdFx0aWYgKCBpc0Z1bmModGhlbikgKSB7IC8vIG1hbmFnaW5nIGEgcHJvbWlzZVxuXHRcdFx0XHRcdGlmKCB2YWwgPT09IF9wcm9taXNlICl7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgdEVycihcIlByb21pc2UgY2FuJ3QgcmVzb2x2ZSBpdHNlbGZcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoZW4uY2FsbCh2YWwsIG9uY2UoX3Jlc29sdmUpLCBvbmNlKF9yZWplY3QpKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvbmNlKF9yZWplY3QpKGUpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGFsd2F5c0FzeW5jRm4oZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFsdWUgPSB2YWw7XG5cdFx0XHRcdHN0YXR1cyA9IDE7XG5cdFx0XHRcdGV4ZWNDYWxsYmFja3MoKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogcmVqZWN0IGRlZmVycmVkIHdpdGggZ2l2ZW4gcmVhc29uXG5cdFx0ICogQHBhcmFtIHsqfSBFcnJcblx0XHQgKiBAcmV0dXJucyB7ZGVmZXJyZWR9IHRoaXMgZm9yIG1ldGhvZCBjaGFpbmluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIF9yZWplY3QoRXJyKXtcblx0XHRcdHN0YXR1cyB8fCBhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRyeXsgdGhyb3coRXJyKTsgfWNhdGNoKGUpeyB2YWx1ZSA9IGU7IH1cblx0XHRcdFx0c3RhdHVzID0gLTE7XG5cdFx0XHRcdGV4ZWNDYWxsYmFja3MoKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiAvKipAdHlwZSBkZWZlcnJlZCAqLyB7XG5cdFx0XHRwcm9taXNlOl9wcm9taXNlXG5cdFx0XHQscmVzb2x2ZTpfcmVzb2x2ZVxuXHRcdFx0LGZ1bGZpbGw6X3Jlc29sdmUgLy8gYWxpYXNcblx0XHRcdCxyZWplY3Q6X3JlamVjdFxuXHRcdH07XG5cdH07XG5cblx0ZGVmZXIuZGVmZXJyZWQgPSBkZWZlci5kZWZlciA9IGRlZmVyO1xuXHRkZWZlci5uZXh0VGljayA9IG5leHRUaWNrO1xuXHRkZWZlci5hbHdheXNBc3luYyA9IHRydWU7IC8vIHNldHRpbmcgdGhpcyB3aWxsIGNoYW5nZSBkZWZhdWx0IGJlaGF2aW91ci4gdXNlIGl0IG9ubHkgaWYgbmVjZXNzYXJ5IGFzIGFzeW5jaHJvbmljaXR5IHdpbGwgZm9yY2Ugc29tZSBkZWxheSBiZXR3ZWVuIHlvdXIgcHJvbWlzZSByZXNvbHV0aW9ucyBhbmQgaXMgbm90IGFsd2F5cyB3aGF0IHlvdSB3YW50LlxuXHQvKipcblx0KiBzZXR0aW5nIG9ubHlGdW5jcyB0byBmYWxzZSB3aWxsIGJyZWFrIHByb21pc2VzL0ErIGNvbmZvcm1pdHkgYnkgYWxsb3dpbmcgeW91IHRvIHBhc3Mgbm9uIHVuZGVmaW5lZC9udWxsIHZhbHVlcyBpbnN0ZWFkIG9mIGNhbGxiYWNrc1xuXHQqIGluc3RlYWQgb2YganVzdCBpZ25vcmluZyBhbnkgbm9uIGZ1bmN0aW9uIHBhcmFtZXRlcnMgdG8gdGhlbixzdWNjZXNzLGVycm9yLi4uIGl0IHdpbGwgYWNjZXB0IG5vbiBudWxsfHVuZGVmaW5lZCB2YWx1ZXMuXG5cdCogdGhpcyB3aWxsIGFsbG93IHlvdSBzaG9ydGN1dHMgbGlrZSBwcm9taXNlLnRoZW4oJ3ZhbCcsJ2hhbmRsZWQgZXJyb3InJylcblx0KiB0byBiZSBlcXVpdmFsZW50IG9mIHByb21pc2UudGhlbihmdW5jdGlvbigpeyByZXR1cm4gJ3ZhbCc7fSxmdW5jdGlvbigpeyByZXR1cm4gJ2hhbmRsZWQgZXJyb3InfSlcblx0Ki9cblx0ZGVmZXIub25seUZ1bmNzID0gdHJ1ZTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgZnVsZmlsbGVkIHByb21pc2Ugb2YgZ2l2ZW4gdmFsdWUgKGFsd2F5cyBhc3luYyByZXNvbHV0aW9uKVxuXHQgKiBAcGFyYW0geyp9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVzb2x2ZWQgPSBkZWZlci5mdWxmaWxsZWQgPSBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiBkZWZlcih0cnVlKS5yZXNvbHZlKHZhbHVlKS5wcm9taXNlOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlIHdpdGggZ2l2ZW4gcmVhc29uIG9mIHJlamVjdGlvbiAoYWx3YXlzIGFzeW5jIHJlamVjdGlvbilcblx0ICogQHBhcmFtIHsqfSByZWFzb25cblx0ICogQHJldHVybnMge3Byb21pc2V9XG5cdCAqL1xuXHRkZWZlci5yZWplY3RlZCA9IGZ1bmN0aW9uKHJlYXNvbil7IHJldHVybiBkZWZlcih0cnVlKS5yZWplY3QocmVhc29uKS5wcm9taXNlOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIHdpdGggbm8gcmVzb2x1dGlvbiB2YWx1ZSB3aGljaCB3aWxsIGJlIHJlc29sdmVkIGluIHRpbWUgbXMgKHVzaW5nIHNldFRpbWVvdXQpXG5cdCAqIEBwYXJhbSB7aW50fSBbdGltZV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIud2FpdCA9IGZ1bmN0aW9uKHRpbWUpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGQucmVzb2x2ZSwgdGltZSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlIG9mIGZ1bmN0aW9uIGNhbGwgd2hpY2ggd2lsbCBiZSBmdWxmaWxsZWQgaW4gZGVsYXkgbXMgb3IgcmVqZWN0ZWQgaWYgZ2l2ZW4gZm4gdGhyb3cgYW4gZXJyb3Jcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cblx0ICogQHBhcmFtIHtpbnR9IFtkZWxheV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIuZGVsYXkgPSBmdW5jdGlvbihmbiwgZGVsYXkpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRyeXsgZC5yZXNvbHZlKGZuLmFwcGx5KG51bGwpKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTsgfSB9LCBkZWxheSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBpZiBnaXZlbiB2YWx1ZSBpcyBub3QgYSBwcm9taXNlIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIHJlc29sdmVkIHRvIGdpdmVuIHZhbHVlXG5cdCAqIEBwYXJhbSB7Kn0gcHJvbWlzZSBhIHZhbHVlIG9yIGEgcHJvbWlzZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnByb21pc2lmeSA9IGZ1bmN0aW9uKHByb21pc2Upe1xuXHRcdGlmICggcHJvbWlzZSAmJiBpc0Z1bmMocHJvbWlzZS50aGVuKSApIHsgcmV0dXJuIHByb21pc2U7fVxuXHRcdHJldHVybiBkZWZlci5yZXNvbHZlZChwcm9taXNlKTtcblx0fTtcblxuXHRmdW5jdGlvbiBtdWx0aVByb21pc2VSZXNvbHZlcihjYWxsZXJBcmd1bWVudHMsIHJldHVyblByb21pc2VzKXtcblx0XHR2YXIgcHJvbWlzZXMgPSBzbGljZShjYWxsZXJBcmd1bWVudHMpO1xuXHRcdGlmICggcHJvbWlzZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkocHJvbWlzZXNbMF0pICkge1xuXHRcdFx0aWYoISBwcm9taXNlc1swXS5sZW5ndGggKXtcblx0XHRcdFx0cmV0dXJuIGRlZmVyLmZ1bGZpbGxlZChbXSk7XG5cdFx0XHR9XG5cdFx0XHRwcm9taXNlcyA9IHByb21pc2VzWzBdO1xuXHRcdH1cblx0XHR2YXIgYXJncyA9IFtdXG5cdFx0XHQsIGQgPSBkZWZlcigpXG5cdFx0XHQsIGMgPSBwcm9taXNlcy5sZW5ndGhcblx0XHQ7XG5cdFx0aWYgKCAhYyApIHtcblx0XHRcdGQucmVzb2x2ZShhcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHJlc29sdmVyID0gZnVuY3Rpb24oaSl7XG5cdFx0XHRcdHByb21pc2VzW2ldID0gZGVmZXIucHJvbWlzaWZ5KHByb21pc2VzW2ldKTtcblx0XHRcdFx0cHJvbWlzZXNbaV0udGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbih2KXtcblx0XHRcdFx0XHRcdGlmICghIChpIGluIGFyZ3MpICkgeyAvL0B0b2RvIGNoZWNrIHRoaXMgaXMgc3RpbGwgcmVxdWlyZWQgYXMgcHJvbWlzZXMgY2FuJ3QgYmUgcmVzb2x2ZSBtb3JlIHRoYW4gb25jZVxuXHRcdFx0XHRcdFx0XHRhcmdzW2ldID0gcmV0dXJuUHJvbWlzZXMgPyBwcm9taXNlc1tpXSA6IHY7XG5cdFx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdGlmKCEgKGkgaW4gYXJncykgKXtcblx0XHRcdFx0XHRcdFx0aWYoICEgcmV0dXJuUHJvbWlzZXMgKXtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRhcmdzW2ldID0gcHJvbWlzZXNbaV07XG5cdFx0XHRcdFx0XHRcdFx0KC0tYykgfHwgZC5yZXNvbHZlKGFyZ3MpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblx0XHRcdGZvciggdmFyIGkgPSAwLCBsID0gYzsgaSA8IGw7IGkrKyApe1xuXHRcdFx0XHRyZXNvbHZlcihpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIGZvciBhbGwgZ2l2ZW4gcHJvbWlzZXMgLyB2YWx1ZXMuXG5cdCAqIHRoZSByZXR1cm5lZCBwcm9taXNlcyB3aWxsIGJlIGZ1bGZpbGxlZCB3aXRoIGEgbGlzdCBvZiByZXNvbHZlZCB2YWx1ZS5cblx0ICogaWYgYW55IGdpdmVuIHByb21pc2UgaXMgcmVqZWN0ZWQgdGhlbiBvbiB0aGUgZmlyc3QgcmVqZWN0aW9uIHRoZSByZXR1cm5lZCBwcm9taXNlZCB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWUgcmVhc29uXG5cdCAqIEBwYXJhbSB7YXJyYXl8Li4uKn0gW3Byb21pc2VdIGNhbiBiZSBhIHNpbmdsZSBhcnJheSBvZiBwcm9taXNlL3ZhbHVlcyBhcyBmaXJzdCBwYXJhbWV0ZXIgb3IgYSBsaXN0IG9mIGRpcmVjdCBwYXJhbWV0ZXJzIHByb21pc2UvdmFsdWVcblx0ICogQHJldHVybnMge3Byb21pc2V9IG9mIGEgbGlzdCBvZiBnaXZlbiBwcm9taXNlIHJlc29sdXRpb24gdmFsdWVcblx0ICovXG5cdGRlZmVyLmFsbCA9IGZ1bmN0aW9uKCl7IHJldHVybiBtdWx0aVByb21pc2VSZXNvbHZlcihhcmd1bWVudHMsZmFsc2UpOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYW4gYWx3YXlzIGZ1bGZpbGxlZCBwcm9taXNlIG9mIGFycmF5PHByb21pc2U+IGxpc3Qgb2YgcHJvbWlzZXMvdmFsdWVzIHJlZ2FyZGxlc3MgdGhleSByZXNvbHZlIGZ1bGZpbGxlZCBvciByZWplY3RlZFxuXHQgKiBAcGFyYW0ge2FycmF5fC4uLip9IFtwcm9taXNlXSBjYW4gYmUgYSBzaW5nbGUgYXJyYXkgb2YgcHJvbWlzZS92YWx1ZXMgYXMgZmlyc3QgcGFyYW1ldGVyIG9yIGEgbGlzdCBvZiBkaXJlY3QgcGFyYW1ldGVycyBwcm9taXNlL3ZhbHVlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgKG5vbiBwcm9taXNlIHZhbHVlcyB3aWxsIGJlIHByb21pc2lmaWVkKVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gb2YgdGhlIGxpc3Qgb2YgZ2l2ZW4gcHJvbWlzZXNcblx0ICovXG5cdGRlZmVyLnJlc29sdmVBbGwgPSBmdW5jdGlvbigpeyByZXR1cm4gbXVsdGlQcm9taXNlUmVzb2x2ZXIoYXJndW1lbnRzLHRydWUpOyB9O1xuXG5cdC8qKlxuXHQgKiB0cmFuc2Zvcm0gYSB0eXBpY2FsIG5vZGVqcyBhc3luYyBtZXRob2QgYXdhaXRpbmcgYSBjYWxsYmFjayBhcyBsYXN0IHBhcmFtZXRlciwgcmVjZWl2aW5nIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlciB0byBhIGZ1bmN0aW9uIHRoYXRcblx0ICogd2lsbCByZXR1cm4gYSBwcm9taXNlIGluc3RlYWQuIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIG5vcm1hbCBjYWxsYmFjayB2YWx1ZSBtaW51cyB0aGUgZmlyc3QgZXJyb3IgcGFyYW1ldGVyIG9uXG5cdCAqIGZ1bGZpbGwgYW5kIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGF0IGVycm9yIGFzIHJlYXNvbiBpbiBjYXNlIG9mIGVycm9yLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW3N1YmplY3RdIG9wdGlvbmFsIHN1YmplY3Qgb2YgdGhlIG1ldGhvZCB0byBlbmNhcHN1bGF0ZVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiB0aGUgZnVuY3Rpb24gdG8gZW5jYXBzdWxhdGUgaWYgdGhlIG5vcm1hbCBjYWxsYmFjayBzaG91bGQgcmVjZWl2ZSBtb3JlIHRoYW4gYSBzaW5nbGUgcGFyYW1ldGVyIChtaW51cyB0aGUgZXJyb3IpXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBsaXN0IG9yIHBhcmFtZXRlcnMgYXMgZnVsZmlsbG1lbnQgdmFsdWUuIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBzZW50IHRvIHRoZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayB0aGVuIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcmVzb2x1dGlvbiB2YWx1ZS5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufVxuXHQgKi9cblx0ZGVmZXIubm9kZUNhcHN1bGUgPSBmdW5jdGlvbihzdWJqZWN0LCBmbil7XG5cdFx0aWYgKCAhZm4gKSB7XG5cdFx0XHRmbiA9IHN1YmplY3Q7XG5cdFx0XHRzdWJqZWN0ID0gdm9pZCgwKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZCA9IGRlZmVyKCksIGFyZ3MgPSBzbGljZShhcmd1bWVudHMpO1xuXHRcdFx0YXJncy5wdXNoKGZ1bmN0aW9uKGVyciwgcmVzKXtcblx0XHRcdFx0ZXJyID8gZC5yZWplY3QoZXJyKSA6IGQucmVzb2x2ZShhcmd1bWVudHMubGVuZ3RoID4gMiA/IHNsaWNlKGFyZ3VtZW50cywgMSkgOiByZXMpO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGZuLmFwcGx5KHN1YmplY3QsIGFyZ3MpO1xuXHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkLnByb21pc2U7XG5cdFx0fTtcblx0fTtcblxuXHR0eXBlb2Ygd2luZG93ICE9PSB1bmRlZlN0ciAmJiAod2luZG93LkQgPSBkZWZlcik7XG5cdHR5cGVvZiBtb2R1bGUgIT09IHVuZGVmU3RyICYmIG1vZHVsZS5leHBvcnRzICYmIChtb2R1bGUuZXhwb3J0cyA9IGRlZmVyKTtcblxufSkoKTtcbiJdfQ==
},{"_process":16}],18:[function(require,module,exports){
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

},{"emitter":19,"reduce":20}],19:[function(require,module,exports){

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

},{}],20:[function(require,module,exports){

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
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXBsb3lyLmpzIiwiYXBpcy5qc29uIiwibGliL2VtaXR0ZXIuanMiLCJsaWIvZW5jb2Rlci5qcyIsImxpYi9lcy5qcyIsImxpYi9sYW5nLmpzIiwibGliL2xvZ2dlci5qcyIsImxpYi9vcHRpb25hbC5qcyIsImxpYi9xdWV1ZS5qcyIsImxpYi9yaW5wdXQuanMiLCJsaWIvcmlucHV0cy5qcyIsImxpYi9ydHlwZXMuanMiLCJsaWIvc2VsZmlzaC5qcyIsImxpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2QuanMvbGliL0QuanMiLCJub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzIiwibm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL3JlZHVjZS1jb21wb25lbnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdDJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL2FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6akNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIHdpbiAgICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSwgICBcbiAgICByZXF1ZXN0ICAgICA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKSxcbiAgICBEICAgICAgICAgICA9IHJlcXVpcmUoJ2QuanMnKSxcbiAgICBmcyAgICAgICAgICA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgYXBpcyAgICAgICAgPSByZXF1aXJlKCcuL2FwaXMuanNvbicpLCBcbiAgICBFdmVudFN0cmVhbSA9IHJlcXVpcmUoJy4vbGliL2VzJyksXG4gICAgdXRpbHMgICAgICAgPSByZXF1aXJlKCcuL2xpYi91dGlscycpLFxuICAgIExhbmcgICAgICAgID0gcmVxdWlyZSgnLi9saWIvbGFuZycpLCAgIFxuICAgIExvZ2dlciAgICAgID0gcmVxdWlyZSgnLi9saWIvbG9nZ2VyJyksICAgXG4gICAgUXVldWUgICAgICAgPSByZXF1aXJlKCcuL2xpYi9xdWV1ZScpLFxuICAgIEVtaXR0ZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW1pdHRlcicpLFxuICAgIGVuY29kZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW5jb2RlcicpLFxuICAgIEJhc2UgICAgICAgID0gcmVxdWlyZSgnLi9saWIvc2VsZmlzaCcpLkJhc2UsXG4gICAgUklucHV0ICAgICAgPSByZXF1aXJlKCcuL2xpYi9yaW5wdXQnKSwgICAgXG4gICAgUklucHV0cyAgICAgPSByZXF1aXJlKCcuL2xpYi9yaW5wdXRzJyksXG4gICAgbWVyZ2UgICAgICAgPSB1dGlscy5tZXJnZTtcblxuLypcbiAqIFR1cm4gZ2xvYmFsIGxvZ2dpbmcgb2ZmIGJ5IGRlZmF1bHRcbiAqL1xuTG9nZ2VyLnNldExldmVsKExvZ2dlci5PRkYpO1xuXG4vKlxuICogR2xvYmFsIG9wdGlvbnMgdGhhdCBwZXJzaXN0IHRocm91Z2ggYWxsIERlcGxveVIgcmVxdWVzdHMuXG4gKi9cbnZhciBnbG9iYWxPcHRpb25zID0geyBcbiAgY29yczogZmFsc2UsXG4gIGxvZ2dpbmc6IGZhbHNlLFxuICBzdGlja3k6IGZhbHNlLFxuICBjb29raWVzOiBudWxsLFxuICBob3N0OiAnJyxcbiAgYWxsb3dTZWxmU2lnbmVkU1NMQ2VydDogZmFsc2UsXG4gIG1heFJlcXVlc3RzOiBudWxsLCAvLyBubyBzb2NrZXQgcG9vbGluZyBpbiBodHRwLkFnZW50XG4gIGV2ZW50czp7fSxcbiAgc2V0OiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkgeyBcbiAgICBpZiAocHJvcCAhPT0gJ3NldCcpIHsgXG4gICAgICBpZiAocHJvcCA9PT0gJ2hvc3QnICYmIHZhbHVlKSB7ICAgICAgICAgXG4gICAgICAgICAvLyBCZSBtb3JlIGZvcmdpdmluZyBvbiB0aGUgZW50ZXJlZCBEZXBsb3lSICdlbmRwb2ludCc6XG4gICAgICAgICAvLyAgIC0gaHR0cChzKTovL2Rob3N0OnBvcnRcbiAgICAgICAgIC8vICAgLSBodHRwKHMpOi8vZGhvc3Q6cG9ydC9kZXBsb3lyXG4gICAgICAgICAvLyAgIC0gZGhvc3Q6cG9ydFxuICAgICAgICAgLy8gICAtIGRob3N0OnBvcnQvZGVwbG95ciAgICAgICAgIFxuICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8qJHxcXC8qZGVwbG95clxcLyokLywgJycpO1xuICAgICAgICAgdmFsdWUgPSAobmV3IFJlZ0V4cCgnXihodHRwfGh0dHBzKTovLycsICdpJykpLnRlc3QodmFsdWUpID8gdmFsdWUgOiBcbiAgICAgICAgICAgICdodHRwOi8vJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzW3Byb3BdID0gdmFsdWU7IFxuICAgIH0gXG4gIH1cbn07XG5cbi8qXG4gKiBUaGUgdG9wLWxldmVsIERlcGxveVIgQVBJIHJlc3BvbnNlIGVudGl0aWVzLlxuICovXG52YXIgVE9QTEVWRUxfRU5USVRJRVMgPSBbXG4gICd1c2VyJywgXG4gICdwcm9qZWN0JywgXG4gICd3b3Jrc3BhY2UnLCBcbiAgJ2V4ZWN1dGlvbicsIFxuICAnZGlyZWN0b3J5JywgXG4gICdyZXBvc2l0b3J5JywgXG4gICdwYWNrYWdlcycgXG5dO1xuXG4vKlxuICogTm90aWZ5IGdsb2JhbCBJTyBlcnJvciBldmVudHMgYWNjZXNzaWJsZSBieSBhbGwgc3Vic2NyaWJlcnMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5mdW5jdGlvbiByYWlzZUdsb2JhbEVycm9ycyhhcGksIHJlcykge1xuICB2YXIgY29kZSAgICA9IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlIDogcmVzLnN0YXR1cyxcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuXG4gIC8vIC0tIGdsb2JhbCBldmVudHMgaWYgcHJvdmlkZWQgLS1cbiAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzKSB7XG4gICAgaWYgKCFyZXMuZGVwbG95cikge1xuICAgICAgcmVzID0gcmVzLnRleHQ7XG4gICAgfVxuXG4gICAgY29udGV4dCA9IGdsb2JhbE9wdGlvbnMuZXZlbnRzLmN0eCB8fCBjb250ZXh0O1xuXG4gICAgLy8gLS0gZ2VuZXJhbCBnbG9iYWwgZmFpbHVyZSAtLVxuICAgIGlmIChnbG9iYWxPcHRpb25zLmV2ZW50cy5lcnJvcikge1xuICAgICAgZ2xvYmFsT3B0aW9ucy5ldmVudHMuZXJyb3IuYXBwbHkoY29udGV4dCwgW2FwaSwgcmVzXSk7XG4gICAgfVxuXG4gICAgLy8gLS0gSFRUUCBvciBEZXBsb3lSIGdsb2JhbCBlcnJvcnMgLS0gICAgXG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzW2NvZGVdKSB7XG4gICAgICBnbG9iYWxPcHRpb25zLmV2ZW50c1tjb2RlXS5hcHBseShjb250ZXh0LCBbYXBpLCByZXNdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYERlcGxveVJgIHJlcXVlc3QgY2xhc3MgaXMgYSB1dGlsaXR5IHRoYXQgYnJva2VycyBIVFRQIHJlcXVlc3RzIHRocm91Z2ggYSBcbiAqIHNpbXBsaWZpZWQgZmx1aWQgaW50ZXJmYWNlIHRvIERlcGxveVIuXG4gKlxuICogQG1vZHVsZSBkZXBsb3lyXG4gKiBAZm9yIGRlcGxveXJcbiAqL1xudmFyIERlcGxveVIgPSBCYXNlLmV4dGVuZChFbWl0dGVyLCBSSW5wdXRzLCB7XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVwbG95UmAgUmVxdWVzdCBjbGFzcyBpcyBhIHV0aWxpdHkgdGhhdCBicm9rZXJzIEhUVFAgcmVxdWVzdHMgdGhyb3VnaCBcbiAgICogYSBzaW1wbGlmaWVkIGZsdWlkIGludGVyZmFjZSB0byBEZXBsb3lSLlxuICAgKiBcbiAgICogQGNsYXNzIFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgRGVwbG95UiBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpbmsgVGhlIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgdGhlIHByZXZpb3VzIHJlcXVlc3QuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShhcGksIGxpbmspIHtcbiAgICAgRW1pdHRlci5pbml0aWFsaXplLmNhbGwodGhpcywge30pO1xuICBcbiAgICAgdmFyIG9wdHMgPSBnbG9iYWxPcHRpb25zO1xuXG4gICAgIGlmICghYXBpc1thcGldKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBUEkgXCInICsgYXBpICsgJ1wiJyk7IH1cbiAgICBcbiAgICAgdGhpcy5hcGkgICAgICAgID0gbWVyZ2UoeyAnY2FsbCc6IGFwaSB9LCBhcGlzW2FwaV0pOyAgICBcbiAgICAgdGhpcy5saW5rICAgICAgID0gbGluayB8fCB7fTtcbiAgICAgdGhpcy5xICAgICAgICAgID0gdGhpcy5saW5rLnF1ZXVlIHx8IG5ldyBRdWV1ZSgpO1xuICAgICB0aGlzLmRlZmVycmVkICAgPSB0aGlzLmxpbmsuZGVmZXJyZWQgfHwgRCgpO1xuICAgICB0aGlzLmNvb2tpZXMgICAgPSB0aGlzLmxpbmsuY29va2llcztcbiAgICAgdGhpcy5sb2dnZXIgICAgID0gTG9nZ2VyLmdldChhcGksIExvZ2dlci5PRkYpOyAvLyB0cmFuc2FjdGlvbi1sZXZlbCBsb2dnaW5nXG4gICAgIHRoaXMucGFyYW1zICAgICA9IHt9O1xuICAgICB0aGlzLmlucHV0cyAgICAgPSBbXTsgLy8gcmlucHV0cyBsaXN0IFxuICAgICB0aGlzLm91dHB1dHMgICAgPSBbXTsgLy8gcm91dHB1dCBvYmplY3QgbGlzdFxuICAgICB0aGlzLnJzdHJlYW0gICAgPSBmYWxzZTtcbiAgICAgdGhpcy5kZWxheWVkICAgID0gZmFsc2U7XG4gICAgIHRoaXMuZ2xvYmFsRXZ0cyA9IHRydWU7IC8vIHN1cHByZXNzfHJhaXNlIGdsb2JhbCBldmVudHMgZm90IHRoaXMgYGlvYCAgICAgXG4gICAgIHRoaXMuZmlsZSAgICAgICA9IG51bGw7IFxuICAgICB0aGlzLmVudGl0aWVzICAgPSBudWxsOyBcbiAgICAgdGhpcy5pb0ZpbHRlciAgID0gZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9O1xuXG4gICAgIC8vIHByZXNldCBkZXBsb3lyJ3MgYXNzaWduZWQgcmVzcG9uc2UgZm9ybWF0IGZvciBgdGhpc2AgYXBpXG4gICAgIHRoaXMuZGF0YSh7IGZvcm1hdDogdGhpcy5hcGkuZm9ybWF0IH0pO1xuXG4gICAgIC8vIHdyYXAgc3VwZXJhZ2VudCBmb3IgdGhlIGhlYXZ5IGxpZnRpbmcgICAgIFxuICAgICB0aGlzLnJlcSA9IFxuICAgICAgICByZXF1ZXN0W3RoaXMuYXBpLm1ldGhvZC50b0xvd2VyQ2FzZSgpXShvcHRzLmhvc3QgKyAnL2RlcGxveXInICsgYXBpKTtcbiAgICAgdGhpcy5yZXEudGltZW91dCgyMCAqIDYwICogMTAwMCk7IC8vIGRlZmF1bHQgdGltZW91dCAtLT4gMjAgbWludXRlc1xuXG4gICAgIC8vIEFsbCBDT1JTIGRlcGxveXIgY2FsbHMgcmVxdWlyZSBzdGlja3kgc2Vzc2lvbnNcbiAgICAgaWYgKHdpbiAmJiBnbG9iYWxPcHRpb25zLmNvcnMpIHsgdGhpcy5yZXEud2l0aENyZWRlbnRpYWxzKCk7IH1cblxuICAgICAvLyBOb2RlLmpzIC0gYWNjZXNzIGFuIFNTTCBlbmRwb2ludCB3aXRoIHNlbGYgc2lnbmVkIGNlcnRzIGZvciB0ZXN0aW5nfGRldlxuICAgICBpZiAoIXdpbiAmJiBnbG9iYWxPcHRpb25zLmFsbG93U2VsZlNpZ25lZFNTTENlcnQpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJzsgICAgICAgIFxuICAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBzY29wZSBjb250ZXh0IGZvciB0aGUgY29uZmlndXJlZCBgLmVuZCgpYCBhbmQgYC5lcnJvcigpYCBldmVudCAgICBcbiAgICogaGFuZGxlciBjYWxsYmFja3Mgb24gdGhpcyByZXF1ZXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGN0eFxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCBUaGUgYHRoaXNgIG9iamVjdCBmb3IgdGhlIGNvbmZpZ3VyZWQgYC5lbmQoKWAgYW5kXG4gICAqIGAuZXJyb3IoKWAgZXZlbnQgaGFuZGxlcnMgb24gdGhpcyByZXF1ZXN0LlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gXG4gIGN0eDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICB0aGlzLnNjb3BlID0gY29udGV4dCB8fCB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN1cHByZXNzIG9yIHJhaXNlIGdsb2JhbCBldmVudHMgZm9yIHRoaXMgYGlvYCByZXF1ZXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGdsb2JhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJhaXNlIGB0cnVlYCB0byByYWlzZSBnbG9iYWwgZXZlbnRzLCBgZmFsc2VgIHRvIHN1cHJlc3MgXG4gICAqIGV2ZW50IGZpcmluZyBnbG9iYWxseS5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gIFxuICBnbG9iYWw6IGZ1bmN0aW9uKHJhaXNlKSB7XG4gICAgdGhpcy5nbG9iYWxFdnRzID0gTGFuZy5pc0Jvb2xlYW4ocmFpc2UpID8gcmFpc2UgOiB0aGlzLmdsb2JhbEV2dHM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgIFxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBkZXRhaWxzIGFib3V0IHVzZXIuXG4gICAqICAgXG4gICAqIEBtZXRob2QgYWJvdXRcbiAgICogQHJldHVybiB7T2JqZWN0fSBkZXRhaWxzIGFib3V0IHVzZXIgb3RoZXJ3aWVzIGBudWxsYC5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGFib3V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSB0aGlzLnJlcS5yZXM7XG5cbiAgICByZXR1cm4gdGhpcy5hcGlbJ2NhbGwnXSA9PT0gJy9yL3VzZXIvbG9naW4nICYmIHJlc3BvbnNlID8gXG4gICAgICAgICAgIHJlc3BvbnNlLmJvZHkuZ2V0KCd1c2VyJykgOiBudWxsO1xuICB9LCAgXG5cbiAgLyoqXG4gICAqIFNoYXJlcyB0aGUgY29va2llcyBmcm9tIGEgZGlmZmVyZW4gYC5pbygpYCBhZ2VudCB0byBwcmVzZXJ2ZSBzZXNzaW9uIHN0YXRlXG4gICAqIGFjcm9zcyBgdGhpc2AgcmVxdWVzdCBhbmQgYWxsIHJlcXVlc3RzIGNoYWluZWQgdG8gaXQuXG4gICAqXG4gICAqIEBtZXRob2Qgc2hhcmVcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gIFxuICBzaGFyZTogZnVuY3Rpb24gKGNvb2tpZXMpIHtcbiAgICBpZiAoZ2xvYmFsT3B0aW9ucy5zdGlja3kpIHtcbiAgICAgIGlmIChnbG9iYWxPcHRpb25zLmNvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5jb29raWVzID0gZ2xvYmFsT3B0aW9ucy5jb29raWVzLnNsaWNlKDApOyBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb29raWVzKSB7IFxuICAgICAgICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXMuc2xpY2UoMCk7IFxuICAgICAgICAgIGdsb2JhbE9wdGlvbnMuc2V0KCdjb29raWVzJywgdGhpcy5jb29raWVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvb2tpZXMgPSAoY29va2llcyA/IGNvb2tpZXMuc2xpY2UoMCkgOiB0aGlzLmNvb2tpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBIVFRQIGNvb2tpZSBwcmV2aW91c2x5IHNlbnQgYnkgdGhlIHNlcnZlciB3aXRoIFNldC1Db29raWUuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIHBhc3NlZCB0byBgLnNoYXJlKHJ1c2VyLmdldENvb2tpZXMoKSlgIG9mIGEgZGlmZnJlbnRcbiAgICogYC5pbygpYCBhZ2VudCB0byBwcmVzZXJ2ZSBzZXNzaW9uIHN0YXRlIGFjcm9zcyByZXF1ZXN0cy5cbiAgICpcbiAgICogQG1ldGhvZCBnZXRDb29raWVzXG4gICAqIEByZXR1cm4ge0FycmF5fSBUaGUgSFRUUCBjb29raWUgcHJldmlvdXNseSBzZW50IGJ5IHRoZSBzZXJ2ZXIgd2l0aCBcbiAgICogU2V0LUNvb2tpZS5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgZ2V0Q29va2llczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNvb2tpZXM7XG4gIH0sIFxuXG4gIGRlbGF5OiBmdW5jdGlvbiAobXMpIHtcbiAgICAvLyBUT0RPOiBzdXBwb3J0IGRlbGF5ZWQgcmVxdWVzdHMgYmFzZWQgb24gbXMgZm9yIG5vdyB0aGlzIGlzIGp1c3QgYSBwYXVzZS5cbiAgICB0aGlzLmRlbGF5ZWQgPSAhaXNOYU4ocGFyc2VGbG9hdChtcykpICYmIGlzRmluaXRlKG1zKSA/IG1zIDogdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LCAgIFxuXG4gIC8qKlxuICAgKiBVbndpbmQgdGhlIHF1ZXVlIGNoYWluIGNsZWFyaW5nIHJlcXVlc3RzIHRoYXQgbWlnaHQgaGF2ZSBkZWxheXMgYXR0YWNoZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZHJhaW5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvclxuICAgKiBcInJlamVjdFwiIGNhbGxiYWNrLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgZHJhaW46IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlbGF5ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnEuZmx1c2goKTsgXG5cbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuICB9LCAgIFxuXG4gIC8qKlxuICAgKiBUaGUgYC5wcm9taXNlKClgIG1ldGhvZCByZXR1cm5zIGEgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIFByb21pc2UgdGhhdCBpcyBcbiAgICogcmVzb2x2ZWQgb25jZSBhbGwgRGVwbG95UiBgLmlvKClgIHJlcXVlc3RzIGhhdmUgZW5kZWQuXG4gICAqICAgXG4gICAqIEBtZXRob2QgcHJvbWlzZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2Ugd3JhcHBpbmcgdGhlIHJlc29sdXRpb24gb2YgZWl0aGVyIFwicmVzb2x2ZVwiIG9yXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgICAgXG4gIHByb21pc2U6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWQucHJvbWlzZTtcbiAgfSxcblxuICAvKipcbiAgICogQWJvcnQgdGhlIERlcGxveVIgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBhYm9ydCAgXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICBcbiAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlcS5hYm9ydCgpO1xuICAgIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgICB0aGlzLmRlZmVycmVkLnJlamVjdCh0aGlzLl9oYW5kbGVFcnJvcih7IFxuICAgICAgICBzdGF0dXM6ICdhYm9ydCcsXG4gICAgICAgIHRleHQ6ICdEZXBsb3lSIHJlcXVlc3QgYWJvcnRlZC4nXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAvKipcbiAgKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICAqXG4gICogQG1ldGhvZCB0aW1lb3V0ICBcbiAgKiBAcGFyYW0ge051bWJlcn0gbXNcbiAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgKiBAYXBpIHB1YmxpY1xuICAqLyAgXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIChtcykge1xuICAgIHRoaXMucmVxLnRpbWVvdXQobXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAvKipcbiAgKiBUdXJuIGxvZ2dpbmcgb24gZm9yIHRoZSBzcGVjaWZpYyB0cmFuc2FjdGlvbi5cbiAgKlxuICAqIEBtZXRob2QgbG9nXG4gICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICogQGFwaSBwdWJsaWNcbiAgKi8gXG4gIGxvZzogZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgdGhpcy5sb2dnZXIuc2V0TGV2ZWwobGV2ZWwgfHwgTG9nZ2VyLkRFQlVHKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHN1Y2Nlc3NmdWwgcmVzcG9uc2VzIHRvIGNvbnRhaW4gb25seSBhIHRvcC1sZXZlbCBEZXBsb3lSIEFQSSBcbiAgICogcmVzcG9uc2UgZW50aXRpZXM6XG4gICAqIC0gJ3VzZXInXG4gICAqIC0gJ3Byb2plY3QnXG4gICAqIC0gJ3dvcmtzcGFjZScgXG4gICAqIC0gJ2V4ZWN1dGlvbicgXG4gICAqIC0gJ2RpcmVjdG9yeScgXG4gICAqIC0gJ3JlcG9zaXRvcnknXG4gICAqIC0gJ3BhY2thZ2VzJyBcbiAgICogICBcbiAgICogQG1ldGhvZCBlbnRpdHlcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBlbnRpdHk6IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICB0aGlzLmVudGl0aWVzID0gdXRpbHMuaW5BcnJheShUT1BMRVZFTF9FTlRJVElFUywgZW50aXR5KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSByZXF1ZXN0IGRhdGEgYmVpbmcgc2VudCB0byBhIERlcGxveVIgQVBJLiBcbiAgICpcbiAgICogQG1ldGhvZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBvYmplY3QgbGl0ZXJhbCBjb25maWd1cmF0aW9uIGhhc2guIFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGRhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307ICAgIFxuXG4gICAgLy8gcmVtb3ZlIGFueSBpbmxpbmVkIHJpbnB1dChzKSBhbmQgYXR0YWNoIHRoZW0gdG8gdGhlIHJpbnB1dChzKSBwcm9wZXJ0eVxuICAgIGlmIChkYXRhLnJpbnB1dCB8fCBkYXRhLnJpbnB1dHMpIHtcbiAgICAgIHRoaXMucmlucHV0KGRhdGEucmlucHV0KTtcbiAgICAgIHRoaXMucmlucHV0cyhkYXRhLnJpbnB1dHMpO1xuICAgIH0gXG5cbiAgICAvLyByZW1vdmUgYW55IGByZXNlcnZlZGAgdmFsdWVzIHRoYXQgY291bGQgaGF2ZSBiZWVuIHBhc3NlZCBieSBtaXN0YWtlXG4gICAgdmFyIEJMQUNLTElTVCA9IFsncmlucHV0JywgJ3JpbnB1dHMnLCAnX19jb29raWVzX18nXTtcbiAgICBCTEFDS0xJU1QuZm9yRWFjaChmdW5jdGlvbihwYXJhbSkgeyBkZWxldGUgZGF0YVtwYXJhbV07IH0pOyAgXG5cbiAgICB0aGlzLnBhcmFtcyA9IG1lcmdlKHRoaXMucGFyYW1zLCBkYXRhKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBhIGZpbGUgdG8gYmUgdXBsb2FkZWQuIFxuICAgKlxuICAgKiBAbWV0aG9kIGF0dGFjaFxuICAgKiBAcGFyYW0ge0ZpbGV8QmxvYnxwYXRofSBmaWxlIFRoZSBmaWxlIHRvIGJlIGF0dGFjaGVkIGZvciBhbiB1cGxvYWQuIEZvciBcbiAgICogQnJvd3NlciBlbnZpcm9ubWVudHMgdGhlIEhUTUw1IEZpbGV8QmxvYiBpcyB1c2VkLiBGb3IgdGhlIE5vZGUuanMgXG4gICAqIGVudmlyb25tZW50LCBhIGZpbGUgcGF0aCBpcyBhY2NlcHRlZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIChvcHRpb25hbCkgdGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gYmUgdXBsb2FkZWQuIFxuICAgKiBUaGlzIG5hbWUgZG9lcyBub3QgaGF2ZSB0byBtYXRjaCB0aGUgYWN0dWFsIHNvdXJjZSBmaWxlbmFtZS5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBhdHRhY2g6IGZ1bmN0aW9uIChmaWxlLCBmaWxlbmFtZSkge1xuICAgIGlmICh0aGlzLmFwaS51cGxvYWQpIHtcbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG5cbiAgICAgIC8vIG9wdGlvbmFsIGZpbGVuYW1lIGhlcmUgZm9yIGNvbnZlbmllbmNlXG4gICAgICBpZiAoZmlsZW5hbWUpIHsgdGhpcy5kYXRhKCB7IGZpbGVuYW1lOiBmaWxlbmFtZSB9ICk7IH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogU3VwcG9ydGVkIG9ubHkgaW4gTm9kZS5qcywgdGhpcyBtZXRob2Qgd29ya3MgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgXG4gICAqIGF0dGFjaCBtZXRob2QgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZmlsZSBzaG91bGQgYmUgcmVhZCBpbiBhcyBhIHJlYWRhYmxlIFxuICAgKiBzdHJlYW0gZHVyaW5nIGEgZmlsZSB1cGxvYWQuXG4gICAqXG4gICAqIEBtZXRob2Qgc3RyZWFtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIChvcHRpb25hbCkgdGhlIFJlYWRhYmxlIFN0cmVhbSBvcHRpb25zIGhhc2guXG4gICAqICBgYGBcbiAgICogICAgeyBmbGFnczogJ3InLFxuICAgKiAgICAgIGVuY29kaW5nOiBudWxsLFxuICAgKiAgICAgIGZkOiBudWxsLFxuICAgKiAgICAgIG1vZGU6IDA2NjYsXG4gICAqICAgICAgYXV0b0Nsb3NlOiB0cnVlXG4gICAqICAgIH1cbiAgICogYGBgXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgc3RyZWFtOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yc3RyZWFtID0gKCF3aW4gJiYgdGhpcy5hcGkudXBsb2FkKTsgLy9ub2RlanMgb25seVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgZmlsdGVyKM67KWAgbWV0aG9kIHJlbW92ZXMgdGhpcyBEZXBsb3lSIHJlcXVlc3QgZnJvbSB0aGUgcmVxdWVzdCBjaGFpblxuICAgKiBpZiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gZG9lcyAqbm90KiBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IGl0LlxuICAgKlxuICAgKiBFeGFtcGxlczpcbiAgICpcbiAgICogYGBgXG4gICAqIC8vIFJlbW92ZSBmcm9tIHRoZSByZXF1ZXN0IGNoYWluXG4gICAqIC5maWx0ZXIoZnVuY3Rpb24oYXJncykge1xuICAgKiAgICByZXR1cm4gNSA+IDEwO1xuICAgKiB9KVxuICAgKlxuICAgKiAvLyBLZWVwIGluIHRoZSByZXF1ZXN0IGNoYWluXG4gICAqIC5maWx0ZXIoZnVuY3Rpb24oYXJncykge1xuICAgKiAgICByZXR1cm4gMTAgPiA1O1xuICAgKiB9KSAgIFxuICAgKiBgYGBcbiAgICpcbiAgICogQG1ldGhvZCBmaWx0ZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gzrsgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAoZm4pIHtcbiAgICAgIHRoaXMuaW9GaWx0ZXIgPSBmdW5jdGlvbihwcmV2QXJncykge1xuICAgICAgICB2YXIgYXJncyA9IHt9LCBrZWVwO1xuXG4gICAgICAgIC8vIGNvcHkgb3ZlciBwcmV2aW91cyBhcmd1bWVudHMgYW5kIGZpbHRlciBvdXQgaW50ZXJuYWwgX19jb29raWVzX18gXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcmV2QXJncykge1xuICAgICAgICAgICBpZiAoa2V5ICE9PSAnX19jb29raWVzX18nKSB7IFxuICAgICAgICAgICAgICBhcmdzW2tleV0gPSBwcmV2QXJnc1trZXldO1xuICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZWVwID0gZm4oYXJncyk7XG4gICAgICAgIHJldHVybiAoa2VlcCB8fCBrZWVwID09PSBmYWxzZSA/IGtlZXAgOiB0cnVlKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICBcbiAgXG4gIC8qKlxuICAgKiBBY3RzIGFzIGEgZmluYWxseSBzdGF0ZW1lbnQgYWxsb3dpbmcgeW91IHRvIGV4ZWN1dGUgXCJjbGVhbnVwXCIgdHlwZSB0YXNrcyBcbiAgICogaW4gYSByZXF1ZXN0IGNoYWluLiBJdCBhcnJhbmdlcyBmb3IgY2xlYW51cCB0byBiZSBjYWxsZWQsIHdpdGggbm8gXG4gICAqIGFyZ3VtZW50cywgd2hlbiB0aGUgRGVwbG95UiByZXF1ZXN0IGNoYWluIGlzIGVpdGhlciBjb21wbGV0ZWx5IGZ1bGZpbGxlZCBcbiAgICogb3IgcmVqZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZW5zdXJlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGVuc3VyZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5kZWZlcnJlZC5wcm9taXNlLmVuc3VyZShmbik7XG5cbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuICB9LFxuICAgICAgXG4gIC8qKlxuICAgKiBUaGUgZ2VuZXJhbCBmYWlsdXJlIGNhbGxiYWNrLiBJZiBjYWxsZWQsIGFsbCBEZXBsb3lSIGVycm9ycyBmb3IgdGhpcyBcbiAgICogdHJhbnNhY3Rpb24gd2lsbCBiZSByZXR1cm5lZCBoZXJlIHdoZW4gcmFpc2VkLlxuICAgKlxuICAgKiBAbWV0aG9kIGVycm9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBlcnJvcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5vbignZXJyb3InLCBmbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogU3RyZWFtIHRoZSBEZXBsb3lSIHJlc3BvbnNlIGludG8gdGhlIHBpcGUuIEl0IGlzIGltcG9ydGFudCB0byBub3RlIHRoYXQgaWYgXG4gICAqIHRoZSBgLnBpcGUoKWAgbWV0aG9kIGlzIG5ldmVyIGNhbGxlZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBiZSBzZW50LlxuICAgKlxuICAgKiBUaGUgYC5waXBlKClgIG1ldGhvZCBzaG91bGQgYmUgYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byBgLmVuZCgpYCBhbmQgXG4gICAqIG5ldmVyIGFsb25nIHNpZGUgb2YgaXQuIGAucGlwZSgpYCBhbmQgYC5lbmQoKWAgYXJlIGFuIGVpdGhlci1vci5cbiAgICpcbiAgICogQG1ldGhvZCBwaXBlXG4gICAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gQSBkZXN0aW5hdGlvbiBTdHJlYW0uXG4gICAqIEByZXR1cm4ge1N0cmVhbX0gVGhlIHBhc3NlZCBpbiBkZXN0aW5hdGlvbiBzdHJlYW0gdG8gYmUgdXNlZCBmb3IgYWRkaXRpb25hbCBcbiAgICogcGlwaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcGlwZTogZnVuY3Rpb24gKGRlc3QpIHtcbiAgICB2YXIgcSAgID0gdGhpcy5xLFxuICAgICAgICBhcGkgPSB0aGlzLmFwaTsgICAgICAgIFxuXG4gICAgcS5hZGQoZnVuY3Rpb24ocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKSB7ICAgIFxuICAgICAgLy8gYnJha2UgdGhlIGNhbGwgY2hhaW4gb24gZXJyb3IgICAgICBcbiAgICAgIGlmIChlcnJvcikgeyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KGVycm9yKTsgICAgICBcbiAgICAgICAgcS5mbHVzaChyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpOyAvLyBkcmFpbiB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9wcmVwUmVxdWVzdChyZXNwb25zZUNoYWluLCBwcmV2QXJncyk7XG5cbiAgICAgIExvZ2dlci5pbmZvKCdwaXBlKCknLCBhcGksIHRoaXMucmVxKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ3BpcGUoKScsIGFwaSwgdGhpcy5yZXEpOyAgIFxuXG4gICAgICB2YXIgc3RyZWFtID0gdGhpcy5yZXEucGlwZShkZXN0KTtcbiAgICAgIHEueWllbGQodHJ1ZSk7XG4gICAgICBzdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKCkgeyB9KTsgICAgXG4gICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uKCkgeyB9KTsgICAgIFxuICAgICAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24oKSB7IH0pOyAgICAgIFxuICAgIH0sIHRoaXMpO1xuICBcbiAgICBpZiAocS5zaXplKCkgPD0gMSkgeyBxLmZsdXNoKCk7IH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBpcyByZWFkeSB0byBiZSBzZW50IHRvIERlcGxveVIuIEl0IGlzIGltcG9ydGFudCBcbiAgICogdG8gbm90ZSB0aGF0IGlmIHRoZSBgLmVuZCgpYCBtZXRob2QgaXMgbmV2ZXIgY2FsbGVkIHRoZSByZXF1ZXN0IHdpbGwgbm90IGJlXG4gICAqIHNlbnQuXG4gICAqXG4gICAqIEBtZXRob2QgZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gXG4gIGVuZDogZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHNlbGYgICAgID0gdGhpcyxcbiAgICAgICAgcSAgICAgICAgPSB0aGlzLnEsXG4gICAgICAgIGFwaSAgICAgID0gdGhpcy5hcGksXG4gICAgICAgIGFyZ3MgICAgID0gbnVsbCxcbiAgICAgICAgZW50aXRpZXMgPSAgdGhpcy5lbnRpdGllcztcblxuICAgIHEuYWRkKGZ1bmN0aW9uKHJlc3BvbnNlQ2hhaW4sIGVycm9yLCBwcmV2QXJncykge1xuICAgICAgLy8gYnJlYWsgdGhlIGNhbGwgY2hhaW4gb24gZXJyb3IgICAgICBcbiAgICAgIGlmIChlcnJvcikgeyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KGVycm9yKTsgICAgICAgIFxuICAgICAgICBxLmZsdXNoKHJlc3BvbnNlQ2hhaW4sIGVycm9yLCBwcmV2QXJncyk7IC8vIGRyYWluIHRoZSBxdWV1ZVxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGZpbHRlciBvdXQgcmVzcG9uc2VzICAgIFxuICAgICAgaWYgKCF0aGlzLmlvRmlsdGVyKHByZXZBcmdzKSkge1xuICAgICAgICBpZiAocS5zaXplKCkgPT09IDApIHsgXG4gICAgICAgICAgdGhpcy5kZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlQ2hhaW4gfHwgcHJldkFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcS5mbHVzaChyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpOyAvLyBkcmFpbiB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9wcmVwUmVxdWVzdChyZXNwb25zZUNoYWluLCBwcmV2QXJncyk7XG5cbiAgICAgIExvZ2dlci5pbmZvKCdpbygpJywgYXBpLCB0aGlzLnJlcSk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdpbygpJywgYXBpLCB0aGlzLnJlcSk7ICAgIFxuXG4gICAgICAvLyBzZW5kIG5leHQgcmVxdWVzdFxuICAgICAgdGhpcy5yZXEuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLnNoYXJlKHNlbGYuY29va2llcyB8fCByZXMuaGVhZGVyc1snc2V0LWNvb2tpZSddKTsgICAgICAgICBcblxuICAgICAgICAvLyAtLSBsb2cgY29va2llcyBhY3Jvc3MgcmVxdWVzdHMgLS1cbiAgICAgICAgaWYgKHNlbGYuY29va2llcykge1xuICAgICAgICAgIExvZ2dlci5pbmZvKCdjb29raWVzJywgYXBpLCBzZWxmLmNvb2tpZXMpOyBcbiAgICAgICAgICBzZWxmLmxvZ2dlci5pbmZvKCdjb29raWVzJywgYXBpLCBzZWxmLmNvb2tpZXMpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9yID0gc2VsZi5faGFuZGxlRXJyb3IocmVzKTtcbiAgICAgICAgdmFyIGRyZXMgPSAocmVzLmJvZHkgJiYgcmVzLmJvZHkuZGVwbG95ciA/IHJlcy5ib2R5IDogcmVzKTsgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgc2VsZi5pbnB1dHMgPSBbXTtcbiAgICAgICAgc2VsZi5vdXRwdXRzID0gW107XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAvLyAtLSBMb2cgZ2xvYmFsICsgdHJhbnNhY3Rpb24gbG9nIC0tXG4gICAgICAgICAgIExvZ2dlci5pbmZvKCdlbmQoKScsIGFwaSwgZHJlcywgcmVzKTtcbiAgICAgICAgICAgc2VsZi5sb2dnZXIuaW5mbygnZW5kKCknLCBhcGksIGRyZXMsIHJlcyk7XG5cbiAgICAgICAgICAgLy8gLS0gd2FsayByZXNwb25zZSBmb3IgdG9wLWxldmVsIGVudGl0eSByZXNwb25zZSBhc3NpZ25tZW50IC0tICAgICAgICBcbiAgICAgICAgICAgaWYgKGVudGl0aWVzKSB7IGRyZXMgPSBkcmVzLmRlcGxveXIucmVzcG9uc2VbZW50aXRpZXNdIHx8IGRyZXM7IH1cblxuICAgICAgICAgICBkcmVzLmdldCA9IGZ1bmN0aW9uKGtleSkgeyBcbiAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmdldChkcmVzLmRlcGxveXIucmVzcG9uc2UsIGtleSk7IFxuICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRyZXMud29ya3NwYWNlID0gZnVuY3Rpb24obmFtZSkgeyBcbiAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLndvcmtzcGFjZShkcmVzLmRlcGxveXIucmVzcG9uc2UsIG5hbWUpOyBcbiAgICAgICAgICAgfTtcblxuICAgICAgICAgICAvLyAtLSBjYWxsYmFjayAtLVxuICAgICAgICAgICBpZiAoZm4pIHsgYXJncyA9IGZuLmFwcGx5KHNlbGYuc2NvcGUsIFtkcmVzLCByZXNwb25zZUNoYWluXSk7fVxuXG4gICAgICAgICAgIC8vIC0tIG5vdGlmeSB0aGF0IHRoZSBxdWV1ZSBoYXMgYmVlbiBkcmFpbmVkLi4uIC0tXG4gICAgICAgICAgIGlmIChxLnNpemUoKSA9PT0gMCkgeyBcbiAgICAgICAgICAgICBzZWxmLl9jbGVhcigpO1xuICAgICAgICAgICAgIHNlbGYuZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZUNoYWluIHx8IGRyZXMpO1xuICAgICAgICAgICB9ICAgICAgICAgIFxuXG4gICAgICAgICAgIC8vIC0tIGluY2x1ZGUgY29va2llcyBpbiBuZXh0IHJlcXVlc3QgaW4gdGhlIHF1ZXVlIC0tXG4gICAgICAgICAgIGFyZ3MgPSBtZXJnZShhcmdzLCB7IF9fY29va2llc19fOiBzZWxmLmNvb2tpZXMgfSk7ICAgICAgICAgIFxuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBxLnlpZWxkKGZhbHNlKTtcbiAgICAgICAgcS5mbHVzaChkcmVzLCBlcnJvciwgYXJncyk7IC8vIHBhc3MgcmVzdWx0fGVycm9yfGFyZ3MgdG8gbmV4dCBcbiAgICAgIH0pO1xuXG4gICAgICBxLnlpZWxkKHRydWUpO1xuICAgIH0sIHRoaXMsIHRoaXMuZGVsYXllZCk7XG4gIFxuICAgIGlmICghdGhpcy5kZWxheWVkICYmIHEuc2l6ZSgpIDw9IDEpIHsgcS5mbHVzaCgpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgXG5cbiAgLyoqIFxuICAgKiBBZGQgYW4gYWRkaXRpb25hbCBJTyByZXF1ZXN0IHRvIHRoZSBleHNpc3Rpbmcgc2VxdWVudGlhbCByZXF1ZXN0IGNoYWluLlxuICAgKlxuICAgKiBAbWV0aG9kIGlvXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgT25lIG9mIHRoZSBzdXBwb3J0ZWQgRGVwbG95UiBBUElzLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgIFxuICBpbzogZnVuY3Rpb24gKGFwaSkgeyAgICBcbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpLCB7IFxuICAgICAgY29va2llczogdGhpcy5jb29raWVzLCBcbiAgICAgIHF1ZXVlOiB0aGlzLnEsIFxuICAgICAgZGVmZXJyZWQ6IHRoaXMuZGVmZXJyZWRcbiAgICB9KTtcbiAgfSxcblxuICAvKiogXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBhZGRpbmcgYW4gYWRkaXRpb25hbCBzY3JpcHQgZXhlY3V0aW9uIHRvIHRoZSBcbiAgICogZXhzaXN0aW5nIHNlcXVlbnRpYWwgcmVxdWVzdCBjaGFpbi5cbiAgICpcbiAgICogQG1ldGhvZCBzY3JpcHRcbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IEFyZ3VtZW50cyB0byBkZWZpbmUgdGhlIGZ1bGx5IHF1YWxpZmllZCBzY3JpcHQgZm9yIFxuICAgKiBleGVjdXRpb24uXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHNjcmlwdDogZnVuY3Rpb24oKSB7XG4gICAgIHZhciBhcmdzID0gdXRpbHMuc2lnbmF0dXJlKGFyZ3VtZW50cyksXG4gICAgICAgICBvcHRzID0gYXJncy5vcHRzLFxuICAgICAgICAgYXBpICA9IGFyZ3MuYXBpLFxuICAgICAgICAgbGluayA9IHsgXG4gICAgICAgICAgY29va2llczogdGhpcy5jb29raWVzLCBcbiAgICAgICAgICBxdWV1ZTogdGhpcy5xLCBcbiAgICAgICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgICAgICB9OyAgXG5cbiAgICAvLyBjb252ZW5pZW5jZSAtIGlmIHRoZSBwcm9qZWN0IGlzIGEgYm9vbGVuIGB0cnVlYCByYXRoZXIgdGhhbiBhIHBpZCwgZmlyc3RcbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgdGhlbiBwcmVwYXJlIHRoZSBwcm9qZWN0IGFwaSBjYWxsIHRvIGV4ZWN1dGVcbiAgICBpZiAoYXJncy5jcmVhdGUpIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jcmVhdGUnLCBsaW5rKVxuICAgICAgICAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2plY3Q6IHJlcy5nZXQoJ3Byb2plY3QnKS5wcm9qZWN0IH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5pbyhhcGkpXG4gICAgICAgICAgICAgICAuZGF0YShvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSwgbGluaykuZGF0YShvcHRzKTtcbiAgICB9ICAgIFxuICB9LFxuXG4gIC8qKiBcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGFkZGluZyBhbiBhZGRpdGlvbmFsIHJlcG9zaXRvcnktbWFuYWdlZCBzaGVsbCBcbiAgICogc2NyaXB0IGV4ZWN1dGlvbiB0byB0aGUgZXhzaXN0aW5nIHNlcXVlbnRpYWwgcmVxdWVzdCBjaGFpbi5cbiAgICpcbiAgICogVGhpcyBjYWxsIGV4ZWN1dGVzIHJlcG9zaXRvcnktbWFuYWdlZCBzaGVsbCBzY3JpcHRzIC5zaCwgLmNzaCwgLmJhc2gsIC5iYXQgXG4gICAqIG9uIHRoZSBEZXBsb3lSIHNlcnZlci4gRHVlIHRvIHRoZSBzcGVjaWFsIHNlY3VyaXR5IGNvbmNlcm5zIGFzc29jaWF0ZWQgd2l0aCBcbiAgICogZXhjdXRpbmcgc2hlbGwgc2NyaXB0cyBvbiB0aGUgRGVwbG95UiBzZXJ2ZXIsIG9ubHkgc2hlbGwgc2NyaXB0cyBvd25lZCBieSBcbiAgICogX0FETUlOSVNUUkFUT1JfIHVzZXJzIGNhbiBiZSBleGVjdXRlZCBvbiB0aGlzIEFQSSBjYWxsLiBBbnkgYXR0ZW1wdCB0byBcbiAgICogZXhlY3V0ZSBhIHNoZWxsIHNjcmlwdCBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnkgdGhhdCBpcyBub3Qgb3duZWQgYnkgYW4gXG4gICAqIF9BRE1JTklTVFJBVE9SXyB1c2VyIHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAqXG4gICAqIFRvIGV4ZWN1dGUgYSByZXBvc2l0b3J5LW1hbmFnZWQgc2hlbGwgc2NyaXB0IHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlIFxuICAgKiBwYXJhbWV0ZXIgdmFsdWVzIGZvciBfYXV0aG9yXywgX2RpcmVjdG9yeV8sIF9maWxlbmFtZV8uIFRoaXMgY2FuIGJlXG4gICAqIGFjaGlldmVkIGJ5IHByb3ZpZGluZyBhIGZ1bGx5IHF1YWxpZmllZCBzaGVsbCBzY3JpcHQgXG4gICAqIGAvPGF1dGhvcj4vPGRpcmVjdG9yeT4vPGZpbGVuYW1lPmAsIGZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgYGBgXG4gICAqICAuc2hlbGwoJy9hZG1pbi9leHRlcm5hbDpwdWJsaWM6YWRtaW4vZWNoby5zaCcsICdlY2hvLnNoIGFyZ3MgdG8gcGFzcy4nKVxuICAgKiAgYGBgXG4gICAqXG4gICAqIEBtZXRob2Qgc2hlbGxcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVwYXRoIHRvIGRlZmluZSB0aGUgZnVsbHkgcXVhbGlmaWVkIHNoZWxsIHNjcmlwdCBmb3JcbiAgICogZXhlY3V0aW9uLiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFyZ3MgKG9wdGlvbmFsKSBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIGludG8gdGhlIHNoZWxsIFxuICAgKiBzY3JpcHQgb24gZXhlY3V0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBzaGVsbDogZnVuY3Rpb24ocGF0aCwgYXJncykgeyAgIFxuICAgIHZhciBsaW5rID0geyBcbiAgICAgICAgICBjb29raWVzOiB0aGlzLmNvb2tpZXMsIFxuICAgICAgICAgIHF1ZXVlOiB0aGlzLnEsIFxuICAgICAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgICAgIH0sXG4gICAgICAgIHRva2VucyA9IExhbmcuaXNTdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCdcXC8nKSA6IFtdO1xuXG4gICAgLy8gaGFuZGxlIGJvdGg6IGAvYXV0aG9yL2RpcmVjdG9yeS9maWxlbmFtZWAgJiBgYXV0aG9yL2RpcmVjdG9yeS9maWxlbmFtZWBcbiAgICBpZiAodG9rZW5zLmxlbmd0aCA+IDMpIHsgdG9rZW5zID0gdG9rZW5zLnNsaWNlKDEpOyB9XG5cbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3JlcG9zaXRvcnkvc2hlbGwvZXhlY3V0ZScsIGxpbmspLmRhdGEoe1xuICAgICAgYXV0aG9yOiB0b2tlbnNbMF0sXG4gICAgICBkaXJlY3Rvcnk6IHRva2Vuc1sxXSxcbiAgICAgIGZpbGVuYW1lOiB0b2tlbnNbMl0sXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIFxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgZXhlY3V0aW5nIGEgYmxvY2sgb2YgUiBjb2RlIG9uIHRoZSBSIHNlc3Npb24uXG5cbiAgICogRXhhbXBsZTpcbiAgICogIGBgYFxuICAgKiAgLmNvZGUoJ3g8LTUnKVxuICAgKiAgLy8gLS0gb3IgLS1cbiAgICogIC5jb2RlKCd4PC01JywgcHJvamVjdElkKVxuICAgKiAgYGBgXG4gICAqICAgXG4gICAqIEBtZXRob2QgY29kZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gciAtIFRoZSBibG9jayBvZiBSIGNvZGUgdG8gZXhlY3V0ZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3QgLSAob3B0aW9uYWwpIGlmIG9taXR0ZWQgYSBuZXcgcHJvamVjdCB3aWxsIGZpcnN0IGJlIFxuICAgKiBjcmVhdGVkIGFuZCB1c2VkLCBvdGhlcndpc2UgaXQgd2lsbCBleGVjdXRlIG9uIHRoZSBSIHNlc3Npb24gaWRlbnRpZmllZCBieSBcbiAgICogdGhpcyBgcHJvamVjdGAuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvZGU6IGZ1bmN0aW9uKHIsIHByb2plY3QpIHtcbiAgICAgdmFyIGxpbmsgPSB7XG4gICAgICAgICAgICAgY29va2llczogdGhpcy5jb29raWVzLFxuICAgICAgICAgICAgIHF1ZXVlOiB0aGlzLnEsXG4gICAgICAgICAgICAgZGVmZXJyZWQ6IHRoaXMuZGVmZXJyZWRcbiAgICAgICAgIH0sXG4gICAgICAgICBhcGkgPSAnL3IvcHJvamVjdC9leGVjdXRlL2NvZGUnO1xuXG4gICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICAgcmV0dXJuIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2NyZWF0ZScsIGxpbmspXG4gICAgICAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvamVjdDogcmVzLmdldCgncHJvamVjdCcpLnByb2plY3QgfTtcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5pbyhhcGkpXG4gICAgICAgICAgICAgLmRhdGEoeyBjb2RlOiByIH0pO1xuICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSwgbGluaykuZGF0YSh7IGNvZGU6IHIsIHByb2plY3Q6IHByb2plY3QgfSk7XG4gICAgIH1cbiAgfSxcbiAgXG4gIC8qKiBcbiAgICogUmVsZWFzZSBhbnkgcmVzaWR1YWwgcHJvamVjdCByZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBhcHBsaWNhdGlvbiBcbiAgICogaW5zdGFuY2Ugd2hlbmV2ZXIgYSBjbGllbnQgYXBwbGljYXRpb24gdGVybWluYXRlcy4gVGhpcyBpbmNsdWRlcyBjbG9zaW5nIFxuICAgKiBhbnkgc3VwcGxpZWQgcHJvamVjdHMgZG93biBhbmQgbG9nZ2luZyBvdXQuXG4gICAqXG4gICAqIEBtZXRob2QgcmVsZWFzZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gcHJvamVjdHMgVGhlIHByb2plY3Qgb3IgbGlzdCBvZiBwcm9qZWN0cyB0byBjbG9zZS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBhdXRoIChvcHRpb25hbCkgdG8gcmVtYWluIGF1dGhlbnRpY2F0ZWQuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJlbGVhc2U6IGZ1bmN0aW9uKHByb2plY3RzLCBhdXRoKSB7XG4gICAgIHByb2plY3RzID0gTGFuZy5pc0FycmF5KHByb2plY3RzKSA/IHByb2plY3RzIDogW3Byb2plY3RzXTtcblxuICAgICB2YXIgc2VsZiAgICAgPSB0aGlzLFxuICAgICAgICAgZGVmZXJyZWQgPSBEKCksXG4gICAgICAgICBlbXB0eSAgICA9ICFwcm9qZWN0cyB8fCAhcHJvamVjdHNbMF0sXG4gICAgICAgICBjb3VudCAgICA9IDAsXG4gICAgICAgICBsYXN0ICAgICA9ICFlbXB0eSA/IHByb2plY3RzLmxlbmd0aCAtIDEgOiBjb3VudCxcbiAgICAgICAgIGNvb2tpZXMgID0gdGhpcy5nZXRDb29raWVzKCk7ICAgICAgICAgICBcblxuICAgIGZ1bmN0aW9uIGxvZ291dChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSBsYXN0KSB7XG4gICAgICAgIGlmICghYXV0aCkge1xuICAgICAgICAgIERlcGxveVIubmV3KCcvci91c2VyL2xvZ291dCcpXG4gICAgICAgICAgLnNoYXJlKGNvb2tpZXMpXG4gICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKCkgeyAgICAgICAgICBcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSkgICAgICBcbiAgICAgICAgICAuZW5kKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZW5zdXJlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5kZXN0cm95KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICBzZWxmLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICB9XG5cbiAgICBpZiAoIWVtcHR5KSB7XG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgRGVwbG95Ui5uZXcoJy9yL3Byb2plY3QvY2xvc2UnKVxuICAgICAgICAuZGF0YSh7IHByb2plY3Q6IHByb2plY3QgfSlcbiAgICAgICAgLnNoYXJlKGNvb2tpZXMpXG4gICAgICAgIC5lbmQoKVxuICAgICAgICAuZW5zdXJlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxvZ291dChjb3VudCk7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG4gICAgICB9KTsgICBcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nb3V0KGNvdW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTsgIFxuICB9LCAgXG5cbiAgLyoqIFxuICAgKiBBIGNvbnZlbmllbmNlIGFsdGVybmF0aXZlIHRvIG11bHRpcGxlIGAucmlucHV0KClgIGNhbGxzLiBEZWZpbmVzIGEgbmFtZSBcbiAgICogbGlzdCBvZiBSIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHVybmVkIGFzIERlcGxveVItZW5jb2RlZCBSIG9iamVjdHMgb24gdGhlIFxuICAgKiByZXNwb25zZSBtYXJrdXAuXG4gICAqXG4gICAqIENhbGxpbmcgdGhpcyBtZXRob2Qgfi5yb3V0cHV0cyhbIC4uLiBdKWAgaXMgZXF1aXZhbGVudCB0byBpbnZva2luZyBtdWx0aXBsZSBcbiAgICogYC5yb3V0cHV0KC4uLilgIGNhbGxzLlxuICAgKlxuICAgKiBAbWV0aG9kIHJvdXRwdXRzXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJvYmplY3RzIEEgbmFtZSBsaXN0IG9mIFIgb2JqZWN0cyB0aGF0IHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJvdXRwdXRzOiBmdW5jdGlvbiAocm91dHB1dHMpIHtcbiAgICBpZiAocm91dHB1dHMpIHsgdGhpcy5vdXRwdXRzID0gdGhpcy5vdXRwdXRzLmNvbmNhdChyb3V0cHV0cyk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBcbiAgLyoqIFxuICAgKiBEZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBSIG9iamVjdCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgYXMgYSBEZXBsb3lSLWVuY29kZWQgXG4gICAqIFIgb2JqZWN0IG9uIHRoZSByZXNwb25zZSBtYXJrdXAuXG4gICAqXG4gICAqIEBtZXRob2Qgcm91dHB1dFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcm9iamVjdCBUaGUgbmFtZSBvZiB0aGUgUiBvYmplY3QgdGhhdCB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByb3V0cHV0OiBmdW5jdGlvbiAocm91dHB1dCkge1xuICAgIGlmIChyb3V0cHV0KSB7IHRoaXMucm91dHB1dHMoW3JvdXRwdXRdKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqIFxuICAgKiBVc2VkIHRvIHBhc3MgbXVsdGlwbGUgaW5wdXRzIGF0IG9uY2UgZnJvbSBKYXZhU2NyaXB0IHRvIGFuIFIgc2NyaXB0IHVzaW5nIFxuICAgKiBvbmUgb2YgdGhlIGRlZmluZWQgYFJJbnB1dGAgZmFjdG9yaWVzLlxuICAgKlxuICAgKiBAbWV0aG9kIHJpbnB1dHNcbiAgICogQHBhcmFtIHtBcnJheX0gcmlucHV0cyBUaGUgYFJJbnB1dGAgbGlzdCBvZiBEZXBsb3lSLXNwZWNpZmljIGVuY29kZWQgUiBcbiAgICogb2JqZWN0IGRhdGEgZm9yIHVzZSBvbiBhbiBBUEkgY2FsbC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcmlucHV0czogZnVuY3Rpb24gKHJpbnB1dHMpIHtcbiAgICBpZiAocmlucHV0cykgeyB0aGlzLmlucHV0cyA9IHRoaXMuaW5wdXRzLmNvbmNhdChyaW5wdXRzKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqIFxuICAgKiBVc2VkIHRvIHBhc3MgbXVsdGlwbGUgaW5wdXRzIGF0IG9uY2UgZnJvbSBKYXZhU2NyaXB0IHRvIGFuIFIgc2NyaXB0IHVzaW5nIFxuICAgKiBvbmUgb2YgdGhlIGRlZmluZWQgYFJJbnB1dGAgZmFjdG9yaWVzLlxuICAgKlxuICAgKiBAbWV0aG9kIHJpbnB1dFxuICAgKiBAcGFyYW0ge1JJbnB1dH0gcmlucHV0IFRoZSBEZXBsb3lSLXNwZWNpZmljIGVuY29kZWQgUiBvYmplY3QgZGF0YSBmb3IgdXNlIFxuICAgKiBvbiBhbiBBUEkgY2FsbC4gICBcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcmlucHV0OiBmdW5jdGlvbiAocmlucHV0KSB7XG4gICAgaWYgKHJpbnB1dCkgeyB0aGlzLmlucHV0cy5wdXNoKHJpbnB1dCk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGxpZmVjeWNsZSBtZXRob2QuIEZpcmVzIHRoZSBgZGVzdHJveWAgZXZlbnQsIHByaW9yIHRvIGludm9raW5nIFxuICAgKiBkZXN0cnVjdG9ycyBmb3IgdGhlIGNsYXNzIGhpZXJhcmNoeS4gQ2FsbGVkIGludGVybmFsbHkgd2hlbiBgLnJlbGVhc2UoKWBcbiAgICogaXMgY2FsbGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5lbWl0KCdkZXN0cm95Jyk7XG4gICAgICB0aGlzLm9mZkFsbCgpO1xuICAgIFxuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkgeyBcbiAgICAgICAgICB0aGlzW2tleV0gPSBudWxsOyBcbiAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaChlcnIpIHt9XG4gIH0sICBcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBfY2xlYXI6IGZ1bmN0aW9uKCkgeyAgICBcbiAgICB0aGlzLnBhcmFtcyAgID0ge307XG4gICAgdGhpcy5pbnB1dHMgICA9IFtdO1xuICAgIHRoaXMub3V0cHV0cyAgPSBbXTtcbiAgICB0aGlzLnJzdHJlYW0gID0gZmFsc2U7XG4gICAgdGhpcy5kZWxheWVkICA9IGZhbHNlO1xuICAgIHRoaXMuYXBpICAgICAgPSBudWxsOyAgICBcbiAgICB0aGlzLmZpbGUgICAgID0gbnVsbDsgIFxuICAgIHRoaXMuZW50aXRpZXMgPSBudWxsO1xuICAgIHRoaXMuaW9GaWx0ZXIgPSBudWxsO1xuICB9LCBcblxuICAvKipcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBfcHJlcFJlcXVlc3Q6IGZ1bmN0aW9uIChyZXNwb25zZUNoYWluLCBhcmdzKSB7XG4gICAgdmFyIHJlcSAgPSB0aGlzLnJlcSxcbiAgICAgICAgZmlsZSA9IHRoaXMuZmlsZTtcblxuICAgIC8vIHNldCB0aGUgcmVxdWVzdCB0eXBlICAgIFxuICAgIGlmICh0aGlzLmFwaS51cGxvYWQpIHtcbiAgICAgICAvLyBJZiB0aGUgZW52IGlzIHRoZSBCcm93c2VyIHRoZXJlIGlzIG5vIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZVxuICAgICAgIC8vIENvbnRlbnQtVHlwZS4gVGhlIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHNldCB0aGUgXG4gICAgICAgLy8gXCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0uLi5cIiB2YWx1ZS4gSWYgdGhlIGVudiBpcyBOb2RlIHdlIG5lZWRcbiAgICAgICAvLyB0byBzZXQgaXQgbWFudWFsbHkuXG4gICAgICAgaWYgKCF3aW4pIHsgdGhpcy5yZXEudHlwZSgnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpOyB9ICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXEudHlwZSgnZm9ybScpO1xuICAgIH0gICAgXG5cbiAgICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7IFxuICAgICAgZXJyID0gZXJyIHx8IHsgIGNvZGU6ICdVTktOT1dOIENPREUnLCB0ZXh0OiAnVU5LTk9XTiBFUlJPUicgfTtcblxuICAgICAgdGhpcy5faGFuZGxlRXJyb3IoeyBcbiAgICAgICAgc3RhdHVzOiBlcnIuY29kZSB8fCAnVU5LTk9XTiBDT0RFJyxcbiAgICAgICAgdGV4dDogZXJyXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpOyAgICBcblxuICAgIHRoaXMuc2hhcmUoYXJncyA/IGFyZ3MuX19jb29raWVzX18gOiBudWxsKTtcblxuICAgIC8vIGFyZ3VtZW50cyByZXR1cm5lZCBmcm9tIHByZXYgcmVxdWVzdCdzIGlvKCkuZW5kKGZ1bmN0aW9uKCkgeyByZXR1cm4geDsgfSlcbiAgICBpZiAoYXJncykgeyBcbiAgICAgICB0aGlzLmRhdGEoYXJncyk7XG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlucHV0cy5sZW5ndGggPiAwKSB7IFxuICAgICAgdGhpcy5kYXRhKHsgaW5wdXRzOiBlbmNvZGVyLmVuY29kZSh0aGlzLmlucHV0cykgfSk7IFxuICAgIH1cbiAgXG4gICAgaWYgKHRoaXMub3V0cHV0cy5sZW5ndGggPiAwKSB7IFxuICAgICAgdGhpcy5kYXRhKHsgcm9iamVjdHM6IHRoaXMub3V0cHV0cy5qb2luKCkgfSk7IFxuICAgIH0gICAgXG5cbiAgICBpZiAodGhpcy5jb29raWVzKSB7ICAgICBcbiAgICAgIHRoaXMuY29va2llcy5mb3JFYWNoKCBmdW5jdGlvbihjKSB7IHJlcS5zZXQoJ0Nvb2tpZScsIGMpOyB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcGkudXBsb2FkKSB7ICAgIFxuICAgICAgZm9yKHZhciBwIGluIHRoaXMucGFyYW1zKSB7XG4gICAgICAgIHJlcS5maWVsZChwLCAodGhpcy5wYXJhbXNbcF0gfHwgdGhpcy5wYXJhbXNbcF0gPT09IGZhbHNlKSA/IFxuICAgICAgICAgICB0aGlzLnBhcmFtc1twXSArICcnIDogJycpO1xuICAgICAgfSBcbiAgICAgIHJlcS5hdHRhY2goJ2ZpbGUnLCB0aGlzLnJzdHJlYW0gPyBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpIDogZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcVt0aGlzLmFwaS5tZXRob2QgPT09ICdHRVQnID8gJ3F1ZXJ5JyA6ICdzZW5kJ10odGhpcy5wYXJhbXMpO1xuICAgIH0gXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIHN0YXQgID0gcmF3LnN0YXR1cyxcbiAgICAgICAgcmVzICAgPSAocmF3LmJvZHkgJiYgcmF3LmJvZHkuZGVwbG95ciA/IHJhdy5ib2R5IDogcmF3KSxcbiAgICAgICAgZXJyb3IgPSAoKHN0YXQgIT09IDIwMCkgfHwgcmVzLmRlcGxveXIgJiYgIXJlcy5kZXBsb3lyLnJlc3BvbnNlLnN1Y2Nlc3MpO1xuXG4gICAgLy8gLS0gSGFuZGxlIGVycm9ycyAtLVxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmVzID0ge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSkgeyBcbiAgICAgICAgICByZXR1cm4gdXRpbHMuZ2V0KHRoaXMuZGVwbG95ci5yZXNwb25zZSwga2V5KTsgXG4gICAgICAgIH0sXG4gICAgICAgIGRlcGxveXI6IHsgICAgICAgICAgXG4gICAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbDogdGhpcy5hcGlbJ2NhbGwnXSxcbiAgICAgICAgICAgIGVycm9yQ29kZTogcmVzLmRlcGxveXIgPyByZXMuZGVwbG95ci5yZXNwb25zZS5lcnJvckNvZGUgOiBzdGF0LFxuICAgICAgICAgICAgZXJyb3I6IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3IgOiByZXMudGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgTG9nZ2VyLmVycm9yKCdlcnJvcigpJywgdGhpcy5hcGksIHJlcywgcmF3KTtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdlcnJvcigpJywgdGhpcy5hcGksIHJlcywgcmF3KTtcblxuICAgICAgLy8gLS0gbm90aWZ5IGdsb2JhbCBlcnJvcnMgZmlyc3QgKGlmIGFueSkgZm9yIHRoaXMgY2FsbCAtLSAgICAgIFxuICAgICAgaWYgKHRoaXMuZ2xvYmFsRXZ0cykge1xuICAgICAgICByYWlzZUdsb2JhbEVycm9ycyh0aGlzLmFwaVsnY2FsbCddLCByZXMpOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIC8vIC0tIHRyYW5hY3Rpb24gbGV2ZWwgSFRUUCBvciBEZXBsb3lSIGVycm9ycyBjb21lIG5leHQgLS0gICAgXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgcmVzKTtcbiAgICAgIHRoaXMuZW1pdCgnZGVwbG95ci1pbzonICsgcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlLCByZXMpO1xuICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QocmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogRXhwb3NlIGZvciBhIGNsZWFuZXIgY2xpZW50IGFwaSBpbnRvIERlcGxveVJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIEV4cG9zZXMgdGhlIGBEZXBsb3lSYCBvYmplY3QgZm9yIGV4dGVuZGluZy5cbiAgICpcbiAgICogYGBgdmFyIERlcGxveVIgPSByZXF1aXJlKCdkZXBsb3lyJykuRGVwbG95UjtgYGBcbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBUaGUgYERlcGxveVJgIG9iamVjdC5cbiAgICovICAgXG4gIERlcGxveVI6IERlcGxveVIsXG5cbiAgLyoqXG4gICAqIEV4cG9zZXMgdGhlIHN1cHBvcnRlZCBEZXBsb3lSIEFQSXMuXG4gICAqXG4gICAqIEBtZXRob2QgYXBpc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZsYXQgKG9wdGlvbmFsKSBpZiBgdHJ1ZWAgd2lsbCByZXR1cm4gYW4gYXJyYXkgb2YganVzdCB0aGUgXG4gICAqIEFQSSdzIGVuZHBvaW50IHByb3BlcnRpZXMsIGZvciBleGFtcGxlOiBcbiAgICogYGBgXG4gICAqIFsnL3IvdXNlci9sb2dpbicsICcvci91c2VyL2xvZ291dCcsICcvci91c2VyL2Fib3V0JywgLi4uXVxuICAgKiBgYGBcbiAgICogQHN0YXRpY1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKiBAcmV0dXJuIHtPYmplY3R8QXJyYXl9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLiAgICAgIFxuICAgKi8gIFxuICBhcGlzOiBmdW5jdGlvbihmbGF0KSB7XG4gICAgcmV0dXJuIGZsYXQgPyBPYmplY3Qua2V5cyhhcGlzKSA6IGFwaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBzdGF0aWMgbWV0aG9kIGZvciBjb25maWd1cmluZyBhbGwgRGVwbG95UiByZXF1ZXN0cy4gU2V0dGluZ3MgXG4gICAqIG1hZGUgaGVyZSBhcmUgYXBwbGllZCBnbG9iYWxseSBhY3Jvc3MgZXZlcnkgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBjb25maWd1cmVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9iamVjdCBsaXRlcmFsIGNvbmZpZ3VyYXRpb24gaGFzaC4gXG4gICAqIEBzdGF0aWNcbiAgICogQGNoYWluYWJsZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uZmlndXJlOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHsgZ2xvYmFsT3B0aW9ucy5zZXQoaSwgb3B0aW9uc1tpXSk7IH1cblxuICAgIC8vIGFzc2VydCBnbG9iYWwgY29va2llcyBhcmUgZW1wdHkgaWYgZ2xvYmFsIGBzdGlja3lgIGpzZXNzaW9uaWQgaXMgb2ZmXG4gICAgaWYgKCFnbG9iYWxPcHRpb25zLnN0aWNreSkgIHsgZ2xvYmFsT3B0aW9ucy5zZXQoJ2Nvb2tpZXMnLCBudWxsKTsgfVxuXG4gICAgLy8gdHVybiBnbG9iYWwgbG9nZ2luZyBvbnxvZmYgKG9mZiBieSBkZWZhdWx0KVxuICAgIExvZ2dlci5zZXRMZXZlbChnbG9iYWxPcHRpb25zLmxvZ2dpbmcgPyBMb2dnZXIuREVCVUcgOiBMb2dnZXIuT0ZGKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgSU8gcmVxdWVzdHMgdG8gYERlcGxveVJgLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGAgICBcbiAgICogICAgZGVwbG95ci5pbygnL3IvdXNlci9hYm91dCcpLmVuZChjYWxsYmFjayk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAbWV0aG9kIGlvXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgT25lIG9mIHRoZSBzdXBwb3J0ZWQgRGVwbG95UiBBUElzLlxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgaW86IGZ1bmN0aW9uKGFwaSkgeyAgXG4gICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHNpZ24gdGhlIHVzZXIgaW4gYnkgYXV0aGVudGljYXRpbmcgdGhlIGNyZWRlbnRpYWxzIFxuICAgKiB3aXRoIHRoZSBEZXBsb3lSIHNlcnZlci4gICBcbiAgICpcbiAgICogQG1ldGhvZCBhdXRoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VybmFtZSBTcGVjaWZpZXMgdGhlIHVzZXJuYW1lLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFzc3dvcmQgU3BlY2lmaWVzIHRoZSBwYXNzd29yZC5cbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBUaGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBEZXBsb3lSIHNlcnZlci4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICAgXG4gIGF1dGg6IGZ1bmN0aW9uKHVuLCBwdykge1xuICAgIHZhciBkYXRhID0geyB1c2VybmFtZTogdW4sIHBhc3N3b3JkOiBwdyB9O1xuICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvdXNlci9sb2dpbicpLmRhdGEoZGF0YSkuZW5kKCk7ICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBzaWduIHRoZSB1c2VyIGluIGJ5IGF1dGhlbnRpY2F0aW5nIHRoZSBjcmVkZW50aWFscyBcbiAgICogd2l0aCB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiAgICBkZXBsb3lyLnNjcmlwdCgnL3Rlc3R1c2VyL3Jvb3QvcmVkdWNlLlInKVxuICAgKiAgICBkZXBsb3lyLnNjcmlwdCh7IGZpbGVuYW1lOiAncmVkdWNlLlInLCBhdXRob3I6ICd0ZXN0dXNlcicsXG4gICAqICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiAncm9vdCd9KVxuICAgKiAgICBkZXBsb3lyLnNjcmlwdCgncmVkdWNlLlInLCAndGVzdHVzZXInLCAncm9vdCcpXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KCcvdGVzdHVzZXIvcm9vdC9yZWR1Y2UuUicsIHByb2plY3QpICAgICBcbiAgICogYGBgICAgXG4gICAqXG4gICAqIEBtZXRob2Qgc2NyaXB0XG4gICAqIEBwYXJhbSB7QXJndW1lbnRzfSBhcmd1bWVudHMgQXJndW1lbnRzIHRvIGRlZmluZSB0aGUgZnVsbHkgcXVhbGlmaWVkIHNjcmlwdCBcbiAgICogZm9yIGV4ZWN1dGlvbi5cbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBUaGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBEZXBsb3lSIHNlcnZlci4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICAgICBcbiAgc2NyaXB0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IHV0aWxzLnNpZ25hdHVyZShhcmd1bWVudHMpLFxuICAgICAgICBvcHRzID0gYXJncy5vcHRzLFxuICAgICAgICBhcGkgID0gYXJncy5hcGk7ICBcblxuICAgIC8vIGNvbnZlbmllbmNlIC0gaWYgdGhlIHByb2plY3QgaXMgYSBib29sZW4gYHRydWVgIHJhdGhlciB0aGFuIGEgcGlkLCBmaXJzdFxuICAgIC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCB0aGVuIHByZXBhcmUgdGhlIHByb2plY3QgYXBpIGNhbGwgdG8gZXhlY3V0ZVxuICAgIGlmIChhcmdzLmNyZWF0ZSkge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2NyZWF0ZScpXG4gICAgICAgICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvamVjdDogcmVzLmdldCgncHJvamVjdCcpLnByb2plY3QgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLmlvKGFwaSlcbiAgICAgICAgICAgICAgIC5kYXRhKG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpKS5kYXRhKG9wdHMpO1xuICAgIH1cbiAgfSwgIFxuXG4gIC8qKlxuICAgKiBSdW4gYW4gc2VyaWVzIG9mIGNoYWluZWQgRGVwbG95UiByZXF1ZXN0cyBpbiBzZXF1ZW5jZSBhbmQgd2l0aG91dCBvdmVybGFwLiAgICAgICBcbiAgICpcbiAgICogQG1ldGhvZCBwaXBsaW5lXG4gICAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzIFNwZWNpZmllcyB0aGUgbGlzdCBvZiBgRnVuY3Rpb25gIHRhc2tzLlxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgb3JcbiAgICogXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIHBpcGVsaW5lOiBmdW5jdGlvbihjaGFpbnMpIHsgICAgICBcbiAgICB2YXIgZGVwbG95ciAgPSB0aGlzLFxuICAgICAgICBkZWZlcnJlZCA9IEQoKSxcbiAgICAgICAgcSAgICAgICAgPSBuZXcgUXVldWUoKSxcbiAgICAgICAgcmVzdWx0cyAgPSBbXSxcbiAgICAgICAgZXJyb3JzICAgPSBbXSxcbiAgICAgICAgTk9PUCAgICAgPSBudWxsLCAvLyBOT09QIGVycm9yc3xyZXN1bHRzIGZvciBbYV0gYmF0Y2ggcmVxdWVzdCBjaGFpblxuICAgICAgICBvcmlnICAgICA9IHtcbiAgICAgICAgICBzdGlja3k6IGdsb2JhbE9wdGlvbnMuc3RpY2t5LFxuICAgICAgICAgIGNvb2tpZXM6IGdsb2JhbE9wdGlvbnMuY29va2llc1xuICAgICAgICB9O1xuXG4gICAgLy8gbWFrZSBhIGNvcHlcbiAgICBjaGFpbnMgPSBjaGFpbnMuc2xpY2UoMCk7XG5cbiAgICAvLyB0dXJuIHN0aWNreSBzZXNzaW9uIGZvciB0aGVzZSByZXF1ZXN0IChoYWNreSlcbiAgICBkZXBsb3lyLmNvbmZpZ3VyZSggeyBzdGlja3k6IHRydWUgfSk7XG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBxLmFkZChmdW5jdGlvbigpIHsgXG4gICAgICAgIGNoYWlucy5zaGlmdCgpLmRyYWluKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oY2hhaW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goY2hhaW4pOyAgXG4gICAgICAgICAgZXJyb3JzLnB1c2goTk9PUCk7ICAgICAgICAgICBcbiAgICAgICAgICBpZiAocS5pc0VtcHR5KCkpIHsgXG4gICAgICAgICAgICBkZXBsb3lyLmNvbmZpZ3VyZShvcmlnKTsgLy8gcmVzZXRcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoeyByZXN1bHRzOiByZXN1bHRzLCBlcnJvcnM6IGVycm9ycyB9KTsgXG4gICAgICAgICAgfSAgXG5cbiAgICAgICAgICBxLnRha2UoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7ICAgICAgICAgIFxuICAgICAgICAgIHJlc3VsdHMucHVzaChOT09QKTsgXG4gICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAvLyByZWplY3Rpb25zIGFyZSBvbmx5IG1ldCB3aGVuIHRoZXkgW2FsbF0gZmFpbFxuICAgICAgICAgIGlmIChxLmlzRW1wdHkoKSAmJiByZXN1bHRzLmxlbmd0aCA9PT0gMCkgeyBcbiAgICAgICAgICAgIGRlcGxveXIuY29uZmlndXJlKG9yaWcpOyAvLyByZXNldFxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9ycyk7IFxuICAgICAgICAgIH0gIFxuICAgICAgICAgIHEudGFrZSgpO1xuICAgICAgICB9KTsgICAgICAgXG4gICAgICB9LCBudWxsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IHRvIGEgc2VxIHF1ZXVlIGZvciBiZXR0ZXIgaGFuZGxpbmdcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2hhaW5zLmxlbmd0aDsgaSsrKSB7IGFkZCgpOyB9XG5cbiAgICAvLyBzdGFydDogZGVxdWV1ZSBmaXJzdCBpdGVtIGFuZCBydW4gaXRcbiAgICBxLnRha2UoKTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgc3RyZWFtIEFQSSBpcyB1bmlxdWUgd2l0aGluIHRoZSBEZXBsb3lSIEFQSSBhcyBpdCBzdXBwb3J0cyBwdXNoIFxuICAgKiBub3RpZmljYXRpb25zIGZyb20gdGhlIERlcGxveVIgc2VydmVyIHRvIGNsaWVudCBhcHBsaWNhdGlvbnMuIE5vdGlmaWNhdGlvbnMgXG4gICAqIGNvcnJlc3BvbmQgdG8gZGlzY3JldGUgZXZlbnRzIHRoYXQgb2NjdXIgd2l0aGluIHRoZSBEZXBsb3lSIHNlcnZlci4gVGhlcmUgXG4gICAqIGFyZSBmb3VyIGRpc3RpbmN0IGV2ZW50IGNhdGVnb3JpZXM6XG4gICAqIFxuICAgKiAtIFN0cmVhbSBMaWZlY3ljbGUgZXZlbnRzXG4gICAqIC0gRXhlY3V0aW9uIGV2ZW50c1xuICAgKiAtIEpvYiBMaWZlY3ljbGUgZXZlbnRzXG4gICAqIC0gTWFuYWdlbWVudCBldmVudHNcbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqIGRlcGxveXIuZXMoeyB1c2VybmFtZTogJ3Rlc3R1c2VyJywgcGFzc3dvcmQ6ICdzZWNyZXQnIH0pXG4gICAqICAgIC8vIC0tIGNvbm5lY3Rpb24gY2hvaWNlcyBmb3IgZXZlbnQgdHlwZXMgLS1cbiAgICogICAgLm1hbmFnZW1lbnQoKSAgLy8uc2Vzc2lvbigpIHwgLmFsbCgpIHwgLnByb2plY3QoaWQpIHwgLmpvYihpZClcbiAgICogICAgLm9uKCdlczpncmlkSGVhcnRiZWF0JywgZnVuY3Rpb24oZGF0YSkge1xuICAgKiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT0nKTtcbiAgICogICAgICAgIGNvbnNvbGUubG9nKCdlczpncmlkSGVhcnRiZWF0Jyk7XG4gICAqICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpOyAgICAgICAgICBcbiAgICogICAgIH0pXG4gICAqICAgICAub3BlbigpO1xuICAgKiBgYGBcbiAgICogXG4gICAqIEBtZXRob2QgZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9iamVjdCBsaXRlcmFsIGNvbmZpZ3VyYXRpb24gaGFzaC4gXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGEgbmV3IGBFdmVudFN0cmVhbWAgZm9yIGJpbmRpbmcuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGVzOiBmdW5jdGlvbihjcmVkZW50aWFscykge1xuICAgIHZhciBhdXRoICAgPSAoY3JlZGVudGlhbHMgJiYgY3JlZGVudGlhbHMudXNlcm5hbWUgJiYgY3JlZGVudGlhbHMucGFzc3dvcmQpLFxuICAgICAgICBzdHJlYW0gPSBFdmVudFN0cmVhbS5uZXcoZ2xvYmFsT3B0aW9ucy5ob3N0LCB7IHlpZWxkOiBhdXRoIH0pO1xuXG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIHZhciBydXNlciA9IHRoaXMuYXV0aChjcmVkZW50aWFscy51c2VybmFtZSwgY3JlZGVudGlhbHMucGFzc3dvcmQpOyAgICAgIFxuICAgICAgcnVzZXIuZW5zdXJlKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgc3RyZWFtLnNoYXJlKHJ1c2VyLmdldENvb2tpZXMoKSk7XG4gICAgICAgIHN0cmVhbS5mbHVzaCgpOyBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJlYW07XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGEgRGVwbG95Ui1zcGVjaWZpYyBlbmNvZGVkIFIgb2JqZWN0IHRvIGJlIFxuICAgKiBzZW50IGFzIGlucHV0IHBhcmFtZXRlcnMgdG8gYW4gUiBzY3JpcHQuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQubG9naWNhbCgnbG9naWNhbF9uYW1lJywgdHJ1ZSk7XG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5udW1lcmljKCdudW1lcmljX25hbWUnLCAxMC41KTtcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0LmludGVnZXIoJ2ludGVnZXJfbmFtZScsIDUpO1xuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQuY2hhcmFjdGVyKCdjaGFyYWN0ZXJfbmFtZScsICdIZWxsbycpO1xuICAgKiAgICAvLyBlY3QuLi5cbiAgICogYGBgXG4gICAqIEBwcm9wZXJ0eSBSSW5wdXRcbiAgICogQHN0YXRpY1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgUklucHV0OiB7XG4gICAgbnVtZXJpYzogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubnVtZXJpYygpO1xuICAgIH0sXG5cbiAgICBpbnRlZ2VyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5pbnRlZ2VyKCk7XG4gICAgfSxcblxuICAgIGxvZ2ljYWw6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWwoKTtcbiAgICB9LFxuXG4gICAgY2hhcmFjdGVyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXIoKTtcbiAgICB9LFxuXG4gICAgZGF0ZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuZGF0ZSgpO1xuICAgIH0sXG5cbiAgICBwb3NpeGN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5wb3NpeGN0KCk7XG4gICAgfSwgIFxuXG4gICAgbnVtZXJpY1ZlY3RvcjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljVmVjdG9yKCk7XG4gICAgfSwgXG5cbiAgICBpbnRlZ2VyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5pbnRlZ2VyVmVjdG9yKCk7XG4gICAgfSxcblxuICAgIGxvZ2ljYWxWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5sb2dpY2FsVmVjdG9yKCk7XG4gICAgfSxcblxuICAgIGNoYXJhY3RlclZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3RlclZlY3RvcigpO1xuICAgIH0sICBcblxuICAgIGRhdGVWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRlVmVjdG9yKCk7XG4gICAgfSwgIFxuXG4gICAgcG9zaXhjdFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLnBvc2l4Y3RWZWN0b3IoKTtcbiAgICB9LFxuXG4gICAgbGlzdDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubGlzdCgpOyBcbiAgICB9LFxuXG4gICAgZGF0YWZyYW1lOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuZGF0YWZyYW1lKCk7XG4gICAgfSxcbiAgXG4gICAgZmFjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGxldmVscywgbGFiZWxzKSB7XG4gICAgICB2YXIgb3B0cyA9IHsgbGV2ZWxzOiBsZXZlbHMsIGxhYmVsczogbGFiZWxzIH07XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSwgb3B0cykuZmFjdG9yKCk7XG4gICAgfSxcblxuICAgIG9yZGVyZWQ6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgbGV2ZWxzLCBsYWJlbHMpIHtcbiAgICAgIHZhciBvcHRzID0geyBsZXZlbHM6IGxldmVscywgbGFiZWxzOiBsYWJlbHMgfTtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlLCBvcHRzKS5vcmRlcmVkKCk7XG4gICAgfSxcblxuICAgIG51bWVyaWNNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljTWF0cml4KCk7XG4gICAgfSxcblxuICAgIGludGVnZXJNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5pbnRlZ2VyTWF0cml4KCk7XG4gICAgfSxcblxuICAgIGxvZ2ljYWxNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5sb2dpY2FsTWF0cml4KCk7XG4gICAgfSxcblxuICAgIGNoYXJhY3Rlck1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyTWF0cml4KCk7XG4gICAgfVxuICB9XG59O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVJsY0d4dmVYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvaFhHNGdLaUJEYjNCNWNtbG5hSFFnS0VNcElESXdNVEF0TWpBeE5pd2dUV2xqY205emIyWjBJRU52Y25CdmNtRjBhVzl1WEc0Z0tseHVJQ29nVkdocGN5QndjbTluY21GdElHbHpJR3hwWTJWdWMyVmtJSFJ2SUhsdmRTQjFibVJsY2lCMGFHVWdkR1Z5YlhNZ2IyWWdWbVZ5YzJsdmJpQXlMakFnYjJZZ2RHaGxYRzRnS2lCQmNHRmphR1VnVEdsalpXNXpaUzRnVkdocGN5QndjbTluY21GdElHbHpJR1JwYzNSeWFXSjFkR1ZrSUZkSlZFaFBWVlJjYmlBcUlFRk9XU0JGV0ZCU1JWTlRJRTlTSUVsTlVFeEpSVVFnVjBGU1VrRk9WRmtzSUVsT1EweFZSRWxPUnlCVVNFOVRSU0JQUmlCT1QwNHRTVTVHVWtsT1IwVk5SVTVVTEZ4dUlDb2dUVVZTUTBoQlRsUkJRa2xNU1ZSWklFOVNJRVpKVkU1RlUxTWdSazlTSUVFZ1VFRlNWRWxEVlV4QlVpQlFWVkpRVDFORkxpQlFiR1ZoYzJVZ2NtVm1aWElnZEc4Z2RHaGxYRzRnS2lCQmNHRmphR1VnVEdsalpXNXpaU0F5TGpBZ0tHaDBkSEE2THk5M2QzY3VZWEJoWTJobExtOXlaeTlzYVdObGJuTmxjeTlNU1VORlRsTkZMVEl1TUNrZ1ptOXlJRzF2Y21VZ1hHNGdLaUJrWlhSaGFXeHpMbHh1SUNvdlhHNWNiblpoY2lCM2FXNGdJQ0FnSUNBZ0lDQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlrc0lDQWdYRzRnSUNBZ2NtVnhkV1Z6ZENBZ0lDQWdQU0J5WlhGMWFYSmxLQ2R6ZFhCbGNtRm5aVzUwSnlrc1hHNGdJQ0FnUkNBZ0lDQWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDZGtMbXB6Snlrc1hHNGdJQ0FnWm5NZ0lDQWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDZG1jeWNwTEZ4dUlDQWdJR0Z3YVhNZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWhjR2x6TG1wemIyNG5LU3dnWEc0Z0lDQWdSWFpsYm5SVGRISmxZVzBnUFNCeVpYRjFhWEpsS0NjdUwyeHBZaTlsY3ljcExGeHVJQ0FnSUhWMGFXeHpJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlzYVdJdmRYUnBiSE1uS1N4Y2JpQWdJQ0JNWVc1bklDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZiR2xpTDJ4aGJtY25LU3dnSUNCY2JpQWdJQ0JNYjJkblpYSWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZiR2xpTDJ4dloyZGxjaWNwTENBZ0lGeHVJQ0FnSUZGMVpYVmxJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlzYVdJdmNYVmxkV1VuS1N4Y2JpQWdJQ0JGYldsMGRHVnlJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZiR2xpTDJWdGFYUjBaWEluS1N4Y2JpQWdJQ0JsYm1OdlpHVnlJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZiR2xpTDJWdVkyOWtaWEluS1N4Y2JpQWdJQ0JDWVhObElDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZiR2xpTDNObGJHWnBjMmduS1M1Q1lYTmxMRnh1SUNBZ0lGSkpibkIxZENBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5c2FXSXZjbWx1Y0hWMEp5a3NJQ0FnSUZ4dUlDQWdJRkpKYm5CMWRITWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOXNhV0l2Y21sdWNIVjBjeWNwTEZ4dUlDQWdJRzFsY21kbElDQWdJQ0FnSUQwZ2RYUnBiSE11YldWeVoyVTdYRzVjYmk4cVhHNGdLaUJVZFhKdUlHZHNiMkpoYkNCc2IyZG5hVzVuSUc5bVppQmllU0JrWldaaGRXeDBYRzRnS2k5Y2JreHZaMmRsY2k1elpYUk1aWFpsYkNoTWIyZG5aWEl1VDBaR0tUdGNibHh1THlwY2JpQXFJRWRzYjJKaGJDQnZjSFJwYjI1eklIUm9ZWFFnY0dWeWMybHpkQ0IwYUhKdmRXZG9JR0ZzYkNCRVpYQnNiM2xTSUhKbGNYVmxjM1J6TGx4dUlDb3ZYRzUyWVhJZ1oyeHZZbUZzVDNCMGFXOXVjeUE5SUhzZ1hHNGdJR052Y25NNklHWmhiSE5sTEZ4dUlDQnNiMmRuYVc1bk9pQm1ZV3h6WlN4Y2JpQWdjM1JwWTJ0NU9pQm1ZV3h6WlN4Y2JpQWdZMjl2YTJsbGN6b2diblZzYkN4Y2JpQWdhRzl6ZERvZ0p5Y3NYRzRnSUdGc2JHOTNVMlZzWmxOcFoyNWxaRk5UVEVObGNuUTZJR1poYkhObExGeHVJQ0J0WVhoU1pYRjFaWE4wY3pvZ2JuVnNiQ3dnTHk4Z2JtOGdjMjlqYTJWMElIQnZiMnhwYm1jZ2FXNGdhSFIwY0M1QloyVnVkRnh1SUNCbGRtVnVkSE02ZTMwc1hHNGdJSE5sZERvZ1puVnVZM1JwYjI0b2NISnZjQ3dnZG1Gc2RXVXBJSHNnWEc0Z0lDQWdhV1lnS0hCeWIzQWdJVDA5SUNkelpYUW5LU0I3SUZ4dUlDQWdJQ0FnYVdZZ0tIQnliM0FnUFQwOUlDZG9iM04wSnlBbUppQjJZV3gxWlNrZ2V5QWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdMeThnUW1VZ2JXOXlaU0JtYjNKbmFYWnBibWNnYjI0Z2RHaGxJR1Z1ZEdWeVpXUWdSR1Z3Ykc5NVVpQW5aVzVrY0c5cGJuUW5PbHh1SUNBZ0lDQWdJQ0FnTHk4Z0lDQXRJR2gwZEhBb2N5azZMeTlrYUc5emREcHdiM0owWEc0Z0lDQWdJQ0FnSUNBdkx5QWdJQzBnYUhSMGNDaHpLVG92TDJSb2IzTjBPbkJ2Y25RdlpHVndiRzk1Y2x4dUlDQWdJQ0FnSUNBZ0x5OGdJQ0F0SUdSb2IzTjBPbkJ2Y25SY2JpQWdJQ0FnSUNBZ0lDOHZJQ0FnTFNCa2FHOXpkRHB3YjNKMEwyUmxjR3h2ZVhJZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lIWmhiSFZsSUQwZ2RtRnNkV1V1Y21Wd2JHRmpaU2d2WEZ3dktpUjhYRnd2S21SbGNHeHZlWEpjWEM4cUpDOHNJQ2NuS1R0Y2JpQWdJQ0FnSUNBZ0lIWmhiSFZsSUQwZ0tHNWxkeUJTWldkRmVIQW9KMTRvYUhSMGNIeG9kSFJ3Y3lrNkx5OG5MQ0FuYVNjcEtTNTBaWE4wS0haaGJIVmxLU0EvSUhaaGJIVmxJRG9nWEc0Z0lDQWdJQ0FnSUNBZ0lDQW5hSFIwY0Rvdkx5Y2dLeUIyWVd4MVpUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkR2hwYzF0d2NtOXdYU0E5SUhaaGJIVmxPeUJjYmlBZ0lDQjlJRnh1SUNCOVhHNTlPMXh1WEc0dktseHVJQ29nVkdobElIUnZjQzFzWlhabGJDQkVaWEJzYjNsU0lFRlFTU0J5WlhOd2IyNXpaU0JsYm5ScGRHbGxjeTVjYmlBcUwxeHVkbUZ5SUZSUFVFeEZWa1ZNWDBWT1ZFbFVTVVZUSUQwZ1cxeHVJQ0FuZFhObGNpY3NJRnh1SUNBbmNISnZhbVZqZENjc0lGeHVJQ0FuZDI5eWEzTndZV05sSnl3Z1hHNGdJQ2RsZUdWamRYUnBiMjRuTENCY2JpQWdKMlJwY21WamRHOXllU2NzSUZ4dUlDQW5jbVZ3YjNOcGRHOXllU2NzSUZ4dUlDQW5jR0ZqYTJGblpYTW5JRnh1WFR0Y2JseHVMeXBjYmlBcUlFNXZkR2xtZVNCbmJHOWlZV3dnU1U4Z1pYSnliM0lnWlhabGJuUnpJR0ZqWTJWemMybGliR1VnWW5rZ1lXeHNJSE4xWW5OamNtbGlaWEp6SUdGamNtOXpjeUJ5WlhGMVpYTjBjeTVjYmlBcUwxeHVablZ1WTNScGIyNGdjbUZwYzJWSGJHOWlZV3hGY25KdmNuTW9ZWEJwTENCeVpYTXBJSHRjYmlBZ2RtRnlJR052WkdVZ0lDQWdQU0J5WlhNdVpHVndiRzk1Y2lBL0lISmxjeTVrWlhCc2IzbHlMbkpsYzNCdmJuTmxMbVZ5Y205eVEyOWtaU0E2SUhKbGN5NXpkR0YwZFhNc1hHNGdJQ0FnSUNCamIyNTBaWGgwSUQwZ2RHaHBjenRjYmx4dUlDQXZMeUF0TFNCbmJHOWlZV3dnWlhabGJuUnpJR2xtSUhCeWIzWnBaR1ZrSUMwdFhHNGdJR2xtSUNobmJHOWlZV3hQY0hScGIyNXpMbVYyWlc1MGN5a2dlMXh1SUNBZ0lHbG1JQ2doY21WekxtUmxjR3h2ZVhJcElIdGNiaUFnSUNBZ0lISmxjeUE5SUhKbGN5NTBaWGgwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5SbGVIUWdQU0JuYkc5aVlXeFBjSFJwYjI1ekxtVjJaVzUwY3k1amRIZ2dmSHdnWTI5dWRHVjRkRHRjYmx4dUlDQWdJQzh2SUMwdElHZGxibVZ5WVd3Z1oyeHZZbUZzSUdaaGFXeDFjbVVnTFMxY2JpQWdJQ0JwWmlBb1oyeHZZbUZzVDNCMGFXOXVjeTVsZG1WdWRITXVaWEp5YjNJcElIdGNiaUFnSUNBZ0lHZHNiMkpoYkU5d2RHbHZibk11WlhabGJuUnpMbVZ5Y205eUxtRndjR3g1S0dOdmJuUmxlSFFzSUZ0aGNHa3NJSEpsYzEwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklDMHRJRWhVVkZBZ2IzSWdSR1Z3Ykc5NVVpQm5iRzlpWVd3Z1pYSnliM0p6SUMwdElDQWdJRnh1SUNBZ0lHbG1JQ2huYkc5aVlXeFBjSFJwYjI1ekxtVjJaVzUwYzF0amIyUmxYU2tnZTF4dUlDQWdJQ0FnWjJ4dlltRnNUM0IwYVc5dWN5NWxkbVZ1ZEhOYlkyOWtaVjB1WVhCd2JIa29ZMjl1ZEdWNGRDd2dXMkZ3YVN3Z2NtVnpYU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYmk4cUtseHVJQ29nVkdobElHQkVaWEJzYjNsU1lDQnlaWEYxWlhOMElHTnNZWE56SUdseklHRWdkWFJwYkdsMGVTQjBhR0YwSUdKeWIydGxjbk1nU0ZSVVVDQnlaWEYxWlhOMGN5QjBhSEp2ZFdkb0lHRWdYRzRnS2lCemFXMXdiR2xtYVdWa0lHWnNkV2xrSUdsdWRHVnlabUZqWlNCMGJ5QkVaWEJzYjNsU0xseHVJQ3BjYmlBcUlFQnRiMlIxYkdVZ1pHVndiRzk1Y2x4dUlDb2dRR1p2Y2lCa1pYQnNiM2x5WEc0Z0tpOWNiblpoY2lCRVpYQnNiM2xTSUQwZ1FtRnpaUzVsZUhSbGJtUW9SVzFwZEhSbGNpd2dVa2x1Y0hWMGN5d2dlMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlVhR1VnWUVSbGNHeHZlVkpnSUZKbGNYVmxjM1FnWTJ4aGMzTWdhWE1nWVNCMWRHbHNhWFI1SUhSb1lYUWdZbkp2YTJWeWN5QklWRlJRSUhKbGNYVmxjM1J6SUhSb2NtOTFaMmdnWEc0Z0lDQXFJR0VnYzJsdGNHeHBabWxsWkNCbWJIVnBaQ0JwYm5SbGNtWmhZMlVnZEc4Z1JHVndiRzk1VWk1Y2JpQWdJQ29nWEc0Z0lDQXFJRUJqYkdGemN5QmNiaUFnSUNvZ1FHTnZibk4wY25WamRHOXlYRzRnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCaGNHa2dWR2hsSUVSbGNHeHZlVklnUVZCSlhHNGdJQ0FxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JzYVc1cklGUm9aU0J2WW1wbFkzUWdiR2wwWlhKaGJDQmpiMjUwWVdsdWFXNW5JSFJvWlNCd2NtVjJhVzkxY3lCeVpYRjFaWE4wTGx4dUlDQWdLaUJBWVhCcElIQnlhWFpoZEdWY2JpQWdJQ292WEc0Z0lHbHVhWFJwWVd4cGVtVTZJR1oxYm1OMGFXOXVJR2x1YVhScFlXeHBlbVVvWVhCcExDQnNhVzVyS1NCN1hHNGdJQ0FnSUVWdGFYUjBaWEl1YVc1cGRHbGhiR2w2WlM1allXeHNLSFJvYVhNc0lIdDlLVHRjYmlBZ1hHNGdJQ0FnSUhaaGNpQnZjSFJ6SUQwZ1oyeHZZbUZzVDNCMGFXOXVjenRjYmx4dUlDQWdJQ0JwWmlBb0lXRndhWE5iWVhCcFhTa2dleUIwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMGx1ZG1Gc2FXUWdRVkJKSUZ3aUp5QXJJR0Z3YVNBcklDZGNJaWNwT3lCOVhHNGdJQ0FnWEc0Z0lDQWdJSFJvYVhNdVlYQnBJQ0FnSUNBZ0lDQTlJRzFsY21kbEtIc2dKMk5oYkd3bk9pQmhjR2tnZlN3Z1lYQnBjMXRoY0dsZEtUc2dJQ0FnWEc0Z0lDQWdJSFJvYVhNdWJHbHVheUFnSUNBZ0lDQTlJR3hwYm1zZ2ZId2dlMzA3WEc0Z0lDQWdJSFJvYVhNdWNTQWdJQ0FnSUNBZ0lDQTlJSFJvYVhNdWJHbHVheTV4ZFdWMVpTQjhmQ0J1WlhjZ1VYVmxkV1VvS1R0Y2JpQWdJQ0FnZEdocGN5NWtaV1psY25KbFpDQWdJRDBnZEdocGN5NXNhVzVyTG1SbFptVnljbVZrSUh4OElFUW9LVHRjYmlBZ0lDQWdkR2hwY3k1amIyOXJhV1Z6SUNBZ0lEMGdkR2hwY3k1c2FXNXJMbU52YjJ0cFpYTTdYRzRnSUNBZ0lIUm9hWE11Ykc5bloyVnlJQ0FnSUNBOUlFeHZaMmRsY2k1blpYUW9ZWEJwTENCTWIyZG5aWEl1VDBaR0tUc2dMeThnZEhKaGJuTmhZM1JwYjI0dGJHVjJaV3dnYkc5bloybHVaMXh1SUNBZ0lDQjBhR2x6TG5CaGNtRnRjeUFnSUNBZ1BTQjdmVHRjYmlBZ0lDQWdkR2hwY3k1cGJuQjFkSE1nSUNBZ0lEMGdXMTA3SUM4dklISnBibkIxZEhNZ2JHbHpkQ0JjYmlBZ0lDQWdkR2hwY3k1dmRYUndkWFJ6SUNBZ0lEMGdXMTA3SUM4dklISnZkWFJ3ZFhRZ2IySnFaV04wSUd4cGMzUmNiaUFnSUNBZ2RHaHBjeTV5YzNSeVpXRnRJQ0FnSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJSFJvYVhNdVpHVnNZWGxsWkNBZ0lDQTlJR1poYkhObE8xeHVJQ0FnSUNCMGFHbHpMbWRzYjJKaGJFVjJkSE1nUFNCMGNuVmxPeUF2THlCemRYQndjbVZ6YzN4eVlXbHpaU0JuYkc5aVlXd2daWFpsYm5SeklHWnZkQ0IwYUdseklHQnBiMkFnSUNBZ0lGeHVJQ0FnSUNCMGFHbHpMbVpwYkdVZ0lDQWdJQ0FnUFNCdWRXeHNPeUJjYmlBZ0lDQWdkR2hwY3k1bGJuUnBkR2xsY3lBZ0lEMGdiblZzYkRzZ1hHNGdJQ0FnSUhSb2FYTXVhVzlHYVd4MFpYSWdJQ0E5SUdaMWJtTjBhVzl1S0NrZ2V5QnlaWFIxY200Z2RISjFaVHNnZlR0Y2JseHVJQ0FnSUNBdkx5QndjbVZ6WlhRZ1pHVndiRzk1Y2lkeklHRnpjMmxuYm1Wa0lISmxjM0J2Ym5ObElHWnZjbTFoZENCbWIzSWdZSFJvYVhOZ0lHRndhVnh1SUNBZ0lDQjBhR2x6TG1SaGRHRW9leUJtYjNKdFlYUTZJSFJvYVhNdVlYQnBMbVp2Y20xaGRDQjlLVHRjYmx4dUlDQWdJQ0F2THlCM2NtRndJSE4xY0dWeVlXZGxiblFnWm05eUlIUm9aU0JvWldGMmVTQnNhV1owYVc1bklDQWdJQ0JjYmlBZ0lDQWdkR2hwY3k1eVpYRWdQU0JjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkRnQwYUdsekxtRndhUzV0WlhSb2IyUXVkRzlNYjNkbGNrTmhjMlVvS1Ywb2IzQjBjeTVvYjNOMElDc2dKeTlrWlhCc2IzbHlKeUFySUdGd2FTazdYRzRnSUNBZ0lIUm9hWE11Y21WeExuUnBiV1Z2ZFhRb01qQWdLaUEyTUNBcUlERXdNREFwT3lBdkx5QmtaV1poZFd4MElIUnBiV1Z2ZFhRZ0xTMCtJREl3SUcxcGJuVjBaWE5jYmx4dUlDQWdJQ0F2THlCQmJHd2dRMDlTVXlCa1pYQnNiM2x5SUdOaGJHeHpJSEpsY1hWcGNtVWdjM1JwWTJ0NUlITmxjM05wYjI1elhHNGdJQ0FnSUdsbUlDaDNhVzRnSmlZZ1oyeHZZbUZzVDNCMGFXOXVjeTVqYjNKektTQjdJSFJvYVhNdWNtVnhMbmRwZEdoRGNtVmtaVzUwYVdGc2N5Z3BPeUI5WEc1Y2JpQWdJQ0FnTHk4Z1RtOWtaUzVxY3lBdElHRmpZMlZ6Y3lCaGJpQlRVMHdnWlc1a2NHOXBiblFnZDJsMGFDQnpaV3htSUhOcFoyNWxaQ0JqWlhKMGN5Qm1iM0lnZEdWemRHbHVaM3hrWlhaY2JpQWdJQ0FnYVdZZ0tDRjNhVzRnSmlZZ1oyeHZZbUZzVDNCMGFXOXVjeTVoYkd4dmQxTmxiR1pUYVdkdVpXUlRVMHhEWlhKMEtTQjdYRzRnSUNBZ0lDQWdJSEJ5YjJObGMzTXVaVzUyTGs1UFJFVmZWRXhUWDFKRlNrVkRWRjlWVGtGVlZFaFBVa2xhUlVRZ1BTQW5NQ2M3SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdmVnh1SUNCOUxGeHVYRzRnSUM4cUtseHVJQ0FnS2lCQ2FXNWtjeUIwYUdVZ2MyTnZjR1VnWTI5dWRHVjRkQ0JtYjNJZ2RHaGxJR052Ym1acFozVnlaV1FnWUM1bGJtUW9LV0FnWVc1a0lHQXVaWEp5YjNJb0tXQWdaWFpsYm5RZ0lDQWdYRzRnSUNBcUlHaGhibVJzWlhJZ1kyRnNiR0poWTJ0eklHOXVJSFJvYVhNZ2NtVnhkV1Z6ZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dRRzFsZEdodlpDQmpkSGhjYmlBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHTnZiblJsZUhRZ1ZHaGxJR0IwYUdsellDQnZZbXBsWTNRZ1ptOXlJSFJvWlNCamIyNW1hV2QxY21Wa0lHQXVaVzVrS0NsZ0lHRnVaRnh1SUNBZ0tpQmdMbVZ5Y205eUtDbGdJR1YyWlc1MElHaGhibVJzWlhKeklHOXVJSFJvYVhNZ2NtVnhkV1Z6ZEM1Y2JpQWdJQ29nUUdGd2FTQndkV0pzYVdNZ0lDQmNiaUFnSUNvdklGeHVJQ0JqZEhnNklHWjFibU4wYVc5dUlDaGpiMjUwWlhoMEtTQjdYRzRnSUNBZ2RHaHBjeTV6WTI5d1pTQTlJR052Ym5SbGVIUWdmSHdnZEdocGN6dGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOUxGeHVYRzRnSUM4cUtseHVJQ0FnS2lCVGRYQndjbVZ6Y3lCdmNpQnlZV2x6WlNCbmJHOWlZV3dnWlhabGJuUnpJR1p2Y2lCMGFHbHpJR0JwYjJBZ2NtVnhkV1Z6ZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dRRzFsZEdodlpDQm5iRzlpWVd4Y2JpQWdJQ29nUUhCaGNtRnRJSHRDYjI5c1pXRnVmU0J5WVdselpTQmdkSEoxWldBZ2RHOGdjbUZwYzJVZ1oyeHZZbUZzSUdWMlpXNTBjeXdnWUdaaGJITmxZQ0IwYnlCemRYQnlaWE56SUZ4dUlDQWdLaUJsZG1WdWRDQm1hWEpwYm1jZ1oyeHZZbUZzYkhrdVhHNGdJQ0FxSUVCeVpYUjFjbTRnZTBSbGNHeHZlVko5SUdadmNpQmphR0ZwYm1sdVp5NWNiaUFnSUNvZ1FHRndhU0J3ZFdKc2FXTmNiaUFnSUNvdklDQmNiaUFnWjJ4dlltRnNPaUJtZFc1amRHbHZiaWh5WVdselpTa2dlMXh1SUNBZ0lIUm9hWE11WjJ4dlltRnNSWFowY3lBOUlFeGhibWN1YVhOQ2IyOXNaV0Z1S0hKaGFYTmxLU0EvSUhKaGFYTmxJRG9nZEdocGN5NW5iRzlpWVd4RmRuUnpPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMHNJQ0JjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVYwY21sbGRtVWdaR1YwWVdsc2N5QmhZbTkxZENCMWMyVnlMbHh1SUNBZ0tpQWdJRnh1SUNBZ0tpQkFiV1YwYUc5a0lHRmliM1YwWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMGdaR1YwWVdsc2N5QmhZbTkxZENCMWMyVnlJRzkwYUdWeWQybGxjeUJnYm5Wc2JHQXVYRzRnSUNBcUlFQmhjR2tnY0hWaWJHbGpJQ0FnWEc0Z0lDQXFMMXh1SUNCaFltOTFkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZG1GeUlISmxjM0J2Ym5ObElEMGdkR2hwY3k1eVpYRXVjbVZ6TzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVlYQnBXeWRqWVd4c0oxMGdQVDA5SUNjdmNpOTFjMlZ5TDJ4dloybHVKeUFtSmlCeVpYTndiMjV6WlNBL0lGeHVJQ0FnSUNBZ0lDQWdJQ0J5WlhOd2IyNXpaUzVpYjJSNUxtZGxkQ2duZFhObGNpY3BJRG9nYm5Wc2JEdGNiaUFnZlN3Z0lGeHVYRzRnSUM4cUtseHVJQ0FnS2lCVGFHRnlaWE1nZEdobElHTnZiMnRwWlhNZ1puSnZiU0JoSUdScFptWmxjbVZ1SUdBdWFXOG9LV0FnWVdkbGJuUWdkRzhnY0hKbGMyVnlkbVVnYzJWemMybHZiaUJ6ZEdGMFpWeHVJQ0FnS2lCaFkzSnZjM01nWUhSb2FYTmdJSEpsY1hWbGMzUWdZVzVrSUdGc2JDQnlaWEYxWlhOMGN5QmphR0ZwYm1Wa0lIUnZJR2wwTGx4dUlDQWdLbHh1SUNBZ0tpQkFiV1YwYUc5a0lITm9ZWEpsWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlMFJsY0d4dmVWSjlJR1p2Y2lCamFHRnBibWx1Wnk1Y2JpQWdJQ29nUUdGd2FTQndkV0pzYVdNZ0lDQmNiaUFnSUNvdklDQmNiaUFnYzJoaGNtVTZJR1oxYm1OMGFXOXVJQ2hqYjI5cmFXVnpLU0I3WEc0Z0lDQWdhV1lnS0dkc2IySmhiRTl3ZEdsdmJuTXVjM1JwWTJ0NUtTQjdYRzRnSUNBZ0lDQnBaaUFvWjJ4dlltRnNUM0IwYVc5dWN5NWpiMjlyYVdWektTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyOXZhMmxsY3lBOUlHZHNiMkpoYkU5d2RHbHZibk11WTI5dmEybGxjeTV6YkdsalpTZ3dLVHNnWEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JwWmlBb1kyOXZhMmxsY3lrZ2V5QmNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtTnZiMnRwWlhNZ1BTQmpiMjlyYVdWekxuTnNhV05sS0RBcE95QmNiaUFnSUNBZ0lDQWdJQ0JuYkc5aVlXeFBjSFJwYjI1ekxuTmxkQ2duWTI5dmEybGxjeWNzSUhSb2FYTXVZMjl2YTJsbGN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjI5cmFXVnpJRDBnS0dOdmIydHBaWE1nUHlCamIyOXJhV1Z6TG5Oc2FXTmxLREFwSURvZ2RHaHBjeTVqYjI5cmFXVnpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZTeGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVjBkWEp1Y3lCMGFHVWdTRlJVVUNCamIyOXJhV1VnY0hKbGRtbHZkWE5zZVNCelpXNTBJR0o1SUhSb1pTQnpaWEoyWlhJZ2QybDBhQ0JUWlhRdFEyOXZhMmxsTGx4dUlDQWdLaUJVYUdseklIWmhiSFZsSUdOaGJpQmlaU0J3WVhOelpXUWdkRzhnWUM1emFHRnlaU2h5ZFhObGNpNW5aWFJEYjI5cmFXVnpLQ2twWUNCdlppQmhJR1JwWm1aeVpXNTBYRzRnSUNBcUlHQXVhVzhvS1dBZ1lXZGxiblFnZEc4Z2NISmxjMlZ5ZG1VZ2MyVnpjMmx2YmlCemRHRjBaU0JoWTNKdmMzTWdjbVZ4ZFdWemRITXVYRzRnSUNBcVhHNGdJQ0FxSUVCdFpYUm9iMlFnWjJWMFEyOXZhMmxsYzF4dUlDQWdLaUJBY21WMGRYSnVJSHRCY25KaGVYMGdWR2hsSUVoVVZGQWdZMjl2YTJsbElIQnlaWFpwYjNWemJIa2djMlZ1ZENCaWVTQjBhR1VnYzJWeWRtVnlJSGRwZEdnZ1hHNGdJQ0FxSUZObGRDMURiMjlyYVdVdVhHNGdJQ0FxSUVCaGNHa2djSFZpYkdsaklDQWdYRzRnSUNBcUx5QWdYRzRnSUdkbGRFTnZiMnRwWlhNNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYjI5cmFXVnpPMXh1SUNCOUxDQmNibHh1SUNCa1pXeGhlVG9nWm5WdVkzUnBiMjRnS0cxektTQjdYRzRnSUNBZ0x5OGdWRTlFVHpvZ2MzVndjRzl5ZENCa1pXeGhlV1ZrSUhKbGNYVmxjM1J6SUdKaGMyVmtJRzl1SUcxeklHWnZjaUJ1YjNjZ2RHaHBjeUJwY3lCcWRYTjBJR0VnY0dGMWMyVXVYRzRnSUNBZ2RHaHBjeTVrWld4aGVXVmtJRDBnSVdselRtRk9LSEJoY25ObFJteHZZWFFvYlhNcEtTQW1KaUJwYzBacGJtbDBaU2h0Y3lrZ1B5QnRjeUE2SUhSeWRXVTdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZTd2dJQ0JjYmx4dUlDQXZLaXBjYmlBZ0lDb2dWVzUzYVc1a0lIUm9aU0J4ZFdWMVpTQmphR0ZwYmlCamJHVmhjbWx1WnlCeVpYRjFaWE4wY3lCMGFHRjBJRzFwWjJoMElHaGhkbVVnWkdWc1lYbHpJR0YwZEdGamFHVmtMbHh1SUNBZ0tseHVJQ0FnS2lCQWJXVjBhRzlrSUdSeVlXbHVYRzRnSUNBcUlFQnlaWFIxY200Z2UxQnliMjFwYzJWOUlFRWdjSEp2YldselpTQjNjbUZ3Y0dsdVp5QjBhR1VnY21WemIyeDFkR2x2YmlCdlppQmxhWFJvWlhJZ1hDSnlaWE52YkhabFhDSWdiM0pjYmlBZ0lDb2dYQ0p5WldwbFkzUmNJaUJqWVd4c1ltRmpheTVjYmlBZ0lDb2dRR0Z3YVNCd2RXSnNhV01nSUNCY2JpQWdJQ292WEc0Z0lHUnlZV2x1T2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RHaHBjeTVrWld4aGVXVmtJRDBnWm1Gc2MyVTdYRzRnSUNBZ2RHaHBjeTV4TG1ac2RYTm9LQ2s3SUZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpHVm1aWEp5WldRdWNISnZiV2x6WlR0Y2JpQWdmU3dnSUNCY2JseHVJQ0F2S2lwY2JpQWdJQ29nVkdobElHQXVjSEp2YldselpTZ3BZQ0J0WlhSb2IyUWdjbVYwZFhKdWN5QmhJR1I1Ym1GdGFXTmhiR3g1SUdkbGJtVnlZWFJsWkNCUWNtOXRhWE5sSUhSb1lYUWdhWE1nWEc0Z0lDQXFJSEpsYzI5c2RtVmtJRzl1WTJVZ1lXeHNJRVJsY0d4dmVWSWdZQzVwYnlncFlDQnlaWEYxWlhOMGN5Qm9ZWFpsSUdWdVpHVmtMbHh1SUNBZ0tpQWdJRnh1SUNBZ0tpQkFiV1YwYUc5a0lIQnliMjFwYzJWY2JpQWdJQ29nUUhKbGRIVnliaUI3VUhKdmJXbHpaWDBnUVNCd2NtOXRhWE5sSUhkeVlYQndhVzVuSUhSb1pTQnlaWE52YkhWMGFXOXVJRzltSUdWcGRHaGxjaUJjSW5KbGMyOXNkbVZjSWlCdmNseHVJQ0FnS2lCY0luSmxhbVZqZEZ3aUlHTmhiR3hpWVdOckxseHVJQ0FnS2lCQVlYQnBJSEIxWW14cFkxeHVJQ0FnS2k4Z0lDQWdJRnh1SUNCd2NtOXRhWE5sT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RHaHBjeTVsYm1Rb0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVJsWm1WeWNtVmtMbkJ5YjIxcGMyVTdYRzRnSUgwc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGaWIzSjBJSFJvWlNCRVpYQnNiM2xTSUhKbGNYVmxjM1F1WEc0Z0lDQXFYRzRnSUNBcUlFQnRaWFJvYjJRZ1lXSnZjblFnSUZ4dUlDQWdLaUJBY21WMGRYSnVJSHRFWlhCc2IzbFNmU0JtYjNJZ1kyaGhhVzVwYm1jdVhHNGdJQ0FxSUVCaGNHa2djSFZpYkdsalhHNGdJQ0FxTHlBZ1hHNGdJR0ZpYjNKME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkR2hwY3k1eVpYRXVZV0p2Y25Rb0tUdGNiaUFnSUNCMGFHbHpMbVZ0YVhRb0oyRmliM0owSnlrN1hHNGdJQ0FnZEdocGN5NWtaV1psY25KbFpDNXlaV3BsWTNRb2RHaHBjeTVmYUdGdVpHeGxSWEp5YjNJb2V5QmNiaUFnSUNBZ0lDQWdjM1JoZEhWek9pQW5ZV0p2Y25RbkxGeHVJQ0FnSUNBZ0lDQjBaWGgwT2lBblJHVndiRzk1VWlCeVpYRjFaWE4wSUdGaWIzSjBaV1F1SjF4dUlDQWdJSDBwS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5TEZ4dVhHNGdMeW9xWEc0Z0lDb2dVMlYwSUhScGJXVnZkWFFnZEc4Z1lHMXpZQzVjYmlBZ0tseHVJQ0FxSUVCdFpYUm9iMlFnZEdsdFpXOTFkQ0FnWEc0Z0lDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHMXpYRzRnSUNvZ1FISmxkSFZ5YmlCN1JHVndiRzk1VW4wZ1ptOXlJR05vWVdsdWFXNW5YRzRnSUNvZ1FHRndhU0J3ZFdKc2FXTmNiaUFnS2k4Z0lGeHVJQ0IwYVcxbGIzVjBPaUJtZFc1amRHbHZiaUFvYlhNcElIdGNiaUFnSUNCMGFHbHpMbkpsY1M1MGFXMWxiM1YwS0cxektUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOUxGeHVYRzRnTHlvcVhHNGdJQ29nVkhWeWJpQnNiMmRuYVc1bklHOXVJR1p2Y2lCMGFHVWdjM0JsWTJsbWFXTWdkSEpoYm5OaFkzUnBiMjR1WEc0Z0lDcGNiaUFnS2lCQWJXVjBhRzlrSUd4dloxeHVJQ0FxSUVCeVpYUjFjbTRnZTBSbGNHeHZlVko5SUdadmNpQmphR0ZwYm1sdVoxeHVJQ0FxSUVCaGNHa2djSFZpYkdsalhHNGdJQ292SUZ4dUlDQnNiMmM2SUdaMWJtTjBhVzl1SUNoc1pYWmxiQ2tnZTF4dUlDQWdJSFJvYVhNdWJHOW5aMlZ5TG5ObGRFeGxkbVZzS0d4bGRtVnNJSHg4SUV4dloyZGxjaTVFUlVKVlJ5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZTeGNibHh1SUNBdktpcGNiaUFnSUNvZ1JtbHNkR1Z5Y3lCemRXTmpaWE56Wm5Wc0lISmxjM0J2Ym5ObGN5QjBieUJqYjI1MFlXbHVJRzl1YkhrZ1lTQjBiM0F0YkdWMlpXd2dSR1Z3Ykc5NVVpQkJVRWtnWEc0Z0lDQXFJSEpsYzNCdmJuTmxJR1Z1ZEdsMGFXVnpPbHh1SUNBZ0tpQXRJQ2QxYzJWeUoxeHVJQ0FnS2lBdElDZHdjbTlxWldOMEoxeHVJQ0FnS2lBdElDZDNiM0pyYzNCaFkyVW5JRnh1SUNBZ0tpQXRJQ2RsZUdWamRYUnBiMjRuSUZ4dUlDQWdLaUF0SUNka2FYSmxZM1J2Y25rbklGeHVJQ0FnS2lBdElDZHlaWEJ2YzJsMGIzSjVKMXh1SUNBZ0tpQXRJQ2R3WVdOcllXZGxjeWNnWEc0Z0lDQXFJQ0FnWEc0Z0lDQXFJRUJ0WlhSb2IyUWdaVzUwYVhSNVhHNGdJQ0FxSUVCeVpYUjFjbTRnZTBSbGNHeHZlVko5SUdadmNpQmphR0ZwYm1sdVoxeHVJQ0FnS2lCQVlYQnBJSEIxWW14cFkxeHVJQ0FnS2k5Y2JpQWdaVzUwYVhSNU9pQm1kVzVqZEdsdmJpQW9aVzUwYVhSNUtTQjdYRzRnSUNBZ2RHaHBjeTVsYm5ScGRHbGxjeUE5SUhWMGFXeHpMbWx1UVhKeVlYa29WRTlRVEVWV1JVeGZSVTVVU1ZSSlJWTXNJR1Z1ZEdsMGVTazdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZTeGNibHh1SUNBdktpcGNiaUFnSUNvZ1JHVm1hVzVsY3lCMGFHVWdjbVZ4ZFdWemRDQmtZWFJoSUdKbGFXNW5JSE5sYm5RZ2RHOGdZU0JFWlhCc2IzbFNJRUZRU1M0Z1hHNGdJQ0FxWEc0Z0lDQXFJRUJ0WlhSb2IyUWdaR0YwWVZ4dUlDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaR0YwWVNCVWFHVWdiMkpxWldOMElHeHBkR1Z5WVd3Z1kyOXVabWxuZFhKaGRHbHZiaUJvWVhOb0xpQmNiaUFnSUNvZ1FISmxkSFZ5YmlCN1JHVndiRzk1VW4wZ1ptOXlJR05vWVdsdWFXNW5YRzRnSUNBcUlFQmhjR2tnY0hWaWJHbGpYRzRnSUNBcUwxeHVJQ0JrWVhSaE9pQm1kVzVqZEdsdmJpQW9aR0YwWVNrZ2UxeHVJQ0FnSUdSaGRHRWdQU0JrWVhSaElIeDhJSHQ5T3lBZ0lDQmNibHh1SUNBZ0lDOHZJSEpsYlc5MlpTQmhibmtnYVc1c2FXNWxaQ0J5YVc1d2RYUW9jeWtnWVc1a0lHRjBkR0ZqYUNCMGFHVnRJSFJ2SUhSb1pTQnlhVzV3ZFhRb2N5a2djSEp2Y0dWeWRIbGNiaUFnSUNCcFppQW9aR0YwWVM1eWFXNXdkWFFnZkh3Z1pHRjBZUzV5YVc1d2RYUnpLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuSnBibkIxZENoa1lYUmhMbkpwYm5CMWRDazdYRzRnSUNBZ0lDQjBhR2x6TG5KcGJuQjFkSE1vWkdGMFlTNXlhVzV3ZFhSektUdGNiaUFnSUNCOUlGeHVYRzRnSUNBZ0x5OGdjbVZ0YjNabElHRnVlU0JnY21WelpYSjJaV1JnSUhaaGJIVmxjeUIwYUdGMElHTnZkV3hrSUdoaGRtVWdZbVZsYmlCd1lYTnpaV1FnWW5rZ2JXbHpkR0ZyWlZ4dUlDQWdJSFpoY2lCQ1RFRkRTMHhKVTFRZ1BTQmJKM0pwYm5CMWRDY3NJQ2R5YVc1d2RYUnpKeXdnSjE5ZlkyOXZhMmxsYzE5ZkoxMDdYRzRnSUNBZ1FreEJRMHRNU1ZOVUxtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2NHRnlZVzBwSUhzZ1pHVnNaWFJsSUdSaGRHRmJjR0Z5WVcxZE95QjlLVHNnSUZ4dVhHNGdJQ0FnZEdocGN5NXdZWEpoYlhNZ1BTQnRaWEpuWlNoMGFHbHpMbkJoY21GdGN5d2daR0YwWVNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVhSMFlXTm9aWE1nWVNCbWFXeGxJSFJ2SUdKbElIVndiRzloWkdWa0xpQmNiaUFnSUNwY2JpQWdJQ29nUUcxbGRHaHZaQ0JoZEhSaFkyaGNiaUFnSUNvZ1FIQmhjbUZ0SUh0R2FXeGxmRUpzYjJKOGNHRjBhSDBnWm1sc1pTQlVhR1VnWm1sc1pTQjBieUJpWlNCaGRIUmhZMmhsWkNCbWIzSWdZVzRnZFhCc2IyRmtMaUJHYjNJZ1hHNGdJQ0FxSUVKeWIzZHpaWElnWlc1MmFYSnZibTFsYm5SeklIUm9aU0JJVkUxTU5TQkdhV3hsZkVKc2IySWdhWE1nZFhObFpDNGdSbTl5SUhSb1pTQk9iMlJsTG1weklGeHVJQ0FnS2lCbGJuWnBjbTl1YldWdWRDd2dZU0JtYVd4bElIQmhkR2dnYVhNZ1lXTmpaWEIwWldRdVhHNGdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0JtYVd4bGJtRnRaU0FvYjNCMGFXOXVZV3dwSUhSb1pTQnVZVzFsSUc5bUlIUm9aU0JtYVd4bElIUnZJR0psSUhWd2JHOWhaR1ZrTGlCY2JpQWdJQ29nVkdocGN5QnVZVzFsSUdSdlpYTWdibTkwSUdoaGRtVWdkRzhnYldGMFkyZ2dkR2hsSUdGamRIVmhiQ0J6YjNWeVkyVWdabWxzWlc1aGJXVXVYRzRnSUNBcUlFQnlaWFIxY200Z2UwUmxjR3h2ZVZKOUlHWnZjaUJqYUdGcGJtbHVaMXh1SUNBZ0tpQkFZWEJwSUhCMVlteHBZMXh1SUNBZ0tpOWNiaUFnWVhSMFlXTm9PaUJtZFc1amRHbHZiaUFvWm1sc1pTd2dabWxzWlc1aGJXVXBJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NWhjR2t1ZFhCc2IyRmtLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtWnBiR1VnUFNCbWFXeGxPMXh1WEc0Z0lDQWdJQ0F2THlCdmNIUnBiMjVoYkNCbWFXeGxibUZ0WlNCb1pYSmxJR1p2Y2lCamIyNTJaVzVwWlc1alpWeHVJQ0FnSUNBZ2FXWWdLR1pwYkdWdVlXMWxLU0I3SUhSb2FYTXVaR0YwWVNnZ2V5Qm1hV3hsYm1GdFpUb2dabWxzWlc1aGJXVWdmU0FwT3lCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDBzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRk4xY0hCdmNuUmxaQ0J2Ym14NUlHbHVJRTV2WkdVdWFuTXNJSFJvYVhNZ2JXVjBhRzlrSUhkdmNtdHpJR2x1SUdOdmJtcDFibU4wYVc5dUlIZHBkR2dnZEdobElGeHVJQ0FnS2lCaGRIUmhZMmdnYldWMGFHOWtJSFJ2SUdsdVpHbGpZWFJsSUhSb1lYUWdkR2hsSUdacGJHVWdjMmh2ZFd4a0lHSmxJSEpsWVdRZ2FXNGdZWE1nWVNCeVpXRmtZV0pzWlNCY2JpQWdJQ29nYzNSeVpXRnRJR1IxY21sdVp5QmhJR1pwYkdVZ2RYQnNiMkZrTGx4dUlDQWdLbHh1SUNBZ0tpQkFiV1YwYUc5a0lITjBjbVZoYlZ4dUlDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdiM0IwYVc5dWN5QW9iM0IwYVc5dVlXd3BJSFJvWlNCU1pXRmtZV0pzWlNCVGRISmxZVzBnYjNCMGFXOXVjeUJvWVhOb0xseHVJQ0FnS2lBZ1lHQmdYRzRnSUNBcUlDQWdJSHNnWm14aFozTTZJQ2R5Snl4Y2JpQWdJQ29nSUNBZ0lDQmxibU52WkdsdVp6b2diblZzYkN4Y2JpQWdJQ29nSUNBZ0lDQm1aRG9nYm5Wc2JDeGNiaUFnSUNvZ0lDQWdJQ0J0YjJSbE9pQXdOalkyTEZ4dUlDQWdLaUFnSUNBZ0lHRjFkRzlEYkc5elpUb2dkSEoxWlZ4dUlDQWdLaUFnSUNCOVhHNGdJQ0FxSUdCZ1lGeHVJQ0FnS2lCQWNtVjBkWEp1SUh0RVpYQnNiM2xTZlNCbWIzSWdZMmhoYVc1cGJtZGNiaUFnSUNvZ1FHRndhU0J3ZFdKc2FXTmNiaUFnSUNvdlhHNGdJSE4wY21WaGJUb2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdWNuTjBjbVZoYlNBOUlDZ2hkMmx1SUNZbUlIUm9hWE11WVhCcExuVndiRzloWkNrN0lDOHZibTlrWldweklHOXViSGxjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlMRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlVhR1VnWUdacGJIUmxjaWpPdXlsZ0lHMWxkR2h2WkNCeVpXMXZkbVZ6SUhSb2FYTWdSR1Z3Ykc5NVVpQnlaWEYxWlhOMElHWnliMjBnZEdobElISmxjWFZsYzNRZ1kyaGhhVzVjYmlBZ0lDb2dhV1lnZEdobElIQnliM1pwWkdWa0lHWjFibU4wYVc5dUlHUnZaWE1nS201dmRDb2djR0Z6Y3lCMGFHVWdkR1Z6ZENCcGJYQnNaVzFsYm5SbFpDQmllU0JwZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dSWGhoYlhCc1pYTTZYRzRnSUNBcVhHNGdJQ0FxSUdCZ1lGeHVJQ0FnS2lBdkx5QlNaVzF2ZG1VZ1puSnZiU0IwYUdVZ2NtVnhkV1Z6ZENCamFHRnBibHh1SUNBZ0tpQXVabWxzZEdWeUtHWjFibU4wYVc5dUtHRnlaM01wSUh0Y2JpQWdJQ29nSUNBZ2NtVjBkWEp1SURVZ1BpQXhNRHRjYmlBZ0lDb2dmU2xjYmlBZ0lDcGNiaUFnSUNvZ0x5OGdTMlZsY0NCcGJpQjBhR1VnY21WeGRXVnpkQ0JqYUdGcGJseHVJQ0FnS2lBdVptbHNkR1Z5S0daMWJtTjBhVzl1S0dGeVozTXBJSHRjYmlBZ0lDb2dJQ0FnY21WMGRYSnVJREV3SUQ0Z05UdGNiaUFnSUNvZ2ZTa2dJQ0JjYmlBZ0lDb2dZR0JnWEc0Z0lDQXFYRzRnSUNBcUlFQnRaWFJvYjJRZ1ptbHNkR1Z5WEc0Z0lDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJTTY3SUhSb1pTQmpZV3hzWW1GamF5Qm1kVzVqZEdsdmJpNWNiaUFnSUNvZ1FISmxkSFZ5YmlCN1JHVndiRzk1VW4wZ1ptOXlJR05vWVdsdWFXNW5YRzRnSUNBcUlFQmhjR2tnY0hWaWJHbGpJQ0FnWEc0Z0lDQXFMMXh1SUNCbWFXeDBaWEk2SUdaMWJtTjBhVzl1S0dadUtTQjdYRzRnSUNBZ2FXWWdLR1p1S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWx2Um1sc2RHVnlJRDBnWm5WdVkzUnBiMjRvY0hKbGRrRnlaM01wSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR0Z5WjNNZ1BTQjdmU3dnYTJWbGNEdGNibHh1SUNBZ0lDQWdJQ0F2THlCamIzQjVJRzkyWlhJZ2NISmxkbWx2ZFhNZ1lYSm5kVzFsYm5SeklHRnVaQ0JtYVd4MFpYSWdiM1YwSUdsdWRHVnlibUZzSUY5ZlkyOXZhMmxsYzE5ZklGeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnJaWGtnYVc0Z2NISmxka0Z5WjNNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnYVdZZ0tHdGxlU0FoUFQwZ0oxOWZZMjl2YTJsbGMxOWZKeWtnZXlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhKbmMxdHJaWGxkSUQwZ2NISmxka0Z5WjNOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYTJWbGNDQTlJR1p1S0dGeVozTXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR3RsWlhBZ2ZId2dhMlZsY0NBOVBUMGdabUZzYzJVZ1B5QnJaV1Z3SURvZ2RISjFaU2s3WEc0Z0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlMQ0FnWEc0Z0lGeHVJQ0F2S2lwY2JpQWdJQ29nUVdOMGN5QmhjeUJoSUdacGJtRnNiSGtnYzNSaGRHVnRaVzUwSUdGc2JHOTNhVzVuSUhsdmRTQjBieUJsZUdWamRYUmxJRndpWTJ4bFlXNTFjRndpSUhSNWNHVWdkR0Z6YTNNZ1hHNGdJQ0FxSUdsdUlHRWdjbVZ4ZFdWemRDQmphR0ZwYmk0Z1NYUWdZWEp5WVc1blpYTWdabTl5SUdOc1pXRnVkWEFnZEc4Z1ltVWdZMkZzYkdWa0xDQjNhWFJvSUc1dklGeHVJQ0FnS2lCaGNtZDFiV1Z1ZEhNc0lIZG9aVzRnZEdobElFUmxjR3h2ZVZJZ2NtVnhkV1Z6ZENCamFHRnBiaUJwY3lCbGFYUm9aWElnWTI5dGNHeGxkR1ZzZVNCbWRXeG1hV3hzWldRZ1hHNGdJQ0FxSUc5eUlISmxhbVZqZEdWa0xseHVJQ0FnS2x4dUlDQWdLaUJBYldWMGFHOWtJR1Z1YzNWeVpWeHVJQ0FnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNET3V5QjBhR1VnWTJGc2JHSmhZMnNnWm5WdVkzUnBiMjR1WEc0Z0lDQXFJRUJ5WlhSMWNtNGdlMFJsY0d4dmVWSjlJR1p2Y2lCamFHRnBibWx1WjF4dUlDQWdLaUJBWVhCcElIQjFZbXhwWTF4dUlDQWdLaThnSUZ4dUlDQmxibk4xY21VNklHWjFibU4wYVc5dUlDaG1iaWtnZTF4dUlDQWdJSFJvYVhNdVpHVm1aWEp5WldRdWNISnZiV2x6WlM1bGJuTjFjbVVvWm00cE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaR1ZtWlhKeVpXUXVjSEp2YldselpUdGNiaUFnZlN4Y2JpQWdJQ0FnSUZ4dUlDQXZLaXBjYmlBZ0lDb2dWR2hsSUdkbGJtVnlZV3dnWm1GcGJIVnlaU0JqWVd4c1ltRmpheTRnU1dZZ1kyRnNiR1ZrTENCaGJHd2dSR1Z3Ykc5NVVpQmxjbkp2Y25NZ1ptOXlJSFJvYVhNZ1hHNGdJQ0FxSUhSeVlXNXpZV04wYVc5dUlIZHBiR3dnWW1VZ2NtVjBkWEp1WldRZ2FHVnlaU0IzYUdWdUlISmhhWE5sWkM1Y2JpQWdJQ3BjYmlBZ0lDb2dRRzFsZEdodlpDQmxjbkp2Y2x4dUlDQWdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0RPdXlCMGFHVWdZMkZzYkdKaFkyc2dablZ1WTNScGIyNHVYRzRnSUNBcUlFQnlaWFIxY200Z2UwUmxjR3h2ZVZKOUlHWnZjaUJqYUdGcGJtbHVaMXh1SUNBZ0tpQkFZWEJwSUhCMVlteHBZMXh1SUNBZ0tpOWNiaUFnWlhKeWIzSTZJR1oxYm1OMGFXOXVJQ2htYmlrZ2UxeHVJQ0FnSUhSb2FYTXViMjRvSjJWeWNtOXlKeXdnWm00cE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgwc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZOMGNtVmhiU0IwYUdVZ1JHVndiRzk1VWlCeVpYTndiMjV6WlNCcGJuUnZJSFJvWlNCd2FYQmxMaUJKZENCcGN5QnBiWEJ2Y25SaGJuUWdkRzhnYm05MFpTQjBhR0YwSUdsbUlGeHVJQ0FnS2lCMGFHVWdZQzV3YVhCbEtDbGdJRzFsZEdodlpDQnBjeUJ1WlhabGNpQmpZV3hzWldRZ2RHaGxJSEpsY1hWbGMzUWdkMmxzYkNCdWIzUWdZbVVnYzJWdWRDNWNiaUFnSUNwY2JpQWdJQ29nVkdobElHQXVjR2x3WlNncFlDQnRaWFJvYjJRZ2MyaHZkV3hrSUdKbElHSmxJSFZ6WldRZ1lYTWdZVzRnWVd4MFpYSnVZWFJwZG1VZ2RHOGdZQzVsYm1Rb0tXQWdZVzVrSUZ4dUlDQWdLaUJ1WlhabGNpQmhiRzl1WnlCemFXUmxJRzltSUdsMExpQmdMbkJwY0dVb0tXQWdZVzVrSUdBdVpXNWtLQ2xnSUdGeVpTQmhiaUJsYVhSb1pYSXRiM0l1WEc0Z0lDQXFYRzRnSUNBcUlFQnRaWFJvYjJRZ2NHbHdaVnh1SUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbVZoYlgwZ2MzUnlaV0Z0SUVFZ1pHVnpkR2x1WVhScGIyNGdVM1J5WldGdExseHVJQ0FnS2lCQWNtVjBkWEp1SUh0VGRISmxZVzE5SUZSb1pTQndZWE56WldRZ2FXNGdaR1Z6ZEdsdVlYUnBiMjRnYzNSeVpXRnRJSFJ2SUdKbElIVnpaV1FnWm05eUlHRmtaR2wwYVc5dVlXd2dYRzRnSUNBcUlIQnBjR2x1Wnk1Y2JpQWdJQ29nUUdGd2FTQndkV0pzYVdOY2JpQWdJQ292WEc0Z0lIQnBjR1U2SUdaMWJtTjBhVzl1SUNoa1pYTjBLU0I3WEc0Z0lDQWdkbUZ5SUhFZ0lDQTlJSFJvYVhNdWNTeGNiaUFnSUNBZ0lDQWdZWEJwSUQwZ2RHaHBjeTVoY0drN0lDQWdJQ0FnSUNCY2JseHVJQ0FnSUhFdVlXUmtLR1oxYm1OMGFXOXVLSEpsYzNCdmJuTmxRMmhoYVc0c0lHVnljbTl5TENCd2NtVjJRWEpuY3lrZ2V5QWdJQ0JjYmlBZ0lDQWdJQzh2SUdKeVlXdGxJSFJvWlNCallXeHNJR05vWVdsdUlHOXVJR1Z5Y205eUlDQWdJQ0FnWEc0Z0lDQWdJQ0JwWmlBb1pYSnliM0lwSUhzZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCMGFHbHpMbVJsWm1WeWNtVmtMbkpsYW1WamRDaGxjbkp2Y2lrN0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhFdVpteDFjMmdvY21WemNHOXVjMlZEYUdGcGJpd2daWEp5YjNJc0lIQnlaWFpCY21kektUc2dMeThnWkhKaGFXNGdkR2hsSUhGMVpYVmxYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyTnNaV0Z5S0NrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUZ4dUlDQWdJQ0FnZEdocGN5NWZjSEpsY0ZKbGNYVmxjM1FvY21WemNHOXVjMlZEYUdGcGJpd2djSEpsZGtGeVozTXBPMXh1WEc0Z0lDQWdJQ0JNYjJkblpYSXVhVzVtYnlnbmNHbHdaU2dwSnl3Z1lYQnBMQ0IwYUdsekxuSmxjU2s3WEc0Z0lDQWdJQ0IwYUdsekxteHZaMmRsY2k1cGJtWnZLQ2R3YVhCbEtDa25MQ0JoY0drc0lIUm9hWE11Y21WeEtUc2dJQ0JjYmx4dUlDQWdJQ0FnZG1GeUlITjBjbVZoYlNBOUlIUm9hWE11Y21WeExuQnBjR1VvWkdWemRDazdYRzRnSUNBZ0lDQnhMbmxwWld4a0tIUnlkV1VwTzF4dUlDQWdJQ0FnYzNSeVpXRnRMbTl1S0NkbGNuSnZjaWNzSUdaMWJtTjBhVzl1SUNncElIc2dmU2s3SUNBZ0lGeHVJQ0FnSUNBZ2MzUnlaV0Z0TG05dUtDZGxibVFuTENCbWRXNWpkR2x2YmlncElIc2dmU2s3SUNBZ0lDQmNiaUFnSUNBZ0lITjBjbVZoYlM1dmJpZ25aR0YwWVNjc0lHWjFibU4wYVc5dUtDa2dleUI5S1RzZ0lDQWdJQ0JjYmlBZ0lDQjlMQ0IwYUdsektUdGNiaUFnWEc0Z0lDQWdhV1lnS0hFdWMybDZaU2dwSUR3OUlERXBJSHNnY1M1bWJIVnphQ2dwT3lCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWkdWemREdGNiaUFnZlN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nU1c1a2FXTmhkR1Z6SUhSb1lYUWdkR2hsSUhKbGNYVmxjM1FnYVhNZ2NtVmhaSGtnZEc4Z1ltVWdjMlZ1ZENCMGJ5QkVaWEJzYjNsU0xpQkpkQ0JwY3lCcGJYQnZjblJoYm5RZ1hHNGdJQ0FxSUhSdklHNXZkR1VnZEdoaGRDQnBaaUIwYUdVZ1lDNWxibVFvS1dBZ2JXVjBhRzlrSUdseklHNWxkbVZ5SUdOaGJHeGxaQ0IwYUdVZ2NtVnhkV1Z6ZENCM2FXeHNJRzV2ZENCaVpWeHVJQ0FnS2lCelpXNTBMbHh1SUNBZ0tseHVJQ0FnS2lCQWJXVjBhRzlrSUdWdVpGeHVJQ0FnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNET3V5QjBhR1VnWTJGc2JHSmhZMnNnWm5WdVkzUnBiMjR1WEc0Z0lDQXFJRUJ5WlhSMWNtNGdlMFJsY0d4dmVWSjlJR1p2Y2lCamFHRnBibWx1Wnk1Y2JpQWdJQ29nUUdGd2FTQndkV0pzYVdOY2JpQWdJQ292SUZ4dUlDQmxibVE2SUdaMWJtTjBhVzl1SUNobWJpa2dlMXh1SUNBZ0lIWmhjaUJ6Wld4bUlDQWdJQ0E5SUhSb2FYTXNYRzRnSUNBZ0lDQWdJSEVnSUNBZ0lDQWdJRDBnZEdocGN5NXhMRnh1SUNBZ0lDQWdJQ0JoY0drZ0lDQWdJQ0E5SUhSb2FYTXVZWEJwTEZ4dUlDQWdJQ0FnSUNCaGNtZHpJQ0FnSUNBOUlHNTFiR3dzWEc0Z0lDQWdJQ0FnSUdWdWRHbDBhV1Z6SUQwZ0lIUm9hWE11Wlc1MGFYUnBaWE03WEc1Y2JpQWdJQ0J4TG1Ga1pDaG1kVzVqZEdsdmJpaHlaWE53YjI1elpVTm9ZV2x1TENCbGNuSnZjaXdnY0hKbGRrRnlaM01wSUh0Y2JpQWdJQ0FnSUM4dklHSnlaV0ZySUhSb1pTQmpZV3hzSUdOb1lXbHVJRzl1SUdWeWNtOXlJQ0FnSUNBZ1hHNGdJQ0FnSUNCcFppQW9aWEp5YjNJcElIc2dJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQjBhR2x6TG1SbFptVnljbVZrTG5KbGFtVmpkQ2hsY25KdmNpazdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdjUzVtYkhWemFDaHlaWE53YjI1elpVTm9ZV2x1TENCbGNuSnZjaXdnY0hKbGRrRnlaM01wT3lBdkx5QmtjbUZwYmlCMGFHVWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTJ4bFlYSW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F2THlCbWFXeDBaWElnYjNWMElISmxjM0J2Ym5ObGN5QWdJQ0JjYmlBZ0lDQWdJR2xtSUNnaGRHaHBjeTVwYjBacGJIUmxjaWh3Y21WMlFYSm5jeWtwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEV1YzJsNlpTZ3BJRDA5UFNBd0tTQjdJRnh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVaR1ZtWlhKeVpXUXVjbVZ6YjJ4MlpTaHlaWE53YjI1elpVTm9ZV2x1SUh4OElIQnlaWFpCY21kektUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhFdVpteDFjMmdvY21WemNHOXVjMlZEYUdGcGJpd2daWEp5YjNJc0lIQnlaWFpCY21kektUc2dMeThnWkhKaGFXNGdkR2hsSUhGMVpYVmxYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyTnNaV0Z5S0NrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUZ4dUlDQWdJQ0FnZEdocGN5NWZjSEpsY0ZKbGNYVmxjM1FvY21WemNHOXVjMlZEYUdGcGJpd2djSEpsZGtGeVozTXBPMXh1WEc0Z0lDQWdJQ0JNYjJkblpYSXVhVzVtYnlnbmFXOG9LU2NzSUdGd2FTd2dkR2hwY3k1eVpYRXBPMXh1SUNBZ0lDQWdkR2hwY3k1c2IyZG5aWEl1YVc1bWJ5Z25hVzhvS1Njc0lHRndhU3dnZEdocGN5NXlaWEVwT3lBZ0lDQmNibHh1SUNBZ0lDQWdMeThnYzJWdVpDQnVaWGgwSUhKbGNYVmxjM1JjYmlBZ0lDQWdJSFJvYVhNdWNtVnhMbVZ1WkNobWRXNWpkR2x2YmloeVpYTXBJSHRjYmlBZ0lDQWdJQ0FnYzJWc1ppNXphR0Z5WlNoelpXeG1MbU52YjJ0cFpYTWdmSHdnY21WekxtaGxZV1JsY25OYkozTmxkQzFqYjI5cmFXVW5YU2s3SUNBZ0lDQWdJQ0FnWEc1Y2JpQWdJQ0FnSUNBZ0x5OGdMUzBnYkc5bklHTnZiMnRwWlhNZ1lXTnliM056SUhKbGNYVmxjM1J6SUMwdFhHNGdJQ0FnSUNBZ0lHbG1JQ2h6Wld4bUxtTnZiMnRwWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0JNYjJkblpYSXVhVzVtYnlnblkyOXZhMmxsY3ljc0lHRndhU3dnYzJWc1ppNWpiMjlyYVdWektUc2dYRzRnSUNBZ0lDQWdJQ0FnYzJWc1ppNXNiMmRuWlhJdWFXNW1ieWduWTI5dmEybGxjeWNzSUdGd2FTd2djMlZzWmk1amIyOXJhV1Z6S1RzZ1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JsY25KdmNpQTlJSE5sYkdZdVgyaGhibVJzWlVWeWNtOXlLSEpsY3lrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJrY21WeklEMGdLSEpsY3k1aWIyUjVJQ1ltSUhKbGN5NWliMlI1TG1SbGNHeHZlWElnUHlCeVpYTXVZbTlrZVNBNklISmxjeWs3SUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lITmxiR1l1YVc1d2RYUnpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lITmxiR1l1YjNWMGNIVjBjeUE5SUZ0ZE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFpYSnliM0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdMeThnTFMwZ1RHOW5JR2RzYjJKaGJDQXJJSFJ5WVc1ellXTjBhVzl1SUd4dlp5QXRMVnh1SUNBZ0lDQWdJQ0FnSUNCTWIyZG5aWEl1YVc1bWJ5Z25aVzVrS0NrbkxDQmhjR2tzSUdSeVpYTXNJSEpsY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWJHOW5aMlZ5TG1sdVptOG9KMlZ1WkNncEp5d2dZWEJwTENCa2NtVnpMQ0J5WlhNcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUM4dklDMHRJSGRoYkdzZ2NtVnpjRzl1YzJVZ1ptOXlJSFJ2Y0Mxc1pYWmxiQ0JsYm5ScGRIa2djbVZ6Y0c5dWMyVWdZWE56YVdkdWJXVnVkQ0F0TFNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lHbG1JQ2hsYm5ScGRHbGxjeWtnZXlCa2NtVnpJRDBnWkhKbGN5NWtaWEJzYjNseUxuSmxjM0J2Ym5ObFcyVnVkR2wwYVdWelhTQjhmQ0JrY21Wek95QjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ1pISmxjeTVuWlhRZ1BTQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIxZEdsc2N5NW5aWFFvWkhKbGN5NWtaWEJzYjNseUxuSmxjM0J2Ym5ObExDQnJaWGtwT3lCY2JpQWdJQ0FnSUNBZ0lDQWdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQmtjbVZ6TG5kdmNtdHpjR0ZqWlNBOUlHWjFibU4wYVc5dUtHNWhiV1VwSUhzZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIxZEdsc2N5NTNiM0pyYzNCaFkyVW9aSEpsY3k1a1pYQnNiM2x5TG5KbGMzQnZibk5sTENCdVlXMWxLVHNnWEc0Z0lDQWdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0x5OGdMUzBnWTJGc2JHSmhZMnNnTFMxY2JpQWdJQ0FnSUNBZ0lDQWdhV1lnS0dadUtTQjdJR0Z5WjNNZ1BTQm1iaTVoY0hCc2VTaHpaV3htTG5OamIzQmxMQ0JiWkhKbGN5d2djbVZ6Y0c5dWMyVkRhR0ZwYmwwcE8zMWNibHh1SUNBZ0lDQWdJQ0FnSUNBdkx5QXRMU0J1YjNScFpua2dkR2hoZENCMGFHVWdjWFZsZFdVZ2FHRnpJR0psWlc0Z1pISmhhVzVsWkM0dUxpQXRMVnh1SUNBZ0lDQWdJQ0FnSUNCcFppQW9jUzV6YVhwbEtDa2dQVDA5SURBcElIc2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ2MyVnNaaTVmWTJ4bFlYSW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQnpaV3htTG1SbFptVnljbVZrTG5KbGMyOXNkbVVvY21WemNHOXVjMlZEYUdGcGJpQjhmQ0JrY21WektUdGNiaUFnSUNBZ0lDQWdJQ0FnZlNBZ0lDQWdJQ0FnSUNCY2JseHVJQ0FnSUNBZ0lDQWdJQ0F2THlBdExTQnBibU5zZFdSbElHTnZiMnRwWlhNZ2FXNGdibVY0ZENCeVpYRjFaWE4wSUdsdUlIUm9aU0J4ZFdWMVpTQXRMVnh1SUNBZ0lDQWdJQ0FnSUNCaGNtZHpJRDBnYldWeVoyVW9ZWEpuY3l3Z2V5QmZYMk52YjJ0cFpYTmZYem9nYzJWc1ppNWpiMjlyYVdWeklIMHBPeUFnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlNBZ0lDQWdJQ0FnWEc1Y2JpQWdJQ0FnSUNBZ2NTNTVhV1ZzWkNobVlXeHpaU2s3WEc0Z0lDQWdJQ0FnSUhFdVpteDFjMmdvWkhKbGN5d2daWEp5YjNJc0lHRnlaM01wT3lBdkx5QndZWE56SUhKbGMzVnNkSHhsY25KdmNueGhjbWR6SUhSdklHNWxlSFFnWEc0Z0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ2NTNTVhV1ZzWkNoMGNuVmxLVHRjYmlBZ0lDQjlMQ0IwYUdsekxDQjBhR2x6TG1SbGJHRjVaV1FwTzF4dUlDQmNiaUFnSUNCcFppQW9JWFJvYVhNdVpHVnNZWGxsWkNBbUppQnhMbk5wZW1Vb0tTQThQU0F4S1NCN0lIRXVabXgxYzJnb0tUc2dmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMHNJRnh1WEc0Z0lDOHFLaUJjYmlBZ0lDb2dRV1JrSUdGdUlHRmtaR2wwYVc5dVlXd2dTVThnY21WeGRXVnpkQ0IwYnlCMGFHVWdaWGh6YVhOMGFXNW5JSE5sY1hWbGJuUnBZV3dnY21WeGRXVnpkQ0JqYUdGcGJpNWNiaUFnSUNwY2JpQWdJQ29nUUcxbGRHaHZaQ0JwYjF4dUlDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdZWEJwSUU5dVpTQnZaaUIwYUdVZ2MzVndjRzl5ZEdWa0lFUmxjR3h2ZVZJZ1FWQkpjeTVjYmlBZ0lDb2dRSEpsZEhWeWJpQjdSR1Z3Ykc5NVVuMGdabTl5SUdOb1lXbHVhVzVuTGx4dUlDQWdLaUJBWVhCcElIQjFZbXhwWTF4dUlDQWdLaThnSUNCY2JpQWdhVzg2SUdaMWJtTjBhVzl1SUNoaGNHa3BJSHNnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJRVJsY0d4dmVWSXVibVYzS0dGd2FTd2dleUJjYmlBZ0lDQWdJR052YjJ0cFpYTTZJSFJvYVhNdVkyOXZhMmxsY3l3Z1hHNGdJQ0FnSUNCeGRXVjFaVG9nZEdocGN5NXhMQ0JjYmlBZ0lDQWdJR1JsWm1WeWNtVmtPaUIwYUdsekxtUmxabVZ5Y21Wa1hHNGdJQ0FnZlNrN1hHNGdJSDBzWEc1Y2JpQWdMeW9xSUZ4dUlDQWdLaUJEYjI1MlpXNXBaVzVqWlNCbWRXNWpkR2x2YmlCbWIzSWdZV1JrYVc1bklHRnVJR0ZrWkdsMGFXOXVZV3dnYzJOeWFYQjBJR1Y0WldOMWRHbHZiaUIwYnlCMGFHVWdYRzRnSUNBcUlHVjRjMmx6ZEdsdVp5QnpaWEYxWlc1MGFXRnNJSEpsY1hWbGMzUWdZMmhoYVc0dVhHNGdJQ0FxWEc0Z0lDQXFJRUJ0WlhSb2IyUWdjMk55YVhCMFhHNGdJQ0FxSUVCd1lYSmhiU0I3UVhKbmRXMWxiblJ6ZlNCQmNtZDFiV1Z1ZEhNZ2RHOGdaR1ZtYVc1bElIUm9aU0JtZFd4c2VTQnhkV0ZzYVdacFpXUWdjMk55YVhCMElHWnZjaUJjYmlBZ0lDb2daWGhsWTNWMGFXOXVMbHh1SUNBZ0tpQkFjbVYwZFhKdUlIdEVaWEJzYjNsU2ZTQm1iM0lnWTJoaGFXNXBibWN1SUNBZ1hHNGdJQ0FxSUVCaGNHa2djSFZpYkdsalhHNGdJQ0FxTDF4dUlDQnpZM0pwY0hRNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQjJZWElnWVhKbmN5QTlJSFYwYVd4ekxuTnBaMjVoZEhWeVpTaGhjbWQxYldWdWRITXBMRnh1SUNBZ0lDQWdJQ0FnYjNCMGN5QTlJR0Z5WjNNdWIzQjBjeXhjYmlBZ0lDQWdJQ0FnSUdGd2FTQWdQU0JoY21kekxtRndhU3hjYmlBZ0lDQWdJQ0FnSUd4cGJtc2dQU0I3SUZ4dUlDQWdJQ0FnSUNBZ0lHTnZiMnRwWlhNNklIUm9hWE11WTI5dmEybGxjeXdnWEc0Z0lDQWdJQ0FnSUNBZ2NYVmxkV1U2SUhSb2FYTXVjU3dnWEc0Z0lDQWdJQ0FnSUNBZ1pHVm1aWEp5WldRNklIUm9hWE11WkdWbVpYSnlaV1JjYmlBZ0lDQWdJQ0FnZlRzZ0lGeHVYRzRnSUNBZ0x5OGdZMjl1ZG1WdWFXVnVZMlVnTFNCcFppQjBhR1VnY0hKdmFtVmpkQ0JwY3lCaElHSnZiMnhsYmlCZ2RISjFaV0FnY21GMGFHVnlJSFJvWVc0Z1lTQndhV1FzSUdacGNuTjBYRzRnSUNBZ0x5OGdZM0psWVhSbElHRWdibVYzSUhCeWIycGxZM1FnWVc1a0lIUm9aVzRnY0hKbGNHRnlaU0IwYUdVZ2NISnZhbVZqZENCaGNHa2dZMkZzYkNCMGJ5QmxlR1ZqZFhSbFhHNGdJQ0FnYVdZZ0tHRnlaM011WTNKbFlYUmxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdSR1Z3Ykc5NVVpNXVaWGNvSnk5eUwzQnliMnBsWTNRdlkzSmxZWFJsSnl3Z2JHbHVheWxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzVsYm1Rb1puVnVZM1JwYjI0b2NtVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZXlCd2NtOXFaV04wT2lCeVpYTXVaMlYwS0Nkd2NtOXFaV04wSnlrdWNISnZhbVZqZENCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVhVzhvWVhCcEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xtUmhkR0VvYjNCMGN5azdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJFWlhCc2IzbFNMbTVsZHloaGNHa3NJR3hwYm1zcExtUmhkR0VvYjNCMGN5azdYRzRnSUNBZ2ZTQWdJQ0JjYmlBZ2ZTeGNibHh1SUNBdktpb2dYRzRnSUNBcUlFTnZiblpsYm1sbGJtTmxJR1oxYm1OMGFXOXVJR1p2Y2lCaFpHUnBibWNnWVc0Z1lXUmthWFJwYjI1aGJDQnlaWEJ2YzJsMGIzSjVMVzFoYm1GblpXUWdjMmhsYkd3Z1hHNGdJQ0FxSUhOamNtbHdkQ0JsZUdWamRYUnBiMjRnZEc4Z2RHaGxJR1Y0YzJsemRHbHVaeUJ6WlhGMVpXNTBhV0ZzSUhKbGNYVmxjM1FnWTJoaGFXNHVYRzRnSUNBcVhHNGdJQ0FxSUZSb2FYTWdZMkZzYkNCbGVHVmpkWFJsY3lCeVpYQnZjMmwwYjNKNUxXMWhibUZuWldRZ2MyaGxiR3dnYzJOeWFYQjBjeUF1YzJnc0lDNWpjMmdzSUM1aVlYTm9MQ0F1WW1GMElGeHVJQ0FnS2lCdmJpQjBhR1VnUkdWd2JHOTVVaUJ6WlhKMlpYSXVJRVIxWlNCMGJ5QjBhR1VnYzNCbFkybGhiQ0J6WldOMWNtbDBlU0JqYjI1alpYSnVjeUJoYzNOdlkybGhkR1ZrSUhkcGRHZ2dYRzRnSUNBcUlHVjRZM1YwYVc1bklITm9aV3hzSUhOamNtbHdkSE1nYjI0Z2RHaGxJRVJsY0d4dmVWSWdjMlZ5ZG1WeUxDQnZibXg1SUhOb1pXeHNJSE5qY21sd2RITWdiM2R1WldRZ1lua2dYRzRnSUNBcUlGOUJSRTFKVGtsVFZGSkJWRTlTWHlCMWMyVnljeUJqWVc0Z1ltVWdaWGhsWTNWMFpXUWdiMjRnZEdocGN5QkJVRWtnWTJGc2JDNGdRVzU1SUdGMGRHVnRjSFFnZEc4Z1hHNGdJQ0FxSUdWNFpXTjFkR1VnWVNCemFHVnNiQ0J6WTNKcGNIUWdjM1J2Y21Wa0lHbHVJSFJvWlNCeVpYQnZjMmwwYjNKNUlIUm9ZWFFnYVhNZ2JtOTBJRzkzYm1Wa0lHSjVJR0Z1SUZ4dUlDQWdLaUJmUVVSTlNVNUpVMVJTUVZSUFVsOGdkWE5sY2lCM2FXeHNJR0psSUhKbGFtVmpkR1ZrTGx4dUlDQWdLbHh1SUNBZ0tpQlVieUJsZUdWamRYUmxJR0VnY21Wd2IzTnBkRzl5ZVMxdFlXNWhaMlZrSUhOb1pXeHNJSE5qY21sd2RDQjBhR1VnWTJGc2JHVnlJRzExYzNRZ2NISnZkbWxrWlNCY2JpQWdJQ29nY0dGeVlXMWxkR1Z5SUhaaGJIVmxjeUJtYjNJZ1gyRjFkR2h2Y2w4c0lGOWthWEpsWTNSdmNubGZMQ0JmWm1sc1pXNWhiV1ZmTGlCVWFHbHpJR05oYmlCaVpWeHVJQ0FnS2lCaFkyaHBaWFpsWkNCaWVTQndjbTkyYVdScGJtY2dZU0JtZFd4c2VTQnhkV0ZzYVdacFpXUWdjMmhsYkd3Z2MyTnlhWEIwSUZ4dUlDQWdLaUJnTHp4aGRYUm9iM0krTHp4a2FYSmxZM1J2Y25rK0x6eG1hV3hsYm1GdFpUNWdMQ0JtYjNJZ1pYaGhiWEJzWlRwY2JpQWdJQ3BjYmlBZ0lDb2dJR0JnWUZ4dUlDQWdLaUFnTG5Ob1pXeHNLQ2N2WVdSdGFXNHZaWGgwWlhKdVlXdzZjSFZpYkdsak9tRmtiV2x1TDJWamFHOHVjMmduTENBblpXTm9ieTV6YUNCaGNtZHpJSFJ2SUhCaGMzTXVKeWxjYmlBZ0lDb2dJR0JnWUZ4dUlDQWdLbHh1SUNBZ0tpQkFiV1YwYUc5a0lITm9aV3hzWEc0Z0lDQXFJRUJ3WVhKaGJTQjdVM1J5YVc1bmZTQm1hV3hsY0dGMGFDQjBieUJrWldacGJtVWdkR2hsSUdaMWJHeDVJSEYxWVd4cFptbGxaQ0J6YUdWc2JDQnpZM0pwY0hRZ1ptOXlYRzRnSUNBcUlHVjRaV04xZEdsdmJpNGdYRzRnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCaGNtZHpJQ2h2Y0hScGIyNWhiQ2tnWVhKbmRXMWxiblJ6SUhSdklHSmxJSEJoYzNObFpDQnBiblJ2SUhSb1pTQnphR1ZzYkNCY2JpQWdJQ29nYzJOeWFYQjBJRzl1SUdWNFpXTjFkR2x2Ymk1Y2JpQWdJQ29nUUhKbGRIVnliaUI3UkdWd2JHOTVVbjBnWm05eUlHTm9ZV2x1YVc1bkxpQWdJRnh1SUNBZ0tpQkFZWEJwSUhCMVlteHBZMXh1SUNBZ0tpOWNiaUFnYzJobGJHdzZJR1oxYm1OMGFXOXVLSEJoZEdnc0lHRnlaM01wSUhzZ0lDQmNiaUFnSUNCMllYSWdiR2x1YXlBOUlIc2dYRzRnSUNBZ0lDQWdJQ0FnWTI5dmEybGxjem9nZEdocGN5NWpiMjlyYVdWekxDQmNiaUFnSUNBZ0lDQWdJQ0J4ZFdWMVpUb2dkR2hwY3k1eExDQmNiaUFnSUNBZ0lDQWdJQ0JrWldabGNuSmxaRG9nZEdocGN5NWtaV1psY25KbFpGeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0IwYjJ0bGJuTWdQU0JNWVc1bkxtbHpVM1J5YVc1bktIQmhkR2dwSUQ4Z2NHRjBhQzV6Y0d4cGRDZ25YRnd2SnlrZ09pQmJYVHRjYmx4dUlDQWdJQzh2SUdoaGJtUnNaU0JpYjNSb09pQmdMMkYxZEdodmNpOWthWEpsWTNSdmNua3ZabWxzWlc1aGJXVmdJQ1lnWUdGMWRHaHZjaTlrYVhKbFkzUnZjbmt2Wm1sc1pXNWhiV1ZnWEc0Z0lDQWdhV1lnS0hSdmEyVnVjeTVzWlc1bmRHZ2dQaUF6S1NCN0lIUnZhMlZ1Y3lBOUlIUnZhMlZ1Y3k1emJHbGpaU2d4S1RzZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUVSbGNHeHZlVkl1Ym1WM0tDY3ZjaTl5WlhCdmMybDBiM0o1TDNOb1pXeHNMMlY0WldOMWRHVW5MQ0JzYVc1cktTNWtZWFJoS0h0Y2JpQWdJQ0FnSUdGMWRHaHZjam9nZEc5clpXNXpXekJkTEZ4dUlDQWdJQ0FnWkdseVpXTjBiM0o1T2lCMGIydGxibk5iTVYwc1hHNGdJQ0FnSUNCbWFXeGxibUZ0WlRvZ2RHOXJaVzV6V3pKZExGeHVJQ0FnSUNBZ1lYSm5jem9nWVhKbmMxeHVJQ0FnSUgwcE8xeHVJQ0I5TEZ4dVhHNGdJQzhxS2lCY2JpQWdJQ29nUTI5dWRtVnVhV1Z1WTJVZ1puVnVZM1JwYjI0Z1ptOXlJR1Y0WldOMWRHbHVaeUJoSUdKc2IyTnJJRzltSUZJZ1kyOWtaU0J2YmlCMGFHVWdVaUJ6WlhOemFXOXVMbHh1WEc0Z0lDQXFJRVY0WVcxd2JHVTZYRzRnSUNBcUlDQmdZR0JjYmlBZ0lDb2dJQzVqYjJSbEtDZDRQQzAxSnlsY2JpQWdJQ29nSUM4dklDMHRJRzl5SUMwdFhHNGdJQ0FxSUNBdVkyOWtaU2duZUR3dE5TY3NJSEJ5YjJwbFkzUkpaQ2xjYmlBZ0lDb2dJR0JnWUZ4dUlDQWdLaUFnSUZ4dUlDQWdLaUJBYldWMGFHOWtJR052WkdWY2JpQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJSElnTFNCVWFHVWdZbXh2WTJzZ2IyWWdVaUJqYjJSbElIUnZJR1Y0WldOMWRHVXVYRzRnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCd2NtOXFaV04wSUMwZ0tHOXdkR2x2Ym1Gc0tTQnBaaUJ2YldsMGRHVmtJR0VnYm1WM0lIQnliMnBsWTNRZ2QybHNiQ0JtYVhKemRDQmlaU0JjYmlBZ0lDb2dZM0psWVhSbFpDQmhibVFnZFhObFpDd2diM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2daWGhsWTNWMFpTQnZiaUIwYUdVZ1VpQnpaWE56YVc5dUlHbGtaVzUwYVdacFpXUWdZbmtnWEc0Z0lDQXFJSFJvYVhNZ1lIQnliMnBsWTNSZ0xseHVJQ0FnS2lCQWNtVjBkWEp1SUh0RVpYQnNiM2xTZlNCbWIzSWdZMmhoYVc1cGJtY3VJQ0FnWEc0Z0lDQXFJRUJoY0drZ2NIVmliR2xqWEc0Z0lDQXFMMXh1SUNCamIyUmxPaUJtZFc1amRHbHZiaWh5TENCd2NtOXFaV04wS1NCN1hHNGdJQ0FnSUhaaGNpQnNhVzVySUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmIydHBaWE02SUhSb2FYTXVZMjl2YTJsbGN5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNCeGRXVjFaVG9nZEdocGN5NXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lHUmxabVZ5Y21Wa09pQjBhR2x6TG1SbFptVnljbVZrWEc0Z0lDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQWdZWEJwSUQwZ0p5OXlMM0J5YjJwbFkzUXZaWGhsWTNWMFpTOWpiMlJsSnp0Y2JseHVJQ0FnSUNCcFppQW9JWEJ5YjJwbFkzUXBJSHRjYmlBZ0lDQWdJQ0FnSUhKbGRIVnliaUJFWlhCc2IzbFNMbTVsZHlnbkwzSXZjSEp2YW1WamRDOWpjbVZoZEdVbkxDQnNhVzVyS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQzVsYm1Rb1puVnVZM1JwYjI0b2NtVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUI3SUhCeWIycGxZM1E2SUhKbGN5NW5aWFFvSjNCeWIycGxZM1FuS1M1d2NtOXFaV04wSUgwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0F1YVc4b1lYQnBLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDNWtZWFJoS0hzZ1kyOWtaVG9nY2lCOUtUdGNiaUFnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCRVpYQnNiM2xTTG01bGR5aGhjR2tzSUd4cGJtc3BMbVJoZEdFb2V5QmpiMlJsT2lCeUxDQndjbTlxWldOME9pQndjbTlxWldOMElIMHBPMXh1SUNBZ0lDQjlYRzRnSUgwc1hHNGdJRnh1SUNBdktpb2dYRzRnSUNBcUlGSmxiR1ZoYzJVZ1lXNTVJSEpsYzJsa2RXRnNJSEJ5YjJwbFkzUWdjbVZ6YjNWeVkyVnpJR0Z6YzI5amFXRjBaV1FnZDJsMGFDQjBhR1VnWVhCd2JHbGpZWFJwYjI0Z1hHNGdJQ0FxSUdsdWMzUmhibU5sSUhkb1pXNWxkbVZ5SUdFZ1kyeHBaVzUwSUdGd2NHeHBZMkYwYVc5dUlIUmxjbTFwYm1GMFpYTXVJRlJvYVhNZ2FXNWpiSFZrWlhNZ1kyeHZjMmx1WnlCY2JpQWdJQ29nWVc1NUlITjFjSEJzYVdWa0lIQnliMnBsWTNSeklHUnZkMjRnWVc1a0lHeHZaMmRwYm1jZ2IzVjBMbHh1SUNBZ0tseHVJQ0FnS2lCQWJXVjBhRzlrSUhKbGJHVmhjMlZjYmlBZ0lDb2dRSEJoY21GdElIdFRkSEpwYm1kOFFYSnlZWGw5SUhCeWIycGxZM1J6SUZSb1pTQndjbTlxWldOMElHOXlJR3hwYzNRZ2IyWWdjSEp2YW1WamRITWdkRzhnWTJ4dmMyVXVYRzRnSUNBcUlFQndZWEpoYlNCN1FtOXZiR1ZoYm4wZ1lYVjBhQ0FvYjNCMGFXOXVZV3dwSUhSdklISmxiV0ZwYmlCaGRYUm9aVzUwYVdOaGRHVmtMbHh1SUNBZ0tpQkFjbVYwZFhKdUlIdEVaWEJzYjNsU2ZTQm1iM0lnWTJoaGFXNXBibWN1SUNBZ1hHNGdJQ0FxSUVCaGNHa2djSFZpYkdsalhHNGdJQ0FxTDF4dUlDQnlaV3hsWVhObE9pQm1kVzVqZEdsdmJpaHdjbTlxWldOMGN5d2dZWFYwYUNrZ2UxeHVJQ0FnSUNCd2NtOXFaV04wY3lBOUlFeGhibWN1YVhOQmNuSmhlU2h3Y205cVpXTjBjeWtnUHlCd2NtOXFaV04wY3lBNklGdHdjbTlxWldOMGMxMDdYRzVjYmlBZ0lDQWdkbUZ5SUhObGJHWWdJQ0FnSUQwZ2RHaHBjeXhjYmlBZ0lDQWdJQ0FnSUdSbFptVnljbVZrSUQwZ1JDZ3BMRnh1SUNBZ0lDQWdJQ0FnWlcxd2RIa2dJQ0FnUFNBaGNISnZhbVZqZEhNZ2ZId2dJWEJ5YjJwbFkzUnpXekJkTEZ4dUlDQWdJQ0FnSUNBZ1kyOTFiblFnSUNBZ1BTQXdMRnh1SUNBZ0lDQWdJQ0FnYkdGemRDQWdJQ0FnUFNBaFpXMXdkSGtnUHlCd2NtOXFaV04wY3k1c1pXNW5kR2dnTFNBeElEb2dZMjkxYm5Rc1hHNGdJQ0FnSUNBZ0lDQmpiMjlyYVdWeklDQTlJSFJvYVhNdVoyVjBRMjl2YTJsbGN5Z3BPeUFnSUNBZ0lDQWdJQ0FnWEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJzYjJkdmRYUW9hVzVrWlhncElIdGNiaUFnSUNBZ0lHbG1JQ2hwYm1SbGVDQTlQVDBnYkdGemRDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXRjFkR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQkVaWEJzYjNsU0xtNWxkeWduTDNJdmRYTmxjaTlzYjJkdmRYUW5LVnh1SUNBZ0lDQWdJQ0FnSUM1emFHRnlaU2hqYjI5cmFXVnpLVnh1SUNBZ0lDQWdJQ0FnSUM1bGNuSnZjaWhtZFc1amRHbHZiaWdwSUhzZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldabGNuSmxaQzV5WldwbFkzUW9abUZzYzJVcE8xeHVJQ0FnSUNBZ0lDQWdJSDBwSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnTG1WdVpDaG1kVzVqZEdsdmJpZ3BJSHNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1psY25KbFpDNXlaWE52YkhabEtIUnlkV1VwTzF4dUlDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQ0FnTG1WdWMzVnlaU2htZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdVpHVnpkSEp2ZVNncE8xeHVJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lHUmxabVZ5Y21Wa0xuSmxjMjlzZG1Vb2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ2MyVnNaaTVrWlhOMGNtOTVLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwZ1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tDRmxiWEIwZVNrZ2UxeHVJQ0FnSUNBZ2NISnZhbVZqZEhNdVptOXlSV0ZqYUNobWRXNWpkR2x2Ymlod2NtOXFaV04wS1NCN1hHNGdJQ0FnSUNBZ0lFUmxjR3h2ZVZJdWJtVjNLQ2N2Y2k5d2NtOXFaV04wTDJOc2IzTmxKeWxjYmlBZ0lDQWdJQ0FnTG1SaGRHRW9leUJ3Y205cVpXTjBPaUJ3Y205cVpXTjBJSDBwWEc0Z0lDQWdJQ0FnSUM1emFHRnlaU2hqYjI5cmFXVnpLVnh1SUNBZ0lDQWdJQ0F1Wlc1a0tDbGNiaUFnSUNBZ0lDQWdMbVZ1YzNWeVpTaG1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCc2IyZHZkWFFvWTI5MWJuUXBPMXh1SUNBZ0lDQWdJQ0FnSUdOdmRXNTBLeXM3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ2ZTazdJQ0FnWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHeHZaMjkxZENoamIzVnVkQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHUmxabVZ5Y21Wa0xuQnliMjFwYzJVN0lDQmNiaUFnZlN3Z0lGeHVYRzRnSUM4cUtpQmNiaUFnSUNvZ1FTQmpiMjUyWlc1cFpXNWpaU0JoYkhSbGNtNWhkR2wyWlNCMGJ5QnRkV3gwYVhCc1pTQmdMbkpwYm5CMWRDZ3BZQ0JqWVd4c2N5NGdSR1ZtYVc1bGN5QmhJRzVoYldVZ1hHNGdJQ0FxSUd4cGMzUWdiMllnVWlCdlltcGxZM1J6SUhSb1lYUWdkMmxzYkNCaVpTQnlaWFIxY201bFpDQmhjeUJFWlhCc2IzbFNMV1Z1WTI5a1pXUWdVaUJ2WW1wbFkzUnpJRzl1SUhSb1pTQmNiaUFnSUNvZ2NtVnpjRzl1YzJVZ2JXRnlhM1Z3TGx4dUlDQWdLbHh1SUNBZ0tpQkRZV3hzYVc1bklIUm9hWE1nYldWMGFHOWtJSDR1Y205MWRIQjFkSE1vV3lBdUxpNGdYU2xnSUdseklHVnhkV2wyWVd4bGJuUWdkRzhnYVc1MmIydHBibWNnYlhWc2RHbHdiR1VnWEc0Z0lDQXFJR0F1Y205MWRIQjFkQ2d1TGk0cFlDQmpZV3hzY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRRzFsZEdodlpDQnliM1YwY0hWMGMxeHVJQ0FnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0J5YjJKcVpXTjBjeUJCSUc1aGJXVWdiR2x6ZENCdlppQlNJRzlpYW1WamRITWdkR2hoZENCM2FXeHNJR0psSUhKbGRIVnlibVZrTGx4dUlDQWdLaUJBY21WMGRYSnVJSHRFWlhCc2IzbFNmU0JtYjNJZ1kyaGhhVzVwYm1jdUlDQWdYRzRnSUNBcUlFQmhjR2tnY0hWaWJHbGpYRzRnSUNBcUwxeHVJQ0J5YjNWMGNIVjBjem9nWm5WdVkzUnBiMjRnS0hKdmRYUndkWFJ6S1NCN1hHNGdJQ0FnYVdZZ0tISnZkWFJ3ZFhSektTQjdJSFJvYVhNdWIzVjBjSFYwY3lBOUlIUm9hWE11YjNWMGNIVjBjeTVqYjI1allYUW9jbTkxZEhCMWRITXBPeUI5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmU3hjYmlBZ1hHNGdJQzhxS2lCY2JpQWdJQ29nUkdWbWFXNWxjeUIwYUdVZ2JtRnRaU0J2WmlCMGFHVWdVaUJ2WW1wbFkzUWdkR2hoZENCM2FXeHNJR0psSUhKbGRIVnlibVZrSUdGeklHRWdSR1Z3Ykc5NVVpMWxibU52WkdWa0lGeHVJQ0FnS2lCU0lHOWlhbVZqZENCdmJpQjBhR1VnY21WemNHOXVjMlVnYldGeWEzVndMbHh1SUNBZ0tseHVJQ0FnS2lCQWJXVjBhRzlrSUhKdmRYUndkWFJjYmlBZ0lDb2dRSEJoY21GdElIdFRkSEpwYm1kOUlISnZZbXBsWTNRZ1ZHaGxJRzVoYldVZ2IyWWdkR2hsSUZJZ2IySnFaV04wSUhSb1lYUWdkMmxzYkNCaVpTQnlaWFIxY201bFpDNWNiaUFnSUNvZ1FISmxkSFZ5YmlCN1JHVndiRzk1VW4wZ1ptOXlJR05vWVdsdWFXNW5MaUFnSUZ4dUlDQWdLaUJBWVhCcElIQjFZbXhwWTF4dUlDQWdLaTljYmlBZ2NtOTFkSEIxZERvZ1puVnVZM1JwYjI0Z0tISnZkWFJ3ZFhRcElIdGNiaUFnSUNCcFppQW9jbTkxZEhCMWRDa2dleUIwYUdsekxuSnZkWFJ3ZFhSektGdHliM1YwY0hWMFhTazdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlMRnh1WEc0Z0lDOHFLaUJjYmlBZ0lDb2dWWE5sWkNCMGJ5QndZWE56SUcxMWJIUnBjR3hsSUdsdWNIVjBjeUJoZENCdmJtTmxJR1p5YjIwZ1NtRjJZVk5qY21sd2RDQjBieUJoYmlCU0lITmpjbWx3ZENCMWMybHVaeUJjYmlBZ0lDb2diMjVsSUc5bUlIUm9aU0JrWldacGJtVmtJR0JTU1c1d2RYUmdJR1poWTNSdmNtbGxjeTVjYmlBZ0lDcGNiaUFnSUNvZ1FHMWxkR2h2WkNCeWFXNXdkWFJ6WEc0Z0lDQXFJRUJ3WVhKaGJTQjdRWEp5WVhsOUlISnBibkIxZEhNZ1ZHaGxJR0JTU1c1d2RYUmdJR3hwYzNRZ2IyWWdSR1Z3Ykc5NVVpMXpjR1ZqYVdacFl5QmxibU52WkdWa0lGSWdYRzRnSUNBcUlHOWlhbVZqZENCa1lYUmhJR1p2Y2lCMWMyVWdiMjRnWVc0Z1FWQkpJR05oYkd3dVhHNGdJQ0FxSUVCeVpYUjFjbTRnZTBSbGNHeHZlVko5SUdadmNpQmphR0ZwYm1sdVp5NGdJQ0JjYmlBZ0lDb2dRR0Z3YVNCd2RXSnNhV05jYmlBZ0lDb3ZYRzRnSUhKcGJuQjFkSE02SUdaMWJtTjBhVzl1SUNoeWFXNXdkWFJ6S1NCN1hHNGdJQ0FnYVdZZ0tISnBibkIxZEhNcElIc2dkR2hwY3k1cGJuQjFkSE1nUFNCMGFHbHpMbWx1Y0hWMGN5NWpiMjVqWVhRb2NtbHVjSFYwY3lrN0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOUxGeHVYRzRnSUM4cUtpQmNiaUFnSUNvZ1ZYTmxaQ0IwYnlCd1lYTnpJRzExYkhScGNHeGxJR2x1Y0hWMGN5QmhkQ0J2Ym1ObElHWnliMjBnU21GMllWTmpjbWx3ZENCMGJ5QmhiaUJTSUhOamNtbHdkQ0IxYzJsdVp5QmNiaUFnSUNvZ2IyNWxJRzltSUhSb1pTQmtaV1pwYm1Wa0lHQlNTVzV3ZFhSZ0lHWmhZM1J2Y21sbGN5NWNiaUFnSUNwY2JpQWdJQ29nUUcxbGRHaHZaQ0J5YVc1d2RYUmNiaUFnSUNvZ1FIQmhjbUZ0SUh0U1NXNXdkWFI5SUhKcGJuQjFkQ0JVYUdVZ1JHVndiRzk1VWkxemNHVmphV1pwWXlCbGJtTnZaR1ZrSUZJZ2IySnFaV04wSUdSaGRHRWdabTl5SUhWelpTQmNiaUFnSUNvZ2IyNGdZVzRnUVZCSklHTmhiR3d1SUNBZ1hHNGdJQ0FxSUVCeVpYUjFjbTRnZTBSbGNHeHZlVko5SUdadmNpQmphR0ZwYm1sdVp5NGdJQ0JjYmlBZ0lDb2dRR0Z3YVNCd2RXSnNhV05jYmlBZ0lDb3ZYRzRnSUhKcGJuQjFkRG9nWm5WdVkzUnBiMjRnS0hKcGJuQjFkQ2tnZTF4dUlDQWdJR2xtSUNoeWFXNXdkWFFwSUhzZ2RHaHBjeTVwYm5CMWRITXVjSFZ6YUNoeWFXNXdkWFFwT3lCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUkdWemRISnZlU0JzYVdabFkzbGpiR1VnYldWMGFHOWtMaUJHYVhKbGN5QjBhR1VnWUdSbGMzUnliM2xnSUdWMlpXNTBMQ0J3Y21sdmNpQjBieUJwYm5admEybHVaeUJjYmlBZ0lDb2daR1Z6ZEhKMVkzUnZjbk1nWm05eUlIUm9aU0JqYkdGemN5Qm9hV1Z5WVhKamFIa3VJRU5oYkd4bFpDQnBiblJsY201aGJHeDVJSGRvWlc0Z1lDNXlaV3hsWVhObEtDbGdYRzRnSUNBcUlHbHpJR05oYkd4bFpDNWNiaUFnSUNwY2JpQWdJQ29nUUcxbGRHaHZaQ0JrWlhOMGNtOTVYRzRnSUNBcUlFQmhjR2tnY0hWaWJHbGpJQ0FnWEc0Z0lDQXFMMXh1SUNCa1pYTjBjbTk1T2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJSFJvYVhNdVpXMXBkQ2duWkdWemRISnZlU2NwTzF4dUlDQWdJQ0FnZEdocGN5NXZabVpCYkd3b0tUdGNiaUFnSUNCY2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUIwYUdsektTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUhzZ1hHNGdJQ0FnSUNBZ0lDQWdkR2hwYzF0clpYbGRJRDBnYm5Wc2JEc2dYRzRnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJSFJvYVhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWTJGMFkyZ29aWEp5S1NCN2ZWeHVJQ0I5TENBZ1hHNWNiaUFnTHk4Z0xTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaUFnTHk4Z1VISnBkbUYwWlNCdFpYUm9iMlJ6WEc0Z0lDOHZJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUJoY0drZ2NISnBkbUYwWlZ4dUlDQWdLaTljYmlBZ1gyTnNaV0Z5T2lCbWRXNWpkR2x2YmlncElIc2dJQ0FnWEc0Z0lDQWdkR2hwY3k1d1lYSmhiWE1nSUNBOUlIdDlPMXh1SUNBZ0lIUm9hWE11YVc1d2RYUnpJQ0FnUFNCYlhUdGNiaUFnSUNCMGFHbHpMbTkxZEhCMWRITWdJRDBnVzEwN1hHNGdJQ0FnZEdocGN5NXljM1J5WldGdElDQTlJR1poYkhObE8xeHVJQ0FnSUhSb2FYTXVaR1ZzWVhsbFpDQWdQU0JtWVd4elpUdGNiaUFnSUNCMGFHbHpMbUZ3YVNBZ0lDQWdJRDBnYm5Wc2JEc2dJQ0FnWEc0Z0lDQWdkR2hwY3k1bWFXeGxJQ0FnSUNBOUlHNTFiR3c3SUNCY2JpQWdJQ0IwYUdsekxtVnVkR2wwYVdWeklEMGdiblZzYkR0Y2JpQWdJQ0IwYUdsekxtbHZSbWxzZEdWeUlEMGdiblZzYkR0Y2JpQWdmU3dnWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUJoY0drZ2NISnBkbUYwWlZ4dUlDQWdLaTljYmlBZ1gzQnlaWEJTWlhGMVpYTjBPaUJtZFc1amRHbHZiaUFvY21WemNHOXVjMlZEYUdGcGJpd2dZWEpuY3lrZ2UxeHVJQ0FnSUhaaGNpQnlaWEVnSUQwZ2RHaHBjeTV5WlhFc1hHNGdJQ0FnSUNBZ0lHWnBiR1VnUFNCMGFHbHpMbVpwYkdVN1hHNWNiaUFnSUNBdkx5QnpaWFFnZEdobElISmxjWFZsYzNRZ2RIbHdaU0FnSUNCY2JpQWdJQ0JwWmlBb2RHaHBjeTVoY0drdWRYQnNiMkZrS1NCN1hHNGdJQ0FnSUNBZ0x5OGdTV1lnZEdobElHVnVkaUJwY3lCMGFHVWdRbkp2ZDNObGNpQjBhR1Z5WlNCcGN5QnVieUJ1WldWa0lIUnZJRzFoYm5WaGJHeDVJSE5sZENCMGFHVmNiaUFnSUNBZ0lDQXZMeUJEYjI1MFpXNTBMVlI1Y0dVdUlGUm9aU0JpY205M2MyVnlJSGRwYkd3Z1lYVjBiMjFoZEdsallXeHNlU0J6WlhRZ2RHaGxJRnh1SUNBZ0lDQWdJQzh2SUZ3aWJYVnNkR2x3WVhKMEwyWnZjbTB0WkdGMFlUc2dZbTkxYm1SaGNuazlMaTR1WENJZ2RtRnNkV1V1SUVsbUlIUm9aU0JsYm5ZZ2FYTWdUbTlrWlNCM1pTQnVaV1ZrWEc0Z0lDQWdJQ0FnTHk4Z2RHOGdjMlYwSUdsMElHMWhiblZoYkd4NUxseHVJQ0FnSUNBZ0lHbG1JQ2doZDJsdUtTQjdJSFJvYVhNdWNtVnhMblI1Y0dVb0oyMTFiSFJwY0dGeWRDOW1iM0p0TFdSaGRHRW5LVHNnZlNBZ0lDQmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WeExuUjVjR1VvSjJadmNtMG5LVHRjYmlBZ0lDQjlJQ0FnSUZ4dVhHNGdJQ0FnY21WeExtOXVLQ2RsY25KdmNpY3NJR1oxYm1OMGFXOXVLR1Z5Y2lrZ2V5QmNiaUFnSUNBZ0lHVnljaUE5SUdWeWNpQjhmQ0I3SUNCamIyUmxPaUFuVlU1TFRrOVhUaUJEVDBSRkp5d2dkR1Y0ZERvZ0oxVk9TMDVQVjA0Z1JWSlNUMUluSUgwN1hHNWNiaUFnSUNBZ0lIUm9hWE11WDJoaGJtUnNaVVZ5Y205eUtIc2dYRzRnSUNBZ0lDQWdJSE4wWVhSMWN6b2daWEp5TG1OdlpHVWdmSHdnSjFWT1MwNVBWMDRnUTA5RVJTY3NYRzRnSUNBZ0lDQWdJSFJsZUhRNklHVnljbHh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmUzVpYVc1a0tIUm9hWE1wS1RzZ0lDQWdYRzVjYmlBZ0lDQjBhR2x6TG5Ob1lYSmxLR0Z5WjNNZ1B5QmhjbWR6TGw5ZlkyOXZhMmxsYzE5ZklEb2diblZzYkNrN1hHNWNiaUFnSUNBdkx5QmhjbWQxYldWdWRITWdjbVYwZFhKdVpXUWdabkp2YlNCd2NtVjJJSEpsY1hWbGMzUW5jeUJwYnlncExtVnVaQ2htZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SUhnN0lIMHBYRzRnSUNBZ2FXWWdLR0Z5WjNNcElIc2dYRzRnSUNBZ0lDQWdkR2hwY3k1a1lYUmhLR0Z5WjNNcE8xeHVJQ0FnSUgwZ1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1cGJuQjFkSE11YkdWdVozUm9JRDRnTUNrZ2V5QmNiaUFnSUNBZ0lIUm9hWE11WkdGMFlTaDdJR2x1Y0hWMGN6b2daVzVqYjJSbGNpNWxibU52WkdVb2RHaHBjeTVwYm5CMWRITXBJSDBwT3lCY2JpQWdJQ0I5WEc0Z0lGeHVJQ0FnSUdsbUlDaDBhR2x6TG05MWRIQjFkSE11YkdWdVozUm9JRDRnTUNrZ2V5QmNiaUFnSUNBZ0lIUm9hWE11WkdGMFlTaDdJSEp2WW1wbFkzUnpPaUIwYUdsekxtOTFkSEIxZEhNdWFtOXBiaWdwSUgwcE95QmNiaUFnSUNCOUlDQWdJRnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVZMjl2YTJsbGN5a2dleUFnSUNBZ1hHNGdJQ0FnSUNCMGFHbHpMbU52YjJ0cFpYTXVabTl5UldGamFDZ2dablZ1WTNScGIyNG9ZeWtnZXlCeVpYRXVjMlYwS0NkRGIyOXJhV1VuTENCaktUc2dmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVZWEJwTG5Wd2JHOWhaQ2tnZXlBZ0lDQmNiaUFnSUNBZ0lHWnZjaWgyWVhJZ2NDQnBiaUIwYUdsekxuQmhjbUZ0Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnlaWEV1Wm1sbGJHUW9jQ3dnS0hSb2FYTXVjR0Z5WVcxelczQmRJSHg4SUhSb2FYTXVjR0Z5WVcxelczQmRJRDA5UFNCbVlXeHpaU2tnUHlCY2JpQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d1lYSmhiWE5iY0YwZ0t5QW5KeUE2SUNjbktUdGNiaUFnSUNBZ0lIMGdYRzRnSUNBZ0lDQnlaWEV1WVhSMFlXTm9LQ2RtYVd4bEp5d2dkR2hwY3k1eWMzUnlaV0Z0SUQ4Z1puTXVZM0psWVhSbFVtVmhaRk4wY21WaGJTaG1hV3hsS1NBNklHWnBiR1VwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWEZiZEdocGN5NWhjR2t1YldWMGFHOWtJRDA5UFNBblIwVlVKeUEvSUNkeGRXVnllU2NnT2lBbmMyVnVaQ2RkS0hSb2FYTXVjR0Z5WVcxektUdGNiaUFnSUNCOUlGeHVJQ0I5TEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJBWVhCcElIQnlhWFpoZEdWY2JpQWdJQ292WEc0Z0lGOW9ZVzVrYkdWRmNuSnZjam9nWm5WdVkzUnBiMjRnS0hKaGR5a2dlMXh1SUNBZ0lIWmhjaUJ6ZEdGMElDQTlJSEpoZHk1emRHRjBkWE1zWEc0Z0lDQWdJQ0FnSUhKbGN5QWdJRDBnS0hKaGR5NWliMlI1SUNZbUlISmhkeTVpYjJSNUxtUmxjR3h2ZVhJZ1B5QnlZWGN1WW05a2VTQTZJSEpoZHlrc1hHNGdJQ0FnSUNBZ0lHVnljbTl5SUQwZ0tDaHpkR0YwSUNFOVBTQXlNREFwSUh4OElISmxjeTVrWlhCc2IzbHlJQ1ltSUNGeVpYTXVaR1Z3Ykc5NWNpNXlaWE53YjI1elpTNXpkV05qWlhOektUdGNibHh1SUNBZ0lDOHZJQzB0SUVoaGJtUnNaU0JsY25KdmNuTWdMUzFjYmlBZ0lDQnBaaUFvWlhKeWIzSXBJSHRjYmlBZ0lDQWdJSEpsY3lBOUlIdGNiaUFnSUNBZ0lDQWdaMlYwT2lCbWRXNWpkR2x2YmloclpYa3BJSHNnWEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhWMGFXeHpMbWRsZENoMGFHbHpMbVJsY0d4dmVYSXVjbVZ6Y0c5dWMyVXNJR3RsZVNrN0lGeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JrWlhCc2IzbHlPaUI3SUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lISmxjM0J2Ym5ObE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemRXTmpaWE56T2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiR3c2SUhSb2FYTXVZWEJwV3lkallXeHNKMTBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxjbkp2Y2tOdlpHVTZJSEpsY3k1a1pYQnNiM2x5SUQ4Z2NtVnpMbVJsY0d4dmVYSXVjbVZ6Y0c5dWMyVXVaWEp5YjNKRGIyUmxJRG9nYzNSaGRDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWeWNtOXlPaUJ5WlhNdVpHVndiRzk1Y2lBL0lISmxjeTVrWlhCc2IzbHlMbkpsYzNCdmJuTmxMbVZ5Y205eUlEb2djbVZ6TG5SbGVIUmNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lFeHZaMmRsY2k1bGNuSnZjaWduWlhKeWIzSW9LU2NzSUhSb2FYTXVZWEJwTENCeVpYTXNJSEpoZHlrN1hHNGdJQ0FnSUNCMGFHbHpMbXh2WjJkbGNpNWxjbkp2Y2lnblpYSnliM0lvS1Njc0lIUm9hWE11WVhCcExDQnlaWE1zSUhKaGR5azdYRzVjYmlBZ0lDQWdJQzh2SUMwdElHNXZkR2xtZVNCbmJHOWlZV3dnWlhKeWIzSnpJR1pwY25OMElDaHBaaUJoYm5rcElHWnZjaUIwYUdseklHTmhiR3dnTFMwZ0lDQWdJQ0JjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbWRzYjJKaGJFVjJkSE1wSUh0Y2JpQWdJQ0FnSUNBZ2NtRnBjMlZIYkc5aVlXeEZjbkp2Y25Nb2RHaHBjeTVoY0dsYkoyTmhiR3duWFN3Z2NtVnpLVHNnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F2THlBdExTQjBjbUZ1WVdOMGFXOXVJR3hsZG1Wc0lFaFVWRkFnYjNJZ1JHVndiRzk1VWlCbGNuSnZjbk1nWTI5dFpTQnVaWGgwSUMwdElDQWdJRnh1SUNBZ0lDQWdkR2hwY3k1bGJXbDBLQ2RsY25KdmNpY3NJSEpsY3lrN1hHNGdJQ0FnSUNCMGFHbHpMbVZ0YVhRb0oyUmxjR3h2ZVhJdGFXODZKeUFySUhKbGN5NWtaWEJzYjNseUxuSmxjM0J2Ym5ObExtVnljbTl5UTI5a1pTd2djbVZ6S1R0Y2JpQWdJQ0FnSUhSb2FYTXVaR1ZtWlhKeVpXUXVjbVZxWldOMEtISmxjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHVnljbTl5TzF4dUlDQjlYRzU5S1R0Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUwxeHVYRzR2S2lwY2JpQXFJRVY0Y0c5elpTQm1iM0lnWVNCamJHVmhibVZ5SUdOc2FXVnVkQ0JoY0drZ2FXNTBieUJFWlhCc2IzbFNYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UxeHVYRzRnSUM4cUtseHVJQ0FnS2lCRmVIQnZjMlZ6SUhSb1pTQmdSR1Z3Ykc5NVVtQWdiMkpxWldOMElHWnZjaUJsZUhSbGJtUnBibWN1WEc0Z0lDQXFYRzRnSUNBcUlHQmdZSFpoY2lCRVpYQnNiM2xTSUQwZ2NtVnhkV2x5WlNnblpHVndiRzk1Y2ljcExrUmxjR3h2ZVZJN1lHQmdYRzRnSUNBcVhHNGdJQ0FxSUVCemRHRjBhV05jYmlBZ0lDb2dRR0Z3YVNCd2RXSnNhV05jYmlBZ0lDb2dRSEpsZEhWeWJpQjdSR1Z3Ykc5NVVuMGdWR2hsSUdCRVpYQnNiM2xTWUNCdlltcGxZM1F1WEc0Z0lDQXFMeUFnSUZ4dUlDQkVaWEJzYjNsU09pQkVaWEJzYjNsU0xGeHVYRzRnSUM4cUtseHVJQ0FnS2lCRmVIQnZjMlZ6SUhSb1pTQnpkWEJ3YjNKMFpXUWdSR1Z3Ykc5NVVpQkJVRWx6TGx4dUlDQWdLbHh1SUNBZ0tpQkFiV1YwYUc5a0lHRndhWE5jYmlBZ0lDb2dRSEJoY21GdElIdENiMjlzWldGdWZTQm1iR0YwSUNodmNIUnBiMjVoYkNrZ2FXWWdZSFJ5ZFdWZ0lIZHBiR3dnY21WMGRYSnVJR0Z1SUdGeWNtRjVJRzltSUdwMWMzUWdkR2hsSUZ4dUlDQWdLaUJCVUVrbmN5QmxibVJ3YjJsdWRDQndjbTl3WlhKMGFXVnpMQ0JtYjNJZ1pYaGhiWEJzWlRvZ1hHNGdJQ0FxSUdCZ1lGeHVJQ0FnS2lCYkp5OXlMM1Z6WlhJdmJHOW5hVzRuTENBbkwzSXZkWE5sY2k5c2IyZHZkWFFuTENBbkwzSXZkWE5sY2k5aFltOTFkQ2NzSUM0dUxsMWNiaUFnSUNvZ1lHQmdYRzRnSUNBcUlFQnpkR0YwYVdOY2JpQWdJQ29nUUdGd2FTQndkV0pzYVdOY2JpQWdJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmRUZ5Y21GNWZTQlVhR1VnU0ZSVVVDQnlaWEYxWlhOMElIUnZJSFJvWlNCRVpYQnNiM2xTSUhObGNuWmxjaTRnSUNBZ0lDQmNiaUFnSUNvdklDQmNiaUFnWVhCcGN6b2dablZ1WTNScGIyNG9abXhoZENrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtYkdGMElEOGdUMkpxWldOMExtdGxlWE1vWVhCcGN5a2dPaUJoY0dsek8xeHVJQ0I5TEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlhCeVpYTmxiblJ6SUdFZ2MzUmhkR2xqSUcxbGRHaHZaQ0JtYjNJZ1kyOXVabWxuZFhKcGJtY2dZV3hzSUVSbGNHeHZlVklnY21WeGRXVnpkSE11SUZObGRIUnBibWR6SUZ4dUlDQWdLaUJ0WVdSbElHaGxjbVVnWVhKbElHRndjR3hwWldRZ1oyeHZZbUZzYkhrZ1lXTnliM056SUdWMlpYSjVJSEpsY1hWbGMzUXVYRzRnSUNBcVhHNGdJQ0FxSUVCdFpYUm9iMlFnWTI5dVptbG5kWEpsWEc0Z0lDQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQnZjSFJwYjI1eklGUm9aU0J2WW1wbFkzUWdiR2wwWlhKaGJDQmpiMjVtYVdkMWNtRjBhVzl1SUdoaGMyZ3VJRnh1SUNBZ0tpQkFjM1JoZEdsalhHNGdJQ0FxSUVCamFHRnBibUZpYkdWY2JpQWdJQ29nUUdGd2FTQndkV0pzYVdOY2JpQWdJQ292WEc0Z0lHTnZibVpwWjNWeVpUb2dablZ1WTNScGIyNG9iM0IwYVc5dWN5a2dlMXh1SUNBZ0lHOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1eklIeDhJSHQ5TzF4dVhHNGdJQ0FnWm05eUlDaDJZWElnYVNCcGJpQnZjSFJwYjI1ektTQjdJR2RzYjJKaGJFOXdkR2x2Ym5NdWMyVjBLR2tzSUc5d2RHbHZibk5iYVYwcE95QjlYRzVjYmlBZ0lDQXZMeUJoYzNObGNuUWdaMnh2WW1Gc0lHTnZiMnRwWlhNZ1lYSmxJR1Z0Y0hSNUlHbG1JR2RzYjJKaGJDQmdjM1JwWTJ0NVlDQnFjMlZ6YzJsdmJtbGtJR2x6SUc5bVpseHVJQ0FnSUdsbUlDZ2haMnh2WW1Gc1QzQjBhVzl1Y3k1emRHbGphM2twSUNCN0lHZHNiMkpoYkU5d2RHbHZibk11YzJWMEtDZGpiMjlyYVdWekp5d2diblZzYkNrN0lIMWNibHh1SUNBZ0lDOHZJSFIxY200Z1oyeHZZbUZzSUd4dloyZHBibWNnYjI1OGIyWm1JQ2h2Wm1ZZ1lua2daR1ZtWVhWc2RDbGNiaUFnSUNCTWIyZG5aWEl1YzJWMFRHVjJaV3dvWjJ4dlltRnNUM0IwYVc5dWN5NXNiMmRuYVc1bklEOGdURzluWjJWeUxrUkZRbFZISURvZ1RHOW5aMlZ5TGs5R1JpazdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZTeGNibHh1SUNBdktpcGNiaUFnSUNvZ1JtRmpkRzl5ZVNCbWIzSWdZM0psWVhScGJtY2dibVYzSUVsUElISmxjWFZsYzNSeklIUnZJR0JFWlhCc2IzbFNZQzVjYmlBZ0lDcGNiaUFnSUNvZ1JYaGhiWEJzWlRwY2JpQWdJQ29nWUdCZ0lDQWdYRzRnSUNBcUlDQWdJR1JsY0d4dmVYSXVhVzhvSnk5eUwzVnpaWEl2WVdKdmRYUW5LUzVsYm1Rb1kyRnNiR0poWTJzcE8xeHVJQ0FnS2lCZ1lHQmNiaUFnSUNwY2JpQWdJQ29nUUcxbGRHaHZaQ0JwYjF4dUlDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdZWEJwSUU5dVpTQnZaaUIwYUdVZ2MzVndjRzl5ZEdWa0lFUmxjR3h2ZVZJZ1FWQkpjeTVjYmlBZ0lDb2dRSE4wWVhScFkxeHVJQ0FnS2lCQWNtVjBkWEp1SUh0RVpYQnNiM2xTZlNCVWFHVWdTRlJVVUNCeVpYRjFaWE4wSUhSdklIUm9aU0JFWlhCc2IzbFNJSE5sY25abGNpNWNiaUFnSUNvZ1FHRndhU0J3ZFdKc2FXTWdJQ0JjYmlBZ0lDb3ZYRzRnSUdsdk9pQm1kVzVqZEdsdmJpaGhjR2twSUhzZ0lGeHVJQ0FnSUhKbGRIVnliaUJFWlhCc2IzbFNMbTVsZHloaGNHa3BPMXh1SUNCOUxGeHVYRzRnSUM4cUtseHVJQ0FnS2lCRGIyNTJaVzVwWlc1alpTQm1kVzVqZEdsdmJpQjBieUJ6YVdkdUlIUm9aU0IxYzJWeUlHbHVJR0o1SUdGMWRHaGxiblJwWTJGMGFXNW5JSFJvWlNCamNtVmtaVzUwYVdGc2N5QmNiaUFnSUNvZ2QybDBhQ0IwYUdVZ1JHVndiRzk1VWlCelpYSjJaWEl1SUNBZ1hHNGdJQ0FxWEc0Z0lDQXFJRUJ0WlhSb2IyUWdZWFYwYUZ4dUlDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdkWE5sY201aGJXVWdVM0JsWTJsbWFXVnpJSFJvWlNCMWMyVnlibUZ0WlM1Y2JpQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJSEJoYzNOM2IzSmtJRk53WldOcFptbGxjeUIwYUdVZ2NHRnpjM2R2Y21RdVhHNGdJQ0FxSUVCemRHRjBhV05jYmlBZ0lDb2dRSEpsZEhWeWJpQjdSR1Z3Ykc5NVVuMGdWR2hsSUVoVVZGQWdjbVZ4ZFdWemRDQjBieUIwYUdVZ1JHVndiRzk1VWlCelpYSjJaWEl1SUNBZ1hHNGdJQ0FxSUVCaGNHa2djSFZpYkdsaklDQWdYRzRnSUNBcUx5QWdJRnh1SUNCaGRYUm9PaUJtZFc1amRHbHZiaWgxYml3Z2NIY3BJSHRjYmlBZ0lDQjJZWElnWkdGMFlTQTlJSHNnZFhObGNtNWhiV1U2SUhWdUxDQndZWE56ZDI5eVpEb2djSGNnZlR0Y2JpQWdJQ0J5WlhSMWNtNGdSR1Z3Ykc5NVVpNXVaWGNvSnk5eUwzVnpaWEl2Ykc5bmFXNG5LUzVrWVhSaEtHUmhkR0VwTG1WdVpDZ3BPeUFnSUNCY2JpQWdmU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRMjl1ZG1WdWFXVnVZMlVnWm5WdVkzUnBiMjRnZEc4Z2MybG5iaUIwYUdVZ2RYTmxjaUJwYmlCaWVTQmhkWFJvWlc1MGFXTmhkR2x1WnlCMGFHVWdZM0psWkdWdWRHbGhiSE1nWEc0Z0lDQXFJSGRwZEdnZ2RHaGxJRVJsY0d4dmVWSWdjMlZ5ZG1WeUxpQWdJRnh1SUNBZ0tseHVJQ0FnS2lCRmVHRnRjR3hsT2x4dUlDQWdLaUJnWUdCY2JpQWdJQ29nSUNBZ1pHVndiRzk1Y2k1elkzSnBjSFFvSnk5MFpYTjBkWE5sY2k5eWIyOTBMM0psWkhWalpTNVNKeWxjYmlBZ0lDb2dJQ0FnWkdWd2JHOTVjaTV6WTNKcGNIUW9leUJtYVd4bGJtRnRaVG9nSjNKbFpIVmpaUzVTSnl3Z1lYVjBhRzl5T2lBbmRHVnpkSFZ6WlhJbkxGeHVJQ0FnS2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUnBjbVZqZEc5eWVUb2dKM0p2YjNRbmZTbGNiaUFnSUNvZ0lDQWdaR1Z3Ykc5NWNpNXpZM0pwY0hRb0ozSmxaSFZqWlM1U0p5d2dKM1JsYzNSMWMyVnlKeXdnSjNKdmIzUW5LVnh1SUNBZ0tpQWdJQ0JrWlhCc2IzbHlMbk5qY21sd2RDZ25MM1JsYzNSMWMyVnlMM0p2YjNRdmNtVmtkV05sTGxJbkxDQndjbTlxWldOMEtTQWdJQ0FnWEc0Z0lDQXFJR0JnWUNBZ0lGeHVJQ0FnS2x4dUlDQWdLaUJBYldWMGFHOWtJSE5qY21sd2RGeHVJQ0FnS2lCQWNHRnlZVzBnZTBGeVozVnRaVzUwYzMwZ1lYSm5kVzFsYm5SeklFRnlaM1Z0Wlc1MGN5QjBieUJrWldacGJtVWdkR2hsSUdaMWJHeDVJSEYxWVd4cFptbGxaQ0J6WTNKcGNIUWdYRzRnSUNBcUlHWnZjaUJsZUdWamRYUnBiMjR1WEc0Z0lDQXFJRUJ6ZEdGMGFXTmNiaUFnSUNvZ1FISmxkSFZ5YmlCN1JHVndiRzk1VW4wZ1ZHaGxJRWhVVkZBZ2NtVnhkV1Z6ZENCMGJ5QjBhR1VnUkdWd2JHOTVVaUJ6WlhKMlpYSXVJQ0FnWEc0Z0lDQXFJRUJoY0drZ2NIVmliR2xqSUNBZ1hHNGdJQ0FxTHlBZ0lDQWdYRzRnSUhOamNtbHdkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZG1GeUlHRnlaM01nUFNCMWRHbHNjeTV6YVdkdVlYUjFjbVVvWVhKbmRXMWxiblJ6S1N4Y2JpQWdJQ0FnSUNBZ2IzQjBjeUE5SUdGeVozTXViM0IwY3l4Y2JpQWdJQ0FnSUNBZ1lYQnBJQ0E5SUdGeVozTXVZWEJwT3lBZ1hHNWNiaUFnSUNBdkx5QmpiMjUyWlc1cFpXNWpaU0F0SUdsbUlIUm9aU0J3Y205cVpXTjBJR2x6SUdFZ1ltOXZiR1Z1SUdCMGNuVmxZQ0J5WVhSb1pYSWdkR2hoYmlCaElIQnBaQ3dnWm1seWMzUmNiaUFnSUNBdkx5QmpjbVZoZEdVZ1lTQnVaWGNnY0hKdmFtVmpkQ0JoYm1RZ2RHaGxiaUJ3Y21Wd1lYSmxJSFJvWlNCd2NtOXFaV04wSUdGd2FTQmpZV3hzSUhSdklHVjRaV04xZEdWY2JpQWdJQ0JwWmlBb1lYSm5jeTVqY21WaGRHVXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQkVaWEJzYjNsU0xtNWxkeWduTDNJdmNISnZhbVZqZEM5amNtVmhkR1VuS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnTG1WdVpDaG1kVzVqZEdsdmJpaHlaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCN0lIQnliMnBsWTNRNklISmxjeTVuWlhRb0ozQnliMnBsWTNRbktTNXdjbTlxWldOMElIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzVwYnloaGNHa3BYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVaR0YwWVNodmNIUnpLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUVSbGNHeHZlVkl1Ym1WM0tHRndhU2t1WkdGMFlTaHZjSFJ6S1R0Y2JpQWdJQ0I5WEc0Z0lIMHNJQ0JjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVblZ1SUdGdUlITmxjbWxsY3lCdlppQmphR0ZwYm1Wa0lFUmxjR3h2ZVZJZ2NtVnhkV1Z6ZEhNZ2FXNGdjMlZ4ZFdWdVkyVWdZVzVrSUhkcGRHaHZkWFFnYjNabGNteGhjQzRnSUNBZ0lDQWdYRzRnSUNBcVhHNGdJQ0FxSUVCdFpYUm9iMlFnY0dsd2JHbHVaVnh1SUNBZ0tpQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCMFlYTnJjeUJUY0dWamFXWnBaWE1nZEdobElHeHBjM1FnYjJZZ1lFWjFibU4wYVc5dVlDQjBZWE5yY3k1Y2JpQWdJQ29nUUhOMFlYUnBZMXh1SUNBZ0tpQkFjbVYwZFhKdUlIdFFjbTl0YVhObGZTQkJJSEJ5YjIxcGMyVWdkM0poY0hCcGJtY2dkR2hsSUhKbGMyOXNkWFJwYjI0Z2IyWWdaV2wwYUdWeUlGd2ljbVZ6YjJ4MlpWd2lJRzl5WEc0Z0lDQXFJRndpY21WcVpXTjBYQ0lnWTJGc2JHSmhZMnN1WEc0Z0lDQXFJRUJoY0drZ2NIVmliR2xqSUNBZ1hHNGdJQ0FxTDF4dUlDQndhWEJsYkdsdVpUb2dablZ1WTNScGIyNG9ZMmhoYVc1ektTQjdJQ0FnSUNBZ1hHNGdJQ0FnZG1GeUlHUmxjR3h2ZVhJZ0lEMGdkR2hwY3l4Y2JpQWdJQ0FnSUNBZ1pHVm1aWEp5WldRZ1BTQkVLQ2tzWEc0Z0lDQWdJQ0FnSUhFZ0lDQWdJQ0FnSUQwZ2JtVjNJRkYxWlhWbEtDa3NYRzRnSUNBZ0lDQWdJSEpsYzNWc2RITWdJRDBnVzEwc1hHNGdJQ0FnSUNBZ0lHVnljbTl5Y3lBZ0lEMGdXMTBzWEc0Z0lDQWdJQ0FnSUU1UFQxQWdJQ0FnSUQwZ2JuVnNiQ3dnTHk4Z1RrOVBVQ0JsY25KdmNuTjhjbVZ6ZFd4MGN5Qm1iM0lnVzJGZElHSmhkR05vSUhKbGNYVmxjM1FnWTJoaGFXNWNiaUFnSUNBZ0lDQWdiM0pwWnlBZ0lDQWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ2MzUnBZMnQ1T2lCbmJHOWlZV3hQY0hScGIyNXpMbk4wYVdOcmVTeGNiaUFnSUNBZ0lDQWdJQ0JqYjI5cmFXVnpPaUJuYkc5aVlXeFBjSFJwYjI1ekxtTnZiMnRwWlhOY2JpQWdJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lDOHZJRzFoYTJVZ1lTQmpiM0I1WEc0Z0lDQWdZMmhoYVc1eklEMGdZMmhoYVc1ekxuTnNhV05sS0RBcE8xeHVYRzRnSUNBZ0x5OGdkSFZ5YmlCemRHbGphM2tnYzJWemMybHZiaUJtYjNJZ2RHaGxjMlVnY21WeGRXVnpkQ0FvYUdGamEza3BYRzRnSUNBZ1pHVndiRzk1Y2k1amIyNW1hV2QxY21Vb0lIc2djM1JwWTJ0NU9pQjBjblZsSUgwcE8xeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z1lXUmtLQ2tnZTF4dUlDQWdJQ0FnY1M1aFpHUW9ablZ1WTNScGIyNG9LU0I3SUZ4dUlDQWdJQ0FnSUNCamFHRnBibk11YzJocFpuUW9LUzVrY21GcGJpZ3BYRzRnSUNBZ0lDQWdJQzUwYUdWdUtHWjFibU4wYVc5dUtHTm9ZV2x1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MGN5NXdkWE5vS0dOb1lXbHVLVHNnSUZ4dUlDQWdJQ0FnSUNBZ0lHVnljbTl5Y3k1d2RYTm9LRTVQVDFBcE95QWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tIRXVhWE5GYlhCMGVTZ3BLU0I3SUZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR1Z3Ykc5NWNpNWpiMjVtYVdkMWNtVW9iM0pwWnlrN0lDOHZJSEpsYzJWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldabGNuSmxaQzV5WlhOdmJIWmxLSHNnY21WemRXeDBjem9nY21WemRXeDBjeXdnWlhKeWIzSnpPaUJsY25KdmNuTWdmU2s3SUZ4dUlDQWdJQ0FnSUNBZ0lIMGdJRnh1WEc0Z0lDQWdJQ0FnSUNBZ2NTNTBZV3RsS0NrN1hHNGdJQ0FnSUNBZ0lIMHNJR1oxYm1OMGFXOXVLR1Z5Y2lrZ2V5QWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0J5WlhOMWJIUnpMbkIxYzJnb1RrOVBVQ2s3SUZ4dUlDQWdJQ0FnSUNBZ0lHVnljbTl5Y3k1d2RYTm9LR1Z5Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdMeThnY21WcVpXTjBhVzl1Y3lCaGNtVWdiMjVzZVNCdFpYUWdkMmhsYmlCMGFHVjVJRnRoYkd4ZElHWmhhV3hjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jUzVwYzBWdGNIUjVLQ2tnSmlZZ2NtVnpkV3gwY3k1c1pXNW5kR2dnUFQwOUlEQXBJSHNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaWEJzYjNseUxtTnZibVpwWjNWeVpTaHZjbWxuS1RzZ0x5OGdjbVZ6WlhSY2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1WeWNtVmtMbkpsYW1WamRDaGxjbkp2Y25NcE95QmNiaUFnSUNBZ0lDQWdJQ0I5SUNCY2JpQWdJQ0FnSUNBZ0lDQnhMblJoYTJVb0tUdGNiaUFnSUNBZ0lDQWdmU2s3SUNBZ0lDQWdJRnh1SUNBZ0lDQWdmU3dnYm5Wc2JDd2dkSEoxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1kyOXVkbVZ5ZENCMGJ5QmhJSE5sY1NCeGRXVjFaU0JtYjNJZ1ltVjBkR1Z5SUdoaGJtUnNhVzVuWEc0Z0lDQWdabTl5S0haaGNpQnBJRDBnTURzZ2FTQThJR05vWVdsdWN5NXNaVzVuZEdnN0lHa3JLeWtnZXlCaFpHUW9LVHNnZlZ4dVhHNGdJQ0FnTHk4Z2MzUmhjblE2SUdSbGNYVmxkV1VnWm1seWMzUWdhWFJsYlNCaGJtUWdjblZ1SUdsMFhHNGdJQ0FnY1M1MFlXdGxLQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaR1ZtWlhKeVpXUXVjSEp2YldselpUdGNiaUFnZlN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVkdobElHVjJaVzUwSUhOMGNtVmhiU0JCVUVrZ2FYTWdkVzVwY1hWbElIZHBkR2hwYmlCMGFHVWdSR1Z3Ykc5NVVpQkJVRWtnWVhNZ2FYUWdjM1Z3Y0c5eWRITWdjSFZ6YUNCY2JpQWdJQ29nYm05MGFXWnBZMkYwYVc5dWN5Qm1jbTl0SUhSb1pTQkVaWEJzYjNsU0lITmxjblpsY2lCMGJ5QmpiR2xsYm5RZ1lYQndiR2xqWVhScGIyNXpMaUJPYjNScFptbGpZWFJwYjI1eklGeHVJQ0FnS2lCamIzSnlaWE53YjI1a0lIUnZJR1JwYzJOeVpYUmxJR1YyWlc1MGN5QjBhR0YwSUc5alkzVnlJSGRwZEdocGJpQjBhR1VnUkdWd2JHOTVVaUJ6WlhKMlpYSXVJRlJvWlhKbElGeHVJQ0FnS2lCaGNtVWdabTkxY2lCa2FYTjBhVzVqZENCbGRtVnVkQ0JqWVhSbFoyOXlhV1Z6T2x4dUlDQWdLaUJjYmlBZ0lDb2dMU0JUZEhKbFlXMGdUR2xtWldONVkyeGxJR1YyWlc1MGMxeHVJQ0FnS2lBdElFVjRaV04xZEdsdmJpQmxkbVZ1ZEhOY2JpQWdJQ29nTFNCS2IySWdUR2xtWldONVkyeGxJR1YyWlc1MGMxeHVJQ0FnS2lBdElFMWhibUZuWlcxbGJuUWdaWFpsYm5SelhHNGdJQ0FxWEc0Z0lDQXFJRVY0WVcxd2JHVTZYRzRnSUNBcUlHQmdZRnh1SUNBZ0tpQmtaWEJzYjNseUxtVnpLSHNnZFhObGNtNWhiV1U2SUNkMFpYTjBkWE5sY2ljc0lIQmhjM04zYjNKa09pQW5jMlZqY21WMEp5QjlLVnh1SUNBZ0tpQWdJQ0F2THlBdExTQmpiMjV1WldOMGFXOXVJR05vYjJsalpYTWdabTl5SUdWMlpXNTBJSFI1Y0dWeklDMHRYRzRnSUNBcUlDQWdJQzV0WVc1aFoyVnRaVzUwS0NrZ0lDOHZMbk5sYzNOcGIyNG9LU0I4SUM1aGJHd29LU0I4SUM1d2NtOXFaV04wS0dsa0tTQjhJQzVxYjJJb2FXUXBYRzRnSUNBcUlDQWdJQzV2YmlnblpYTTZaM0pwWkVobFlYSjBZbVZoZENjc0lHWjFibU4wYVc5dUtHUmhkR0VwSUh0Y2JpQWdJQ29nSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0NjOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUp5azdYRzRnSUNBcUlDQWdJQ0FnSUNCamIyNXpiMnhsTG14dlp5Z25aWE02WjNKcFpFaGxZWEowWW1WaGRDY3BPMXh1SUNBZ0tpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29KejA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBuS1RzZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FxSUNBZ0lDQjlLVnh1SUNBZ0tpQWdJQ0FnTG05d1pXNG9LVHRjYmlBZ0lDb2dZR0JnWEc0Z0lDQXFJRnh1SUNBZ0tpQkFiV1YwYUc5a0lHVnpYRzRnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCdmNIUnBiMjV6SUZSb1pTQnZZbXBsWTNRZ2JHbDBaWEpoYkNCamIyNW1hV2QxY21GMGFXOXVJR2hoYzJndUlGeHVJQ0FnS2lCQWMzUmhkR2xqWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlMFYyWlc1MFUzUnlaV0Z0ZlNCaElHNWxkeUJnUlhabGJuUlRkSEpsWVcxZ0lHWnZjaUJpYVc1a2FXNW5MbHh1SUNBZ0tpQkFZWEJwSUhCMVlteHBZeUFnSUZ4dUlDQWdLaThnSUZ4dUlDQmxjem9nWm5WdVkzUnBiMjRvWTNKbFpHVnVkR2xoYkhNcElIdGNiaUFnSUNCMllYSWdZWFYwYUNBZ0lEMGdLR055WldSbGJuUnBZV3h6SUNZbUlHTnlaV1JsYm5ScFlXeHpMblZ6WlhKdVlXMWxJQ1ltSUdOeVpXUmxiblJwWVd4ekxuQmhjM04zYjNKa0tTeGNiaUFnSUNBZ0lDQWdjM1J5WldGdElEMGdSWFpsYm5SVGRISmxZVzB1Ym1WM0tHZHNiMkpoYkU5d2RHbHZibk11YUc5emRDd2dleUI1YVdWc1pEb2dZWFYwYUNCOUtUdGNibHh1SUNBZ0lHbG1JQ2hoZFhSb0tTQjdYRzRnSUNBZ0lDQjJZWElnY25WelpYSWdQU0IwYUdsekxtRjFkR2dvWTNKbFpHVnVkR2xoYkhNdWRYTmxjbTVoYldVc0lHTnlaV1JsYm5ScFlXeHpMbkJoYzNOM2IzSmtLVHNnSUNBZ0lDQmNiaUFnSUNBZ0lISjFjMlZ5TG1WdWMzVnlaU2htZFc1amRHbHZiaWdwSUhzZ1hHNGdJQ0FnSUNBZ0lITjBjbVZoYlM1emFHRnlaU2h5ZFhObGNpNW5aWFJEYjI5cmFXVnpLQ2twTzF4dUlDQWdJQ0FnSUNCemRISmxZVzB1Wm14MWMyZ29LVHNnWEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjM1J5WldGdE8xeHVJQ0I5TEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJFWldacGJtVnpJSFJvWlNCbVlXTjBiM0o1SUdadmNpQmpjbVZoZEdsdVp5QmhJRVJsY0d4dmVWSXRjM0JsWTJsbWFXTWdaVzVqYjJSbFpDQlNJRzlpYW1WamRDQjBieUJpWlNCY2JpQWdJQ29nYzJWdWRDQmhjeUJwYm5CMWRDQndZWEpoYldWMFpYSnpJSFJ2SUdGdUlGSWdjMk55YVhCMExseHVJQ0FnS2x4dUlDQWdLaUJGZUdGdGNHeGxPbHh1SUNBZ0tpQmdZR0JjYmlBZ0lDb2dJQ0FnZG1GeUlISnBibkIxZENBOUlHUmxjR3h2ZVhJdVVrbHVjSFYwTG14dloybGpZV3dvSjJ4dloybGpZV3hmYm1GdFpTY3NJSFJ5ZFdVcE8xeHVJQ0FnS2lBZ0lDQjJZWElnY21sdWNIVjBJRDBnWkdWd2JHOTVjaTVTU1c1d2RYUXViblZ0WlhKcFl5Z25iblZ0WlhKcFkxOXVZVzFsSnl3Z01UQXVOU2s3WEc0Z0lDQXFJQ0FnSUhaaGNpQnlhVzV3ZFhRZ1BTQmtaWEJzYjNseUxsSkpibkIxZEM1cGJuUmxaMlZ5S0NkcGJuUmxaMlZ5WDI1aGJXVW5MQ0ExS1R0Y2JpQWdJQ29nSUNBZ2RtRnlJSEpwYm5CMWRDQTlJR1JsY0d4dmVYSXVVa2x1Y0hWMExtTm9ZWEpoWTNSbGNpZ25ZMmhoY21GamRHVnlYMjVoYldVbkxDQW5TR1ZzYkc4bktUdGNiaUFnSUNvZ0lDQWdMeThnWldOMExpNHVYRzRnSUNBcUlHQmdZRnh1SUNBZ0tpQkFjSEp2Y0dWeWRIa2dVa2x1Y0hWMFhHNGdJQ0FxSUVCemRHRjBhV05jYmlBZ0lDb2dRR0Z3YVNCd2RXSnNhV05jYmlBZ0lDb3ZYRzRnSUZKSmJuQjFkRG9nZTF4dUlDQWdJRzUxYldWeWFXTTZJR1oxYm1OMGFXOXVJQ2h1WVcxbExDQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUZKSmJuQjFkQzV1Wlhjb2JtRnRaU3dnZG1Gc2RXVXBMbTUxYldWeWFXTW9LVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdhVzUwWldkbGNqb2dablZ1WTNScGIyNGdLRzVoYldVc0lIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnVWtsdWNIVjBMbTVsZHlodVlXMWxMQ0IyWVd4MVpTa3VhVzUwWldkbGNpZ3BPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnNiMmRwWTJGc09pQm1kVzVqZEdsdmJpQW9ibUZ0WlN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJTU1c1d2RYUXVibVYzS0c1aGJXVXNJSFpoYkhWbEtTNXNiMmRwWTJGc0tDazdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTm9ZWEpoWTNSbGNqb2dablZ1WTNScGIyNGdLRzVoYldVc0lIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnVWtsdWNIVjBMbTVsZHlodVlXMWxMQ0IyWVd4MVpTa3VZMmhoY21GamRHVnlLQ2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR1JoZEdVNklHWjFibU4wYVc5dUlDaHVZVzFsTENCMllXeDFaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRkpKYm5CMWRDNXVaWGNvYm1GdFpTd2dkbUZzZFdVcExtUmhkR1VvS1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnY0c5emFYaGpkRG9nWm5WdVkzUnBiMjRnS0c1aGJXVXNJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1VrbHVjSFYwTG01bGR5aHVZVzFsTENCMllXeDFaU2t1Y0c5emFYaGpkQ2dwTzF4dUlDQWdJSDBzSUNCY2JseHVJQ0FnSUc1MWJXVnlhV05XWldOMGIzSTZJR1oxYm1OMGFXOXVLRzVoYldVc0lIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnVWtsdWNIVjBMbTVsZHlodVlXMWxMQ0IyWVd4MVpTa3ViblZ0WlhKcFkxWmxZM1J2Y2lncE8xeHVJQ0FnSUgwc0lGeHVYRzRnSUNBZ2FXNTBaV2RsY2xabFkzUnZjam9nWm5WdVkzUnBiMjRnS0c1aGJXVXNJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1VrbHVjSFYwTG01bGR5aHVZVzFsTENCMllXeDFaU2t1YVc1MFpXZGxjbFpsWTNSdmNpZ3BPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnNiMmRwWTJGc1ZtVmpkRzl5T2lCbWRXNWpkR2x2YmlBb2JtRnRaU3dnZG1Gc2RXVXBJSHNnWEc0Z0lDQWdJQ0J5WlhSMWNtNGdVa2x1Y0hWMExtNWxkeWh1WVcxbExDQjJZV3gxWlNrdWJHOW5hV05oYkZabFkzUnZjaWdwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYUdGeVlXTjBaWEpXWldOMGIzSTZJR1oxYm1OMGFXOXVJQ2h1WVcxbExDQjJZV3gxWlNrZ2V5QmNiaUFnSUNBZ0lISmxkSFZ5YmlCU1NXNXdkWFF1Ym1WM0tHNWhiV1VzSUhaaGJIVmxLUzVqYUdGeVlXTjBaWEpXWldOMGIzSW9LVHRjYmlBZ0lDQjlMQ0FnWEc1Y2JpQWdJQ0JrWVhSbFZtVmpkRzl5T2lCbWRXNWpkR2x2YmlBb2JtRnRaU3dnZG1Gc2RXVXBJSHNnWEc0Z0lDQWdJQ0J5WlhSMWNtNGdVa2x1Y0hWMExtNWxkeWh1WVcxbExDQjJZV3gxWlNrdVpHRjBaVlpsWTNSdmNpZ3BPMXh1SUNBZ0lIMHNJQ0JjYmx4dUlDQWdJSEJ2YzJsNFkzUldaV04wYjNJNklHWjFibU4wYVc5dUlDaHVZVzFsTENCMllXeDFaU2tnZXlCY2JpQWdJQ0FnSUhKbGRIVnliaUJTU1c1d2RYUXVibVYzS0c1aGJXVXNJSFpoYkhWbEtTNXdiM05wZUdOMFZtVmpkRzl5S0NrN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUd4cGMzUTZJR1oxYm1OMGFXOXVJQ2h1WVcxbExDQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUZKSmJuQjFkQzV1Wlhjb2JtRnRaU3dnZG1Gc2RXVXBMbXhwYzNRb0tUc2dYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHUmhkR0ZtY21GdFpUb2dablZ1WTNScGIyNGdLRzVoYldVc0lIWmhiSFZsS1NCN0lGeHVJQ0FnSUNBZ2NtVjBkWEp1SUZKSmJuQjFkQzV1Wlhjb2JtRnRaU3dnZG1Gc2RXVXBMbVJoZEdGbWNtRnRaU2dwTzF4dUlDQWdJSDBzWEc0Z0lGeHVJQ0FnSUdaaFkzUnZjam9nWm5WdVkzUnBiMjRnS0c1aGJXVXNJSFpoYkhWbExDQnNaWFpsYkhNc0lHeGhZbVZzY3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJRzl3ZEhNZ1BTQjdJR3hsZG1Wc2N6b2diR1YyWld4ekxDQnNZV0psYkhNNklHeGhZbVZzY3lCOU8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUZKSmJuQjFkQzV1Wlhjb2JtRnRaU3dnZG1Gc2RXVXNJRzl3ZEhNcExtWmhZM1J2Y2lncE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCdmNtUmxjbVZrT2lCbWRXNWpkR2x2YmlBb2JtRnRaU3dnZG1Gc2RXVXNJR3hsZG1Wc2N5d2diR0ZpWld4ektTQjdYRzRnSUNBZ0lDQjJZWElnYjNCMGN5QTlJSHNnYkdWMlpXeHpPaUJzWlhabGJITXNJR3hoWW1Wc2N6b2diR0ZpWld4eklIMDdYRzRnSUNBZ0lDQnlaWFIxY200Z1VrbHVjSFYwTG01bGR5aHVZVzFsTENCMllXeDFaU3dnYjNCMGN5a3ViM0prWlhKbFpDZ3BPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnVkVzFsY21salRXRjBjbWw0T2lCbWRXNWpkR2x2YmlBb2JtRnRaU3dnZG1Gc2RXVXBJSHNnWEc0Z0lDQWdJQ0J5WlhSMWNtNGdVa2x1Y0hWMExtNWxkeWh1WVcxbExDQjJZV3gxWlNrdWJuVnRaWEpwWTAxaGRISnBlQ2dwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JwYm5SbFoyVnlUV0YwY21sNE9pQm1kVzVqZEdsdmJpQW9ibUZ0WlN3Z2RtRnNkV1VwSUhzZ1hHNGdJQ0FnSUNCeVpYUjFjbTRnVWtsdWNIVjBMbTVsZHlodVlXMWxMQ0IyWVd4MVpTa3VhVzUwWldkbGNrMWhkSEpwZUNncE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCc2IyZHBZMkZzVFdGMGNtbDRPaUJtZFc1amRHbHZiaUFvYm1GdFpTd2dkbUZzZFdVcElIc2dYRzRnSUNBZ0lDQnlaWFIxY200Z1VrbHVjSFYwTG01bGR5aHVZVzFsTENCMllXeDFaU2t1Ykc5bmFXTmhiRTFoZEhKcGVDZ3BPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmphR0Z5WVdOMFpYSk5ZWFJ5YVhnNklHWjFibU4wYVc5dUlDaHVZVzFsTENCMllXeDFaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRkpKYm5CMWRDNXVaWGNvYm1GdFpTd2dkbUZzZFdVcExtTm9ZWEpoWTNSbGNrMWhkSEpwZUNncE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlRzaVhYMD0iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCIvci91c2VyL2xvZ2luXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvdXNlci9sb2dvdXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci91c2VyL2Fib3V0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvdXNlci9hdXRvc2F2ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3VzZXIvcmVsZWFzZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvY3JlYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wb29sXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9yZWN5Y2xlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9waW5nXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9hYm91dFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvYWJvdXQvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9zYXZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9zYXZlYXNcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2Nsb3NlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9ncmFudFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvaW1wb3J0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leHBvcnRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9jb2RlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3NjcmlwdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9pbnRlcnJ1cHRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvY29uc29sZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9oaXN0b3J5XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL2ZsdXNoXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3Jlc3VsdC9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3Jlc3VsdC9kb3dubG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2UvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL2dldFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3VwbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3RyYW5zZmVyXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2UvcHVzaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3NhdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9zdG9yZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL2xvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvdXBsb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvdHJhbnNmZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS93cml0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3VwZGF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3N0b3JlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L2Rvd25sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wYWNrYWdlL2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3BhY2thZ2UvYXR0YWNoXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wYWNrYWdlL2RldGFjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3Ivam9iL3N1Ym1pdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9zY2hlZHVsZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9xdWVyeVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9jYW5jZWxcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2NyZWF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3JlbmFtZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2NvcHlcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9tb3ZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9zY3JpcHQvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvc2NyaXB0L2V4ZWN1dGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NjcmlwdC9yZW5kZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NjcmlwdC9pbnRlcnJ1cHRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NoZWxsL2V4ZWN1dGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9hcmNoaXZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvdXBsb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvZG93bmxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9mZXRjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9mZXRjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS91cGxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCIsXG4gICAgICAgIFwidXBsb2FkXCI6IHRydWVcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvdHJhbnNmZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvd3JpdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2RpZmZcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvcmV2ZXJ0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2dyYW50XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2Rvd25sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9jb3B5XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL21vdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9zZXJ2ZXIvaW5mb1wiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfVxufVxuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZTtcblxuZnVuY3Rpb24gZGVidWcobXNnKSB7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlLmV4dGVuZCh7XG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLnNjb3BlICA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0ZW5lci4gIE11bHRpcGxlIGNhbiBiZSBhZGRlZCBwZXIgbmFtZS4gIEFsaWFzZWQgYXMgYG9uYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtFbWl0dGVyfSBgdGhpc2AgZm9yIGNoYWluaW5nICAgICAgXG4gICAqL1xuICBvbjogZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyB0aGlzLmV2ZW50c1tuYW1lXSA9IFtdOyB9ICAgICAgICBcblxuICAgIHRoaXMuZXZlbnRzW25hbWVdLnB1c2goaGFuZGxlcik7XG4gICAgZGVidWcoJ0VtaXR0ZXIub24oXCInICsgbmFtZSArICdcIiknKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZyAgIFxuICAgKi9cbiAgZW1pdDogZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoJ0ZpcmVkIGV2ZW50OiBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgICB0aGlzLmV2ZW50c1tuYW1lXVtpXS5hcHBseSh0aGlzLnNjb3BlIHx8IHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpOyAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZ1xuICAgKi9cbiAgb2ZmQWxsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBmb3IgKHZhciBlIGluIHRoaXMuZXZlbnRzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tlXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG4gICAgICBkZWxldGUgdGhpcy5ldmVudHNbbmFtZV07ICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGJhc2VkIG9uIGFuIGluZGV4LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZXZlbnQgXG4gICAqL1xuICBvZmZBdDogZnVuY3Rpb24obmFtZSwgaW5kZXgpIHtcbiAgICB2YXIgYXJyYXkgPSB0aGlzLmV2ZW50c1tuYW1lXSxcbiAgICAgICAgcmVzdCAgPSBhcnJheS5zbGljZShpbmRleCArIDEpO1xuXG4gICAgYXJyYXkubGVuZ3RoID0gaW5kZXg7XG4gICAgYXJyYXkucHVzaC5hcHBseShhcnJheSwgcmVzdCk7XG4gICAgdGhpcy5ldmVudHNbbmFtZV0gPSBhcnJheTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGJhc2VkIG9uIHRoZSBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZ1xuICAgKi9cbiAgb2ZmOiBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGV2ZW50cyBoYW5kbGVycyBieSB0aGlzIG5hbWVcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLm9mZkFsbChuYW1lKTtcbiAgICB9IGVsc2UgeyAvLyByZW1vdmUgYWxsIGV2ZW50cyBoYW5kbGVycyA9PSAnaGFuZGxlcicgYnkgdGhpcyBuYW1lXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tuYW1lXVtpXSA9PSBoYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5vZmZBdChuYW1lLCBpKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59KTsgIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cbnZhciBMYW5nICAgID0gcmVxdWlyZSgnLi9sYW5nJyksXG4gICAgUlR5cGVzICA9IHJlcXVpcmUoJy4vcnR5cGVzJyksXG4gICAgUiAgICAgICA9IFJUeXBlcy5yLFxuICAgIERlcGxveVIgPSBSVHlwZXMuZGVwbG95cjtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZXMoZGF0ZXMsIHR5cGUpIHtcbiAgICB2YXIgZm9ybWF0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtYXRzLnB1c2goZm9ybWF0RGF0ZShkYXRlc1tpXSwgdHlwZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXRzO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIHR5cGUpIHsgICAgXG4gICB2YXIgeWVhciAgID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgIG1vbnRoICA9IChkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICBkYXkgICAgPSBkYXRlLmdldERhdGUoKSwgICAgXG4gICAgICAgaG91ciAgID0gZGF0ZS5nZXRIb3VycygpLFxuICAgICAgIG1pbiAgICA9IGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgIHNlYyAgICA9IGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgIHpvbmUgICA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSxcbiAgICAgICBmb3JtYXQgPSAnJztcblxuICAgIG1vbnRoICA9IChtb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aCk7XG4gICAgaG91ciAgID0gKGhvdXIgPCAxMCA/ICcwJyArIGhvdXIgOiBob3VyKTtcbiAgICBtaW4gICAgPSAobWluIDwgMTAgPyAnMCcgKyBtaW4gOiBtaW4pO1xuICAgIHNlYyAgICA9IChzZWMgPCAxMCA/ICcwJyArIHNlYyA6IHNlYyk7ICAgICAgIFxuICAgIGZvcm1hdCA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcblxuICAgIGZ1bmN0aW9uIGxlZnRaZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG5cbiAgICAgICAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICAgICAgICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArIG91dHB1dDtcbiAgICB9XG4gICBcbiAgICBpZiAodHlwZSA9PT0gRGVwbG95Ui5SUE9TSVhfREFURSB8fCB0eXBlID09PSBEZXBsb3lSLlJQT1NJWF9EQVRFX1ZFQ1RPUikge1xuICAgICAgICB2YXIgdGltZSAgPSBob3VyICsgJzonICsgbWluICsgJzonICsgc2VjLFxuICAgICAgICAgICAgYSA9IC16b25lLFxuICAgICAgICAgICAgYiA9IFwiK1wiO1xuXG4gICAgICAgIGlmIChhIDwgMCkge1xuICAgICAgICAgICAgYSA9IC1hO1xuICAgICAgICAgICAgYiA9IFwiLVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgem9uZSA9IGIgKyBsZWZ0WmVyb0ZpbGwoKGEgLyA2MCksIDIpICsgJycgKyBsZWZ0WmVyb0ZpbGwoYSAlIDYwLCAyKTtcbiAgICAgICAgZm9ybWF0ICs9ICgnICcgKyB0aW1lICsgJyAnICsgem9uZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxuZnVuY3Rpb24gZW5jb2RlRW1iZWRkZWREYXRhZnJhbWUob2JqLCByZGYpIHtcbiAgICB2YXIgZGZWYWx1ZSA9IG9iai52YWx1ZTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG4gICAgICAgIGlmIChkZk9iai50eXBlID09PSBEZXBsb3lSLlJEQVRBRlJBTUUpIHtcbiAgICAgICAgICAgIHJkZiA9IGVuY29kZUVtYmVkZGVkRGF0YWZyYW1lKGRmT2JqLCByZGYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZm9ybWF0IGRhdGVzXG4gICAgICAgICAgICBpZiAoUlR5cGVzLmlzRGF0ZShkZk9iai50eXBlKSkge1xuICAgICAgICAgICAgICAgIGlmIChMYW5nLmlzQXJyYXkoZGZPYmoudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRmT2JqLnZhbHVlID0gZm9ybWF0RGF0ZXMoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRmT2JqLnZhbHVlID0gZm9ybWF0RGF0ZShkZk9iai52YWx1ZSwgZGZPYmoudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZk9iai50eXBlID0gUlR5cGVzLmRlcGxveXJUb1IoZGZPYmoudHlwZSk7XG4gICAgICAgICAgICByZGYudmFsdWUucHVzaChkZk9iaik7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gcmRmO1xufTtcblxuZnVuY3Rpb24gZW5jb2RlRGF0YWZyYW1lKG9iaikge1xuICAgIHZhciByZGYgPSB7XG4gICAgICAgICAgICB0eXBlOiBSLkRBVEFGUkFNRSxcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgIG5hbWU6IG9iai5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGRmVmFsdWUgPSBvYmoudmFsdWU7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG5cbiAgICAgICAgaWYgKGRmT2JqLnR5cGUgPT09IERlcGxveVIuUkRBVEFGUkFNRSkge1xuICAgICAgICAgICAgcmRmID0gZW5jb2RlRW1iZWRkZWREYXRhZnJhbWUoZGZPYmosIHJkZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmb3JtYXQgZGF0ZXNcbiAgICAgICAgICAgIGlmIChSVHlwZXMuaXNEYXRlKGRmT2JqLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKExhbmcuaXNBcnJheShkZk9iai52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGZPYmoudmFsdWUgPSBmb3JtYXREYXRlcyhkZk9iai52YWx1ZSwgZGZPYmoudHlwZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGZPYmoudmFsdWUgPSBmb3JtYXREYXRlKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRmT2JqLnR5cGUgPSBSVHlwZXMuZGVwbG95clRvUihkZk9iai50eXBlKTtcbiAgICAgICAgICAgIHJkZi52YWx1ZS5wdXNoKGRmT2JqKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiByZGY7XG59O1xuXG5mdW5jdGlvbiBlbmNvZGVMaXN0KG9iaikge1xuICAgIHZhciBybGlzdCA9IHtcbiAgICAgICAgICAgIHR5cGU6IFIuTElTVCxcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgIG5hbWU6IG9iai5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGRmVmFsdWUgPSBvYmoudmFsdWUsXG4gICAgICAgIHI7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG5cbiAgICAgICAgc3dpdGNoIChkZk9iai50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEFGUkFNRTpcbiAgICAgICAgICAgICAgICByID0gZW5jb2RlRGF0YWZyYW1lKGRmT2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJMSVNUOlxuICAgICAgICAgICAgICAgIHIgPSBlbmNvZGVMaXN0KGRmT2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJOVU1FUklDX01BVFJJWDpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUl9NQVRSSVg6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fTUFUUklYOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJTVFJJTkdfTUFUUklYOlxuICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRmT2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuTUFUUklYLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGZPYmoudmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEU6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUlBPU0lYX0RBVEU6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5EQVRFLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGRmT2JqLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdERhdGUoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJGQUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUk9SREVSRUQ6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5GQUNUT1IsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWQ6IGRmT2JqLm9yZGVyZWQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogZGZPYmoubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICBsZXZlbHM6IGRmT2JqLmxldmVscyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRmT2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJTVFJJTkc6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU46XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUM6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUklOVEVHRVI6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5QUklNSVRJVkUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZk9iai52YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19WRUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUklOVEVHRVJfVkVDVE9SOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOX1ZFQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkZk9iai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlZFQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRmT2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRFX1ZFQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURV9WRUNUT1I6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdERhdGVzKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBkZk9iai5mb3JtYXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gUkRhdGFUeXBlIGZvdW5kIGZvciBcIicgKyBkZk9iai50eXBlICsgJ1wiJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBybGlzdC52YWx1ZS5wdXNoKHIpO1xuICAgIH1cbiAgICByZXR1cm4gcmxpc3Q7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qKlxuICAgICAqIEZsYXR0ZW5zIGEgZ2l2ZW4gYFJJbnB1dGAgdHlwZSBpbnRvIGEgSlNPTiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSAgICAgXG4gICAgICogZXhwZWN0ZWQgRGVwbG95UiBpbnB1dCBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGVuY29kZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSByZGF0YSBBbiBBcnJheSBvZiBgUklucHV0YCBPYmplY3RzIHRvIGJlIGZsYXR0ZW5lZC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBmbGF0dGVuZCBgUklucHV0YCBKU09OIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIFxuICAgICAqICAgICAgICAgICAgICAgICAgRGVwbG95UiBpbnB1dCBmb3JtYXQuXG4gICAgICovXG4gICAgZW5jb2RlOiBmdW5jdGlvbihyZGF0YSkge1xuICAgICAgICB2YXIgciA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCByZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSByZGF0YVtpbmRleF07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHsgLy8gLS0gRGVwbG95UiBUeXBlIC0tIC8vXG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEFGUkFNRTpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSBlbmNvZGVEYXRhZnJhbWUob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkxJU1Q6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0gZW5jb2RlTGlzdChvYmopO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19NQVRSSVg6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSX01BVFJJWDpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fTUFUUklYOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX01BVFJJWDpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLk1BVFJJWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEU6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJQT1NJWF9EQVRFOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuREFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogb2JqLmZvcm1hdCwgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXREYXRlKG9iai52YWx1ZSwgb2JqLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJGQUNUT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJPUkRFUkVEOiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLkZBQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyZWQ6IG9iai5vcmRlcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBvYmoubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxzOiBvYmoubGV2ZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9iai52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SQk9PTEVBTjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUM6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuUFJJTUlUSVZFLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9iai52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19WRUNUT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fVkVDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlZFQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEVfVkVDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURV9WRUNUT1I6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0RGF0ZXMob2JqLnZhbHVlLCBvYmoudHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG9iai5mb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFJEYXRhVHlwZSBmb3VuZCBmb3IgXCInICsgb2JqLnR5cGUgKyAnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKEpTT04uc3RyaW5naWZ5KHIpKTtcbiAgICB9XG59OyIsIiB2YXIgd2luICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSxcbiAgICAgb3B0aW9uYWwgID0gcmVxdWlyZSgnLi9vcHRpb25hbCcpLCAgICAgXG4gICAgIFdlYlNvY2tldCA9IHdpbiA/IHdpbmRvdy5XZWJTb2NrZXQgOiBvcHRpb25hbCgnd3MnKSxcbiAgICAgUXVldWUgICAgID0gcmVxdWlyZSgnLi9xdWV1ZScpLCAgICAgXG4gICAgIEVtaXR0ZXIgICA9IHJlcXVpcmUoJy4vZW1pdHRlcicpLFxuICAgICBCYXNlICAgICAgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgICBtZXJnZSAgICAgPSByZXF1aXJlKCcuL3V0aWxzJykubWVyZ2U7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoRW1pdHRlciwgeyAgIFxuXG4gIC8qKlxuICAgKiBUaGUgYEV2ZW50U3RyZWFtYCBjbGFzcyBhY3RzIGFzIGEgY2xpZW50IGxpc3RlbmVyIGZvciB0aGUgRGVwbG95UiBldmVudCBcbiAgICogc3RyZWFtIEFQSSBgL3IvZXZlbnQvc3RyZWFtYCBub3RpZmljYXRpb25zLiBOb3RpZmljYXRpb25zIGNvcnJlc3BvbmQgdG8gXG4gICAqIGRpc2NyZXRlICBldmVudHMgdGhhdCBvY2N1ciB3aXRoaW4gdGhlIERlcGxveVIgc2VydmVyLiBUaGVyZSBhcmUgZm91ciBcbiAgICogZGlzdGluY3QgZXZlbnQgY2F0ZWdvcmllczpcbiAgICpcbiAgICogLSBTdHJlYW0gTGlmZWN5Y2xlIGV2ZW50c1xuICAgKiAtIEV4ZWN1dGlvbiBldmVudHNcbiAgICogLSBKb2IgTGlmZWN5Y2xlIGV2ZW50c1xuICAgKiAtIE1hbmFnZW1lbnQgZXZlbnRzICAgXG4gICAqIFxuICAgKiBAY2xhc3MgXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnQgVGhlIERlcGxveVIgc2VydmVyIGVuZHBvaW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPYmplY3QgbGl0ZXJhbCBoYXNoIG9mIG9wdGlvbnMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShlbmRwb2ludCwgb3B0aW9ucykge1xuICAgIEVtaXR0ZXIuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHt9KTtcbiAgXG4gICAgdGhpcy5hcGkgICAgID0gKGVuZHBvaW50IHx8ICcnKSArICcvZGVwbG95ci9yL2V2ZW50L3N0cmVhbScsXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLndzICAgICAgPSBudWxsO1xuICAgIHRoaXMucSAgICAgICA9IG5ldyBRdWV1ZSgpO1xuICAgIHRoaXMuZmlsdGVyICA9IHt9OyAgXG4gICAgdGhpcy5jb29raWVzID0gdGhpcy5vcHRpb25zLmNvb2tpZXM7XG4gIH0sICBcblxuICAvKipcbiAgICogVGhpcyBjYWxsIGNvbm5lY3RzIHRvIG9uZSBvZiB0aGUgZm9sbG93aW5nIGV2ZW50IHN0cmVhbXM6IGF1dGhlbnRpY2F0ZWQsIFxuICAgKiBhbm9ueW1vdXMsIG9yIG1hbmFnZW1lbnQuXG5cbiAgICogQG1ldGhvZCBvcGVuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9iamVjdCBsaXRlcmFsIGhhc2ggb2Ygc3VwcG9ydGVkIG9wdGlvbnM6XG4gICAqICAtIHlpZWxkOiBmYWxzZSAoZGVmYXVsdCkgLSBcbiAgICogIC0gY29va2llczogbnVsbCAoZGVmYXVsdClcbiAgICogIC0gcHJvamVjdDogbnVsbCAoZGVmYXVsdClcbiAgICogIC0gam9iOiBudWxsIChkZWZhdWx0KVxuICAgKiAgLSBodHRwRXZlbnRPbmx5OiBmYWxzZSAoZGVmYXVsdClcbiAgICogIC0gcmV2b0V2ZW50T25seTogZmFsc2UgKGRlZmF1bHQpXG4gICAqICAtIG1hbmFnZW1lbnRFdmVudE9ubHk6IGZhbHNlIChkZWZhdWx0KVxuICAgKlxuICAgKiBgYGBcbiAgICogIHtcbiAgICogICAgIC8vXG4gICAqICAgICAvLyBXYWl0IGZvciBhdXRoZW50aWNhdGlvbiB0byBjb21wbGV0ZSBiZWZvcmUgZXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24uXG4gICAqICAgICAvLyBcbiAgICogICAgIHlpZWxkOiBmYWxzZSwgXG4gICAqXG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gU2hhcmVkIGNvb2tpZXMgZnJvbSBvdGhlciBhdXRoZW50aWNhdGVkIERlcGxveVIgcmVxdWVzdHNcbiAgICogICAgIC8vXG4gICAqICAgICBjb29raWVzOiBbICdKU0VTU0lPTklEPTA4NjY2OUFCQzIyNkVCNzg7IFBhdGg9L2RlcGxveXIvOyBIdHRwT25seScgXVxuICAgKlxuICAgKiAgICAgLy9cbiAgICogICAgIC8vIEluZGljYXRlIHRoZSBEZXBsb3lSIGV2ZW50IHN0cmVhbSB0byBwdXNoIGV2ZW50cyBvbmx5IGZvciB0aGlzIFxuICAgKiAgICAgLy8gcHJvamVjdC5cbiAgICogICAgIC8vXG4gICAqICAgICBwcm9qZWN0OiAnUFJPSkVDVC1JRCcsXG4gICAqXG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gSW5kaWNhdGUgdGhlIERlcGxveVIgZXZlbnQgc3RyZWFtIHRvIHB1c2ggZXZlbnRzIG9ubHkgZm9yIHRoaXMgam9iLlxuICAgKiAgICAgLy9cbiAgICogICAgIGpvYjogJ0pPQi1JRCcsICAgICAgXG4gICAqICAgXG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gaHR0cEV2ZW50T25seT10cnVlIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgdGhlbiBhbiBhdXRoZW50aWNhdGVkIFxuICAgKiAgICAgLy8gZXZlbnQgc3RyZWFtIHdpbGwgc2VlIG9ubHkgZXhlY3V0aW9uIGV2ZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIFxuICAgKiAgICAgLy8gY3VycmVudCBIVFRQIHNlc3Npb24uXG4gICAqICAgICAvL1xuICAgKiAgICAgaHR0cEV2ZW50T25seTogdHJ1ZSwgICBcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gcmV2b0V2ZW50T25seT10cnVlLCB0aGVuIGV4ZWN1dGlvbiBleGVjdXRpb25Db25zb2xlRXZlbnQgXG4gICAqICAgICAvLyBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhlIHN0cmVhbVxuICAgKiAgICAgLy9cbiAgICogICAgIHJldm9FdmVudE9ubHk6IHRydWUsICAgICAgIFxuICAgKiAgICAgICAgICAgICAgICAgICBcbiAgICogICAgIC8vIFxuICAgKiAgICAgLy8gbWFuYWdlbWVudEV2ZW50T25seT10cnVlLCB0aGVuIGV2ZW50IHN0cmVhbSBjb25uZWN0aW9uIHR5cGUgaXMgXG4gICAqICAgICAvLyBtYW5hZ2VtZW50ICAgIFxuICAgKiAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgXG4gICAqICAgICBtYW5hZ2VtZW50RXZlbnRPbmx5OiB0cnVlICAgIFxuICAgKiB9XG4gICAqIGBgYCAgIFxuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb3BlbjogZnVuY3Rpb24ob3B0aW9ucykgeyAgICBcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHVybDtcblxuICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSBtZXJnZShvcHRpb25zIHx8IHt9LCB0aGlzLm9wdGlvbnMpOyAgICBcblxuICAgIHRoaXMuY29va2llcyA9ICF0aGlzLmNvb2tpZXMgPyBvcHRpb25zLmNvb2tpZXMgOiB0aGlzLmNvb2tpZXM7XG5cbiAgICAvL1xuICAgIC8vIEFwcGVuZCBldmVudCBmaWx0ZXJzXG4gICAgLy8gIFxuICAgIGlmIChvcHRpb25zLnByb2plY3QpIHsgdGhpcy5wcm9qZWN0KG9wdGlvbnMucHJvamVjdCk7IH1cbiAgICBpZiAob3B0aW9ucy5qb2IpIHsgdGhpcy5qb2Iob3B0aW9ucy5qb2IpOyB9XG4gICAgaWYgKG9wdGlvbnMubWFuYWdlbWVudEV2ZW50T25seSkgeyB0aGlzLm1hbmFnZW1lbnRFdmVudE9ubHkoKTsgfVxuICAgIGlmIChvcHRpb25zLnJldm9FdmVudE9ubHkpIHsgdGhpcy5yZXZvRXZlbnRPbmx5KCk7IH0gXG4gICAgaWYgKG9wdGlvbnMuaHR0cEV2ZW50T25seSkgeyB0aGlzLmh0dHBFdmVudE9ubHkoKTsgfVxuXG4gICAgdXJsID0gdGhpcy5nZXRSZXF1ZXN0VVJMKCk7XG5cbiAgICB0aGlzLnEueWllbGQodHJ1ZSk7XG4gICAgdGhpcy5xLmFkZChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5jb29raWVzID8geyAnQ29va2llJzogdGhpcy5jb29raWVzIH0gOiB7fTtcbiAgICAgIHRoaXMuZW1pdCgnZXM6Y29ubmVjdGluZycsIHsgdXJsOiB1cmwsIGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICAgIC8vIEZvciBCcm93c2VycyB0aGUgdGhyaWQgYXJndW1lbnQgYG9wdHNgIGlzaWdub3JlZFxuICAgICAgdmFyIHdzID0gKHdpbiA/IG5ldyBXZWJTb2NrZXQodXJsKSA6IFxuICAgICAgICBuZXcgV2ViU29ja2V0KHVybCwgJ2h0dHAnLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkpO1xuXG4gICAgICB3cy5vbm9wZW4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBzZWxmLmVtaXQoJ2VzOm9wZW4nLCBtZXNzYWdlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfbWVzc2FnZSA9ICcnO1xuICAgICAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdHJ5IHsgICAgICAgICAgXG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5zcGxpdCgnIXwhJylbMV0pIHtcbiAgICAgICAgICAgIF9tZXNzYWdlID0gX21lc3NhZ2UgKyBtZXNzYWdlLmRhdGEuc3BsaXQoJyF8IScpWzFdO1xuICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoX21lc3NhZ2UpO1xuICAgICAgICAgICAgX21lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHZhciB0eXBlID0gbWVzc2FnZS5kZXBsb3lyLnJlc3BvbnNlLmV2ZW50LnR5cGU7XG4gICAgICAgICAgICBzZWxmLmVtaXQoJ2VzOicgKyB0eXBlLnJlcGxhY2UoJ0V2ZW50JywgJycpLCBtZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9IFxuICAgICAgfTtcblxuICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5lbWl0KCdlczplcnJvcicsIGVycik7IH07XG4gICAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHsgc2VsZi5lbWl0KCdlczpjbG9zZScsIG1lc3NhZ2UpOyB9O1xuXG4gICAgICB0aGlzLndzID0gd3M7XG4gICAgfSwgdGhpcyk7XG5cbiAgICAvL1xuICAgIC8vIG9wZW4gc29ja2V0IGltbWVkaWF0ZWx5XG4gICAgLy9cbiAgICBpZiAoIW9wdGlvbnMueWllbGQpIHsgdGhpcy5mbHVzaCgpOyB9XG5cbiAgICByZXR1cm4gdGhpczsgICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRlcm1pbmF0ZXMgdGhlIFdlYlNvY2tldCBjbG9zaW5nIGFueSBjb25uZWN0aW9uIHRvIERlcGxveVIncyBldmVudCBzdHJlYW0uXG4gICAqIEBtZXRob2QgY2xvc2VcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy53cykgeyB0aGlzLndzLmNsb3NlKCk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZWNvbnN0cnVjdHMgdGhlIGV2ZW50IHN0cmVhbSBVUkwgdGhlIGNsaWVudCB1c2VzIHRvIG1ha2UgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiB3czovL2Rob3N0Ojc0MDAvZGVwbG95ci9yL2V2ZW50L3N0cmVhbT9yZXZvRXZlbnRPbmx5PXRydWUmcHJvamVjdD1QSURcbiAgICogd3M6Ly9kaG9zdDo3NDAwL2RlcGxveXIvci9ldmVudC9zdHJlYW1cbiAgICogYGBgXG4gICAqIEBtZXRob2QgZ2V0UmVxdWVzdFVSTFxuICAgKiBAYXBpIHB1YmxpYyAgICAgXG4gICAqL1xuICBnZXRSZXF1ZXN0VVJMOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdXJsICAgID0gdGhpcy5hcGkucmVwbGFjZSgvXmh0dHAvLCd3cycpLFxuICAgICAgICBmaWx0ZXIgPSB0aGlzLmZpbHRlcjtcblxuICAgIHVybCArPSAoZmlsdGVyLnR5cGUgPyAnPycgKyBmaWx0ZXIudHlwZSA6ICcnKTsgIFxuXG4gICAgaWYgKGZpbHRlci5wcm9qZWN0KSB7IHVybCArPSAnJicgKyBmaWx0ZXIucHJvamVjdDsgfVxuICAgIGlmIChmaWx0ZXIuam9iKSB7IHVybCArPSAnJicgKyBmaWx0ZXIuam9iOyB9XG5cbiAgICByZXR1cm4gIHVybDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSFRUUCBjb29raWUgcHJldmlvdXNseSBzZW50IGJ5IHRoZSBzZXJ2ZXIgd2l0aCBTZXQtQ29va2llLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBwYXNzZWQgdG8gYC5zaGFyZShydXNlci5nZXRDb29raWVzKCkpYCBvZiBhIGRpZmZyZW50XG4gICAqIGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZSBhY3Jvc3MgcmVxdWVzdHMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0Q29va2llc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIEhUVFAgY29va2llIHByZXZpb3VzbHkgc2VudCBieSB0aGUgc2VydmVyIHdpdGggXG4gICAqIFNldC1Db29raWUuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGdldENvb2tpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jb29raWVzO1xuICB9LCAgIFxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGxpZmVjeWNsZSBtZXRob2QuIEZpcmVzIHRoZSBgZGVzdHJveWAgZXZlbnQsIHByaW9yIHRvIGludm9raW5nIFxuICAgKiBkZXN0cnVjdG9ycyBmb3IgdGhlIGNsYXNzIGhpZXJhcmNoeS4gXG4gICAqXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24gKCkgeyAgICBcbiAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5vZmZBbGwoKTtcblxuICAgIHRoaXMud3MgICAgICA9IG51bGw7XG4gICAgdGhpcy5ob3N0ICAgID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSBudWxsO1xuICAgIHRoaXMud3MgICAgICA9IG51bGw7XG4gICAgdGhpcy5xICAgICAgID0gbnVsbDtcbiAgICB0aGlzLmZpbHRlciAgPSBudWxsOyAgICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIERyYWlucyB0aGUgeWllbGQgcXVldWUgaW4gc2l0dWF0aW9ucyB3aGVyZSBgb3BlbigpYCBpcyB3YWl0aW5nIGZvciBcbiAgICogYXV0aGVudGljYXRpb24gdG8gY29tcGxldGUgYmVmb3JlIGVzdGFibGlzaGluZyBhIGNvbm5lY3Rpb24uXG4gICAqL1xuICBmbHVzaDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5xLnlpZWxkKGZhbHNlKTtcbiAgICB0aGlzLnEuZmx1c2goKTtcbiAgfSxcblxuICAvKipcbiAgICogU2hhcmVzIHRoZSBjb29raWVzIGZyb20gYSBkaWZmZXJlbiBgLmlvKClgIGFnZW50IHRvIHByZXNlcnZlIHNlc3Npb24gc3RhdGVcbiAgICogYWNyb3NzIGB0aGlzYCByZXF1ZXN0IGFuZCBhbGwgcmVxdWVzdHMgY2hhaW5lZCB0byBpdC5cbiAgICpcbiAgICogQG1ldGhvZCBzaGFyZVxuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gXG4gIHNoYXJlOiBmdW5jdGlvbihjb29raWVzKSB7XG4gICAgdGhpcy5jb29raWVzID0gY29va2llcztcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZSB0aGUgRGVwbG95UiBldmVudCBzdHJlYW0gdG8gcHVzaCBldmVudHMgb25seSBmb3IgdGhpcyBwcm9qZWN0LlxuICAgKlxuICAgKiBAbWV0aG9kIHByb2plY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3QgVGhlIHByb2plY3QgaWRlbnRpZmllci5cbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIHByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICB0aGlzLmZpbHRlci5wcm9qZWN0ID0gJ3Byb2plY3Q9JyArIHByb2plY3Q7IFxuICAgIHRoaXMuZmlsdGVyLmpvYiA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogSW5kaWNhdGUgdGhlIERlcGxveVIgZXZlbnQgc3RyZWFtIHRvIHB1c2ggZXZlbnRzIG9ubHkgZm9yIHRoaXMgam9iLlxuICAgKlxuICAgKiBAbWV0aG9kIHByb2plY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IGpvYiBUaGUgam9iIGlkZW50aWZpZXIuXG4gICAqIEByZXR1cm4ge0V2ZW50U3RyZWFtfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBqb2I6IGZ1bmN0aW9uKGpvYikge1xuICAgIHRoaXMuZmlsdGVyLmpvYiA9ICdqb2I9JyArICBqb2I7IFxuICAgIHRoaXMuZmlsdGVyLnByb2plY3QgPSBudWxsOyAgICBcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJZiBzcGVjaWZpZWQgdGhlbiBldmVudCBzdHJlYW0gY29ubmVjdGlvbiB0eXBlIGlzIG1hbmFnZW1lbnQuXG4gICAqXG4gICAqIEBtZXRob2QgbWFuYWdlbWVudEV2ZW50T25seVxuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gIFxuICBtYW5hZ2VtZW50RXZlbnRPbmx5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZpbHRlciA9IHtcbiAgICAgIHR5cGU6ICdtYW5hZ2VtZW50RXZlbnRPbmx5PXRydWUnLFxuICAgICAgcHJvamVjdDogbnVsbCxcbiAgICAgIGpvYjogbnVsbFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogSWYgc3BlY2lmaWVkIHRoZW4gYW4gYXV0aGVudGljYXRlZCBldmVudCBzdHJlYW0gd2lsbCBzZWUgb25seSBleGVjdXRpb24gXG4gICAqIGV2ZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnQgSFRUUCBzZXNzaW9uLlxuICAgKlxuICAgKiBAbWV0aG9kIGh0dHBFdmVudE9ubHlcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgaHR0cEV2ZW50T25seTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maWx0ZXIudHlwZSA9ICdodHRwRXZlbnRPbmx5PXRydWUnO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICBcblxuICAvKipcbiAgICogSWYgc3BlY2lmaWVkIHRoZW4gZXhlY3V0aW9uIGBleGVjdXRpb25Db25zb2xlRXZlbnRgIGV2ZW50cyBhcmUgc3VwcHJlc3NlZFxuICAgKiBvbiB0aGUgZXZlbnQgc3RyZWFtLlxuICAgKlxuICAgKiBAbWV0aG9kIHJldm9FdmVudE9ubHlcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovIFxuICByZXZvRXZlbnRPbmx5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZpbHRlci50eXBlID0gJ3Jldm9FdmVudE9ubHk9dHJ1ZSc7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGFsbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maWx0ZXIgPSB7IHR5cGU6IG51bGwsIHByb2plY3Q6IG51bGwsIGpvYjogbnVsbCB9O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBzZXNzaW9uOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwRXZlbnRPbmx5KCk7XG4gIH0sIFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgbWFuYWdlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWFuYWdlbWVudEV2ZW50T25seSgpO1xuICB9XG59KTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgYSBEZXBsb3lSIHBvcnQgb2YgeXVpLWxhbmcuanMgYnkgWWFob28hXG4gKlxuICogU29mdHdhcmUgTGljZW5zZSBBZ3JlZW1lbnQgKEJTRCBMaWNlbnNlKVxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2Ugb2YgdGhpcyBzb2Z0d2FyZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciBcbiAqIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIFxuICogYXJlIG1ldDpcbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgXG4gKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBcbiAqIGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCBcbiAqIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIFxuICogd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgWWFob28hIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBZVUkncyBjb250cmlidXRvcnMgbWF5IGJlIFxuICogdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBcbiAqIHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBZYWhvbyEgSW5jLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIFxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIFxuICogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIFxuICogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBcbiAqIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFxuICogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIFxuICogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gXG4gKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBcbiAqIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFICBcbiAqIFBPUyBTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIGNvcmUgbGFuZ3VhZ2UgdXRpbGl0ZXMgYW5kIGV4dGVuc2lvbnMgdXNlZCB0aHJvdWdob3V0IERlcGxveVIuXG4gKlxuICogQGNsYXNzIExhbmdcbiAqIEBzdGF0aWNcbiAqL1xudmFyIEwgPSB7fSwgXG5cdFRPU1RSSU5HID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZywgXG5cdFRZUEVTID0ge1x0XG5cdFx0J3VuZGVmaW5lZCcgOiAndW5kZWZpbmVkJyxcblx0XHQnbnVtYmVyJyA6ICdudW1iZXInLFxuXHRcdCdib29sZWFuJyA6ICdib29sZWFuJyxcblx0XHQnc3RyaW5nJyA6ICdzdHJpbmcnLFxuXHRcdCdbb2JqZWN0IEZ1bmN0aW9uXScgOiAnZnVuY3Rpb24nLFxuXHRcdCdbb2JqZWN0IFJlZ0V4cF0nIDogJ3JlZ2V4cCcsXG5cdFx0J1tvYmplY3QgQXJyYXldJyA6ICdhcnJheScsXG5cdFx0J1tvYmplY3QgRGF0ZV0nIDogJ2RhdGUnLFxuXHRcdCdbb2JqZWN0IEVycm9yXScgOiAnZXJyb3InXG5cdH0sIHVuc2FmZU5hdGl2ZXMgPSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIG51bGwuXG4gKiBAbWV0aG9kIGlzTnVsbFxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIG51bGwuXG4gKi9cbkwuaXNOdWxsID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gbyA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyB1bmRlZmluZWQuXG4gKiBAbWV0aG9kIGlzVW5kZWZpbmVkXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgdW5kZWZpbmVkLlxuICovXG5MLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIG9mIHR5cGUgb2JqZWN0XG4gKiBvciBmdW5jdGlvbi4gTm90ZSB0aGF0IGFycmF5cyBhcmUgYWxzbyBvYmplY3RzLCBzb1xuICogPGNvZGU+WS5MYW5nLmlzT2JqZWN0KFtdKSA9PT0gdHJ1ZTwvY29kZT4uXG4gKiBAbWV0aG9kIGlzT2JqZWN0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcGFyYW0gZmFpbGZuIHtib29sZWFufSBmYWlsIGlmIHRoZSBpbnB1dCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGFuIG9iamVjdC5cbiAqIEBzZWUgaXNQbGFpbk9iamVjdFxuICovXG5MLmlzT2JqZWN0ID0gZnVuY3Rpb24obywgZmFpbGZuKSB7XG5cdHZhciB0ID0gdHlwZW9mIG87XG5cdHJldHVybiAobyAmJiAodCA9PT0gJ29iamVjdCcgfHwgKCFmYWlsZm4gJiYgKHQgPT09ICdmdW5jdGlvbicgfHwgTC5pc0Z1bmN0aW9uKG8pKSkpKSB8fCBmYWxzZTtcbn07XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIGl0ZW0gaXMgYW4gYXJyYXkuXG4gKlxuICogUmV0dXJucyBgZmFsc2VgIGZvciBhcnJheS1saWtlIGNvbGxlY3Rpb25zIHN1Y2ggYXMgdGhlIGZ1bmN0aW9uIGBhcmd1bWVudHNgXG4gKiBjb2xsZWN0aW9uIG9yIGBIVE1MRWxlbWVudGAgY29sbGVjdGlvbnMuXG4gKlxuICogQG1ldGhvZCBpc0FycmF5XG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgYW4gYXJyYXkuXG4gKiBAc3RhdGljXG4gKi9cbkwuaXNBcnJheSA9ICghdW5zYWZlTmF0aXZlcyAmJiBBcnJheS5pc0FycmF5KSB8fFxuZnVuY3Rpb24obykge1xuXHRyZXR1cm4gTC50eXBlKG8pID09PSAnYXJyYXknO1xufTtcblxuTC5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbkEobykge1xuXHRyZXR1cm4gKHR5cGVvZihvKSA9PT0gXCJmdW5jdGlvblwiKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBhIGJvb2xlYW4uXG4gKiBAbWV0aG9kIGlzQm9vbGVhblxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgYm9vbGVhbi5cbiAqL1xuTC5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvKSB7XG5cdHJldHVybiB0eXBlb2YgbyA9PT0gJ2Jvb2xlYW4nO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBzdXBwbGllZCBpdGVtIGlzIGEgZGF0ZSBpbnN0YW5jZS5cbiAqIEBtZXRob2QgaXNEYXRlXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgYSBkYXRlLlxuICovXG5MLmlzRGF0ZSA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIEwudHlwZShvKSA9PT0gJ2RhdGUnICYmIG8udG9TdHJpbmcoKSAhPT0gJ0ludmFsaWQgRGF0ZScgJiYgIWlzTmFOKG8pO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIGEgbGVnYWwgbnVtYmVyLlxuICogQG1ldGhvZCBpc051bWJlclxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgbnVtYmVyLlxuICovXG5MLmlzTnVtYmVyID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICdudW1iZXInICYmIGlzRmluaXRlKG8pO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIGEgc3RyaW5nLlxuICogQG1ldGhvZCBpc1N0cmluZ1xuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgc3RyaW5nLlxuICovXG5MLmlzU3RyaW5nID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICdzdHJpbmcnO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiB0aGUgaXRlbSBwYXNzZWQgaW4uXG4gKlxuICogQG1ldGhvZCB0eXBlXG4gKiBAcGFyYW0gbyB0aGUgaXRlbSB0byB0ZXN0LlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZGV0ZWN0ZWQgdHlwZS5cbiAqIEBzdGF0aWNcbiAqL1xuTC50eXBlID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gVFlQRVNbIHR5cGVvZiBvXSB8fCBUWVBFU1tUT1NUUklORy5jYWxsKG8pXSB8fCAoIG8gPyAnb2JqZWN0JyA6ICdudWxsJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEw7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG4gXG52YXIgTG9nZ2VyID0ge30sXG4gICAgbG9nZ2VyTWFwID0ge30sXG4gICAgZ2xvYmFsTG9nZ2VyO1xuXG4vKipcbiAqIFVuaXZlcnNhbCBzdGRvdXR8c3RkZXJyIHByaW50ZXJcbiAqL1xuZnVuY3Rpb24gbG9nKG1lc3NhZ2VzLCBjb250ZXh0KSB7XHRcblx0aWYgKCFjb25zb2xlKSB7IHJldHVybjsgfVxuXG5cdGZ1bmN0aW9uIHNlcChsZXZlbCkge1xuXHRcdHZhciBzZXAgPSAnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JyArXG5cdFx0ICAgICAgICAgICc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4nLFxuXHRcdCAgICBvZmZzZXQgPSAwO1xuXG5cdFx0aWYgKGxldmVsID09PSBMb2dnZXIuREVCVUcgfHwgbGV2ZWwgPT09IExvZ2dlci5FUlJPUikgb2Zmc2V0ID0gODtcblx0XHRlbHNlIGlmIChsZXZlbCA9PT0gTG9nZ2VyLklORk8gfHwgbGV2ZWwgPT09IExvZ2dlci5XQVJOKSBvZmZzZXQgPSA4O1xuXHRcdGVsc2Ugb2Zmc2V0ID0gNztcblxuXHRcdHJldHVybiB7IHN0YXJ0OiBzZXAuc3Vic3RyaW5nKG9mZnNldCksIGVuZDogc2VwIH07XG5cdH1cblxuXHR2YXIgaGRscixcblx0ICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtZXNzYWdlcywgMCksXG5cdCAgICBuYW1lID0gY29udGV4dC5uYW1lLFxuXHQgICAgZXJyb3IgPSBjb250ZXh0LmxldmVsID09PSBMb2dnZXIuRVJST1IsXG4gIFx0ICAgIGRlbGltID0gc2VwKGNvbnRleHQubGV2ZWwpO1xuXG4gIFx0aWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5XQVJOICYmIGNvbnNvbGUud2Fybikge1xuICBcdFx0aGRsciA9ICd3YXJuJztcbiAgXHR9IGVsc2UgaWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5FUlJPUiAmJiBjb25zb2xlLmVycm9yKSB7XG4gIFx0XHRoZGxyID0gJ2Vycm9yJztcbiAgXHR9IGVsc2UgaWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5JTkZPICYmIGNvbnNvbGUuaW5mbykge1xuICBcdFx0aGRsciA9ICdpbmZvJztcbiAgXHR9IGVsc2Uge1xuICBcdFx0aGRsciA9ICdsb2cnO1xuICBcdH1cblxuICBcdC8vIC0tIGN1c3RvbSBmb3JtYXQgbG9nZ2luZyBzdGF0ZW1lbnQgZm9yIGRlcGxveXIgcmVxdWVzdC9yZXNwb25zZS9lcnJvciAtLVxuICBcdGFyZ3MudW5zaGlmdCgnWycgKyAoZXJyb3IgPyBMb2dnZXIuRVJST1IubmFtZSA6IG5hbWUpICsgJ10gJyArIGRlbGltLnN0YXJ0KTtcbiAgXHRhcmdzLnB1c2goZGVsaW0uZW5kKTtcblxuICBcdGNvbnNvbGVbaGRscl0oYXJnc1swXSwgW2FyZ3NbMV0gKyAnIC0tLT4gJyArIGFyZ3NbMl1bJ2NhbGwnXV0pO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7IGNvbnNvbGUubG9nKGFyZ3NbaV0pOyB9ICBcbn1cblxuLyoqXG4gKiBMb2dnaW5nIGNhdGVnb3J5IGJ5IGlkLlxuICovXG5mdW5jdGlvbiBDYXRlZ29yeShpZCwgbGV2ZWwsIGZuKSB7XG5cdHRoaXMuaWQgPSBpZDtcblx0dGhpcy5jb250ZXh0ID0gbGV2ZWwgfHwgTG9nZ2VyLkRFQlVHO1xufVxuXG5DYXRlZ29yeS5wcm90b3R5cGUgPSB7XHRcblx0bG9nOiBmdW5jdGlvbihsZXZlbCwgbXNnQXJncykge1xuXHRcdGlmIChsZXZlbC52YWx1ZSA+PSB0aGlzLmNvbnRleHQudmFsdWUpIHtcdFx0XHRcblx0XHRcdGxvZyhtc2dBcmdzLCB7IFxuXHRcdFx0XHRsZXZlbDogbGV2ZWwsXG5cdFx0XHRcdG5hbWU6IHRoaXMuY29udGV4dC5uYW1lLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5jb250ZXh0LnZhbHVlXG5cdFx0XHR9KTtcdFx0XG5cdFx0fVxuXHR9LFxuXG5cdGRlYnVnOiBmdW5jdGlvbiAoKSB7XHRcdFxuXHRcdHRoaXMubG9nKExvZ2dlci5ERUJVRywgYXJndW1lbnRzKTtcblx0fSxcblxuXHRlcnJvcjogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubG9nKExvZ2dlci5FUlJPUiwgYXJndW1lbnRzKTtcblx0fSxcblxuXHRpbmZvOiBmdW5jdGlvbiAoKSB7XHRcdFxuXHRcdHRoaXMubG9nKExvZ2dlci5JTkZPLCBhcmd1bWVudHMpO1xuXHR9LFxuXG5cdHdhcm46IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmxvZyhMb2dnZXIuV0FSTiwgYXJndW1lbnRzKTtcblx0fSxcblxuXHRzZXRMZXZlbDogZnVuY3Rpb24obGV2ZWwpIHtcblx0XHRpZiAobGV2ZWwgJiYgJ3ZhbHVlJyBpbiBsZXZlbCkge1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gbGV2ZWw7XG5cdFx0fVxuXHR9XG59O1xuXG5Mb2dnZXIuREVCVUcgPSB7IHZhbHVlOiAxLCBuYW1lOiAnREVCVUcnIH07XG5Mb2dnZXIuSU5GTyAgPSB7IHZhbHVlOiAyLCBuYW1lOiAnSU5GTycgfTtcbkxvZ2dlci5XQVJOICA9IHsgdmFsdWU6IDQsIG5hbWU6ICdXQVJOJyB9O1xuTG9nZ2VyLkVSUk9SID0geyB2YWx1ZTogOCwgbmFtZTogJ0VSUk9SJyB9O1xuTG9nZ2VyLk9GRiAgID0geyB2YWx1ZTogOTksIG5hbWU6ICdPRkYnIH07ICAgXHRcdFxuXG5Mb2dnZXIuc2V0TGV2ZWwgPSBmdW5jdGlvbihuZXdMZXZlbCkge1xuXHRnbG9iYWxMb2dnZXIuc2V0TGV2ZWwobmV3TGV2ZWwpO1xufTtcblxuTG9nZ2VyLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIuZGVidWcuYXBwbHkoZ2xvYmFsTG9nZ2VyLCBhcmd1bWVudHMpO1xufTtcblxuTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7XG5cdGdsb2JhbExvZ2dlci5pbmZvLmFwcGx5KGdsb2JhbExvZ2dlciwgYXJndW1lbnRzKTtcbn07XG5cbkxvZ2dlci53YXJuID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIud2Fybi5hcHBseShnbG9iYWxMb2dnZXIsIGFyZ3VtZW50cyk7XG59O1xuXG5Mb2dnZXIuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdGdsb2JhbExvZ2dlci5lcnJvci5hcHBseShnbG9iYWxMb2dnZXIsIGFyZ3VtZW50cyk7XG59O1xuXG5Mb2dnZXIuZ2V0ID0gZnVuY3Rpb24gKGlkLCBsZXZlbCwgZm4pIHtcdFxuXHRyZXR1cm4gKGxvZ2dlck1hcFtpZF0gfHwgKGZ1bmN0aW9uKCkge1xuXHRcdGxvZ2dlck1hcFtpZF0gPSBuZXcgQ2F0ZWdvcnkoaWQsIGxldmVsLCBmbik7XG5cdFx0cmV0dXJuIGxvZ2dlck1hcFtpZF07XG5cdH0pKCkpO1xufTtcblxuLy8gLS0tIHNldHVwIHRoZSBnbG9iYWwgbG9nZ2VyIC0tLVxuZ2xvYmFsTG9nZ2VyID0gTG9nZ2VyLmdldCgnZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzIFx0PSBMb2dnZXI7XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cbiBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlcXVpcmUobW9kdWxlKTtcbiAgfSBjYXRjaCAoZSkge31cbn07IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbmZ1bmN0aW9uIFF1ZXVlKCkge1xuICB0aGlzLmVtcHR5Q2FsbGJhY2sgPSBudWxsO1xuICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB0aGlzLnlpZWxkZWQgPSBmYWxzZTtcbiAgdGhpcy5yZXNwb25zZSA9IG51bGw7XG4gIHRoaXMucmVzcG9uc2VDaGFpbiA9IFtdOyAgXG59XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcblxuICBhZGQ6IGZ1bmN0aW9uKGZuLCBjdHgsIGRlZmVyKSB7XG4gICAgLy8gY3VycmVudGx5IG5vdCB3YWl0aW5nIGFuZCB0aGVyZSBpcyBubyBkZWZlciBkZWxheSBqdXN0IG1ha2UgY2FsbFxuICAgIGlmICghdGhpcy55aWVsZGVkICYmICFkZWZlcikgeyAgICAgIFxuICAgICAgZm4uYXBwbHkoY3R4IHx8IHRoaXMsIFt0aGlzLnJlc3BvbnNlXSk7XG4gICAgfSBlbHNlIHsgLy8gYWRkIHRvIHF1ZXVlXG4gICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKHsgZm46IGZuLCBjdHg6IGN0eCB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzLmxlbmd0aDtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFja3MubGVuZ3RoID09PSAwO1xuICB9LFxuXG4gIGVtcHR5OiBmdW5jdGlvbihmbiwgY3R4KSB7XG4gICAgdGhpcy5lbXB0eUNhbGxiYWNrID0geyBmbjogZm4sIGN0eDogY3R4IH07XG4gIH0sXG5cbiAgeWllbGQ6IGZ1bmN0aW9uKHlpZWxkKSB7XG4gICAgdGhpcy55aWVsZGVkID0geWllbGQ7XG4gIH0sXG5cbiAgdGFrZTogZnVuY3Rpb24ocmVzcG9uc2UsIGVycm9yLCBhcmdzKSB7IFxuICAgIHZhciBjYjtcblxuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5yZXNwb25zZUNoYWluLnB1c2gocmVzcG9uc2UpO1xuICAgIH1cblxuXG4gICAgaWYgKCF0aGlzLnlpZWxkZWQgJiYgdGhpcy5jYWxsYmFja3NbMF0pIHtcbiAgICAgIGNiID0gdGhpcy5jYWxsYmFja3Muc2hpZnQoKTtcbiAgICAgIGNiLmZuLmFwcGx5KGNiLmN0eCB8fCB0aGlzLCBbdGhpcy5yZXNwb25zZUNoYWluLCBlcnJvciwgYXJnc10pO1xuXG4gICAgICAvLyBub3RpZnkgdGhhdCB0aGUgcXVldWUgaXMgbm93IGVtcHR5ICAgXG4gICAgICBpZiAodGhpcy5jYWxsYmFja3NbMF0gJiYgdGhpcy5lbXB0eUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZW1wdHlDYWxsYmFjay5mbi5jYWxsKHRoaXMuZW1wdHlDYWxsYmFjay5jdHggfHwgdGhpcyk7ICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcbiAgZmx1c2g6IGZ1bmN0aW9uKHJlc3BvbnNlLCBlcnJvciwgYXJncykgeyAgICAgICAgXG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLnJlc3BvbnNlQ2hhaW4ucHVzaChyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLy8gcG9wIGFuZCBjYWxsIG5leHQgaW5saW5lXG4gICAgd2hpbGUgKHRoaXMuY2FsbGJhY2tzWzBdKSB7XG4gICAgICBpZiAodGhpcy55aWVsZGVkKSB7IGJyZWFrOyB9XG4gICAgICB2YXIgY2IgPSB0aGlzLmNhbGxiYWNrcy5zaGlmdCgpO1xuICAgICAgY2IuZm4uYXBwbHkoY2IuY3R4IHx8IHRoaXMsIFt0aGlzLnJlc3BvbnNlQ2hhaW4sIGVycm9yLCBhcmdzXSk7XG5cbiAgICAgIC8vIG5vdGlmeSB0aGF0IHRoZSBxdWV1ZSBpcyBub3cgZW1wdHlcbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrc1swXSAmJiB0aGlzLmVtcHR5Q2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbXB0eUNhbGxiYWNrLmZuLmNhbGwodGhpcy5lbXB0eUNhbGxiYWNrLmN0eCB8fCB0aGlzKTsgICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlICAgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJUeXBlcyA9IHJlcXVpcmUoJy4vcnR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoUlR5cGVzLCB7XG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHsgIFx0XG5cdFx0dGhpcy5uYW1lICA9IG5hbWU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdH0sXG5cblx0bnVtZXJpYzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIHN1cHBvcnQgYFN0cmluZ2AgbnVtYmVycyAoZS5nLiBcIjEuMlwiKVxuXHRcdHRoaXMudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHtcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5STlVNRVJJQyxcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7XG5cdH0sXHRcblxuXHRpbnRlZ2VyOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gc3VwcG9ydCBgU3RyaW5nYCBpbnRlZ2VyIChlLmcuIFwiMTVcIilcblx0XHR0aGlzLnZhbHVlID0gcGFyc2VJbnQodGhpcy52YWx1ZSwgMTApO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUklOVEVHRVIsXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGxvZ2ljYWw6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SQk9PTEVBTiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGNoYXJhY3RlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJTVFJJTkcsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkRBVEUsXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRmb3JtYXQ6ICd5eXl5LU1NLWRkJyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdHBvc2l4Y3Q6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SUE9TSVhfREFURSwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRmb3JtYXQ6ICd5eXl5LU1NLWRkIEhIOm1tOnNzIFonLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXHRcblx0XG5cdG51bWVyaWNWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUk5VTUVSSUNfVkVDVE9SLFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRpbnRlZ2VyVmVjdG9yOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUklOVEVHRVJfVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0bG9naWNhbFZlY3RvcjogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SQk9PTEVBTl9WRUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRjaGFyYWN0ZXJWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlNUUklOR19WRUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sICBcblx0XG5cdGRhdGVWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkRBVEVfVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdGZvcm1hdDogJ3l5eXktTU0tZGQnLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXHRcblx0XG5cdHBvc2l4Y3RWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEVfVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdGZvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MgWicsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGxpc3Q6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5STElTVCwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGRhdGFmcmFtZTogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SREFUQUZSQU1FLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdGZhY3RvcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KCB7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJGQUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0b3JkZXJlZDogZmFsc2UsXG5cdFx0XHRsZXZlbHM6IG9wdHMubGV2ZWxzLFxuXHRcdFx0bGFiZWxzOiBvcHRzLmxhYmVscyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdG9yZGVyZWQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgb3B0cyA9IHRoaXMub3B0aW9ucztcblxuXHRcdHJldHVybiB0aGlzLmFzc2VydCggeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5ST1JERVJFRCwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRvcmRlcmVkOiB0cnVlLFxuXHRcdFx0bGV2ZWxzOiBvcHRzLmxldmVscyxcblx0XHRcdGxhYmVsczogb3B0cy5sYWJlbHMsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcdFx0XG5cblx0bnVtZXJpY01hdHJpeDogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5STlVNRVJJQ19NQVRSSVgsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0aW50ZWdlck1hdHJpeDogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SSU5URUdFUl9NQVRSSVgsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0bG9naWNhbE1hdHJpeDogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SQk9PTEVBTl9NQVRSSVgsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0Y2hhcmFjdGVyTWF0cml4OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlNUUklOR19NQVRSSVgsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0dG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBvcHRzICAgPSB0aGlzLm9wdGlvbnMgfHwge30sXG5cdFx0ICAgIGxldmVscyA9IG9wdHMubGV2ZWxzID8gJ1sgbGV2ZWxzID0gJyArIG9wdHMubGV2ZWxzICsgJ10nIDogJycsXG5cdFx0ICAgIGxhYmVscyA9IG9wdHMubGFiZWxzID8gJ1sgbGFiZWxzID0gJyArIG9wdHMubGFiZWxzICsgJ10nIDogJyc7XG5cblx0XHRyZXR1cm4gJ1sgbmFtZSA9ICcgICsgdGhpcy5uYW1lICsgJyBdICcgK1xuXHRcdCAgICAgICAnWyB2YWx1ZSA9ICcgKyB0aGlzLnZhbHVlICsgJyBdICcgK1xuXHRcdCAgICAgICAnWyB0eXBlID0gJyAgKyB0aGlzLnR5cGUgKyAnIF0gJyArXG5cdFx0ICAgICAgIGxldmVscyArIGxhYmVscztcdFx0ICAgICAgIFxuXHR9XG59KTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIEJhc2UgICA9IHJlcXVpcmUoJy4vc2VsZmlzaCcpLkJhc2UsXG4gICAgUlR5cGVzID0gcmVxdWlyZSgnLi9ydHlwZXMnKSxcbiAgICBMYW5nICAgPSByZXF1aXJlKCcuL2xhbmcnKSxcbiAgICBSSW5wdXQgPSByZXF1aXJlKCcuL3JpbnB1dCcpOyBcblxuZnVuY3Rpb24gY3JlYXRlKHR5cGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG5cdHZhciByaW5wdXQ7XG5cblx0aWYgKExhbmcuaXNPYmplY3QobmFtZSkpIHtcblx0XHRyaW5wdXQgPSBuYW1lO1xuXHRcdGlmICghcmlucHV0LnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSWxsZWdhbEFyZ3VtZW50RXJyb3I6JyArIFxuXHRcdFx0XHQnRXhwZWN0aW5nIFwiJyArIHR5cGUgKyAnXCIgYnV0IGZvdW5kIFwiJyArIHJpbnB1dC50eXBlICsgJ1wiJyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHQgICAgcmlucHV0ID0gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSwgb3B0aW9ucylbdHlwZV0oKTtcblx0fSBcblxuXHRyZXR1cm4gcmlucHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKFJUeXBlcywge1x0XG5cdG51bWVyaWM6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5STlVNRVJJQywgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdGludGVnZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SSU5URUdFUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRsb2dpY2FsOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkJPT0xFQU4sIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0Y2hhcmFjdGVyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUlNUUklORywgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRkYXRlOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkRBVEUsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXG5cdHBvc2l4Y3Q6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SUE9TSVhfREFURSwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXHRcblx0XG5cdG51bWVyaWNWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUk5VTUVSSUNfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGludGVnZXJWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SSU5URUdFUl9WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0bG9naWNhbFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SQk9PTEVBTl9WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0Y2hhcmFjdGVyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJTVFJJTkdfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSwgIFxuXHRcblx0ZGF0ZVZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SREFURV9WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFx0XG5cdFxuXHRwb3NpeGN0VmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRsaXN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkxJU1QsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0ZGF0YWZyYW1lOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJEQVRBRlJBTUUsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFx0XG5cblx0ZmFjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGxldmVscywgbGFiZWxzKSB7XG5cdFx0dmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SRkFDVE9SLCBuYW1lLCB2YWx1ZSwgb3B0cykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdG9yZGVyZWQ6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgbGV2ZWxzLCBsYWJlbHMpIHtcblx0XHR2YXIgb3B0cyA9IHsgbGV2ZWxzOiBsZXZlbHMsIGxhYmVsczogbGFiZWxzIH07XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJPUkRFUkVELCBuYW1lLCB2YWx1ZSwgb3B0cykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFx0XHRcblxuXHRudW1lcmljTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJOVU1FUklDX01BVFJJWCwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cblx0aW50ZWdlck1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SSU5URUdFUl9NQVRSSVgsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXG5cdGxvZ2ljYWxNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkJPT0xFQU5fTUFUUklYLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblxuXHRjaGFyYWN0ZXJNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SU1RSSU5HX01BVFJJWCwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZSxcbiAgICBMYW5nID0gcmVxdWlyZSgnLi9sYW5nJyksXG4gICAgbWFwICA9IHt9OyAvLyBkZXBsb3lyLT5Uby0+UiBjYXRhbG9nXG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoe1xuXHRyOiB7XG5cdFx0UFJJTUlUSVZFOiAncHJpbWl0aXZlJyxcblx0XHREQVRBRlJBTUU6ICdkYXRhZnJhbWUnLFxuXHRcdExJU1Q6ICdsaXN0Jyxcblx0XHRNQVRSSVg6ICdtYXRyaXgnLFxuXHRcdERBVEU6ICdkYXRlJyxcblx0XHRGQUNUT1I6ICdmYWN0b3InLFxuXHRcdFZFQ1RPUjogJ3ZlY3Rvcidcblx0fSxcblxuXHRkZXBsb3lyOiB7XG5cdFx0UkJPT0xFQU46ICdsb2dpY2FsJyxcblx0XHRSTlVNRVJJQzogJ251bWVyaWMnLFxuXHRcdFJJTlRFR0VSOiAnaW50ZWdlcicsXG5cdFx0UlNUUklORzogJ2NoYXJhY3RlcicsXG5cdFx0UkRBVEU6ICdkYXRlJyxcblx0XHRSUE9TSVhfREFURTogJ3Bvc2l4Y3QnLFxuXHRcdFJCT09MRUFOX1ZFQ1RPUjogJ2xvZ2ljYWxWZWN0b3InLFxuXHRcdFJOVU1FUklDX1ZFQ1RPUjonbnVtZXJpY1ZlY3RvcicsXG5cdFx0UklOVEVHRVJfVkVDVE9SOiAnaW50ZWdlclZlY3RvcicsXHRcblx0XHRSU1RSSU5HX1ZFQ1RPUjogJ2NoYXJhY3RlclZlY3RvcicsXG5cdFx0UkRBVEVfVkVDVE9SOiAnZGF0ZVZlY3RvcicsXG5cdFx0UlBPU0lYX0RBVEVfVkVDVE9SOiAncG9zaXhjdFZlY3RvcicsXG5cdFx0UkxJU1Q6ICdsaXN0Jyxcblx0XHRSREFUQUZSQU1FOiAnZGF0YWZyYW1lJyxcblx0XHRSRkFDVE9SOiAnZmFjdG9yJyxcblx0XHRST1JERVJFRDogJ29yZGVyZWQnLFx0XHRcblx0XHRSQk9PTEVBTl9NQVRSSVg6ICdsb2dpY2FsTWF0cml4Jyxcblx0XHRSTlVNRVJJQ19NQVRSSVg6ICdudW1lcmljTWF0cml4Jyxcblx0XHRSSU5URUdFUl9NQVRSSVg6ICdpbnRlZ2VyTWF0cml4JyxcdFx0XG5cdFx0UlNUUklOR19NQVRSSVg6ICdjaGFyYWN0ZXJNYXRyaXgnXG5cdH0sXG5cblx0aXNEYXRlOiBmdW5jdGlvbih0eXBlKSB7XG5cdFx0cmV0dXJuICh0eXBlID09PSB0aGlzLmRlcGxveXIuUkRBVEUgfHwgXG5cdFx0ICAgICAgICB0eXBlID09PSB0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEUgfHwgXG5cdFx0ICAgICAgICB0eXBlID09PSB0aGlzLmRlcGxveXIuUkRBVEVfVkVDVE9SIHx8XG5cdFx0ICAgICAgICB0eXBlID09PSB0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEVfVkVDVE9SIHx8XG5cdFx0ICAgICAgICB0eXBlID09PSB0aGlzLnIuREFURSk7XG5cdH0sXG5cblx0ZGVwbG95clRvUjogZnVuY3Rpb24odHlwZSkge1x0XG5cdFx0dmFyIGRlcGxveXIgPSB0aGlzLmRlcGxveXIsXG5cdFx0ICAgIHIgICAgICAgPSB0aGlzLnI7XG5cblx0XHRpZiAoIW1hcFt0eXBlXSkgeyAvLyBidWlsZCBjYXRhbG9nIG9ubHkgb25jZVx0XG5cdFx0XHRtYXBbZGVwbG95ci5SQk9PTEVBTl0gICAgICAgICAgID0gci5QUklNSVRJVkU7XG5cdFx0XHRtYXBbZGVwbG95ci5STlVNRVJJQ10gICAgICAgICAgID0gci5QUklNSVRJVkU7XG5cdFx0XHRtYXBbZGVwbG95ci5SSU5URUdFUl0gICAgICAgICAgID0gci5QUklNSVRJVkU7XG5cdFx0XHRtYXBbZGVwbG95ci5SU1RSSU5HXSAgICAgICAgICAgID0gci5QUklNSVRJVkU7XG5cdFx0XHRtYXBbZGVwbG95ci5SREFURV0gICAgICAgICAgICAgID0gci5EQVRFO1xuXHRcdFx0bWFwW2RlcGxveXIuUlBPU0lYX0RBVEVdICAgICAgICA9IHIuREFURTtcblx0XHRcdG1hcFtkZXBsb3lyLlJCT09MRUFOX1ZFQ1RPUl0gICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUl0gICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJJTlRFR0VSX1ZFQ1RPUl0gICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJTVFJJTkdfVkVDVE9SXSAgICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJEQVRFX1ZFQ1RPUl0gICAgICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUl0gPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJMSVNUXSAgICAgICAgICAgICAgPSByLkxJU1Q7XG5cdFx0XHRtYXBbZGVwbG95ci5SREFUQUZSQU1FXSAgICAgICAgID0gci5EQVRBRlJBTUU7XG5cdFx0XHRtYXBbZGVwbG95ci5SRkFDVE9SXSAgICAgICAgICAgID0gci5GQUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5ST1JERVJFRF0gICAgICAgICAgID0gci5GQUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SQk9PTEVBTl9NQVRSSVhdICAgID0gci5NQVRSSVg7XG5cdFx0XHRtYXBbZGVwbG95ci5STlVNRVJJQ19NQVRSSVhdICAgID0gci5NQVRSSVg7XG5cdFx0XHRtYXBbZGVwbG95ci5SSU5URUdFUl9NQVRSSVhdICAgID0gci5NQVRSSVg7XG5cdFx0XHRtYXBbZGVwbG95ci5SU1RSSU5HX01BVFJJWF0gICAgID0gci5NQVRSSVg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcFt0eXBlXTtcdFx0XG5cdH0sXG5cblx0LyoqXG5cdCAqIEFzc2VydCB0aGF0IHRoZSBgcmlucHV0YCB2YWx1ZSBpcyB0aGUgY29ycmVjdCBKYXZhU2NyaXB0IERhdGEgVHlwZS5cblx0ICovXG5cdGFzc2VydDogZnVuY3Rpb24gKHJpbnB1dCkge1xuXHRcdHZhciBkZXBsb3lyID0gdGhpcy5kZXBsb3lyLFxuICAgIFx0XHROT09QICAgID0gbnVsbCxcblx0XHQgICAgdmFsdWVzICA9IHJpbnB1dC52YWx1ZSxcblx0XHQgICAgZm47XG5cblx0XHR2YWx1ZXMgPSAhTGFuZy5pc0FycmF5KHZhbHVlcykgPyBbdmFsdWVzXSA6IHZhbHVlcztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSB2YWx1ZXNbaV07XG5cblx0XHRcdHN3aXRjaCAocmlucHV0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBkZXBsb3lyLlJOVU1FUklDIDpcblx0XHRcdFx0Y2FzZSBkZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUiA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJJTlRFR0VSIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUklOVEVHRVJfVkVDVE9SIDpcblx0XHRcdCAgICBmbiA9IExhbmcuaXNOdW1iZXI7XG5cdFx0XHQgICAgYnJlYWs7XG5cblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkJPT0xFQU4gOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SQk9PTEVBTl9WRUNUT1IgOlxuXHRcdFx0ICAgIGZuID0gTGFuZy5pc0Jvb2xlYW47XG5cdFx0XHQgICAgYnJlYWs7XG5cdFx0XHQgICAgXG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJTVFJJTkcgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SU1RSSU5HX1ZFQ1RPUiA6XHRcblx0XHRcdCAgICBmbiA9IExhbmcuaXNTdHJpbmc7XG5cdFx0XHQgICAgYnJlYWs7XG5cblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkRBVEUgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SUE9TSVhfREFURSA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJEQVRFX1ZFQ1RPUiA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiA6XG5cdFx0XHQgICAgZm4gPSBMYW5nLmlzRGF0ZTtcblx0XHRcdCAgICBicmVhaztcblxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SRkFDVE9SIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUk9SREVSRUQgOlx0XHRcdCAgICBcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkRBVEFGUkFNRSA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJJTlRFR0VSX01BVFJJWCA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJCT09MRUFOX01BVFJJWCA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJTVFJJTkdfTUFUUklYIDpcdCAgICBcblx0XHRcdCAgICBmbiA9IE5PT1A7XG5cdFx0XHQgICAgYnJlYWtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuICYmICFmbih2YWx1ZSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdSSW5wdXRGb3JtYXRFcnJvcjogJyArICdcIicgKyB2YWx1ZSArIFxuXHRcdFx0XHRcdCdcIiBpcyBub3QgYSB2YWxpZCBcIicgKyByaW5wdXQudHlwZSArICdcIiB0eXBlIGZvciBpbnB1dCAnICtcblx0XHRcdFx0XHQnXCInICsgcmlucHV0Lm5hbWUgKyAnXCInKTtcdFx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJpbnB1dDtcblx0fVxufSk7IiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vR296YWxhL3NlbGZpc2hcbiAqL1xuXG4vKiB2aW06c2V0IHRzPTIgc3c9MiBzdHM9MiBleHBhbmR0YWIgKi9cbi8qanNoaW50IHVuZGVmOiB0cnVlIGVzNTogdHJ1ZSBub2RlOiB0cnVlIGRldmVsOiB0cnVlIGV2aWw6IHRydWVcbiAgICAgICAgIGZvcmluOiB0cnVlIGxhdGVkZWY6IGZhbHNlIHN1cGVybmV3OiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IHRydWUgKi9cblxuISh0eXBlb2YgZGVmaW5lICE9PSBcImZ1bmN0aW9uXCIgPyBmdW5jdGlvbigkKXsgJChudWxsLCB0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogd2luZG93KTsgfSA6IGRlZmluZSkoZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5CYXNlID0gT2JqZWN0LmZyZWV6ZShPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUsIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBgdGhpc2Agb2JqZWN0IChBbmFsb2cgb2ZcbiAgICogYG5ldyBPYmplY3QoKWApLlxuICAgKiBAZXhhbXBsZXNcbiAgICpcbiAgICogICAgdmFyIERvZyA9IEJhc2UuZXh0ZW5kKHtcbiAgICogICAgICBiYXJrOiBmdW5jdGlvbiBiYXJrKCkge1xuICAgKiAgICAgICAgcmV0dXJuICdSdWZmISBSdWZmISdcbiAgICogICAgICB9XG4gICAqICAgIH0pO1xuICAgKiAgICB2YXIgZG9nID0gRG9nLm5ldygpO1xuICAgKi9cbiAgJ25ldyc6IHsgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICBvYmplY3QuaW5pdGlhbGl6ZS5hcHBseShvYmplY3QsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfX0sXG4gIC8qKlxuICAgKiBXaGVuIG5ldyBpbnN0YW5jZSBvZiB0aGUgdGhpcyBwcm90b3R5cGUgaXMgY3JlYXRlZCBpdCdzIGBpbml0aWFsaXplYFxuICAgKiBtZXRob2QgaXMgY2FsbGVkIHdpdGggYWxsIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBgbmV3YC4gWW91IGNhblxuICAgKiBvdmVycmlkZSBgaW5pdGlhbGl6ZWAgdG8gc2V0IHVwIGFuIGluc3RhbmNlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZTogeyB2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgfX0sXG4gIC8qKlxuICAgKiBNZXJnZXMgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwYXNzZWQgb2JqZWN0cyBpbnRvIGB0aGlzYCBpbnN0YW5jZSAoVGhpc1xuICAgKiBtZXRob2QgY2FuIGJlIHVzZWQgb24gaW5zdGFuY2VzIG9ubHkgYXMgcHJvdG90eXBlIG9iamVjdHMgYXJlIGZyb3plbikuXG4gICAqXG4gICAqIElmIHR3byBvciBtb3JlIGFyZ3VtZW50IG9iamVjdHMgaGF2ZSBvd24gcHJvcGVydGllcyB3aXRoIHRoZSBzYW1lIG5hbWUsXG4gICAqIHRoZSBwcm9wZXJ0eSBpcyBvdmVycmlkZGVuLCB3aXRoIHByZWNlZGVuY2UgZnJvbSByaWdodCB0byBsZWZ0LCBpbXBseWluZyxcbiAgICogdGhhdCBwcm9wZXJ0aWVzIG9mIHRoZSBvYmplY3Qgb24gdGhlIGxlZnQgYXJlIG92ZXJyaWRkZW4gYnkgYSBzYW1lIG5hbWVkXG4gICAqIHByb3BlcnR5IG9mIHRoZSBvYmplY3Qgb24gdGhlIHJpZ2h0LlxuICAgKlxuICAgKiBAZXhhbXBsZXNcbiAgICpcbiAgICogICAgdmFyIFBldCA9IERvZy5leHRlbmQoe1xuICAgKiAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgKiAgICAgICAgLy8gdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIC0+IHdvdWxkIGhhdmUgdGhyb3duIChmcm96ZW4gcHJvdG90eXBlKVxuICAgKiAgICAgICAgdGhpcy5tZXJnZShvcHRpb25zKSAvLyB3aWxsIG92ZXJyaWRlIGFsbCBwcm9wZXJ0aWVzLlxuICAgKiAgICAgIH0sXG4gICAqICAgICAgY2FsbDogZnVuY3Rpb24obmFtZSkge1xuICAgKiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gbmFtZSA/IHRoaXMuYmFyaygpIDogJydcbiAgICogICAgICB9LFxuICAgKiAgICAgIG5hbWU6IG51bGxcbiAgICogICAgfSlcbiAgICogICAgdmFyIHBldCA9IFBldC5uZXcoeyBuYW1lOiAnQmVuenknLCBicmVlZDogJ0xhYnJhZG9yJyB9KVxuICAgKiAgICBwZXQuY2FsbCgnQmVuenknKSAgIC8vICdSdWZmISBSdWZmISdcbiAgICovXG4gIG1lcmdlOiB7IHZhbHVlOiBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHt9O1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGRlc2NyaXB0b3JbbmFtZV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BlcnRpZXMsIG5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgZGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH19LFxuICAvKipcbiAgICogVGFrZXMgYW55IG51bWJlciBvZiBhcmd1bWVudCBvYmplY3RzIGFuZCByZXR1cm5zIGZyb3plbiwgY29tcG9zaXRlIG9iamVjdFxuICAgKiB0aGF0IGluaGVyaXRzIGZyb20gYHRoaXNgIG9iamVjdCBhbmQgY29tYmluZXMgYWxsIG9mIHRoZSBvd24gcHJvcGVydGllcyBvZlxuICAgKiB0aGUgYXJndW1lbnQgb2JqZWN0cy4gKE9iamVjdHMgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBhcmUgZnJvemVuIGFzXG4gICAqIHRoZXkgYXJlIGludGVuZGVkIHRvIGJlIHVzZWQgYXMgdHlwZXMpLlxuICAgKlxuICAgKiBJZiB0d28gb3IgbW9yZSBhcmd1bWVudCBvYmplY3RzIGhhdmUgb3duIHByb3BlcnRpZXMgd2l0aCB0aGUgc2FtZSBuYW1lLFxuICAgKiB0aGUgcHJvcGVydHkgaXMgb3ZlcnJpZGRlbiwgd2l0aCBwcmVjZWRlbmNlIGZyb20gcmlnaHQgdG8gbGVmdCwgaW1wbHlpbmcsXG4gICAqIHRoYXQgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IG9uIHRoZSBsZWZ0IGFyZSBvdmVycmlkZGVuIGJ5IGEgc2FtZSBuYW1lZFxuICAgKiBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0IG9uIHRoZSByaWdodC5cbiAgICogQGV4YW1wbGVzXG4gICAqXG4gICAqICAgIC8vICMjIE9iamVjdCBjb21wb3NpdGlvbiAjI1xuICAgKlxuICAgKiAgICB2YXIgSEVYID0gQmFzZS5leHRlbmQoe1xuICAgKiAgICAgIGhleDogZnVuY3Rpb24gaGV4KCkge1xuICAgKiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMuY29sb3I7XG4gICAqICAgICAgfVxuICAgKiAgICB9KVxuICAgKlxuICAgKiAgICB2YXIgUkdCID0gQmFzZS5leHRlbmQoe1xuICAgKiAgICAgIHJlZDogZnVuY3Rpb24gcmVkKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gICAqICAgICAgfSxcbiAgICogICAgICBncmVlbjogZnVuY3Rpb24gZ3JlZW4oKSB7XG4gICAqICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5jb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICogICAgICB9LFxuICAgKiAgICAgIGJsdWU6IGZ1bmN0aW9uIGJsdWUoKSB7XG4gICAqICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5jb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgICogICAgICB9XG4gICAqICAgIH0pXG4gICAqXG4gICAqICAgIHZhciBDTVlLID0gQmFzZS5leHRlbmQoUkdCLCB7XG4gICAqICAgICAgYmxhY2s6IGZ1bmN0aW9uIGJsYWNrKCkge1xuICAgKiAgICAgICAgdmFyIGNvbG9yID0gTWF0aC5tYXgoTWF0aC5tYXgodGhpcy5yZWQoKSwgdGhpcy5ncmVlbigpKSwgdGhpcy5ibHVlKCkpO1xuICAgKiAgICAgICAgcmV0dXJuICgxIC0gY29sb3IgLyAyNTUpLnRvRml4ZWQoNCk7XG4gICAqICAgICAgfSxcbiAgICogICAgICBjeWFuOiBmdW5jdGlvbiBjeWFuKCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMucmVkKCkgLyAyNTUpLnRvRml4ZWQoNCkgLSBLKSAvICgxIC0gSykpLnRvRml4ZWQoNCk7XG4gICAqICAgICAgfSxcbiAgICogICAgICBtYWdlbnRhOiBmdW5jdGlvbiBtYWdlbnRhKCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMuZ3JlZW4oKSAvIDI1NSkudG9GaXhlZCg0KSAtIEspIC8gKDEgLSBLKSkudG9GaXhlZCg0KTtcbiAgICogICAgICB9LFxuICAgKiAgICAgIHllbGxvdzogZnVuY3Rpb24geWVsbG93KCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMuYmx1ZSgpIC8gMjU1KS50b0ZpeGVkKDQpIC0gSykgLyAoMSAtIEspKS50b0ZpeGVkKDQpO1xuICAgKiAgICAgIH1cbiAgICogICAgfSlcbiAgICpcbiAgICogICAgdmFyIENvbG9yID0gQmFzZS5leHRlbmQoSEVYLCBSR0IsIENNWUssIHtcbiAgICogICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBDb2xvcihjb2xvcikge1xuICAgKiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgKiAgICAgIH1cbiAgICogICAgfSk7XG4gICAqXG4gICAqICAgIC8vICMjIFByb3RvdHlwYWwgaW5oZXJpdGFuY2UgIyNcbiAgICpcbiAgICogICAgdmFyIFBpeGVsID0gQ29sb3IuZXh0ZW5kKHtcbiAgICogICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBQaXhlbCh4LCB5LCBoZXgpIHtcbiAgICogICAgICAgIENvbG9yLmluaXRpYWxpemUuY2FsbCh0aGlzLCBoZXgpO1xuICAgKiAgICAgICAgdGhpcy54ID0geDtcbiAgICogICAgICAgIHRoaXMueSA9IHk7XG4gICAqICAgICAgfSxcbiAgICogICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAqICAgICAgICByZXR1cm4gdGhpcy54ICsgJzonICsgdGhpcy55ICsgJ0AnICsgdGhpcy5oZXgoKTtcbiAgICogICAgICB9XG4gICAqICAgIH0pO1xuICAgKlxuICAgKiAgICB2YXIgcGl4ZWwgPSBQaXhlbC5uZXcoMTEsIDIzLCAnQ0MzMzk5JylcbiAgICogICAgcGl4ZWwudG9TdHJpbmcoKTsgLy8gMTE6MjNAI0NDMzM5OVxuICAgKlxuICAgKiAgICBwaXhlbC5yZWQoKTsgICAgICAvLyAyMDRcbiAgICogICAgcGl4ZWwuZ3JlZW4oKTsgICAgLy8gNTFcbiAgICogICAgcGl4ZWwuYmx1ZSgpOyAgICAgLy8gMTUzXG4gICAqXG4gICAqICAgIHBpeGVsLmN5YW4oKTsgICAgIC8vIDAuMDAwMFxuICAgKiAgICBwaXhlbC5tYWdlbnRhKCk7ICAvLyAwLjc1MDBcbiAgICogICAgcGl4ZWwueWVsbG93KCk7ICAgLy8gMC4yNTAwXG4gICAqXG4gICAqL1xuICAgZXh0ZW5kOiB7IHZhbHVlOiBmdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpcy5tZXJnZS5hcHBseShPYmplY3QuY3JlYXRlKHRoaXMpLCBhcmd1bWVudHMpKTtcbiAgfX1cbn0pKTtcblxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIExhbmcgPSByZXF1aXJlKCcuL2xhbmcnKTtcblxudmFyIGdldCA9IGV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24ocywga2V5KSB7XG4gICAgZnVuY3Rpb24gdHJhdmVyc2Uob2JqLCBmbiwgcGFyZW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgW2ksIG9ialtpXSwgcGFyZW50XSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9ialtpXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKG9ialtpXSBpbnN0YW5jZW9mIEFycmF5KSkgeyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB0cmF2ZXJzZShvYmpbaV0sIGZuLCBpKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgcHJvcGVydHkpIHtcbiAgICAgICAgdmFyIGFjYyA9IHt9O1xuICAgICAgICB0cmF2ZXJzZShvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUsIHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gcHJvcGVydHkpIHsgIFxuICAgICAgICAgICAgICAgIGFjYyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbXB0eShvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHsgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIG9iajsgfVxuICAgICAgICByZXR1cm4gIUxhbmcuaXNPYmplY3Qob2JqKSA/IG9iaiA6IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5KGdldFByb3BlcnR5KHMsIGtleSkpO1xufTtcblxudmFyIGluQXJyYXkgPSBleHBvcnRzLmluQXJyYXkgPSBmdW5jdGlvbihoYXlzdGFjaywgbmVlZGxlLCBrZXkpIHtcbiAgICB2YXIgaSwgbWF4ID0gaGF5c3RhY2subGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXVtrZXldID09PSBuZWVkbGUpIHsgcmV0dXJuIGhheXN0YWNrW2ldOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT09IG5lZWRsZSkgeyByZXR1cm4gaGF5c3RhY2tbaV07IH1cbiAgICAgICAgfSAgIFxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbih0bywgZnJvbSkgeyAgICAgICAgXG4gICAgaWYgKCF0byB8fCB0eXBlb2YodG8pICE9PSAnb2JqZWN0JykgeyB0byA9IHt9OyB9XG4gICAgaWYgKCFmcm9tIHx8IHR5cGVvZihmcm9tKSAhPT0gJ29iamVjdCcpIHsgZnJvbSA9IHt9OyB9XG5cbiAgICBmb3IgKHZhciBrIGluIGZyb20pIHsgdG9ba10gPSBmcm9tW2tdOyB9XG5cbiAgICByZXR1cm4gdG87XG59O1xuXG5leHBvcnRzLndvcmtzcGFjZSA9IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgIHZhciB3cyA9IGdldChvYmosICd3b3Jrc3BhY2UnKTtcbiAgICByZXR1cm4gKHdzID8gbmFtZSA/IGluQXJyYXkod3Mub2JqZWN0cywgbmFtZSwgJ25hbWUnKSA6IHdzLm9iamVjdHMgfHwgd3Mub2JqZWN0OiBudWxsKTtcbn07XG5cbmV4cG9ydHMuc2lnbmF0dXJlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50c1snMCddLCAwKSxcbiAgICAgICAgbGVuICAgID0gYXJncy5sZW5ndGgsXG4gICAgICAgIGNyZWF0ZSA9IGZhbHNlLFxuICAgICAgICBvcHRzICAgPSB7fSxcbiAgICAgICAgYXBpO1xuXG4gICAgaWYgKGxlbiA9PT0gMSAmJiBMYW5nLmlzT2JqZWN0KGFyZ3NbMF0pKSB7XG4gICAgICAgIG9wdHMgPSBhcmdzWzBdO1xuICAgICAgICBhcGkgID0gb3B0cy5wcm9qZWN0ID8gJy9yL3Byb2plY3QvZXhlY3V0ZS9zY3JpcHQnIDpcbiAgICAgICAgICAgICcvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlJztcbiAgICB9IGVsc2UgaWYgKGxlbiA9PT0gMSAmJiBMYW5nLmlzU3RyaW5nKGFyZ3NbMF0pKSB7XG4gICAgICAgIGFyZ3MgPSBhcmdzWzBdLnNwbGl0KCdcXC8nKTtcbiAgICAgICAgYXBpICA9ICcvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlJ1xuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgYXV0aG9yOiBhcmdzWzFdLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiBhcmdzWzJdLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGFyZ3NbM11cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICAvLyBleDogLnNjcmlwdCgnL3Rlc3R1c2VyL3Jvb3QvRGVwbG95UiAtIEhlbGxvIFdvcmxkLlInLCBwcm9qZWN0KVxuICAgICAgICB2YXIgcHJvamVjdCA9IGFyZ3NbMV07XG4gICAgICAgIGFwaSA9IHByb2plY3QgPyAnL3IvcHJvamVjdC9leGVjdXRlL3NjcmlwdCcgOiAnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZSc7XG5cbiAgICAgICAgYXJncyA9IGFyZ3NbMF0uc3BsaXQoJ1xcLycpO1xuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdCxcbiAgICAgICAgICAgIGF1dGhvcjogYXJnc1sxXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogYXJnc1syXSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhcmdzWzNdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChsZW4gPiAyKSB7XG4gICAgICAgIC8vIGV4OiAuc2NyaXB0KCdEZXBsb3lSIC0gSGVsbG8gV29ybGQuUicsICd0ZXN0dXNlcicsICdyb290JylcbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIGF1dGhvcjogYXJnc1syXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogYXJnc1sxXSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhcmdzWzBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gaW5kaWNhdGUgYSBuZXcgcHJvamVjdCBzaG91bGQgYmUgY3JlYXRlZFxuICAgIGlmIChvcHRzLnByb2plY3QgJiYgTGFuZy5pc0Jvb2xlYW4ob3B0cy5wcm9qZWN0KSkge1xuICAgICAgZGVsZXRlIG9wdHNbJ3Byb2plY3QnXTtcbiAgICAgIGNyZWF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBpOiBhcGksXG4gICAgICAgIG9wdHM6IG9wdHMsXG4gICAgICAgIGNyZWF0ZTogY3JlYXRlXG4gICAgfTtcbn07IixudWxsLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRRdWV1ZTtcbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xufVxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICBxdWV1ZS5wdXNoKGZ1bik7XG4gICAgaWYgKCFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qKlxuKiBhdHRlbXB0IG9mIGEgc2ltcGxlIGRlZmVyL3Byb21pc2UgbGlicmFyeSBmb3IgbW9iaWxlIGRldmVsb3BtZW50XG4qIEBhdXRob3IgSm9uYXRoYW4gR290dGkgPCBqZ290dGkgYXQgamdvdHRpIGRvdCBuZXQ+XG4qIEBzaW5jZSAyMDEyLTEwXG4qIEB2ZXJzaW9uIDAuNi4wXG4qIEBjaGFuZ2Vsb2dcbiogICAgICAgICAgIC0gMjAxMy0xMi0wNyAtIGxhc3QgcHJvbWlzZSAxLjEgc3BlY3MgdGVzdCBwYXNzaW5ncyAodGh4IHRvIHdpemFyZHdlcmRuYSlcbiAqICAgICAgICAgICAgICAgICAgICAgICAtIHJlZHVjZSBwcm9taXNlcyBmb290cHJpbnQgYnkgdW5zY29waW5nIG1ldGhvZHMgdGhhdCBjb3VsZCBiZVxuKiAgICAgICAgICAgLSAyMDEzLTEwLTIzIC0gbWFrZSBpdCB3b3JraWcgYWNyb3NzIG5vZGUtd2Via2l0IGNvbnRleHRzXG4qICAgICAgICAgICAtIDIwMTMtMDctMDMgLSBidWcgY29ycmVjdGlvbiBpbiBwcm9taXhpZnkgbWV0aG9kICh0aHggdG8gYWRyaWVuIGdpYnJhdCApXG4qICAgICAgICAgICAtIDIwMTMtMDYtMjIgLSBidWcgY29ycmVjdGlvbiBpbiBub2RlQ2Fwc3VsZSBtZXRob2RcbiogICAgICAgICAgIC0gMjAxMy0wNi0xNyAtIHJlbW92ZSB1bm5lY2Vzc2FyeSBBcnJheS5pbmRleE9mIG1ldGhvZCBkZXBlbmRlbmN5XG4qICAgICAgICAgICAtIDIwMTMtMDQtMTggLSBhZGQgdHJ5L2NhdGNoIGJsb2NrIGFyb3VuZCBub2RlQ2Fwc3VsZWQgbWV0aG9kc1xuKiAgICAgICAgICAgLSAyMDEzLTA0LTEzIC0gY2hlY2sgcHJvbWlzZXMvQSsgY29uZm9ybWl0eVxuKiAgICAgICAgICAgICAgICAgICAgICAgIC0gbWFrZSBzb21lIG1pbmljYXRpb24gb3B0aW1pc2F0aW9uc1xuKiAgICAgICAgICAgLSAyMDEzLTAzLTI2IC0gYWRkIHJlc29sdmVkLCBmdWxmaWxsZWQgYW5kIHJlamVjdGVkIG1ldGhvZHNcbiogICAgICAgICAgIC0gMjAxMy0wMy0yMSAtIGJyb3dzZXIvbm9kZSBjb21wYXRpYmxlXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBuZXcgbWV0aG9kIG5vZGVDYXBzdWxlXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBzaW1wbGVyIHByb21peGlmeSB3aXRoIGZ1bGwgYXBpIHN1cHBvcnRcbiogICAgICAgICAgIC0gMjAxMy0wMS0yNSAtIGFkZCByZXRocm93IG1ldGhvZFxuKiAgICAgICAgICAgICAgICAgICAgICAgIC0gbmV4dFRpY2sgb3B0aW1pc2F0aW9uIC0+IGFkZCBzdXBwb3J0IGZvciBwcm9jZXNzLm5leHRUaWNrICsgTWVzc2FnZUNoYW5uZWwgd2hlcmUgYXZhaWxhYmxlXG4qICAgICAgICAgICAtIDIwMTItMTItMjggLSBhZGQgYXBwbHkgbWV0aG9kIHRvIHByb21pc2VcbiogICAgICAgICAgIC0gMjAxMi0xMi0yMCAtIGFkZCBhbHdheXNBc3luYyBwYXJhbWV0ZXJzIGFuZCBwcm9wZXJ0eSBmb3IgZGVmYXVsdCBzZXR0aW5nXG4qL1xuKGZ1bmN0aW9uKHVuZGVmKXtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIG5leHRUaWNrXG5cdFx0LCBpc0Z1bmMgPSBmdW5jdGlvbihmKXsgcmV0dXJuICggdHlwZW9mIGYgPT09ICdmdW5jdGlvbicgKTsgfVxuXHRcdCwgaXNBcnJheSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkoYSkgOiAoYSBpbnN0YW5jZW9mIEFycmF5KTsgfVxuXHRcdCwgaXNPYmpPckZ1bmMgPSBmdW5jdGlvbihvKXsgcmV0dXJuICEhKG8gJiYgKHR5cGVvZiBvKS5tYXRjaCgvZnVuY3Rpb258b2JqZWN0LykpOyB9XG5cdFx0LCBpc05vdFZhbCA9IGZ1bmN0aW9uKHYpeyByZXR1cm4gKHYgPT09IGZhbHNlIHx8IHYgPT09IHVuZGVmIHx8IHYgPT09IG51bGwpOyB9XG5cdFx0LCBzbGljZSA9IGZ1bmN0aW9uKGEsIG9mZnNldCl7IHJldHVybiBbXS5zbGljZS5jYWxsKGEsIG9mZnNldCk7IH1cblx0XHQsIHVuZGVmU3RyID0gJ3VuZGVmaW5lZCdcblx0XHQsIHRFcnIgPSB0eXBlb2YgVHlwZUVycm9yID09PSB1bmRlZlN0ciA/IEVycm9yIDogVHlwZUVycm9yXG5cdDtcblx0aWYgKCAodHlwZW9mIHByb2Nlc3MgIT09IHVuZGVmU3RyKSAmJiBwcm9jZXNzLm5leHRUaWNrICkge1xuXHRcdG5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcblx0fSBlbHNlIGlmICggdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSB1bmRlZlN0ciApIHtcblx0XHR2YXIgbnRpY2tDaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCksIHF1ZXVlID0gW107XG5cdFx0bnRpY2tDaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCl7IHF1ZXVlLmxlbmd0aCAmJiAocXVldWUuc2hpZnQoKSkoKTsgfTtcblx0XHRuZXh0VGljayA9IGZ1bmN0aW9uKGNiKXtcblx0XHRcdHF1ZXVlLnB1c2goY2IpO1xuXHRcdFx0bnRpY2tDaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0bmV4dFRpY2sgPSBmdW5jdGlvbihjYil7IHNldFRpbWVvdXQoY2IsIDApOyB9O1xuXHR9XG5cdGZ1bmN0aW9uIHJldGhyb3coZSl7IG5leHRUaWNrKGZ1bmN0aW9uKCl7IHRocm93IGU7fSk7IH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYgZGVmZXJyZWRcblx0ICogQHByb3BlcnR5IHtwcm9taXNlfSBwcm9taXNlXG5cdCAqIEBtZXRob2QgcmVzb2x2ZVxuXHQgKiBAbWV0aG9kIGZ1bGZpbGxcblx0ICogQG1ldGhvZCByZWplY3Rcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gZnVsZmlsbGVkXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgcHJvbWlzZSByZXNvbHZlZCB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Kn0gbmV4dCBwcm9taXNlIHJlc29sdXRpb24gdmFsdWVcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gZmFpbGVkXG5cdCAqIEBwYXJhbSB7Kn0gcmVhc29uIHByb21pc2UgcmVqZWN0aW9uIHJlYXNvblxuXHQgKiBAcmV0dXJucyB7Kn0gbmV4dCBwcm9taXNlIHJlc29sdXRpb24gdmFsdWUgb3IgcmV0aHJvdyB0aGUgcmVhc29uXG5cdCAqL1xuXG5cdC8vLS0gZGVmaW5pbmcgdW5lbmNsb3NlZCBwcm9taXNlIG1ldGhvZHMgLS0vL1xuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIHdpdGhvdXQgZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2Vfc3VjY2VzcyhmdWxmaWxsZWQpeyByZXR1cm4gdGhpcy50aGVuKGZ1bGZpbGxlZCwgdW5kZWYpOyB9XG5cblx0LyoqXG5cdCAqIHNhbWUgYXMgdGhlbiB3aXRoIG9ubHkgYSBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmYWlsZWR9IGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9lcnJvcihmYWlsZWQpeyByZXR1cm4gdGhpcy50aGVuKHVuZGVmLCBmYWlsZWQpOyB9XG5cblxuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIGJ1dCBmdWxmaWxsZWQgY2FsbGJhY2sgd2lsbCByZWNlaXZlIG11bHRpcGxlIHBhcmFtZXRlcnMgd2hlbiBwcm9taXNlIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIEFycmF5XG5cdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmYWlsZWR9IGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9hcHBseShmdWxmaWxsZWQsIGZhaWxlZCl7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdGZ1bmN0aW9uKGEpe1xuXHRcdFx0XHRyZXR1cm4gaXNGdW5jKGZ1bGZpbGxlZCkgPyBmdWxmaWxsZWQuYXBwbHkobnVsbCwgaXNBcnJheShhKSA/IGEgOiBbYV0pIDogKGRlZmVyLm9ubHlGdW5jcyA/IGEgOiBmdWxmaWxsZWQpO1xuXHRcdFx0fVxuXHRcdFx0LCBmYWlsZWQgfHwgdW5kZWZcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIGNsZWFudXAgbWV0aG9kIHdoaWNoIHdpbGwgYmUgYWx3YXlzIGV4ZWN1dGVkIHJlZ2FyZGxlc3MgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIGEgY2FsbGJhY2sgY2FsbGVkIHJlZ2FyZGxlc3Mgb2YgdGhlIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBvZiB0aGUgcHJvbWlzZSB3aGljaCB3aWxsIGJlIGNhbGxlZFxuXHQgKiAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSBwcm9taXNlIGlzIG5vdCBwZW5kaW5nIGFueW1vcmVcblx0ICogQHJldHVybnMge3Byb21pc2V9IHRoZSBzYW1lIHByb21pc2UgdW50b3VjaGVkXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2Vuc3VyZShjYil7XG5cdFx0ZnVuY3Rpb24gX2NiKCl7IGNiKCk7IH1cblx0XHR0aGlzLnRoZW4oX2NiLCBfY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRha2UgYSBzaW5nbGUgY2FsbGJhY2sgd2hpY2ggd2FpdCBmb3IgYW4gZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyLiBvdGhlciByZXNvbHV0aW9uIHZhbHVlcyBhcmUgcGFzc2VkIGFzIHdpdGggdGhlIGFwcGx5L3NwcmVhZCBtZXRob2Rcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgYSBjYWxsYmFjayBjYWxsZWQgcmVnYXJkbGVzcyBvZiB0aGUgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHByb21pc2UgaXMgbm90IHBlbmRpbmcgYW55bW9yZSB3aXRoIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlciBpZiBhbnkgYXMgaW4gbm9kZSBzdHlsZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay4gUmVzdCBvZiBwYXJhbWV0ZXJzIHdpbGwgYmUgYXBwbGllZCBhcyB3aXRoIHRoZSBhcHBseSBtZXRob2QuXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX25vZGlmeShjYil7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdGZ1bmN0aW9uKGEpe1xuXHRcdFx0XHRyZXR1cm4gaXNGdW5jKGNiKSA/IGNiLmFwcGx5KG51bGwsIGlzQXJyYXkoYSkgPyBhLnNwbGljZSgwLDAsdW5kZWZpbmVkKSAmJiBhIDogW3VuZGVmaW5lZCxhXSkgOiAoZGVmZXIub25seUZ1bmNzID8gYSA6IGNiKTtcblx0XHRcdH1cblx0XHRcdCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdHJldHVybiBjYihlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmYWlsZWRdIHdpdGhvdXQgcGFyYW1ldGVyIHdpbGwgb25seSByZXRocm93IHByb21pc2UgcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIG9mIHRoZSBwcm9taXNlIGxpYnJhcnkgb24gbmV4dCB0aWNrXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHBhc3NlZCBhIGZhaWxlZCBtZXRob2QgdGhlbiB3aWxsIGNhbGwgZmFpbGVkIG9uIHJlamVjdGlvbiBhbmQgdGhyb3cgdGhlIGVycm9yIGFnYWluIGlmIGZhaWxlZCBkaWRuJ3Rcblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfcmV0aHJvdyhmYWlsZWQpe1xuXHRcdHJldHVybiB0aGlzLnRoZW4oXG5cdFx0XHR1bmRlZlxuXHRcdFx0LCBmYWlsZWQgPyBmdW5jdGlvbihlKXsgZmFpbGVkKGUpOyB0aHJvdyBlOyB9IDogcmV0aHJvd1xuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0KiBAcGFyYW0ge2Jvb2xlYW59IFthbHdheXNBc3luY10gaWYgc2V0IGZvcmNlIHRoZSBhc3luYyByZXNvbHV0aW9uIGZvciB0aGlzIHByb21pc2UgaW5kZXBlbmRhbnRseSBvZiB0aGUgRC5hbHdheXNBc3luYyBvcHRpb25cblx0KiBAcmV0dXJucyB7ZGVmZXJyZWR9IGRlZmVyZWQgb2JqZWN0IHdpdGggcHJvcGVydHkgJ3Byb21pc2UnIGFuZCBtZXRob2RzIHJlamVjdCxmdWxmaWxsLHJlc29sdmUgKGZ1bGZpbGwgYmVpbmcgYW4gYWxpYXMgZm9yIHJlc29sdmUpXG5cdCovXG5cdHZhciBkZWZlciA9IGZ1bmN0aW9uIChhbHdheXNBc3luYyl7XG5cdFx0dmFyIGFsd2F5c0FzeW5jRm4gPSAodW5kZWYgIT09IGFsd2F5c0FzeW5jID8gYWx3YXlzQXN5bmMgOiBkZWZlci5hbHdheXNBc3luYykgPyBuZXh0VGljayA6IGZ1bmN0aW9uKGZuKXtmbigpO31cblx0XHRcdCwgc3RhdHVzID0gMCAvLyAtMSBmYWlsZWQgfCAxIGZ1bGZpbGxlZFxuXHRcdFx0LCBwZW5kaW5ncyA9IFtdXG5cdFx0XHQsIHZhbHVlXG5cdFx0XHQvKipcblx0XHRcdCAqIEB0eXBlZGVmIHByb21pc2Vcblx0XHRcdCAqL1xuXHRcdFx0LCBfcHJvbWlzZSAgPSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAcGFyYW0ge2Z1bGZpbGxlZHxmdW5jdGlvbn0gZnVsZmlsbGVkIGNhbGxiYWNrXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZmFpbGVkfGZ1bmN0aW9ufSBmYWlsZWQgY2FsbGJhY2tcblx0XHRcdFx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoZW46IGZ1bmN0aW9uKGZ1bGZpbGxlZCwgZmFpbGVkKXtcblx0XHRcdFx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0XHRcdFx0cGVuZGluZ3MucHVzaChbXG5cdFx0XHRcdFx0XHRmdW5jdGlvbih2YWx1ZSl7XG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRpZiggaXNOb3RWYWwoZnVsZmlsbGVkKSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRkLnJlc29sdmUodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkLnJlc29sdmUoaXNGdW5jKGZ1bGZpbGxlZCkgPyBmdWxmaWxsZWQodmFsdWUpIDogKGRlZmVyLm9ubHlGdW5jcyA/IHZhbHVlIDogZnVsZmlsbGVkKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCwgZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0XHRcdFx0aWYgKCBpc05vdFZhbChmYWlsZWQpIHx8ICgoIWlzRnVuYyhmYWlsZWQpKSAmJiBkZWZlci5vbmx5RnVuY3MpICkge1xuXHRcdFx0XHRcdFx0XHRcdGQucmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCBmYWlsZWQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJ5eyBkLnJlc29sdmUoaXNGdW5jKGZhaWxlZCkgPyBmYWlsZWQoZXJyKSA6IGZhaWxlZCk7IH1jYXRjaChlKXsgZC5yZWplY3QoZSk7fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0c3RhdHVzICE9PSAwICYmIGFsd2F5c0FzeW5jRm4oZXhlY0NhbGxiYWNrcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCwgc3VjY2VzczogcHJvbWlzZV9zdWNjZXNzXG5cblx0XHRcdFx0LCBlcnJvcjogcHJvbWlzZV9lcnJvclxuXHRcdFx0XHQsIG90aGVyd2lzZTogcHJvbWlzZV9lcnJvclxuXG5cdFx0XHRcdCwgYXBwbHk6IHByb21pc2VfYXBwbHlcblx0XHRcdFx0LCBzcHJlYWQ6IHByb21pc2VfYXBwbHlcblxuXHRcdFx0XHQsIGVuc3VyZTogcHJvbWlzZV9lbnN1cmVcblxuXHRcdFx0XHQsIG5vZGlmeTogcHJvbWlzZV9ub2RpZnlcblxuXHRcdFx0XHQsIHJldGhyb3c6IHByb21pc2VfcmV0aHJvd1xuXG5cdFx0XHRcdCwgaXNQZW5kaW5nOiBmdW5jdGlvbigpeyByZXR1cm4gISEoc3RhdHVzID09PSAwKTsgfVxuXG5cdFx0XHRcdCwgZ2V0U3RhdHVzOiBmdW5jdGlvbigpeyByZXR1cm4gc3RhdHVzOyB9XG5cdFx0XHR9XG5cdFx0O1xuXHRcdF9wcm9taXNlLnRvU291cmNlID0gX3Byb21pc2UudG9TdHJpbmcgPSBfcHJvbWlzZS52YWx1ZU9mID0gZnVuY3Rpb24oKXtyZXR1cm4gdmFsdWUgPT09IHVuZGVmID8gdGhpcyA6IHZhbHVlOyB9O1xuXG5cblx0XHRmdW5jdGlvbiBleGVjQ2FsbGJhY2tzKCl7XG5cdFx0XHRpZiAoIHN0YXR1cyA9PT0gMCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNicyA9IHBlbmRpbmdzLCBpID0gMCwgbCA9IGNicy5sZW5ndGgsIGNiSW5kZXggPSB+c3RhdHVzID8gMCA6IDEsIGNiO1xuXHRcdFx0cGVuZGluZ3MgPSBbXTtcblx0XHRcdGZvciggOyBpIDwgbDsgaSsrICl7XG5cdFx0XHRcdChjYiA9IGNic1tpXVtjYkluZGV4XSkgJiYgY2IodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZ1bGZpbGwgZGVmZXJyZWQgd2l0aCBnaXZlbiB2YWx1ZVxuXHRcdCAqIEBwYXJhbSB7Kn0gdmFsXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVzb2x2ZSh2YWwpe1xuXHRcdFx0dmFyIGRvbmUgPSBmYWxzZTtcblx0XHRcdGZ1bmN0aW9uIG9uY2UoZil7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRpZiAoZG9uZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZih4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHN0YXR1cyApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgdGhlbiA9IGlzT2JqT3JGdW5jKHZhbCkgJiYgdmFsLnRoZW47XG5cdFx0XHRcdGlmICggaXNGdW5jKHRoZW4pICkgeyAvLyBtYW5hZ2luZyBhIHByb21pc2Vcblx0XHRcdFx0XHRpZiggdmFsID09PSBfcHJvbWlzZSApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IHRFcnIoXCJQcm9taXNlIGNhbid0IHJlc29sdmUgaXRzZWxmXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGVuLmNhbGwodmFsLCBvbmNlKF9yZXNvbHZlKSwgb25jZShfcmVqZWN0KSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0b25jZShfcmVqZWN0KShlKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhbHVlID0gdmFsO1xuXHRcdFx0XHRzdGF0dXMgPSAxO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIHJlamVjdCBkZWZlcnJlZCB3aXRoIGdpdmVuIHJlYXNvblxuXHRcdCAqIEBwYXJhbSB7Kn0gRXJyXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVqZWN0KEVycil7XG5cdFx0XHRzdGF0dXMgfHwgYWx3YXlzQXN5bmNGbihmdW5jdGlvbigpe1xuXHRcdFx0XHR0cnl7IHRocm93KEVycik7IH1jYXRjaChlKXsgdmFsdWUgPSBlOyB9XG5cdFx0XHRcdHN0YXR1cyA9IC0xO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gLyoqQHR5cGUgZGVmZXJyZWQgKi8ge1xuXHRcdFx0cHJvbWlzZTpfcHJvbWlzZVxuXHRcdFx0LHJlc29sdmU6X3Jlc29sdmVcblx0XHRcdCxmdWxmaWxsOl9yZXNvbHZlIC8vIGFsaWFzXG5cdFx0XHQscmVqZWN0Ol9yZWplY3Rcblx0XHR9O1xuXHR9O1xuXG5cdGRlZmVyLmRlZmVycmVkID0gZGVmZXIuZGVmZXIgPSBkZWZlcjtcblx0ZGVmZXIubmV4dFRpY2sgPSBuZXh0VGljaztcblx0ZGVmZXIuYWx3YXlzQXN5bmMgPSB0cnVlOyAvLyBzZXR0aW5nIHRoaXMgd2lsbCBjaGFuZ2UgZGVmYXVsdCBiZWhhdmlvdXIuIHVzZSBpdCBvbmx5IGlmIG5lY2Vzc2FyeSBhcyBhc3luY2hyb25pY2l0eSB3aWxsIGZvcmNlIHNvbWUgZGVsYXkgYmV0d2VlbiB5b3VyIHByb21pc2UgcmVzb2x1dGlvbnMgYW5kIGlzIG5vdCBhbHdheXMgd2hhdCB5b3Ugd2FudC5cblx0LyoqXG5cdCogc2V0dGluZyBvbmx5RnVuY3MgdG8gZmFsc2Ugd2lsbCBicmVhayBwcm9taXNlcy9BKyBjb25mb3JtaXR5IGJ5IGFsbG93aW5nIHlvdSB0byBwYXNzIG5vbiB1bmRlZmluZWQvbnVsbCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxsYmFja3Ncblx0KiBpbnN0ZWFkIG9mIGp1c3QgaWdub3JpbmcgYW55IG5vbiBmdW5jdGlvbiBwYXJhbWV0ZXJzIHRvIHRoZW4sc3VjY2VzcyxlcnJvci4uLiBpdCB3aWxsIGFjY2VwdCBub24gbnVsbHx1bmRlZmluZWQgdmFsdWVzLlxuXHQqIHRoaXMgd2lsbCBhbGxvdyB5b3Ugc2hvcnRjdXRzIGxpa2UgcHJvbWlzZS50aGVuKCd2YWwnLCdoYW5kbGVkIGVycm9yJycpXG5cdCogdG8gYmUgZXF1aXZhbGVudCBvZiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKXsgcmV0dXJuICd2YWwnO30sZnVuY3Rpb24oKXsgcmV0dXJuICdoYW5kbGVkIGVycm9yJ30pXG5cdCovXG5cdGRlZmVyLm9ubHlGdW5jcyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIG9mIGdpdmVuIHZhbHVlIChhbHdheXMgYXN5bmMgcmVzb2x1dGlvbilcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnJlc29sdmVkID0gZGVmZXIuZnVsZmlsbGVkID0gZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gZGVmZXIodHJ1ZSkucmVzb2x2ZSh2YWx1ZSkucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSB3aXRoIGdpdmVuIHJlYXNvbiBvZiByZWplY3Rpb24gKGFsd2F5cyBhc3luYyByZWplY3Rpb24pXG5cdCAqIEBwYXJhbSB7Kn0gcmVhc29uXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVqZWN0ZWQgPSBmdW5jdGlvbihyZWFzb24peyByZXR1cm4gZGVmZXIodHJ1ZSkucmVqZWN0KHJlYXNvbikucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSB3aXRoIG5vIHJlc29sdXRpb24gdmFsdWUgd2hpY2ggd2lsbCBiZSByZXNvbHZlZCBpbiB0aW1lIG1zICh1c2luZyBzZXRUaW1lb3V0KVxuXHQgKiBAcGFyYW0ge2ludH0gW3RpbWVdIGluIG1zIGRlZmF1bHQgdG8gMFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLndhaXQgPSBmdW5jdGlvbih0aW1lKXtcblx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0c2V0VGltZW91dChkLnJlc29sdmUsIHRpbWUgfHwgMCk7XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvZiBmdW5jdGlvbiBjYWxsIHdoaWNoIHdpbGwgYmUgZnVsZmlsbGVkIGluIGRlbGF5IG1zIG9yIHJlamVjdGVkIGlmIGdpdmVuIGZuIHRocm93IGFuIGVycm9yXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG5cdCAqIEBwYXJhbSB7aW50fSBbZGVsYXldIGluIG1zIGRlZmF1bHQgdG8gMFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLmRlbGF5ID0gZnVuY3Rpb24oZm4sIGRlbGF5KXtcblx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyB0cnl7IGQucmVzb2x2ZShmbi5hcHBseShudWxsKSk7IH1jYXRjaChlKXsgZC5yZWplY3QoZSk7IH0gfSwgZGVsYXkgfHwgMCk7XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fTtcblxuXHQvKipcblx0ICogaWYgZ2l2ZW4gdmFsdWUgaXMgbm90IGEgcHJvbWlzZSByZXR1cm4gYSBmdWxmaWxsZWQgcHJvbWlzZSByZXNvbHZlZCB0byBnaXZlbiB2YWx1ZVxuXHQgKiBAcGFyYW0geyp9IHByb21pc2UgYSB2YWx1ZSBvciBhIHByb21pc2Vcblx0ICogQHJldHVybnMge3Byb21pc2V9XG5cdCAqL1xuXHRkZWZlci5wcm9taXNpZnkgPSBmdW5jdGlvbihwcm9taXNlKXtcblx0XHRpZiAoIHByb21pc2UgJiYgaXNGdW5jKHByb21pc2UudGhlbikgKSB7IHJldHVybiBwcm9taXNlO31cblx0XHRyZXR1cm4gZGVmZXIucmVzb2x2ZWQocHJvbWlzZSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gbXVsdGlQcm9taXNlUmVzb2x2ZXIoY2FsbGVyQXJndW1lbnRzLCByZXR1cm5Qcm9taXNlcyl7XG5cdFx0dmFyIHByb21pc2VzID0gc2xpY2UoY2FsbGVyQXJndW1lbnRzKTtcblx0XHRpZiAoIHByb21pc2VzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KHByb21pc2VzWzBdKSApIHtcblx0XHRcdGlmKCEgcHJvbWlzZXNbMF0ubGVuZ3RoICl7XG5cdFx0XHRcdHJldHVybiBkZWZlci5mdWxmaWxsZWQoW10pO1xuXHRcdFx0fVxuXHRcdFx0cHJvbWlzZXMgPSBwcm9taXNlc1swXTtcblx0XHR9XG5cdFx0dmFyIGFyZ3MgPSBbXVxuXHRcdFx0LCBkID0gZGVmZXIoKVxuXHRcdFx0LCBjID0gcHJvbWlzZXMubGVuZ3RoXG5cdFx0O1xuXHRcdGlmICggIWMgKSB7XG5cdFx0XHRkLnJlc29sdmUoYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciByZXNvbHZlciA9IGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRwcm9taXNlc1tpXSA9IGRlZmVyLnByb21pc2lmeShwcm9taXNlc1tpXSk7XG5cdFx0XHRcdHByb21pc2VzW2ldLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24odil7XG5cdFx0XHRcdFx0XHRpZiAoISAoaSBpbiBhcmdzKSApIHsgLy9AdG9kbyBjaGVjayB0aGlzIGlzIHN0aWxsIHJlcXVpcmVkIGFzIHByb21pc2VzIGNhbid0IGJlIHJlc29sdmUgbW9yZSB0aGFuIG9uY2Vcblx0XHRcdFx0XHRcdFx0YXJnc1tpXSA9IHJldHVyblByb21pc2VzID8gcHJvbWlzZXNbaV0gOiB2O1xuXHRcdFx0XHRcdFx0XHQoLS1jKSB8fCBkLnJlc29sdmUoYXJncyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHRpZighIChpIGluIGFyZ3MpICl7XG5cdFx0XHRcdFx0XHRcdGlmKCAhIHJldHVyblByb21pc2VzICl7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0YXJnc1tpXSA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH07XG5cdFx0XHRmb3IoIHZhciBpID0gMCwgbCA9IGM7IGkgPCBsOyBpKysgKXtcblx0XHRcdFx0cmVzb2x2ZXIoaSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkLnByb21pc2U7XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgYWxsIGdpdmVuIHByb21pc2VzIC8gdmFsdWVzLlxuXHQgKiB0aGUgcmV0dXJuZWQgcHJvbWlzZXMgd2lsbCBiZSBmdWxmaWxsZWQgd2l0aCBhIGxpc3Qgb2YgcmVzb2x2ZWQgdmFsdWUuXG5cdCAqIGlmIGFueSBnaXZlbiBwcm9taXNlIGlzIHJlamVjdGVkIHRoZW4gb24gdGhlIGZpcnN0IHJlamVjdGlvbiB0aGUgcmV0dXJuZWQgcHJvbWlzZWQgd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lIHJlYXNvblxuXHQgKiBAcGFyYW0ge2FycmF5fC4uLip9IFtwcm9taXNlXSBjYW4gYmUgYSBzaW5nbGUgYXJyYXkgb2YgcHJvbWlzZS92YWx1ZXMgYXMgZmlyc3QgcGFyYW1ldGVyIG9yIGEgbGlzdCBvZiBkaXJlY3QgcGFyYW1ldGVycyBwcm9taXNlL3ZhbHVlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBvZiBhIGxpc3Qgb2YgZ2l2ZW4gcHJvbWlzZSByZXNvbHV0aW9uIHZhbHVlXG5cdCAqL1xuXHRkZWZlci5hbGwgPSBmdW5jdGlvbigpeyByZXR1cm4gbXVsdGlQcm9taXNlUmVzb2x2ZXIoYXJndW1lbnRzLGZhbHNlKTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGFuIGFsd2F5cyBmdWxmaWxsZWQgcHJvbWlzZSBvZiBhcnJheTxwcm9taXNlPiBsaXN0IG9mIHByb21pc2VzL3ZhbHVlcyByZWdhcmRsZXNzIHRoZXkgcmVzb2x2ZSBmdWxmaWxsZWQgb3IgcmVqZWN0ZWRcblx0ICogQHBhcmFtIHthcnJheXwuLi4qfSBbcHJvbWlzZV0gY2FuIGJlIGEgc2luZ2xlIGFycmF5IG9mIHByb21pc2UvdmFsdWVzIGFzIGZpcnN0IHBhcmFtZXRlciBvciBhIGxpc3Qgb2YgZGlyZWN0IHBhcmFtZXRlcnMgcHJvbWlzZS92YWx1ZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgIChub24gcHJvbWlzZSB2YWx1ZXMgd2lsbCBiZSBwcm9taXNpZmllZClcblx0ICogQHJldHVybnMge3Byb21pc2V9IG9mIHRoZSBsaXN0IG9mIGdpdmVuIHByb21pc2VzXG5cdCAqL1xuXHRkZWZlci5yZXNvbHZlQWxsID0gZnVuY3Rpb24oKXsgcmV0dXJuIG11bHRpUHJvbWlzZVJlc29sdmVyKGFyZ3VtZW50cyx0cnVlKTsgfTtcblxuXHQvKipcblx0ICogdHJhbnNmb3JtIGEgdHlwaWNhbCBub2RlanMgYXN5bmMgbWV0aG9kIGF3YWl0aW5nIGEgY2FsbGJhY2sgYXMgbGFzdCBwYXJhbWV0ZXIsIHJlY2VpdmluZyBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIgdG8gYSBmdW5jdGlvbiB0aGF0XG5cdCAqIHdpbGwgcmV0dXJuIGEgcHJvbWlzZSBpbnN0ZWFkLiB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCBub3JtYWwgY2FsbGJhY2sgdmFsdWUgbWludXMgdGhlIGZpcnN0IGVycm9yIHBhcmFtZXRlciBvblxuXHQgKiBmdWxmaWxsIGFuZCB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhhdCBlcnJvciBhcyByZWFzb24gaW4gY2FzZSBvZiBlcnJvci5cblx0ICogQHBhcmFtIHtvYmplY3R9IFtzdWJqZWN0XSBvcHRpb25hbCBzdWJqZWN0IG9mIHRoZSBtZXRob2QgdG8gZW5jYXBzdWxhdGVcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gdGhlIGZ1bmN0aW9uIHRvIGVuY2Fwc3VsYXRlIGlmIHRoZSBub3JtYWwgY2FsbGJhY2sgc2hvdWxkIHJlY2VpdmUgbW9yZSB0aGFuIGEgc2luZ2xlIHBhcmFtZXRlciAobWludXMgdGhlIGVycm9yKVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICB0aGUgcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCB0aGUgbGlzdCBvciBwYXJhbWV0ZXJzIGFzIGZ1bGZpbGxtZW50IHZhbHVlLiBJZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgc2VudCB0byB0aGVcblx0ICogICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgdGhlbiBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJlc29sdXRpb24gdmFsdWUuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn1cblx0ICovXG5cdGRlZmVyLm5vZGVDYXBzdWxlID0gZnVuY3Rpb24oc3ViamVjdCwgZm4pe1xuXHRcdGlmICggIWZuICkge1xuXHRcdFx0Zm4gPSBzdWJqZWN0O1xuXHRcdFx0c3ViamVjdCA9IHZvaWQoMCk7XG5cdFx0fVxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGQgPSBkZWZlcigpLCBhcmdzID0gc2xpY2UoYXJndW1lbnRzKTtcblx0XHRcdGFyZ3MucHVzaChmdW5jdGlvbihlcnIsIHJlcyl7XG5cdFx0XHRcdGVyciA/IGQucmVqZWN0KGVycikgOiBkLnJlc29sdmUoYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBzbGljZShhcmd1bWVudHMsIDEpIDogcmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRmbi5hcHBseShzdWJqZWN0LCBhcmdzKTtcblx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdH07XG5cdH07XG5cblx0dHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZTdHIgJiYgKHdpbmRvdy5EID0gZGVmZXIpO1xuXHR0eXBlb2YgbW9kdWxlICE9PSB1bmRlZlN0ciAmJiBtb2R1bGUuZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSBkZWZlcik7XG5cbn0pKCk7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWtMbXB6TDJ4cFlpOUVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xWEc0cUlHRjBkR1Z0Y0hRZ2IyWWdZU0J6YVcxd2JHVWdaR1ZtWlhJdmNISnZiV2x6WlNCc2FXSnlZWEo1SUdadmNpQnRiMkpwYkdVZ1pHVjJaV3h2Y0cxbGJuUmNiaW9nUUdGMWRHaHZjaUJLYjI1aGRHaGhiaUJIYjNSMGFTQThJR3BuYjNSMGFTQmhkQ0JxWjI5MGRHa2daRzkwSUc1bGRENWNiaW9nUUhOcGJtTmxJREl3TVRJdE1UQmNiaW9nUUhabGNuTnBiMjRnTUM0MkxqQmNiaW9nUUdOb1lXNW5aV3h2WjF4dUtpQWdJQ0FnSUNBZ0lDQWdMU0F5TURFekxURXlMVEEzSUMwZ2JHRnpkQ0J3Y205dGFYTmxJREV1TVNCemNHVmpjeUIwWlhOMElIQmhjM05wYm1keklDaDBhSGdnZEc4Z2QybDZZWEprZDJWeVpHNWhLVnh1SUNvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzBnY21Wa2RXTmxJSEJ5YjIxcGMyVnpJR1p2YjNSd2NtbHVkQ0JpZVNCMWJuTmpiM0JwYm1jZ2JXVjBhRzlrY3lCMGFHRjBJR052ZFd4a0lHSmxYRzRxSUNBZ0lDQWdJQ0FnSUNBdElESXdNVE10TVRBdE1qTWdMU0J0WVd0bElHbDBJSGR2Y210cFp5QmhZM0p2YzNNZ2JtOWtaUzEzWldKcmFYUWdZMjl1ZEdWNGRITmNiaW9nSUNBZ0lDQWdJQ0FnSUMwZ01qQXhNeTB3Tnkwd015QXRJR0oxWnlCamIzSnlaV04wYVc5dUlHbHVJSEJ5YjIxcGVHbG1lU0J0WlhSb2IyUWdLSFJvZUNCMGJ5QmhaSEpwWlc0Z1oybGljbUYwSUNsY2Jpb2dJQ0FnSUNBZ0lDQWdJQzBnTWpBeE15MHdOaTB5TWlBdElHSjFaeUJqYjNKeVpXTjBhVzl1SUdsdUlHNXZaR1ZEWVhCemRXeGxJRzFsZEdodlpGeHVLaUFnSUNBZ0lDQWdJQ0FnTFNBeU1ERXpMVEEyTFRFM0lDMGdjbVZ0YjNabElIVnVibVZqWlhOellYSjVJRUZ5Y21GNUxtbHVaR1Y0VDJZZ2JXVjBhRzlrSUdSbGNHVnVaR1Z1WTNsY2Jpb2dJQ0FnSUNBZ0lDQWdJQzBnTWpBeE15MHdOQzB4T0NBdElHRmtaQ0IwY25rdlkyRjBZMmdnWW14dlkyc2dZWEp2ZFc1a0lHNXZaR1ZEWVhCemRXeGxaQ0J0WlhSb2IyUnpYRzRxSUNBZ0lDQWdJQ0FnSUNBdElESXdNVE10TURRdE1UTWdMU0JqYUdWamF5QndjbTl0YVhObGN5OUJLeUJqYjI1bWIzSnRhWFI1WEc0cUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTFNCdFlXdGxJSE52YldVZ2JXbHVhV05oZEdsdmJpQnZjSFJwYldsellYUnBiMjV6WEc0cUlDQWdJQ0FnSUNBZ0lDQXRJREl3TVRNdE1ETXRNallnTFNCaFpHUWdjbVZ6YjJ4MlpXUXNJR1oxYkdacGJHeGxaQ0JoYm1RZ2NtVnFaV04wWldRZ2JXVjBhRzlrYzF4dUtpQWdJQ0FnSUNBZ0lDQWdMU0F5TURFekxUQXpMVEl4SUMwZ1luSnZkM05sY2k5dWIyUmxJR052YlhCaGRHbGliR1ZjYmlvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F0SUc1bGR5QnRaWFJvYjJRZ2JtOWtaVU5oY0hOMWJHVmNiaW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXRJSE5wYlhCc1pYSWdjSEp2YldsNGFXWjVJSGRwZEdnZ1puVnNiQ0JoY0drZ2MzVndjRzl5ZEZ4dUtpQWdJQ0FnSUNBZ0lDQWdMU0F5TURFekxUQXhMVEkxSUMwZ1lXUmtJSEpsZEdoeWIzY2diV1YwYUc5a1hHNHFJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xTQnVaWGgwVkdsamF5QnZjSFJwYldsellYUnBiMjRnTFQ0Z1lXUmtJSE4xY0hCdmNuUWdabTl5SUhCeWIyTmxjM011Ym1WNGRGUnBZMnNnS3lCTlpYTnpZV2RsUTJoaGJtNWxiQ0IzYUdWeVpTQmhkbUZwYkdGaWJHVmNiaW9nSUNBZ0lDQWdJQ0FnSUMwZ01qQXhNaTB4TWkweU9DQXRJR0ZrWkNCaGNIQnNlU0J0WlhSb2IyUWdkRzhnY0hKdmJXbHpaVnh1S2lBZ0lDQWdJQ0FnSUNBZ0xTQXlNREV5TFRFeUxUSXdJQzBnWVdSa0lHRnNkMkY1YzBGemVXNWpJSEJoY21GdFpYUmxjbk1nWVc1a0lIQnliM0JsY25SNUlHWnZjaUJrWldaaGRXeDBJSE5sZEhScGJtZGNiaW92WEc0b1puVnVZM1JwYjI0b2RXNWtaV1lwZTF4dVhIUmNJblZ6WlNCemRISnBZM1JjSWp0Y2JseHVYSFIyWVhJZ2JtVjRkRlJwWTJ0Y2JseDBYSFFzSUdselJuVnVZeUE5SUdaMWJtTjBhVzl1S0dZcGV5QnlaWFIxY200Z0tDQjBlWEJsYjJZZ1ppQTlQVDBnSjJaMWJtTjBhVzl1SnlBcE95QjlYRzVjZEZ4MExDQnBjMEZ5Y21GNUlEMGdablZ1WTNScGIyNG9ZU2w3SUhKbGRIVnliaUJCY25KaGVTNXBjMEZ5Y21GNUlEOGdRWEp5WVhrdWFYTkJjbkpoZVNoaEtTQTZJQ2hoSUdsdWMzUmhibU5sYjJZZ1FYSnlZWGtwT3lCOVhHNWNkRngwTENCcGMwOWlhazl5Um5WdVl5QTlJR1oxYm1OMGFXOXVLRzhwZXlCeVpYUjFjbTRnSVNFb2J5QW1KaUFvZEhsd1pXOW1JRzhwTG0xaGRHTm9LQzltZFc1amRHbHZibnh2WW1wbFkzUXZLU2s3SUgxY2JseDBYSFFzSUdselRtOTBWbUZzSUQwZ1puVnVZM1JwYjI0b2RpbDdJSEpsZEhWeWJpQW9kaUE5UFQwZ1ptRnNjMlVnZkh3Z2RpQTlQVDBnZFc1a1pXWWdmSHdnZGlBOVBUMGdiblZzYkNrN0lIMWNibHgwWEhRc0lITnNhV05sSUQwZ1puVnVZM1JwYjI0b1lTd2diMlptYzJWMEtYc2djbVYwZFhKdUlGdGRMbk5zYVdObExtTmhiR3dvWVN3Z2IyWm1jMlYwS1RzZ2ZWeHVYSFJjZEN3Z2RXNWtaV1pUZEhJZ1BTQW5kVzVrWldacGJtVmtKMXh1WEhSY2RDd2dkRVZ5Y2lBOUlIUjVjR1Z2WmlCVWVYQmxSWEp5YjNJZ1BUMDlJSFZ1WkdWbVUzUnlJRDhnUlhKeWIzSWdPaUJVZVhCbFJYSnliM0pjYmx4ME8xeHVYSFJwWmlBb0lDaDBlWEJsYjJZZ2NISnZZMlZ6Y3lBaFBUMGdkVzVrWldaVGRISXBJQ1ltSUhCeWIyTmxjM011Ym1WNGRGUnBZMnNnS1NCN1hHNWNkRngwYm1WNGRGUnBZMnNnUFNCd2NtOWpaWE56TG01bGVIUlVhV05yTzF4dVhIUjlJR1ZzYzJVZ2FXWWdLQ0IwZVhCbGIyWWdUV1Z6YzJGblpVTm9ZVzV1Wld3Z0lUMDlJSFZ1WkdWbVUzUnlJQ2tnZTF4dVhIUmNkSFpoY2lCdWRHbGphME5vWVc1dVpXd2dQU0J1WlhjZ1RXVnpjMkZuWlVOb1lXNXVaV3dvS1N3Z2NYVmxkV1VnUFNCYlhUdGNibHgwWEhSdWRHbGphME5vWVc1dVpXd3VjRzl5ZERFdWIyNXRaWE56WVdkbElEMGdablZ1WTNScGIyNG9LWHNnY1hWbGRXVXViR1Z1WjNSb0lDWW1JQ2h4ZFdWMVpTNXphR2xtZENncEtTZ3BPeUI5TzF4dVhIUmNkRzVsZUhSVWFXTnJJRDBnWm5WdVkzUnBiMjRvWTJJcGUxeHVYSFJjZEZ4MGNYVmxkV1V1Y0hWemFDaGpZaWs3WEc1Y2RGeDBYSFJ1ZEdsamEwTm9ZVzV1Wld3dWNHOXlkREl1Y0c5emRFMWxjM05oWjJVb01DazdYRzVjZEZ4MGZUdGNibHgwZlNCbGJITmxJSHRjYmx4MFhIUnVaWGgwVkdsamF5QTlJR1oxYm1OMGFXOXVLR05pS1hzZ2MyVjBWR2x0Wlc5MWRDaGpZaXdnTUNrN0lIMDdYRzVjZEgxY2JseDBablZ1WTNScGIyNGdjbVYwYUhKdmR5aGxLWHNnYm1WNGRGUnBZMnNvWm5WdVkzUnBiMjRvS1hzZ2RHaHliM2NnWlR0OUtUc2dmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQkFkSGx3WldSbFppQmtaV1psY25KbFpGeHVYSFFnS2lCQWNISnZjR1Z5ZEhrZ2UzQnliMjFwYzJWOUlIQnliMjFwYzJWY2JseDBJQ29nUUcxbGRHaHZaQ0J5WlhOdmJIWmxYRzVjZENBcUlFQnRaWFJvYjJRZ1puVnNabWxzYkZ4dVhIUWdLaUJBYldWMGFHOWtJSEpsYW1WamRGeHVYSFFnS2k5Y2JseHVYSFF2S2lwY2JseDBJQ29nUUhSNWNHVmtaV1lnZTJaMWJtTjBhVzl1ZlNCbWRXeG1hV3hzWldSY2JseDBJQ29nUUhCaGNtRnRJSHNxZlNCMllXeDFaU0J3Y205dGFYTmxJSEpsYzI5c2RtVmtJSFpoYkhWbFhHNWNkQ0FxSUVCeVpYUjFjbTV6SUhzcWZTQnVaWGgwSUhCeWIyMXBjMlVnY21WemIyeDFkR2x2YmlCMllXeDFaVnh1WEhRZ0tpOWNibHh1WEhRdktpcGNibHgwSUNvZ1FIUjVjR1ZrWldZZ2UyWjFibU4wYVc5dWZTQm1ZV2xzWldSY2JseDBJQ29nUUhCaGNtRnRJSHNxZlNCeVpXRnpiMjRnY0hKdmJXbHpaU0J5WldwbFkzUnBiMjRnY21WaGMyOXVYRzVjZENBcUlFQnlaWFIxY201eklIc3FmU0J1WlhoMElIQnliMjFwYzJVZ2NtVnpiMngxZEdsdmJpQjJZV3gxWlNCdmNpQnlaWFJvY205M0lIUm9aU0J5WldGemIyNWNibHgwSUNvdlhHNWNibHgwTHk4dExTQmtaV1pwYm1sdVp5QjFibVZ1WTJ4dmMyVmtJSEJ5YjIxcGMyVWdiV1YwYUc5a2N5QXRMUzh2WEc1Y2RDOHFLbHh1WEhRZ0tpQnpZVzFsSUdGeklIUm9aVzRnZDJsMGFHOTFkQ0JtWVdsc1pXUWdZMkZzYkdKaFkydGNibHgwSUNvZ1FIQmhjbUZ0SUh0bWRXeG1hV3hzWldSOUlHWjFiR1pwYkd4bFpDQmpZV3hzWW1GamExeHVYSFFnS2lCQWNtVjBkWEp1Y3lCN2NISnZiV2x6WlgwZ1lTQnVaWGNnY0hKdmJXbHpaVnh1WEhRZ0tpOWNibHgwWm5WdVkzUnBiMjRnY0hKdmJXbHpaVjl6ZFdOalpYTnpLR1oxYkdacGJHeGxaQ2w3SUhKbGRIVnliaUIwYUdsekxuUm9aVzRvWm5Wc1ptbHNiR1ZrTENCMWJtUmxaaWs3SUgxY2JseHVYSFF2S2lwY2JseDBJQ29nYzJGdFpTQmhjeUIwYUdWdUlIZHBkR2dnYjI1c2VTQmhJR1poYVd4bFpDQmpZV3hzWW1GamExeHVYSFFnS2lCQWNHRnlZVzBnZTJaaGFXeGxaSDBnWm1GcGJHVmtJR05oYkd4aVlXTnJYRzVjZENBcUlFQnlaWFIxY201eklIdHdjbTl0YVhObGZTQmhJRzVsZHlCd2NtOXRhWE5sWEc1Y2RDQXFMMXh1WEhSbWRXNWpkR2x2YmlCd2NtOXRhWE5sWDJWeWNtOXlLR1poYVd4bFpDbDdJSEpsZEhWeWJpQjBhR2x6TG5Sb1pXNG9kVzVrWldZc0lHWmhhV3hsWkNrN0lIMWNibHh1WEc1Y2RDOHFLbHh1WEhRZ0tpQnpZVzFsSUdGeklIUm9aVzRnWW5WMElHWjFiR1pwYkd4bFpDQmpZV3hzWW1GamF5QjNhV3hzSUhKbFkyVnBkbVVnYlhWc2RHbHdiR1VnY0dGeVlXMWxkR1Z5Y3lCM2FHVnVJSEJ5YjIxcGMyVWdhWE1nWm5Wc1ptbHNiR1ZrSUhkcGRHZ2dZVzRnUVhKeVlYbGNibHgwSUNvZ1FIQmhjbUZ0SUh0bWRXeG1hV3hzWldSOUlHWjFiR1pwYkd4bFpDQmpZV3hzWW1GamExeHVYSFFnS2lCQWNHRnlZVzBnZTJaaGFXeGxaSDBnWm1GcGJHVmtJR05oYkd4aVlXTnJYRzVjZENBcUlFQnlaWFIxY201eklIdHdjbTl0YVhObGZTQmhJRzVsZHlCd2NtOXRhWE5sWEc1Y2RDQXFMMXh1WEhSbWRXNWpkR2x2YmlCd2NtOXRhWE5sWDJGd2NHeDVLR1oxYkdacGJHeGxaQ3dnWm1GcGJHVmtLWHRjYmx4MFhIUnlaWFIxY200Z2RHaHBjeTUwYUdWdUtGeHVYSFJjZEZ4MFpuVnVZM1JwYjI0b1lTbDdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnBjMFoxYm1Nb1puVnNabWxzYkdWa0tTQS9JR1oxYkdacGJHeGxaQzVoY0hCc2VTaHVkV3hzTENCcGMwRnljbUY1S0dFcElEOGdZU0E2SUZ0aFhTa2dPaUFvWkdWbVpYSXViMjVzZVVaMWJtTnpJRDhnWVNBNklHWjFiR1pwYkd4bFpDazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUXNJR1poYVd4bFpDQjhmQ0IxYm1SbFpseHVYSFJjZENrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dZMnhsWVc1MWNDQnRaWFJvYjJRZ2QyaHBZMmdnZDJsc2JDQmlaU0JoYkhkaGVYTWdaWGhsWTNWMFpXUWdjbVZuWVhKa2JHVnpjeUJtZFd4bWFXeHNiV1Z1ZENCdmNpQnlaV3BsWTNScGIyNWNibHgwSUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2Ym4wZ1kySWdZU0JqWVd4c1ltRmpheUJqWVd4c1pXUWdjbVZuWVhKa2JHVnpjeUJ2WmlCMGFHVWdablZzWm1sc2JHMWxiblFnYjNJZ2NtVnFaV04wYVc5dUlHOW1JSFJvWlNCd2NtOXRhWE5sSUhkb2FXTm9JSGRwYkd3Z1ltVWdZMkZzYkdWa1hHNWNkQ0FxSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZG9aVzRnZEdobElIQnliMjFwYzJVZ2FYTWdibTkwSUhCbGJtUnBibWNnWVc1NWJXOXlaVnh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdjSEp2YldselpYMGdkR2hsSUhOaGJXVWdjSEp2YldselpTQjFiblJ2ZFdOb1pXUmNibHgwSUNvdlhHNWNkR1oxYm1OMGFXOXVJSEJ5YjIxcGMyVmZaVzV6ZFhKbEtHTmlLWHRjYmx4MFhIUm1kVzVqZEdsdmJpQmZZMklvS1hzZ1kySW9LVHNnZlZ4dVhIUmNkSFJvYVhNdWRHaGxiaWhmWTJJc0lGOWpZaWs3WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE03WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ2RHRnJaU0JoSUhOcGJtZHNaU0JqWVd4c1ltRmpheUIzYUdsamFDQjNZV2wwSUdadmNpQmhiaUJsY25KdmNpQmhjeUJtYVhKemRDQndZWEpoYldWMFpYSXVJRzkwYUdWeUlISmxjMjlzZFhScGIyNGdkbUZzZFdWeklHRnlaU0J3WVhOelpXUWdZWE1nZDJsMGFDQjBhR1VnWVhCd2JIa3ZjM0J5WldGa0lHMWxkR2h2WkZ4dVhIUWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVmU0JqWWlCaElHTmhiR3hpWVdOcklHTmhiR3hsWkNCeVpXZGhjbVJzWlhOeklHOW1JSFJvWlNCbWRXeG1hV3hzYldWdWRDQnZjaUJ5WldwbFkzUnBiMjRnYjJZZ2RHaGxJSEJ5YjIxcGMyVWdkMmhwWTJnZ2QybHNiQ0JpWlNCallXeHNaV1JjYmx4MElDb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJobGJpQjBhR1VnY0hKdmJXbHpaU0JwY3lCdWIzUWdjR1Z1WkdsdVp5Qmhibmx0YjNKbElIZHBkR2dnWlhKeWIzSWdZWE1nWm1seWMzUWdjR0Z5WVcxbGRHVnlJR2xtSUdGdWVTQmhjeUJwYmlCdWIyUmxJSE4wZVd4bFhHNWNkQ0FxSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhiR3hpWVdOckxpQlNaWE4wSUc5bUlIQmhjbUZ0WlhSbGNuTWdkMmxzYkNCaVpTQmhjSEJzYVdWa0lHRnpJSGRwZEdnZ2RHaGxJR0Z3Y0d4NUlHMWxkR2h2WkM1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTNCeWIyMXBjMlY5SUdFZ2JtVjNJSEJ5YjIxcGMyVmNibHgwSUNvdlhHNWNkR1oxYm1OMGFXOXVJSEJ5YjIxcGMyVmZibTlrYVdaNUtHTmlLWHRjYmx4MFhIUnlaWFIxY200Z2RHaHBjeTUwYUdWdUtGeHVYSFJjZEZ4MFpuVnVZM1JwYjI0b1lTbDdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnBjMFoxYm1Nb1kySXBJRDhnWTJJdVlYQndiSGtvYm5Wc2JDd2dhWE5CY25KaGVTaGhLU0EvSUdFdWMzQnNhV05sS0RBc01DeDFibVJsWm1sdVpXUXBJQ1ltSUdFZ09pQmJkVzVrWldacGJtVmtMR0ZkS1NBNklDaGtaV1psY2k1dmJteDVSblZ1WTNNZ1B5QmhJRG9nWTJJcE8xeHVYSFJjZEZ4MGZWeHVYSFJjZEZ4MExDQm1kVzVqZEdsdmJpaGxLWHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR05pS0dVcE8xeHVYSFJjZEZ4MGZWeHVYSFJjZENrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDcGNibHgwSUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2Ym4wZ1cyWmhhV3hsWkYwZ2QybDBhRzkxZENCd1lYSmhiV1YwWlhJZ2QybHNiQ0J2Ym14NUlISmxkR2h5YjNjZ2NISnZiV2x6WlNCeVpXcGxZM1JwYjI0Z2NtVmhjMjl1SUc5MWRITnBaR1VnYjJZZ2RHaGxJSEJ5YjIxcGMyVWdiR2xpY21GeWVTQnZiaUJ1WlhoMElIUnBZMnRjYmx4MElDb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnY0dGemMyVmtJR0VnWm1GcGJHVmtJRzFsZEdodlpDQjBhR1Z1SUhkcGJHd2dZMkZzYkNCbVlXbHNaV1FnYjI0Z2NtVnFaV04wYVc5dUlHRnVaQ0IwYUhKdmR5QjBhR1VnWlhKeWIzSWdZV2RoYVc0Z2FXWWdabUZwYkdWa0lHUnBaRzRuZEZ4dVhIUWdLaUJBY21WMGRYSnVjeUI3Y0hKdmJXbHpaWDBnWVNCdVpYY2djSEp2YldselpWeHVYSFFnS2k5Y2JseDBablZ1WTNScGIyNGdjSEp2YldselpWOXlaWFJvY205M0tHWmhhV3hsWkNsN1hHNWNkRngwY21WMGRYSnVJSFJvYVhNdWRHaGxiaWhjYmx4MFhIUmNkSFZ1WkdWbVhHNWNkRngwWEhRc0lHWmhhV3hsWkNBL0lHWjFibU4wYVc5dUtHVXBleUJtWVdsc1pXUW9aU2s3SUhSb2NtOTNJR1U3SUgwZ09pQnlaWFJvY205M1hHNWNkRngwS1R0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRcUlFQndZWEpoYlNCN1ltOXZiR1ZoYm4wZ1cyRnNkMkY1YzBGemVXNWpYU0JwWmlCelpYUWdabTl5WTJVZ2RHaGxJR0Z6ZVc1aklISmxjMjlzZFhScGIyNGdabTl5SUhSb2FYTWdjSEp2YldselpTQnBibVJsY0dWdVpHRnVkR3g1SUc5bUlIUm9aU0JFTG1Gc2QyRjVjMEZ6ZVc1aklHOXdkR2x2Ymx4dVhIUXFJRUJ5WlhSMWNtNXpJSHRrWldabGNuSmxaSDBnWkdWbVpYSmxaQ0J2WW1wbFkzUWdkMmwwYUNCd2NtOXdaWEowZVNBbmNISnZiV2x6WlNjZ1lXNWtJRzFsZEdodlpITWdjbVZxWldOMExHWjFiR1pwYkd3c2NtVnpiMngyWlNBb1puVnNabWxzYkNCaVpXbHVaeUJoYmlCaGJHbGhjeUJtYjNJZ2NtVnpiMngyWlNsY2JseDBLaTljYmx4MGRtRnlJR1JsWm1WeUlEMGdablZ1WTNScGIyNGdLR0ZzZDJGNWMwRnplVzVqS1h0Y2JseDBYSFIyWVhJZ1lXeDNZWGx6UVhONWJtTkdiaUE5SUNoMWJtUmxaaUFoUFQwZ1lXeDNZWGx6UVhONWJtTWdQeUJoYkhkaGVYTkJjM2x1WXlBNklHUmxabVZ5TG1Gc2QyRjVjMEZ6ZVc1aktTQS9JRzVsZUhSVWFXTnJJRG9nWm5WdVkzUnBiMjRvWm00cGUyWnVLQ2s3ZlZ4dVhIUmNkRngwTENCemRHRjBkWE1nUFNBd0lDOHZJQzB4SUdaaGFXeGxaQ0I4SURFZ1puVnNabWxzYkdWa1hHNWNkRngwWEhRc0lIQmxibVJwYm1keklEMGdXMTFjYmx4MFhIUmNkQ3dnZG1Gc2RXVmNibHgwWEhSY2RDOHFLbHh1WEhSY2RGeDBJQ29nUUhSNWNHVmtaV1lnY0hKdmJXbHpaVnh1WEhSY2RGeDBJQ292WEc1Y2RGeDBYSFFzSUY5d2NtOXRhWE5sSUNBOUlIdGNibHgwWEhSY2RGeDBMeW9xWEc1Y2RGeDBYSFJjZENBcUlFQndZWEpoYlNCN1puVnNabWxzYkdWa2ZHWjFibU4wYVc5dWZTQm1kV3htYVd4c1pXUWdZMkZzYkdKaFkydGNibHgwWEhSY2RGeDBJQ29nUUhCaGNtRnRJSHRtWVdsc1pXUjhablZ1WTNScGIyNTlJR1poYVd4bFpDQmpZV3hzWW1GamExeHVYSFJjZEZ4MFhIUWdLaUJBY21WMGRYSnVjeUI3Y0hKdmJXbHpaWDBnWVNCdVpYY2djSEp2YldselpWeHVYSFJjZEZ4MFhIUWdLaTljYmx4MFhIUmNkRngwZEdobGJqb2dablZ1WTNScGIyNG9ablZzWm1sc2JHVmtMQ0JtWVdsc1pXUXBlMXh1WEhSY2RGeDBYSFJjZEhaaGNpQmtJRDBnWkdWbVpYSW9LVHRjYmx4MFhIUmNkRngwWEhSd1pXNWthVzVuY3k1d2RYTm9LRnRjYmx4MFhIUmNkRngwWEhSY2RHWjFibU4wYVc5dUtIWmhiSFZsS1h0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZEhKNWUxeHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RHbG1LQ0JwYzA1dmRGWmhiQ2htZFd4bWFXeHNaV1FwS1h0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHUXVjbVZ6YjJ4MlpTaDJZV3gxWlNrN1hHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHUXVjbVZ6YjJ4MlpTaHBjMFoxYm1Nb1puVnNabWxzYkdWa0tTQS9JR1oxYkdacGJHeGxaQ2gyWVd4MVpTa2dPaUFvWkdWbVpYSXViMjVzZVVaMWJtTnpJRDhnZG1Gc2RXVWdPaUJtZFd4bWFXeHNaV1FwS1R0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RGeDBYSFJjZEgxallYUmphQ2hsS1h0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSa0xuSmxhbVZqZENobEtUdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RGeDBMQ0JtZFc1amRHbHZiaWhsY25JcGUxeHVYSFJjZEZ4MFhIUmNkRngwWEhScFppQW9JR2x6VG05MFZtRnNLR1poYVd4bFpDa2dmSHdnS0NnaGFYTkdkVzVqS0daaGFXeGxaQ2twSUNZbUlHUmxabVZ5TG05dWJIbEdkVzVqY3lrZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBaQzV5WldwbFkzUW9aWEp5S1R0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RGeDBYSFJwWmlBb0lHWmhhV3hsWkNBcElIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUjBjbmw3SUdRdWNtVnpiMngyWlNocGMwWjFibU1vWm1GcGJHVmtLU0EvSUdaaGFXeGxaQ2hsY25JcElEb2dabUZwYkdWa0tUc2dmV05oZEdOb0tHVXBleUJrTG5KbGFtVmpkQ2hsS1R0OVhHNWNkRngwWEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwWEhSZEtUdGNibHgwWEhSY2RGeDBYSFJ6ZEdGMGRYTWdJVDA5SURBZ0ppWWdZV3gzWVhselFYTjVibU5HYmlobGVHVmpRMkZzYkdKaFkydHpLVHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnWkM1d2NtOXRhWE5sTzF4dVhIUmNkRngwWEhSOVhHNWNibHgwWEhSY2RGeDBMQ0J6ZFdOalpYTnpPaUJ3Y205dGFYTmxYM04xWTJObGMzTmNibHh1WEhSY2RGeDBYSFFzSUdWeWNtOXlPaUJ3Y205dGFYTmxYMlZ5Y205eVhHNWNkRngwWEhSY2RDd2diM1JvWlhKM2FYTmxPaUJ3Y205dGFYTmxYMlZ5Y205eVhHNWNibHgwWEhSY2RGeDBMQ0JoY0hCc2VUb2djSEp2YldselpWOWhjSEJzZVZ4dVhIUmNkRngwWEhRc0lITndjbVZoWkRvZ2NISnZiV2x6WlY5aGNIQnNlVnh1WEc1Y2RGeDBYSFJjZEN3Z1pXNXpkWEpsT2lCd2NtOXRhWE5sWDJWdWMzVnlaVnh1WEc1Y2RGeDBYSFJjZEN3Z2JtOWthV1o1T2lCd2NtOXRhWE5sWDI1dlpHbG1lVnh1WEc1Y2RGeDBYSFJjZEN3Z2NtVjBhSEp2ZHpvZ2NISnZiV2x6WlY5eVpYUm9jbTkzWEc1Y2JseDBYSFJjZEZ4MExDQnBjMUJsYm1ScGJtYzZJR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUFoSVNoemRHRjBkWE1nUFQwOUlEQXBPeUI5WEc1Y2JseDBYSFJjZEZ4MExDQm5aWFJUZEdGMGRYTTZJR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUJ6ZEdGMGRYTTdJSDFjYmx4MFhIUmNkSDFjYmx4MFhIUTdYRzVjZEZ4MFgzQnliMjFwYzJVdWRHOVRiM1Z5WTJVZ1BTQmZjSEp2YldselpTNTBiMU4wY21sdVp5QTlJRjl3Y205dGFYTmxMblpoYkhWbFQyWWdQU0JtZFc1amRHbHZiaWdwZTNKbGRIVnliaUIyWVd4MVpTQTlQVDBnZFc1a1pXWWdQeUIwYUdseklEb2dkbUZzZFdVN0lIMDdYRzVjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR1Y0WldORFlXeHNZbUZqYTNNb0tYdGNibHgwWEhSY2RHbG1JQ2dnYzNSaGRIVnpJRDA5UFNBd0lDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUjJZWElnWTJKeklEMGdjR1Z1WkdsdVozTXNJR2tnUFNBd0xDQnNJRDBnWTJKekxteGxibWQwYUN3Z1kySkpibVJsZUNBOUlINXpkR0YwZFhNZ1B5QXdJRG9nTVN3Z1kySTdYRzVjZEZ4MFhIUndaVzVrYVc1bmN5QTlJRnRkTzF4dVhIUmNkRngwWm05eUtDQTdJR2tnUENCc095QnBLeXNnS1h0Y2JseDBYSFJjZEZ4MEtHTmlJRDBnWTJKelcybGRXMk5pU1c1a1pYaGRLU0FtSmlCallpaDJZV3gxWlNrN1hHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhHNWNkRngwTHlvcVhHNWNkRngwSUNvZ1puVnNabWxzYkNCa1pXWmxjbkpsWkNCM2FYUm9JR2RwZG1WdUlIWmhiSFZsWEc1Y2RGeDBJQ29nUUhCaGNtRnRJSHNxZlNCMllXeGNibHgwWEhRZ0tpQkFjbVYwZFhKdWN5QjdaR1ZtWlhKeVpXUjlJSFJvYVhNZ1ptOXlJRzFsZEdodlpDQmphR0ZwYm1sdVoxeHVYSFJjZENBcUwxeHVYSFJjZEdaMWJtTjBhVzl1SUY5eVpYTnZiSFpsS0haaGJDbDdYRzVjZEZ4MFhIUjJZWElnWkc5dVpTQTlJR1poYkhObE8xeHVYSFJjZEZ4MFpuVnVZM1JwYjI0Z2IyNWpaU2htS1h0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdaMWJtTjBhVzl1S0hncGUxeHVYSFJjZEZ4MFhIUmNkR2xtSUNoa2IyNWxLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUnlaWFIxY200Z2RXNWtaV1pwYm1Wa08xeHVYSFJjZEZ4MFhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUmNkRngwWEhSa2IyNWxJRDBnZEhKMVpUdGNibHgwWEhSY2RGeDBYSFJjZEhKbGRIVnliaUJtS0hncE8xeHVYSFJjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwZlR0Y2JseDBYSFJjZEgxY2JseDBYSFJjZEdsbUlDZ2djM1JoZEhWeklDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3p0Y2JseDBYSFJjZEgxY2JseDBYSFJjZEhSeWVTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCMGFHVnVJRDBnYVhOUFltcFBja1oxYm1Nb2RtRnNLU0FtSmlCMllXd3VkR2hsYmp0Y2JseDBYSFJjZEZ4MGFXWWdLQ0JwYzBaMWJtTW9kR2hsYmlrZ0tTQjdJQzh2SUcxaGJtRm5hVzVuSUdFZ2NISnZiV2x6WlZ4dVhIUmNkRngwWEhSY2RHbG1LQ0IyWVd3Z1BUMDlJRjl3Y205dGFYTmxJQ2w3WEc1Y2RGeDBYSFJjZEZ4MFhIUjBhSEp2ZHlCdVpYY2dkRVZ5Y2loY0lsQnliMjFwYzJVZ1kyRnVKM1FnY21WemIyeDJaU0JwZEhObGJHWmNJaWs3WEc1Y2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkSFJvWlc0dVkyRnNiQ2gyWVd3c0lHOXVZMlVvWDNKbGMyOXNkbVVwTENCdmJtTmxLRjl5WldwbFkzUXBLVHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnZEdocGN6dGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmU0JqWVhSamFDQW9aU2tnZTF4dVhIUmNkRngwWEhSdmJtTmxLRjl5WldwbFkzUXBLR1VwTzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZEdocGN6dGNibHgwWEhSY2RIMWNibHgwWEhSY2RHRnNkMkY1YzBGemVXNWpSbTRvWm5WdVkzUnBiMjRvS1h0Y2JseDBYSFJjZEZ4MGRtRnNkV1VnUFNCMllXdzdYRzVjZEZ4MFhIUmNkSE4wWVhSMWN5QTlJREU3WEc1Y2RGeDBYSFJjZEdWNFpXTkRZV3hzWW1GamEzTW9LVHRjYmx4MFhIUmNkSDBwTzF4dVhIUmNkRngwY21WMGRYSnVJSFJvYVhNN1hHNWNkRngwZlZ4dVhHNWNkRngwTHlvcVhHNWNkRngwSUNvZ2NtVnFaV04wSUdSbFptVnljbVZrSUhkcGRHZ2daMmwyWlc0Z2NtVmhjMjl1WEc1Y2RGeDBJQ29nUUhCaGNtRnRJSHNxZlNCRmNuSmNibHgwWEhRZ0tpQkFjbVYwZFhKdWN5QjdaR1ZtWlhKeVpXUjlJSFJvYVhNZ1ptOXlJRzFsZEdodlpDQmphR0ZwYm1sdVoxeHVYSFJjZENBcUwxeHVYSFJjZEdaMWJtTjBhVzl1SUY5eVpXcGxZM1FvUlhKeUtYdGNibHgwWEhSY2RITjBZWFIxY3lCOGZDQmhiSGRoZVhOQmMzbHVZMFp1S0daMWJtTjBhVzl1S0NsN1hHNWNkRngwWEhSY2RIUnllWHNnZEdoeWIzY29SWEp5S1RzZ2ZXTmhkR05vS0dVcGV5QjJZV3gxWlNBOUlHVTdJSDFjYmx4MFhIUmNkRngwYzNSaGRIVnpJRDBnTFRFN1hHNWNkRngwWEhSY2RHVjRaV05EWVd4c1ltRmphM01vS1R0Y2JseDBYSFJjZEgwcE8xeHVYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTTdYRzVjZEZ4MGZWeHVYSFJjZEhKbGRIVnliaUF2S2lwQWRIbHdaU0JrWldabGNuSmxaQ0FxTHlCN1hHNWNkRngwWEhSd2NtOXRhWE5sT2w5d2NtOXRhWE5sWEc1Y2RGeDBYSFFzY21WemIyeDJaVHBmY21WemIyeDJaVnh1WEhSY2RGeDBMR1oxYkdacGJHdzZYM0psYzI5c2RtVWdMeThnWVd4cFlYTmNibHgwWEhSY2RDeHlaV3BsWTNRNlgzSmxhbVZqZEZ4dVhIUmNkSDA3WEc1Y2RIMDdYRzVjYmx4MFpHVm1aWEl1WkdWbVpYSnlaV1FnUFNCa1pXWmxjaTVrWldabGNpQTlJR1JsWm1WeU8xeHVYSFJrWldabGNpNXVaWGgwVkdsamF5QTlJRzVsZUhSVWFXTnJPMXh1WEhSa1pXWmxjaTVoYkhkaGVYTkJjM2x1WXlBOUlIUnlkV1U3SUM4dklITmxkSFJwYm1jZ2RHaHBjeUIzYVd4c0lHTm9ZVzVuWlNCa1pXWmhkV3gwSUdKbGFHRjJhVzkxY2k0Z2RYTmxJR2wwSUc5dWJIa2dhV1lnYm1WalpYTnpZWEo1SUdGeklHRnplVzVqYUhKdmJtbGphWFI1SUhkcGJHd2dabTl5WTJVZ2MyOXRaU0JrWld4aGVTQmlaWFIzWldWdUlIbHZkWElnY0hKdmJXbHpaU0J5WlhOdmJIVjBhVzl1Y3lCaGJtUWdhWE1nYm05MElHRnNkMkY1Y3lCM2FHRjBJSGx2ZFNCM1lXNTBMbHh1WEhRdktpcGNibHgwS2lCelpYUjBhVzVuSUc5dWJIbEdkVzVqY3lCMGJ5Qm1ZV3h6WlNCM2FXeHNJR0p5WldGcklIQnliMjFwYzJWekwwRXJJR052Ym1admNtMXBkSGtnWW5rZ1lXeHNiM2RwYm1jZ2VXOTFJSFJ2SUhCaGMzTWdibTl1SUhWdVpHVm1hVzVsWkM5dWRXeHNJSFpoYkhWbGN5QnBibk4wWldGa0lHOW1JR05oYkd4aVlXTnJjMXh1WEhRcUlHbHVjM1JsWVdRZ2IyWWdhblZ6ZENCcFoyNXZjbWx1WnlCaGJua2dibTl1SUdaMWJtTjBhVzl1SUhCaGNtRnRaWFJsY25NZ2RHOGdkR2hsYml4emRXTmpaWE56TEdWeWNtOXlMaTR1SUdsMElIZHBiR3dnWVdOalpYQjBJRzV2YmlCdWRXeHNmSFZ1WkdWbWFXNWxaQ0IyWVd4MVpYTXVYRzVjZENvZ2RHaHBjeUIzYVd4c0lHRnNiRzkzSUhsdmRTQnphRzl5ZEdOMWRITWdiR2xyWlNCd2NtOXRhWE5sTG5Sb1pXNG9KM1poYkNjc0oyaGhibVJzWldRZ1pYSnliM0luSnlsY2JseDBLaUIwYnlCaVpTQmxjWFZwZG1Gc1pXNTBJRzltSUhCeWIyMXBjMlV1ZEdobGJpaG1kVzVqZEdsdmJpZ3BleUJ5WlhSMWNtNGdKM1poYkNjN2ZTeG1kVzVqZEdsdmJpZ3BleUJ5WlhSMWNtNGdKMmhoYm1Sc1pXUWdaWEp5YjNJbmZTbGNibHgwS2k5Y2JseDBaR1ZtWlhJdWIyNXNlVVoxYm1OeklEMGdkSEoxWlR0Y2JseHVYSFF2S2lwY2JseDBJQ29nY21WMGRYSnVJR0VnWm5Wc1ptbHNiR1ZrSUhCeWIyMXBjMlVnYjJZZ1oybDJaVzRnZG1Gc2RXVWdLR0ZzZDJGNWN5QmhjM2x1WXlCeVpYTnZiSFYwYVc5dUtWeHVYSFFnS2lCQWNHRnlZVzBnZXlwOUlIWmhiSFZsWEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHR3Y205dGFYTmxmVnh1WEhRZ0tpOWNibHgwWkdWbVpYSXVjbVZ6YjJ4MlpXUWdQU0JrWldabGNpNW1kV3htYVd4c1pXUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTbDdJSEpsZEhWeWJpQmtaV1psY2loMGNuVmxLUzV5WlhOdmJIWmxLSFpoYkhWbEtTNXdjbTl0YVhObE95QjlPMXh1WEc1Y2RDOHFLbHh1WEhRZ0tpQnlaWFIxY200Z1lTQnlaV3BsWTNSbFpDQndjbTl0YVhObElIZHBkR2dnWjJsMlpXNGdjbVZoYzI5dUlHOW1JSEpsYW1WamRHbHZiaUFvWVd4M1lYbHpJR0Z6ZVc1aklISmxhbVZqZEdsdmJpbGNibHgwSUNvZ1FIQmhjbUZ0SUhzcWZTQnlaV0Z6YjI1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTNCeWIyMXBjMlY5WEc1Y2RDQXFMMXh1WEhSa1pXWmxjaTV5WldwbFkzUmxaQ0E5SUdaMWJtTjBhVzl1S0hKbFlYTnZiaWw3SUhKbGRIVnliaUJrWldabGNpaDBjblZsS1M1eVpXcGxZM1FvY21WaGMyOXVLUzV3Y205dGFYTmxPeUI5TzF4dVhHNWNkQzhxS2x4dVhIUWdLaUJ5WlhSMWNtNGdZU0J3Y205dGFYTmxJSGRwZEdnZ2JtOGdjbVZ6YjJ4MWRHbHZiaUIyWVd4MVpTQjNhR2xqYUNCM2FXeHNJR0psSUhKbGMyOXNkbVZrSUdsdUlIUnBiV1VnYlhNZ0tIVnphVzVuSUhObGRGUnBiV1Z2ZFhRcFhHNWNkQ0FxSUVCd1lYSmhiU0I3YVc1MGZTQmJkR2x0WlYwZ2FXNGdiWE1nWkdWbVlYVnNkQ0IwYnlBd1hHNWNkQ0FxSUVCeVpYUjFjbTV6SUh0d2NtOXRhWE5sZlZ4dVhIUWdLaTljYmx4MFpHVm1aWEl1ZDJGcGRDQTlJR1oxYm1OMGFXOXVLSFJwYldVcGUxeHVYSFJjZEhaaGNpQmtJRDBnWkdWbVpYSW9LVHRjYmx4MFhIUnpaWFJVYVcxbGIzVjBLR1F1Y21WemIyeDJaU3dnZEdsdFpTQjhmQ0F3S1R0Y2JseDBYSFJ5WlhSMWNtNGdaQzV3Y205dGFYTmxPMXh1WEhSOU8xeHVYRzVjZEM4cUtseHVYSFFnS2lCeVpYUjFjbTRnWVNCd2NtOXRhWE5sSUdadmNpQjBhR1VnY21WMGRYSnVJSFpoYkhWbElHOW1JR1oxYm1OMGFXOXVJR05oYkd3Z2QyaHBZMmdnZDJsc2JDQmlaU0JtZFd4bWFXeHNaV1FnYVc0Z1pHVnNZWGtnYlhNZ2IzSWdjbVZxWldOMFpXUWdhV1lnWjJsMlpXNGdabTRnZEdoeWIzY2dZVzRnWlhKeWIzSmNibHgwSUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2Ym4wZ1ptNWNibHgwSUNvZ1FIQmhjbUZ0SUh0cGJuUjlJRnRrWld4aGVWMGdhVzRnYlhNZ1pHVm1ZWFZzZENCMGJ5QXdYRzVjZENBcUlFQnlaWFIxY201eklIdHdjbTl0YVhObGZWeHVYSFFnS2k5Y2JseDBaR1ZtWlhJdVpHVnNZWGtnUFNCbWRXNWpkR2x2YmlobWJpd2daR1ZzWVhrcGUxeHVYSFJjZEhaaGNpQmtJRDBnWkdWbVpYSW9LVHRjYmx4MFhIUnpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVLQ2w3SUhSeWVYc2daQzV5WlhOdmJIWmxLR1p1TG1Gd2NHeDVLRzUxYkd3cEtUc2dmV05oZEdOb0tHVXBleUJrTG5KbGFtVmpkQ2hsS1RzZ2ZTQjlMQ0JrWld4aGVTQjhmQ0F3S1R0Y2JseDBYSFJ5WlhSMWNtNGdaQzV3Y205dGFYTmxPMXh1WEhSOU8xeHVYRzVjZEM4cUtseHVYSFFnS2lCcFppQm5hWFpsYmlCMllXeDFaU0JwY3lCdWIzUWdZU0J3Y205dGFYTmxJSEpsZEhWeWJpQmhJR1oxYkdacGJHeGxaQ0J3Y205dGFYTmxJSEpsYzI5c2RtVmtJSFJ2SUdkcGRtVnVJSFpoYkhWbFhHNWNkQ0FxSUVCd1lYSmhiU0I3S24wZ2NISnZiV2x6WlNCaElIWmhiSFZsSUc5eUlHRWdjSEp2YldselpWeHVYSFFnS2lCQWNtVjBkWEp1Y3lCN2NISnZiV2x6WlgxY2JseDBJQ292WEc1Y2RHUmxabVZ5TG5CeWIyMXBjMmxtZVNBOUlHWjFibU4wYVc5dUtIQnliMjFwYzJVcGUxeHVYSFJjZEdsbUlDZ2djSEp2YldselpTQW1KaUJwYzBaMWJtTW9jSEp2YldselpTNTBhR1Z1S1NBcElIc2djbVYwZFhKdUlIQnliMjFwYzJVN2ZWeHVYSFJjZEhKbGRIVnliaUJrWldabGNpNXlaWE52YkhabFpDaHdjbTl0YVhObEtUdGNibHgwZlR0Y2JseHVYSFJtZFc1amRHbHZiaUJ0ZFd4MGFWQnliMjFwYzJWU1pYTnZiSFpsY2loallXeHNaWEpCY21kMWJXVnVkSE1zSUhKbGRIVnlibEJ5YjIxcGMyVnpLWHRjYmx4MFhIUjJZWElnY0hKdmJXbHpaWE1nUFNCemJHbGpaU2hqWVd4c1pYSkJjbWQxYldWdWRITXBPMXh1WEhSY2RHbG1JQ2dnY0hKdmJXbHpaWE11YkdWdVozUm9JRDA5UFNBeElDWW1JR2x6UVhKeVlYa29jSEp2YldselpYTmJNRjBwSUNrZ2UxeHVYSFJjZEZ4MGFXWW9JU0J3Y205dGFYTmxjMXN3WFM1c1pXNW5kR2dnS1h0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdSbFptVnlMbVoxYkdacGJHeGxaQ2hiWFNrN1hHNWNkRngwWEhSOVhHNWNkRngwWEhSd2NtOXRhWE5sY3lBOUlIQnliMjFwYzJWeld6QmRPMXh1WEhSY2RIMWNibHgwWEhSMllYSWdZWEpuY3lBOUlGdGRYRzVjZEZ4MFhIUXNJR1FnUFNCa1pXWmxjaWdwWEc1Y2RGeDBYSFFzSUdNZ1BTQndjbTl0YVhObGN5NXNaVzVuZEdoY2JseDBYSFE3WEc1Y2RGeDBhV1lnS0NBaFl5QXBJSHRjYmx4MFhIUmNkR1F1Y21WemIyeDJaU2hoY21kektUdGNibHgwWEhSOUlHVnNjMlVnZTF4dVhIUmNkRngwZG1GeUlISmxjMjlzZG1WeUlEMGdablZ1WTNScGIyNG9hU2w3WEc1Y2RGeDBYSFJjZEhCeWIyMXBjMlZ6VzJsZElEMGdaR1ZtWlhJdWNISnZiV2x6YVdaNUtIQnliMjFwYzJWelcybGRLVHRjYmx4MFhIUmNkRngwY0hKdmJXbHpaWE5iYVYwdWRHaGxiaWhjYmx4MFhIUmNkRngwWEhSbWRXNWpkR2x2YmloMktYdGNibHgwWEhSY2RGeDBYSFJjZEdsbUlDZ2hJQ2hwSUdsdUlHRnlaM01wSUNrZ2V5QXZMMEIwYjJSdklHTm9aV05ySUhSb2FYTWdhWE1nYzNScGJHd2djbVZ4ZFdseVpXUWdZWE1nY0hKdmJXbHpaWE1nWTJGdUozUWdZbVVnY21WemIyeDJaU0J0YjNKbElIUm9ZVzRnYjI1alpWeHVYSFJjZEZ4MFhIUmNkRngwWEhSaGNtZHpXMmxkSUQwZ2NtVjBkWEp1VUhKdmJXbHpaWE1nUHlCd2NtOXRhWE5sYzF0cFhTQTZJSFk3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkQ2d0TFdNcElIeDhJR1F1Y21WemIyeDJaU2hoY21kektUdGNibHgwWEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkRngwTENCbWRXNWpkR2x2YmlobEtYdGNibHgwWEhSY2RGeDBYSFJjZEdsbUtDRWdLR2tnYVc0Z1lYSm5jeWtnS1h0Y2JseDBYSFJjZEZ4MFhIUmNkRngwYVdZb0lDRWdjbVYwZFhKdVVISnZiV2x6WlhNZ0tYdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmtMbkpsYW1WamRDaGxLVHRjYmx4MFhIUmNkRngwWEhSY2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmhjbWR6VzJsZElEMGdjSEp2YldselpYTmJhVjA3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwS0MwdFl5a2dmSHdnWkM1eVpYTnZiSFpsS0dGeVozTXBPMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFFwTzF4dVhIUmNkRngwZlR0Y2JseDBYSFJjZEdadmNpZ2dkbUZ5SUdrZ1BTQXdMQ0JzSUQwZ1l6c2dhU0E4SUd3N0lHa3JLeUFwZTF4dVhIUmNkRngwWEhSeVpYTnZiSFpsY2locEtUdGNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkRngwY21WMGRYSnVJR1F1Y0hKdmJXbHpaVHRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCeVpYUjFjbTRnWVNCd2NtOXRhWE5sSUdadmNpQmhiR3dnWjJsMlpXNGdjSEp2YldselpYTWdMeUIyWVd4MVpYTXVYRzVjZENBcUlIUm9aU0J5WlhSMWNtNWxaQ0J3Y205dGFYTmxjeUIzYVd4c0lHSmxJR1oxYkdacGJHeGxaQ0IzYVhSb0lHRWdiR2x6ZENCdlppQnlaWE52YkhabFpDQjJZV3gxWlM1Y2JseDBJQ29nYVdZZ1lXNTVJR2RwZG1WdUlIQnliMjFwYzJVZ2FYTWdjbVZxWldOMFpXUWdkR2hsYmlCdmJpQjBhR1VnWm1seWMzUWdjbVZxWldOMGFXOXVJSFJvWlNCeVpYUjFjbTVsWkNCd2NtOXRhWE5sWkNCM2FXeHNJR0psSUhKbGFtVmpkR1ZrSUhkcGRHZ2dkR2hsSUhOaGJXVWdjbVZoYzI5dVhHNWNkQ0FxSUVCd1lYSmhiU0I3WVhKeVlYbDhMaTR1S24wZ1czQnliMjFwYzJWZElHTmhiaUJpWlNCaElITnBibWRzWlNCaGNuSmhlU0J2WmlCd2NtOXRhWE5sTDNaaGJIVmxjeUJoY3lCbWFYSnpkQ0J3WVhKaGJXVjBaWElnYjNJZ1lTQnNhWE4wSUc5bUlHUnBjbVZqZENCd1lYSmhiV1YwWlhKeklIQnliMjFwYzJVdmRtRnNkV1ZjYmx4MElDb2dRSEpsZEhWeWJuTWdlM0J5YjIxcGMyVjlJRzltSUdFZ2JHbHpkQ0J2WmlCbmFYWmxiaUJ3Y205dGFYTmxJSEpsYzI5c2RYUnBiMjRnZG1Gc2RXVmNibHgwSUNvdlhHNWNkR1JsWm1WeUxtRnNiQ0E5SUdaMWJtTjBhVzl1S0NsN0lISmxkSFZ5YmlCdGRXeDBhVkJ5YjIxcGMyVlNaWE52YkhabGNpaGhjbWQxYldWdWRITXNabUZzYzJVcE95QjlPMXh1WEc1Y2RDOHFLbHh1WEhRZ0tpQnlaWFIxY200Z1lXNGdZV3gzWVhseklHWjFiR1pwYkd4bFpDQndjbTl0YVhObElHOW1JR0Z5Y21GNVBIQnliMjFwYzJVK0lHeHBjM1FnYjJZZ2NISnZiV2x6WlhNdmRtRnNkV1Z6SUhKbFoyRnlaR3hsYzNNZ2RHaGxlU0J5WlhOdmJIWmxJR1oxYkdacGJHeGxaQ0J2Y2lCeVpXcGxZM1JsWkZ4dVhIUWdLaUJBY0dGeVlXMGdlMkZ5Y21GNWZDNHVMaXA5SUZ0d2NtOXRhWE5sWFNCallXNGdZbVVnWVNCemFXNW5iR1VnWVhKeVlYa2diMllnY0hKdmJXbHpaUzkyWVd4MVpYTWdZWE1nWm1seWMzUWdjR0Z5WVcxbGRHVnlJRzl5SUdFZ2JHbHpkQ0J2WmlCa2FYSmxZM1FnY0dGeVlXMWxkR1Z5Y3lCd2NtOXRhWE5sTDNaaGJIVmxYRzVjZENBcUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLRzV2YmlCd2NtOXRhWE5sSUhaaGJIVmxjeUIzYVd4c0lHSmxJSEJ5YjIxcGMybG1hV1ZrS1Z4dVhIUWdLaUJBY21WMGRYSnVjeUI3Y0hKdmJXbHpaWDBnYjJZZ2RHaGxJR3hwYzNRZ2IyWWdaMmwyWlc0Z2NISnZiV2x6WlhOY2JseDBJQ292WEc1Y2RHUmxabVZ5TG5KbGMyOXNkbVZCYkd3Z1BTQm1kVzVqZEdsdmJpZ3BleUJ5WlhSMWNtNGdiWFZzZEdsUWNtOXRhWE5sVW1WemIyeDJaWElvWVhKbmRXMWxiblJ6TEhSeWRXVXBPeUI5TzF4dVhHNWNkQzhxS2x4dVhIUWdLaUIwY21GdWMyWnZjbTBnWVNCMGVYQnBZMkZzSUc1dlpHVnFjeUJoYzNsdVl5QnRaWFJvYjJRZ1lYZGhhWFJwYm1jZ1lTQmpZV3hzWW1GamF5QmhjeUJzWVhOMElIQmhjbUZ0WlhSbGNpd2djbVZqWldsMmFXNW5JR1Z5Y205eUlHRnpJR1pwY25OMElIQmhjbUZ0WlhSbGNpQjBieUJoSUdaMWJtTjBhVzl1SUhSb1lYUmNibHgwSUNvZ2QybHNiQ0J5WlhSMWNtNGdZU0J3Y205dGFYTmxJR2x1YzNSbFlXUXVJSFJvWlNCeVpYUjFjbTVsWkNCd2NtOXRhWE5sSUhkcGJHd2djbVZ6YjJ4MlpTQjNhWFJvSUc1dmNtMWhiQ0JqWVd4c1ltRmpheUIyWVd4MVpTQnRhVzUxY3lCMGFHVWdabWx5YzNRZ1pYSnliM0lnY0dGeVlXMWxkR1Z5SUc5dVhHNWNkQ0FxSUdaMWJHWnBiR3dnWVc1a0lIZHBiR3dnWW1VZ2NtVnFaV04wWldRZ2QybDBhQ0IwYUdGMElHVnljbTl5SUdGeklISmxZWE52YmlCcGJpQmpZWE5sSUc5bUlHVnljbTl5TGx4dVhIUWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdXM04xWW1wbFkzUmRJRzl3ZEdsdmJtRnNJSE4xWW1wbFkzUWdiMllnZEdobElHMWxkR2h2WkNCMGJ5QmxibU5oY0hOMWJHRjBaVnh1WEhRZ0tpQkFjR0Z5WVcwZ2UyWjFibU4wYVc5dWZTQm1iaUIwYUdVZ1puVnVZM1JwYjI0Z2RHOGdaVzVqWVhCemRXeGhkR1VnYVdZZ2RHaGxJRzV2Y20xaGJDQmpZV3hzWW1GamF5QnphRzkxYkdRZ2NtVmpaV2wyWlNCdGIzSmxJSFJvWVc0Z1lTQnphVzVuYkdVZ2NHRnlZVzFsZEdWeUlDaHRhVzUxY3lCMGFHVWdaWEp5YjNJcFhHNWNkQ0FxSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9aU0J3Y205dGFYTmxJSGRwYkd3Z2NtVnpiMngyWlNCM2FYUm9JSFJvWlNCc2FYTjBJRzl5SUhCaGNtRnRaWFJsY25NZ1lYTWdablZzWm1sc2JHMWxiblFnZG1Gc2RXVXVJRWxtSUc5dWJIa2diMjVsSUhCaGNtRnRaWFJsY2lCcGN5QnpaVzUwSUhSdklIUm9aVnh1WEhRZ0tpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmpheUIwYUdWdUlHbDBJSGRwYkd3Z1ltVWdkWE5sWkNCaGN5QjBhR1VnY21WemIyeDFkR2x2YmlCMllXeDFaUzVjYmx4MElDb2dRSEpsZEhWeWJuTWdlMFoxYm1OMGFXOXVmVnh1WEhRZ0tpOWNibHgwWkdWbVpYSXVibTlrWlVOaGNITjFiR1VnUFNCbWRXNWpkR2x2YmloemRXSnFaV04wTENCbWJpbDdYRzVjZEZ4MGFXWWdLQ0FoWm00Z0tTQjdYRzVjZEZ4MFhIUm1iaUE5SUhOMVltcGxZM1E3WEc1Y2RGeDBYSFJ6ZFdKcVpXTjBJRDBnZG05cFpDZ3dLVHRjYmx4MFhIUjlYRzVjZEZ4MGNtVjBkWEp1SUdaMWJtTjBhVzl1S0NsN1hHNWNkRngwWEhSMllYSWdaQ0E5SUdSbFptVnlLQ2tzSUdGeVozTWdQU0J6YkdsalpTaGhjbWQxYldWdWRITXBPMXh1WEhSY2RGeDBZWEpuY3k1d2RYTm9LR1oxYm1OMGFXOXVLR1Z5Y2l3Z2NtVnpLWHRjYmx4MFhIUmNkRngwWlhKeUlEOGdaQzV5WldwbFkzUW9aWEp5S1NBNklHUXVjbVZ6YjJ4MlpTaGhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNaUEvSUhOc2FXTmxLR0Z5WjNWdFpXNTBjeXdnTVNrZ09pQnlaWE1wTzF4dVhIUmNkRngwZlNrN1hHNWNkRngwWEhSMGNubDdYRzVjZEZ4MFhIUmNkR1p1TG1Gd2NHeDVLSE4xWW1wbFkzUXNJR0Z5WjNNcE8xeHVYSFJjZEZ4MGZXTmhkR05vS0dVcGUxeHVYSFJjZEZ4MFhIUmtMbkpsYW1WamRDaGxLVHRjYmx4MFhIUmNkSDFjYmx4MFhIUmNkSEpsZEhWeWJpQmtMbkJ5YjIxcGMyVTdYRzVjZEZ4MGZUdGNibHgwZlR0Y2JseHVYSFIwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0IxYm1SbFpsTjBjaUFtSmlBb2QybHVaRzkzTGtRZ1BTQmtaV1psY2lrN1hHNWNkSFI1Y0dWdlppQnRiMlIxYkdVZ0lUMDlJSFZ1WkdWbVUzUnlJQ1ltSUcxdlpIVnNaUzVsZUhCdmNuUnpJQ1ltSUNodGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdSbFptVnlLVHRjYmx4dWZTa29LVHRjYmlKZGZRPT0iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3QgPSAndW5kZWZpbmVkJyA9PSB0eXBlb2Ygd2luZG93XG4gID8gdGhpc1xuICA6IHdpbmRvdztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIFRPRE86IGZ1dHVyZSBwcm9vZiwgbW92ZSB0byBjb21wb2VudCBsYW5kXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSG9zdChvYmopIHtcbiAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgJ1tvYmplY3QgRmlsZV0nOlxuICAgIGNhc2UgJ1tvYmplY3QgQmxvYl0nOlxuICAgIGNhc2UgJ1tvYmplY3QgRm9ybURhdGFdJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgWEhSLlxuICovXG5cbmZ1bmN0aW9uIGdldFhIUigpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAmJiAoJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sIHx8ICFyb290LkFjdGl2ZVhPYmplY3QpKSB7XG4gICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjYuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC4zLjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciB0cmltID0gJycudHJpbVxuICA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMudHJpbSgpOyB9XG4gIDogZnVuY3Rpb24ocykgeyByZXR1cm4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csICcnKTsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChudWxsICE9IG9ialtrZXldKSB7XG4gICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpXG4gICAgICAgICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59XG5cbi8qKlxuICogRXhwb3NlIHNlcmlhbGl6YXRpb24gbWV0aG9kLlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdCA9IHNlcmlhbGl6ZTtcblxuIC8qKlxuICAqIFBhcnNlIHRoZSBnaXZlbiB4LXd3dy1mb3JtLXVybGVuY29kZWQgYHN0cmAuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICogQHJldHVybiB7T2JqZWN0fVxuICAqIEBhcGkgcHJpdmF0ZVxuICAqL1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgdmFyIHBhcnRzO1xuICB2YXIgcGFpcjtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgcGFydHMgPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzFdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogRXhwb3NlIHBhcnNlci5cbiAqL1xuXG5yZXF1ZXN0LnBhcnNlU3RyaW5nID0gcGFyc2VTdHJpbmc7XG5cbi8qKlxuICogRGVmYXVsdCBNSU1FIHR5cGUgbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqL1xuXG5yZXF1ZXN0LnR5cGVzID0ge1xuICBodG1sOiAndGV4dC9odG1sJyxcbiAganNvbjogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB4bWw6ICdhcHBsaWNhdGlvbi94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0nOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc2VyaWFsaXphdGlvbiBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuc2VyaWFsaXplWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKG9iail7XG4gKiAgICAgICByZXR1cm4gJ2dlbmVyYXRlZCB4bWwgaGVyZSc7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHNlcmlhbGl6ZSxcbiAgICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbiB9O1xuXG4gLyoqXG4gICogRGVmYXVsdCBwYXJzZXJzLlxuICAqXG4gICogICAgIHN1cGVyYWdlbnQucGFyc2VbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24oc3RyKXtcbiAgKiAgICAgICByZXR1cm4geyBvYmplY3QgcGFyc2VkIGZyb20gc3RyIH07XG4gICogICAgIH07XG4gICpcbiAgKi9cblxucmVxdWVzdC5wYXJzZSA9IHtcbiAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHBhcnNlU3RyaW5nLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04ucGFyc2Vcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGhlYWRlciBgc3RyYCBpbnRvXG4gKiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbWFwcGVkIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcihzdHIpIHtcbiAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBmaWVsZHMgPSB7fTtcbiAgdmFyIGluZGV4O1xuICB2YXIgbGluZTtcbiAgdmFyIGZpZWxkO1xuICB2YXIgdmFsO1xuXG4gIGxpbmVzLnBvcCgpOyAvLyB0cmFpbGluZyBDUkxGXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbGluZSA9IGxpbmVzW2ldO1xuICAgIGluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAgZmllbGQgPSBsaW5lLnNsaWNlKDAsIGluZGV4KS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHRyaW0obGluZS5zbGljZShpbmRleCArIDEpKTtcbiAgICBmaWVsZHNbZmllbGRdID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHR5cGUoc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5zaGlmdCgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyYW1zKHN0cil7XG4gIHJldHVybiByZWR1Y2Uoc3RyLnNwbGl0KC8gKjsgKi8pLCBmdW5jdGlvbihvYmosIHN0cil7XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKj0gKi8pXG4gICAgICAsIGtleSA9IHBhcnRzLnNoaWZ0KClcbiAgICAgICwgdmFsID0gcGFydHMuc2hpZnQoKTtcblxuICAgIGlmIChrZXkgJiYgdmFsKSBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBgeGhyYC5cbiAqXG4gKiAgLSBzZXQgZmxhZ3MgKC5vaywgLmVycm9yLCBldGMpXG4gKiAgLSBwYXJzZSBoZWFkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgQWxpYXNpbmcgYHN1cGVyYWdlbnRgIGFzIGByZXF1ZXN0YCBpcyBuaWNlOlxuICpcbiAqICAgICAgcmVxdWVzdCA9IHN1cGVyYWdlbnQ7XG4gKlxuICogIFdlIGNhbiB1c2UgdGhlIHByb21pc2UtbGlrZSBBUEksIG9yIHBhc3MgY2FsbGJhY2tzOlxuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nKS5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nLCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBTZW5kaW5nIGRhdGEgY2FuIGJlIGNoYWluZWQ6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnNlbmQoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAucG9zdCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogT3IgZnVydGhlciByZWR1Y2VkIHRvIGEgc2luZ2xlIGNhbGwgZm9yIHNpbXBsZSBjYXNlczpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBAcGFyYW0ge1hNTEhUVFBSZXF1ZXN0fSB4aHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZShyZXEsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucmVxID0gcmVxO1xuICB0aGlzLnhociA9IHRoaXMucmVxLnhocjtcbiAgdGhpcy50ZXh0ID0gdGhpcy5yZXEubWV0aG9kICE9J0hFQUQnIFxuICAgICA/IHRoaXMueGhyLnJlc3BvbnNlVGV4dCBcbiAgICAgOiBudWxsO1xuICB0aGlzLnNldFN0YXR1c1Byb3BlcnRpZXModGhpcy54aHIuc3RhdHVzKTtcbiAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlcnMgPSBwYXJzZUhlYWRlcih0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gIC8vIGdldEFsbFJlc3BvbnNlSGVhZGVycyBzb21ldGltZXMgZmFsc2VseSByZXR1cm5zIFwiXCIgZm9yIENPUlMgcmVxdWVzdHMsIGJ1dFxuICAvLyBnZXRSZXNwb25zZUhlYWRlciBzdGlsbCB3b3Jrcy4gc28gd2UgZ2V0IGNvbnRlbnQtdHlwZSBldmVuIGlmIGdldHRpbmdcbiAgLy8gb3RoZXIgaGVhZGVycyBmYWlscy5cbiAgdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpO1xuICB0aGlzLnNldEhlYWRlclByb3BlcnRpZXModGhpcy5oZWFkZXIpO1xuICB0aGlzLmJvZHkgPSB0aGlzLnJlcS5tZXRob2QgIT0gJ0hFQUQnXG4gICAgPyB0aGlzLnBhcnNlQm9keSh0aGlzLnRleHQpXG4gICAgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0SGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uKGhlYWRlcil7XG4gIC8vIGNvbnRlbnQtdHlwZVxuICB2YXIgY3QgPSB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gfHwgJyc7XG4gIHRoaXMudHlwZSA9IHR5cGUoY3QpO1xuXG4gIC8vIHBhcmFtc1xuICB2YXIgb2JqID0gcGFyYW1zKGN0KTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikgdGhpc1trZXldID0gb2JqW2tleV07XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnBhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiBzdHIubGVuZ3RoXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cyB8fCAxMjIzID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307XG4gIHRoaXMuX2hlYWRlciA9IHt9O1xuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTsgXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZTtcbiAgICB9XG5cbiAgICBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWl4aW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEFsbG93IGZvciBleHRlbnNpb25cbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbihmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogU2V0IHRpbWVvdXQgdG8gYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24obXMpe1xuICB0aGlzLl90aW1lb3V0ID0gbXM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbGVhciBwcmV2aW91cyB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFib3J0IHRoZSByZXF1ZXN0LCBhbmQgY2xlYXIgcG90ZW50aWFsIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5hYm9ydGVkKSByZXR1cm47XG4gIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gIHRoaXMueGhyLmFib3J0KCk7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtQVBJLUtleSc6ICdmb29iYXInIH0pXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGZpZWxkLCB2YWwpe1xuICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGZpZWxkKSB7XG4gICAgICB0aGlzLnNldChrZXksIGZpZWxkW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0gPSB2YWw7XG4gIHRoaXMuaGVhZGVyW2ZpZWxkXSA9IHZhbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBoZWFkZXIgYGZpZWxkYC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnVuc2V0KCdVc2VyLUFnZW50JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgZGVsZXRlIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbiAgZGVsZXRlIHRoaXMuaGVhZGVyW2ZpZWxkXTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGhlYWRlciBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZ2V0SGVhZGVyID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgQ29udGVudC1UeXBlIHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgneG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCdhcHBsaWNhdGlvbi94bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQWNjZXB0IHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLmpzb24gPSAnYXBwbGljYXRpb24vanNvbic7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdqc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0FjY2VwdCcsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQXV0aG9yaXphdGlvbiBmaWVsZCB2YWx1ZSB3aXRoIGB1c2VyYCBhbmQgYHBhc3NgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFzc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzKXtcbiAgdmFyIHN0ciA9IGJ0b2EodXNlciArICc6JyArIHBhc3MpO1xuICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgc3RyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiogQWRkIHF1ZXJ5LXN0cmluZyBgdmFsYC5cbipcbiogRXhhbXBsZXM6XG4qXG4qICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4qICAgICAucXVlcnkoJ3NpemU9MTAnKVxuKiAgICAgLnF1ZXJ5KHsgY29sb3I6ICdibHVlJyB9KVxuKlxuKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbFxuKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiogQGFwaSBwdWJsaWNcbiovXG5cblJlcXVlc3QucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24odmFsKXtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHZhbCA9IHNlcmlhbGl6ZSh2YWwpO1xuICBpZiAodmFsKSB0aGlzLl9xdWVyeS5wdXNoKHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBXcml0ZSB0aGUgZmllbGQgYG5hbWVgIGFuZCBgdmFsYCBmb3IgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAqIHJlcXVlc3QgYm9kaWVzLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmZpZWxkKCdmb28nLCAnYmFyJylcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd8QmxvYnxGaWxlfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbCl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2gobmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kIGBkYXRhYCwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBxdWVyeXN0cmluZ1xuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG11bHRpcGxlIGRhdGEgXCJ3cml0ZXNcIlxuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuc2VuZCh7IHNlYXJjaDogJ3F1ZXJ5JyB9KVxuICogICAgICAgICAuc2VuZCh7IHJhbmdlOiAnMS4uNScgfSlcbiAqICAgICAgICAgLnNlbmQoeyBvcmRlcjogJ2Rlc2MnIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIG9iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcblxuICAvLyBtZXJnZVxuICBpZiAob2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnID09IHR5cGUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhXG4gICAgICAgID8gdGhpcy5fZGF0YSArICcmJyArIGRhdGFcbiAgICAgICAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIW9iaikgcmV0dXJuIHRoaXM7XG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGlmICgyID09IGZuLmxlbmd0aCkgcmV0dXJuIGZuKGVyciwgcmVzKTtcbiAgaWYgKGVycikgcmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICBmbihyZXMpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB4LWRvbWFpbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcm9zc0RvbWFpbkVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignT3JpZ2luIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicpO1xuICBlcnIuY3Jvc3NEb21haW4gPSB0cnVlO1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHRpbWVvdXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dEVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCd0aW1lb3V0IG9mICcgKyB0aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyk7XG4gIGVyci50aW1lb3V0ID0gdGltZW91dDtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBFbmFibGUgdHJhbnNtaXNzaW9uIG9mIGNvb2tpZXMgd2l0aCB4LWRvbWFpbiByZXF1ZXN0cy5cbiAqXG4gKiBOb3RlIHRoYXQgZm9yIHRoaXMgdG8gd29yayB0aGUgb3JpZ2luIG11c3Qgbm90IGJlXG4gKiB1c2luZyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiIHdpdGggYSB3aWxkY2FyZCxcbiAqIGFuZCBhbHNvIG11c3Qgc2V0IFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIlxuICogdG8gXCJ0cnVlXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbigpe1xuICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgeGhyID0gdGhpcy54aHIgPSBnZXRYSFIoKTtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgaWYgKDAgPT0geGhyLnN0YXR1cykge1xuICAgICAgaWYgKHNlbGYuYWJvcnRlZCkgcmV0dXJuIHNlbGYudGltZW91dEVycm9yKCk7XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgaWYgKHhoci51cGxvYWQpIHtcbiAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihlKXtcbiAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gdGltZW91dFxuICBpZiAodGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIC8vIHF1ZXJ5c3RyaW5nXG4gIGlmIChxdWVyeSkge1xuICAgIHF1ZXJ5ID0gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QocXVlcnkpO1xuICAgIHRoaXMudXJsICs9IH50aGlzLnVybC5pbmRleE9mKCc/JylcbiAgICAgID8gJyYnICsgcXVlcnlcbiAgICAgIDogJz8nICsgcXVlcnk7XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG5cbiAgLy8gQ09SU1xuICBpZiAodGhpcy5fd2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAvLyBib2R5XG4gIGlmICgnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIWlzSG9zdChkYXRhKSkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIHZhciBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVt0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyldO1xuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICAvLyBzZW5kIHN0dWZmXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuICB4aHIuc2VuZChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBJc3N1ZSBhIHJlcXVlc3Q6XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVxdWVzdCgnR0VUJywgJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycsIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB1cmwgb3IgY2FsbGJhY2tcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmRlbCA9IGZ1bmN0aW9uKHVybCwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3Q7XG4iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG4iLCJcbi8qKlxuICogUmVkdWNlIGBhcnJgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge01peGVkfSBpbml0aWFsXG4gKlxuICogVE9ETzogY29tYmF0aWJsZSBlcnJvciBoYW5kbGluZz9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgZm4sIGluaXRpYWwpeyAgXG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIGN1cnIgPSBhcmd1bWVudHMubGVuZ3RoID09IDNcbiAgICA/IGluaXRpYWxcbiAgICA6IGFycltpZHgrK107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGN1cnIgPSBmbi5jYWxsKG51bGwsIGN1cnIsIGFycltpZHhdLCArK2lkeCwgYXJyKTtcbiAgfVxuICBcbiAgcmV0dXJuIGN1cnI7XG59OyJdfQ==
