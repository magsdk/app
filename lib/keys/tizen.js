/**
 * Global list of keys
 *
 * @license The MIT License (MIT)
 * @copyright Aleynikov Boris <aleynikov.boris@gmail.com>
 */

'use strict';

var keys = require('stb-keys');


// Redefine keys here
keys.back         = 10009;
keys.channelNext  = 427;
keys.channelPrev  = 428;
keys.ok           = 13;
keys.exit         = 27;
keys.volumeUp     = 447;
keys.volumeDown   = 448;
keys.f1           = 403;
keys.f2           = 404;
keys.f3           = 405;
keys.f4           = 406;
keys.refresh      = 116;
keys.frame        = 117;
keys.phone        = 119;
keys.set          = 120;
keys.tv           = 121;
keys.menu         = 10135;
keys.app          = 2076;
keys.rewind       = 412;
keys.forward      = 417;
keys.audio        = 71  + 'a';
keys.standby      = 74  + 'a';
keys.keyboard     = 76  + 'a';
keys.usbMounted   = 80  + 'a';
keys.usbUnmounted = 81  + 'a';
keys.playPause    = 10252;
keys.play         = 415;
keys.pause        = 19;
keys.stop         = 413;
keys.power        = 85  + 'a';
keys.record       = 87  + 'a';
keys.info         = 457;
keys.mute         = 192 + 'a';
keys.pageUp       = 10232;
keys.pageDown     = 10233;


// public
module.exports = keys;
