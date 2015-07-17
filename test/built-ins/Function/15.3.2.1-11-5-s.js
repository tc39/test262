// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.2.1-11-5-s
description: >
    Duplicate combined parameter name in Function constructor throws
    SyntaxError in strict mode
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase()
{   
  try 
  {
    Function('a,a','"use strict";');
	return false;
  }
  catch (e) {
    return(e instanceof SyntaxError);
  }
 }
runTestCase(testcase);
