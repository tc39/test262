// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
es5id: 11.4.1-4.a-8
description: delete operator returns true for built-in objects (JSON)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try {
      var o = JSON;
      var d = delete JSON;  
      if (d === true) {	    
        return true;
      }
  } finally {
    JSON = o;
  }
 }
runTestCase(testcase);
