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
 * usage: $ node auth-project-pool-create.js
 * see: http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingprojects.html#projectpool
 *
 * 1. Determine DeployR server endpoint.
 * 2. Establish an authenticated handle with the DeployR server.
 * 3. Create a pool of temporary projects (R sessions).
 * 4. Release connection, close all projects and logout.
 * ---------------------------------------------------------------------------- 
 */

var deployr  = require('../../../../deployr'),
    config   = require('../../../config'),
    projects = [],
    ruser    = null; // The user resquest session  
 
/*
 * Configure the DeployR server endpoint and subscribe to all errors at a global
 * level.
 */
deployr.configure( { 
    logging: false, 
    host: config.endpoint, 
    events: {
       error: function(api, err) {
         console.warn('AuthProjectPoolCreate: ex=' + err.get('error'));
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
  .data(config.credentials)
  .end(function(res) {
    console.log('AuthProjectPoolCreate: established authenticated ' +
        'connection, rUser=' + res.get('user').username);
  })
  // =========================================================================  
  .io('/r/project/pool')
  .data({ poolsize: 4 })
  .end(function(res) {
    var pool = res.get('projects');

    pool.forEach(function(project) { projects.push(project.project); });

    console.log('AuthProjectPoolCreate: created pool of ' +
      pool.length + ' temporary R sessions, pool=' + projects);   
  })
  // =========================================================================  
  .ensure(function() {
    /*
     * Release connection before application exits.
     */
    ruser.release(projects);
 });
