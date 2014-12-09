// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

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
