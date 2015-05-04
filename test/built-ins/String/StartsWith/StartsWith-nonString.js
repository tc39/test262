// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with non-string objects
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var objects = [new Object("sample"), new Array('sample')];
        for (var i in objects) {
            if (String.prototype.startsWith.call(objects[i], objects[0]) === false || String.prototype.startsWith.call(objects[i], objects[1]) === false) {
                $ERROR("String.prototype.startsWith gives incorrect output for: " + counts[i]);
                return false;
            }
        }
        return true;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);
