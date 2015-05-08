// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.3-8
description: >
    7.3 - ES5 recognizes the character <PS> (\u2029) as terminating
    regular expression literals
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("var regExp =  /[\u2029]/");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
