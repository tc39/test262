// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: 15.5.4.24 - String.prototype.contains should have implicit this
includes: [runTestCase.js]
---*/

function testcase() {
    noThis = [undefined, null];
    var val = 0;
    for (var i in noThis) {
        try {
            String.prototype.contains.call(canon[i], undefined);
            $ERROR("Calling String.prototype.contains on "+ noThis[i]+" String.prototype.contains should have implicit this");
            return false;
        } catch (e) {
            val++;
        }
    }
    return val===2;
}
runTestCase(testcase);
