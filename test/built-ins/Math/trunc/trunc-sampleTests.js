// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: sample tests for trunc
includes: [runTestCase.js]
---*/

function testcase() {

    var pos_inf = [0.02047410048544407, 0.00000000000000001, 0.9999999999999999, Number.EPSILON,Number.MIN_VALUE];
    var neg_inf = [0.02047410048544407, 0.00000000000000001, 0.9999999999999999, -Number.EPSILON, Number.MIN_VALUE];
    var sample_data = [Number.MAX_VALUE,-4.9,10, 3.9,-10,-3.9,4.9 ];

    for (var i in pos_inf) {
        if ((1 / Math.trunc(pos_inf[i])) !== Number.POSITIVE_INFINITY) {    // since +0===-0
            $ERROR("Math.trunc should produce +0 for values between 0 and 1");
        }
    }

    for (var i in neg_inf) {
        if ((1 / Math.trunc(-0.02047410048544407)) !== Number.NEGATIVE_INFINITY) {// since +0===-0
            $ERROR("Math.trunc should produce -0 for values between -1 and 0");
        }
    }

    for (var i in sample_data) {
        if (sample_data[i] > 0) {
            if(Math.floor(sample_data[i]) !== Math.trunc(sample_data[i])){
                $ERROR("Math.trunc produces incorrect result for"+sample_data[i]);
            }
        }
        else {
            if(Math.ceil(sample_data[i]) !== Math.trunc(sample_data[i])){
                $ERROR("Math.trunc produces incorrect result for"+sample_data[i]);
            }
        }
    }

    return true;
}
runTestCase(testcase);
