/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app    = require('spa-app/lib/core'),
    events = require('spa-app/lib/events'),
    keys   = require('stb-keys'),

    originalKeydownHandler = events.keydown;


// get instance
window.core = window.parent.getCoreInstance(window, app);

// shims
require('stb-shim-classlist');

// apply geometry
require('stb-app/lib/metrics');

// load sdk css
require('stb-app/lib/css')('sdk');

// load theme css
require('./css');

// load app css
require('stb-app/lib/css')('app');


switch ( PLATFORM ) {
    case 'TIZEN':
        app.platform = 'tizen';
        require('./keys/tizen');
        break;
    case 'WEBOS':
        app.platform = 'webos';
        require('./keys/webos');
        break;
    case 'SMARTTV':
        app.platform = 'smarttv';
        require('./keys/smarttv');
        break;
    default:
        app.platform = 'mag';
        break;
}


if ( TARGET === 'android-stb' || TARGET === 'android-app' ) {
    keys.play = 'MediaPlay';
    keys.pause = 'MediaPause';

    events.keydown = function ( event ) {
        if ( event.key === keys.play ) {
            event = {keyCode: keys.play, type: 'keydown'};
        } else if ( event.key === keys.pause ) {
            event = {keyCode: keys.pause, type: 'keydown'};
        }

        originalKeydownHandler(event);
    };
}


/**
 * Show app.
 */
app.ready = function () {
    window.core.call('app:ready');
};


/**
 * Exit from app.
 * Destroy all application instance.
 * If callback function provided, and callback returns boolean 'true', application will stay alive.
 *
 * @fires module:/stb/app#exit
 */
app.exit = function () {
    if ( app.events.exit ) {
        app.emit('exit');
    }

    core.call('exit');
};


events.load = function ( event ) {
    document.body.setAttribute('platform', app.platform);
    core.device && document.body.setAttribute('device', core.device.model);

    if ( core.ready ) {
        if ( app.events.load ) {
            // notify listeners
            app.emit('load', {});
        }
    } else {
        core.once('load', function () {
            //core.ready = true;
            if ( app.events[event.type] ) {
                // notify listeners
                app.emit(event.type, event);
            }
        });
    }
};


// activate development mechanisms and tools
if ( DEVELOP ) {
    //require('stb-develop');
    require('./develop/main');
} else {
    // disable context menu
    events.contextmenu = function ( event ) {
        event.preventDefault();
    };
}


//apply DOM events
Object.keys(events).forEach(function ( name ) {
    window.addEventListener(name, events[name]);
});


// new way of string handling
// all strings are in UTF-16
// since stbapp 2.18
// if ( window.gSTB && gSTB.SetNativeStringMode ) {
//     /* eslint new-cap: 0 */
//     gSTB.SetNativeStringMode(true);
// }

// public
module.exports = app;
