/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

var app = require('./lib/main');

app.defaultEvents.contextmenu = function ( event ) {
    event.preventDefault();
};

module.exports = app;
