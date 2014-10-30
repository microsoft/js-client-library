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
 * usage: $ node pipeline.js
 *
 * Runs two 'tasks' of DeployR request chains in sequence but asynchronous:
 * ----------------------------------------------------------------------------
 * 0. configure request to DeployR server `http://dhost:dport`
 *
 * -------------------------------- 
 * Batch 1 (runs first)
 * --------------------------------
 * 1. /r/user/login
 * 2. /r/repository/script/execute
 * 3. /r/project/create
 * 4. /r/project/execute/script
 * 5. /r/project/close
 * --------------------------------
 * Batch 2 (runs second)
 * -------------------------------- 
 * 1. /r/user/about
 * 2. /r/user/logout
 * ---------------------------------------------------------------------------- 
 * @NOTE - If error occures somewhere in the call chain it is aborted.
 */

var deployr     = require('../../deployr'),
    config      = require('../config'),
    credentials = config.credentials;
    
deployr.configure({ logging: false, host: config.endpoint });

function firstTask() {

    return deployr.io('/r/user/login')
             .delay()
             .data(credentials)
             .end()
             .io('/r/repository/script/execute')
             .delay()
             .data({ filename: 'DeployR - Hello World', author: 'testuser' })
             .numeric('input_randomNum', 10)    
             .end()
             .io('/r/project/create')
             .delay()             
             .end(function (res, chain) {
                // attach project from `/r/project/create` on this io() call [2]
                return { project: res.deployr.response.project.project };
             })
             .io('/r/project/execute/script')
             .delay()
             .data({ filename: 'DeployR - Hello World', author: 'testuser' })
             .numeric('input_randomNum', 10)    
             .end(function (res, chain) {
                // attach project from `/r/project/create` on this io() call [2]
                return { project: chain[2].deployr.response.project.project };
             })
             // ================================================================
             .io('/r/project/close')
             .delay()
             .end();
}

function secondTask() {
    return deployr.io('/r/user/about')
             .delay()
             .end()
             .io('/r/user/logout')
             .delay()
             .end();
}

/* 
 * deployr.pipline()
 *
 * Runs an array of `tasks` in sequence, without overlap where a `task` is one
 * or more chained sequ  `.io()` call(s) to DeployR. This examples piplines two
 * `task` batches.
 *
 * @@@ Important @@@
 *
 * You must `.delay()` the `.io()` calls otherwise they will run immediately and
 * in parallel.
 */

console.log('Starting the DeployR request pipeline...');

deployr.pipeline([firstTask(), secondTask()])
.then(function(chain) {
    console.log('[success]--------------------------------------------------');

    // print results for each request in each task that ran through the pipeline
    chain.results.forEach(function(task, index) {
        console.log('---------------------------------');
        console.log('Task ' + (index + 1) + ' results');
        console.log('---------------------------------');
        task.forEach(function(result) { console.log(result); });        
    });

    console.log('-----------------------------------------------------------');
}, function(err) {
    console.log('[error]----------------------------------------------------');
    console.log(err);
    console.log('-----------------------------------------------------------');
});