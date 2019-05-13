/**
 * Global list of keys
 *
 *
 * @author Zaporozhets Igor <i.zaporozhets@infomir.com>.
 */

'use strict';

var keys = require('stb-keys');


// in emulator: n/a
keys.back         = 461;
// Home, in emulator: n/a
keys.exit         = 1536;

// colours
keys.f1           = 403;
keys.f2           = 404;
keys.f3           = 405;
keys.f4           = 406;

// player
keys.play         = 415;
keys.pause        = 19;
keys.stop         = 413;
keys.rewind       = 412;
keys.forward      = 417;
keys.channelNext  = 33;
keys.channelPrev  = 34;

// key codes for this section have been taken from real remote control and not recommended for use
keys.info         = 457;
keys.ad           = 1028;
keys.qView        = 1007;
keys.tOpt         = 1004;
keys.text         = 459;
keys.guide        = 458;
keys.list         = 1056;
keys.TvRad        = 1028;
keys.subtitle     = 460;
keys.liveMenu     = 1003;

// on smart rc pageUp=33, pageDown=34, on classic rc ChannelNext=33, ChannelPrev=34. This can result in strange
// situation with unpredicted behavior. So old key codes should be hidden.
keys.pageDown     = -1;
keys.pageUp       = -1;


// public
module.exports = keys;
