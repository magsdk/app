/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app = require('spa-app/lib/core'),
    //metrics = require('app:metrics'),
    linkCSS;


//window.core = window.parent.getCoreInstance(window, app);


linkCSS = document.createElement('link');
linkCSS.rel  = 'stylesheet';
linkCSS.href = window.core.theme.path + app.metrics.height + '.css' + (DEVELOP ? '?' + Date.now() : '');
document.head.appendChild(linkCSS);

if ( core.theme.vars && core.theme.vars.bodyBgFilename ) {
    if ( document.body ) {
        document.body.style.backgroundImage = 'url("' + core.theme.vars.bodyBgFilename.value + '")';
    } else {
        window.addEventListener('DOMContentLoaded', function () {
            document.body.style.backgroundImage = 'url("' + core.theme.vars.bodyBgFilename.value + '")';
        });
    }
}


// public
module.exports = linkCSS;
