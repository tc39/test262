// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-13-1
description: Accessing caller property of Arguments object is allowed
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try 
  {
    arguments.caller;
    return true;
  }
  catch (e) {
  }
 }
runTestCase(testcase);
