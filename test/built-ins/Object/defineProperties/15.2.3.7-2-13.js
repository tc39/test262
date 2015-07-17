// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-2-13
description: Object.defineProperties - argument 'Properties' is a RegExp object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var props = new RegExp();
        var result = false;
       
        Object.defineProperty(props, "prop", {
            get: function () {
                result = this instanceof RegExp;
                return {};
            },
            enumerable: true
        });

        Object.defineProperties(obj, props);
        return result;
    }
runTestCase(testcase);
