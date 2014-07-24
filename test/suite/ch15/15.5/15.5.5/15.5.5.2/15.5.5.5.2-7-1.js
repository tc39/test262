// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    15.5.5.2 defines [[GetOwnProperty]] for Strings. It supports using indexing
    notation to look up non numeric property names.
es5id: 15.5.5.5.2-7-1
description: >
    String object indexing returns undefined if the numeric index is
    less than 0
includes: [runTestCase.js]
---*/

function testcase() {
  var s = new String("hello world");

  if (s[-1] === undefined) {
    return true;
  }
 }
runTestCase(testcase);
