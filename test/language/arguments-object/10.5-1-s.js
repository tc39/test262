// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.5-1-s
description: Strict Mode - arguments object is immutable
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            (function fun() {
                eval("arguments = 10");
            })(30);
            return false;
        } catch (e) {
            return (e instanceof SyntaxError);
        }
    }
runTestCase(testcase);
