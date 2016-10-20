Application core
================

[![build status](https://img.shields.io/travis/magsdk/app.svg?style=flat-square)](https://travis-ci.org/magsdk/app)
[![npm version](https://img.shields.io/npm/v/mag-app.svg?style=flat-square)](https://www.npmjs.com/package/mag-app)
[![dependencies status](https://img.shields.io/david/magsdk/app.svg?style=flat-square)](https://david-dm.org/magsdk/app)
[![devDependencies status](https://img.shields.io/david/dev/magsdk/app.svg?style=flat-square)](https://david-dm.org/magsdk/app?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/magsdk)


Main module to create MAG Core application.
Extends SPA [app](https://github.com/spasdk/app) module.
Adds MAG-specific logic (handle screen resolution, STB events, work inside iframe, etc.).


## Installation ##

```bash
npm install mag-app
```


## Usage ##

Add the instance to the scope:

```js
var app = require('mag-app');
```

At run-time adds the following attributes:

 Name               | Description
--------------------|-------------


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/magsdk/app/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`mag-app` is released under the [MIT License](license.md).
