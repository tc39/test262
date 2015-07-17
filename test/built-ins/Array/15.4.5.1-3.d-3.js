// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.5.1-3.d-3
description: Set array length property to max value 4294967295 (2**32-1,)
includes: [runTestCase.js]
---*/

function testcase() {  
  var a =[];
  a.length = 4294967295 ;
  return a.length===4294967295 ;
 }
runTestCase(testcase);
