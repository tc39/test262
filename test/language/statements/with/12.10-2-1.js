// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10-2-1
description: with - expression being Number
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
  var o = 2;
  var foo = 1;
  try
  {
    with (o) {
      foo = 42;
    }
  }
  catch(e)
  {
  }
  return true;
  
 }
runTestCase(testcase);
