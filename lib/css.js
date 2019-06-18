/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app = require('spa-app/lib/core'),
    //metrics = require('app:metrics'),
    $linkCSS = document.createElement('link'),
    $style;


//window.core = window.parent.getCoreInstance(window, app);


$linkCSS = document.createElement('link');
$linkCSS.rel  = 'stylesheet';
$linkCSS.href = window.core.theme.path + app.metrics.height + '.css' + (DEVELOP ? '?' + Date.now() : '');
document.head.appendChild($linkCSS);

if ( core.theme.vars && core.theme.vars.bodyBgFilename ) {
    $style = document.createElement('style');
    $style.innerText = 'body, .theme-page-background { background: url("' + core.theme.vars.bodyBgFilename.value + '"); }';
    document.head.appendChild($style);
}


// public
module.exports = $linkCSS;
