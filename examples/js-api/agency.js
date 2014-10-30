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
 * usage: $ node agency.js
 *
 * Runs DeployR request chains using diffrent cookies.
 *
 * @NOTE - Any time deployr.io(...) is called it will create a new jsessionid,
 *         in other words requests will not by sticky. Cookies are shared across
 *         requests if you use the same `agent` (i.e. same authenticated user) 
 *         to make .io() calls to DeployR.
 *
 */

var deployr     = require('../../deployr'),
    config      = require('../config'),
    credentials = config.credentials;

deployr.configure( { host: config.endpoint, sticky: false });

// ====================================================================
// should start with empty session and should gain a session cookie for
// the chained requests
// ====================================================================

var agent1 = deployr.io('/r/user/login')
  .data(credentials)
  .end(function(res) {
  	console.log('agent1-HTTP COOKIE:: ' + res.get('httpcookie'));
  });

// ====================================================================
// should persist cookies across requests
// ====================================================================

agent1.io('/r/project/create')
  .on('deployr-io:401', function(err) {
	console.log(err);
  })
  .end(function(res) {
  	console.log('agent1-HTTP COOKIE:: ' + res.get('httpcookie'));
	
  	// add project-id to next `agent1.io` call which is `/r/project/close`
	return { project: res.get('project').project };
  });

agent1.io('/r/project/close')  
  .end(function(res) {
  	console.log('agent1-HTTP COOKIE:: ' + res.get('httpcookie'));
  })

agent1.io('/r/user/about')  
  .end(function(res) {
  	console.log('agent1-HTTP COOKIE:: ' + res.get('httpcookie'));
  });  

// ====================================================================
// should (not) share cookies with `agent1`
// ====================================================================

// wait to send `agent3` until `agent2` returns so we can use agent2's cookies
// notice no `.end()` used here. Remember `.end()` sends the request to DeployR
var agent3 = deployr.script('/testuser/root/DeployR - Hello World.R');

var agent2 = deployr.script('/testuser/root/DeployR - Hello World.R')  
  .end(function(res) {
  	console.log('agent2-HTTP COOKIE:: ' + res.get('httpcookie'));


    // ====================================================================
    // should share cookies with `agent2`
    // ====================================================================
  	agent3.share(agent2.getCookies()).end(function(ires) {
  		console.log('agent3-HTTP COOKIE:: ' + ires.get('httpcookie'));
  	});
  }); 

// ====================================================================
// should not lose cookies between `agent2` 
// ====================================================================

agent1.script('/testuser/root/DeployR - Hello World.R')
  .end(function(res) {
  	console.log('agent1-HTTP COOKIE:: ' + res.get('httpcookie'));
  });
