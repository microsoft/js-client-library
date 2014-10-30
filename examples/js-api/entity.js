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
 * usage: $ node entiry.js
 *
 * Runs a DeployR basic auth using the `.entity('user')` helper method to 
 * filter-out and return only the Top Level `user` entity from the response.
 *
 * The supported `Top Level` entities are:
 *   - 'user'
 *   - 'project'
 *   - 'workspace'
 *   - 'execution'
 *   - 'directory'
 *   - 'repository',
 *   - 'packages' 
 */

var config      = require('../config'),
    credentials = config.credentials,
    deployr     = require('../../deployr').configure( { host: config.endpoint });

deployr.io('/r/user/login')
  .data(credentials)
  .entity('user')
  .error(function(err) {
    console.log(err);
  })
  .end(function(res) {
    // viewing the response will show only the `user` section returned and the
    // rest filtered out
  	console.log(res);
  })
  .io('/r/user/logout')
  .end();
