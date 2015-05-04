// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] __proto__ on null and undefined"
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        null.__proto__;
    } catch (e) {
        try {
            undefined.__proto__;
        } catch (e) {
            return true;
        }
    }
    return false;
}
runTestCase(testcase);
