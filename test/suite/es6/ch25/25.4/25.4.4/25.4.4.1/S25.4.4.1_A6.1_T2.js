// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all with 0-element array
    should accept an empty array
author: Sam Mikes
description: Promise.all([]) returns a promise for an empty array
---*/

var p = Promise.all([]);

p.then(function (result) {
    if (!(result instanceof Array)) {
        $ERROR("Expected Promise.all([]) to be Array, actually " + result);
    }
    if (result.length !== 0) {
        $ERROR("Expected Promise.all([]) to be empty Array, actually " + result);
    }
}).then($DONE, $DONE);
