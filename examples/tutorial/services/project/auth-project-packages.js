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
 * usage: $ node auth-project-packages.js
 * see: http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingprojects.html#projectpackagelist
 *
 * 1. Determine DeployR server endpoint.
 * 2. Establish an authenticated handle with the DeployR server.
 * 3. Create a temporary project (R session).
 * 4. Retrieve a list of R packages that are current attached on the R session.
 * 5. Release connection, close project and logout.
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
         console.warn('AuthProjectPackages: ex=' + err.get('error'));
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
    console.log('AuthProjectPackages: established authenticated ' +
        'connection, rUser=' + res.get('user').username);
  })
  // =========================================================================
  .io('/r/project/create')
  .end(function(res) {
     project = res.get('project').project;
     
     console.log('AuthProjectPackages: created temporary R session, ' + 
       'rProject=' + project);

     // pass `project` to next async call in io queue
     return { project: project }; 
  }) 
  // =========================================================================  
  .io('/r/project/package/list')
  .end(function(res) {
     var packages = res.get('packages');
     packages.forEach(function(pkg) {
       console.log('AuthProjectPackages: R session, found attached R package ' + 
        'name=' + pkg.name + 
        ', repo='  + pkg.repo + 
        ', version=' + pkg.version);
     });
  })
  // =========================================================================  
  .ensure(function() {
    /*
     * Release connection before application exits.
     */
    ruser.release([ project ]);
 });
