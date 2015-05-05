// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math.Log10 with sample values.
includes: [runTestCase.js]
---*/

function verify(act, exp) {
    if (Number.isNaN(exp)) {
        return Number.isNaN(Math.log10(act));
    }
    return Math.log10(act) === exp;
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
                $ERROR("Math.log10 produces incorrect output for " + inputs[i]);
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
    outputs[id] = 9.331929865381182;
    id++;

    inputs[id] = 2147483646;
    outputs[id] = 9.33192986517895;
    id++;

    inputs[id] = 2147483648;
    outputs[id] = 9.331929865583417;
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
    outputs[id] = 9.632959861247398;
    id++;

    inputs[id] = 4294967296;
    outputs[id] = 9.632959861247398;
    id++;

    inputs[id] = 4294967294;
    outputs[id] = 9.632959861045163;
    id++;

    inputs[id] = 4294967295;
    outputs[id] = 9.632959861146281;
    id++;

    inputs[id] = 1073741824;
    outputs[id] = 9.030899869919435;
    id++;

    inputs[id] = 1073741825;
    outputs[id] = 9.030899870323903;
    id++;

    inputs[id] = 1073741823;
    outputs[id] = 9.030899869514968;
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
    outputs[id] = -308;
    id++;

    inputs[id] = 1e+308;
    outputs[id] = 308;
    id++;

    inputs[id] = 4294967296;
    outputs[id] = 9.632959861247398;
    id++;

    inputs[id] = 18446744073709552000;
    outputs[id] = 19.265919722494796;
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
    outputs[id] = 9.632959861146281;
    id++;

    inputs[id] = 4294967294;
    outputs[id] = 9.632959861045163;
    id++;

    inputs[id] = -4294967295;
    outputs[id] = NaN;
    id++;

    inputs[id] = -4294967294;
    outputs[id] = NaN;
    id++;

    inputs[id] = 11259375;
    outputs[id] = 7.051514283802662;
    id++;

    inputs[id] = 4886718345;
    outputs[id] = 9.689017308388242;
    id++;

    inputs[id] = 1;
    outputs[id] = 0;
    id++;

    inputs[id] = 8;
    outputs[id] = 0.9030899869919435;
    id++;

    inputs[id] = 9;
    outputs[id] = 0.9542425094393249;
    id++;

    inputs[id] = 57;
    outputs[id] = 1.7558748556724914;
    id++;

    inputs[id] = 78;
    outputs[id] = 1.8920946026904803;
    id++;

    inputs[id] = true;
    outputs[id] = 0;
    id++;

    inputs[id] = false;
    outputs[id] = -Infinity;
    id++;

    inputs[id] = 1.7976931348623157e+308;
    outputs[id] = 308.25471555991674;
    id++;

    inputs[id] = 5e-324;
    outputs[id] = -323.3062153431158;
    id++;

    inputs[id] = -Infinity;
    outputs[id] = NaN;
    id++;

    inputs[id] = Infinity;
    outputs[id] = Infinity;
    id++;

    inputs[id] = 3.141592653589793;
    outputs[id] = 0.49714987269413385;
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
    outputs[id] = -0.10292299679057967;
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
    outputs[id] = 0.09151497716927041;
    id++;

    inputs[id] = 2.47032822920623e-310;
    outputs[id] = -309.60724533877976;
    id++;

    inputs[id] = 5e-324;
    outputs[id] = -323.3062153431158;
    id++;

    inputs[id] = 5e-324;
    outputs[id] = -323.3062153431158;
    id++;

    inputs[id] = 1e-323;
    outputs[id] = -323.0051853474518;
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
    outputs[id] = 308.25471555991674;
    id++;

    inputs[id] = 1.7976931348623e+308;
    outputs[id] = 308.25471555991674;
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
    outputs[id] = 1.919078092376074;
    id++;

    inputs[id] = -83;
    outputs[id] = NaN;
    id++;

    inputs[id] = 0.123;
    outputs[id] = -0.9100948885606021;
    id++;

    inputs[id] = 0.1230000000789;
    outputs[id] = -0.910094888282018;
    id++;

    inputs[id] = -0.123;
    outputs[id] = NaN;
    id++;

    inputs[id] = -0.1230000000789;
    outputs[id] = NaN;
    id++;

    inputs[id] = 1230000000;
    outputs[id] = 9.089905111439398;
    id++;

    inputs[id] = 0.123;
    outputs[id] = -0.9100948885606021;
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
    outputs[id] = -0.3010300043498709;
    id++;

    inputs[id] = 0.5;
    outputs[id] = -0.3010299956639812;
    id++;

    inputs[id] = 0.500000001;
    outputs[id] = -0.3010299947953923;
    id++;

    inputs[id] = 0.999999999;
    outputs[id] = -4.342944698377123e-10;
    id++;

    inputs[id] = 1.0000000001;
    outputs[id] = 4.342945178152237e-11;
    id++;

    inputs[id] = 6.666666666666667;
    outputs[id] = 0.8239087409443188;
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
    outputs[id] = 9.03089987012167;
    id++;

    inputs[id] = 1073741824.5;
    outputs[id] = 9.03089987012167;
    id++;

    inputs[id] = 1073741824.5;
    outputs[id] = 9.03089987012167;
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
    outputs[id] = 9.3319298654823;
    id++;

    inputs[id] = 2147483647.5;
    outputs[id] = 9.3319298654823;
    id++;

    inputs[id] = 2147483647.5;
    outputs[id] = 9.3319298654823;
    id++;

    inputs[id] = 9.9999999e+307;
    outputs[id] = 307.99999999565705;
    id++;

    inputs[id] = 5e+307;
    outputs[id] = 307.69897000433604;
    id++;

    inputs[id] = 4.99999e+307;
    outputs[id] = 307.6989691357462;
    id++;

    inputs[id] = 5.00001e+307;
    outputs[id] = 307.6989708729241;

    inputs[id] = Number.MAX_VALUE;
    outputs[id] = 308.25471555991674;
    id++;

}
