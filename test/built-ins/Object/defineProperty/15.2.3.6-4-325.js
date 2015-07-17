// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-325
description: >
    Object.defineProperty - 'O' is an Arguments object, 'name' is own
    property of [[ParameterMap]] of 'O', test 'name' is deleted if
    'name' is configurable and 'desc' is accessor descriptor (10.6
    [[DefineOwnProperty]] step 5.a.i)
includes: [runTestCase.js]
---*/

function testcase() {
        var argObj = (function () { return arguments; })(1, 2, 3);
        var accessed = false;

        Object.defineProperty(argObj, 0, {
            get: function () {
                accessed = true;
                return 12;
            }
        });

        return argObj[0] === 12 && accessed;
    }
runTestCase(testcase);
