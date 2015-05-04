// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: delete __proto__ on Object.prototype.
includes: [runTestCase.js]
---*/

function testcase() {

    delete Object.prototype.__proto__;

    var pass = true;

    var testVector = [
        Object,
        String,
        Number,
        Boolean,
        Function,
        Array,
        Error,
        RegExp
    ]

    testVector.forEach(function (testcase) {
        if (testcase.__proto__ !== undefined &&
            testcase.prototype.__proto__ !== undefined)
            pass = false;
    });



    if (Math.__proto__ !== undefined &&
        JSON.__proto__ !== undefined)
        pass =  false;

    return pass;


}
runTestCase(testcase);
