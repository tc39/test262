// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    7.3 - ES5 specifies that a multiline comment that contains a line
    terminator character <PS> (\u2029) must be treated as a single
    line terminator for the purposes of semicolon insertion
includes: [runTestCase.js]
---*/

function testcase() {
        /*MultiLine
        Comments 
        \u2029 var = ;
        */
        return true;
    }
runTestCase(testcase);
