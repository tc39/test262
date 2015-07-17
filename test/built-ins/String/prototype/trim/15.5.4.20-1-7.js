// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-1-7
description: String.prototype.trim works for a primitive string
includes: [runTestCase.js]
---*/

function testcase() {
  try
  {
    if(String.prototype.trim.call("abc") === "abc")  
      return true;
  }
  catch(e)
  {
  }
 }
runTestCase(testcase);
