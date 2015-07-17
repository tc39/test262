// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-1-2
description: String.prototype.trim throws TypeError when string is null
includes: [runTestCase.js]
---*/

function testcase() {
  try
  {
    String.prototype.trim.call(null);  
    return false;
  }
  catch(e)
  {
    return e instanceof TypeError;
  }
 }
runTestCase(testcase);
