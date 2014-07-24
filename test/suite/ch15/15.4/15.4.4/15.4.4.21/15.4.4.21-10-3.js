// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-10-3
description: Array.prototype.reduce - subclassed array of length 1
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = [1];
  function foo() {}
  var f = new foo();
  
  function cb(){}
  if(f.reduce(cb) === 1)
    return true;
 }
runTestCase(testcase);
