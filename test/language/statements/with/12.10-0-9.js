// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10-0-9
description: with introduces scope - name lookup finds outer variable
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
  function f(o) {
    var x = 42;

    function innerf(o) {
      with (o) {
        return x;
      }
    }

    return innerf(o);
  }
  
  if (f({}) === 42) {
    return true;
  }
 }
runTestCase(testcase);
