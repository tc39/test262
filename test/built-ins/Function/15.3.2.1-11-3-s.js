// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.2.1-11-3-s
description: >
    Function constructor having a formal parameter named 'eval' throws
    SyntaxError if function body is strict mode
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  

  try {
    Function('eval', '"use strict";');
	return false;
  }
  catch (e) {
    return (e instanceof SyntaxError);
  }
 }
runTestCase(testcase);
