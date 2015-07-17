// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-41
description: >
    String.prototype.trim - 'this' is an object which has an own
    toString and valueOf method.
includes: [runTestCase.js]
---*/

function testcase() {
        var toStringAccessed = false;
        var valueOfAccessed = false;
        var obj = {
            toString: function () {
                toStringAccessed = true;
                return "abc";
            },
            valueOf: function () {
                valueOfAccessed = true;
                return "cef";
            }
        };
        return (String.prototype.trim.call(obj) === "abc") && !valueOfAccessed && toStringAccessed;
    }
runTestCase(testcase);
