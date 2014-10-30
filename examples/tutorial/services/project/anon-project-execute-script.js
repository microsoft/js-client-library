#!/usr/bin/env node

/*
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

/* ----------------------------------------------------------------------------
 * usage: $ node anon-project-execute-script.js
 * see: http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingrepository.html
 *
 * 1. Determine DeployR server endpoint.
 * 2. Establish an authenticated handle with the DeployR server.
 * 3. Execute a public analytics Web service as an anonymous user based on a 
 *    repository-managed R script: `/testuser/root/Histogram of Auto Sales.R`
 * 4. Retrieve script execution results.
 * ---------------------------------------------------------------------------- 
 */

var deployr = require('../../../../deployr'),
    config  = require('../../../config'),
    ruser   = null; // The user resquest session    
 
/*
 * Configure the DeployR server endpoint and subscribe to all errors at a global
 * level.
 */
deployr.configure( { 
    logging: false, 
    host: config.endpoint, 
    events: {
       error: function(api, err) {
         console.warn('AnonProjectExecuteScript: ex=' + err.get('error'));
       } 
   } 
});

/*
 * Run example. 
 * @NOTE - Remember the`.end()` will send the request for `/r/user/login`
 *         If `.end()` is never called the request will not be sent.
 */
ruser = deployr.io('/r/user/login');         

ruser.data(config.credentials)
  .end(function(res) {
    console.log('AnonProjectExecuteScript: established authenticated ' +
        'connection, rUser=' + res.get('user').username);
  })
  // =========================================================================  
  .script('/testuser/root/Histogram of Auto Sales.R')
  .end(function(res) {
    var exec = res.get('execution').execution;
    console.log('AnonProjectExecuteScript: public repository-managed ' +
        'script execution completed, rScriptExecution=' + exec);

     /*
      * Retrieve script execution results.
      */
     var rconsole = res.get('console');
     var plots    = res.get('results');
     var files    = res.get('artifacts');
     var objects  = res.workspace(); // --or-- res.get('workspace').objects;
  }) 
  // =========================================================================  
  .ensure(function() {
    /*
     * Release connection before application exits.
     */
    ruser.release();
 });
