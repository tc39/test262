// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.4-4-40
description: >
    Object.getOwnPropertyNames - inherited data property of String
    object 'O' is not pushed into the returned array
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            var str = new String("abc");

            String.prototype.protoProperty = "protoString";

            var result = Object.getOwnPropertyNames(str);

            for (var p in result) {
                if (result[p] === "protoProperty") {
                    return false;
                }
            }

            return true;
        } finally {
            delete String.prototype.protoProperty;
        }
    }
runTestCase(testcase);
