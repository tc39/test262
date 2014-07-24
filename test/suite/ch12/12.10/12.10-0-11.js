// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.10-0-11
description: with introduces scope - name lookup finds inner variable
includes: [runTestCase.js]
---*/

function testcase() {
  function f(o) {

    function innerf(o) {
      var x = 42;

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
