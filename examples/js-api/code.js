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
 * usage: $ node code.js
 *
 * Executes a block of R code on an R session.
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

console.log('Executing a block of R code on an `R session`...\n\n');

// ============================================================================
// Set the DeployR server endpoint URL and authenticate
// ============================================================================

var ruser = deployr.configure({ host: config.endpoint })
              .auth(credentials.username, credentials.password);

// ============================================================================
// Executes a block of R code on the R session.
// 
// @NOTE: 
// 
// 1. If no 'project' is passed to `.code(r, project) then a project is created 
//    and included on this call's parameter as the R session identifier.
//
// 2. Be sure to close the project by calling `.release(project)`. It is the
//    responsibility of the developer to clean up projects.
// ============================================================================

// project-id ref used to close project at the end
var project   = null; 

// R Code --> DeployR - Hello World.R
var r = [ 'require(deployrUtils)',
          'revoInput(\'{ "name": "input_randomNum", "label": "Sample size", "render": "integer", "default": 100, "min": 10, "max": 10000 }\')',
          'x<-rnorm(input_randomNum)',
          'plotTitle<-paste(\'Histogram of\', input_randomNum, "Random Values")',
          'png(filename="histogram.png")',
          'hist(x, main=plotTitle)',
          'dev.off()' 
        ].join('\n');

// execute the block of R code passing in an 'R numeric' named `input_random`
ruser.code(r)
    .numeric('input_randomNum', 10)
    .error(function(err) {
        printf('Error', err);
    })
    .end(function(res) {
        project = res.get('project').project;

        // print to stdout
        printf('console', res.get('console'));
        printf('code', res.get('code'));
        printf('artifacts', res.get('artifacts'));
    })
    .ensure(function() {
        ruser.release(project);
    });
