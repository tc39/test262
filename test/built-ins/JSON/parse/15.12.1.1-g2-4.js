// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g2-4
description: A JSONString must both begin and end with double quotes
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        if (JSON.parse('"ab'+"c'") ==='abc') return false;
       }
     catch (e) {
        return true;
        }
  }
runTestCase(testcase);
