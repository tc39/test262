// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3_4-1-2
description: JSON.stringify a circular object throws a TypeError
includes: [runTestCase.js]
---*/

function testcase() {
  var obj = {};
  obj.prop = obj;
  try {
     JSON.stringify(obj);
     return false;  // should not reach here
     }
   catch (e) {return e.name==='TypeError'}
  }
runTestCase(testcase);
