// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.find shouldn't throw a TypeError if
    IsCallable(predicate) is true
flags: [path]
includes: [runTestCase.js]
---*/

var callableValues = [
    function () {},
    Array.prototype.forEach,
    Proxy,
    new Proxy(function () {}, function () {}),
    x => x
];

function testcase() {
    for (var i = 0, len = callableValues.length; i < len; i++) {
        try {
            [].find(callableValues[i]);
        } catch (e) {
            if (e instanceof TypeError) {
                return false;
            }
        }
    }
    return true;
}

runTestCase(testcase);
