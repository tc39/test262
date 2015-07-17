// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Step 4 of defineProperty calls the [[DefineOwnProperty]] internal method
    of O to define the property. For newly defined properties, step 4.a.1 of
    [[DefineOwnProperty]] creates a data property if handed a generic desc.
es5id: 15.2.3.6-4-4
description: >
    Object.defineProperty defines a data property if given a generic
    desc(8.12.9 step 4.a.i)
includes: [runTestCase.js]
---*/

function testcase() {
  var o = {};
  
  var desc = {};
  Object.defineProperty(o, "foo", desc);

  var propDesc = Object.getOwnPropertyDescriptor(o, "foo");
  if (propDesc.value        === undefined &&  // this is the value that was set
      propDesc.writable     === false &&      // false by default
      propDesc.enumerable   === false &&      // false by default
      propDesc.configurable === false) {      // false by default
    return true;
  }
 }
runTestCase(testcase);
