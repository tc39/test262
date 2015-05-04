// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing isNaN on sample values.
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        var num = new Number(-0.3);
        var inputs = [new Number(-.3), "NaN", new Uint16Array(), new Object(), new String("NaN")];

        for(var i in inputs){
        if (Number.isNaN(inputs) !== false) {
            $ERROR("Number.isNan returned incorrect values for: " + inputs[i]);
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
