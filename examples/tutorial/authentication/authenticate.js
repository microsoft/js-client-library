#!/usr/bin/env node

/*
 * Copyright (C) 2010-2016, Microsoft Corporation
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

/* ----------------------------------------------------------------------------
 * usage: $ node authenticate.js
 * see: http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingusers.html
 * 
 * 1. Determine DeployR server endpoint.
 * 2. Establish an authenticated handle with the DeployR server.
 * 3. Release connection before application exits. 
 * ---------------------------------------------------------------------------- 
 */

var deployr = require('../../../deployr'),
    config  = require('../../config'),
    ruser   = null; // The user resquest session

deployr.configure( { logging: false, host: config.endpoint });

/*
 * Run example. 
 * @NOTE - Remember the`.end()` will send the request for `/ruser/login`
 *         If `.end()` is never called the request will not be sent.
 */

ruser = deployr.io('/r/user/login');

ruser.data(config.credentials)
  .error(function(err) {
    console.warn('Authenticate: ex=' + err.get('error'));
  })
  .end(function(res) {     
     console.log('Authenticate: established authenticated connection, rUser=' 
        + res.get('user').username);
  })
  .ensure(function() {
    /*
     * Release connection and logout before application exits.
     */
     ruser.release();      
  });
  
