// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.12.1.1-0-6
description: >
    <BOM> is not valid JSON whitespace as specified by the production
    JSONWhitespace.
includes: [runTestCase.js]
---*/

function testcase() {
  
  try {
    JSON.parse('\ufeff1234'); // should produce a syntax error a
    }
  catch (e) {
      return true; // treat any exception as a pass, other tests ensure that JSON.parse throws SyntaxError exceptions
      }
  }
runTestCase(testcase);
