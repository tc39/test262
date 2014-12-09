// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    PerformPromiseThen 
    Ref 25.4.5.3.1
author: Sam Mikes
description: Promise.prototype.then treats non-callable arg1, arg2 as undefined
---*/

var obj = {};
var p = Promise.resolve(obj);

p.then(3, 5)
    .then(function (arg) {
        if (arg !== obj) {
            $ERROR("Expected resolution object to be passed through, got " + arg);
        }
    }).then($DONE, $DONE);
