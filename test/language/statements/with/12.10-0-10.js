// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10-0-10
description: with introduces scope - name lookup finds function parameter
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
  function f(o) {

    function innerf(o, x) {
      with (o) {
        return x;
      }
    }

    return innerf(o, 42);
  }
  
  if (f({}) === 42) {
    return true;
  }
 }
runTestCase(testcase);
