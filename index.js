/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app    = require('./lib/core'),
    events = require('stb-app/lib/events');


// new way of string handling
// all strings are in UTF-16
// since stbapp 2.18
if ( window.gSTB && gSTB.SetNativeStringMode ) {
    /* eslint new-cap: 0 */
    gSTB.SetNativeStringMode(true);
}


// activate development mechanisms and tools
if ( DEVELOP ) {
    //require('stb-develop');
    require('./lib/develop/main');
}


// apply DOM events
// Object.keys(events).forEach(function ( name ) {
//     window.addEventListener(name, events[name]);
// });


// public
module.exports = app;
