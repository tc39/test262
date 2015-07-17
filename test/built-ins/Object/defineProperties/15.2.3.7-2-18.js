// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-2-18
description: >
    Object.defineProperties - argument 'Properties' is the global
    object
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        var obj = {};
        var result = false;

        try {
            Object.defineProperty(fnGlobalObject(), "prop", {
                get: function () {
                    result = (this === fnGlobalObject());
                    return {};
                },
                enumerable: true,
				configurable:true
            });

            Object.defineProperties(obj, fnGlobalObject());
            return result;
        } catch (e) {
            return (e instanceof TypeError);
        } finally {
            delete fnGlobalObject().prop;
        }
    }
runTestCase(testcase);
