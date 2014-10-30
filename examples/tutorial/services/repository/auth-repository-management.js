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
 * usage: $ node auth-repository-management.js
 * see: http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingrepository.html
 *
 * 1. Determine DeployR server endpoint.
 * 2. Establish an authenticated handle with the DeployR server.
 * 3. Create a file in the authenticated user's private repository and set 
 *    shared access on the file so other authenticated users can access the file.
 * 4. Retrieve a list of files in the authenticated user's private repository.
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
        console.warn('AuthRepositoryManagement: ex=' + err.get('error'));
       } 
   } 
});

/*
 * Run example. 
 * @NOTE - Remember the`.end()` will send the request for `.io()`
 *         If `.end()` is never called the requests will not be sent.
 */
ruser = deployr.io('/r/user/login');

ruser.data(config.credentials)
  .end(function(res) {
    console.log('AuthRepositoryManagement: established authenticated ' +
        'connection, rUser=' + res.get('user').username);
  })
  // =========================================================================  
  .io('/r/repository/file/write')
  .data({ filename: 'hello.txt', shared: true, text: 'Hello World!' }) 
  .end(function(res) {
    var fileURL = res.get('url');
    console.log(fileURL);
  })
  // =========================================================================  
  .io('/r/repository/file/list') 
  .end(function(res) {
    var files = res.get('files');
    files.forEach(function(file) {
        console.log('AuthRepositoryManagement: private repository, ' +
            'found file name=' +
            file.filename + ", directory="  +
            file.directory + ", access=" +
            file.access);
    });
  })
  // =========================================================================  
  .ensure(function() {
    /*
     * Release connection before application exits.
     */
     ruser.release();
  });