// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-13-b-1-s
description: >
    Accessing caller property of Arguments object throws TypeError in
    strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try 
  {
    arguments.caller;
  }
  catch (e) {
    if(e instanceof TypeError)
      return true;
  }
 }
runTestCase(testcase);
