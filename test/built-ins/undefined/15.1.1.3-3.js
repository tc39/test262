// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.1.3-3
description: >
    undefined is not writable, simple assignment should return the
    rval value (11.13.1-6)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase(){
  var newProperty = undefined = 42;
  return (newProperty === 42);
}

runTestCase(testcase);
