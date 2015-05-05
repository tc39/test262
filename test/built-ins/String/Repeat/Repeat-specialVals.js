// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat on special characters
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var specialVals = ["{", "[", "}", "]", "$", ".", "str\nstr", "\0\0", "&"];
        for (var i in specialVals) {
            var val = String.prototype.repeat.call(specialVals[i], 1);
            if (val !== specialVals[i]) {
                $ERROR("String.prototype.repeat did not work for " + specialVals[i]);
                return false;
            }
        }
        return true;
    }
    catch (e) {
        $ERROR(e.message);
        return true;
    }
}
runTestCase(testcase);
