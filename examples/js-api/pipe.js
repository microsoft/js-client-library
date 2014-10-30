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
 * usage: $ node pipe.js
 *
 * Streaming JSON parser to pull out all `artifact urls` from a DeployR response 
 * and prints them to stdout.
 *
 * dependencies: JSONStream
 *    - $ npm install JSONStream
 */

var JSONStream  = require('JSONStream'),    
    config      = require('../config'),
    credentials = config.credentials,
    deployr     = require('../../deployr').configure({ host: config.endpoint });

deployr.script('/testuser/root/DeployR - Hello World.R')
  .numeric('input_randomNum', 10)
  .pipe(JSONStream.parse('deployr.response.execution.artifacts.*.url'))  
  .pipe(JSONStream.stringify(false))
  .pipe(process.stdout);