// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-127
description: >
    Object.defineProperties - 'descObj' is a String object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var str = new String("abc");

        str.value = "String";

        Object.defineProperties(obj, {
            property: str
        });

        return obj.property === "String";
    }
runTestCase(testcase);
