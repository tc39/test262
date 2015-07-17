// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.8-1
description: >
    The break Statement - a break statement without an identifier may
    have a LineTerminator before the semi-colon
includes: [runTestCase.js]
---*/

function testcase() {
        var sum = 0;
        for (var i = 1; i <= 10; i++) {
            if (i === 6) {
                break
                ;
            }
            sum += i;
        }
        return sum === 15;
    }
runTestCase(testcase);
