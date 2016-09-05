/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var app    = require('./lib/core'),
    events = require('spa-app/lib/events');

app.gettext = require('spa-gettext');


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
 *
 * @param [callback] provide callback if u want to handle exit result, or cancel it
 */
app.exit = function ( callback ) {
    var ModalMessage = require('magsdk/component-modal'),
        LayoutList   = require('magsdk/component-layout-list'),
        rc           = require('stbsdk/rc'),
        previousFocus = app.activePage.activeComponent,
        exitModal;

    app.activePage.add(exitModal = new ModalMessage({
        title: _('Exit'),
        events:{
            show: function () {
                this.children[0].focus();
            },
            hide: function () {
                previousFocus.focus();
            }
        },
        children:[
            new LayoutList({
                size:2,
                focusIndex:0,
                data:[
                    {
                        items: [
                            {
                                value: _('Exit')
                            }
                        ],
                        click: function () {
                            if ( typeof callback === 'function' ) {
                                if ( callback(true) ) {
                                    exitModal.hide();
                                    exitModal.remove();
                                    return;
                                }
                            }
                            if ( app.events['exit'] ) {
                                app.emit('exit');
                            }

                            exitModal.hide();
                            exitModal.remove();
                            core.call('exit');
                        }
                    },
                    {
                        items: [
                            {
                                value: _('Cancel')
                            }
                        ],
                        click: function () {
                            if ( typeof callback === 'function' ) {
                                callback(false);
                            }
                            exitModal.hide();
                            exitModal.remove();
                        }
                    }
                ],
                events: {
                    keydown: function ( event ) {
                        LayoutList.prototype.defaultEvents.keydown.call(this, event);
                        if ( event.keyCode === rc.codes.back ) {
                            event.stop = true;
                            if ( typeof callback === 'function' ) {
                                callback(false);
                            }
                            exitModal.hide();
                            exitModal.remove();
                        }
                    }
                }
            })
        ]
    }));

    exitModal.show();
    exitModal.focus();
};


events.load = function ( event ) {
    window.core = window.parent.getCoreInstanse(window, app);

    if ( core.ready ) {
        if ( app.events['load'] ) {
            // notify listeners
            app.emit('load', {});
        }
    } else {
        core.once('load', function () {
            core.ready = true;
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
    require('./lib/develop/main');
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
