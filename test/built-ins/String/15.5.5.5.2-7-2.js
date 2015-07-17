// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    15.5.5.2 defines [[GetOwnProperty]] for Strings. It supports using indexing
    notation to look up non numeric property names.
es5id: 15.5.5.5.2-7-2
description: >
    String value indexing returns undefined if the numeric index is
    less than 0
includes: [runTestCase.js]
---*/

function testcase() {
  var s = String("hello world");

  if (s[-1] === undefined) {
    return true;
  }
 }
runTestCase(testcase);
