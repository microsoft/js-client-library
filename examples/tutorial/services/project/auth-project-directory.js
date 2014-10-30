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
 * usage: $ node auth-project-directory.js
 * see: http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingprojects.html#projectdirectory
 *
 * 1. Determine DeployR server endpoint.
 * 2. Establish an authenticated handle with the DeployR server.
 * 3. Create a temporary project (R session).
 * 4. Create a file in the R session's working directory by writing text to a 
 *    named file.
 * 5. Retrieve a list of files in the R session's working directory.
 * 6. Delete all files in the R session's working directory.
 * 7. Release connection, close project and logout.
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
         console.warn('AuthProjectDirectory: ex=' + err.get('error'));
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
    console.log('AuthProjectDirectory: established authenticated ' +
        'connection, rUser=' + res.get('user').username);
  })
  // =========================================================================  
  .io('/r/project/create')
  .end(function(res) {
     project = res.get('project').project;

     console.log('AuthProjectDirectory: created temporary R session, ' + 
       'rProject=' + project);

     // pass `project` to next async call in io queue
     return { project: project }; 
  }) 
  // =========================================================================  
  .io('/r/project/directory/write')
  .data({ filename: 'hello.txt', text: 'Hello World!' }) 
  .end(function(res) {
    var fileURL = res.get('url');
    console.log(fileURL);

    // pass `project` to next async call in io queue
    return { project: project }; 
  })
  // =========================================================================  
  .io('/r/project/directory/list') 
  .end(function(res) {
    var files    = res.get('files'),
        filename = [];

    files.forEach(function(file) {
      console.log('AuthProjectDirectory: working directory, ' +
        'found file name=' + file.filename + 
        ', type='  + file.type + 
        ', size=' + file.length);
      
      // delete filename list
      filename.push(file.filename);

      console.info('AuthProjectDirectory: working directory, ' +
        'deleted file name=' + file.filename + 
        ', type='  + file.type + 
        ', size=' + file.length);
    });

    // pass `project` `filename` to next async call in io queue
    return { project: project, filename: filename.join(',') }; 
  })
  // =========================================================================  
  .io('/r/project/directory/delete')
  .end()
  // =========================================================================  
  .ensure(function() {
    /*
     * Release connection before application exits.
     */
    ruser.release([ project ]);
 });
