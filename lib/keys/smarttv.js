/**
 * Global list of keys
 *
 *
 * @author Zaporozhets Igor <i.zaporozhets@infomir.com>.
 */

'use strict';

var keys  = require('stb-keys'),
    tvKey = new window.top.Common.API.TVKeyValue();


// Redefine keys here
keys.back         = tvKey.KEY_RETURN;
keys.left         = tvKey.KEY_LEFT;
keys.right        = tvKey.KEY_RIGHT;
keys.up           = tvKey.KEY_UP;
keys.down         = tvKey.KEY_DOWN;
keys.channelNext  = tvKey.KEY_PANEL_CH_UP;
keys.channelPrev  = tvKey.KEY_PANEL_CH_DOWN;
keys.enter        = tvKey.KEY_ENTER;
keys.ok           = tvKey.KEY_ENTER;
keys.exit         = tvKey.KEY_EXIT;
keys.volumeUp     = tvKey.KEY_PANEL_VOL_UP;
keys.volumeDown   = tvKey.KEY_PANEL_VOL_DOWN;
keys.f1           = tvKey.KEY_RED;
keys.f2           = tvKey.KEY_GREEN;
keys.f3           = tvKey.KEY_YELLOW;
keys.f4           = tvKey.KEY_BLUE;

keys.playPause    = tvKey.KEY_PLAY;
keys.play         = tvKey.KEY_PLAY;
keys.pause        = tvKey.KEY_PAUSE;
keys.stop         = tvKey.KEY_STOP;
keys.menu         = tvKey.KEY_TOOLS;
keys.app          = tvKey.KEY_GUIDE;

keys.digit0       = tvKey.KEY_0;
keys.digit1       = tvKey.KEY_1;
keys.digit2       = tvKey.KEY_2;
keys.digit3       = tvKey.KEY_3;
keys.digit4       = tvKey.KEY_4;
keys.digit5       = tvKey.KEY_5;
keys.digit6       = tvKey.KEY_6;
keys.digit7       = tvKey.KEY_7;
keys.digit8       = tvKey.KEY_8;
keys.digit9       = tvKey.KEY_9;


// public
module.exports = keys;
