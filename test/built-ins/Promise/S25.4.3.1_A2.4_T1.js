// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise throws TypeError when 'this' is rejected promise
author: Sam Mikes
description: Promise.call(rejected Promise) throws TypeError
---*/

var p = new Promise(function(resolve, reject) { reject(1) });

p.catch(function () {
    Promise.call(p, function () {});
}).then(function () {
    $ERROR("Unexpected resolution - expected TypeError");
}, function (err) {
    if (!(err instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + err);
    }
}).then($DONE, $DONE);
