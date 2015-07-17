// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g2-2
description: A JSONString may not be delimited by single quotes
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        if (JSON.parse("'abc'") ==='abc') return false;
       }
     catch (e) {
        return true;
        }
  }
runTestCase(testcase);
