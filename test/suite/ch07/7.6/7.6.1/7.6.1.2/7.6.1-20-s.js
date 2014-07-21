// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: \u0070\u0075\u0062\u006c\u0069\u0063 (public)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";

        try {
            eval("var \u0070\u0075\u0062\u006c\u0069\u0063 = 123;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
}
runTestCase(testcase);
