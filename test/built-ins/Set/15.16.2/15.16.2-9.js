// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set Constructor called as function. Verify prototype is not a Set
    and resulting object has [[SetData]]
includes: [runTestCase.js]
---*/

function testcase() {

    var testVector = [1, +0, -0, Infinity, NaN, true, {}, new Function(), new Date(), new Error(), new String, new Boolean(), new Number()];
    var testfail = false;

    var set;

    testVector.forEach(function (val) {


        try{
             set = Set.call(val);
             testfail = true;
        }catch(e){
        }

    });

    return !testfail;

};
runTestCase(testcase);
