// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-13-s
description: >
    Strict Mode - SyntaxError isn't thrown when WithStatement body is
    in strict mode code
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        with ({}) {
            "use strict";
        }
        return true;
    }
runTestCase(testcase);
