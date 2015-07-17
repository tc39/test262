// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-8
description: Array.prototype.lastIndexOf must return correct index (Array)
includes: [runTestCase.js]
---*/

function testcase() {
  var b = new Array("0,1");  
  var a = new Array(0,b,"0,1",3);  
  if (a.lastIndexOf(b.toString()) === 2 &&  
      a.lastIndexOf("0,1") === 2 ) 
  {
    return true;
  }
 }
runTestCase(testcase);
