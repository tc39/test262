// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat on objects with toStrings redefined
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var obj1 = new Object("object");
        obj1.length = 10;
        if (String.prototype.repeat.call(obj1, 1) !== "object") {
            $ERROR("Incorrect result for object with length property");
            return false;
        }

        var obj2 = new Object("object");
        obj2.toString = function () { return "obj"; }
        if (String.prototype.repeat.call(obj2, 1) !== "obj") {
            $ERROR("Incorrect result for object with toString modified ");
            return false;
        }

        var str = "string";
        str.toString = function () { return "str"; }
        if (str.repeat(1) !== str) {
            $ERROR("Incorrect result for String with toString modified");
            return false;
        }

        var str2 = "string";
        str2.length = 0;
        if (str2.repeat(1) !== str2) {
            $ERROR("Incorrect result for String with length modified");
            return false;
        }
        return true;

    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);
