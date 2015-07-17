// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-42
description: >
    String.prototype.trim - TypeError exception was thrown  when
    'this' is an object that both toString and valueOf wouldn't return
    primitive value.
includes: [runTestCase.js]
---*/

function testcase() {
        var toStringAccessed = false;
        var valueOfAccessed = false;
        var obj = {
            toString: function () {
                toStringAccessed = true;
                return {};
            },
            valueOf: function () {
                valueOfAccessed = true;
                return {};
            }
        };
        try {
            String.prototype.trim.call(obj);
            return false;
        } catch (e) {
            return valueOfAccessed && toStringAccessed && (e instanceof TypeError);
        }
    }
runTestCase(testcase);
