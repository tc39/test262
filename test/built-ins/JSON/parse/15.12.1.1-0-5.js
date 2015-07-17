// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-0-5
description: >
    <ZWSPP> is not valid JSON whitespace as specified by the
    production JSONWhitespace.
includes: [runTestCase.js]
---*/

function testcase() {
  
  try {
    JSON.parse('\u200b1234'); // should produce a syntax error 
    }
  catch (e) {
      return true; // treat any exception as a pass, other tests ensure that JSON.parse throws SyntaxError exceptions
      }
  }
runTestCase(testcase);
