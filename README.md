JavaScript Client Library for DeployR 
=====================================

The JavaScript client library is a light-weight fluent API used to communicate 
with DeployR from both the browser and Node.js environments. It is crafted for 
flexibility, readability, and a low learning curve.

Links
-----

  * [Download](http://deployr.revolutionanalytics.com/docanddown/#clientlib)
  * [User Guide Documentation](http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc)
  * [API Documentation](http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc/api/)
  * [Installation](http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc/#install)  
  * [Simple examples](#examples)
  * [Gulp, for building](#building)
  * [Tests](#tests)
  * [License](#license)

Environments
============

We recommend you [download and install](http://nodejs.org/download/) Node.js.
It is __not__ a requirement for the browser however using the JavaScript client 
library from within a server or from the command line in addition to the browser
can be powerful!

Browser
-------

If your environment is the browser the JavaScript client library can be found
here:

```
./deployr/browser/deployr.js
./deployr/browser/deployr.min.js
```

Node.js
-------

If your environment is Node then the entire root ```./deployr/``` directory 
represents the JavaScript client library as it uses the same source for both 
environments.

Installation
============

Browser
-------

Using the browser version:

```bash
./deployr/browser/deployr.js
./deployr/browser/deployr.min.js
``` 

Include either one on your page in the `<script>` tag:

```html
<!-- Latest compiled raw JavaScript variation -->
<script src="./browser/deployr.js"></script>

Or

<!-- Latest compiled minified JavaScript variation -->
<script src="./browser/deployr.min.js"></script>
```

Node.js
-------

1. [Download and install](http://nodejs.org/download/) Node.js, which includes 
npm. npm, which stands for _node packaged modules_, is a way to manage 
development dependencies through Node.js.

2. ```$npm install deployr```

3. `require` the directory:

```
var deployr = require('deployr');
```

Examples
========

The DeployR JavaScript client library ships with a set of small examples under 
the __./deployr/examples__ directory that run in both the browser and Node.js 
environments. The intention of the examples are to demonstrate the syntax and 
core areas of the JavaScript API. They are not intended to be a tutorial on how 
to write web applications.

We encourage you to start here and customise these examples and adapt them to 
suit your needs as you explore the API.

- __./examples/js-api:__ Introduces the core areas of the JavaScript API.

- __./examples/tutorial:__ Introduces the top-level R analytics services exposed 
on the DeployR API.

Running
-------

__Browser:__

- Copy the _.html_ files under `./examples` to your webserver
- Copy the `./examples/config.json` file under `./examples` to your webserver
- Set the DeployR endpoint and basic authentication credentials in 
`./examples/config.json`

```
{
	"endpoint": "http://dhost:port",
	"credentials": {
	   "username": "testuser",
	   "password": "changeme"
	}
}	
```

Alternatively, you can run the examples as is without moving them via the 
embedded web server if you have Node.js installed:

`$ npm install --global gulp`

`$ cd ./deployr`

`$ npm install`

`$gulp start`

Open your browser to _http://localhost:3000/examples/_ and select an example 
.html file to run.

__Node.js:__

Set the DeployR endpoint and basic authentication credentials in 
`./examples/config.json`

```
{
	"endpoint": "http://dhost:port",
	"credentials": {
	   "username": "testuser",
	   "password": "changeme"
	}
}

```

From the command line run one of the Node.js examples:

```$ node ./examples/PATH_TO_EXAMPLE_FILE.js```

Building
========

This section only pertains to the _Browser_ environment.  

Our dev and release builds are handled by [gulp.js](http://gulpjs.com/).

Installation
------------

First you need to install `gulp` (`$ sudo npm install --global gulp`)

After cloning you can simply do an NPM install.

`$ npm install`

This will install the development tools needed to build locally.

Shortcuts
---------

 * `gulp` Runs a build.
 * `gulp start` Runs a build and starts a local webserver with LiveReload 
 (port __8080__) rebuilding on file changes.

Destination
-----------
The browser build destination is located in the __./browser__ directory.

Tests
=====

Coming soon...

License
=======

Copyright (C) 2010-2014 by Revolution Analytics Inc.

This program is licensed to you under the terms of Version 2.0 of the
Apache License. This program is distributed WITHOUT
ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
details.
