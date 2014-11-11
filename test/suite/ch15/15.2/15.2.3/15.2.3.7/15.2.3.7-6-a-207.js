// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-207
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' makes no change if every field in 'desc' is
    absent (name is accessor property)  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];

function get_func() {
    return 11;
}
function set_func(value) {
    arr.setVerifyHelpProp = value;
}

Object.defineProperty(arr, "0", {
    get: get_func,
    set: set_func,
    enumerable: true,
    configurable: true
});

Object.defineProperties(arr, {
    "0": {}
});
verifyEqualTo(arr, "0", get_func());

verifyWritable(arr, "0", "setVerifyHelpProp");

verifyEnumerable(arr, "0");

verifyConfigurable(arr, "0");

