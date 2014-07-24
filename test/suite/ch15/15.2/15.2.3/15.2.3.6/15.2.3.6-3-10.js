// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    The abtract operation ToPropertyDescriptor  is used to package the
    into a property desc. Step 10 of ToPropertyDescriptor throws a TypeError
    if the property desc ends up having a mix of accessor and data property elements.
es5id: 15.2.3.6-3-10
description: >
    Object.defineProperty throws TypeError if setter is not callable
    but not undefined (Number)(8.10.5 step 8.b)
includes: [runTestCase.js]
---*/

function testcase() {
    var o = {};
    
    // dummy setter
    var setter = 42;
    var desc = { set: setter };
    
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
