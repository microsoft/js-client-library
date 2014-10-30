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
 * usage: $ node upload.js
 *
 * Simple file upload using `.attach(/path/to/file)` 
 * 
 */
var path        = require('path'),    
    config      = require('../config'),
    credentials = config.credentials,
    deployr     = require('../../deployr').configure( { host: config.endpoint });

var ruser = deployr.auth(credentials.username, credentials.password);

ruser.io('/r/repository/file/upload')
  .data({ filename: 'nodejs-satscores.csv', descr: 'Sample file upload.' })    
  .attach(path.join(__dirname, 'satscores.csv'))
  .error(function(err) {
     console.log(err);
  })
  .end(function(res, chain) {
    console.log(res);
  })
  .ensure(function() {
    ruser.release();
  });