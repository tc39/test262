// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-23-s
description: >
    StrictMode - enumerating over a function object looking for
    'caller' fails outside of the function
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        function foo () {"use strict";}
        for (var tempIndex in foo) {
            if (tempIndex === "caller") {
                return false;
            }
        }
        return true;
}
runTestCase(testcase);
