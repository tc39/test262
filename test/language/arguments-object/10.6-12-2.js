// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-12-2
description: arguments.callee has correct attributes
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  
  var desc = Object.getOwnPropertyDescriptor(arguments,"callee");
  if(desc.configurable === true &&
     desc.enumerable === false &&
     desc.writable === true &&
     desc.hasOwnProperty('get') == false &&
     desc.hasOwnProperty('put') == false)
    return true;   
 }
runTestCase(testcase);
