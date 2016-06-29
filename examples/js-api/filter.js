#!/usr/bin/env node

/*
 * Copyright (C) 2010-2016, Microsoft Corporation
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

/* 
 * usage: $ node filter.js
 *
 * This example demonstrates how to "filter" out a chained sequence of requests.
 * A filter is helpful to keep the request chain in a nice fluid sequence 
 * without having to brake it up in your code with `if` `else` statements.
 */

var deployr = require('../../deployr'),
	config  = require('../config');

deployr.configure({ host: config.endpoint, logging: false });

console.log('Starting...');

//
// Execute R script `/author/directory/filename` three times in sequence.
// - author:    testuser
// - directory: root
// - filename:  DeployR - Hello World.R
//
deployr.script('/testuser/root/DeployR - Hello World.R')
    .numeric('input_randomNum', 10)
    .end(function(res) {
    	console.log('The next request will be filtered out.')
        return { consoleoff: false };
    })
    .script('/testuser/root/DeployR - Hello World.R')
    .filter(function(data) {    	
    	// if false is returned this `io` call will be filtered from the chain
    	return data.consoleoff; // `false` intentionally from above
    })
    .numeric('input_randomNum', 20)
    .end(function(res) {
    	console.log('I should not be called because I was filtered out.');       
    })
	.script('/testuser/root/DeployR - Hello World.R')
    .numeric('input_randomNum', 30)
    .end(function(res) {
    	console.log('Last request finished.')
    })
    .ensure(function() {
    	console.log('Completed...')
    });
