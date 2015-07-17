// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-1
description: >
    delete operator returns false when deleting a direct reference to
    a var
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  var x = 1;

  // Now, deleting 'x' directly should fail;
  var d = delete x;
  if(d === false && x === 1)
    return true;
 }
runTestCase(testcase);
