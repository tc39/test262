// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.2-1-3
description: >
    Indirect call to eval has context set to global context (catch
    block)
includes: [runTestCase.js]
---*/

var __10_4_2_1_3 = "str";
function testcase() {
            var _eval = eval;
            var __10_4_2_1_3 = "str1";
            try {
                throw "error";
            }
            catch (e) {
                var __10_4_2_1_3 = "str2";
                if (_eval("\'str\' === __10_4_2_1_3") === true &&  // indirect eval
                    eval("\'str2\' === __10_4_2_1_3") === true) {  // direct eval
                    return true;
                } else {
                    return false;
                }
            }
    }
runTestCase(testcase);
