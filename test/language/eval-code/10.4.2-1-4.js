// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.2-1-4
description: >
    Indirect call to eval has context set to global context (with
    block)
flags: [noStrict]
includes: [runTestCase.js]
---*/

var __10_4_2_1_4 = "str";
function testcase() {
            var o = new Object();
            o.__10_4_2_1_4 = "str2";
            var _eval = eval;
            var __10_4_2_1_4 = "str1";
            with (o) {
                if (_eval("\'str\' === __10_4_2_1_4") === true &&  // indirect eval
                    eval("\'str2\' === __10_4_2_1_4") === true) {  // direct eval
                    return true;
                }
            }
            return false;
    }
runTestCase(testcase);
