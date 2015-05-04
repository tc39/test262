// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.Log2 with sample values.
includes: [runTestCase.js]
---*/

function verify(act, exp) {
    if (Number.isNaN(exp)) {
        return Number.isNaN(Math.log2(act));
    }
    return Math.log2(act) === exp;
}

function testcase() {
    try {
        var str = "sample";
        var searchStr = "sam";
        var inputs = [];
        var outputs = [];
        setInputOutput(inputs, outputs);
        for (var i in inputs) {
            if (verify(inputs[i],outputs[i])===false) {
                $ERROR("Math.log2 produces incorrect output for " + inputs[i]);
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


function setInputOutput(inputs,outputs) {
    var id = 0;

    inputs[id] = -2147483648;
    outputs[id] = NaN;
    id++;

    inputs[id] = -2147483647;
    outputs[id] = NaN;
    id++;

    inputs[id] = -2147483649;
    outputs[id] = NaN;
    id++;

    inputs[id] = 2147483647;
    outputs[id] = 30.999999999328196;
    id++;

    inputs[id] = 2147483646;
    outputs[id] = 30.99999999865639;
    id++;

    inputs[id] = 2147483648;
    outputs[id] = 31.000000000000003;
    id++;

    inputs[id] = -4294967295;
    outputs[id] = NaN;
    id++;

    inputs[id] = -4294967296;
    outputs[id] = NaN;
    id++;

    inputs[id] = -4294967297;
    outputs[id] = NaN;
    id++;

    inputs[id] = 4294967296;
    outputs[id] = 32;
    id++;

    inputs[id] = 4294967296;
    outputs[id] = 32;
    id++;

    inputs[id] = 4294967294;
    outputs[id] = 31.999999999328192;
    id++;

    inputs[id] = 4294967295;
    outputs[id] = 31.999999999664098;
    id++;

    inputs[id] = 1073741824;
    outputs[id] = 30;
    id++;

    inputs[id] = 1073741825;
    outputs[id] = 30.000000001343615;
    id++;

    inputs[id] = 1073741823;
    outputs[id] = 29.999999998656385;
    id++;

    inputs[id] = -1073741824;
    outputs[id] = NaN;
    id++;

    inputs[id] = -1073741825;
    outputs[id] = NaN;
    id++;

    inputs[id] = -1073741823;
    outputs[id] = NaN;
    id++;

    inputs[id] = 1e-308;
    outputs[id] = -1023.1538532253077;
    id++;

    inputs[id] = 1e+308;
    outputs[id] = 1023.1538532253077;
    id++;

    inputs[id] = 4294967296;
    outputs[id] = 32;
    id++;

    inputs[id] = 18446744073709552000;
    outputs[id] = 64;
    id++;

    inputs[id] = 0;
    outputs[id] = -Infinity;
    id++;

    inputs[id] = 0;
    outputs[id] = -Infinity;
    id++;

    inputs[id] = 1;
    outputs[id] = 0;
    id++;

    inputs[id] = -1;
    outputs[id] = NaN;
    id++;

    inputs[id] = 4294967295;
    outputs[id] = 31.999999999664098;
    id++;

    inputs[id] = 4294967294;
    outputs[id] = 31.999999999328192;
    id++;

    inputs[id] = -4294967295;
    outputs[id] = NaN;
    id++;

    inputs[id] = -4294967294;
    outputs[id] = NaN;
    id++;

    inputs[id] = 11259375;
    outputs[id] = 23.424623410863603;
    id++;

    inputs[id] = 4886718345;
    outputs[id] = 32.18621880858483;
    id++;

    inputs[id] = 1;
    outputs[id] = 0;
    id++;

    inputs[id] = 8;
    outputs[id] = 3;
    id++;

    inputs[id] = 9;
    outputs[id] = 3.1699250014423126;
    id++;

    inputs[id] = 57;
    outputs[id] = 5.832890014164742;
    id++;

    inputs[id] = 78;
    outputs[id] = 6.285402218862249;
    id++;

    inputs[id] = true;
    outputs[id] = 0;
    id++;

    inputs[id] = false;
    outputs[id] = -Infinity;
    id++;

    inputs[id] = 1.7976931348623157e+308;
    outputs[id] = 1024;
    id++;

    inputs[id] = 5e-324;
    outputs[id] = -1074;
    id++;

    inputs[id] = -Infinity;
    outputs[id] = NaN;
    id++;

    inputs[id] = Infinity;
    outputs[id] = Infinity;
    id++;

    inputs[id] = 3.141592653589793;
    outputs[id] = 1.651496129472319;
    id++;

    inputs[id] = -1.234;
    outputs[id] = NaN;
    id++;

    inputs[id] = -1.234;
    outputs[id] = NaN;
    id++;

    inputs[id] = -0.1234;
    outputs[id] = NaN;
    id++;

    inputs[id] = 0.789;
    outputs[id] = -0.3419027946486285;
    id++;

    inputs[id] = 0;
    outputs[id] = -Infinity;
    id++;

    inputs[id] = 0;
    outputs[id] = -Infinity;
    id++;

    inputs[id] = 0;
    outputs[id] = -Infinity;
    id++;

    inputs[id] = -1.23456789;
    outputs[id] = NaN;
    id++;

    inputs[id] = 1.23456789;
    outputs[id] = 0.3040061737615749;
    id++;

    inputs[id] = 2.47032822920623e-310;
    outputs[id] = -1028.493006671577;
    id++;

    inputs[id] = 5e-324;
    outputs[id] = -1074;
    id++;

    inputs[id] = 5e-324;
    outputs[id] = -1074;
    id++;

    inputs[id] = 1e-323;
    outputs[id] = -1073;
    id++;

    inputs[id] = -2.47032822920623e-310;
    outputs[id] = NaN;
    id++;

    inputs[id] = -5e-324;
    outputs[id] = NaN;
    id++;

    inputs[id] = -5e-324;
    outputs[id] = NaN;
    id++;

    inputs[id] = -1e-323;
    outputs[id] = NaN;
    id++;

    inputs[id] = 1.79769313486231e+308;
    outputs[id] = 1024;
    id++;

    inputs[id] = 1.7976931348623e+308;
    outputs[id] = 1024;
    id++;

    inputs[id] = Infinity;
    outputs[id] = Infinity;
    id++;

    inputs[id] = -1.79769313486231e+308;
    outputs[id] = NaN;
    id++;

    inputs[id] = -1.7976931348623e+308;
    outputs[id] = NaN;
    id++;

    inputs[id] = -Infinity;
    outputs[id] = NaN;
    id++;

    inputs[id] = 83;
    outputs[id] = 6.375039431346925;
    id++;

    inputs[id] = -83;
    outputs[id] = NaN;
    id++;

    inputs[id] = 0.123;
    outputs[id] = -3.0232697793228475;
    id++;

    inputs[id] = 0.1230000000789;
    outputs[id] = -3.023269778397411;
    id++;

    inputs[id] = -0.123;
    outputs[id] = NaN;
    id++;

    inputs[id] = -0.1230000000789;
    outputs[id] = NaN;
    id++;

    inputs[id] = 1230000000;
    outputs[id] = 30.196011169550775;
    id++;

    inputs[id] = 0.123;
    outputs[id] = -3.0232697793228475;
    id++;

    inputs[id] = -1230000000;
    outputs[id] = NaN;
    id++;

    inputs[id] = -0.123;
    outputs[id] = NaN;
    id++;

    inputs[id] = -0.499999;
    outputs[id] = NaN;
    id++;

    inputs[id] = -0.5;
    outputs[id] = NaN;
    id++;

    inputs[id] = -0.5000001;
    outputs[id] = NaN;
    id++;

    inputs[id] = -0.9999999;
    outputs[id] = NaN;
    id++;

    inputs[id] = -1.00000001;
    outputs[id] = NaN;
    id++;

    inputs[id] = 0.49999999;
    outputs[id] = -1.000000028853901;
    id++;

    inputs[id] = 0.5;
    outputs[id] = -1;
    id++;

    inputs[id] = 0.500000001;
    outputs[id] = -0.99999999711461;
    id++;

    inputs[id] = 0.999999999;
    outputs[id] = -1.4426950008081087e-9;
    id++;

    inputs[id] = 1.0000000001;
    outputs[id] = 1.4426951601859516e-10;
    id++;

    inputs[id] = 6.666666666666667;
    outputs[id] = 2.736965594166206;
    id++;

    inputs[id] = -1073741824.499999;
    outputs[id] = NaN;
    id++;

    inputs[id] = -1073741824.5;
    outputs[id] = NaN;
    id++;

    inputs[id] = -1073741824.5;
    outputs[id] = NaN;
    id++;

    inputs[id] = 1073741824.5;
    outputs[id] = 30.000000000671807;
    id++;

    inputs[id] = 1073741824.5;
    outputs[id] = 30.000000000671807;
    id++;

    inputs[id] = 1073741824.5;
    outputs[id] = 30.000000000671807;
    id++;

    inputs[id] = -2147483648.499999;
    outputs[id] = NaN;
    id++;

    inputs[id] = -2147483648.5;
    outputs[id] = NaN;
    id++;

    inputs[id] = -2147483648.5;
    outputs[id] = NaN;
    id++;

    inputs[id] = 2147483647.5;
    outputs[id] = 30.999999999664098;
    id++;

    inputs[id] = 2147483647.5;
    outputs[id] = 30.999999999664098;
    id++;

    inputs[id] = 2147483647.5;
    outputs[id] = 30.999999999664098;
    id++;

    inputs[id] = 9.9999999e+307;
    outputs[id] = 1023.1538532108807;
    id++;

    inputs[id] = 5e+307;
    outputs[id] = 1022.1538532253076;
    id++;

    inputs[id] = 4.99999e+307;
    outputs[id] = 1022.1538503399147;
    id++;

    inputs[id] = 5.00001e+307;
    outputs[id] = 1022.1538561106948;
    id++;


}
