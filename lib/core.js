/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app = require('stb-app/lib/core'),
    metrics = require('app:metrics'),
    linkThemeCSS;

// apply screen size, position and margins
//setScreen(metrics[app.query.screenHeight] || metrics[screen.height] || metrics[720]);

// app.metrics = metrics[app.query.screenHeight] || metrics[screen.height] || metrics[720];
//
// // calculate and extend
// app.metrics.availHeight = app.metrics.height - (app.metrics.availTop  + app.metrics.availBottom);
// app.metrics.availWidth  = app.metrics.width  - (app.metrics.availLeft + app.metrics.availRight);
//
// // load CSS file base on resolution
// linkThemeCSS = document.createElement('link');
// linkThemeCSS.rel  = 'stylesheet';
// linkThemeCSS.href = 'css/' + (DEVELOP ? 'develop.' : 'release.') + app.metrics.height + '.css?' + +new Date();
// document.head.appendChild(linkThemeCSS);

linkThemeCSS = document.createElement('link');
linkThemeCSS.rel  = 'stylesheet';

if ( DEVELOP ) {
    linkThemeCSS.href = window.core.theme.path + metrics.height + '.css?' + +new Date();
} else {
    linkThemeCSS.href = window.core.theme.path + metrics.height + '.css';
}

document.head.appendChild(linkThemeCSS);

// public
module.exports = app;
