/*!
 * `deployr` JavaScript Client Library v8.0.5
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
 * Date: 2016-06-29
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.deployr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        "method": "GET",
        "format": "json"
    },

    "/r/repository/script/interrupt": {
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

},{}],2:[function(require,module,exports){
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
  headers: null,
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
 * Header token for CSRF.
 */
var X_XSRF_TOKEN = 'x-xsrf-token';

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
     this.headers    = this.link.headers;
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
   * Shares the cookie and CSRF tokens from a differen `.io()` agent to preserve 
   * session state across `this` request and all requests chained to it.   
   *
   * @method share
   * @return {DeployR} for chaining.
   * @api public   
   */  
  share: function (headers) {   

    if (globalOptions.sticky) {       
      if (globalOptions.headers) {
        this.headers = globalOptions.headers;
      } else {
        if (headers) { 
          this.headers = {
            'Cookie': headers['set-cookie'] || headers['Cookie'],
            'x-xsrf-token': headers[X_XSRF_TOKEN]
          };
          globalOptions.set('headers', this.headers);
        }
      }
    } else {
      this.headers = headers ? {
        'Cookie': headers['set-cookie'] || headers['Cookie'],
        'x-xsrf-token': headers[X_XSRF_TOKEN]
      } : this.headers;
    }

    return this;
  },  

  /**
   * Returns the HTTP headers including the cookie previously sent by the server 
   * with Set-Cookie in addition to the X-XSRF-TOKEN.
   *
   * This value can be passed to `.share(ruser.getHeaders())` of a diffrent
   * `.io()` agent to preserve session state across requests.
   *
   * @method getHeaders
   * @return {Array} The HTTP cookie previously sent by the server with 
   * Set-Cookie.
   * @api public   
   */  
  getHeaders: function () {
    return this.headers;
  }, 

  /**
   * Please use `getHeaders()`.
   *
   * @Deprecated 
   */
  getCookies: function () {
    return this.getHeaders();
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
    var BLACKLIST = ['rinput', 'rinputs', '__headers__'];
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

        // copy over previous arguments and filter out internal __headers__ 
        for (var key in prevArgs) {
           if (key !== '__headers__') { 
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

      Logger.info('io()', api, this.rexq);
      this.logger.info('io()', api, this.req);    

      // send next request
      this.req.end(function(res) {
        //
        // Browsers will not let you set cookies or grab headers as it handles 
        // that for you. Here we store the `X-XSRF-TOKEN` (should it be 
        // available) from the API response for future requests that will 
        // `share` the same authentication HTTP session + CSRF creds.
        //
        if (win && !res.headers['set-cookie']) {
          var r = (res.body && res.body.deployr ? res.body : res);  
          if (r && r.deployr) {
            var headers = {};
            headers[X_XSRF_TOKEN] = r.deployr.response['X-XSRF-TOKEN'];
            if (headers[X_XSRF_TOKEN]) {
              self.share(headers);
            }
          }
        }

        self.share(self.headers || res.headers);       

        // -- log cookies + CSRF across requests --
        if (self.headers) {
          Logger.info('Cookie', api, self.headers.Cookie); 
          self.logger.info('Cookie', api, self.headers.Cookie);
          Logger.info(X_XSRF_TOKEN, api, self.headers[X_XSRF_TOKEN]);
          self.logger.info(X_XSRF_TOKEN, api, self.headers[X_XSRF_TOKEN]); 
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

           // -- include headers in next request in the queue --
           args = merge(args, { __headers__: self.headers });          
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
      headers: this.getHeaders(),
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
          headers: this.getHeaders(),
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
             headers: this.getHeaders(), 
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
         headers  = this.getHeaders();         

    function logout(index) {
      if (index === last) {
        if (!auth) {
          DeployR.new('/r/user/logout')
          .share(headers)
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
        .share(headers)
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

    this.share(args ? args.__headers__ : null);

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

    if (this.headers) {
      for (var prop in this.headers) {
        if (!this.headers.hasOwnProperty(prop)) { continue; }
        if (this.headers[prop]) { req.set(prop, this.headers[prop] || ''); }
      }
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
    if (!globalOptions.sticky)  { globalOptions.set('headers', null); }    

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
          headers: globalOptions.headers          
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
        stream.share(ruser.getHeaders());
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

},{"./apis.json":1,"./lib/emitter":3,"./lib/encoder":4,"./lib/es":5,"./lib/lang":6,"./lib/logger":7,"./lib/queue":9,"./lib/rinput":10,"./lib/rinputs":11,"./lib/selfish":13,"./lib/utils":14,"_process":16,"d.js":17,"fs":15,"superagent":18}],3:[function(require,module,exports){
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

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
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
* @version 0.7.3
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

				, isPending: function(){ return status === 0; }

				, getStatus: function(){ return status; }
			}
		;
		_promise.toSource = _promise.toString = _promise.valueOf = function(){return value === undef ? this : value; };


		function execCallbacks(){
			/*jshint bitwise:false*/
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
	 * @param {*} fn to execute or value to return after given delay
	 * @param {int} [delay] in ms default to 0
	 * @returns {promise}
	 */
	defer.delay = function(fn, delay){
		var d = defer();
		setTimeout(function(){ try{ d.resolve(isFunc(fn) ? fn.apply(null) : fn); }catch(e){ d.reject(e); } }, delay || 0);
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
						args[i] = returnPromises ? promises[i] : v;
						(--c) || d.resolve(args);
					}
					, function(e){
						if( ! returnPromises ){
							d.reject(e);
						} else {
							args[i] = promises[i];
							(--c) || d.resolve(args);
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

	function sequenceZenifier(promise, zenValue){
		return promise.then(isFunc(zenValue) ? zenValue : function(){return zenValue;});
	}
	function sequencePromiseResolver(callerArguments){
		var funcs = slice(callerArguments);
		if ( funcs.length === 1 && isArray(funcs[0]) ) {
			funcs = funcs[0];
		}
		var d = defer(), i=0, l=funcs.length, promise = defer.resolved();
		for(; i<l; i++){
			promise = sequenceZenifier(promise, funcs[i]);
		}
		d.resolve(promise);
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
	* execute given function in sequence passing their returned values to the next one in sequence.
	* You can pass values or promise instead of functions they will be passed in the sequence as if a function returned them.
	* if any function throw an error or a rejected promise the final returned promise will be rejected with that reason.
	* @param {array|...*} [function] list of function to call in sequence receiving previous one as a parameter
	*                     (non function values will be treated as if returned by a function)
	* @returns {promise} of the list of given promises
	*/
	defer.sequence = function(){ return sequencePromiseResolver(arguments); };

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

	/*global define*/
	if ( typeof define === 'function' && define.amd ) {
		define('D.js', [], function(){ return defer; });
	} else if ( typeof module !== undefStr && module.exports ) {
		module.exports = defer;
	} else if ( typeof window !== undefStr ) {
		var oldD = window.D;
		/**
		 * restore global D variable to its previous value and return D to the user
		 * @returns {Function}
		 */
		defer.noConflict = function(){
			window.D = oldD;
			return defer;
		};
		window.D = defer;
	}
})();

}).call(this,require('_process'))

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
},{}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcGlzLmpzb24iLCJkZXBsb3lyLmpzIiwibGliL2VtaXR0ZXIuanMiLCJsaWIvZW5jb2Rlci5qcyIsImxpYi9lcy5qcyIsImxpYi9sYW5nLmpzIiwibGliL2xvZ2dlci5qcyIsImxpYi9vcHRpb25hbC5qcyIsImxpYi9xdWV1ZS5qcyIsImxpYi9yaW5wdXQuanMiLCJsaWIvcmlucHV0cy5qcyIsImxpYi9ydHlwZXMuanMiLCJsaWIvc2VsZmlzaC5qcyIsImxpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2QuanMvbGliL0QuanMiLCJub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzIiwibm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL3JlZHVjZS1jb21wb25lbnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDMWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDajJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiL3IvdXNlci9sb2dpblwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3VzZXIvbG9nb3V0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvdXNlci9hYm91dFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3VzZXIvYXV0b3NhdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci91c2VyL3JlbGVhc2VcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2NyZWF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcG9vbFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcmVjeWNsZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcGluZ1wiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvYWJvdXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2Fib3V0L3VwZGF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvc2F2ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvc2F2ZWFzXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9jbG9zZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZ3JhbnRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2ltcG9ydFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhwb3J0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvY29kZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9zY3JpcHRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvaW50ZXJydXB0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL2NvbnNvbGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvaGlzdG9yeVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9mbHVzaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvZG93bmxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvcmVzdWx0L2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9nZXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS91cGxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCIsXG4gICAgICAgIFwidXBsb2FkXCI6IHRydWVcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS90cmFuc2ZlclwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3B1c2hcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9zYXZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2Uvc3RvcmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2UvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3VwbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3RyYW5zZmVyXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3Rvcnkvd3JpdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS91cGRhdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS9zdG9yZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L2xvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS9kb3dubG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcGFja2FnZS9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wYWNrYWdlL2F0dGFjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvcGFja2FnZS9kZXRhY2hcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9zdWJtaXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2Ivc2NoZWR1bGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvcXVlcnlcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvY2FuY2VsXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3Ivam9iL2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9jcmVhdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9yZW5hbWVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9jb3B5XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvbW92ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3VwZGF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvc2NyaXB0L2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9zY3JpcHQvcmVuZGVyXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NjcmlwdC9pbnRlcnJ1cHRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9hcmNoaXZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvdXBsb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvZG93bmxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9mZXRjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9mZXRjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS91cGxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCIsXG4gICAgICAgIFwidXBsb2FkXCI6IHRydWVcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvdHJhbnNmZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvd3JpdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2RpZmZcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvcmV2ZXJ0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2dyYW50XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2Rvd25sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9jb3B5XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL21vdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9zZXJ2ZXIvaW5mb1wiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfVxufVxuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciB3aW4gICAgICAgICA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyksICAgXG4gICAgcmVxdWVzdCAgICAgPSByZXF1aXJlKCdzdXBlcmFnZW50JyksXG4gICAgRCAgICAgICAgICAgPSByZXF1aXJlKCdkLmpzJyksXG4gICAgZnMgICAgICAgICAgPSByZXF1aXJlKCdmcycpLFxuICAgIGFwaXMgICAgICAgID0gcmVxdWlyZSgnLi9hcGlzLmpzb24nKSwgXG4gICAgRXZlbnRTdHJlYW0gPSByZXF1aXJlKCcuL2xpYi9lcycpLFxuICAgIHV0aWxzICAgICAgID0gcmVxdWlyZSgnLi9saWIvdXRpbHMnKSxcbiAgICBMYW5nICAgICAgICA9IHJlcXVpcmUoJy4vbGliL2xhbmcnKSwgICBcbiAgICBMb2dnZXIgICAgICA9IHJlcXVpcmUoJy4vbGliL2xvZ2dlcicpLCAgIFxuICAgIFF1ZXVlICAgICAgID0gcmVxdWlyZSgnLi9saWIvcXVldWUnKSxcbiAgICBFbWl0dGVyICAgICA9IHJlcXVpcmUoJy4vbGliL2VtaXR0ZXInKSxcbiAgICBlbmNvZGVyICAgICA9IHJlcXVpcmUoJy4vbGliL2VuY29kZXInKSxcbiAgICBCYXNlICAgICAgICA9IHJlcXVpcmUoJy4vbGliL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJJbnB1dCAgICAgID0gcmVxdWlyZSgnLi9saWIvcmlucHV0JyksICAgIFxuICAgIFJJbnB1dHMgICAgID0gcmVxdWlyZSgnLi9saWIvcmlucHV0cycpLFxuICAgIG1lcmdlICAgICAgID0gdXRpbHMubWVyZ2U7XG5cbi8qXG4gKiBUdXJuIGdsb2JhbCBsb2dnaW5nIG9mZiBieSBkZWZhdWx0XG4gKi9cbkxvZ2dlci5zZXRMZXZlbChMb2dnZXIuT0ZGKTtcblxuLypcbiAqIEdsb2JhbCBvcHRpb25zIHRoYXQgcGVyc2lzdCB0aHJvdWdoIGFsbCBEZXBsb3lSIHJlcXVlc3RzLlxuICovXG52YXIgZ2xvYmFsT3B0aW9ucyA9IHsgXG4gIGNvcnM6IGZhbHNlLFxuICBsb2dnaW5nOiBmYWxzZSxcbiAgc3RpY2t5OiBmYWxzZSxcbiAgaGVhZGVyczogbnVsbCxcbiAgaG9zdDogJycsXG4gIGFsbG93U2VsZlNpZ25lZFNTTENlcnQ6IGZhbHNlLFxuICBtYXhSZXF1ZXN0czogbnVsbCwgLy8gbm8gc29ja2V0IHBvb2xpbmcgaW4gaHR0cC5BZ2VudFxuICBldmVudHM6e30sXG4gIHNldDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHsgXG4gICAgaWYgKHByb3AgIT09ICdzZXQnKSB7IFxuICAgICAgaWYgKHByb3AgPT09ICdob3N0JyAmJiB2YWx1ZSkgeyAgICAgICAgIFxuICAgICAgICAgLy8gQmUgbW9yZSBmb3JnaXZpbmcgb24gdGhlIGVudGVyZWQgRGVwbG95UiAnZW5kcG9pbnQnOlxuICAgICAgICAgLy8gICAtIGh0dHAocyk6Ly9kaG9zdDpwb3J0XG4gICAgICAgICAvLyAgIC0gaHR0cChzKTovL2Rob3N0OnBvcnQvZGVwbG95clxuICAgICAgICAgLy8gICAtIGRob3N0OnBvcnRcbiAgICAgICAgIC8vICAgLSBkaG9zdDpwb3J0L2RlcGxveXIgICAgICAgICBcbiAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwvKiR8XFwvKmRlcGxveXJcXC8qJC8sICcnKTtcbiAgICAgICAgIHZhbHVlID0gKG5ldyBSZWdFeHAoJ14oaHR0cHxodHRwcyk6Ly8nLCAnaScpKS50ZXN0KHZhbHVlKSA/IHZhbHVlIDogXG4gICAgICAgICAgICAnaHR0cDovLycgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpc1twcm9wXSA9IHZhbHVlOyBcbiAgICB9IFxuICB9XG59O1xuXG4vKlxuICogVGhlIHRvcC1sZXZlbCBEZXBsb3lSIEFQSSByZXNwb25zZSBlbnRpdGllcy5cbiAqL1xudmFyIFRPUExFVkVMX0VOVElUSUVTID0gW1xuICAndXNlcicsIFxuICAncHJvamVjdCcsIFxuICAnd29ya3NwYWNlJywgXG4gICdleGVjdXRpb24nLCBcbiAgJ2RpcmVjdG9yeScsIFxuICAncmVwb3NpdG9yeScsIFxuICAncGFja2FnZXMnIFxuXTtcblxuLypcbiAqIEhlYWRlciB0b2tlbiBmb3IgQ1NSRi5cbiAqL1xudmFyIFhfWFNSRl9UT0tFTiA9ICd4LXhzcmYtdG9rZW4nO1xuXG4vKlxuICogTm90aWZ5IGdsb2JhbCBJTyBlcnJvciBldmVudHMgYWNjZXNzaWJsZSBieSBhbGwgc3Vic2NyaWJlcnMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5mdW5jdGlvbiByYWlzZUdsb2JhbEVycm9ycyhhcGksIHJlcykge1xuICB2YXIgY29kZSAgICA9IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlIDogcmVzLnN0YXR1cyxcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuXG4gIC8vIC0tIGdsb2JhbCBldmVudHMgaWYgcHJvdmlkZWQgLS1cbiAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzKSB7XG4gICAgaWYgKCFyZXMuZGVwbG95cikge1xuICAgICAgcmVzID0gcmVzLnRleHQ7XG4gICAgfVxuXG4gICAgY29udGV4dCA9IGdsb2JhbE9wdGlvbnMuZXZlbnRzLmN0eCB8fCBjb250ZXh0O1xuXG4gICAgLy8gLS0gZ2VuZXJhbCBnbG9iYWwgZmFpbHVyZSAtLVxuICAgIGlmIChnbG9iYWxPcHRpb25zLmV2ZW50cy5lcnJvcikge1xuICAgICAgZ2xvYmFsT3B0aW9ucy5ldmVudHMuZXJyb3IuYXBwbHkoY29udGV4dCwgW2FwaSwgcmVzXSk7XG4gICAgfVxuXG4gICAgLy8gLS0gSFRUUCBvciBEZXBsb3lSIGdsb2JhbCBlcnJvcnMgLS0gICAgXG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzW2NvZGVdKSB7XG4gICAgICBnbG9iYWxPcHRpb25zLmV2ZW50c1tjb2RlXS5hcHBseShjb250ZXh0LCBbYXBpLCByZXNdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYERlcGxveVJgIHJlcXVlc3QgY2xhc3MgaXMgYSB1dGlsaXR5IHRoYXQgYnJva2VycyBIVFRQIHJlcXVlc3RzIHRocm91Z2ggYSBcbiAqIHNpbXBsaWZpZWQgZmx1aWQgaW50ZXJmYWNlIHRvIERlcGxveVIuXG4gKlxuICogQG1vZHVsZSBkZXBsb3lyXG4gKiBAZm9yIGRlcGxveXJcbiAqL1xudmFyIERlcGxveVIgPSBCYXNlLmV4dGVuZChFbWl0dGVyLCBSSW5wdXRzLCB7XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVwbG95UmAgUmVxdWVzdCBjbGFzcyBpcyBhIHV0aWxpdHkgdGhhdCBicm9rZXJzIEhUVFAgcmVxdWVzdHMgdGhyb3VnaCBcbiAgICogYSBzaW1wbGlmaWVkIGZsdWlkIGludGVyZmFjZSB0byBEZXBsb3lSLlxuICAgKiBcbiAgICogQGNsYXNzIFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgRGVwbG95UiBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpbmsgVGhlIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgdGhlIHByZXZpb3VzIHJlcXVlc3QuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShhcGksIGxpbmspIHtcbiAgICAgRW1pdHRlci5pbml0aWFsaXplLmNhbGwodGhpcywge30pO1xuICBcbiAgICAgdmFyIG9wdHMgPSBnbG9iYWxPcHRpb25zO1xuXG4gICAgIGlmICghYXBpc1thcGldKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBUEkgXCInICsgYXBpICsgJ1wiJyk7IH1cbiAgICBcbiAgICAgdGhpcy5hcGkgICAgICAgID0gbWVyZ2UoeyAnY2FsbCc6IGFwaSB9LCBhcGlzW2FwaV0pOyAgICBcbiAgICAgdGhpcy5saW5rICAgICAgID0gbGluayB8fCB7fTtcbiAgICAgdGhpcy5xICAgICAgICAgID0gdGhpcy5saW5rLnF1ZXVlIHx8IG5ldyBRdWV1ZSgpO1xuICAgICB0aGlzLmRlZmVycmVkICAgPSB0aGlzLmxpbmsuZGVmZXJyZWQgfHwgRCgpO1xuICAgICB0aGlzLmhlYWRlcnMgICAgPSB0aGlzLmxpbmsuaGVhZGVycztcbiAgICAgdGhpcy5sb2dnZXIgICAgID0gTG9nZ2VyLmdldChhcGksIExvZ2dlci5PRkYpOyAvLyB0cmFuc2FjdGlvbi1sZXZlbCBsb2dnaW5nXG4gICAgIHRoaXMucGFyYW1zICAgICA9IHt9O1xuICAgICB0aGlzLmlucHV0cyAgICAgPSBbXTsgLy8gcmlucHV0cyBsaXN0IFxuICAgICB0aGlzLm91dHB1dHMgICAgPSBbXTsgLy8gcm91dHB1dCBvYmplY3QgbGlzdFxuICAgICB0aGlzLnJzdHJlYW0gICAgPSBmYWxzZTtcbiAgICAgdGhpcy5kZWxheWVkICAgID0gZmFsc2U7XG4gICAgIHRoaXMuZ2xvYmFsRXZ0cyA9IHRydWU7IC8vIHN1cHByZXNzfHJhaXNlIGdsb2JhbCBldmVudHMgZm90IHRoaXMgYGlvYCAgICAgXG4gICAgIHRoaXMuZmlsZSAgICAgICA9IG51bGw7IFxuICAgICB0aGlzLmVudGl0aWVzICAgPSBudWxsOyBcbiAgICAgdGhpcy5pb0ZpbHRlciAgID0gZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9O1xuXG4gICAgIC8vIHByZXNldCBkZXBsb3lyJ3MgYXNzaWduZWQgcmVzcG9uc2UgZm9ybWF0IGZvciBgdGhpc2AgYXBpXG4gICAgIHRoaXMuZGF0YSh7IGZvcm1hdDogdGhpcy5hcGkuZm9ybWF0IH0pO1xuXG4gICAgIC8vIHdyYXAgc3VwZXJhZ2VudCBmb3IgdGhlIGhlYXZ5IGxpZnRpbmcgICAgIFxuICAgICB0aGlzLnJlcSA9IFxuICAgICAgICByZXF1ZXN0W3RoaXMuYXBpLm1ldGhvZC50b0xvd2VyQ2FzZSgpXShvcHRzLmhvc3QgKyAnL2RlcGxveXInICsgYXBpKTtcbiAgICAgdGhpcy5yZXEudGltZW91dCgyMCAqIDYwICogMTAwMCk7IC8vIGRlZmF1bHQgdGltZW91dCAtLT4gMjAgbWludXRlc1xuXG4gICAgIC8vIEFsbCBDT1JTIGRlcGxveXIgY2FsbHMgcmVxdWlyZSBzdGlja3kgc2Vzc2lvbnNcbiAgICAgaWYgKHdpbiAmJiBnbG9iYWxPcHRpb25zLmNvcnMpIHsgdGhpcy5yZXEud2l0aENyZWRlbnRpYWxzKCk7IH1cblxuICAgICAvLyBOb2RlLmpzIC0gYWNjZXNzIGFuIFNTTCBlbmRwb2ludCB3aXRoIHNlbGYgc2lnbmVkIGNlcnRzIGZvciB0ZXN0aW5nfGRldlxuICAgICBpZiAoIXdpbiAmJiBnbG9iYWxPcHRpb25zLmFsbG93U2VsZlNpZ25lZFNTTENlcnQpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJzsgICAgICAgIFxuICAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJpbmRzIHRoZSBzY29wZSBjb250ZXh0IGZvciB0aGUgY29uZmlndXJlZCBgLmVuZCgpYCBhbmQgYC5lcnJvcigpYCBldmVudCAgICBcbiAgICogaGFuZGxlciBjYWxsYmFja3Mgb24gdGhpcyByZXF1ZXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGN0eFxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCBUaGUgYHRoaXNgIG9iamVjdCBmb3IgdGhlIGNvbmZpZ3VyZWQgYC5lbmQoKWAgYW5kXG4gICAqIGAuZXJyb3IoKWAgZXZlbnQgaGFuZGxlcnMgb24gdGhpcyByZXF1ZXN0LlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gXG4gIGN0eDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICB0aGlzLnNjb3BlID0gY29udGV4dCB8fCB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN1cHByZXNzIG9yIHJhaXNlIGdsb2JhbCBldmVudHMgZm9yIHRoaXMgYGlvYCByZXF1ZXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGdsb2JhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJhaXNlIGB0cnVlYCB0byByYWlzZSBnbG9iYWwgZXZlbnRzLCBgZmFsc2VgIHRvIHN1cHJlc3MgXG4gICAqIGV2ZW50IGZpcmluZyBnbG9iYWxseS5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gIFxuICBnbG9iYWw6IGZ1bmN0aW9uKHJhaXNlKSB7XG4gICAgdGhpcy5nbG9iYWxFdnRzID0gTGFuZy5pc0Jvb2xlYW4ocmFpc2UpID8gcmFpc2UgOiB0aGlzLmdsb2JhbEV2dHM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgIFxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBkZXRhaWxzIGFib3V0IHVzZXIuXG4gICAqICAgXG4gICAqIEBtZXRob2QgYWJvdXRcbiAgICogQHJldHVybiB7T2JqZWN0fSBkZXRhaWxzIGFib3V0IHVzZXIgb3RoZXJ3aWVzIGBudWxsYC5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGFib3V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSB0aGlzLnJlcS5yZXM7XG5cbiAgICByZXR1cm4gdGhpcy5hcGlbJ2NhbGwnXSA9PT0gJy9yL3VzZXIvbG9naW4nICYmIHJlc3BvbnNlID8gXG4gICAgICAgICAgIHJlc3BvbnNlLmJvZHkuZ2V0KCd1c2VyJykgOiBudWxsO1xuICB9LCAgXG5cbiAgLyoqXG4gICAqIFNoYXJlcyB0aGUgY29va2llIGFuZCBDU1JGIHRva2VucyBmcm9tIGEgZGlmZmVyZW4gYC5pbygpYCBhZ2VudCB0byBwcmVzZXJ2ZSBcbiAgICogc2Vzc2lvbiBzdGF0ZSBhY3Jvc3MgYHRoaXNgIHJlcXVlc3QgYW5kIGFsbCByZXF1ZXN0cyBjaGFpbmVkIHRvIGl0LiAgIFxuICAgKlxuICAgKiBAbWV0aG9kIHNoYXJlXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgc2hhcmU6IGZ1bmN0aW9uIChoZWFkZXJzKSB7ICAgXG5cbiAgICBpZiAoZ2xvYmFsT3B0aW9ucy5zdGlja3kpIHsgICAgICAgXG4gICAgICBpZiAoZ2xvYmFsT3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGdsb2JhbE9wdGlvbnMuaGVhZGVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChoZWFkZXJzKSB7IFxuICAgICAgICAgIHRoaXMuaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdDb29raWUnOiBoZWFkZXJzWydzZXQtY29va2llJ10gfHwgaGVhZGVyc1snQ29va2llJ10sXG4gICAgICAgICAgICAneC14c3JmLXRva2VuJzogaGVhZGVyc1tYX1hTUkZfVE9LRU5dXG4gICAgICAgICAgfTtcbiAgICAgICAgICBnbG9iYWxPcHRpb25zLnNldCgnaGVhZGVycycsIHRoaXMuaGVhZGVycyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycyA/IHtcbiAgICAgICAgJ0Nvb2tpZSc6IGhlYWRlcnNbJ3NldC1jb29raWUnXSB8fCBoZWFkZXJzWydDb29raWUnXSxcbiAgICAgICAgJ3gteHNyZi10b2tlbic6IGhlYWRlcnNbWF9YU1JGX1RPS0VOXVxuICAgICAgfSA6IHRoaXMuaGVhZGVycztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgIFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBIVFRQIGhlYWRlcnMgaW5jbHVkaW5nIHRoZSBjb29raWUgcHJldmlvdXNseSBzZW50IGJ5IHRoZSBzZXJ2ZXIgXG4gICAqIHdpdGggU2V0LUNvb2tpZSBpbiBhZGRpdGlvbiB0byB0aGUgWC1YU1JGLVRPS0VOLlxuICAgKlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBwYXNzZWQgdG8gYC5zaGFyZShydXNlci5nZXRIZWFkZXJzKCkpYCBvZiBhIGRpZmZyZW50XG4gICAqIGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZSBhY3Jvc3MgcmVxdWVzdHMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0SGVhZGVyc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIEhUVFAgY29va2llIHByZXZpb3VzbHkgc2VudCBieSB0aGUgc2VydmVyIHdpdGggXG4gICAqIFNldC1Db29raWUuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGdldEhlYWRlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkZXJzO1xuICB9LCBcblxuICAvKipcbiAgICogUGxlYXNlIHVzZSBgZ2V0SGVhZGVycygpYC5cbiAgICpcbiAgICogQERlcHJlY2F0ZWQgXG4gICAqL1xuICBnZXRDb29raWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SGVhZGVycygpO1xuICB9LCAgICAgIFxuXG4gIGRlbGF5OiBmdW5jdGlvbiAobXMpIHtcbiAgICAvLyBUT0RPOiBzdXBwb3J0IGRlbGF5ZWQgcmVxdWVzdHMgYmFzZWQgb24gbXMgZm9yIG5vdyB0aGlzIGlzIGp1c3QgYSBwYXVzZS5cbiAgICB0aGlzLmRlbGF5ZWQgPSAhaXNOYU4ocGFyc2VGbG9hdChtcykpICYmIGlzRmluaXRlKG1zKSA/IG1zIDogdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LCAgIFxuXG4gIC8qKlxuICAgKiBVbndpbmQgdGhlIHF1ZXVlIGNoYWluIGNsZWFyaW5nIHJlcXVlc3RzIHRoYXQgbWlnaHQgaGF2ZSBkZWxheXMgYXR0YWNoZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZHJhaW5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvclxuICAgKiBcInJlamVjdFwiIGNhbGxiYWNrLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgZHJhaW46IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlbGF5ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnEuZmx1c2goKTsgXG5cbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuICB9LCAgIFxuXG4gIC8qKlxuICAgKiBUaGUgYC5wcm9taXNlKClgIG1ldGhvZCByZXR1cm5zIGEgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIFByb21pc2UgdGhhdCBpcyBcbiAgICogcmVzb2x2ZWQgb25jZSBhbGwgRGVwbG95UiBgLmlvKClgIHJlcXVlc3RzIGhhdmUgZW5kZWQuXG4gICAqICAgXG4gICAqIEBtZXRob2QgcHJvbWlzZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2Ugd3JhcHBpbmcgdGhlIHJlc29sdXRpb24gb2YgZWl0aGVyIFwicmVzb2x2ZVwiIG9yXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgICAgXG4gIHByb21pc2U6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWQucHJvbWlzZTtcbiAgfSxcblxuICAvKipcbiAgICogQWJvcnQgdGhlIERlcGxveVIgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBhYm9ydCAgXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICBcbiAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlcS5hYm9ydCgpO1xuICAgIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgICB0aGlzLmRlZmVycmVkLnJlamVjdCh0aGlzLl9oYW5kbGVFcnJvcih7IFxuICAgICAgICBzdGF0dXM6ICdhYm9ydCcsXG4gICAgICAgIHRleHQ6ICdEZXBsb3lSIHJlcXVlc3QgYWJvcnRlZC4nXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAvKipcbiAgKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICAqXG4gICogQG1ldGhvZCB0aW1lb3V0ICBcbiAgKiBAcGFyYW0ge051bWJlcn0gbXNcbiAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgKiBAYXBpIHB1YmxpY1xuICAqLyAgXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIChtcykge1xuICAgIHRoaXMucmVxLnRpbWVvdXQobXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAvKipcbiAgKiBUdXJuIGxvZ2dpbmcgb24gZm9yIHRoZSBzcGVjaWZpYyB0cmFuc2FjdGlvbi5cbiAgKlxuICAqIEBtZXRob2QgbG9nXG4gICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICogQGFwaSBwdWJsaWNcbiAgKi8gXG4gIGxvZzogZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgdGhpcy5sb2dnZXIuc2V0TGV2ZWwobGV2ZWwgfHwgTG9nZ2VyLkRFQlVHKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHN1Y2Nlc3NmdWwgcmVzcG9uc2VzIHRvIGNvbnRhaW4gb25seSBhIHRvcC1sZXZlbCBEZXBsb3lSIEFQSSBcbiAgICogcmVzcG9uc2UgZW50aXRpZXM6XG4gICAqIC0gJ3VzZXInXG4gICAqIC0gJ3Byb2plY3QnXG4gICAqIC0gJ3dvcmtzcGFjZScgXG4gICAqIC0gJ2V4ZWN1dGlvbicgXG4gICAqIC0gJ2RpcmVjdG9yeScgXG4gICAqIC0gJ3JlcG9zaXRvcnknXG4gICAqIC0gJ3BhY2thZ2VzJyBcbiAgICogICBcbiAgICogQG1ldGhvZCBlbnRpdHlcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBlbnRpdHk6IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICB0aGlzLmVudGl0aWVzID0gdXRpbHMuaW5BcnJheShUT1BMRVZFTF9FTlRJVElFUywgZW50aXR5KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSByZXF1ZXN0IGRhdGEgYmVpbmcgc2VudCB0byBhIERlcGxveVIgQVBJLiBcbiAgICpcbiAgICogQG1ldGhvZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBvYmplY3QgbGl0ZXJhbCBjb25maWd1cmF0aW9uIGhhc2guIFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGRhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307ICAgIFxuXG4gICAgLy8gcmVtb3ZlIGFueSBpbmxpbmVkIHJpbnB1dChzKSBhbmQgYXR0YWNoIHRoZW0gdG8gdGhlIHJpbnB1dChzKSBwcm9wZXJ0eVxuICAgIGlmIChkYXRhLnJpbnB1dCB8fCBkYXRhLnJpbnB1dHMpIHtcbiAgICAgIHRoaXMucmlucHV0KGRhdGEucmlucHV0KTtcbiAgICAgIHRoaXMucmlucHV0cyhkYXRhLnJpbnB1dHMpO1xuICAgIH0gXG5cbiAgICAvLyByZW1vdmUgYW55IGByZXNlcnZlZGAgdmFsdWVzIHRoYXQgY291bGQgaGF2ZSBiZWVuIHBhc3NlZCBieSBtaXN0YWtlXG4gICAgdmFyIEJMQUNLTElTVCA9IFsncmlucHV0JywgJ3JpbnB1dHMnLCAnX19oZWFkZXJzX18nXTtcbiAgICBCTEFDS0xJU1QuZm9yRWFjaChmdW5jdGlvbihwYXJhbSkgeyBkZWxldGUgZGF0YVtwYXJhbV07IH0pOyAgXG5cbiAgICB0aGlzLnBhcmFtcyA9IG1lcmdlKHRoaXMucGFyYW1zLCBkYXRhKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBhIGZpbGUgdG8gYmUgdXBsb2FkZWQuIFxuICAgKlxuICAgKiBAbWV0aG9kIGF0dGFjaFxuICAgKiBAcGFyYW0ge0ZpbGV8QmxvYnxwYXRofSBmaWxlIFRoZSBmaWxlIHRvIGJlIGF0dGFjaGVkIGZvciBhbiB1cGxvYWQuIEZvciBcbiAgICogQnJvd3NlciBlbnZpcm9ubWVudHMgdGhlIEhUTUw1IEZpbGV8QmxvYiBpcyB1c2VkLiBGb3IgdGhlIE5vZGUuanMgXG4gICAqIGVudmlyb25tZW50LCBhIGZpbGUgcGF0aCBpcyBhY2NlcHRlZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIChvcHRpb25hbCkgdGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gYmUgdXBsb2FkZWQuIFxuICAgKiBUaGlzIG5hbWUgZG9lcyBub3QgaGF2ZSB0byBtYXRjaCB0aGUgYWN0dWFsIHNvdXJjZSBmaWxlbmFtZS5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBhdHRhY2g6IGZ1bmN0aW9uIChmaWxlLCBmaWxlbmFtZSkge1xuICAgIGlmICh0aGlzLmFwaS51cGxvYWQpIHtcbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG5cbiAgICAgIC8vIG9wdGlvbmFsIGZpbGVuYW1lIGhlcmUgZm9yIGNvbnZlbmllbmNlXG4gICAgICBpZiAoZmlsZW5hbWUpIHsgdGhpcy5kYXRhKCB7IGZpbGVuYW1lOiBmaWxlbmFtZSB9ICk7IH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogU3VwcG9ydGVkIG9ubHkgaW4gTm9kZS5qcywgdGhpcyBtZXRob2Qgd29ya3MgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgXG4gICAqIGF0dGFjaCBtZXRob2QgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZmlsZSBzaG91bGQgYmUgcmVhZCBpbiBhcyBhIHJlYWRhYmxlIFxuICAgKiBzdHJlYW0gZHVyaW5nIGEgZmlsZSB1cGxvYWQuXG4gICAqXG4gICAqIEBtZXRob2Qgc3RyZWFtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIChvcHRpb25hbCkgdGhlIFJlYWRhYmxlIFN0cmVhbSBvcHRpb25zIGhhc2guXG4gICAqICBgYGBcbiAgICogICAgeyBmbGFnczogJ3InLFxuICAgKiAgICAgIGVuY29kaW5nOiBudWxsLFxuICAgKiAgICAgIGZkOiBudWxsLFxuICAgKiAgICAgIG1vZGU6IDA2NjYsXG4gICAqICAgICAgYXV0b0Nsb3NlOiB0cnVlXG4gICAqICAgIH1cbiAgICogYGBgXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgc3RyZWFtOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yc3RyZWFtID0gKCF3aW4gJiYgdGhpcy5hcGkudXBsb2FkKTsgLy9ub2RlanMgb25seVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgZmlsdGVyKM67KWAgbWV0aG9kIHJlbW92ZXMgdGhpcyBEZXBsb3lSIHJlcXVlc3QgZnJvbSB0aGUgcmVxdWVzdCBjaGFpblxuICAgKiBpZiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gZG9lcyAqbm90KiBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IGl0LlxuICAgKlxuICAgKiBFeGFtcGxlczpcbiAgICpcbiAgICogYGBgXG4gICAqIC8vIFJlbW92ZSBmcm9tIHRoZSByZXF1ZXN0IGNoYWluXG4gICAqIC5maWx0ZXIoZnVuY3Rpb24oYXJncykge1xuICAgKiAgICByZXR1cm4gNSA+IDEwO1xuICAgKiB9KVxuICAgKlxuICAgKiAvLyBLZWVwIGluIHRoZSByZXF1ZXN0IGNoYWluXG4gICAqIC5maWx0ZXIoZnVuY3Rpb24oYXJncykge1xuICAgKiAgICByZXR1cm4gMTAgPiA1O1xuICAgKiB9KSAgIFxuICAgKiBgYGBcbiAgICpcbiAgICogQG1ldGhvZCBmaWx0ZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gzrsgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAoZm4pIHtcbiAgICAgIHRoaXMuaW9GaWx0ZXIgPSBmdW5jdGlvbihwcmV2QXJncykge1xuICAgICAgICB2YXIgYXJncyA9IHt9LCBrZWVwO1xuXG4gICAgICAgIC8vIGNvcHkgb3ZlciBwcmV2aW91cyBhcmd1bWVudHMgYW5kIGZpbHRlciBvdXQgaW50ZXJuYWwgX19oZWFkZXJzX18gXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcmV2QXJncykge1xuICAgICAgICAgICBpZiAoa2V5ICE9PSAnX19oZWFkZXJzX18nKSB7IFxuICAgICAgICAgICAgICBhcmdzW2tleV0gPSBwcmV2QXJnc1trZXldO1xuICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZWVwID0gZm4oYXJncyk7XG4gICAgICAgIHJldHVybiAoa2VlcCB8fCBrZWVwID09PSBmYWxzZSA/IGtlZXAgOiB0cnVlKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICBcbiAgXG4gIC8qKlxuICAgKiBBY3RzIGFzIGEgZmluYWxseSBzdGF0ZW1lbnQgYWxsb3dpbmcgeW91IHRvIGV4ZWN1dGUgXCJjbGVhbnVwXCIgdHlwZSB0YXNrcyBcbiAgICogaW4gYSByZXF1ZXN0IGNoYWluLiBJdCBhcnJhbmdlcyBmb3IgY2xlYW51cCB0byBiZSBjYWxsZWQsIHdpdGggbm8gXG4gICAqIGFyZ3VtZW50cywgd2hlbiB0aGUgRGVwbG95UiByZXF1ZXN0IGNoYWluIGlzIGVpdGhlciBjb21wbGV0ZWx5IGZ1bGZpbGxlZCBcbiAgICogb3IgcmVqZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZW5zdXJlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGVuc3VyZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5kZWZlcnJlZC5wcm9taXNlLmVuc3VyZShmbik7XG5cbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuICB9LFxuICAgICAgXG4gIC8qKlxuICAgKiBUaGUgZ2VuZXJhbCBmYWlsdXJlIGNhbGxiYWNrLiBJZiBjYWxsZWQsIGFsbCBEZXBsb3lSIGVycm9ycyBmb3IgdGhpcyBcbiAgICogdHJhbnNhY3Rpb24gd2lsbCBiZSByZXR1cm5lZCBoZXJlIHdoZW4gcmFpc2VkLlxuICAgKlxuICAgKiBAbWV0aG9kIGVycm9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBlcnJvcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpcy5vbignZXJyb3InLCBmbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogU3RyZWFtIHRoZSBEZXBsb3lSIHJlc3BvbnNlIGludG8gdGhlIHBpcGUuIEl0IGlzIGltcG9ydGFudCB0byBub3RlIHRoYXQgaWYgXG4gICAqIHRoZSBgLnBpcGUoKWAgbWV0aG9kIGlzIG5ldmVyIGNhbGxlZCB0aGUgcmVxdWVzdCB3aWxsIG5vdCBiZSBzZW50LlxuICAgKlxuICAgKiBUaGUgYC5waXBlKClgIG1ldGhvZCBzaG91bGQgYmUgYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byBgLmVuZCgpYCBhbmQgXG4gICAqIG5ldmVyIGFsb25nIHNpZGUgb2YgaXQuIGAucGlwZSgpYCBhbmQgYC5lbmQoKWAgYXJlIGFuIGVpdGhlci1vci5cbiAgICpcbiAgICogQG1ldGhvZCBwaXBlXG4gICAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gQSBkZXN0aW5hdGlvbiBTdHJlYW0uXG4gICAqIEByZXR1cm4ge1N0cmVhbX0gVGhlIHBhc3NlZCBpbiBkZXN0aW5hdGlvbiBzdHJlYW0gdG8gYmUgdXNlZCBmb3IgYWRkaXRpb25hbCBcbiAgICogcGlwaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcGlwZTogZnVuY3Rpb24gKGRlc3QpIHtcbiAgICB2YXIgcSAgID0gdGhpcy5xLFxuICAgICAgICBhcGkgPSB0aGlzLmFwaTsgICAgICAgIFxuXG4gICAgcS5hZGQoZnVuY3Rpb24ocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKSB7ICAgIFxuICAgICAgLy8gYnJha2UgdGhlIGNhbGwgY2hhaW4gb24gZXJyb3IgICAgICBcbiAgICAgIGlmIChlcnJvcikgeyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KGVycm9yKTsgICAgICBcbiAgICAgICAgcS5mbHVzaChyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpOyAvLyBkcmFpbiB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9wcmVwUmVxdWVzdChyZXNwb25zZUNoYWluLCBwcmV2QXJncyk7XG5cbiAgICAgIExvZ2dlci5pbmZvKCdwaXBlKCknLCBhcGksIHRoaXMucmVxKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ3BpcGUoKScsIGFwaSwgdGhpcy5yZXEpOyAgIFxuXG4gICAgICB2YXIgc3RyZWFtID0gdGhpcy5yZXEucGlwZShkZXN0KTtcbiAgICAgIHEueWllbGQodHJ1ZSk7XG4gICAgICBzdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKCkgeyB9KTsgICAgXG4gICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uKCkgeyB9KTsgICAgIFxuICAgICAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24oKSB7IH0pOyAgICAgIFxuICAgIH0sIHRoaXMpO1xuICBcbiAgICBpZiAocS5zaXplKCkgPD0gMSkgeyBxLmZsdXNoKCk7IH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBpcyByZWFkeSB0byBiZSBzZW50IHRvIERlcGxveVIuIEl0IGlzIGltcG9ydGFudCBcbiAgICogdG8gbm90ZSB0aGF0IGlmIHRoZSBgLmVuZCgpYCBtZXRob2QgaXMgbmV2ZXIgY2FsbGVkIHRoZSByZXF1ZXN0IHdpbGwgbm90IGJlXG4gICAqIHNlbnQuXG4gICAqXG4gICAqIEBtZXRob2QgZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IM67IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gXG4gIGVuZDogZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHNlbGYgICAgID0gdGhpcyxcbiAgICAgICAgcSAgICAgICAgPSB0aGlzLnEsXG4gICAgICAgIGFwaSAgICAgID0gdGhpcy5hcGksXG4gICAgICAgIGFyZ3MgICAgID0gbnVsbCxcbiAgICAgICAgZW50aXRpZXMgPSAgdGhpcy5lbnRpdGllcztcblxuICAgIHEuYWRkKGZ1bmN0aW9uKHJlc3BvbnNlQ2hhaW4sIGVycm9yLCBwcmV2QXJncykge1xuICAgICAgLy8gYnJlYWsgdGhlIGNhbGwgY2hhaW4gb24gZXJyb3IgICAgICBcbiAgICAgIGlmIChlcnJvcikgeyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KGVycm9yKTsgICAgICAgIFxuICAgICAgICBxLmZsdXNoKHJlc3BvbnNlQ2hhaW4sIGVycm9yLCBwcmV2QXJncyk7IC8vIGRyYWluIHRoZSBxdWV1ZVxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGZpbHRlciBvdXQgcmVzcG9uc2VzICAgIFxuICAgICAgaWYgKCF0aGlzLmlvRmlsdGVyKHByZXZBcmdzKSkge1xuICAgICAgICBpZiAocS5zaXplKCkgPT09IDApIHsgXG4gICAgICAgICAgdGhpcy5kZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlQ2hhaW4gfHwgcHJldkFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcS5mbHVzaChyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpOyAvLyBkcmFpbiB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9wcmVwUmVxdWVzdChyZXNwb25zZUNoYWluLCBwcmV2QXJncyk7XG5cbiAgICAgIExvZ2dlci5pbmZvKCdpbygpJywgYXBpLCB0aGlzLnJleHEpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnaW8oKScsIGFwaSwgdGhpcy5yZXEpOyAgICBcblxuICAgICAgLy8gc2VuZCBuZXh0IHJlcXVlc3RcbiAgICAgIHRoaXMucmVxLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQnJvd3NlcnMgd2lsbCBub3QgbGV0IHlvdSBzZXQgY29va2llcyBvciBncmFiIGhlYWRlcnMgYXMgaXQgaGFuZGxlcyBcbiAgICAgICAgLy8gdGhhdCBmb3IgeW91LiBIZXJlIHdlIHN0b3JlIHRoZSBgWC1YU1JGLVRPS0VOYCAoc2hvdWxkIGl0IGJlIFxuICAgICAgICAvLyBhdmFpbGFibGUpIGZyb20gdGhlIEFQSSByZXNwb25zZSBmb3IgZnV0dXJlIHJlcXVlc3RzIHRoYXQgd2lsbCBcbiAgICAgICAgLy8gYHNoYXJlYCB0aGUgc2FtZSBhdXRoZW50aWNhdGlvbiBIVFRQIHNlc3Npb24gKyBDU1JGIGNyZWRzLlxuICAgICAgICAvL1xuICAgICAgICBpZiAod2luICYmICFyZXMuaGVhZGVyc1snc2V0LWNvb2tpZSddKSB7XG4gICAgICAgICAgdmFyIHIgPSAocmVzLmJvZHkgJiYgcmVzLmJvZHkuZGVwbG95ciA/IHJlcy5ib2R5IDogcmVzKTsgIFxuICAgICAgICAgIGlmIChyICYmIHIuZGVwbG95cikge1xuICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIGhlYWRlcnNbWF9YU1JGX1RPS0VOXSA9IHIuZGVwbG95ci5yZXNwb25zZVsnWC1YU1JGLVRPS0VOJ107XG4gICAgICAgICAgICBpZiAoaGVhZGVyc1tYX1hTUkZfVE9LRU5dKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2hhcmUoaGVhZGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5zaGFyZShzZWxmLmhlYWRlcnMgfHwgcmVzLmhlYWRlcnMpOyAgICAgICBcblxuICAgICAgICAvLyAtLSBsb2cgY29va2llcyArIENTUkYgYWNyb3NzIHJlcXVlc3RzIC0tXG4gICAgICAgIGlmIChzZWxmLmhlYWRlcnMpIHtcbiAgICAgICAgICBMb2dnZXIuaW5mbygnQ29va2llJywgYXBpLCBzZWxmLmhlYWRlcnMuQ29va2llKTsgXG4gICAgICAgICAgc2VsZi5sb2dnZXIuaW5mbygnQ29va2llJywgYXBpLCBzZWxmLmhlYWRlcnMuQ29va2llKTtcbiAgICAgICAgICBMb2dnZXIuaW5mbyhYX1hTUkZfVE9LRU4sIGFwaSwgc2VsZi5oZWFkZXJzW1hfWFNSRl9UT0tFTl0pO1xuICAgICAgICAgIHNlbGYubG9nZ2VyLmluZm8oWF9YU1JGX1RPS0VOLCBhcGksIHNlbGYuaGVhZGVyc1tYX1hTUkZfVE9LRU5dKTsgXG4gICAgICAgIH1cblxuICAgICAgICBlcnJvciA9IHNlbGYuX2hhbmRsZUVycm9yKHJlcyk7XG4gICAgICAgIHZhciBkcmVzID0gKHJlcy5ib2R5ICYmIHJlcy5ib2R5LmRlcGxveXIgPyByZXMuYm9keSA6IHJlcyk7ICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAgIHNlbGYuaW5wdXRzID0gW107XG4gICAgICAgIHNlbGYub3V0cHV0cyA9IFtdO1xuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgLy8gLS0gTG9nIGdsb2JhbCArIHRyYW5zYWN0aW9uIGxvZyAtLVxuICAgICAgICAgICBMb2dnZXIuaW5mbygnZW5kKCknLCBhcGksIGRyZXMsIHJlcyk7XG4gICAgICAgICAgIHNlbGYubG9nZ2VyLmluZm8oJ2VuZCgpJywgYXBpLCBkcmVzLCByZXMpO1xuXG4gICAgICAgICAgIC8vIC0tIHdhbGsgcmVzcG9uc2UgZm9yIHRvcC1sZXZlbCBlbnRpdHkgcmVzcG9uc2UgYXNzaWdubWVudCAtLSAgICAgICAgXG4gICAgICAgICAgIGlmIChlbnRpdGllcykgeyBkcmVzID0gZHJlcy5kZXBsb3lyLnJlc3BvbnNlW2VudGl0aWVzXSB8fCBkcmVzOyB9XG5cbiAgICAgICAgICAgZHJlcy5nZXQgPSBmdW5jdGlvbihrZXkpIHsgXG4gICAgICAgICAgICAgIHJldHVybiB1dGlscy5nZXQoZHJlcy5kZXBsb3lyLnJlc3BvbnNlLCBrZXkpOyBcbiAgICAgICAgICAgfTtcblxuICAgICAgICAgICBkcmVzLndvcmtzcGFjZSA9IGZ1bmN0aW9uKG5hbWUpIHsgXG4gICAgICAgICAgICAgIHJldHVybiB1dGlscy53b3Jrc3BhY2UoZHJlcy5kZXBsb3lyLnJlc3BvbnNlLCBuYW1lKTsgXG4gICAgICAgICAgIH07XG5cbiAgICAgICAgICAgLy8gLS0gY2FsbGJhY2sgLS1cbiAgICAgICAgICAgaWYgKGZuKSB7IGFyZ3MgPSBmbi5hcHBseShzZWxmLnNjb3BlLCBbZHJlcywgcmVzcG9uc2VDaGFpbl0pO31cblxuICAgICAgICAgICAvLyAtLSBub3RpZnkgdGhhdCB0aGUgcXVldWUgaGFzIGJlZW4gZHJhaW5lZC4uLiAtLVxuICAgICAgICAgICBpZiAocS5zaXplKCkgPT09IDApIHsgXG4gICAgICAgICAgICAgc2VsZi5fY2xlYXIoKTtcbiAgICAgICAgICAgICBzZWxmLmRlZmVycmVkLnJlc29sdmUocmVzcG9uc2VDaGFpbiB8fCBkcmVzKTtcbiAgICAgICAgICAgfSAgICAgICAgICBcblxuICAgICAgICAgICAvLyAtLSBpbmNsdWRlIGhlYWRlcnMgaW4gbmV4dCByZXF1ZXN0IGluIHRoZSBxdWV1ZSAtLVxuICAgICAgICAgICBhcmdzID0gbWVyZ2UoYXJncywgeyBfX2hlYWRlcnNfXzogc2VsZi5oZWFkZXJzIH0pOyAgICAgICAgICBcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgcS55aWVsZChmYWxzZSk7XG4gICAgICAgIHEuZmx1c2goZHJlcywgZXJyb3IsIGFyZ3MpOyAvLyBwYXNzIHJlc3VsdHxlcnJvcnxhcmdzIHRvIG5leHQgXG4gICAgICB9KTtcblxuICAgICAgcS55aWVsZCh0cnVlKTtcbiAgICB9LCB0aGlzLCB0aGlzLmRlbGF5ZWQpO1xuICBcbiAgICBpZiAoIXRoaXMuZGVsYXllZCAmJiBxLnNpemUoKSA8PSAxKSB7IHEuZmx1c2goKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sIFxuXG4gIC8qKiBcbiAgICogQWRkIGFuIGFkZGl0aW9uYWwgSU8gcmVxdWVzdCB0byB0aGUgZXhzaXN0aW5nIHNlcXVlbnRpYWwgcmVxdWVzdCBjaGFpbi5cbiAgICpcbiAgICogQG1ldGhvZCBpb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpIE9uZSBvZiB0aGUgc3VwcG9ydGVkIERlcGxveVIgQVBJcy5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gICBcbiAgaW86IGZ1bmN0aW9uIChhcGkpIHsgICAgXG4gICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSwgeyBcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpLFxuICAgICAgcXVldWU6IHRoaXMucSwgXG4gICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKiBcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGFkZGluZyBhbiBhZGRpdGlvbmFsIHNjcmlwdCBleGVjdXRpb24gdG8gdGhlIFxuICAgKiBleHNpc3Rpbmcgc2VxdWVudGlhbCByZXF1ZXN0IGNoYWluLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcmlwdFxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gQXJndW1lbnRzIHRvIGRlZmluZSB0aGUgZnVsbHkgcXVhbGlmaWVkIHNjcmlwdCBmb3IgXG4gICAqIGV4ZWN1dGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgc2NyaXB0OiBmdW5jdGlvbigpIHtcbiAgICAgdmFyIGFyZ3MgPSB1dGlscy5zaWduYXR1cmUoYXJndW1lbnRzKSxcbiAgICAgICAgIG9wdHMgPSBhcmdzLm9wdHMsXG4gICAgICAgICBhcGkgID0gYXJncy5hcGksXG4gICAgICAgICBsaW5rID0geyBcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoKSxcbiAgICAgICAgICBxdWV1ZTogdGhpcy5xLCBcbiAgICAgICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgICAgICB9OyAgXG5cbiAgICAvLyBjb252ZW5pZW5jZSAtIGlmIHRoZSBwcm9qZWN0IGlzIGEgYm9vbGVuIGB0cnVlYCByYXRoZXIgdGhhbiBhIHBpZCwgZmlyc3RcbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgdGhlbiBwcmVwYXJlIHRoZSBwcm9qZWN0IGFwaSBjYWxsIHRvIGV4ZWN1dGVcbiAgICBpZiAoYXJncy5jcmVhdGUpIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jcmVhdGUnLCBsaW5rKVxuICAgICAgICAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2plY3Q6IHJlcy5nZXQoJ3Byb2plY3QnKS5wcm9qZWN0IH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5pbyhhcGkpXG4gICAgICAgICAgICAgICAuZGF0YShvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSwgbGluaykuZGF0YShvcHRzKTtcbiAgICB9ICAgIFxuICB9LFxuXG4gIC8qKiBcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGV4ZWN1dGluZyBhIGJsb2NrIG9mIFIgY29kZSBvbiB0aGUgUiBzZXNzaW9uLlxuXG4gICAqIEV4YW1wbGU6XG4gICAqICBgYGBcbiAgICogIC5jb2RlKCd4PC01JylcbiAgICogIC8vIC0tIG9yIC0tXG4gICAqICAuY29kZSgneDwtNScsIHByb2plY3RJZClcbiAgICogIGBgYFxuICAgKiAgIFxuICAgKiBAbWV0aG9kIGNvZGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHIgLSBUaGUgYmxvY2sgb2YgUiBjb2RlIHRvIGV4ZWN1dGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9qZWN0IC0gKG9wdGlvbmFsKSBpZiBvbWl0dGVkIGEgbmV3IHByb2plY3Qgd2lsbCBmaXJzdCBiZSBcbiAgICogY3JlYXRlZCBhbmQgdXNlZCwgb3RoZXJ3aXNlIGl0IHdpbGwgZXhlY3V0ZSBvbiB0aGUgUiBzZXNzaW9uIGlkZW50aWZpZWQgYnkgXG4gICAqIHRoaXMgYHByb2plY3RgLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb2RlOiBmdW5jdGlvbihyLCBwcm9qZWN0KSB7XG4gICAgIHZhciBsaW5rID0ge1xuICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpLCBcbiAgICAgICAgICAgICBxdWV1ZTogdGhpcy5xLFxuICAgICAgICAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgICAgICB9LFxuICAgICAgICAgYXBpID0gJy9yL3Byb2plY3QvZXhlY3V0ZS9jb2RlJztcblxuICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jcmVhdGUnLCBsaW5rKVxuICAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2plY3Q6IHJlcy5nZXQoJ3Byb2plY3QnKS5wcm9qZWN0IH07XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuaW8oYXBpKVxuICAgICAgICAgICAgIC5kYXRhKHsgY29kZTogciB9KTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGksIGxpbmspLmRhdGEoeyBjb2RlOiByLCBwcm9qZWN0OiBwcm9qZWN0IH0pO1xuICAgICB9XG4gIH0sXG4gIFxuICAvKiogXG4gICAqIFJlbGVhc2UgYW55IHJlc2lkdWFsIHByb2plY3QgcmVzb3VyY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgYXBwbGljYXRpb24gXG4gICAqIGluc3RhbmNlIHdoZW5ldmVyIGEgY2xpZW50IGFwcGxpY2F0aW9uIHRlcm1pbmF0ZXMuIFRoaXMgaW5jbHVkZXMgY2xvc2luZyBcbiAgICogYW55IHN1cHBsaWVkIHByb2plY3RzIGRvd24gYW5kIGxvZ2dpbmcgb3V0LlxuICAgKlxuICAgKiBAbWV0aG9kIHJlbGVhc2VcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHByb2plY3RzIFRoZSBwcm9qZWN0IG9yIGxpc3Qgb2YgcHJvamVjdHMgdG8gY2xvc2UuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYXV0aCAob3B0aW9uYWwpIHRvIHJlbWFpbiBhdXRoZW50aWNhdGVkLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByZWxlYXNlOiBmdW5jdGlvbihwcm9qZWN0cywgYXV0aCkge1xuICAgICBwcm9qZWN0cyA9IExhbmcuaXNBcnJheShwcm9qZWN0cykgPyBwcm9qZWN0cyA6IFtwcm9qZWN0c107XG5cbiAgICAgdmFyIHNlbGYgICAgID0gdGhpcyxcbiAgICAgICAgIGRlZmVycmVkID0gRCgpLFxuICAgICAgICAgZW1wdHkgICAgPSAhcHJvamVjdHMgfHwgIXByb2plY3RzWzBdLFxuICAgICAgICAgY291bnQgICAgPSAwLFxuICAgICAgICAgbGFzdCAgICAgPSAhZW1wdHkgPyBwcm9qZWN0cy5sZW5ndGggLSAxIDogY291bnQsXG4gICAgICAgICBoZWFkZXJzICA9IHRoaXMuZ2V0SGVhZGVycygpOyAgICAgICAgIFxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IGxhc3QpIHtcbiAgICAgICAgaWYgKCFhdXRoKSB7XG4gICAgICAgICAgRGVwbG95Ui5uZXcoJy9yL3VzZXIvbG9nb3V0JylcbiAgICAgICAgICAuc2hhcmUoaGVhZGVycylcbiAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oKSB7ICAgICAgICAgIFxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KSAgICAgIFxuICAgICAgICAgIC5lbmQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lbnN1cmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmRlc3Ryb3koKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgIHNlbGYuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgIH1cblxuICAgIGlmICghZW1wdHkpIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jbG9zZScpXG4gICAgICAgIC5kYXRhKHsgcHJvamVjdDogcHJvamVjdCB9KVxuICAgICAgICAuc2hhcmUoaGVhZGVycylcbiAgICAgICAgLmVuZCgpXG4gICAgICAgIC5lbnN1cmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG9nb3V0KGNvdW50KTtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dvdXQoY291bnQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlOyAgXG4gIH0sICBcblxuICAvKiogXG4gICAqIEEgY29udmVuaWVuY2UgYWx0ZXJuYXRpdmUgdG8gbXVsdGlwbGUgYC5yaW5wdXQoKWAgY2FsbHMuIERlZmluZXMgYSBuYW1lIFxuICAgKiBsaXN0IG9mIFIgb2JqZWN0cyB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgYXMgRGVwbG95Ui1lbmNvZGVkIFIgb2JqZWN0cyBvbiB0aGUgXG4gICAqIHJlc3BvbnNlIG1hcmt1cC5cbiAgICpcbiAgICogQ2FsbGluZyB0aGlzIG1ldGhvZCB+LnJvdXRwdXRzKFsgLi4uIF0pYCBpcyBlcXVpdmFsZW50IHRvIGludm9raW5nIG11bHRpcGxlIFxuICAgKiBgLnJvdXRwdXQoLi4uKWAgY2FsbHMuXG4gICAqXG4gICAqIEBtZXRob2Qgcm91dHB1dHNcbiAgICogQHBhcmFtIHtBcnJheX0gcm9iamVjdHMgQSBuYW1lIGxpc3Qgb2YgUiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcm91dHB1dHM6IGZ1bmN0aW9uIChyb3V0cHV0cykge1xuICAgIGlmIChyb3V0cHV0cykgeyB0aGlzLm91dHB1dHMgPSB0aGlzLm91dHB1dHMuY29uY2F0KHJvdXRwdXRzKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIFxuICAvKiogXG4gICAqIERlZmluZXMgdGhlIG5hbWUgb2YgdGhlIFIgb2JqZWN0IHRoYXQgd2lsbCBiZSByZXR1cm5lZCBhcyBhIERlcGxveVItZW5jb2RlZCBcbiAgICogUiBvYmplY3Qgb24gdGhlIHJlc3BvbnNlIG1hcmt1cC5cbiAgICpcbiAgICogQG1ldGhvZCByb3V0cHV0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb2JqZWN0IFRoZSBuYW1lIG9mIHRoZSBSIG9iamVjdCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJvdXRwdXQ6IGZ1bmN0aW9uIChyb3V0cHV0KSB7XG4gICAgaWYgKHJvdXRwdXQpIHsgdGhpcy5yb3V0cHV0cyhbcm91dHB1dF0pOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKiogXG4gICAqIFVzZWQgdG8gcGFzcyBtdWx0aXBsZSBpbnB1dHMgYXQgb25jZSBmcm9tIEphdmFTY3JpcHQgdG8gYW4gUiBzY3JpcHQgdXNpbmcgXG4gICAqIG9uZSBvZiB0aGUgZGVmaW5lZCBgUklucHV0YCBmYWN0b3JpZXMuXG4gICAqXG4gICAqIEBtZXRob2QgcmlucHV0c1xuICAgKiBAcGFyYW0ge0FycmF5fSByaW5wdXRzIFRoZSBgUklucHV0YCBsaXN0IG9mIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIFxuICAgKiBvYmplY3QgZGF0YSBmb3IgdXNlIG9uIGFuIEFQSSBjYWxsLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByaW5wdXRzOiBmdW5jdGlvbiAocmlucHV0cykge1xuICAgIGlmIChyaW5wdXRzKSB7IHRoaXMuaW5wdXRzID0gdGhpcy5pbnB1dHMuY29uY2F0KHJpbnB1dHMpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKiogXG4gICAqIFVzZWQgdG8gcGFzcyBtdWx0aXBsZSBpbnB1dHMgYXQgb25jZSBmcm9tIEphdmFTY3JpcHQgdG8gYW4gUiBzY3JpcHQgdXNpbmcgXG4gICAqIG9uZSBvZiB0aGUgZGVmaW5lZCBgUklucHV0YCBmYWN0b3JpZXMuXG4gICAqXG4gICAqIEBtZXRob2QgcmlucHV0XG4gICAqIEBwYXJhbSB7UklucHV0fSByaW5wdXQgVGhlIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIG9iamVjdCBkYXRhIGZvciB1c2UgXG4gICAqIG9uIGFuIEFQSSBjYWxsLiAgIFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByaW5wdXQ6IGZ1bmN0aW9uIChyaW5wdXQpIHtcbiAgICBpZiAocmlucHV0KSB7IHRoaXMuaW5wdXRzLnB1c2gocmlucHV0KTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgbGlmZWN5Y2xlIG1ldGhvZC4gRmlyZXMgdGhlIGBkZXN0cm95YCBldmVudCwgcHJpb3IgdG8gaW52b2tpbmcgXG4gICAqIGRlc3RydWN0b3JzIGZvciB0aGUgY2xhc3MgaGllcmFyY2h5LiBDYWxsZWQgaW50ZXJuYWxseSB3aGVuIGAucmVsZWFzZSgpYFxuICAgKiBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgICAgIHRoaXMub2ZmQWxsKCk7XG4gICAgXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcykge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IFxuICAgICAgICAgIHRoaXNba2V5XSA9IG51bGw7IFxuICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge31cbiAgfSwgIFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFByaXZhdGUgbWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIF9jbGVhcjogZnVuY3Rpb24oKSB7ICAgIFxuICAgIHRoaXMucGFyYW1zICAgPSB7fTtcbiAgICB0aGlzLmlucHV0cyAgID0gW107XG4gICAgdGhpcy5vdXRwdXRzICA9IFtdO1xuICAgIHRoaXMucnN0cmVhbSAgPSBmYWxzZTtcbiAgICB0aGlzLmRlbGF5ZWQgID0gZmFsc2U7XG4gICAgdGhpcy5hcGkgICAgICA9IG51bGw7ICAgIFxuICAgIHRoaXMuZmlsZSAgICAgPSBudWxsOyAgXG4gICAgdGhpcy5lbnRpdGllcyA9IG51bGw7XG4gICAgdGhpcy5pb0ZpbHRlciA9IG51bGw7XG4gIH0sIFxuXG4gIC8qKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIF9wcmVwUmVxdWVzdDogZnVuY3Rpb24gKHJlc3BvbnNlQ2hhaW4sIGFyZ3MpIHtcbiAgICB2YXIgcmVxICA9IHRoaXMucmVxLFxuICAgICAgICBmaWxlID0gdGhpcy5maWxlO1xuXG4gICAgLy8gc2V0IHRoZSByZXF1ZXN0IHR5cGUgICAgXG4gICAgaWYgKHRoaXMuYXBpLnVwbG9hZCkge1xuICAgICAgIC8vIElmIHRoZSBlbnYgaXMgdGhlIEJyb3dzZXIgdGhlcmUgaXMgbm8gbmVlZCB0byBtYW51YWxseSBzZXQgdGhlXG4gICAgICAgLy8gQ29udGVudC1UeXBlLiBUaGUgYnJvd3NlciB3aWxsIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSBcbiAgICAgICAvLyBcIm11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS4uLlwiIHZhbHVlLiBJZiB0aGUgZW52IGlzIE5vZGUgd2UgbmVlZFxuICAgICAgIC8vIHRvIHNldCBpdCBtYW51YWxseS5cbiAgICAgICBpZiAoIXdpbikgeyB0aGlzLnJlcS50eXBlKCdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7IH0gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcS50eXBlKCdmb3JtJyk7XG4gICAgfSAgICBcblxuICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpIHsgXG4gICAgICBlcnIgPSBlcnIgfHwgeyAgY29kZTogJ1VOS05PV04gQ09ERScsIHRleHQ6ICdVTktOT1dOIEVSUk9SJyB9O1xuXG4gICAgICB0aGlzLl9oYW5kbGVFcnJvcih7IFxuICAgICAgICBzdGF0dXM6IGVyci5jb2RlIHx8ICdVTktOT1dOIENPREUnLFxuICAgICAgICB0ZXh0OiBlcnJcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7ICAgIFxuXG4gICAgdGhpcy5zaGFyZShhcmdzID8gYXJncy5fX2hlYWRlcnNfXyA6IG51bGwpO1xuXG4gICAgLy8gYXJndW1lbnRzIHJldHVybmVkIGZyb20gcHJldiByZXF1ZXN0J3MgaW8oKS5lbmQoZnVuY3Rpb24oKSB7IHJldHVybiB4OyB9KVxuICAgIGlmIChhcmdzKSB7IFxuICAgICAgIHRoaXMuZGF0YShhcmdzKTtcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaW5wdXRzLmxlbmd0aCA+IDApIHsgXG4gICAgICB0aGlzLmRhdGEoeyBpbnB1dHM6IGVuY29kZXIuZW5jb2RlKHRoaXMuaW5wdXRzKSB9KTsgXG4gICAgfVxuICBcbiAgICBpZiAodGhpcy5vdXRwdXRzLmxlbmd0aCA+IDApIHsgXG4gICAgICB0aGlzLmRhdGEoeyByb2JqZWN0czogdGhpcy5vdXRwdXRzLmpvaW4oKSB9KTsgXG4gICAgfSAgICBcblxuICAgIGlmICh0aGlzLmhlYWRlcnMpIHtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5oZWFkZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5oZWFkZXJzLmhhc093blByb3BlcnR5KHByb3ApKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcnNbcHJvcF0pIHsgcmVxLnNldChwcm9wLCB0aGlzLmhlYWRlcnNbcHJvcF0gfHwgJycpOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXBpLnVwbG9hZCkgeyAgICBcbiAgICAgIGZvcih2YXIgcCBpbiB0aGlzLnBhcmFtcykge1xuICAgICAgICByZXEuZmllbGQocCwgKHRoaXMucGFyYW1zW3BdIHx8IHRoaXMucGFyYW1zW3BdID09PSBmYWxzZSkgPyBcbiAgICAgICAgICAgdGhpcy5wYXJhbXNbcF0gKyAnJyA6ICcnKTtcbiAgICAgIH0gXG4gICAgICByZXEuYXR0YWNoKCdmaWxlJywgdGhpcy5yc3RyZWFtID8gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKSA6IGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXFbdGhpcy5hcGkubWV0aG9kID09PSAnR0VUJyA/ICdxdWVyeScgOiAnc2VuZCddKHRoaXMucGFyYW1zKTtcbiAgICB9IFxuICB9LFxuXG4gIC8qKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIF9oYW5kbGVFcnJvcjogZnVuY3Rpb24gKHJhdykge1xuICAgIHZhciBzdGF0ICA9IHJhdy5zdGF0dXMsXG4gICAgICAgIHJlcyAgID0gKHJhdy5ib2R5ICYmIHJhdy5ib2R5LmRlcGxveXIgPyByYXcuYm9keSA6IHJhdyksXG4gICAgICAgIGVycm9yID0gKChzdGF0ICE9PSAyMDApIHx8IHJlcy5kZXBsb3lyICYmICFyZXMuZGVwbG95ci5yZXNwb25zZS5zdWNjZXNzKTtcblxuICAgIC8vIC0tIEhhbmRsZSBlcnJvcnMgLS1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJlcyA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbihrZXkpIHsgXG4gICAgICAgICAgcmV0dXJuIHV0aWxzLmdldCh0aGlzLmRlcGxveXIucmVzcG9uc2UsIGtleSk7IFxuICAgICAgICB9LFxuICAgICAgICBkZXBsb3lyOiB7ICAgICAgICAgIFxuICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGw6IHRoaXMuYXBpWydjYWxsJ10sXG4gICAgICAgICAgICBlcnJvckNvZGU6IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlIDogc3RhdCxcbiAgICAgICAgICAgIGVycm9yOiByZXMuZGVwbG95ciA/IHJlcy5kZXBsb3lyLnJlc3BvbnNlLmVycm9yIDogcmVzLnRleHRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIExvZ2dlci5lcnJvcignZXJyb3IoKScsIHRoaXMuYXBpLCByZXMsIHJhdyk7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignZXJyb3IoKScsIHRoaXMuYXBpLCByZXMsIHJhdyk7XG5cbiAgICAgIC8vIC0tIG5vdGlmeSBnbG9iYWwgZXJyb3JzIGZpcnN0IChpZiBhbnkpIGZvciB0aGlzIGNhbGwgLS0gICAgICBcbiAgICAgIGlmICh0aGlzLmdsb2JhbEV2dHMpIHtcbiAgICAgICAgcmFpc2VHbG9iYWxFcnJvcnModGhpcy5hcGlbJ2NhbGwnXSwgcmVzKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICAvLyAtLSB0cmFuYWN0aW9uIGxldmVsIEhUVFAgb3IgRGVwbG95UiBlcnJvcnMgY29tZSBuZXh0IC0tICAgIFxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHJlcyk7XG4gICAgICB0aGlzLmVtaXQoJ2RlcGxveXItaW86JyArIHJlcy5kZXBsb3lyLnJlc3BvbnNlLmVycm9yQ29kZSwgcmVzKTtcbiAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KHJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIEV4cG9zZSBmb3IgYSBjbGVhbmVyIGNsaWVudCBhcGkgaW50byBEZXBsb3lSXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgKiBFeHBvc2VzIHRoZSBgRGVwbG95UmAgb2JqZWN0IGZvciBleHRlbmRpbmcuXG4gICAqXG4gICAqIGBgYHZhciBEZXBsb3lSID0gcmVxdWlyZSgnZGVwbG95cicpLkRlcGxveVI7YGBgXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQGFwaSBwdWJsaWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIGBEZXBsb3lSYCBvYmplY3QuXG4gICAqLyAgIFxuICBEZXBsb3lSOiBEZXBsb3lSLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VzIHRoZSBzdXBwb3J0ZWQgRGVwbG95UiBBUElzLlxuICAgKlxuICAgKiBAbWV0aG9kIGFwaXNcbiAgICogQHBhcmFtIHtCb29sZWFufSBmbGF0IChvcHRpb25hbCkgaWYgYHRydWVgIHdpbGwgcmV0dXJuIGFuIGFycmF5IG9mIGp1c3QgdGhlIFxuICAgKiBBUEkncyBlbmRwb2ludCBwcm9wZXJ0aWVzLCBmb3IgZXhhbXBsZTogXG4gICAqIGBgYFxuICAgKiBbJy9yL3VzZXIvbG9naW4nLCAnL3IvdXNlci9sb2dvdXQnLCAnL3IvdXNlci9hYm91dCcsIC4uLl1cbiAgICogYGBgXG4gICAqIEBzdGF0aWNcbiAgICogQGFwaSBwdWJsaWNcbiAgICogQHJldHVybiB7T2JqZWN0fEFycmF5fSBUaGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBEZXBsb3lSIHNlcnZlci4gICAgICBcbiAgICovICBcbiAgYXBpczogZnVuY3Rpb24oZmxhdCkge1xuICAgIHJldHVybiBmbGF0ID8gT2JqZWN0LmtleXMoYXBpcykgOiBhcGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgc3RhdGljIG1ldGhvZCBmb3IgY29uZmlndXJpbmcgYWxsIERlcGxveVIgcmVxdWVzdHMuIFNldHRpbmdzIFxuICAgKiBtYWRlIGhlcmUgYXJlIGFwcGxpZWQgZ2xvYmFsbHkgYWNyb3NzIGV2ZXJ5IHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgY29uZmlndXJlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvYmplY3QgbGl0ZXJhbCBjb25maWd1cmF0aW9uIGhhc2guIFxuICAgKiBAc3RhdGljXG4gICAqIEBjaGFpbmFibGVcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbmZpZ3VyZTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7IGdsb2JhbE9wdGlvbnMuc2V0KGksIG9wdGlvbnNbaV0pOyB9XG5cbiAgICAvLyBhc3NlcnQgZ2xvYmFsIGNvb2tpZXMgYXJlIGVtcHR5IGlmIGdsb2JhbCBgc3RpY2t5YCBqc2Vzc2lvbmlkIGlzIG9mZlxuICAgIGlmICghZ2xvYmFsT3B0aW9ucy5zdGlja3kpICB7IGdsb2JhbE9wdGlvbnMuc2V0KCdoZWFkZXJzJywgbnVsbCk7IH0gICAgXG5cbiAgICAvLyB0dXJuIGdsb2JhbCBsb2dnaW5nIG9ufG9mZiAob2ZmIGJ5IGRlZmF1bHQpXG4gICAgTG9nZ2VyLnNldExldmVsKGdsb2JhbE9wdGlvbnMubG9nZ2luZyA/IExvZ2dlci5ERUJVRyA6IExvZ2dlci5PRkYpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBJTyByZXF1ZXN0cyB0byBgRGVwbG95UmAuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYCAgIFxuICAgKiAgICBkZXBsb3lyLmlvKCcvci91c2VyL2Fib3V0JykuZW5kKGNhbGxiYWNrKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBtZXRob2QgaW9cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFwaSBPbmUgb2YgdGhlIHN1cHBvcnRlZCBEZXBsb3lSIEFQSXMuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBpbzogZnVuY3Rpb24oYXBpKSB7ICBcbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpKTtcbiAgfSxcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gc2lnbiB0aGUgdXNlciBpbiBieSBhdXRoZW50aWNhdGluZyB0aGUgY3JlZGVudGlhbHMgXG4gICAqIHdpdGggdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKlxuICAgKiBAbWV0aG9kIGF1dGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJuYW1lIFNwZWNpZmllcyB0aGUgdXNlcm5hbWUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzd29yZCBTcGVjaWZpZXMgdGhlIHBhc3N3b3JkLlxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gICBcbiAgYXV0aDogZnVuY3Rpb24odW4sIHB3KSB7XG4gICAgdmFyIGRhdGEgPSB7IHVzZXJuYW1lOiB1biwgcGFzc3dvcmQ6IHB3IH07XG4gICAgcmV0dXJuIERlcGxveVIubmV3KCcvci91c2VyL2xvZ2luJykuZGF0YShkYXRhKS5lbmQoKTsgICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHNpZ24gdGhlIHVzZXIgaW4gYnkgYXV0aGVudGljYXRpbmcgdGhlIGNyZWRlbnRpYWxzIFxuICAgKiB3aXRoIHRoZSBEZXBsb3lSIHNlcnZlci4gICBcbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KCcvdGVzdHVzZXIvcm9vdC9yZWR1Y2UuUicpXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KHsgZmlsZW5hbWU6ICdyZWR1Y2UuUicsIGF1dGhvcjogJ3Rlc3R1c2VyJyxcbiAgICogICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6ICdyb290J30pXG4gICAqICAgIGRlcGxveXIuc2NyaXB0KCdyZWR1Y2UuUicsICd0ZXN0dXNlcicsICdyb290JylcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJy90ZXN0dXNlci9yb290L3JlZHVjZS5SJywgcHJvamVjdCkgICAgIFxuICAgKiBgYGAgICBcbiAgICpcbiAgICogQG1ldGhvZCBzY3JpcHRcbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IGFyZ3VtZW50cyBBcmd1bWVudHMgdG8gZGVmaW5lIHRoZSBmdWxseSBxdWFsaWZpZWQgc2NyaXB0IFxuICAgKiBmb3IgZXhlY3V0aW9uLlxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gICAgIFxuICBzY3JpcHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gdXRpbHMuc2lnbmF0dXJlKGFyZ3VtZW50cyksXG4gICAgICAgIG9wdHMgPSBhcmdzLm9wdHMsXG4gICAgICAgIGFwaSAgPSBhcmdzLmFwaTsgIFxuXG4gICAgLy8gY29udmVuaWVuY2UgLSBpZiB0aGUgcHJvamVjdCBpcyBhIGJvb2xlbiBgdHJ1ZWAgcmF0aGVyIHRoYW4gYSBwaWQsIGZpcnN0XG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIHRoZW4gcHJlcGFyZSB0aGUgcHJvamVjdCBhcGkgY2FsbCB0byBleGVjdXRlXG4gICAgaWYgKGFyZ3MuY3JlYXRlKSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3Byb2plY3QvY3JlYXRlJylcbiAgICAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9qZWN0OiByZXMuZ2V0KCdwcm9qZWN0JykucHJvamVjdCB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuaW8oYXBpKVxuICAgICAgICAgICAgICAgLmRhdGEob3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGkpLmRhdGEob3B0cyk7XG4gICAgfVxuICB9LCAgXG5cbiAgLyoqXG4gICAqIFJ1biBhbiBzZXJpZXMgb2YgY2hhaW5lZCBEZXBsb3lSIHJlcXVlc3RzIGluIHNlcXVlbmNlIGFuZCB3aXRob3V0IG92ZXJsYXAuICAgICAgIFxuICAgKlxuICAgKiBAbWV0aG9kIHBpcGxpbmVcbiAgICogQHBhcmFtIHtBcnJheX0gdGFza3MgU3BlY2lmaWVzIHRoZSBsaXN0IG9mIGBGdW5jdGlvbmAgdGFza3MuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvclxuICAgKiBcInJlamVjdFwiIGNhbGxiYWNrLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgcGlwZWxpbmU6IGZ1bmN0aW9uKGNoYWlucykgeyAgICAgIFxuICAgIHZhciBkZXBsb3lyICA9IHRoaXMsXG4gICAgICAgIGRlZmVycmVkID0gRCgpLFxuICAgICAgICBxICAgICAgICA9IG5ldyBRdWV1ZSgpLFxuICAgICAgICByZXN1bHRzICA9IFtdLFxuICAgICAgICBlcnJvcnMgICA9IFtdLFxuICAgICAgICBOT09QICAgICA9IG51bGwsIC8vIE5PT1AgZXJyb3JzfHJlc3VsdHMgZm9yIFthXSBiYXRjaCByZXF1ZXN0IGNoYWluXG4gICAgICAgIG9yaWcgICAgID0ge1xuICAgICAgICAgIHN0aWNreTogZ2xvYmFsT3B0aW9ucy5zdGlja3ksXG4gICAgICAgICAgaGVhZGVyczogZ2xvYmFsT3B0aW9ucy5oZWFkZXJzICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgLy8gbWFrZSBhIGNvcHlcbiAgICBjaGFpbnMgPSBjaGFpbnMuc2xpY2UoMCk7XG5cbiAgICAvLyB0dXJuIHN0aWNreSBzZXNzaW9uIGZvciB0aGVzZSByZXF1ZXN0IChoYWNreSlcbiAgICBkZXBsb3lyLmNvbmZpZ3VyZSggeyBzdGlja3k6IHRydWUgfSk7XG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBxLmFkZChmdW5jdGlvbigpIHsgXG4gICAgICAgIGNoYWlucy5zaGlmdCgpLmRyYWluKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oY2hhaW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goY2hhaW4pOyAgXG4gICAgICAgICAgZXJyb3JzLnB1c2goTk9PUCk7ICAgICAgICAgICBcbiAgICAgICAgICBpZiAocS5pc0VtcHR5KCkpIHsgXG4gICAgICAgICAgICBkZXBsb3lyLmNvbmZpZ3VyZShvcmlnKTsgLy8gcmVzZXRcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoeyByZXN1bHRzOiByZXN1bHRzLCBlcnJvcnM6IGVycm9ycyB9KTsgXG4gICAgICAgICAgfSAgXG5cbiAgICAgICAgICBxLnRha2UoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7ICAgICAgICAgIFxuICAgICAgICAgIHJlc3VsdHMucHVzaChOT09QKTsgXG4gICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAvLyByZWplY3Rpb25zIGFyZSBvbmx5IG1ldCB3aGVuIHRoZXkgW2FsbF0gZmFpbFxuICAgICAgICAgIGlmIChxLmlzRW1wdHkoKSAmJiByZXN1bHRzLmxlbmd0aCA9PT0gMCkgeyBcbiAgICAgICAgICAgIGRlcGxveXIuY29uZmlndXJlKG9yaWcpOyAvLyByZXNldFxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9ycyk7IFxuICAgICAgICAgIH0gIFxuICAgICAgICAgIHEudGFrZSgpO1xuICAgICAgICB9KTsgICAgICAgXG4gICAgICB9LCBudWxsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IHRvIGEgc2VxIHF1ZXVlIGZvciBiZXR0ZXIgaGFuZGxpbmdcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2hhaW5zLmxlbmd0aDsgaSsrKSB7IGFkZCgpOyB9XG5cbiAgICAvLyBzdGFydDogZGVxdWV1ZSBmaXJzdCBpdGVtIGFuZCBydW4gaXRcbiAgICBxLnRha2UoKTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgc3RyZWFtIEFQSSBpcyB1bmlxdWUgd2l0aGluIHRoZSBEZXBsb3lSIEFQSSBhcyBpdCBzdXBwb3J0cyBwdXNoIFxuICAgKiBub3RpZmljYXRpb25zIGZyb20gdGhlIERlcGxveVIgc2VydmVyIHRvIGNsaWVudCBhcHBsaWNhdGlvbnMuIE5vdGlmaWNhdGlvbnMgXG4gICAqIGNvcnJlc3BvbmQgdG8gZGlzY3JldGUgZXZlbnRzIHRoYXQgb2NjdXIgd2l0aGluIHRoZSBEZXBsb3lSIHNlcnZlci4gVGhlcmUgXG4gICAqIGFyZSBmb3VyIGRpc3RpbmN0IGV2ZW50IGNhdGVnb3JpZXM6XG4gICAqIFxuICAgKiAtIFN0cmVhbSBMaWZlY3ljbGUgZXZlbnRzXG4gICAqIC0gRXhlY3V0aW9uIGV2ZW50c1xuICAgKiAtIEpvYiBMaWZlY3ljbGUgZXZlbnRzXG4gICAqIC0gTWFuYWdlbWVudCBldmVudHNcbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqIGRlcGxveXIuZXMoeyB1c2VybmFtZTogJ3Rlc3R1c2VyJywgcGFzc3dvcmQ6ICdzZWNyZXQnIH0pXG4gICAqICAgIC8vIC0tIGNvbm5lY3Rpb24gY2hvaWNlcyBmb3IgZXZlbnQgdHlwZXMgLS1cbiAgICogICAgLm1hbmFnZW1lbnQoKSAgLy8uc2Vzc2lvbigpIHwgLmFsbCgpIHwgLnByb2plY3QoaWQpIHwgLmpvYihpZClcbiAgICogICAgLm9uKCdlczpncmlkSGVhcnRiZWF0JywgZnVuY3Rpb24oZGF0YSkge1xuICAgKiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT0nKTtcbiAgICogICAgICAgIGNvbnNvbGUubG9nKCdlczpncmlkSGVhcnRiZWF0Jyk7XG4gICAqICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpOyAgICAgICAgICBcbiAgICogICAgIH0pXG4gICAqICAgICAub3BlbigpO1xuICAgKiBgYGBcbiAgICogXG4gICAqIEBtZXRob2QgZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9iamVjdCBsaXRlcmFsIGNvbmZpZ3VyYXRpb24gaGFzaC4gXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGEgbmV3IGBFdmVudFN0cmVhbWAgZm9yIGJpbmRpbmcuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGVzOiBmdW5jdGlvbihjcmVkZW50aWFscykge1xuICAgIHZhciBhdXRoICAgPSAoY3JlZGVudGlhbHMgJiYgY3JlZGVudGlhbHMudXNlcm5hbWUgJiYgY3JlZGVudGlhbHMucGFzc3dvcmQpLFxuICAgICAgICBzdHJlYW0gPSBFdmVudFN0cmVhbS5uZXcoZ2xvYmFsT3B0aW9ucy5ob3N0LCB7IHlpZWxkOiBhdXRoIH0pO1xuXG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIHZhciBydXNlciA9IHRoaXMuYXV0aChjcmVkZW50aWFscy51c2VybmFtZSwgY3JlZGVudGlhbHMucGFzc3dvcmQpOyAgICAgIFxuICAgICAgcnVzZXIuZW5zdXJlKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgc3RyZWFtLnNoYXJlKHJ1c2VyLmdldEhlYWRlcnMoKSk7XG4gICAgICAgIHN0cmVhbS5mbHVzaCgpOyBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJlYW07XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGEgRGVwbG95Ui1zcGVjaWZpYyBlbmNvZGVkIFIgb2JqZWN0IHRvIGJlIFxuICAgKiBzZW50IGFzIGlucHV0IHBhcmFtZXRlcnMgdG8gYW4gUiBzY3JpcHQuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQubG9naWNhbCgnbG9naWNhbF9uYW1lJywgdHJ1ZSk7XG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5udW1lcmljKCdudW1lcmljX25hbWUnLCAxMC41KTtcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0LmludGVnZXIoJ2ludGVnZXJfbmFtZScsIDUpO1xuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQuY2hhcmFjdGVyKCdjaGFyYWN0ZXJfbmFtZScsICdIZWxsbycpO1xuICAgKiAgICAvLyBlY3QuLi5cbiAgICogYGBgXG4gICAqIEBwcm9wZXJ0eSBSSW5wdXRcbiAgICogQHN0YXRpY1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgUklucHV0OiB7XG4gICAgbnVtZXJpYzogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubnVtZXJpYygpO1xuICAgIH0sXG5cbiAgICBpbnRlZ2VyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5pbnRlZ2VyKCk7XG4gICAgfSxcblxuICAgIGxvZ2ljYWw6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWwoKTtcbiAgICB9LFxuXG4gICAgY2hhcmFjdGVyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXIoKTtcbiAgICB9LFxuXG4gICAgZGF0ZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuZGF0ZSgpO1xuICAgIH0sXG5cbiAgICBwb3NpeGN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5wb3NpeGN0KCk7XG4gICAgfSwgIFxuXG4gICAgbnVtZXJpY1ZlY3RvcjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljVmVjdG9yKCk7XG4gICAgfSwgXG5cbiAgICBpbnRlZ2VyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5pbnRlZ2VyVmVjdG9yKCk7XG4gICAgfSxcblxuICAgIGxvZ2ljYWxWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5sb2dpY2FsVmVjdG9yKCk7XG4gICAgfSxcblxuICAgIGNoYXJhY3RlclZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3RlclZlY3RvcigpO1xuICAgIH0sICBcblxuICAgIGRhdGVWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRlVmVjdG9yKCk7XG4gICAgfSwgIFxuXG4gICAgcG9zaXhjdFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLnBvc2l4Y3RWZWN0b3IoKTtcbiAgICB9LFxuXG4gICAgbGlzdDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubGlzdCgpOyBcbiAgICB9LFxuXG4gICAgZGF0YWZyYW1lOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuZGF0YWZyYW1lKCk7XG4gICAgfSxcbiAgXG4gICAgZmFjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGxldmVscywgbGFiZWxzKSB7XG4gICAgICB2YXIgb3B0cyA9IHsgbGV2ZWxzOiBsZXZlbHMsIGxhYmVsczogbGFiZWxzIH07XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSwgb3B0cykuZmFjdG9yKCk7XG4gICAgfSxcblxuICAgIG9yZGVyZWQ6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgbGV2ZWxzLCBsYWJlbHMpIHtcbiAgICAgIHZhciBvcHRzID0geyBsZXZlbHM6IGxldmVscywgbGFiZWxzOiBsYWJlbHMgfTtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlLCBvcHRzKS5vcmRlcmVkKCk7XG4gICAgfSxcblxuICAgIG51bWVyaWNNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljTWF0cml4KCk7XG4gICAgfSxcblxuICAgIGludGVnZXJNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5pbnRlZ2VyTWF0cml4KCk7XG4gICAgfSxcblxuICAgIGxvZ2ljYWxNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5sb2dpY2FsTWF0cml4KCk7XG4gICAgfSxcblxuICAgIGNoYXJhY3Rlck1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyTWF0cml4KCk7XG4gICAgfVxuICB9XG59OyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSA9IHJlcXVpcmUoJy4vc2VsZmlzaCcpLkJhc2U7XG5cbmZ1bmN0aW9uIGRlYnVnKG1zZykgeyB9XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoe1xuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgdGhpcy5zY29wZSAgPSBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIuICBNdWx0aXBsZSBjYW4gYmUgYWRkZWQgcGVyIG5hbWUuICBBbGlhc2VkIGFzIGBvbmAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZyAgICAgIFxuICAgKi9cbiAgb246IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAobmFtZSBpbiB0aGlzLmV2ZW50cyA9PT0gZmFsc2UpIHsgdGhpcy5ldmVudHNbbmFtZV0gPSBbXTsgfSAgICAgICAgXG5cbiAgICB0aGlzLmV2ZW50c1tuYW1lXS5wdXNoKGhhbmRsZXIpO1xuICAgIGRlYnVnKCdFbWl0dGVyLm9uKFwiJyArIG5hbWUgKyAnXCIpJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogVHJpZ2dlcnMgYWxsIG1hdGNoaW5nIGxpc3RlbmVycy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm4ge0VtaXR0ZXJ9IGB0aGlzYCBmb3IgY2hhaW5pbmcgICBcbiAgICovXG4gIGVtaXQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAobmFtZSBpbiB0aGlzLmV2ZW50cyA9PT0gZmFsc2UpIHsgcmV0dXJuIHRoaXM7IH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHNbbmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKCdGaXJlZCBldmVudDogXCInICsgbmFtZSArICdcIicpO1xuICAgICAgdGhpcy5ldmVudHNbbmFtZV1baV0uYXBwbHkodGhpcy5zY29wZSB8fCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTsgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIG1hdGNoaW5nIGxpc3RlbmVycy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm4ge0VtaXR0ZXJ9IGB0aGlzYCBmb3IgY2hhaW5pbmdcbiAgICovXG4gIG9mZkFsbDogZnVuY3Rpb24obmFtZSkge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgZm9yICh2YXIgZSBpbiB0aGlzLmV2ZW50cykge1xuICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW25hbWVdOyAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lciBiYXNlZCBvbiBhbiBpbmRleC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGV2ZW50IFxuICAgKi9cbiAgb2ZmQXQ6IGZ1bmN0aW9uKG5hbWUsIGluZGV4KSB7XG4gICAgdmFyIGFycmF5ID0gdGhpcy5ldmVudHNbbmFtZV0sXG4gICAgICAgIHJlc3QgID0gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcblxuICAgIGFycmF5Lmxlbmd0aCA9IGluZGV4O1xuICAgIGFycmF5LnB1c2guYXBwbHkoYXJyYXksIHJlc3QpO1xuICAgIHRoaXMuZXZlbnRzW25hbWVdID0gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lciBiYXNlZCBvbiB0aGUgaGFuZGxlciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG4gICAqIEByZXR1cm4ge0VtaXR0ZXJ9IGB0aGlzYCBmb3IgY2hhaW5pbmdcbiAgICovXG4gIG9mZjogZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBldmVudHMgaGFuZGxlcnMgYnkgdGhpcyBuYW1lXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5vZmZBbGwobmFtZSk7XG4gICAgfSBlbHNlIHsgLy8gcmVtb3ZlIGFsbCBldmVudHMgaGFuZGxlcnMgPT0gJ2hhbmRsZXInIGJ5IHRoaXMgbmFtZVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbbmFtZV1baV0gPT0gaGFuZGxlcikge1xuICAgICAgICAgIHRoaXMub2ZmQXQobmFtZSwgaSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IFxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufSk7ICIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICovXG52YXIgTGFuZyAgICA9IHJlcXVpcmUoJy4vbGFuZycpLFxuICAgIFJUeXBlcyAgPSByZXF1aXJlKCcuL3J0eXBlcycpLFxuICAgIFIgICAgICAgPSBSVHlwZXMucixcbiAgICBEZXBsb3lSID0gUlR5cGVzLmRlcGxveXI7XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGVzKGRhdGVzLCB0eXBlKSB7XG4gICAgdmFyIGZvcm1hdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybWF0cy5wdXNoKGZvcm1hdERhdGUoZGF0ZXNbaV0sIHR5cGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0cztcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCB0eXBlKSB7ICAgIFxuICAgdmFyIHllYXIgICA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICBtb250aCAgPSAoZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgICAgZGF5ICAgID0gZGF0ZS5nZXREYXRlKCksICAgIFxuICAgICAgIGhvdXIgICA9IGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgICBtaW4gICAgPSBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICBzZWMgICAgPSBkYXRlLmdldFNlY29uZHMoKSxcbiAgICAgICB6b25lICAgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCksXG4gICAgICAgZm9ybWF0ID0gJyc7XG5cbiAgICBtb250aCAgPSAobW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGgpO1xuICAgIGhvdXIgICA9IChob3VyIDwgMTAgPyAnMCcgKyBob3VyIDogaG91cik7XG4gICAgbWluICAgID0gKG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluKTtcbiAgICBzZWMgICAgPSAoc2VjIDwgMTAgPyAnMCcgKyBzZWMgOiBzZWMpOyAgICAgICBcbiAgICBmb3JtYXQgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG5cbiAgICBmdW5jdGlvbiBsZWZ0WmVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJycgKyBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuXG4gICAgICAgIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgKyBvdXRwdXQ7XG4gICAgfVxuICAgXG4gICAgaWYgKHR5cGUgPT09IERlcGxveVIuUlBPU0lYX0RBVEUgfHwgdHlwZSA9PT0gRGVwbG95Ui5SUE9TSVhfREFURV9WRUNUT1IpIHtcbiAgICAgICAgdmFyIHRpbWUgID0gaG91ciArICc6JyArIG1pbiArICc6JyArIHNlYyxcbiAgICAgICAgICAgIGEgPSAtem9uZSxcbiAgICAgICAgICAgIGIgPSBcIitcIjtcblxuICAgICAgICBpZiAoYSA8IDApIHtcbiAgICAgICAgICAgIGEgPSAtYTtcbiAgICAgICAgICAgIGIgPSBcIi1cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHpvbmUgPSBiICsgbGVmdFplcm9GaWxsKChhIC8gNjApLCAyKSArICcnICsgbGVmdFplcm9GaWxsKGEgJSA2MCwgMik7XG4gICAgICAgIGZvcm1hdCArPSAoJyAnICsgdGltZSArICcgJyArIHpvbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXQ7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUVtYmVkZGVkRGF0YWZyYW1lKG9iaiwgcmRmKSB7XG4gICAgdmFyIGRmVmFsdWUgPSBvYmoudmFsdWU7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRmVmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBkZk9iaiA9IGRmVmFsdWVbaW5kZXhdO1xuICAgICAgICBpZiAoZGZPYmoudHlwZSA9PT0gRGVwbG95Ui5SREFUQUZSQU1FKSB7XG4gICAgICAgICAgICByZGYgPSBlbmNvZGVFbWJlZGRlZERhdGFmcmFtZShkZk9iaiwgcmRmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZvcm1hdCBkYXRlc1xuICAgICAgICAgICAgaWYgKFJUeXBlcy5pc0RhdGUoZGZPYmoudHlwZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoTGFuZy5pc0FycmF5KGRmT2JqLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBkZk9iai52YWx1ZSA9IGZvcm1hdERhdGVzKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZk9iai52YWx1ZSA9IGZvcm1hdERhdGUoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGZPYmoudHlwZSA9IFJUeXBlcy5kZXBsb3lyVG9SKGRmT2JqLnR5cGUpO1xuICAgICAgICAgICAgcmRmLnZhbHVlLnB1c2goZGZPYmopOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHJkZjtcbn07XG5cbmZ1bmN0aW9uIGVuY29kZURhdGFmcmFtZShvYmopIHtcbiAgICB2YXIgcmRmID0ge1xuICAgICAgICAgICAgdHlwZTogUi5EQVRBRlJBTUUsXG4gICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICBuYW1lOiBvYmoubmFtZVxuICAgICAgICB9LFxuICAgICAgICBkZlZhbHVlID0gb2JqLnZhbHVlO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRmVmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBkZk9iaiA9IGRmVmFsdWVbaW5kZXhdO1xuXG4gICAgICAgIGlmIChkZk9iai50eXBlID09PSBEZXBsb3lSLlJEQVRBRlJBTUUpIHtcbiAgICAgICAgICAgIHJkZiA9IGVuY29kZUVtYmVkZGVkRGF0YWZyYW1lKGRmT2JqLCByZGYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZm9ybWF0IGRhdGVzXG4gICAgICAgICAgICBpZiAoUlR5cGVzLmlzRGF0ZShkZk9iai50eXBlKSkge1xuICAgICAgICAgICAgICAgIGlmIChMYW5nLmlzQXJyYXkoZGZPYmoudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRmT2JqLnZhbHVlID0gZm9ybWF0RGF0ZXMoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRmT2JqLnZhbHVlID0gZm9ybWF0RGF0ZShkZk9iai52YWx1ZSwgZGZPYmoudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZk9iai50eXBlID0gUlR5cGVzLmRlcGxveXJUb1IoZGZPYmoudHlwZSk7XG4gICAgICAgICAgICByZGYudmFsdWUucHVzaChkZk9iaik7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gcmRmO1xufTtcblxuZnVuY3Rpb24gZW5jb2RlTGlzdChvYmopIHtcbiAgICB2YXIgcmxpc3QgPSB7XG4gICAgICAgICAgICB0eXBlOiBSLkxJU1QsXG4gICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICBuYW1lOiBvYmoubmFtZVxuICAgICAgICB9LFxuICAgICAgICBkZlZhbHVlID0gb2JqLnZhbHVlLFxuICAgICAgICByO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRmVmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBkZk9iaiA9IGRmVmFsdWVbaW5kZXhdO1xuXG4gICAgICAgIHN3aXRjaCAoZGZPYmoudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRBRlJBTUU6XG4gICAgICAgICAgICAgICAgciA9IGVuY29kZURhdGFmcmFtZShkZk9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STElTVDpcbiAgICAgICAgICAgICAgICByID0gZW5jb2RlTGlzdChkZk9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19NQVRSSVg6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUklOVEVHRVJfTUFUUklYOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOX01BVFJJWDpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX01BVFJJWDpcbiAgICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkZk9iai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLk1BVFJJWCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRmT2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRFOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJQT1NJWF9EQVRFOlxuICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRmT2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuREFURSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBkZk9iai5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXREYXRlKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SRkFDVE9SOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJPUkRFUkVEOlxuICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRmT2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuRkFDVE9SLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkOiBkZk9iai5vcmRlcmVkLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGRmT2JqLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxzOiBkZk9iai5sZXZlbHMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZk9iai52YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJOVU1FUklDOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSOlxuICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRmT2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuUFJJTUlUSVZFLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGZPYmoudmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUNfVkVDVE9SOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSX1ZFQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SQk9PTEVBTl9WRUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklOR19WRUNUT1I6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZk9iai52YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SREFURV9WRUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUlBPU0lYX0RBVEVfVkVDVE9SOlxuICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRmT2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuVkVDVE9SLCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXREYXRlcyhkZk9iai52YWx1ZSwgZGZPYmoudHlwZSksXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZGZPYmouZm9ybWF0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFJEYXRhVHlwZSBmb3VuZCBmb3IgXCInICsgZGZPYmoudHlwZSArICdcIicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmxpc3QudmFsdWUucHVzaChyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJsaXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBGbGF0dGVucyBhIGdpdmVuIGBSSW5wdXRgIHR5cGUgaW50byBhIEpTT04gc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgICAgIFxuICAgICAqIGV4cGVjdGVkIERlcGxveVIgaW5wdXQgZm9ybWF0LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBlbmNvZGVcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtBcnJheX0gcmRhdGEgQW4gQXJyYXkgb2YgYFJJbnB1dGAgT2JqZWN0cyB0byBiZSBmbGF0dGVuZWQuXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgZmxhdHRlbmQgYFJJbnB1dGAgSlNPTiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBcbiAgICAgKiAgICAgICAgICAgICAgICAgIERlcGxveVIgaW5wdXQgZm9ybWF0LlxuICAgICAqL1xuICAgIGVuY29kZTogZnVuY3Rpb24ocmRhdGEpIHtcbiAgICAgICAgdmFyIHIgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gcmRhdGFbaW5kZXhdO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7IC8vIC0tIERlcGxveVIgVHlwZSAtLSAvL1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRBRlJBTUU6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0gZW5jb2RlRGF0YWZyYW1lKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJMSVNUOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IGVuY29kZUxpc3Qob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUNfTUFUUklYOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUl9NQVRSSVg6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOX01BVFJJWDpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklOR19NQVRSSVg6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5NQVRSSVgsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRFOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURTpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLkRBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG9iai5mb3JtYXQsICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0RGF0ZShvYmoudmFsdWUsIG9iai50eXBlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SRkFDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5ST1JERVJFRDogICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5GQUNUT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmVkOiBvYmoub3JkZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogb2JqLmxhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsczogb2JqLmxldmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklORzpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU46XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJOVU1FUklDOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUjpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlBSSU1JVElWRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUNfVkVDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUl9WRUNUT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklOR19WRUNUT1I6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRFX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUlBPU0lYX0RBVEVfVkVDVE9SOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuVkVDVE9SLCAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdERhdGVzKG9iai52YWx1ZSwgb2JqLnR5cGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBvYmouZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBSRGF0YVR5cGUgZm91bmQgZm9yIFwiJyArIG9iai50eXBlICsgJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChKU09OLnN0cmluZ2lmeShyKSk7XG4gICAgfVxufTsiLCIgdmFyIHdpbiAgICAgICA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyksXG4gICAgIG9wdGlvbmFsICA9IHJlcXVpcmUoJy4vb3B0aW9uYWwnKSwgICAgIFxuICAgICBXZWJTb2NrZXQgPSB3aW4gPyB3aW5kb3cuV2ViU29ja2V0IDogb3B0aW9uYWwoJ3dzJyksXG4gICAgIFF1ZXVlICAgICA9IHJlcXVpcmUoJy4vcXVldWUnKSwgICAgIFxuICAgICBFbWl0dGVyICAgPSByZXF1aXJlKCcuL2VtaXR0ZXInKSxcbiAgICAgQmFzZSAgICAgID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZSxcbiAgICAgbWVyZ2UgICAgID0gcmVxdWlyZSgnLi91dGlscycpLm1lcmdlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKEVtaXR0ZXIsIHsgICBcblxuICAvKipcbiAgICogVGhlIGBFdmVudFN0cmVhbWAgY2xhc3MgYWN0cyBhcyBhIGNsaWVudCBsaXN0ZW5lciBmb3IgdGhlIERlcGxveVIgZXZlbnQgXG4gICAqIHN0cmVhbSBBUEkgYC9yL2V2ZW50L3N0cmVhbWAgbm90aWZpY2F0aW9ucy4gTm90aWZpY2F0aW9ucyBjb3JyZXNwb25kIHRvIFxuICAgKiBkaXNjcmV0ZSAgZXZlbnRzIHRoYXQgb2NjdXIgd2l0aGluIHRoZSBEZXBsb3lSIHNlcnZlci4gVGhlcmUgYXJlIGZvdXIgXG4gICAqIGRpc3RpbmN0IGV2ZW50IGNhdGVnb3JpZXM6XG4gICAqXG4gICAqIC0gU3RyZWFtIExpZmVjeWNsZSBldmVudHNcbiAgICogLSBFeGVjdXRpb24gZXZlbnRzXG4gICAqIC0gSm9iIExpZmVjeWNsZSBldmVudHNcbiAgICogLSBNYW5hZ2VtZW50IGV2ZW50cyAgIFxuICAgKiBcbiAgICogQGNsYXNzIFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVuZHBvaW50IFRoZSBEZXBsb3lSIHNlcnZlciBlbmRwb2ludC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT2JqZWN0IGxpdGVyYWwgaGFzaCBvZiBvcHRpb25zLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUoZW5kcG9pbnQsIG9wdGlvbnMpIHtcbiAgICBFbWl0dGVyLmluaXRpYWxpemUuY2FsbCh0aGlzLCB7fSk7XG4gIFxuICAgIHRoaXMuYXBpICAgICA9IChlbmRwb2ludCB8fCAnJykgKyAnL2RlcGxveXIvci9ldmVudC9zdHJlYW0nLFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy53cyAgICAgID0gbnVsbDtcbiAgICB0aGlzLnEgICAgICAgPSBuZXcgUXVldWUoKTtcbiAgICB0aGlzLmZpbHRlciAgPSB7fTsgIFxuICAgIHRoaXMuY29va2llcyA9IHRoaXMub3B0aW9ucy5jb29raWVzO1xuICB9LCAgXG5cbiAgLyoqXG4gICAqIFRoaXMgY2FsbCBjb25uZWN0cyB0byBvbmUgb2YgdGhlIGZvbGxvd2luZyBldmVudCBzdHJlYW1zOiBhdXRoZW50aWNhdGVkLCBcbiAgICogYW5vbnltb3VzLCBvciBtYW5hZ2VtZW50LlxuXG4gICAqIEBtZXRob2Qgb3BlblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPYmplY3QgbGl0ZXJhbCBoYXNoIG9mIHN1cHBvcnRlZCBvcHRpb25zOlxuICAgKiAgLSB5aWVsZDogZmFsc2UgKGRlZmF1bHQpIC0gXG4gICAqICAtIGNvb2tpZXM6IG51bGwgKGRlZmF1bHQpXG4gICAqICAtIHByb2plY3Q6IG51bGwgKGRlZmF1bHQpXG4gICAqICAtIGpvYjogbnVsbCAoZGVmYXVsdClcbiAgICogIC0gaHR0cEV2ZW50T25seTogZmFsc2UgKGRlZmF1bHQpXG4gICAqICAtIHJldm9FdmVudE9ubHk6IGZhbHNlIChkZWZhdWx0KVxuICAgKiAgLSBtYW5hZ2VtZW50RXZlbnRPbmx5OiBmYWxzZSAoZGVmYXVsdClcbiAgICpcbiAgICogYGBgXG4gICAqICB7XG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gV2FpdCBmb3IgYXV0aGVudGljYXRpb24gdG8gY29tcGxldGUgYmVmb3JlIGVzdGFibGlzaGluZyBjb25uZWN0aW9uLlxuICAgKiAgICAgLy8gXG4gICAqICAgICB5aWVsZDogZmFsc2UsIFxuICAgKlxuICAgKiAgICAgLy9cbiAgICogICAgIC8vIFNoYXJlZCBjb29raWVzIGZyb20gb3RoZXIgYXV0aGVudGljYXRlZCBEZXBsb3lSIHJlcXVlc3RzXG4gICAqICAgICAvL1xuICAgKiAgICAgY29va2llczogWyAnSlNFU1NJT05JRD0wODY2NjlBQkMyMjZFQjc4OyBQYXRoPS9kZXBsb3lyLzsgSHR0cE9ubHknIF1cbiAgICpcbiAgICogICAgIC8vXG4gICAqICAgICAvLyBJbmRpY2F0ZSB0aGUgRGVwbG95UiBldmVudCBzdHJlYW0gdG8gcHVzaCBldmVudHMgb25seSBmb3IgdGhpcyBcbiAgICogICAgIC8vIHByb2plY3QuXG4gICAqICAgICAvL1xuICAgKiAgICAgcHJvamVjdDogJ1BST0pFQ1QtSUQnLFxuICAgKlxuICAgKiAgICAgLy9cbiAgICogICAgIC8vIEluZGljYXRlIHRoZSBEZXBsb3lSIGV2ZW50IHN0cmVhbSB0byBwdXNoIGV2ZW50cyBvbmx5IGZvciB0aGlzIGpvYi5cbiAgICogICAgIC8vXG4gICAqICAgICBqb2I6ICdKT0ItSUQnLCAgICAgIFxuICAgKiAgIFxuICAgKiAgICAgLy9cbiAgICogICAgIC8vIGh0dHBFdmVudE9ubHk9dHJ1ZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkIHRoZW4gYW4gYXV0aGVudGljYXRlZCBcbiAgICogICAgIC8vIGV2ZW50IHN0cmVhbSB3aWxsIHNlZSBvbmx5IGV4ZWN1dGlvbiBldmVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBcbiAgICogICAgIC8vIGN1cnJlbnQgSFRUUCBzZXNzaW9uLlxuICAgKiAgICAgLy9cbiAgICogICAgIGh0dHBFdmVudE9ubHk6IHRydWUsICAgXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgKiAgICAgLy9cbiAgICogICAgIC8vIHJldm9FdmVudE9ubHk9dHJ1ZSwgdGhlbiBleGVjdXRpb24gZXhlY3V0aW9uQ29uc29sZUV2ZW50IFxuICAgKiAgICAgLy8gZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoZSBzdHJlYW1cbiAgICogICAgIC8vXG4gICAqICAgICByZXZvRXZlbnRPbmx5OiB0cnVlLCAgICAgICBcbiAgICogICAgICAgICAgICAgICAgICAgXG4gICAqICAgICAvLyBcbiAgICogICAgIC8vIG1hbmFnZW1lbnRFdmVudE9ubHk9dHJ1ZSwgdGhlbiBldmVudCBzdHJlYW0gY29ubmVjdGlvbiB0eXBlIGlzIFxuICAgKiAgICAgLy8gbWFuYWdlbWVudCAgICBcbiAgICogICAgIC8vICAgICAgICAgICAgICAgICAgICAgIFxuICAgKiAgICAgbWFuYWdlbWVudEV2ZW50T25seTogdHJ1ZSAgICBcbiAgICogfVxuICAgKiBgYGAgICBcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9wZW46IGZ1bmN0aW9uKG9wdGlvbnMpIHsgICAgXG4gICAgdmFyIHNlbGYgPSB0aGlzLCB1cmw7XG5cbiAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zID0gbWVyZ2Uob3B0aW9ucyB8fCB7fSwgdGhpcy5vcHRpb25zKTsgICAgXG5cbiAgICB0aGlzLmNvb2tpZXMgPSAhdGhpcy5jb29raWVzID8gb3B0aW9ucy5jb29raWVzIDogdGhpcy5jb29raWVzO1xuXG4gICAgLy9cbiAgICAvLyBBcHBlbmQgZXZlbnQgZmlsdGVyc1xuICAgIC8vICBcbiAgICBpZiAob3B0aW9ucy5wcm9qZWN0KSB7IHRoaXMucHJvamVjdChvcHRpb25zLnByb2plY3QpOyB9XG4gICAgaWYgKG9wdGlvbnMuam9iKSB7IHRoaXMuam9iKG9wdGlvbnMuam9iKTsgfVxuICAgIGlmIChvcHRpb25zLm1hbmFnZW1lbnRFdmVudE9ubHkpIHsgdGhpcy5tYW5hZ2VtZW50RXZlbnRPbmx5KCk7IH1cbiAgICBpZiAob3B0aW9ucy5yZXZvRXZlbnRPbmx5KSB7IHRoaXMucmV2b0V2ZW50T25seSgpOyB9IFxuICAgIGlmIChvcHRpb25zLmh0dHBFdmVudE9ubHkpIHsgdGhpcy5odHRwRXZlbnRPbmx5KCk7IH1cblxuICAgIHVybCA9IHRoaXMuZ2V0UmVxdWVzdFVSTCgpO1xuXG4gICAgdGhpcy5xLnlpZWxkKHRydWUpO1xuICAgIHRoaXMucS5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGVhZGVycyA9IHRoaXMuY29va2llcyA/IHsgJ0Nvb2tpZSc6IHRoaXMuY29va2llcyB9IDoge307XG4gICAgICB0aGlzLmVtaXQoJ2VzOmNvbm5lY3RpbmcnLCB7IHVybDogdXJsLCBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuXG4gICAgICAvLyBGb3IgQnJvd3NlcnMgdGhlIHRocmlkIGFyZ3VtZW50IGBvcHRzYCBpc2lnbm9yZWRcbiAgICAgIHZhciB3cyA9ICh3aW4gPyBuZXcgV2ViU29ja2V0KHVybCkgOiBcbiAgICAgICAgbmV3IFdlYlNvY2tldCh1cmwsICdodHRwJywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pKTtcblxuICAgICAgd3Mub25vcGVuID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgc2VsZi5lbWl0KCdlczpvcGVuJywgbWVzc2FnZSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgX21lc3NhZ2UgPSAnJztcbiAgICAgIHdzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHRyeSB7ICAgICAgICAgIFxuICAgICAgICAgIGlmIChtZXNzYWdlLmRhdGEuc3BsaXQoJyF8IScpWzFdKSB7XG4gICAgICAgICAgICBfbWVzc2FnZSA9IF9tZXNzYWdlICsgbWVzc2FnZS5kYXRhLnNwbGl0KCchfCEnKVsxXTtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKF9tZXNzYWdlKTtcbiAgICAgICAgICAgIF9tZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IG1lc3NhZ2UuZGVwbG95ci5yZXNwb25zZS5ldmVudC50eXBlO1xuICAgICAgICAgICAgc2VsZi5lbWl0KCdlczonICsgdHlwZS5yZXBsYWNlKCdFdmVudCcsICcnKSwgbWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fSBcbiAgICAgIH07XG5cbiAgICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7IHNlbGYuZW1pdCgnZXM6ZXJyb3InLCBlcnIpOyB9O1xuICAgICAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7IHNlbGYuZW1pdCgnZXM6Y2xvc2UnLCBtZXNzYWdlKTsgfTtcblxuICAgICAgdGhpcy53cyA9IHdzO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgLy9cbiAgICAvLyBvcGVuIHNvY2tldCBpbW1lZGlhdGVseVxuICAgIC8vXG4gICAgaWYgKCFvcHRpb25zLnlpZWxkKSB7IHRoaXMuZmx1c2goKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7ICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiBUZXJtaW5hdGVzIHRoZSBXZWJTb2NrZXQgY2xvc2luZyBhbnkgY29ubmVjdGlvbiB0byBEZXBsb3lSJ3MgZXZlbnQgc3RyZWFtLlxuICAgKiBAbWV0aG9kIGNsb3NlXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMud3MpIHsgdGhpcy53cy5jbG9zZSgpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVjb25zdHJ1Y3RzIHRoZSBldmVudCBzdHJlYW0gVVJMIHRoZSBjbGllbnQgdXNlcyB0byBtYWtlIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogd3M6Ly9kaG9zdDo3NDAwL2RlcGxveXIvci9ldmVudC9zdHJlYW0/cmV2b0V2ZW50T25seT10cnVlJnByb2plY3Q9UElEXG4gICAqIHdzOi8vZGhvc3Q6NzQwMC9kZXBsb3lyL3IvZXZlbnQvc3RyZWFtXG4gICAqIGBgYFxuICAgKiBAbWV0aG9kIGdldFJlcXVlc3RVUkxcbiAgICogQGFwaSBwdWJsaWMgICAgIFxuICAgKi9cbiAgZ2V0UmVxdWVzdFVSTDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVybCAgICA9IHRoaXMuYXBpLnJlcGxhY2UoL15odHRwLywnd3MnKSxcbiAgICAgICAgZmlsdGVyID0gdGhpcy5maWx0ZXI7XG5cbiAgICB1cmwgKz0gKGZpbHRlci50eXBlID8gJz8nICsgZmlsdGVyLnR5cGUgOiAnJyk7ICBcblxuICAgIGlmIChmaWx0ZXIucHJvamVjdCkgeyB1cmwgKz0gJyYnICsgZmlsdGVyLnByb2plY3Q7IH1cbiAgICBpZiAoZmlsdGVyLmpvYikgeyB1cmwgKz0gJyYnICsgZmlsdGVyLmpvYjsgfVxuXG4gICAgcmV0dXJuICB1cmw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEhUVFAgY29va2llIHByZXZpb3VzbHkgc2VudCBieSB0aGUgc2VydmVyIHdpdGggU2V0LUNvb2tpZS5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgcGFzc2VkIHRvIGAuc2hhcmUocnVzZXIuZ2V0Q29va2llcygpKWAgb2YgYSBkaWZmcmVudFxuICAgKiBgLmlvKClgIGFnZW50IHRvIHByZXNlcnZlIHNlc3Npb24gc3RhdGUgYWNyb3NzIHJlcXVlc3RzLlxuICAgKlxuICAgKiBAbWV0aG9kIGdldENvb2tpZXNcbiAgICogQHJldHVybiB7QXJyYXl9IFRoZSBIVFRQIGNvb2tpZSBwcmV2aW91c2x5IHNlbnQgYnkgdGhlIHNlcnZlciB3aXRoIFxuICAgKiBTZXQtQ29va2llLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gIFxuICBnZXRDb29raWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29va2llcztcbiAgfSwgICBcblxuICAvKipcbiAgICogRGVzdHJveSBsaWZlY3ljbGUgbWV0aG9kLiBGaXJlcyB0aGUgYGRlc3Ryb3lgIGV2ZW50LCBwcmlvciB0byBpbnZva2luZyBcbiAgICogZGVzdHJ1Y3RvcnMgZm9yIHRoZSBjbGFzcyBoaWVyYXJjaHkuIFxuICAgKlxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHsgICAgXG4gICAgdGhpcy5lbWl0KCdkZXN0cm95Jyk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMub2ZmQWxsKCk7XG5cbiAgICB0aGlzLndzICAgICAgPSBudWxsO1xuICAgIHRoaXMuaG9zdCAgICA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0gbnVsbDtcbiAgICB0aGlzLndzICAgICAgPSBudWxsO1xuICAgIHRoaXMucSAgICAgICA9IG51bGw7XG4gICAgdGhpcy5maWx0ZXIgID0gbnVsbDsgICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiBEcmFpbnMgdGhlIHlpZWxkIHF1ZXVlIGluIHNpdHVhdGlvbnMgd2hlcmUgYG9wZW4oKWAgaXMgd2FpdGluZyBmb3IgXG4gICAqIGF1dGhlbnRpY2F0aW9uIHRvIGNvbXBsZXRlIGJlZm9yZSBlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uLlxuICAgKi9cbiAgZmx1c2g6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucS55aWVsZChmYWxzZSk7XG4gICAgdGhpcy5xLmZsdXNoKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNoYXJlcyB0aGUgY29va2llcyBmcm9tIGEgZGlmZmVyZW4gYC5pbygpYCBhZ2VudCB0byBwcmVzZXJ2ZSBzZXNzaW9uIHN0YXRlXG4gICAqIGFjcm9zcyBgdGhpc2AgcmVxdWVzdCBhbmQgYWxsIHJlcXVlc3RzIGNoYWluZWQgdG8gaXQuXG4gICAqXG4gICAqIEBtZXRob2Qgc2hhcmVcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovIFxuICBzaGFyZTogZnVuY3Rpb24oY29va2llcykge1xuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogSW5kaWNhdGUgdGhlIERlcGxveVIgZXZlbnQgc3RyZWFtIHRvIHB1c2ggZXZlbnRzIG9ubHkgZm9yIHRoaXMgcHJvamVjdC5cbiAgICpcbiAgICogQG1ldGhvZCBwcm9qZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9qZWN0IFRoZSBwcm9qZWN0IGlkZW50aWZpZXIuXG4gICAqIEByZXR1cm4ge0V2ZW50U3RyZWFtfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBwcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgdGhpcy5maWx0ZXIucHJvamVjdCA9ICdwcm9qZWN0PScgKyBwcm9qZWN0OyBcbiAgICB0aGlzLmZpbHRlci5qb2IgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluZGljYXRlIHRoZSBEZXBsb3lSIGV2ZW50IHN0cmVhbSB0byBwdXNoIGV2ZW50cyBvbmx5IGZvciB0aGlzIGpvYi5cbiAgICpcbiAgICogQG1ldGhvZCBwcm9qZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBqb2IgVGhlIGpvYiBpZGVudGlmaWVyLlxuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgam9iOiBmdW5jdGlvbihqb2IpIHtcbiAgICB0aGlzLmZpbHRlci5qb2IgPSAnam9iPScgKyAgam9iOyBcbiAgICB0aGlzLmZpbHRlci5wcm9qZWN0ID0gbnVsbDsgICAgXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogSWYgc3BlY2lmaWVkIHRoZW4gZXZlbnQgc3RyZWFtIGNvbm5lY3Rpb24gdHlwZSBpcyBtYW5hZ2VtZW50LlxuICAgKlxuICAgKiBAbWV0aG9kIG1hbmFnZW1lbnRFdmVudE9ubHlcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgbWFuYWdlbWVudEV2ZW50T25seTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maWx0ZXIgPSB7XG4gICAgICB0eXBlOiAnbWFuYWdlbWVudEV2ZW50T25seT10cnVlJyxcbiAgICAgIHByb2plY3Q6IG51bGwsXG4gICAgICBqb2I6IG51bGxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIElmIHNwZWNpZmllZCB0aGVuIGFuIGF1dGhlbnRpY2F0ZWQgZXZlbnQgc3RyZWFtIHdpbGwgc2VlIG9ubHkgZXhlY3V0aW9uIFxuICAgKiBldmVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IEhUVFAgc2Vzc2lvbi5cbiAgICpcbiAgICogQG1ldGhvZCBodHRwRXZlbnRPbmx5XG4gICAqIEByZXR1cm4ge0V2ZW50U3RyZWFtfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGh0dHBFdmVudE9ubHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZmlsdGVyLnR5cGUgPSAnaHR0cEV2ZW50T25seT10cnVlJztcblxuICAgIHJldHVybiB0aGlzO1xuICB9LCAgXG5cbiAgLyoqXG4gICAqIElmIHNwZWNpZmllZCB0aGVuIGV4ZWN1dGlvbiBgZXhlY3V0aW9uQ29uc29sZUV2ZW50YCBldmVudHMgYXJlIHN1cHByZXNzZWRcbiAgICogb24gdGhlIGV2ZW50IHN0cmVhbS5cbiAgICpcbiAgICogQG1ldGhvZCByZXZvRXZlbnRPbmx5XG4gICAqIEByZXR1cm4ge0V2ZW50U3RyZWFtfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyBcbiAgcmV2b0V2ZW50T25seTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maWx0ZXIudHlwZSA9ICdyZXZvRXZlbnRPbmx5PXRydWUnO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBhbGw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZmlsdGVyID0geyB0eXBlOiBudWxsLCBwcm9qZWN0OiBudWxsLCBqb2I6IG51bGwgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgc2Vzc2lvbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cEV2ZW50T25seSgpO1xuICB9LCBcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIG1hbmFnZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hbmFnZW1lbnRFdmVudE9ubHkoKTtcbiAgfVxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGEgRGVwbG95UiBwb3J0IG9mIHl1aS1sYW5nLmpzIGJ5IFlhaG9vIVxuICpcbiAqIFNvZnR3YXJlIExpY2Vuc2UgQWdyZWVtZW50IChCU0QgTGljZW5zZSlcbiAqIENvcHlyaWdodCAoYykgMjAxMywgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIG9mIHRoaXMgc29mdHdhcmUgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3IgXG4gKiB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBcbiAqIGFyZSBtZXQ6XG4gKlxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIFxuICogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgXG4gKiBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgXG4gKiB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCBcbiAqIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIFlhaG9vISBJbmMuIG5vciB0aGUgbmFtZXMgb2YgWVVJJ3MgY29udHJpYnV0b3JzIG1heSBiZSBcbiAqIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgXG4gKiBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24gb2YgWWFob28hIEluYy5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBcbiAqIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBcbiAqIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgXG4gKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBcbiAqIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBcbiAqIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIFxuICogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgXG4gKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSAgXG4gKiBQT1MgU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBjb3JlIGxhbmd1YWdlIHV0aWxpdGVzIGFuZCBleHRlbnNpb25zIHVzZWQgdGhyb3VnaG91dCBEZXBsb3lSLlxuICpcbiAqIEBjbGFzcyBMYW5nXG4gKiBAc3RhdGljXG4gKi9cbnZhciBMID0ge30sIFxuXHRUT1NUUklORyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsIFxuXHRUWVBFUyA9IHtcdFxuXHRcdCd1bmRlZmluZWQnIDogJ3VuZGVmaW5lZCcsXG5cdFx0J251bWJlcicgOiAnbnVtYmVyJyxcblx0XHQnYm9vbGVhbicgOiAnYm9vbGVhbicsXG5cdFx0J3N0cmluZycgOiAnc3RyaW5nJyxcblx0XHQnW29iamVjdCBGdW5jdGlvbl0nIDogJ2Z1bmN0aW9uJyxcblx0XHQnW29iamVjdCBSZWdFeHBdJyA6ICdyZWdleHAnLFxuXHRcdCdbb2JqZWN0IEFycmF5XScgOiAnYXJyYXknLFxuXHRcdCdbb2JqZWN0IERhdGVdJyA6ICdkYXRlJyxcblx0XHQnW29iamVjdCBFcnJvcl0nIDogJ2Vycm9yJ1xuXHR9LCB1bnNhZmVOYXRpdmVzID0gZmFsc2U7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBudWxsLlxuICogQG1ldGhvZCBpc051bGxcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBudWxsLlxuICovXG5MLmlzTnVsbCA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIG8gPT09IG51bGw7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIGl0ZW0gaXMgdW5kZWZpbmVkLlxuICogQG1ldGhvZCBpc1VuZGVmaW5lZFxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIHVuZGVmaW5lZC5cbiAqL1xuTC5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIHR5cGVvZiBvID09PSAndW5kZWZpbmVkJztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBvZiB0eXBlIG9iamVjdFxuICogb3IgZnVuY3Rpb24uIE5vdGUgdGhhdCBhcnJheXMgYXJlIGFsc28gb2JqZWN0cywgc29cbiAqIDxjb2RlPlkuTGFuZy5pc09iamVjdChbXSkgPT09IHRydWU8L2NvZGU+LlxuICogQG1ldGhvZCBpc09iamVjdFxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHBhcmFtIGZhaWxmbiB7Ym9vbGVhbn0gZmFpbCBpZiB0aGUgaW5wdXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBhbiBvYmplY3QuXG4gKiBAc2VlIGlzUGxhaW5PYmplY3RcbiAqL1xuTC5pc09iamVjdCA9IGZ1bmN0aW9uKG8sIGZhaWxmbikge1xuXHR2YXIgdCA9IHR5cGVvZiBvO1xuXHRyZXR1cm4gKG8gJiYgKHQgPT09ICdvYmplY3QnIHx8ICghZmFpbGZuICYmICh0ID09PSAnZnVuY3Rpb24nIHx8IEwuaXNGdW5jdGlvbihvKSkpKSkgfHwgZmFsc2U7XG59O1xuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIGFuIGFycmF5LlxuICpcbiAqIFJldHVybnMgYGZhbHNlYCBmb3IgYXJyYXktbGlrZSBjb2xsZWN0aW9ucyBzdWNoIGFzIHRoZSBmdW5jdGlvbiBgYXJndW1lbnRzYFxuICogY29sbGVjdGlvbiBvciBgSFRNTEVsZW1lbnRgIGNvbGxlY3Rpb25zLlxuICpcbiAqIEBtZXRob2QgaXNBcnJheVxuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGFuIGFycmF5LlxuICogQHN0YXRpY1xuICovXG5MLmlzQXJyYXkgPSAoIXVuc2FmZU5hdGl2ZXMgJiYgQXJyYXkuaXNBcnJheSkgfHxcbmZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIEwudHlwZShvKSA9PT0gJ2FycmF5Jztcbn07XG5cbkwuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb25BKG8pIHtcblx0cmV0dXJuICh0eXBlb2YobykgPT09IFwiZnVuY3Rpb25cIik7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIGl0ZW0gaXMgYSBib29sZWFuLlxuICogQG1ldGhvZCBpc0Jvb2xlYW5cbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBhIGJvb2xlYW4uXG4gKi9cbkwuaXNCb29sZWFuID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICdib29sZWFuJztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgc3VwcGxpZWQgaXRlbSBpcyBhIGRhdGUgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGlzRGF0ZVxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgZGF0ZS5cbiAqL1xuTC5pc0RhdGUgPSBmdW5jdGlvbihvKSB7XG5cdHJldHVybiBMLnR5cGUobykgPT09ICdkYXRlJyAmJiBvLnRvU3RyaW5nKCkgIT09ICdJbnZhbGlkIERhdGUnICYmICFpc05hTihvKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBhIGxlZ2FsIG51bWJlci5cbiAqIEBtZXRob2QgaXNOdW1iZXJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBhIG51bWJlci5cbiAqL1xuTC5pc051bWJlciA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShvKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBhIHN0cmluZy5cbiAqIEBtZXRob2QgaXNTdHJpbmdcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBvIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgbyBpcyBhIHN0cmluZy5cbiAqL1xuTC5pc1N0cmluZyA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJztcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgb2YgdGhlIGl0ZW0gcGFzc2VkIGluLlxuICpcbiAqIEBtZXRob2QgdHlwZVxuICogQHBhcmFtIG8gdGhlIGl0ZW0gdG8gdGVzdC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGRldGVjdGVkIHR5cGUuXG4gKiBAc3RhdGljXG4gKi9cbkwudHlwZSA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIFRZUEVTWyB0eXBlb2Ygb10gfHwgVFlQRVNbVE9TVFJJTkcuY2FsbChvKV0gfHwgKCBvID8gJ29iamVjdCcgOiAnbnVsbCcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuIFxudmFyIExvZ2dlciA9IHt9LFxuICAgIGxvZ2dlck1hcCA9IHt9LFxuICAgIGdsb2JhbExvZ2dlcjtcblxuLyoqXG4gKiBVbml2ZXJzYWwgc3Rkb3V0fHN0ZGVyciBwcmludGVyXG4gKi9cbmZ1bmN0aW9uIGxvZyhtZXNzYWdlcywgY29udGV4dCkge1x0XG5cdGlmICghY29uc29sZSkgeyByZXR1cm47IH1cblxuXHRmdW5jdGlvbiBzZXAobGV2ZWwpIHtcblx0XHR2YXIgc2VwID0gJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScgK1xuXHRcdCAgICAgICAgICAnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJyxcblx0XHQgICAgb2Zmc2V0ID0gMDtcblxuXHRcdGlmIChsZXZlbCA9PT0gTG9nZ2VyLkRFQlVHIHx8IGxldmVsID09PSBMb2dnZXIuRVJST1IpIG9mZnNldCA9IDg7XG5cdFx0ZWxzZSBpZiAobGV2ZWwgPT09IExvZ2dlci5JTkZPIHx8IGxldmVsID09PSBMb2dnZXIuV0FSTikgb2Zmc2V0ID0gODtcblx0XHRlbHNlIG9mZnNldCA9IDc7XG5cblx0XHRyZXR1cm4geyBzdGFydDogc2VwLnN1YnN0cmluZyhvZmZzZXQpLCBlbmQ6IHNlcCB9O1xuXHR9XG5cblx0dmFyIGhkbHIsXG5cdCAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZXMsIDApLFxuXHQgICAgbmFtZSA9IGNvbnRleHQubmFtZSxcblx0ICAgIGVycm9yID0gY29udGV4dC5sZXZlbCA9PT0gTG9nZ2VyLkVSUk9SLFxuICBcdCAgICBkZWxpbSA9IHNlcChjb250ZXh0LmxldmVsKTtcblxuICBcdGlmIChjb250ZXh0LmxldmVsID09PSBMb2dnZXIuV0FSTiAmJiBjb25zb2xlLndhcm4pIHtcbiAgXHRcdGhkbHIgPSAnd2Fybic7XG4gIFx0fSBlbHNlIGlmIChjb250ZXh0LmxldmVsID09PSBMb2dnZXIuRVJST1IgJiYgY29uc29sZS5lcnJvcikge1xuICBcdFx0aGRsciA9ICdlcnJvcic7XG4gIFx0fSBlbHNlIGlmIChjb250ZXh0LmxldmVsID09PSBMb2dnZXIuSU5GTyAmJiBjb25zb2xlLmluZm8pIHtcbiAgXHRcdGhkbHIgPSAnaW5mbyc7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdGhkbHIgPSAnbG9nJztcbiAgXHR9XG5cbiAgXHQvLyAtLSBjdXN0b20gZm9ybWF0IGxvZ2dpbmcgc3RhdGVtZW50IGZvciBkZXBsb3lyIHJlcXVlc3QvcmVzcG9uc2UvZXJyb3IgLS1cbiAgXHRhcmdzLnVuc2hpZnQoJ1snICsgKGVycm9yID8gTG9nZ2VyLkVSUk9SLm5hbWUgOiBuYW1lKSArICddICcgKyBkZWxpbS5zdGFydCk7XG4gIFx0YXJncy5wdXNoKGRlbGltLmVuZCk7XG5cbiAgXHRjb25zb2xlW2hkbHJdKGFyZ3NbMF0sIFthcmdzWzFdICsgJyAtLS0+ICcgKyBhcmdzWzJdWydjYWxsJ11dKTtcblxuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJncy5sZW5ndGg7IGkrKykgeyBjb25zb2xlLmxvZyhhcmdzW2ldKTsgfSAgXG59XG5cbi8qKlxuICogTG9nZ2luZyBjYXRlZ29yeSBieSBpZC5cbiAqL1xuZnVuY3Rpb24gQ2F0ZWdvcnkoaWQsIGxldmVsLCBmbikge1xuXHR0aGlzLmlkID0gaWQ7XG5cdHRoaXMuY29udGV4dCA9IGxldmVsIHx8IExvZ2dlci5ERUJVRztcbn1cblxuQ2F0ZWdvcnkucHJvdG90eXBlID0ge1x0XG5cdGxvZzogZnVuY3Rpb24obGV2ZWwsIG1zZ0FyZ3MpIHtcblx0XHRpZiAobGV2ZWwudmFsdWUgPj0gdGhpcy5jb250ZXh0LnZhbHVlKSB7XHRcdFx0XG5cdFx0XHRsb2cobXNnQXJncywgeyBcblx0XHRcdFx0bGV2ZWw6IGxldmVsLFxuXHRcdFx0XHRuYW1lOiB0aGlzLmNvbnRleHQubmFtZSxcblx0XHRcdFx0dmFsdWU6IHRoaXMuY29udGV4dC52YWx1ZVxuXHRcdFx0fSk7XHRcdFxuXHRcdH1cblx0fSxcblxuXHRkZWJ1ZzogZnVuY3Rpb24gKCkge1x0XHRcblx0XHR0aGlzLmxvZyhMb2dnZXIuREVCVUcsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0ZXJyb3I6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmxvZyhMb2dnZXIuRVJST1IsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0aW5mbzogZnVuY3Rpb24gKCkge1x0XHRcblx0XHR0aGlzLmxvZyhMb2dnZXIuSU5GTywgYXJndW1lbnRzKTtcblx0fSxcblxuXHR3YXJuOiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5sb2coTG9nZ2VyLldBUk4sIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0c2V0TGV2ZWw6IGZ1bmN0aW9uKGxldmVsKSB7XG5cdFx0aWYgKGxldmVsICYmICd2YWx1ZScgaW4gbGV2ZWwpIHtcblx0XHRcdHRoaXMuY29udGV4dCA9IGxldmVsO1xuXHRcdH1cblx0fVxufTtcblxuTG9nZ2VyLkRFQlVHID0geyB2YWx1ZTogMSwgbmFtZTogJ0RFQlVHJyB9O1xuTG9nZ2VyLklORk8gID0geyB2YWx1ZTogMiwgbmFtZTogJ0lORk8nIH07XG5Mb2dnZXIuV0FSTiAgPSB7IHZhbHVlOiA0LCBuYW1lOiAnV0FSTicgfTtcbkxvZ2dlci5FUlJPUiA9IHsgdmFsdWU6IDgsIG5hbWU6ICdFUlJPUicgfTtcbkxvZ2dlci5PRkYgICA9IHsgdmFsdWU6IDk5LCBuYW1lOiAnT0ZGJyB9OyAgIFx0XHRcblxuTG9nZ2VyLnNldExldmVsID0gZnVuY3Rpb24obmV3TGV2ZWwpIHtcblx0Z2xvYmFsTG9nZ2VyLnNldExldmVsKG5ld0xldmVsKTtcbn07XG5cbkxvZ2dlci5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcblx0Z2xvYmFsTG9nZ2VyLmRlYnVnLmFwcGx5KGdsb2JhbExvZ2dlciwgYXJndW1lbnRzKTtcbn07XG5cbkxvZ2dlci5pbmZvID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIuaW5mby5hcHBseShnbG9iYWxMb2dnZXIsIGFyZ3VtZW50cyk7XG59O1xuXG5Mb2dnZXIud2FybiA9IGZ1bmN0aW9uICgpIHtcblx0Z2xvYmFsTG9nZ2VyLndhcm4uYXBwbHkoZ2xvYmFsTG9nZ2VyLCBhcmd1bWVudHMpO1xufTtcblxuTG9nZ2VyLmVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIuZXJyb3IuYXBwbHkoZ2xvYmFsTG9nZ2VyLCBhcmd1bWVudHMpO1xufTtcblxuTG9nZ2VyLmdldCA9IGZ1bmN0aW9uIChpZCwgbGV2ZWwsIGZuKSB7XHRcblx0cmV0dXJuIChsb2dnZXJNYXBbaWRdIHx8IChmdW5jdGlvbigpIHtcblx0XHRsb2dnZXJNYXBbaWRdID0gbmV3IENhdGVnb3J5KGlkLCBsZXZlbCwgZm4pO1xuXHRcdHJldHVybiBsb2dnZXJNYXBbaWRdO1xuXHR9KSgpKTtcbn07XG5cbi8vIC0tLSBzZXR1cCB0aGUgZ2xvYmFsIGxvZ2dlciAtLS1cbmdsb2JhbExvZ2dlciA9IExvZ2dlci5nZXQoJ2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyBcdD0gTG9nZ2VyO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG4gXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICB0cnkge1xuICAgIHJldHVybiByZXF1aXJlKG1vZHVsZSk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59OyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG5mdW5jdGlvbiBRdWV1ZSgpIHtcbiAgdGhpcy5lbXB0eUNhbGxiYWNrID0gbnVsbDtcbiAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgdGhpcy55aWVsZGVkID0gZmFsc2U7XG4gIHRoaXMucmVzcG9uc2UgPSBudWxsO1xuICB0aGlzLnJlc3BvbnNlQ2hhaW4gPSBbXTsgIFxufVxuXG5RdWV1ZS5wcm90b3R5cGUgPSB7XG5cbiAgYWRkOiBmdW5jdGlvbihmbiwgY3R4LCBkZWZlcikge1xuICAgIC8vIGN1cnJlbnRseSBub3Qgd2FpdGluZyBhbmQgdGhlcmUgaXMgbm8gZGVmZXIgZGVsYXkganVzdCBtYWtlIGNhbGxcbiAgICBpZiAoIXRoaXMueWllbGRlZCAmJiAhZGVmZXIpIHsgICAgICBcbiAgICAgIGZuLmFwcGx5KGN0eCB8fCB0aGlzLCBbdGhpcy5yZXNwb25zZV0pO1xuICAgIH0gZWxzZSB7IC8vIGFkZCB0byBxdWV1ZVxuICAgICAgdGhpcy5jYWxsYmFja3MucHVzaCh7IGZuOiBmbiwgY3R4OiBjdHggfSk7XG4gICAgfVxuICB9LFxuXG4gIHNpemU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrcy5sZW5ndGg7XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzLmxlbmd0aCA9PT0gMDtcbiAgfSxcblxuICBlbXB0eTogZnVuY3Rpb24oZm4sIGN0eCkge1xuICAgIHRoaXMuZW1wdHlDYWxsYmFjayA9IHsgZm46IGZuLCBjdHg6IGN0eCB9O1xuICB9LFxuXG4gIHlpZWxkOiBmdW5jdGlvbih5aWVsZCkge1xuICAgIHRoaXMueWllbGRlZCA9IHlpZWxkO1xuICB9LFxuXG4gIHRha2U6IGZ1bmN0aW9uKHJlc3BvbnNlLCBlcnJvciwgYXJncykgeyBcbiAgICB2YXIgY2I7XG5cbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgIHRoaXMucmVzcG9uc2VDaGFpbi5wdXNoKHJlc3BvbnNlKTtcbiAgICB9XG5cblxuICAgIGlmICghdGhpcy55aWVsZGVkICYmIHRoaXMuY2FsbGJhY2tzWzBdKSB7XG4gICAgICBjYiA9IHRoaXMuY2FsbGJhY2tzLnNoaWZ0KCk7XG4gICAgICBjYi5mbi5hcHBseShjYi5jdHggfHwgdGhpcywgW3RoaXMucmVzcG9uc2VDaGFpbiwgZXJyb3IsIGFyZ3NdKTtcblxuICAgICAgLy8gbm90aWZ5IHRoYXQgdGhlIHF1ZXVlIGlzIG5vdyBlbXB0eSAgIFxuICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzWzBdICYmIHRoaXMuZW1wdHlDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVtcHR5Q2FsbGJhY2suZm4uY2FsbCh0aGlzLmVtcHR5Q2FsbGJhY2suY3R4IHx8IHRoaXMpOyAgICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXG4gIGZsdXNoOiBmdW5jdGlvbihyZXNwb25zZSwgZXJyb3IsIGFyZ3MpIHsgICAgICAgIFxuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5yZXNwb25zZUNoYWluLnB1c2gocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIC8vIHBvcCBhbmQgY2FsbCBuZXh0IGlubGluZVxuICAgIHdoaWxlICh0aGlzLmNhbGxiYWNrc1swXSkge1xuICAgICAgaWYgKHRoaXMueWllbGRlZCkgeyBicmVhazsgfVxuICAgICAgdmFyIGNiID0gdGhpcy5jYWxsYmFja3Muc2hpZnQoKTtcbiAgICAgIGNiLmZuLmFwcGx5KGNiLmN0eCB8fCB0aGlzLCBbdGhpcy5yZXNwb25zZUNoYWluLCBlcnJvciwgYXJnc10pO1xuXG4gICAgICAvLyBub3RpZnkgdGhhdCB0aGUgcXVldWUgaXMgbm93IGVtcHR5XG4gICAgICBpZiAodGhpcy5jYWxsYmFja3NbMF0gJiYgdGhpcy5lbXB0eUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZW1wdHlDYWxsYmFjay5mbi5jYWxsKHRoaXMuZW1wdHlDYWxsYmFjay5jdHggfHwgdGhpcyk7ICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSAgID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZSxcbiAgICBSVHlwZXMgPSByZXF1aXJlKCcuL3J0eXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKFJUeXBlcywge1xuXHRpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7ICBcdFxuXHRcdHRoaXMubmFtZSAgPSBuYW1lO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHR9LFxuXG5cdG51bWVyaWM6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBzdXBwb3J0IGBTdHJpbmdgIG51bWJlcnMgKGUuZy4gXCIxLjJcIilcblx0XHR0aGlzLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtcblxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7XG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUk5VTUVSSUMsXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pO1xuXHR9LFx0XG5cblx0aW50ZWdlcjogZnVuY3Rpb24gKCkge1xuXHRcdC8vIHN1cHBvcnQgYFN0cmluZ2AgaW50ZWdlciAoZS5nLiBcIjE1XCIpXG5cdFx0dGhpcy52YWx1ZSA9IHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKTtcblxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJJTlRFR0VSLFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRsb2dpY2FsOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkJPT0xFQU4sIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRjaGFyYWN0ZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SU1RSSU5HLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0ZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJEQVRFLFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0Zm9ybWF0OiAneXl5eS1NTS1kZCcsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRwb3NpeGN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEUsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0Zm9ybWF0OiAneXl5eS1NTS1kZCBISDptbTpzcyBaJyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFx0XG5cdFxuXHRudW1lcmljVmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUixcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0aW50ZWdlclZlY3RvcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJJTlRFR0VSX1ZFQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGxvZ2ljYWxWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkJPT0xFQU5fVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0Y2hhcmFjdGVyVmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJTVFJJTkdfVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LCAgXG5cdFxuXHRkYXRlVmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJEQVRFX1ZFQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRmb3JtYXQ6ICd5eXl5LU1NLWRkJyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFx0XG5cdFxuXHRwb3NpeGN0VmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRmb3JtYXQ6ICd5eXl5LU1NLWRkIEhIOm1tOnNzIFonLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRsaXN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkxJU1QsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRkYXRhZnJhbWU6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkRBVEFGUkFNRSwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRmYWN0b3I6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgb3B0cyA9IHRoaXMub3B0aW9ucztcblxuXHRcdHJldHVybiB0aGlzLmFzc2VydCggeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SRkFDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdG9yZGVyZWQ6IGZhbHNlLFxuXHRcdFx0bGV2ZWxzOiBvcHRzLmxldmVscyxcblx0XHRcdGxhYmVsczogb3B0cy5sYWJlbHMsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRvcmRlcmVkOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoIHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUk9SREVSRUQsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0b3JkZXJlZDogdHJ1ZSxcblx0XHRcdGxldmVsczogb3B0cy5sZXZlbHMsXG5cdFx0XHRsYWJlbHM6IG9wdHMubGFiZWxzLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXHRcdFxuXG5cdG51bWVyaWNNYXRyaXg6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUk5VTUVSSUNfTUFUUklYLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdGludGVnZXJNYXRyaXg6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUklOVEVHRVJfTUFUUklYLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdGxvZ2ljYWxNYXRyaXg6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkJPT0xFQU5fTUFUUklYLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdGNoYXJhY3Rlck1hdHJpeDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJTVFJJTkdfTUFUUklYLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgb3B0cyAgID0gdGhpcy5vcHRpb25zIHx8IHt9LFxuXHRcdCAgICBsZXZlbHMgPSBvcHRzLmxldmVscyA/ICdbIGxldmVscyA9ICcgKyBvcHRzLmxldmVscyArICddJyA6ICcnLFxuXHRcdCAgICBsYWJlbHMgPSBvcHRzLmxhYmVscyA/ICdbIGxhYmVscyA9ICcgKyBvcHRzLmxhYmVscyArICddJyA6ICcnO1xuXG5cdFx0cmV0dXJuICdbIG5hbWUgPSAnICArIHRoaXMubmFtZSArICcgXSAnICtcblx0XHQgICAgICAgJ1sgdmFsdWUgPSAnICsgdGhpcy52YWx1ZSArICcgXSAnICtcblx0XHQgICAgICAgJ1sgdHlwZSA9ICcgICsgdGhpcy50eXBlICsgJyBdICcgK1xuXHRcdCAgICAgICBsZXZlbHMgKyBsYWJlbHM7XHRcdCAgICAgICBcblx0fVxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlICAgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJUeXBlcyA9IHJlcXVpcmUoJy4vcnR5cGVzJyksXG4gICAgTGFuZyAgID0gcmVxdWlyZSgnLi9sYW5nJyksXG4gICAgUklucHV0ID0gcmVxdWlyZSgnLi9yaW5wdXQnKTsgXG5cbmZ1bmN0aW9uIGNyZWF0ZSh0eXBlLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuXHR2YXIgcmlucHV0O1xuXG5cdGlmIChMYW5nLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0cmlucHV0ID0gbmFtZTtcblx0XHRpZiAoIXJpbnB1dC50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWxBcmd1bWVudEVycm9yOicgKyBcblx0XHRcdFx0J0V4cGVjdGluZyBcIicgKyB0eXBlICsgJ1wiIGJ1dCBmb3VuZCBcIicgKyByaW5wdXQudHlwZSArICdcIicpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0ICAgIHJpbnB1dCA9IFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdGlvbnMpW3R5cGVdKCk7XG5cdH0gXG5cblx0cmV0dXJuIHJpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlLmV4dGVuZChSVHlwZXMsIHtcdFxuXHRudW1lcmljOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUk5VTUVSSUMsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRpbnRlZ2VyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUklOVEVHRVIsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0bG9naWNhbDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJCT09MRUFOLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGNoYXJhY3RlcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJTVFJJTkcsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0ZGF0ZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJEQVRFLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblxuXHRwb3NpeGN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEUsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFx0XG5cdFxuXHRudW1lcmljVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRpbnRlZ2VyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUklOVEVHRVJfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGxvZ2ljYWxWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkJPT0xFQU5fVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGNoYXJhY3RlclZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SU1RSSU5HX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sICBcblx0XG5cdGRhdGVWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkRBVEVfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcdFxuXHRcblx0cG9zaXhjdFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SUE9TSVhfREFURV9WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0bGlzdDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJMSVNULCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGRhdGFmcmFtZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SREFUQUZSQU1FLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcdFxuXG5cdGZhY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBsZXZlbHMsIGxhYmVscykge1xuXHRcdHZhciBvcHRzID0geyBsZXZlbHM6IGxldmVscywgbGFiZWxzOiBsYWJlbHMgfTtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkZBQ1RPUiwgbmFtZSwgdmFsdWUsIG9wdHMpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRvcmRlcmVkOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGxldmVscywgbGFiZWxzKSB7XG5cdFx0dmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5ST1JERVJFRCwgbmFtZSwgdmFsdWUsIG9wdHMpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcdFx0XG5cblx0bnVtZXJpY01hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5STlVNRVJJQ19NQVRSSVgsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXG5cdGludGVnZXJNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUklOVEVHRVJfTUFUUklYLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblxuXHRsb2dpY2FsTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJCT09MRUFOX01BVFJJWCwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cblx0Y2hhcmFjdGVyTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUlNUUklOR19NQVRSSVgsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSA9IHJlcXVpcmUoJy4vc2VsZmlzaCcpLkJhc2UsXG4gICAgTGFuZyA9IHJlcXVpcmUoJy4vbGFuZycpLFxuICAgIG1hcCAgPSB7fTsgLy8gZGVwbG95ci0+VG8tPlIgY2F0YWxvZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKHtcblx0cjoge1xuXHRcdFBSSU1JVElWRTogJ3ByaW1pdGl2ZScsXG5cdFx0REFUQUZSQU1FOiAnZGF0YWZyYW1lJyxcblx0XHRMSVNUOiAnbGlzdCcsXG5cdFx0TUFUUklYOiAnbWF0cml4Jyxcblx0XHREQVRFOiAnZGF0ZScsXG5cdFx0RkFDVE9SOiAnZmFjdG9yJyxcblx0XHRWRUNUT1I6ICd2ZWN0b3InXG5cdH0sXG5cblx0ZGVwbG95cjoge1xuXHRcdFJCT09MRUFOOiAnbG9naWNhbCcsXG5cdFx0Uk5VTUVSSUM6ICdudW1lcmljJyxcblx0XHRSSU5URUdFUjogJ2ludGVnZXInLFxuXHRcdFJTVFJJTkc6ICdjaGFyYWN0ZXInLFxuXHRcdFJEQVRFOiAnZGF0ZScsXG5cdFx0UlBPU0lYX0RBVEU6ICdwb3NpeGN0Jyxcblx0XHRSQk9PTEVBTl9WRUNUT1I6ICdsb2dpY2FsVmVjdG9yJyxcblx0XHRSTlVNRVJJQ19WRUNUT1I6J251bWVyaWNWZWN0b3InLFxuXHRcdFJJTlRFR0VSX1ZFQ1RPUjogJ2ludGVnZXJWZWN0b3InLFx0XG5cdFx0UlNUUklOR19WRUNUT1I6ICdjaGFyYWN0ZXJWZWN0b3InLFxuXHRcdFJEQVRFX1ZFQ1RPUjogJ2RhdGVWZWN0b3InLFxuXHRcdFJQT1NJWF9EQVRFX1ZFQ1RPUjogJ3Bvc2l4Y3RWZWN0b3InLFxuXHRcdFJMSVNUOiAnbGlzdCcsXG5cdFx0UkRBVEFGUkFNRTogJ2RhdGFmcmFtZScsXG5cdFx0UkZBQ1RPUjogJ2ZhY3RvcicsXG5cdFx0Uk9SREVSRUQ6ICdvcmRlcmVkJyxcdFx0XG5cdFx0UkJPT0xFQU5fTUFUUklYOiAnbG9naWNhbE1hdHJpeCcsXG5cdFx0Uk5VTUVSSUNfTUFUUklYOiAnbnVtZXJpY01hdHJpeCcsXG5cdFx0UklOVEVHRVJfTUFUUklYOiAnaW50ZWdlck1hdHJpeCcsXHRcdFxuXHRcdFJTVFJJTkdfTUFUUklYOiAnY2hhcmFjdGVyTWF0cml4J1xuXHR9LFxuXG5cdGlzRGF0ZTogZnVuY3Rpb24odHlwZSkge1xuXHRcdHJldHVybiAodHlwZSA9PT0gdGhpcy5kZXBsb3lyLlJEQVRFIHx8IFxuXHRcdCAgICAgICAgdHlwZSA9PT0gdGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFIHx8IFxuXHRcdCAgICAgICAgdHlwZSA9PT0gdGhpcy5kZXBsb3lyLlJEQVRFX1ZFQ1RPUiB8fFxuXHRcdCAgICAgICAgdHlwZSA9PT0gdGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiB8fFxuXHRcdCAgICAgICAgdHlwZSA9PT0gdGhpcy5yLkRBVEUpO1xuXHR9LFxuXG5cdGRlcGxveXJUb1I6IGZ1bmN0aW9uKHR5cGUpIHtcdFxuXHRcdHZhciBkZXBsb3lyID0gdGhpcy5kZXBsb3lyLFxuXHRcdCAgICByICAgICAgID0gdGhpcy5yO1xuXG5cdFx0aWYgKCFtYXBbdHlwZV0pIHsgLy8gYnVpbGQgY2F0YWxvZyBvbmx5IG9uY2VcdFxuXHRcdFx0bWFwW2RlcGxveXIuUkJPT0xFQU5dICAgICAgICAgICA9IHIuUFJJTUlUSVZFO1xuXHRcdFx0bWFwW2RlcGxveXIuUk5VTUVSSUNdICAgICAgICAgICA9IHIuUFJJTUlUSVZFO1xuXHRcdFx0bWFwW2RlcGxveXIuUklOVEVHRVJdICAgICAgICAgICA9IHIuUFJJTUlUSVZFO1xuXHRcdFx0bWFwW2RlcGxveXIuUlNUUklOR10gICAgICAgICAgICA9IHIuUFJJTUlUSVZFO1xuXHRcdFx0bWFwW2RlcGxveXIuUkRBVEVdICAgICAgICAgICAgICA9IHIuREFURTtcblx0XHRcdG1hcFtkZXBsb3lyLlJQT1NJWF9EQVRFXSAgICAgICAgPSByLkRBVEU7XG5cdFx0XHRtYXBbZGVwbG95ci5SQk9PTEVBTl9WRUNUT1JdICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5STlVNRVJJQ19WRUNUT1JdICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SSU5URUdFUl9WRUNUT1JdICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SU1RSSU5HX1ZFQ1RPUl0gICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SREFURV9WRUNUT1JdICAgICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SUE9TSVhfREFURV9WRUNUT1JdID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5STElTVF0gICAgICAgICAgICAgID0gci5MSVNUO1xuXHRcdFx0bWFwW2RlcGxveXIuUkRBVEFGUkFNRV0gICAgICAgICA9IHIuREFUQUZSQU1FO1xuXHRcdFx0bWFwW2RlcGxveXIuUkZBQ1RPUl0gICAgICAgICAgICA9IHIuRkFDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUk9SREVSRURdICAgICAgICAgICA9IHIuRkFDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUkJPT0xFQU5fTUFUUklYXSAgICA9IHIuTUFUUklYO1xuXHRcdFx0bWFwW2RlcGxveXIuUk5VTUVSSUNfTUFUUklYXSAgICA9IHIuTUFUUklYO1xuXHRcdFx0bWFwW2RlcGxveXIuUklOVEVHRVJfTUFUUklYXSAgICA9IHIuTUFUUklYO1xuXHRcdFx0bWFwW2RlcGxveXIuUlNUUklOR19NQVRSSVhdICAgICA9IHIuTUFUUklYO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXBbdHlwZV07XHRcdFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBBc3NlcnQgdGhhdCB0aGUgYHJpbnB1dGAgdmFsdWUgaXMgdGhlIGNvcnJlY3QgSmF2YVNjcmlwdCBEYXRhIFR5cGUuXG5cdCAqL1xuXHRhc3NlcnQ6IGZ1bmN0aW9uIChyaW5wdXQpIHtcblx0XHR2YXIgZGVwbG95ciA9IHRoaXMuZGVwbG95cixcbiAgICBcdFx0Tk9PUCAgICA9IG51bGwsXG5cdFx0ICAgIHZhbHVlcyAgPSByaW5wdXQudmFsdWUsXG5cdFx0ICAgIGZuO1xuXG5cdFx0dmFsdWVzID0gIUxhbmcuaXNBcnJheSh2YWx1ZXMpID8gW3ZhbHVlc10gOiB2YWx1ZXM7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHZhbHVlID0gdmFsdWVzW2ldO1xuXG5cdFx0XHRzd2l0Y2ggKHJpbnB1dC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgZGVwbG95ci5STlVNRVJJQyA6XG5cdFx0XHRcdGNhc2UgZGVwbG95ci5STlVNRVJJQ19WRUNUT1IgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SSU5URUdFUiA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJJTlRFR0VSX1ZFQ1RPUiA6XG5cdFx0XHQgICAgZm4gPSBMYW5nLmlzTnVtYmVyO1xuXHRcdFx0ICAgIGJyZWFrO1xuXG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJCT09MRUFOIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkJPT0xFQU5fVkVDVE9SIDpcblx0XHRcdCAgICBmbiA9IExhbmcuaXNCb29sZWFuO1xuXHRcdFx0ICAgIGJyZWFrO1xuXHRcdFx0ICAgIFxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SU1RSSU5HIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUlNUUklOR19WRUNUT1IgOlx0XG5cdFx0XHQgICAgZm4gPSBMYW5nLmlzU3RyaW5nO1xuXHRcdFx0ICAgIGJyZWFrO1xuXG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJEQVRFIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUlBPU0lYX0RBVEUgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SREFURV9WRUNUT1IgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SUE9TSVhfREFURV9WRUNUT1IgOlxuXHRcdFx0ICAgIGZuID0gTGFuZy5pc0RhdGU7XG5cdFx0XHQgICAgYnJlYWs7XG5cblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkZBQ1RPUiA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJPUkRFUkVEIDpcdFx0XHQgICAgXG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJEQVRBRlJBTUUgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SSU5URUdFUl9NQVRSSVggOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SQk9PTEVBTl9NQVRSSVggOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SU1RSSU5HX01BVFJJWCA6XHQgICAgXG5cdFx0XHQgICAgZm4gPSBOT09QO1xuXHRcdFx0ICAgIGJyZWFrXG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbiAmJiAhZm4odmFsdWUpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignUklucHV0Rm9ybWF0RXJyb3I6ICcgKyAnXCInICsgdmFsdWUgKyBcblx0XHRcdFx0XHQnXCIgaXMgbm90IGEgdmFsaWQgXCInICsgcmlucHV0LnR5cGUgKyAnXCIgdHlwZSBmb3IgaW5wdXQgJyArXG5cdFx0XHRcdFx0J1wiJyArIHJpbnB1dC5uYW1lICsgJ1wiJyk7XHRcdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByaW5wdXQ7XG5cdH1cbn0pOyIsIi8qIVxuICogaHR0cHM6Ly9naXRodWIuY29tL0dvemFsYS9zZWxmaXNoXG4gKi9cblxuLyogdmltOnNldCB0cz0yIHN3PTIgc3RzPTIgZXhwYW5kdGFiICovXG4vKmpzaGludCB1bmRlZjogdHJ1ZSBlczU6IHRydWUgbm9kZTogdHJ1ZSBkZXZlbDogdHJ1ZSBldmlsOiB0cnVlXG4gICAgICAgICBmb3JpbjogdHJ1ZSBsYXRlZGVmOiBmYWxzZSBzdXBlcm5ldzogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiB0cnVlICovXG5cbiEodHlwZW9mIGRlZmluZSAhPT0gXCJmdW5jdGlvblwiID8gZnVuY3Rpb24oJCl7ICQobnVsbCwgdHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnID8gZXhwb3J0cyA6IHdpbmRvdyk7IH0gOiBkZWZpbmUpKGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuQmFzZSA9IE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShPYmplY3QucHJvdG90eXBlLCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYHRoaXNgIG9iamVjdCAoQW5hbG9nIG9mXG4gICAqIGBuZXcgT2JqZWN0KClgKS5cbiAgICogQGV4YW1wbGVzXG4gICAqXG4gICAqICAgIHZhciBEb2cgPSBCYXNlLmV4dGVuZCh7XG4gICAqICAgICAgYmFyazogZnVuY3Rpb24gYmFyaygpIHtcbiAgICogICAgICAgIHJldHVybiAnUnVmZiEgUnVmZiEnXG4gICAqICAgICAgfVxuICAgKiAgICB9KTtcbiAgICogICAgdmFyIGRvZyA9IERvZy5uZXcoKTtcbiAgICovXG4gICduZXcnOiB7IHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgb2JqZWN0LmluaXRpYWxpemUuYXBwbHkob2JqZWN0LCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH19LFxuICAvKipcbiAgICogV2hlbiBuZXcgaW5zdGFuY2Ugb2YgdGhlIHRoaXMgcHJvdG90eXBlIGlzIGNyZWF0ZWQgaXQncyBgaW5pdGlhbGl6ZWBcbiAgICogbWV0aG9kIGlzIGNhbGxlZCB3aXRoIGFsbCB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgYG5ld2AuIFlvdSBjYW5cbiAgICogb3ZlcnJpZGUgYGluaXRpYWxpemVgIHRvIHNldCB1cCBhbiBpbnN0YW5jZS5cbiAgICovXG4gIGluaXRpYWxpemU6IHsgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIH19LFxuICAvKipcbiAgICogTWVyZ2VzIGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgcGFzc2VkIG9iamVjdHMgaW50byBgdGhpc2AgaW5zdGFuY2UgKFRoaXNcbiAgICogbWV0aG9kIGNhbiBiZSB1c2VkIG9uIGluc3RhbmNlcyBvbmx5IGFzIHByb3RvdHlwZSBvYmplY3RzIGFyZSBmcm96ZW4pLlxuICAgKlxuICAgKiBJZiB0d28gb3IgbW9yZSBhcmd1bWVudCBvYmplY3RzIGhhdmUgb3duIHByb3BlcnRpZXMgd2l0aCB0aGUgc2FtZSBuYW1lLFxuICAgKiB0aGUgcHJvcGVydHkgaXMgb3ZlcnJpZGRlbiwgd2l0aCBwcmVjZWRlbmNlIGZyb20gcmlnaHQgdG8gbGVmdCwgaW1wbHlpbmcsXG4gICAqIHRoYXQgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IG9uIHRoZSBsZWZ0IGFyZSBvdmVycmlkZGVuIGJ5IGEgc2FtZSBuYW1lZFxuICAgKiBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0IG9uIHRoZSByaWdodC5cbiAgICpcbiAgICogQGV4YW1wbGVzXG4gICAqXG4gICAqICAgIHZhciBQZXQgPSBEb2cuZXh0ZW5kKHtcbiAgICogICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICogICAgICAgIC8vIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZSAtPiB3b3VsZCBoYXZlIHRocm93biAoZnJvemVuIHByb3RvdHlwZSlcbiAgICogICAgICAgIHRoaXMubWVyZ2Uob3B0aW9ucykgLy8gd2lsbCBvdmVycmlkZSBhbGwgcHJvcGVydGllcy5cbiAgICogICAgICB9LFxuICAgKiAgICAgIGNhbGw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICogICAgICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG5hbWUgPyB0aGlzLmJhcmsoKSA6ICcnXG4gICAqICAgICAgfSxcbiAgICogICAgICBuYW1lOiBudWxsXG4gICAqICAgIH0pXG4gICAqICAgIHZhciBwZXQgPSBQZXQubmV3KHsgbmFtZTogJ0Jlbnp5JywgYnJlZWQ6ICdMYWJyYWRvcicgfSlcbiAgICogICAgcGV0LmNhbGwoJ0Jlbnp5JykgICAvLyAnUnVmZiEgUnVmZiEnXG4gICAqL1xuICBtZXJnZTogeyB2YWx1ZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSB7fTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZXNjcmlwdG9yW25hbWVdID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm9wZXJ0aWVzLCBuYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIGRlc2NyaXB0b3IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9fSxcbiAgLyoqXG4gICAqIFRha2VzIGFueSBudW1iZXIgb2YgYXJndW1lbnQgb2JqZWN0cyBhbmQgcmV0dXJucyBmcm96ZW4sIGNvbXBvc2l0ZSBvYmplY3RcbiAgICogdGhhdCBpbmhlcml0cyBmcm9tIGB0aGlzYCBvYmplY3QgYW5kIGNvbWJpbmVzIGFsbCBvZiB0aGUgb3duIHByb3BlcnRpZXMgb2ZcbiAgICogdGhlIGFyZ3VtZW50IG9iamVjdHMuIChPYmplY3RzIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gYXJlIGZyb3plbiBhc1xuICAgKiB0aGV5IGFyZSBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIHR5cGVzKS5cbiAgICpcbiAgICogSWYgdHdvIG9yIG1vcmUgYXJndW1lbnQgb2JqZWN0cyBoYXZlIG93biBwcm9wZXJ0aWVzIHdpdGggdGhlIHNhbWUgbmFtZSxcbiAgICogdGhlIHByb3BlcnR5IGlzIG92ZXJyaWRkZW4sIHdpdGggcHJlY2VkZW5jZSBmcm9tIHJpZ2h0IHRvIGxlZnQsIGltcGx5aW5nLFxuICAgKiB0aGF0IHByb3BlcnRpZXMgb2YgdGhlIG9iamVjdCBvbiB0aGUgbGVmdCBhcmUgb3ZlcnJpZGRlbiBieSBhIHNhbWUgbmFtZWRcbiAgICogcHJvcGVydHkgb2YgdGhlIG9iamVjdCBvbiB0aGUgcmlnaHQuXG4gICAqIEBleGFtcGxlc1xuICAgKlxuICAgKiAgICAvLyAjIyBPYmplY3QgY29tcG9zaXRpb24gIyNcbiAgICpcbiAgICogICAgdmFyIEhFWCA9IEJhc2UuZXh0ZW5kKHtcbiAgICogICAgICBoZXg6IGZ1bmN0aW9uIGhleCgpIHtcbiAgICogICAgICAgIHJldHVybiAnIycgKyB0aGlzLmNvbG9yO1xuICAgKiAgICAgIH1cbiAgICogICAgfSlcbiAgICpcbiAgICogICAgdmFyIFJHQiA9IEJhc2UuZXh0ZW5kKHtcbiAgICogICAgICByZWQ6IGZ1bmN0aW9uIHJlZCgpIHtcbiAgICogICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xuICAgKiAgICAgIH0sXG4gICAqICAgICAgZ3JlZW46IGZ1bmN0aW9uIGdyZWVuKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XG4gICAqICAgICAgfSxcbiAgICogICAgICBibHVlOiBmdW5jdGlvbiBibHVlKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gICAqICAgICAgfVxuICAgKiAgICB9KVxuICAgKlxuICAgKiAgICB2YXIgQ01ZSyA9IEJhc2UuZXh0ZW5kKFJHQiwge1xuICAgKiAgICAgIGJsYWNrOiBmdW5jdGlvbiBibGFjaygpIHtcbiAgICogICAgICAgIHZhciBjb2xvciA9IE1hdGgubWF4KE1hdGgubWF4KHRoaXMucmVkKCksIHRoaXMuZ3JlZW4oKSksIHRoaXMuYmx1ZSgpKTtcbiAgICogICAgICAgIHJldHVybiAoMSAtIGNvbG9yIC8gMjU1KS50b0ZpeGVkKDQpO1xuICAgKiAgICAgIH0sXG4gICAqICAgICAgY3lhbjogZnVuY3Rpb24gY3lhbigpIHtcbiAgICogICAgICAgIHZhciBLID0gdGhpcy5ibGFjaygpO1xuICAgKiAgICAgICAgcmV0dXJuICgoKDEgLSB0aGlzLnJlZCgpIC8gMjU1KS50b0ZpeGVkKDQpIC0gSykgLyAoMSAtIEspKS50b0ZpeGVkKDQpO1xuICAgKiAgICAgIH0sXG4gICAqICAgICAgbWFnZW50YTogZnVuY3Rpb24gbWFnZW50YSgpIHtcbiAgICogICAgICAgIHZhciBLID0gdGhpcy5ibGFjaygpO1xuICAgKiAgICAgICAgcmV0dXJuICgoKDEgLSB0aGlzLmdyZWVuKCkgLyAyNTUpLnRvRml4ZWQoNCkgLSBLKSAvICgxIC0gSykpLnRvRml4ZWQoNCk7XG4gICAqICAgICAgfSxcbiAgICogICAgICB5ZWxsb3c6IGZ1bmN0aW9uIHllbGxvdygpIHtcbiAgICogICAgICAgIHZhciBLID0gdGhpcy5ibGFjaygpO1xuICAgKiAgICAgICAgcmV0dXJuICgoKDEgLSB0aGlzLmJsdWUoKSAvIDI1NSkudG9GaXhlZCg0KSAtIEspIC8gKDEgLSBLKSkudG9GaXhlZCg0KTtcbiAgICogICAgICB9XG4gICAqICAgIH0pXG4gICAqXG4gICAqICAgIHZhciBDb2xvciA9IEJhc2UuZXh0ZW5kKEhFWCwgUkdCLCBDTVlLLCB7XG4gICAqICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gQ29sb3IoY29sb3IpIHtcbiAgICogICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICogICAgICB9XG4gICAqICAgIH0pO1xuICAgKlxuICAgKiAgICAvLyAjIyBQcm90b3R5cGFsIGluaGVyaXRhbmNlICMjXG4gICAqXG4gICAqICAgIHZhciBQaXhlbCA9IENvbG9yLmV4dGVuZCh7XG4gICAqICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gUGl4ZWwoeCwgeSwgaGV4KSB7XG4gICAqICAgICAgICBDb2xvci5pbml0aWFsaXplLmNhbGwodGhpcywgaGV4KTtcbiAgICogICAgICAgIHRoaXMueCA9IHg7XG4gICAqICAgICAgICB0aGlzLnkgPSB5O1xuICAgKiAgICAgIH0sXG4gICAqICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHRoaXMueCArICc6JyArIHRoaXMueSArICdAJyArIHRoaXMuaGV4KCk7XG4gICAqICAgICAgfVxuICAgKiAgICB9KTtcbiAgICpcbiAgICogICAgdmFyIHBpeGVsID0gUGl4ZWwubmV3KDExLCAyMywgJ0NDMzM5OScpXG4gICAqICAgIHBpeGVsLnRvU3RyaW5nKCk7IC8vIDExOjIzQCNDQzMzOTlcbiAgICpcbiAgICogICAgcGl4ZWwucmVkKCk7ICAgICAgLy8gMjA0XG4gICAqICAgIHBpeGVsLmdyZWVuKCk7ICAgIC8vIDUxXG4gICAqICAgIHBpeGVsLmJsdWUoKTsgICAgIC8vIDE1M1xuICAgKlxuICAgKiAgICBwaXhlbC5jeWFuKCk7ICAgICAvLyAwLjAwMDBcbiAgICogICAgcGl4ZWwubWFnZW50YSgpOyAgLy8gMC43NTAwXG4gICAqICAgIHBpeGVsLnllbGxvdygpOyAgIC8vIDAuMjUwMFxuICAgKlxuICAgKi9cbiAgIGV4dGVuZDogeyB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHRoaXMubWVyZ2UuYXBwbHkoT2JqZWN0LmNyZWF0ZSh0aGlzKSwgYXJndW1lbnRzKSk7XG4gIH19XG59KSk7XG5cbn0pOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBMYW5nID0gcmVxdWlyZSgnLi9sYW5nJyk7XG5cbnZhciBnZXQgPSBleHBvcnRzLmdldCA9IGZ1bmN0aW9uKHMsIGtleSkge1xuICAgIGZ1bmN0aW9uIHRyYXZlcnNlKG9iaiwgZm4sIHBhcmVudCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KHRoaXMsIFtpLCBvYmpbaV0sIHBhcmVudF0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvYmpbaV0gaW5zdGFuY2VvZiBPYmplY3QgJiYgIShvYmpbaV0gaW5zdGFuY2VvZiBBcnJheSkpIHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgdHJhdmVyc2Uob2JqW2ldLCBmbiwgaSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5KSB7XG4gICAgICAgIHZhciBhY2MgPSB7fTtcbiAgICAgICAgdHJhdmVyc2Uob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlLCBwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHByb3BlcnR5KSB7ICBcbiAgICAgICAgICAgICAgICBhY2MgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1wdHkob2JqKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7IGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHJldHVybiBvYmo7IH1cbiAgICAgICAgcmV0dXJuICFMYW5nLmlzT2JqZWN0KG9iaikgPyBvYmogOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBlbXB0eShnZXRQcm9wZXJ0eShzLCBrZXkpKTtcbn07XG5cbnZhciBpbkFycmF5ID0gZXhwb3J0cy5pbkFycmF5ID0gZnVuY3Rpb24oaGF5c3RhY2ssIG5lZWRsZSwga2V5KSB7XG4gICAgdmFyIGksIG1heCA9IGhheXN0YWNrLmxlbmd0aDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV1ba2V5XSA9PT0gbmVlZGxlKSB7IHJldHVybiBoYXlzdGFja1tpXTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldID09PSBuZWVkbGUpIHsgcmV0dXJuIGhheXN0YWNrW2ldOyB9XG4gICAgICAgIH0gICBcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24odG8sIGZyb20pIHsgICAgICAgIFxuICAgIGlmICghdG8gfHwgdHlwZW9mKHRvKSAhPT0gJ29iamVjdCcpIHsgdG8gPSB7fTsgfVxuICAgIGlmICghZnJvbSB8fCB0eXBlb2YoZnJvbSkgIT09ICdvYmplY3QnKSB7IGZyb20gPSB7fTsgfVxuXG4gICAgZm9yICh2YXIgayBpbiBmcm9tKSB7IHRvW2tdID0gZnJvbVtrXTsgfVxuXG4gICAgcmV0dXJuIHRvO1xufTtcblxuZXhwb3J0cy53b3Jrc3BhY2UgPSBmdW5jdGlvbihvYmosIG5hbWUpIHtcbiAgICB2YXIgd3MgPSBnZXQob2JqLCAnd29ya3NwYWNlJyk7XG4gICAgcmV0dXJuICh3cyA/IG5hbWUgPyBpbkFycmF5KHdzLm9iamVjdHMsIG5hbWUsICduYW1lJykgOiB3cy5vYmplY3RzIHx8IHdzLm9iamVjdDogbnVsbCk7XG59O1xuXG5leHBvcnRzLnNpZ25hdHVyZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHNbJzAnXSwgMCksXG4gICAgICAgIGxlbiAgICA9IGFyZ3MubGVuZ3RoLFxuICAgICAgICBjcmVhdGUgPSBmYWxzZSxcbiAgICAgICAgb3B0cyAgID0ge30sXG4gICAgICAgIGFwaTtcblxuICAgIGlmIChsZW4gPT09IDEgJiYgTGFuZy5pc09iamVjdChhcmdzWzBdKSkge1xuICAgICAgICBvcHRzID0gYXJnc1swXTtcbiAgICAgICAgYXBpICA9IG9wdHMucHJvamVjdCA/ICcvci9wcm9qZWN0L2V4ZWN1dGUvc2NyaXB0JyA6XG4gICAgICAgICAgICAnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZSc7XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDEgJiYgTGFuZy5pc1N0cmluZyhhcmdzWzBdKSkge1xuICAgICAgICBhcmdzID0gYXJnc1swXS5zcGxpdCgnXFwvJyk7XG4gICAgICAgIGFwaSAgPSAnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZSdcbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIGF1dGhvcjogYXJnc1sxXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogYXJnc1syXSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhcmdzWzNdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICAgICAgLy8gZXg6IC5zY3JpcHQoJy90ZXN0dXNlci9yb290L0RlcGxveVIgLSBIZWxsbyBXb3JsZC5SJywgcHJvamVjdClcbiAgICAgICAgdmFyIHByb2plY3QgPSBhcmdzWzFdO1xuICAgICAgICBhcGkgPSBwcm9qZWN0ID8gJy9yL3Byb2plY3QvZXhlY3V0ZS9zY3JpcHQnIDogJy9yL3JlcG9zaXRvcnkvc2NyaXB0L2V4ZWN1dGUnO1xuXG4gICAgICAgIGFyZ3MgPSBhcmdzWzBdLnNwbGl0KCdcXC8nKTtcbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3QsXG4gICAgICAgICAgICBhdXRob3I6IGFyZ3NbMV0sXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGFyZ3NbMl0sXG4gICAgICAgICAgICBmaWxlbmFtZTogYXJnc1szXVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAobGVuID4gMikge1xuICAgICAgICAvLyBleDogLnNjcmlwdCgnRGVwbG95UiAtIEhlbGxvIFdvcmxkLlInLCAndGVzdHVzZXInLCAncm9vdCcpXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICBhdXRob3I6IGFyZ3NbMl0sXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGFyZ3NbMV0sXG4gICAgICAgICAgICBmaWxlbmFtZTogYXJnc1swXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGluZGljYXRlIGEgbmV3IHByb2plY3Qgc2hvdWxkIGJlIGNyZWF0ZWRcbiAgICBpZiAob3B0cy5wcm9qZWN0ICYmIExhbmcuaXNCb29sZWFuKG9wdHMucHJvamVjdCkpIHtcbiAgICAgIGRlbGV0ZSBvcHRzWydwcm9qZWN0J107XG4gICAgICBjcmVhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFwaTogYXBpLFxuICAgICAgICBvcHRzOiBvcHRzLFxuICAgICAgICBjcmVhdGU6IGNyZWF0ZVxuICAgIH07XG59OyIsIiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG4gIHRyeSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbn0gKCkpXG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBjYWNoZWRTZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4qIGF0dGVtcHQgb2YgYSBzaW1wbGUgZGVmZXIvcHJvbWlzZSBsaWJyYXJ5IGZvciBtb2JpbGUgZGV2ZWxvcG1lbnRcbiogQGF1dGhvciBKb25hdGhhbiBHb3R0aSA8IGpnb3R0aSBhdCBqZ290dGkgZG90IG5ldD5cbiogQHNpbmNlIDIwMTItMTBcbiogQHZlcnNpb24gMC43LjNcbiovXG4oZnVuY3Rpb24odW5kZWYpe1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgbmV4dFRpY2tcblx0XHQsIGlzRnVuYyA9IGZ1bmN0aW9uKGYpeyByZXR1cm4gKCB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyApOyB9XG5cdFx0LCBpc0FycmF5ID0gZnVuY3Rpb24oYSl7IHJldHVybiBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheShhKSA6IChhIGluc3RhbmNlb2YgQXJyYXkpOyB9XG5cdFx0LCBpc09iak9yRnVuYyA9IGZ1bmN0aW9uKG8peyByZXR1cm4gISEobyAmJiAodHlwZW9mIG8pLm1hdGNoKC9mdW5jdGlvbnxvYmplY3QvKSk7IH1cblx0XHQsIGlzTm90VmFsID0gZnVuY3Rpb24odil7IHJldHVybiAodiA9PT0gZmFsc2UgfHwgdiA9PT0gdW5kZWYgfHwgdiA9PT0gbnVsbCk7IH1cblx0XHQsIHNsaWNlID0gZnVuY3Rpb24oYSwgb2Zmc2V0KXsgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYSwgb2Zmc2V0KTsgfVxuXHRcdCwgdW5kZWZTdHIgPSAndW5kZWZpbmVkJ1xuXHRcdCwgdEVyciA9IHR5cGVvZiBUeXBlRXJyb3IgPT09IHVuZGVmU3RyID8gRXJyb3IgOiBUeXBlRXJyb3Jcblx0O1xuXHRpZiAoICh0eXBlb2YgcHJvY2VzcyAhPT0gdW5kZWZTdHIpICYmIHByb2Nlc3MubmV4dFRpY2sgKSB7XG5cdFx0bmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IHVuZGVmU3RyICkge1xuXHRcdHZhciBudGlja0NoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKSwgcXVldWUgPSBbXTtcblx0XHRudGlja0NoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oKXsgcXVldWUubGVuZ3RoICYmIChxdWV1ZS5zaGlmdCgpKSgpOyB9O1xuXHRcdG5leHRUaWNrID0gZnVuY3Rpb24oY2Ipe1xuXHRcdFx0cXVldWUucHVzaChjYik7XG5cdFx0XHRudGlja0NoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRuZXh0VGljayA9IGZ1bmN0aW9uKGNiKXsgc2V0VGltZW91dChjYiwgMCk7IH07XG5cdH1cblx0ZnVuY3Rpb24gcmV0aHJvdyhlKXsgbmV4dFRpY2soZnVuY3Rpb24oKXsgdGhyb3cgZTt9KTsgfVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiBkZWZlcnJlZFxuXHQgKiBAcHJvcGVydHkge3Byb21pc2V9IHByb21pc2Vcblx0ICogQG1ldGhvZCByZXNvbHZlXG5cdCAqIEBtZXRob2QgZnVsZmlsbFxuXHQgKiBAbWV0aG9kIHJlamVjdFxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmdWxmaWxsZWRcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBwcm9taXNlIHJlc29sdmVkIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZVxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmYWlsZWRcblx0ICogQHBhcmFtIHsqfSByZWFzb24gcHJvbWlzZSByZWplY3Rpb24gcmVhc29uXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZSBvciByZXRocm93IHRoZSByZWFzb25cblx0ICovXG5cblx0Ly8tLSBkZWZpbmluZyB1bmVuY2xvc2VkIHByb21pc2UgbWV0aG9kcyAtLS8vXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gd2l0aG91dCBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9zdWNjZXNzKGZ1bGZpbGxlZCl7IHJldHVybiB0aGlzLnRoZW4oZnVsZmlsbGVkLCB1bmRlZik7IH1cblxuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIHdpdGggb25seSBhIGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2Vycm9yKGZhaWxlZCl7IHJldHVybiB0aGlzLnRoZW4odW5kZWYsIGZhaWxlZCk7IH1cblxuXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gYnV0IGZ1bGZpbGxlZCBjYWxsYmFjayB3aWxsIHJlY2VpdmUgbXVsdGlwbGUgcGFyYW1ldGVycyB3aGVuIHByb21pc2UgaXMgZnVsZmlsbGVkIHdpdGggYW4gQXJyYXlcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2FwcGx5KGZ1bGZpbGxlZCwgZmFpbGVkKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZC5hcHBseShudWxsLCBpc0FycmF5KGEpID8gYSA6IFthXSkgOiAoZGVmZXIub25seUZ1bmNzID8gYSA6IGZ1bGZpbGxlZCk7XG5cdFx0XHR9XG5cdFx0XHQsIGZhaWxlZCB8fCB1bmRlZlxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogY2xlYW51cCBtZXRob2Qgd2hpY2ggd2lsbCBiZSBhbHdheXMgZXhlY3V0ZWQgcmVnYXJkbGVzcyBmdWxmaWxsbWVudCBvciByZWplY3Rpb25cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgYSBjYWxsYmFjayBjYWxsZWQgcmVnYXJkbGVzcyBvZiB0aGUgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHByb21pc2UgaXMgbm90IHBlbmRpbmcgYW55bW9yZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gdGhlIHNhbWUgcHJvbWlzZSB1bnRvdWNoZWRcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfZW5zdXJlKGNiKXtcblx0XHRmdW5jdGlvbiBfY2IoKXsgY2IoKTsgfVxuXHRcdHRoaXMudGhlbihfY2IsIF9jYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogdGFrZSBhIHNpbmdsZSBjYWxsYmFjayB3aGljaCB3YWl0IGZvciBhbiBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIuIG90aGVyIHJlc29sdXRpb24gdmFsdWVzIGFyZSBwYXNzZWQgYXMgd2l0aCB0aGUgYXBwbHkvc3ByZWFkIG1ldGhvZFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBhIGNhbGxiYWNrIGNhbGxlZCByZWdhcmRsZXNzIG9mIHRoZSBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gb2YgdGhlIHByb21pc2Ugd2hpY2ggd2lsbCBiZSBjYWxsZWRcblx0ICogICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgcHJvbWlzZSBpcyBub3QgcGVuZGluZyBhbnltb3JlIHdpdGggZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyIGlmIGFueSBhcyBpbiBub2RlIHN0eWxlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLiBSZXN0IG9mIHBhcmFtZXRlcnMgd2lsbCBiZSBhcHBsaWVkIGFzIHdpdGggdGhlIGFwcGx5IG1ldGhvZC5cblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2Vfbm9kaWZ5KGNiKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoY2IpID8gY2IuYXBwbHkobnVsbCwgaXNBcnJheShhKSA/IGEuc3BsaWNlKDAsMCx1bmRlZmluZWQpICYmIGEgOiBbdW5kZWZpbmVkLGFdKSA6IChkZWZlci5vbmx5RnVuY3MgPyBhIDogY2IpO1xuXHRcdFx0fVxuXHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0cmV0dXJuIGNiKGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZhaWxlZF0gd2l0aG91dCBwYXJhbWV0ZXIgd2lsbCBvbmx5IHJldGhyb3cgcHJvbWlzZSByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgb2YgdGhlIHByb21pc2UgbGlicmFyeSBvbiBuZXh0IHRpY2tcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgcGFzc2VkIGEgZmFpbGVkIG1ldGhvZCB0aGVuIHdpbGwgY2FsbCBmYWlsZWQgb24gcmVqZWN0aW9uIGFuZCB0aHJvdyB0aGUgZXJyb3IgYWdhaW4gaWYgZmFpbGVkIGRpZG4ndFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9yZXRocm93KGZhaWxlZCl7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdHVuZGVmXG5cdFx0XHQsIGZhaWxlZCA/IGZ1bmN0aW9uKGUpeyBmYWlsZWQoZSk7IHRocm93IGU7IH0gOiByZXRocm93XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gW2Fsd2F5c0FzeW5jXSBpZiBzZXQgZm9yY2UgdGhlIGFzeW5jIHJlc29sdXRpb24gZm9yIHRoaXMgcHJvbWlzZSBpbmRlcGVuZGFudGx5IG9mIHRoZSBELmFsd2F5c0FzeW5jIG9wdGlvblxuXHQqIEByZXR1cm5zIHtkZWZlcnJlZH0gZGVmZXJlZCBvYmplY3Qgd2l0aCBwcm9wZXJ0eSAncHJvbWlzZScgYW5kIG1ldGhvZHMgcmVqZWN0LGZ1bGZpbGwscmVzb2x2ZSAoZnVsZmlsbCBiZWluZyBhbiBhbGlhcyBmb3IgcmVzb2x2ZSlcblx0Ki9cblx0dmFyIGRlZmVyID0gZnVuY3Rpb24gKGFsd2F5c0FzeW5jKXtcblx0XHR2YXIgYWx3YXlzQXN5bmNGbiA9ICh1bmRlZiAhPT0gYWx3YXlzQXN5bmMgPyBhbHdheXNBc3luYyA6IGRlZmVyLmFsd2F5c0FzeW5jKSA/IG5leHRUaWNrIDogZnVuY3Rpb24oZm4pe2ZuKCk7fVxuXHRcdFx0LCBzdGF0dXMgPSAwIC8vIC0xIGZhaWxlZCB8IDEgZnVsZmlsbGVkXG5cdFx0XHQsIHBlbmRpbmdzID0gW11cblx0XHRcdCwgdmFsdWVcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGVkZWYgcHJvbWlzZVxuXHRcdFx0ICovXG5cdFx0XHQsIF9wcm9taXNlICA9IHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfGZ1bmN0aW9ufSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0XHRcdFx0ICogQHBhcmFtIHtmYWlsZWR8ZnVuY3Rpb259IGZhaWxlZCBjYWxsYmFja1xuXHRcdFx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oZnVsZmlsbGVkLCBmYWlsZWQpe1xuXHRcdFx0XHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRcdFx0XHRwZW5kaW5ncy5wdXNoKFtcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGlmKCBpc05vdFZhbChmdWxmaWxsZWQpKXtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZShpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZCh2YWx1ZSkgOiAoZGVmZXIub25seUZ1bmNzID8gdmFsdWUgOiBmdWxmaWxsZWQpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzTm90VmFsKGZhaWxlZCkgfHwgKCghaXNGdW5jKGZhaWxlZCkpICYmIGRlZmVyLm9ubHlGdW5jcykgKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIGZhaWxlZCApIHtcblx0XHRcdFx0XHRcdFx0XHR0cnl7IGQucmVzb2x2ZShpc0Z1bmMoZmFpbGVkKSA/IGZhaWxlZChlcnIpIDogZmFpbGVkKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTt9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRzdGF0dXMgIT09IDAgJiYgYWx3YXlzQXN5bmNGbihleGVjQ2FsbGJhY2tzKTtcblx0XHRcdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LCBzdWNjZXNzOiBwcm9taXNlX3N1Y2Nlc3NcblxuXHRcdFx0XHQsIGVycm9yOiBwcm9taXNlX2Vycm9yXG5cdFx0XHRcdCwgb3RoZXJ3aXNlOiBwcm9taXNlX2Vycm9yXG5cblx0XHRcdFx0LCBhcHBseTogcHJvbWlzZV9hcHBseVxuXHRcdFx0XHQsIHNwcmVhZDogcHJvbWlzZV9hcHBseVxuXG5cdFx0XHRcdCwgZW5zdXJlOiBwcm9taXNlX2Vuc3VyZVxuXG5cdFx0XHRcdCwgbm9kaWZ5OiBwcm9taXNlX25vZGlmeVxuXG5cdFx0XHRcdCwgcmV0aHJvdzogcHJvbWlzZV9yZXRocm93XG5cblx0XHRcdFx0LCBpc1BlbmRpbmc6IGZ1bmN0aW9uKCl7IHJldHVybiBzdGF0dXMgPT09IDA7IH1cblxuXHRcdFx0XHQsIGdldFN0YXR1czogZnVuY3Rpb24oKXsgcmV0dXJuIHN0YXR1czsgfVxuXHRcdFx0fVxuXHRcdDtcblx0XHRfcHJvbWlzZS50b1NvdXJjZSA9IF9wcm9taXNlLnRvU3RyaW5nID0gX3Byb21pc2UudmFsdWVPZiA9IGZ1bmN0aW9uKCl7cmV0dXJuIHZhbHVlID09PSB1bmRlZiA/IHRoaXMgOiB2YWx1ZTsgfTtcblxuXG5cdFx0ZnVuY3Rpb24gZXhlY0NhbGxiYWNrcygpe1xuXHRcdFx0Lypqc2hpbnQgYml0d2lzZTpmYWxzZSovXG5cdFx0XHRpZiAoIHN0YXR1cyA9PT0gMCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNicyA9IHBlbmRpbmdzLCBpID0gMCwgbCA9IGNicy5sZW5ndGgsIGNiSW5kZXggPSB+c3RhdHVzID8gMCA6IDEsIGNiO1xuXHRcdFx0cGVuZGluZ3MgPSBbXTtcblx0XHRcdGZvciggOyBpIDwgbDsgaSsrICl7XG5cdFx0XHRcdChjYiA9IGNic1tpXVtjYkluZGV4XSkgJiYgY2IodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZ1bGZpbGwgZGVmZXJyZWQgd2l0aCBnaXZlbiB2YWx1ZVxuXHRcdCAqIEBwYXJhbSB7Kn0gdmFsXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVzb2x2ZSh2YWwpe1xuXHRcdFx0dmFyIGRvbmUgPSBmYWxzZTtcblx0XHRcdGZ1bmN0aW9uIG9uY2UoZil7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRpZiAoZG9uZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZih4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHN0YXR1cyApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgdGhlbiA9IGlzT2JqT3JGdW5jKHZhbCkgJiYgdmFsLnRoZW47XG5cdFx0XHRcdGlmICggaXNGdW5jKHRoZW4pICkgeyAvLyBtYW5hZ2luZyBhIHByb21pc2Vcblx0XHRcdFx0XHRpZiggdmFsID09PSBfcHJvbWlzZSApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IHRFcnIoXCJQcm9taXNlIGNhbid0IHJlc29sdmUgaXRzZWxmXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGVuLmNhbGwodmFsLCBvbmNlKF9yZXNvbHZlKSwgb25jZShfcmVqZWN0KSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0b25jZShfcmVqZWN0KShlKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhbHVlID0gdmFsO1xuXHRcdFx0XHRzdGF0dXMgPSAxO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIHJlamVjdCBkZWZlcnJlZCB3aXRoIGdpdmVuIHJlYXNvblxuXHRcdCAqIEBwYXJhbSB7Kn0gRXJyXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVqZWN0KEVycil7XG5cdFx0XHRzdGF0dXMgfHwgYWx3YXlzQXN5bmNGbihmdW5jdGlvbigpe1xuXHRcdFx0XHR0cnl7IHRocm93KEVycik7IH1jYXRjaChlKXsgdmFsdWUgPSBlOyB9XG5cdFx0XHRcdHN0YXR1cyA9IC0xO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gLyoqQHR5cGUgZGVmZXJyZWQgKi8ge1xuXHRcdFx0cHJvbWlzZTpfcHJvbWlzZVxuXHRcdFx0LHJlc29sdmU6X3Jlc29sdmVcblx0XHRcdCxmdWxmaWxsOl9yZXNvbHZlIC8vIGFsaWFzXG5cdFx0XHQscmVqZWN0Ol9yZWplY3Rcblx0XHR9O1xuXHR9O1xuXG5cdGRlZmVyLmRlZmVycmVkID0gZGVmZXIuZGVmZXIgPSBkZWZlcjtcblx0ZGVmZXIubmV4dFRpY2sgPSBuZXh0VGljaztcblx0ZGVmZXIuYWx3YXlzQXN5bmMgPSB0cnVlOyAvLyBzZXR0aW5nIHRoaXMgd2lsbCBjaGFuZ2UgZGVmYXVsdCBiZWhhdmlvdXIuIHVzZSBpdCBvbmx5IGlmIG5lY2Vzc2FyeSBhcyBhc3luY2hyb25pY2l0eSB3aWxsIGZvcmNlIHNvbWUgZGVsYXkgYmV0d2VlbiB5b3VyIHByb21pc2UgcmVzb2x1dGlvbnMgYW5kIGlzIG5vdCBhbHdheXMgd2hhdCB5b3Ugd2FudC5cblx0LyoqXG5cdCogc2V0dGluZyBvbmx5RnVuY3MgdG8gZmFsc2Ugd2lsbCBicmVhayBwcm9taXNlcy9BKyBjb25mb3JtaXR5IGJ5IGFsbG93aW5nIHlvdSB0byBwYXNzIG5vbiB1bmRlZmluZWQvbnVsbCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxsYmFja3Ncblx0KiBpbnN0ZWFkIG9mIGp1c3QgaWdub3JpbmcgYW55IG5vbiBmdW5jdGlvbiBwYXJhbWV0ZXJzIHRvIHRoZW4sc3VjY2VzcyxlcnJvci4uLiBpdCB3aWxsIGFjY2VwdCBub24gbnVsbHx1bmRlZmluZWQgdmFsdWVzLlxuXHQqIHRoaXMgd2lsbCBhbGxvdyB5b3Ugc2hvcnRjdXRzIGxpa2UgcHJvbWlzZS50aGVuKCd2YWwnLCdoYW5kbGVkIGVycm9yJycpXG5cdCogdG8gYmUgZXF1aXZhbGVudCBvZiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKXsgcmV0dXJuICd2YWwnO30sZnVuY3Rpb24oKXsgcmV0dXJuICdoYW5kbGVkIGVycm9yJ30pXG5cdCovXG5cdGRlZmVyLm9ubHlGdW5jcyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIG9mIGdpdmVuIHZhbHVlIChhbHdheXMgYXN5bmMgcmVzb2x1dGlvbilcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnJlc29sdmVkID0gZGVmZXIuZnVsZmlsbGVkID0gZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gZGVmZXIodHJ1ZSkucmVzb2x2ZSh2YWx1ZSkucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSB3aXRoIGdpdmVuIHJlYXNvbiBvZiByZWplY3Rpb24gKGFsd2F5cyBhc3luYyByZWplY3Rpb24pXG5cdCAqIEBwYXJhbSB7Kn0gcmVhc29uXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVqZWN0ZWQgPSBmdW5jdGlvbihyZWFzb24peyByZXR1cm4gZGVmZXIodHJ1ZSkucmVqZWN0KHJlYXNvbikucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSB3aXRoIG5vIHJlc29sdXRpb24gdmFsdWUgd2hpY2ggd2lsbCBiZSByZXNvbHZlZCBpbiB0aW1lIG1zICh1c2luZyBzZXRUaW1lb3V0KVxuXHQgKiBAcGFyYW0ge2ludH0gW3RpbWVdIGluIG1zIGRlZmF1bHQgdG8gMFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLndhaXQgPSBmdW5jdGlvbih0aW1lKXtcblx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0c2V0VGltZW91dChkLnJlc29sdmUsIHRpbWUgfHwgMCk7XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvZiBmdW5jdGlvbiBjYWxsIHdoaWNoIHdpbGwgYmUgZnVsZmlsbGVkIGluIGRlbGF5IG1zIG9yIHJlamVjdGVkIGlmIGdpdmVuIGZuIHRocm93IGFuIGVycm9yXG5cdCAqIEBwYXJhbSB7Kn0gZm4gdG8gZXhlY3V0ZSBvciB2YWx1ZSB0byByZXR1cm4gYWZ0ZXIgZ2l2ZW4gZGVsYXlcblx0ICogQHBhcmFtIHtpbnR9IFtkZWxheV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIuZGVsYXkgPSBmdW5jdGlvbihmbiwgZGVsYXkpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRyeXsgZC5yZXNvbHZlKGlzRnVuYyhmbikgPyBmbi5hcHBseShudWxsKSA6IGZuKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTsgfSB9LCBkZWxheSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBpZiBnaXZlbiB2YWx1ZSBpcyBub3QgYSBwcm9taXNlIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIHJlc29sdmVkIHRvIGdpdmVuIHZhbHVlXG5cdCAqIEBwYXJhbSB7Kn0gcHJvbWlzZSBhIHZhbHVlIG9yIGEgcHJvbWlzZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnByb21pc2lmeSA9IGZ1bmN0aW9uKHByb21pc2Upe1xuXHRcdGlmICggcHJvbWlzZSAmJiBpc0Z1bmMocHJvbWlzZS50aGVuKSApIHsgcmV0dXJuIHByb21pc2U7fVxuXHRcdHJldHVybiBkZWZlci5yZXNvbHZlZChwcm9taXNlKTtcblx0fTtcblxuXHRmdW5jdGlvbiBtdWx0aVByb21pc2VSZXNvbHZlcihjYWxsZXJBcmd1bWVudHMsIHJldHVyblByb21pc2VzKXtcblx0XHR2YXIgcHJvbWlzZXMgPSBzbGljZShjYWxsZXJBcmd1bWVudHMpO1xuXHRcdGlmICggcHJvbWlzZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkocHJvbWlzZXNbMF0pICkge1xuXHRcdFx0aWYoISBwcm9taXNlc1swXS5sZW5ndGggKXtcblx0XHRcdFx0cmV0dXJuIGRlZmVyLmZ1bGZpbGxlZChbXSk7XG5cdFx0XHR9XG5cdFx0XHRwcm9taXNlcyA9IHByb21pc2VzWzBdO1xuXHRcdH1cblx0XHR2YXIgYXJncyA9IFtdXG5cdFx0XHQsIGQgPSBkZWZlcigpXG5cdFx0XHQsIGMgPSBwcm9taXNlcy5sZW5ndGhcblx0XHQ7XG5cdFx0aWYgKCAhYyApIHtcblx0XHRcdGQucmVzb2x2ZShhcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHJlc29sdmVyID0gZnVuY3Rpb24oaSl7XG5cdFx0XHRcdHByb21pc2VzW2ldID0gZGVmZXIucHJvbWlzaWZ5KHByb21pc2VzW2ldKTtcblx0XHRcdFx0cHJvbWlzZXNbaV0udGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbih2KXtcblx0XHRcdFx0XHRcdGFyZ3NbaV0gPSByZXR1cm5Qcm9taXNlcyA/IHByb21pc2VzW2ldIDogdjtcblx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdGlmKCAhIHJldHVyblByb21pc2VzICl7XG5cdFx0XHRcdFx0XHRcdGQucmVqZWN0KGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YXJnc1tpXSA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRcdFx0XHQoLS1jKSB8fCBkLnJlc29sdmUoYXJncyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblx0XHRcdGZvciggdmFyIGkgPSAwLCBsID0gYzsgaSA8IGw7IGkrKyApe1xuXHRcdFx0XHRyZXNvbHZlcihpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNlcXVlbmNlWmVuaWZpZXIocHJvbWlzZSwgemVuVmFsdWUpe1xuXHRcdHJldHVybiBwcm9taXNlLnRoZW4oaXNGdW5jKHplblZhbHVlKSA/IHplblZhbHVlIDogZnVuY3Rpb24oKXtyZXR1cm4gemVuVmFsdWU7fSk7XG5cdH1cblx0ZnVuY3Rpb24gc2VxdWVuY2VQcm9taXNlUmVzb2x2ZXIoY2FsbGVyQXJndW1lbnRzKXtcblx0XHR2YXIgZnVuY3MgPSBzbGljZShjYWxsZXJBcmd1bWVudHMpO1xuXHRcdGlmICggZnVuY3MubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoZnVuY3NbMF0pICkge1xuXHRcdFx0ZnVuY3MgPSBmdW5jc1swXTtcblx0XHR9XG5cdFx0dmFyIGQgPSBkZWZlcigpLCBpPTAsIGw9ZnVuY3MubGVuZ3RoLCBwcm9taXNlID0gZGVmZXIucmVzb2x2ZWQoKTtcblx0XHRmb3IoOyBpPGw7IGkrKyl7XG5cdFx0XHRwcm9taXNlID0gc2VxdWVuY2VaZW5pZmllcihwcm9taXNlLCBmdW5jc1tpXSk7XG5cdFx0fVxuXHRcdGQucmVzb2x2ZShwcm9taXNlKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybiBhIHByb21pc2UgZm9yIGFsbCBnaXZlbiBwcm9taXNlcyAvIHZhbHVlcy5cblx0ICogdGhlIHJldHVybmVkIHByb21pc2VzIHdpbGwgYmUgZnVsZmlsbGVkIHdpdGggYSBsaXN0IG9mIHJlc29sdmVkIHZhbHVlLlxuXHQgKiBpZiBhbnkgZ2l2ZW4gcHJvbWlzZSBpcyByZWplY3RlZCB0aGVuIG9uIHRoZSBmaXJzdCByZWplY3Rpb24gdGhlIHJldHVybmVkIHByb21pc2VkIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZSByZWFzb25cblx0ICogQHBhcmFtIHthcnJheXwuLi4qfSBbcHJvbWlzZV0gY2FuIGJlIGEgc2luZ2xlIGFycmF5IG9mIHByb21pc2UvdmFsdWVzIGFzIGZpcnN0IHBhcmFtZXRlciBvciBhIGxpc3Qgb2YgZGlyZWN0IHBhcmFtZXRlcnMgcHJvbWlzZS92YWx1ZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gb2YgYSBsaXN0IG9mIGdpdmVuIHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZVxuXHQgKi9cblx0ZGVmZXIuYWxsID0gZnVuY3Rpb24oKXsgcmV0dXJuIG11bHRpUHJvbWlzZVJlc29sdmVyKGFyZ3VtZW50cyxmYWxzZSk7IH07XG5cblx0LyoqXG5cdCAqIHJldHVybiBhbiBhbHdheXMgZnVsZmlsbGVkIHByb21pc2Ugb2YgYXJyYXk8cHJvbWlzZT4gbGlzdCBvZiBwcm9taXNlcy92YWx1ZXMgcmVnYXJkbGVzcyB0aGV5IHJlc29sdmUgZnVsZmlsbGVkIG9yIHJlamVjdGVkXG5cdCAqIEBwYXJhbSB7YXJyYXl8Li4uKn0gW3Byb21pc2VdIGNhbiBiZSBhIHNpbmdsZSBhcnJheSBvZiBwcm9taXNlL3ZhbHVlcyBhcyBmaXJzdCBwYXJhbWV0ZXIgb3IgYSBsaXN0IG9mIGRpcmVjdCBwYXJhbWV0ZXJzIHByb21pc2UvdmFsdWVcblx0ICogICAgICAgICAgICAgICAgICAgICAobm9uIHByb21pc2UgdmFsdWVzIHdpbGwgYmUgcHJvbWlzaWZpZWQpXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBvZiB0aGUgbGlzdCBvZiBnaXZlbiBwcm9taXNlc1xuXHQgKi9cblx0ZGVmZXIucmVzb2x2ZUFsbCA9IGZ1bmN0aW9uKCl7IHJldHVybiBtdWx0aVByb21pc2VSZXNvbHZlcihhcmd1bWVudHMsdHJ1ZSk7IH07XG5cblx0LyoqXG5cdCogZXhlY3V0ZSBnaXZlbiBmdW5jdGlvbiBpbiBzZXF1ZW5jZSBwYXNzaW5nIHRoZWlyIHJldHVybmVkIHZhbHVlcyB0byB0aGUgbmV4dCBvbmUgaW4gc2VxdWVuY2UuXG5cdCogWW91IGNhbiBwYXNzIHZhbHVlcyBvciBwcm9taXNlIGluc3RlYWQgb2YgZnVuY3Rpb25zIHRoZXkgd2lsbCBiZSBwYXNzZWQgaW4gdGhlIHNlcXVlbmNlIGFzIGlmIGEgZnVuY3Rpb24gcmV0dXJuZWQgdGhlbS5cblx0KiBpZiBhbnkgZnVuY3Rpb24gdGhyb3cgYW4gZXJyb3Igb3IgYSByZWplY3RlZCBwcm9taXNlIHRoZSBmaW5hbCByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGF0IHJlYXNvbi5cblx0KiBAcGFyYW0ge2FycmF5fC4uLip9IFtmdW5jdGlvbl0gbGlzdCBvZiBmdW5jdGlvbiB0byBjYWxsIGluIHNlcXVlbmNlIHJlY2VpdmluZyBwcmV2aW91cyBvbmUgYXMgYSBwYXJhbWV0ZXJcblx0KiAgICAgICAgICAgICAgICAgICAgIChub24gZnVuY3Rpb24gdmFsdWVzIHdpbGwgYmUgdHJlYXRlZCBhcyBpZiByZXR1cm5lZCBieSBhIGZ1bmN0aW9uKVxuXHQqIEByZXR1cm5zIHtwcm9taXNlfSBvZiB0aGUgbGlzdCBvZiBnaXZlbiBwcm9taXNlc1xuXHQqL1xuXHRkZWZlci5zZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7IHJldHVybiBzZXF1ZW5jZVByb21pc2VSZXNvbHZlcihhcmd1bWVudHMpOyB9O1xuXG5cdC8qKlxuXHQgKiB0cmFuc2Zvcm0gYSB0eXBpY2FsIG5vZGVqcyBhc3luYyBtZXRob2QgYXdhaXRpbmcgYSBjYWxsYmFjayBhcyBsYXN0IHBhcmFtZXRlciwgcmVjZWl2aW5nIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlciB0byBhIGZ1bmN0aW9uIHRoYXRcblx0ICogd2lsbCByZXR1cm4gYSBwcm9taXNlIGluc3RlYWQuIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIG5vcm1hbCBjYWxsYmFjayB2YWx1ZSBtaW51cyB0aGUgZmlyc3QgZXJyb3IgcGFyYW1ldGVyIG9uXG5cdCAqIGZ1bGZpbGwgYW5kIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGF0IGVycm9yIGFzIHJlYXNvbiBpbiBjYXNlIG9mIGVycm9yLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW3N1YmplY3RdIG9wdGlvbmFsIHN1YmplY3Qgb2YgdGhlIG1ldGhvZCB0byBlbmNhcHN1bGF0ZVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiB0aGUgZnVuY3Rpb24gdG8gZW5jYXBzdWxhdGUgaWYgdGhlIG5vcm1hbCBjYWxsYmFjayBzaG91bGQgcmVjZWl2ZSBtb3JlIHRoYW4gYSBzaW5nbGUgcGFyYW1ldGVyIChtaW51cyB0aGUgZXJyb3IpXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBsaXN0IG9yIHBhcmFtZXRlcnMgYXMgZnVsZmlsbG1lbnQgdmFsdWUuIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBzZW50IHRvIHRoZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayB0aGVuIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcmVzb2x1dGlvbiB2YWx1ZS5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufVxuXHQgKi9cblx0ZGVmZXIubm9kZUNhcHN1bGUgPSBmdW5jdGlvbihzdWJqZWN0LCBmbil7XG5cdFx0aWYgKCAhZm4gKSB7XG5cdFx0XHRmbiA9IHN1YmplY3Q7XG5cdFx0XHRzdWJqZWN0ID0gdm9pZCgwKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZCA9IGRlZmVyKCksIGFyZ3MgPSBzbGljZShhcmd1bWVudHMpO1xuXHRcdFx0YXJncy5wdXNoKGZ1bmN0aW9uKGVyciwgcmVzKXtcblx0XHRcdFx0ZXJyID8gZC5yZWplY3QoZXJyKSA6IGQucmVzb2x2ZShhcmd1bWVudHMubGVuZ3RoID4gMiA/IHNsaWNlKGFyZ3VtZW50cywgMSkgOiByZXMpO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGZuLmFwcGx5KHN1YmplY3QsIGFyZ3MpO1xuXHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkLnByb21pc2U7XG5cdFx0fTtcblx0fTtcblxuXHQvKmdsb2JhbCBkZWZpbmUqL1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcblx0XHRkZWZpbmUoJ0QuanMnLCBbXSwgZnVuY3Rpb24oKXsgcmV0dXJuIGRlZmVyOyB9KTtcblx0fSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSAhPT0gdW5kZWZTdHIgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBkZWZlcjtcblx0fSBlbHNlIGlmICggdHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZTdHIgKSB7XG5cdFx0dmFyIG9sZEQgPSB3aW5kb3cuRDtcblx0XHQvKipcblx0XHQgKiByZXN0b3JlIGdsb2JhbCBEIHZhcmlhYmxlIHRvIGl0cyBwcmV2aW91cyB2YWx1ZSBhbmQgcmV0dXJuIEQgdG8gdGhlIHVzZXJcblx0XHQgKiBAcmV0dXJucyB7RnVuY3Rpb259XG5cdFx0ICovXG5cdFx0ZGVmZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR3aW5kb3cuRCA9IG9sZEQ7XG5cdFx0XHRyZXR1cm4gZGVmZXI7XG5cdFx0fTtcblx0XHR3aW5kb3cuRCA9IGRlZmVyO1xuXHR9XG59KSgpO1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJ3JlZHVjZScpO1xuXG4vKipcbiAqIFJvb3QgcmVmZXJlbmNlIGZvciBpZnJhbWVzLlxuICovXG5cbnZhciByb290ID0gJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHdpbmRvd1xuICA/IHRoaXNcbiAgOiB3aW5kb3c7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5mdW5jdGlvbiBnZXRYSFIoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgJiYgKCdmaWxlOicgIT0gcm9vdC5sb2NhdGlvbi5wcm90b2NvbCB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAobnVsbCAhPSBvYmpba2V5XSkge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbiAvKipcbiAgKiBQYXJzZSB0aGUgZ2l2ZW4geC13d3ctZm9ybS11cmxlbmNvZGVkIGBzdHJgLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAqIEByZXR1cm4ge09iamVjdH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHBhaXI7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBhcnRzID0gcGFpci5zcGxpdCgnPScpO1xuICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAnYXBwbGljYXRpb24veG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZSA9IHtcbiAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG4gfTtcblxuIC8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBsaW5lcy5wb3AoKTsgLy8gdHJhaWxpbmcgQ1JMRlxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW1lIHR5cGUgZm9yIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0eXBlKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhlYWRlciBmaWVsZCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcmFtcyhzdHIpe1xuICByZXR1cm4gcmVkdWNlKHN0ci5zcGxpdCgvICo7ICovKSwgZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKVxuICAgICAgLCBrZXkgPSBwYXJ0cy5zaGlmdCgpXG4gICAgICAsIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIHRoaXMudGV4dCA9IHRoaXMucmVxLm1ldGhvZCAhPSdIRUFEJyBcbiAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHQgXG4gICAgIDogbnVsbDtcbiAgdGhpcy5zZXRTdGF0dXNQcm9wZXJ0aWVzKHRoaXMueGhyLnN0YXR1cyk7XG4gIHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAvLyBnZXRBbGxSZXNwb25zZUhlYWRlcnMgc29tZXRpbWVzIGZhbHNlbHkgcmV0dXJucyBcIlwiIGZvciBDT1JTIHJlcXVlc3RzLCBidXRcbiAgLy8gZ2V0UmVzcG9uc2VIZWFkZXIgc3RpbGwgd29ya3MuIHNvIHdlIGdldCBjb250ZW50LXR5cGUgZXZlbiBpZiBnZXR0aW5nXG4gIC8vIG90aGVyIGhlYWRlcnMgZmFpbHMuXG4gIHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKTtcbiAgdGhpcy5zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcbiAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgID8gdGhpcy5wYXJzZUJvZHkodGhpcy50ZXh0KVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZUJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgc3RyLmxlbmd0aFxuICAgID8gcGFyc2Uoc3RyKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgID8gdGhpcy50b0Vycm9yKClcbiAgICA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXMgfHwgMTIyMyA9PSBzdGF0dXM7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIEVtaXR0ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9O1xuICB0aGlzLl9oZWFkZXIgPSB7fTtcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgZXJyID0gbnVsbDtcbiAgICB2YXIgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7IFxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGU7XG4gICAgfVxuXG4gICAgc2VsZi5jYWxsYmFjayhlcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fdGltZW91dCA9IDA7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuYWJvcnRlZCkgcmV0dXJuO1xuICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhoci5hYm9ydCgpO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3NcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcyl7XG4gIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHN0cik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBmaWxlbmFtZWAuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKG5ldyBCbG9iKFsnPGEgaWQ9XCJhXCI+PGIgaWQ9XCJiXCI+aGV5ITwvYj48L2E+J10sIHsgdHlwZTogXCJ0ZXh0L2h0bWxcIn0pKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtCbG9ifEZpbGV9IGZpbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChmaWVsZCwgZmlsZSwgZmlsZW5hbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZCBgZGF0YWAsIGRlZmF1bHRpbmcgdGhlIGAudHlwZSgpYCB0byBcImpzb25cIiB3aGVuXG4gKiBhbiBvYmplY3QgaXMgZ2l2ZW4uXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gcXVlcnlzdHJpbmdcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvc2VhcmNoJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtdWx0aXBsZSBkYXRhIFwid3JpdGVzXCJcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvc2VhcmNoJylcbiAqICAgICAgICAgLnNlbmQoeyBzZWFyY2g6ICdxdWVyeScgfSlcbiAqICAgICAgICAgLnNlbmQoeyByYW5nZTogJzEuLjUnIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgb3JkZXI6ICdkZXNjJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoJ25hbWU9dGonKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0cyB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICAqICAgICAgICAuc2VuZCgnbmFtZT10b2JpJylcbiAgKiAgICAgICAgLnNlbmQoJ3NwZWNpZXM9ZmVycmV0JylcbiAgKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSl7XG4gIHZhciBvYmogPSBpc09iamVjdChkYXRhKTtcbiAgdmFyIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG5cbiAgLy8gbWVyZ2VcbiAgaWYgKG9iaiAmJiBpc09iamVjdCh0aGlzLl9kYXRhKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBkYXRhKSB7XG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyA9PSB0eXBlKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YVxuICAgICAgICA/IHRoaXMuX2RhdGEgKyAnJicgKyBkYXRhXG4gICAgICAgIDogZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9ICh0aGlzLl9kYXRhIHx8ICcnKSArIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgaWYgKCFvYmopIHJldHVybiB0aGlzO1xuICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnanNvbicpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICBpZiAoMiA9PSBmbi5sZW5ndGgpIHJldHVybiBmbihlcnIsIHJlcyk7XG4gIGlmIChlcnIpIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgZm4ocmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ09yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gZ2V0WEhSKCk7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZGF0YSA9IHRoaXMuX2Zvcm1EYXRhIHx8IHRoaXMuX2RhdGE7XG5cbiAgLy8gc3RvcmUgY2FsbGJhY2tcbiAgdGhpcy5fY2FsbGJhY2sgPSBmbiB8fCBub29wO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIGlmICgwID09IHhoci5zdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLmFib3J0ZWQpIHJldHVybiBzZWxmLnRpbWVvdXRFcnJvcigpO1xuICAgICAgcmV0dXJuIHNlbGYuY3Jvc3NEb21haW5FcnJvcigpO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoJ2VuZCcpO1xuICB9O1xuXG4gIC8vIHByb2dyZXNzXG4gIGlmICh4aHIudXBsb2FkKSB7XG4gICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24oZSl7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRcbiAgaWYgKHRpbWVvdXQgJiYgIXRoaXMuX3RpbWVyKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICAvLyBxdWVyeXN0cmluZ1xuICBpZiAocXVlcnkpIHtcbiAgICBxdWVyeSA9IHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0KHF1ZXJ5KTtcbiAgICB0aGlzLnVybCArPSB+dGhpcy51cmwuaW5kZXhPZignPycpXG4gICAgICA/ICcmJyArIHF1ZXJ5XG4gICAgICA6ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgLy8gaW5pdGlhdGUgcmVxdWVzdFxuICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xuXG4gIC8vIENPUlNcbiAgaWYgKHRoaXMuX3dpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgLy8gYm9keVxuICBpZiAoJ0dFVCcgIT0gdGhpcy5tZXRob2QgJiYgJ0hFQUQnICE9IHRoaXMubWV0aG9kICYmICdzdHJpbmcnICE9IHR5cGVvZiBkYXRhICYmICFpc0hvc3QoZGF0YSkpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICB2YXIgc2VyaWFsaXplID0gcmVxdWVzdC5zZXJpYWxpemVbdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXTtcbiAgICBpZiAoc2VyaWFsaXplKSBkYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgLy8gc2V0IGhlYWRlciBmaWVsZHNcbiAgZm9yICh2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICBpZiAobnVsbCA9PSB0aGlzLmhlYWRlcltmaWVsZF0pIGNvbnRpbnVlO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGZpZWxkLCB0aGlzLmhlYWRlcltmaWVsZF0pO1xuICB9XG5cbiAgLy8gc2VuZCBzdHVmZlxuICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTtcbiAgeGhyLnNlbmQoZGF0YSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogSXNzdWUgYSByZXF1ZXN0OlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgIHJlcXVlc3QoJ0dFVCcsICcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnLCBjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdXJsIG9yIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmdldCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuaGVhZCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnSEVBRCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5kZWwgPSBmdW5jdGlvbih1cmwsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0RFTEVURScsIHVybCk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBBVENIIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUE9TVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQVVQgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xuIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuIiwiXG4vKipcbiAqIFJlZHVjZSBgYXJyYCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFxuICpcbiAqIFRPRE86IGNvbWJhdGlibGUgZXJyb3IgaGFuZGxpbmc/XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGZuLCBpbml0aWFsKXsgIFxuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBjdXJyID0gYXJndW1lbnRzLmxlbmd0aCA9PSAzXG4gICAgPyBpbml0aWFsXG4gICAgOiBhcnJbaWR4KytdO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBjdXJyID0gZm4uY2FsbChudWxsLCBjdXJyLCBhcnJbaWR4XSwgKytpZHgsIGFycik7XG4gIH1cbiAgXG4gIHJldHVybiBjdXJyO1xufTsiXX0=
