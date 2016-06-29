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
 * usage: $ node self-singed-cert.js
 *
 * Successfully executes on "https" using a self signed certificate on a 
 * DeployR server with SSL.
 */

var deployr = require('../../deployr'),
    config  = require('../config');

// ============================================================================
// Assuming endpoint of https://dhost:7401 and SSL enabled with a self signed 
// cert, set the DeployR server endpoint URL with the `allowSelfSignedSSLCert`
// set to `true`.
// ============================================================================

deployr.configure({ host: config.endpoint, allowSelfSignedSSLCert: true });

// should run successfully...
deployr.io('/r/server/info')
    .error(function(err) {
        console.log(err)
    })
    .end(function(res) {
        console.log('Successfully executed on "https" using a self signed ' +
            'certificate on DeployR server \n   "' + config.endpoint + '"');
    });
