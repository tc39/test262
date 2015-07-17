// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-3-5
description: Object.keys must return a fresh array on each invocation
includes: [runTestCase.js]
---*/

function testcase() {
  var literal = {a: 1};
  var keysBefore = Object.keys(literal);
  if (keysBefore[0] != 'a') return false;
  keysBefore[0] = 'x';
  var keysAfter = Object.keys(literal);
  return (keysBefore[0] == 'x') && (keysAfter[0] == 'a');
 }
runTestCase(testcase);
