// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g2-3
description: A JSONString may not be delimited by Uncode escaped quotes
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        if (JSON.parse("\\u0022abc\\u0022") ==='abc') return false;
       }
     catch (e) {
        return true;
        }
  }
runTestCase(testcase);
