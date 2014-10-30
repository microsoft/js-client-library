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
 * usage: $ node response.js
 *
 * Example inspecting and printing a DeployR `/r/repository/script/execute` 
 * response using the `.get(key)` helper for easy response property lookup.
 */
var util    = require('util'),
    deployr = require('../../deployr'),
    config  = require('../config');

/*
 * stdout helper to print a string representation of an object for the example.
 */
var printf = function(key, obj) {
	console.log('========================');
	console.log(key);
	console.log('========================');
	console.log(util.inspect(obj, false, null, true));	
	console.log('\n\n');
};

deployr.configure({ host: config.endpoint })
  .script('/testuser/root/DeployR - Hello World.R')
  .numeric('input_randomNum', 10)  
  .end(function(res) {
     printf('Response', res);
     printf('call', res.get('call'));
     printf('success', res.get('success'));
     printf('artifacts', res.get('artifacts'));
     printf('console', res.get('console'));
  });