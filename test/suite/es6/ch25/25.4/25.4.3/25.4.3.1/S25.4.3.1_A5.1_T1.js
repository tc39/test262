// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise executor has predictable environment
    'this' should be global object in sloppy mode,
    undefined in strict mode
author: Sam Mikes
description: Promise executor gets default handling for 'this'
---*/

var expectedThis;

(function () { expectedThis = this; }());

var p = new Promise(function (resolve) {
    if (this !== expectedThis) {
        $ERROR("'this' must be same as for function called without explicit this, got " + this);
    }

    resolve();
}).then($DONE, $DONE);
