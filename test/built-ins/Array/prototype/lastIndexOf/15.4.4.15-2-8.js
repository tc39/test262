// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-2-8
description: >
    Array.prototype.lastIndexOf - 'length' is own accessor property
    that overrides an inherited data property on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var proto = { length: 0 };

        var Con = function () {};
        Con.prototype = proto;

        var child = new Con();
        child[1] = eval;

        Object.defineProperty(child, "length", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        return Array.prototype.lastIndexOf.call(child, eval) === 1;
    }
runTestCase(testcase);
