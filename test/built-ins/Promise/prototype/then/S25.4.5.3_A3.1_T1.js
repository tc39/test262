// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.prototype.then throws TypeError if Get(promise, "constructor") throws
    Ref 25.4.5.3 step 4 ReturnIfAbrupt(C)
es6id: S25.4.5.3_A3.1_T1
author: Sam Mikes
description: Promise.prototype.then throws if Get(promise, "constructor") throws
---*/

var p = Promise.resolve("foo");

Object.defineProperty(p, "constructor", {
    get: function () {
        throw new Error("abrupt completion");
    }
});

try {
    p.then(function () {
        $ERROR("Should never be called.");
    }, function () {
        $ERROR("Should never be called.");
    });
} catch (e) {
    if (!(e instanceof Error)) {
        $ERROR("Expected Error, got " + e);
    }
    if (e.message !== "abrupt completion") {
        $ERROR("Expected the Error we threw, got " + e);
    }
}
