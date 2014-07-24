// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-8-10
description: Array.prototype.some - subclassed array when length is reduced
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = 2;
  
  function cb(val)
  {
    if(val > 2)
      return true;
    else
      return false;
  }
  var i = f.some(cb);
  
  if (i === false) {
    return true;
  }
 }
runTestCase(testcase);
