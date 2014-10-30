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
 * usage: $ node chain.js
 *
 * Runs a DeployR request chain in sequence but asynchronous:
 * --------------------------------------------------------------------
 * 0. configure request to DeployR server endpoint
 * 1. /r/user/login
 * 2. /r/repository/script/execute
 * 3. /r/project/create
 * 4. /r/project/execute/script
 * 5. /r/project/close
 * 6. /r/user/logout
 * -------------------------------------------------------------------- 
 * @NOTE - If error occures somewhere in the call chain it is aborted.
 */

var deployr     = require('../../deployr'),
    config      = require('../config'),
    credentials = config.credentials;

deployr.configure( { logging: true, host: config.endpoint })

// ====================================================================

var ruser = deployr.auth(credentials.username, credentials.password);

// ====================================================================

ruser.io('/r/repository/script/execute')	
  .data({ filename : 'DeployR - Hello World', author: 'testuser' })
  .numeric('input_randomNum', 10)
  .character('input_character', 'hello')
  .error(function(err) {
	// do something with the error
  })
  .end(function(res, chain) {
	// do something with the success response
  })  
  // ====================================================================
  .io('/r/project/create')
  .error(function(err) {
	// do something with the error
  })
  .end(function(res, chain) {
	// attach project from `/r/project/create` on this io() call [2]
	return { project: res.get('project').project };
  })
  // ====================================================================
  .io('/r/project/execute/script')
  .data({ filename : 'DeployR - Hello World', author: 'testuser' })
  .numeric('input_randomNum', 10)
  .error(function(err) {
	// do something with the error
  })
  .end(function(res, chain) {	
	// attach project from `/r/project/create` on this io() call [2]
	return { project: chain[2].deployr.response.project.project };
  })
  // ====================================================================
  .io('/r/project/close')
  .end(function(res, chain) {
	// do something with the success response
  })
  // ====================================================================
  .io('/r/user/logout')
  .end(function(res, chain) {
	// do something with the success response	
  });
  // ====================================================================
