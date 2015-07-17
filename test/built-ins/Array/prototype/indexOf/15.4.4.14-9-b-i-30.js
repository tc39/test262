// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-30
description: >
    Array.prototype.indexOf - terminates iteration on unhandled
    exception on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var arr = [];

        Object.defineProperty(arr, "0", {
            get: function () {
                throw new TypeError();
            },
            configurable: true
        });

        Object.defineProperty(arr, "1", {
            get: function () {
                accessed = true;
                return true;
            },
            configurable: true
        });

        try {
            arr.indexOf(true);
            return false;
        } catch (e) {
            return (e instanceof TypeError) && !accessed;
        }
    }
runTestCase(testcase);
