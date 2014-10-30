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
 * usage: $ node es-client.js
 *
 * Example binding to the DeployR EventStream API '/r/event/stream'
 *
 * example dependencies: express
 *    - $ npm install express
 */ 

var deployr = require('../../deployr'),
    config  = require('../config'),
    util    = require('util'),
    app     = require('express')();    

/*
 * stdout helper to print a string representation of object for the example.
 */
var printf = function(obj) {
	console.log(util.inspect(obj, false, null, true));	
	console.log('\n\n');
};

deployr.configure( { logging: false, host: config.endpoint });

var es = deployr.es(config.credentials)  
  // -- connection choices for event types --
  .session() // default
  //.all()
  //.project(id) 
  //.job(id)
  //.management() 
  // -- end connection choices for event types --
  .on('es:error', function(data) {
  	console.log('===================');
  	console.log('es:error');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:connecting', function(data) {
  	console.log('===================');
  	console.log('es:connecting');
  	console.log('===================');  	  	
  	printf(data);
  }) 
  .on('es:disconnect', function(data) {        
  	console.log('===================');
  	console.log('es:disconnect');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:streamConnect', function(data) {
  	console.log('===================');
  	console.log('es:streamConnect');
  	console.log('===================');  	  	
  	printf(data);    
  })
  .on('es:streamDisconnect', function(data) {
  	console.log('===================');
  	console.log('es:streamDisconnect');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:executionConsole', function(data) {
  	console.log('===================');
  	console.log('es:executionConsole');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:executionRevo', function(data) {
  	console.log('===================');
  	console.log('es:executionRevo');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:executionError', function(data) {
  	console.log('===================');
  	console.log('es:executionError');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:jobLifecycle', function(data) {
  	console.log('===================');
  	console.log('es:jobLifecycle');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:gridHeartbeat', function(data) {
  	console.log('===================');
  	console.log('es:gridHeartbeat');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:gridActivity', function(data) {
  	console.log('===================');
  	console.log('es:gridActivity');
  	console.log('===================');  	  	
  	printf(data);
  })
  .on('es:gridWarning', function(data) {
  	console.log('===================');
  	console.log('es:gridWarning');
  	console.log('===================');  	  	
  	printf(data);  	
  })
  .on('es:securityLogin', function(data) {     
  	console.log('===================');
  	console.log('es:securityLogin');
  	console.log('===================');  	       
  	printf(data);
  })
  .on('es:securityLogout', function(data) {
  	console.log('===================');
  	console.log('es:securityLogout');
  	console.log('===================');  	       
  	printf(data);
  })
  .open();
