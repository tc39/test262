// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-8
description: Array.prototype.indexOf must return correct index (Array)
includes: [runTestCase.js]
---*/

function testcase() {
  var b = new Array("0,1");  
  var a = new Array(0,b,"0,1",3);  
  if (a.indexOf(b.toString()) === 2 &&  
      a.indexOf("0,1") === 2 ) 
  {
    return true;
  }
 }
runTestCase(testcase);
