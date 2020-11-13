/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app = require('spa-app/lib/core'),
    //metrics = require('app:metrics'),
    $linkCSS = document.createElement('link'),
    $style, background;


//window.core = window.parent.getCoreInstance(window, app);

$linkCSS.rel  = 'stylesheet';
$linkCSS.href = window.core.theme.path + app.metrics.height + '.css' + (DEVELOP ? '?' + Date.now() : '');
document.head.appendChild($linkCSS);

if ( core.theme.vars && core.theme.vars.bodyBgFilename ) {
    // TODO: research this case
    background = core.theme.vars.bodyBgFilename.value;

    if ( background.indexOf('/') === -1 ) {
        // only filename, example 'bg.png', so relative path by filename not works
        background = window.core.theme.path + 'img/' + app.metrics.height + '/' + background;
    }

    $style = document.createElement('style');
    $style.innerText = 'body, .theme-page-background { background: url("' + background + '"); }';
    document.head.appendChild($style);
}


// public
module.exports = $linkCSS;
