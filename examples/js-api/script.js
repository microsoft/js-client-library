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
 * usage: $ node script.js
 *
 * Executes the repository-managed R script 'DeployR - Hello World.R' on an
 * anonymous project passing in `R numeric` value of '10' named 'input_randNum'.
 *
 * #############################################################################
 * # 'DeployR - Hello World.R
 * #############################################################################
 *
 * # generate a vector of random numbers, using object "input_randomNum" to
 * # indicate how many values to create
 *
 * require(RevoScriptTools)
 * revoInput('{ "name": "input_randomNum", "label": "Sample size", "render": "integer", "default": 100, "min": 10, "max": 10000 }')
 *
 * x<-rnorm(input_randomNum)
 * plotTitle<-paste('Histogram of', input_randomNum, "Random Values")
 *
 * #generate a histogram of those random numbers, and write
 * #the histogram to a file
 * png(filename="histogram.png")
 * hist(x, main=plotTitle)
 * dev.off()
 */

var util    = require('util'),
    deployr = require('../../deployr'),
    config  = require('../config');

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

console.log('Executing the repository-managed R script ' + 
	         '"DeployR - Hello World.R" twice for:\n' +
	         'author: testuser\n' +
	         'directory: root\n' +
	         'filename: DeployR - Hello World.R\n');

// ============================================================================
// Set the DeployR server endpoint URL
// ============================================================================

deployr.configure({ host: config.endpoint, logging: false });

//
// Execute R script `/author/directory/filename`
// - author:    testuser
// - directory: root
// - filename:  DeployR - Hello World.R
//
deployr.script('/testuser/root/DeployR - Hello World.R')
    .numeric('input_randomNum', 10)
    .error(function(err) {
        console.log(err)
    })
    .end(function(res) {
        printf('artifacts', res.get('artifacts')); // stdout
    });

//
// Alternatively you can use the `.io('/r/repository/script/execute')` syntax.
// The two are equivalent.
//
deployr.io('/r/repository/script/execute')
    .data({
        author: 'testuser',
        directory: 'root',
        filename: 'DeployR - Hello World.R'
    })
    .numeric('input_randomNum', 10)
    .error(function(err) {
        console.log(err)
    })
    .end(function(res) {
        printf('artifacts', res.get('artifacts')); // stdout
    });
