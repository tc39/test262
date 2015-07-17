// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g5-2
description: >
    A JSONStringCharacter UnicodeEscape may not have fewer than 4 hex
    characters
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        JSON.parse('"\\u005"') 
       }
     catch (e) {
        return e.name==='SyntaxError'
        }
  }
runTestCase(testcase);
