// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat on non-string objects
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var obj = {};
        obj.toString = function () { return "object"; }
        var nonStringObj = [{}, new Uint8Array(10), new Array(9), new Error()];
        for (var i in nonStringObj) {
            var val = String.prototype.repeat.call(nonStringObj[i], 1);
            if (val !== nonStringObj[i].toString()) {
                $ERROR("String.prototype.repeat gives incorrect output for: " + nonStringObj[i]);
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
