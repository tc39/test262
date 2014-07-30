// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.16-7-5
description: >
    Array.prototype.every doesn't consider newly added elements in
    sparse array
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, Idx, obj)
  {
    arr[1000] = 3;
    if(val < 3)
       return true;
    else 
       return false;
  }

  var arr = new Array(10);
  arr[1] = 1;
  arr[2] = 2;
  
  if(arr.every(callbackfn) === true)    
      return true;  
  
 }
runTestCase(testcase);
