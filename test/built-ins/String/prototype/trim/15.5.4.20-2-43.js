// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-43
description: >
    String.prototype.trim - 'this' is an object with an own valueOf
    and inherited toString methods with hint string, verify inherited
    toString method will be called first
includes: [runTestCase.js]
---*/

function testcase() {

        var toStringAccessed = false;
        var valueOfAccessed = false;

        var proto = {
            toString: function () {
                toStringAccessed = true;
                return "abc";
            }
        };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.valueOf = function () {
            valueOfAccessed = true;
            return "efg";
        };
        return (String.prototype.trim.call(child) === "abc") && toStringAccessed && !valueOfAccessed;
    }
runTestCase(testcase);
