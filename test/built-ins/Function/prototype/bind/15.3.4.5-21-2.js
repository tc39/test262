// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-21-2
description: >
    Function.prototype.bind - [[Get]] attribute of 'arguments'
    property in  'F' is thrower
includes: [runTestCase.js]
---*/

function testcase() {

        function foo() { }
        var obj = foo.bind({});
        try {
            return obj.arguments && false;
        } catch (ex) {
            return (ex instanceof TypeError);
        }
    }
runTestCase(testcase);
