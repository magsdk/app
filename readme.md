Application core
================

[![build status](https://img.shields.io/travis/magsdk/app.svg?style=flat-square)](https://travis-ci.org/magsdk/app)
[![npm version](https://img.shields.io/npm/v/mag-app.svg?style=flat-square)](https://www.npmjs.com/package/mag-app)
[![dependencies status](https://img.shields.io/david/magsdk/app.svg?style=flat-square)](https://david-dm.org/magsdk/app)
[![devDependencies status](https://img.shields.io/david/dev/magsdk/app.svg?style=flat-square)](https://david-dm.org/magsdk/app?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/magsdk)


Main module to create MAG Core application.
Extends [spa-app](https://github.com/spasdk/app) and [stb-app](https://github.com/stbsdk/app) modules.
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

To change application state to ready:

```js
app.ready();
```

To exit from application:

```js
app.exit();
```

Get device platform name:

```js
console.log(app.platform);
```

More examples and information are available in [spa-app](https://github.com/spasdk/app) and [stb-app](https://github.com/stbsdk/app) modules.

## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/magsdk/app/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`mag-app` is released under the [MIT License](license.md).
