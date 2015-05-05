// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with different values of position
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var desc = Object.getOwnPropertyDescriptor(String.prototype,"startsWith");
        var len = String.prototype.startsWith.length;
        if (desc.enumerable !== false && desc.configurable !== true && desc.writable !== true && len !== 1) {
            $ERROR("String.prototype.startsWith has incorrect property values");
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
