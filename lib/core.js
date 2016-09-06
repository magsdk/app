/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app = require('stb-app/lib/core'),
    metrics = require('app:metrics'),
    doc = document,
    head = doc.head || doc.getElementsByTagName('head')[0],
    linkCSS;


window.core = window.parent.getCoreInstance(window, app);

linkCSS = doc.createElement('link');
linkCSS.rel  = 'stylesheet';
linkCSS.href = window.core.theme.path + app.metrics.height + '.css?' + (DEVELOP ? '?' + Date.now() : '');

// if custom link element is absent behaves as appendChild()
head.insertBefore(linkCSS, head.lastElementChild);

// public
module.exports = app;
