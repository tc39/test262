// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-204
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' property doesn't exist in 'O', test
    [[Configurable]] of 'P' property in 'Attributes' is set as false
    value if [[Configurable]] is absent in accessor descriptor 'desc'
    (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];
var beforeDeleted = false;
var afterDeleted = false;
arr.verifySetter = 100;

Object.defineProperties(arr, {
    "0": {
        set: function (value) {
            arr.verifySetter = value;
        },
        get: function () {
            return arr.verifySetter;
        },
        enumerable: true
    }
});

if (isConfigurable(arr, "0")) {
    $ERROR("Expected arr[0] to not be configurable (cannot delete)");
}

arr[0] = 101;

if (arr[0] !== 101) {
    $ERROR('Expected arr[0] === 101, actually ' + arr[0]);
}

if (arr.verifySetter !== 101) {
    $ERROR('Expected arr.verifySetter === 101, actually ' + arr.verifySetter);
}

