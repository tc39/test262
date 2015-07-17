// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.3.2-1
description: Function.length - data property with value 1
includes: [runTestCase.js]
---*/

function testcase() {

  var desc = Object.getOwnPropertyDescriptor(Function,"length");
  if(desc.value === 1 &&
     desc.writable === false &&
     desc.enumerable === false &&
     desc.configurable === true)
    return true; 

 }
runTestCase(testcase);
