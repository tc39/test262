// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.2.1-11-6-s
description: >
    Duplicate combined parameter name allowed in Function constructor
    called in strict mode if body not strict
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase()
{ 
  try {
     Function('a,a','return a;');
	 return true;
  } catch (e) {
     return false;
  }
  
 }
runTestCase(testcase);
