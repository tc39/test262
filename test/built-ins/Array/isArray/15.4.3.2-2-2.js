// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-2-2
description: >
    Array.isArray applied to an object with Array.prototype as the
    prototype
includes: [runTestCase.js]
---*/

function testcase() {

        var proto = Array.prototype;
        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();

        return !Array.isArray(child);
    }
runTestCase(testcase);
