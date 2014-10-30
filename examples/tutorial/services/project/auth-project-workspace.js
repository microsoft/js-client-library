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
 * usage: $ node auth-project-workspace.js
 * see: http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingprojects.html#projectworkspace
 *
 * 1. Determine DeployR server endpoint.
 * 2. Establish an authenticated handle with the DeployR server.
 * 3. Create a temporary project (R session).
 * 4. Execute a block of R code to create an object in the R session's workspace.
 * 5. Retrieve the object "x" from the R session's workspace.
 * 6. Create R object data in the R sesssion's workspace by pushing 
 *    DeployR-encoded data from the client application:            
 *    - Prepare sample R object vector data.
 *    - Use RDataFactory to encode the sample R object vector data.
 *    - Push encoded R object into the workspace.
 * 7. Retrieve the object "y" from the R session's workspace.
 * 8. Retrieve a list of R objects in the R session's workspace.
 * 9. Release connection, close project and logout.
 * ---------------------------------------------------------------------------- 
 */

var deployr = require('../../../../deployr'),
    config  = require('../../../config'),
    project = null,
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
         console.warn('AuthProjectWorkspace: ex=' + err.get('error'));
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
    console.log('AuthProjectWorkspace: established authenticated ' +
        'connection, rUser=' + res.get('user').username);
  })
  // =========================================================================
  .io('/r/project/create')
  .end(function(res) {
     project = res.get('project').project;
     
     console.log('AuthProjectWorkspace: created temporary R session, ' + 
       'rProject=' + project);

     // pass `project` to next async call in io queue
     return { project: project }; 
  }) 
  // =========================================================================  
  .io('/r/project/execute/code')
  .data({ code: 'x <- T' }) 
  .end(function(res) {    
     // pass `project` to next async call in io queue
     return { project: project }; 
  })
  // =========================================================================    
  .io('/r/project/workspace/get')
  .data({ name: 'x' })
  .end(function(res) {
    /*
     * Retrieve the object "x" from the R session's workspace.
     */
    var encodedX = res.workspace();

    console.log('AuthProjectWorkspace: retrieved object x ' +
      'from workspace, encodedX=' + encodedX.value);

     // pass `project` to next async call in io queue
     return { project: project };     
  })     
  // ========================================================================= 
  .io('/r/project/workspace/push')
  .numericVector('y', [10.0, 11.1, 12.2, 13.3, 14.4])
  .end(function(res) {
     // pass `project` to next async call in io queue
     return { project: project }; 
  })
  // =========================================================================
  .io('/r/project/workspace/get')
  .data({ name: 'y' })
  .end(function(res) {
    /*
     * Retrieve the object "y" from the R session's workspace.
     */
    var encodedY = res.workspace();

    console.log('AuthProjectWorkspace: retrieved object y ' +
      'from workspace, encodedY=' + encodedY.value);    

     // pass `project` to next async call in io queue
     return { project: project };     
  })     
  // =========================================================================  
  .io('/r/project/workspace/list')
  .end(function(res) {
    var objects = res.workspace();
  })     
  // =========================================================================     
  .ensure(function() {
    /*
     * Release connection before application exits.
     */
    ruser.release([ project ]);
 });
