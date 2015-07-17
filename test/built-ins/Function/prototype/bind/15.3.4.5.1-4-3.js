// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5.1-4-3
description: >
    [[Call]] - the provided arguments is used as the latter part of
    arguments of calling the [[Call]] internal method of 'F''s
    [[TargetFunction]] when 'F' is called
includes: [runTestCase.js]
---*/

function testcase() {
        var func = function (x, y, z) {
            return z;
        };

        var newFunc = Function.prototype.bind.call(func, {}, "a", "b");

        return newFunc("c") === "c";
    }
runTestCase(testcase);
