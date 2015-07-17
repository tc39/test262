// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-4-1
description: >
    JSON.stringify ignores replacer aruguments that are not functions
    or arrays..
includes: [runTestCase.js]
---*/

function testcase() {
  try {
     return JSON.stringify([42],{})=== '[42]';
     }
   catch (e) {return  false}
  }
runTestCase(testcase);
