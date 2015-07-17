// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The abtract operation ToPropertyDescriptor  is used to package the
    into a property desc. Step 10 of ToPropertyDescriptor throws a TypeError
    if the property desc ends up having a mix of accessor and data property elements.
es5id: 15.2.3.6-3-9
description: >
    Object.defineProperty throws TypeError if getter is not callable
    but not undefined (Object)(8.10.5 step 7.b)
includes: [runTestCase.js]
---*/

function testcase() {
    var o = {};
    
    // dummy getter
    var getter = { a: 1 };
    var desc = { get: getter };
    
    try {
      Object.defineProperty(o, "foo", desc);
    }
    catch (e) {
      if (e instanceof TypeError &&
          (o.hasOwnProperty("foo") === false)) {
        return true;
      }
    }
 }
runTestCase(testcase);
