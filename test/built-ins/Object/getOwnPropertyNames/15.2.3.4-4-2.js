// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.4-4-2
description: Object.getOwnPropertyNames returns array of property names (Object)
includes:
    - runTestCase.js
    - arrayContains.js
---*/

function testcase() {
  var result = Object.getOwnPropertyNames(Object);
  var expResult = ["getPrototypeOf", "getOwnPropertyDescriptor", "getOwnPropertyNames", "create", "defineProperty", "defineProperties", "seal", "freeze", "preventExtensions", "isSealed", "isFrozen", "isExtensible", "keys", "prototype", "length"];
  var found;

  return arrayContains(result, expResult);
 }
runTestCase(testcase);
