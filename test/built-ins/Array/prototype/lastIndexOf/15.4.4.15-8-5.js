// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-5
description: Array.prototype.lastIndexOf must return correct index(Object)
includes: [runTestCase.js]
---*/

function testcase() {
  var obj1 = {toString:function (){return "false"}};
  var obj2 = {toString:function (){return "false"}};
  var obj3 = obj1;
  var a = new Array(obj2,obj1,obj3,false,undefined,0,false,null,{toString:function (){return "false"}},"false");
  if (a.lastIndexOf(obj3) === 2) 
  {
    return true;
  }
 }
runTestCase(testcase);
