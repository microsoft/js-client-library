JavaScript Client Library for DeployR 
=====================================

The JavaScript client library is a light-weight fluent API used to communicate 
with DeployR from both the browser and Node.js environments. It is crafted for 
flexibility, readability, and a low learning curve.

#### Easy anonymous R script execution:

```js
deployr.script('/sean/root/reducer.R')
  .end(function(res) {
     var artifacts = res.get('artifacts');
  });
```

#### Easy authenticated R code execution:

```js
var r = 'x<-rnorm(10)';

ruser.code(r)
  .end(function(res) {
     var out = res.get('console');
  });
```

#### Easy I/O to and from R:

```js
deployr.script('/sean/root/shift.R')
  .character('name', 'DeployR')
  .numeric('x', 5)
  .logical('up', true)
  .routput('roboteer_dataframe')
  .end(function(res) {
     var objs = res.workspace('roboteer_dataframe');
  });
```

And much more...

Links
-----

  * [Download](#downloading)
  * [User Guide Documentation](http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc)
  * [API Documentation](http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc/api/)
  * [Using](http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc/#install)  
  * [Simple examples](#examples)
  * [Gulp, for building](#building)
  * [Tests](#tests)
  * [License](#license)

Downloading
============

There are a few diffrent was to obtaining the library depending on your 
environment and intended usage:

- `$ npm install deployr` dependent on [Node.js](http://nodejs.org/download/)
- `$ git clone https://github.com/deployr/js-client-library.git`
- [Download Zip](https://github.com/deployr/js-client-library/archive/master.zip)
- Download specific [release](https://github.com/deployr/js-client-library/releases)

Environments
============

- Browser and Node.js

We recommend you [download and install](http://nodejs.org/download/) Node.js.
It is __not__ a requirement for the browser however using the JavaScript client 
library from within a server or from the command line in addition to the browser
can be powerful!

### Browser

If your environment is the browser the JavaScript client library can be found
here:

```
./deployr/browser/deployr.js
./deployr/browser/deployr.min.js
```

### Node.js

If your environment is Node then the entire root ```./deployr/``` directory 
represents the JavaScript client library as it uses the same source for both 
environments.

Installing
==========

### Browser

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

### Node.js

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

### Running

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

- Open your browser and select an example `.html` file to run. All examples 
simply print to stdout viewable from your browser debug console.

Alternatively, you can run the examples as is without moving them via the 
embedded web server if you have [Node.js](http://nodejs.org/download/) installed:

`$ npm install deployr`

`$ cd ./deployr`

`$ npm install`

`$ npm start`

Open your browser to _http://localhost:8080_ and select a example 
`.html` file to run. All examples simply print to stdout viewable from your 
browser debug console.

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

### Installation

1. [Download and install](http://nodejs.org/download/) Node.js
2. `$ npm install deployr`
3. `$ cd ./deployr`
4. `$ npm install` This will install the development tools needed to build locally.

### Targets

 * `$ npm run build` - Runs a build.
 * `$ npm start` - Runs a build and starts a local webserver with LiveReload 
   on `http://localhost:8080` rebuilding on file changes.

### Destination
The browser build destination is located in the __./browser__ directory.

Tests
=====

Coming soon...

License
=======

Copyright (C) 2010-2015 by Revolution Analytics Inc.

This program is licensed to you under the terms of Version 2.0 of the
Apache License. This program is distributed WITHOUT
ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
details.
