// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-1
description: Array.prototype.indexOf must return correct index (boolean)
includes: [runTestCase.js]
---*/

function testcase() {
  var obj = {toString:function (){return true}};
  var _false = false;
  var a = [obj,"true", undefined,0,_false,null,1,"str",0,1,true,false,true,false];
  if (a.indexOf(true) === 10 &&  //a[10]=true
      a.indexOf(false) === 4)    //a[4] =_false
  {
    return true;
  }
 }
runTestCase(testcase);
