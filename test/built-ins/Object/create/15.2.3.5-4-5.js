// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-5
description: >
    Object.create - argument 'Properties' is a Function object
    (15.2.3.7 step 2)
includes: [runTestCase.js]
---*/

function testcase() {

        var props = function () { };
        var result = false;

        Object.defineProperty(props, "prop", {
            get: function () {
                result = this instanceof Function;
                return {};
            },
            enumerable: true
        });
        Object.create({}, props);
        return result;
    }
runTestCase(testcase);
