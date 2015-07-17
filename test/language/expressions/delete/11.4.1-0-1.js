// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
es5id: 11.4.1-0-1
description: delete operator as UnaryExpression
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  var x = 1;
  var y = 2;
  var z = 3;
  
  if( (!delete x || delete y) &&
      delete delete z)
  {
    return true;
  }  
 }
runTestCase(testcase);
