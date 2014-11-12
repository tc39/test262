// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise reaction jobs have predictable environment
author: Sam Mikes
description: argument thrown through "Thrower"
---*/

var obj = {};

var p = Promise.reject(obj).then(/*Identity, Thrower*/)
        .then(function () {
            $ERROR("Unexpected fulfillment - promise should reject.");
        }, function (arg) {
            if (arg !== obj) {
                $ERROR("Expected reject reason to be obj, actually " + arg);
            }
        }).then($DONE, $DONE);
