// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-1-1
description: String.prototype.trim throws TypeError when string is undefined
includes: [runTestCase.js]
---*/

function testcase() {
  try
  {
    String.prototype.trim.call(undefined); 
    return false; 
  }
  catch(e)
  {
    return e instanceof TypeError;
  }
 }
runTestCase(testcase);
