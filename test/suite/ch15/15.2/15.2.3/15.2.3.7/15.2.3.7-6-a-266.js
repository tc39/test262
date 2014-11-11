// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-266
description: >
    Object.defineProperties - 'O' is an Array, 'P' is generic property
    that won't exist on 'O', and 'desc' is data descriptor, test 'P'
    is defined in 'O' with all correct attribute values (15.4.5.1 step
    5)
includes: [propertyHelper.js]
---*/


var arr = [];

Object.defineProperties(arr, {
    "property": {
        value: 12,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
verifyEqualTo(arr, "property", 12);

verifyWritable(arr, "property");

verifyEnumerable(arr, "property");

verifyConfigurable(arr, "property");

if (arr.length !== 0) {
    $ERROR('Expected arr.length === 0, actually ' + arr.length);
}

