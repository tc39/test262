// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: The effect of preventExtentions must be testable by calling isExtensible
es5id: 15.2.3.10-2
description: >
    Object.preventExtensions returns its arguments after setting its
    extensible property to false
includes: [runTestCase.js]
---*/

function testcase() {
  var o  = {};
  var o2 = undefined;

  o2 = Object.preventExtensions(o);
  if (o2 === o && Object.isExtensible(o2) === false) {
    return true;
  }
 }
runTestCase(testcase);
