// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-6-2
description: "'length' property of arguments object has correct attributes"
includes: [runTestCase.js]
---*/

function testcase() {
  
  var desc = Object.getOwnPropertyDescriptor(arguments,"length");
  if(desc.configurable === true &&
     desc.enumerable === false &&
     desc.writable === true )
    return true;
 }
runTestCase(testcase);
