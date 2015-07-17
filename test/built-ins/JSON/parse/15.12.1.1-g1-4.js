// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g1-4
description: The JSON lexical grammar treats <SP> as a whitespace character
includes: [runTestCase.js]
---*/

function testcase() {
 if (JSON.parse(' 1234')!=1234) return false; // <SP> should be ignored
  try {
    JSON.parse('12 34'); // <SP> should produce a syntax error as whitespace results in two tokens
    }
  catch (e) {
      if (e.name === 'SyntaxError') return true;
      }
  }
runTestCase(testcase);
