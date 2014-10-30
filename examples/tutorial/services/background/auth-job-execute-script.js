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

/* ----------------------------------------------------------------------------
 * usage: $ node auth-job-execute-script.js
 * see: http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingjobs.html#jobsubmit
 *
 * 1. Determine DeployR server endpoint.
 * 2. Establish an authenticated handle with the DeployR server.
 * 3. Submit a background job to execute a repository-managed script: 
 *       `/testuser/root/Histogram of Auto Sales.R`            
 * 4. Query for the job status every 2 seconds for `Completed` status.
 * 5. On status `Completed` retrieve results of the background job execution.
 * ---------------------------------------------------------------------------- 
 */

var deployr    = require('../../../../deployr'),
    config     = require('../../../config'),
    jobPending = true, // R job status
    intervalId = null, // ID value of the timer that will be set
    ruser      = null; // The user resquest session    

/*
 * This helper queries the job status for a `Completed` state.
 */
function query(job) {
    ruser.io('/r/job/query')
      .data({ job: job })
      .end(function(res) {
        console.log('Job Status=' + res.get('status') + ' rJob=' + job);

        jobPending = res.get('status') !== 'Completed';

        if (!jobPending) {        
           console.log('AuthJobExecuteScript: retrieved background ' +
            'job result on project, rJob=' + res.get('job').job);
        }
      });      
}

/*
 * Configure the DeployR server endpoint and subscribe to all errors at a global
 * level.
 */
deployr.configure( { 
    logging: false, 
    host: config.endpoint, 
    events: {
       error: function(api, err) {
         jobPending = false;
         console.warn('AuthJobExecuteScript: ex=' + err.get('error'));
       } 
   } 
});

/*
 * Run example.
 */
ruser = deployr.io('/r/user/login')
  .data(config.credentials)
  .end(function(res) {
     console.log('Authenticate: established authenticated connection, rUser=' 
        + res.get('user').username);
  })
  .io('/r/job/submit')
  .data({
    name: 'Background Script Execution',
    descr: 'Background script execution.',
    rscriptname: 'Histogram of Auto Sales',
    rscriptdirectory: 'root',
    rscriptauthor: 'testuser',
    priority: 'high'
  })
  .end(function(res) {
     var job = res.get('job').job;
     console.log('AuthJobExecuteScript: submitted background job ' +
        'for execution, rJob=' + job);

     // query job status every 2 seconds
     intervalId = setInterval(function() { 
        if (jobPending) {
            query(job);
        } else {
            clearInterval(intervalId);
            ruser.release();
        }
     }, 2000);
  });