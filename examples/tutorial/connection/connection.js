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
 * usage: $ node connection.js
 * 
 * 1. Determine DeployR server endpoint.
 * ---------------------------------------------------------------------------- 
 */ 

var deployr = require('../../../deployr'),
    config  = require('../../config');

/*
 * Run example.
 */
console.log('Connect: using endpoint=' + config.endpoint);
deployr.configure( { host: config.endpoint } );