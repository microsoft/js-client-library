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

/* 
 * usage: $ node sugar.js
 *
 * Make DeployR "sweeter" for human use using the `script` and `auth` sugar
 * methods. 
 */

var util        = require('util'),
    deployr     = require('../../deployr'),
    config      = require('../config'),
    credentials = config.credentials;

/*
 * stdout helper to print a string representation of object for the example.
 */
var printf = function(property, obj) {
	console.log('========================');
	console.log(property);
	console.log('========================');
	console.log(util.inspect(obj, false, null, true));	
	console.log('\n\n');
};

// ============================================================================
// Set the DeployR server endpoint URL
// ============================================================================

deployr.configure({ host: config.endpoint, logging: false });

// ============================================================================
// Executes repository-managed scripts on an Anonymous Project.
// ============================================================================

deployr.script('/testuser/root/DeployR - Hello World.R')
   .numeric('input_randomNum', 10)  
   .end(function(res) {
     printf('console', res.get('console')); // stdout
   });

// ============================================================================
// Executes repository-managed scripts on the R session.
// @NOTE:
// 
// `.script( { project: true } ...)` will implicitly create a temporary project
//   and use it for the script execution
// ============================================================================

var project   = null; // project-id used to close project at the end

// If you had a valid ProjectID here you could use it. Since we do not we can
// pass in `true` and a temp project will be created as a convenience.
var isProject = true;

// login
var ruser = deployr.auth(credentials.username, credentials.password);

// Executes repository-managed scripts on the R session.
ruser.script('/testuser/root/DeployR - Hello World.R', isProject)
   .numeric('input_randomNum', 10)   
   .end(function(res) { 
   	 project = res.get('project').project; // save project so we can close later

   	 // stdout
     printf('console', res.get('console'));     
     printf('artifacts', res.get('artifacts'));     
   })   
   .ensure(function() {
   	  ruser.release(project);
   });