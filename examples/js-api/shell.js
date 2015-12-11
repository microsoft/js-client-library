#!/usr/bin/env node

/*
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

/* 
 * usage: $ node sell.js
 *
 *  8.4.1 /r/repository/shell/execute
 *
 * This call executes repository-managed shell scripts .sh, .csh, .bash, .bat on
 * the DeployR server. To execute a repository-managed shell script the caller
 * must provide parameter values for filename , directory , author and
 * optionally version.
 *
 * Due to the special security concerns associated with excuting shell scripts
 * on the DeployR server only shell scripts owned by ADMINISTRATOR users can be
 * executed on this API call. Any attempt to execute a shell script stored in
 * the repository that is not owned by an ADMINISTRATOR user will be rejected.
 */

var deployr     = require('../../deployr'),
    config      = require('../config'),
    credentials = config.credentials;

// ============================================================================
// Set the DeployR server endpoint URL
// ============================================================================

deployr.configure({ host: config.endpoint, logging: false });

// ============================================================================
// Authenticate as a `ADMINISTRATOR` and execute pre-supplied `echo.sh`:
//
// #!/bin/bash
// for i in $*; do 
//   echo $i
// done
// ============================================================================

console.log('Authenticate and execute the repository-managed shell script:');
console.log('=============================================================');
console.log('author:     `admin`');
console.log('directory:  `external:public:admin`');
console.log('filename:   `echo.sh`');
console.log('arguments:  `Hello from DeployR!`');
console.log('=============================================================');

var ruser = deployr.auth(credentials.username, credentials.password);

ruser.shell('/admin/external:public:admin/echo.sh', 'Hello from DeployR!')
    .error(function(err) {
    	console.log(err);
    })  
    .end(function(res) {    	
    	var echo = res.get('console') || [];
    	console.log('Response:');
    	for (var i = 0; i < echo.length; i++) {
    		console.log('echo argument: "' + echo[i] + '"');
    	}
    });
