// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-22
description: >
    Object.defineProperties - 'O' is the Arguments object which
    implements its own [[GetOwnProperty]] method to get 'P' (8.12.9
    step 1 )
includes: [runTestCase.js]
---*/

function testcase() {
        var arg = function () {
            return arguments;
        }();

        Object.defineProperty(arg, "prop", {
            value: 11,
            configurable: false
        });

        try {
            Object.defineProperties(arg, {
                prop: {
                    value: 12,
                    configurable: true
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
