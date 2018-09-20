/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app    = require('spa-app/lib/core'),
    events = require('spa-app/lib/events');


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

/**
 * Specify platform name
 *
 * @type {string}
 */
app.platform = 'mag';

/**
 * Show app.
 */
app.ready = function () {
    // if ( this.events['show'] ) {
    //     this.emit('show');
    // }
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
    if ( app.events['exit'] ) {
        app.emit('exit');
    }

    core.call('exit');
};


events.load = function ( event ) {
    //window.core = window.parent.getCoreInstanse(window, app);
    document.body.setAttribute('platform', app.platform);

    if ( core.ready ) {
        if ( app.events['load'] ) {
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
