// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-231
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    property,  'P' is data property and 'desc' is accessor descriptor,
    and the [[Configurable]] attribute value of 'P' is true, test 'P'
    is converted from data property to accessor property  (15.4.5.1
    step 4.c)
includes: [propertyHelper.js]
---*/

var arr = [];
arr[1] = 3; // default value of attributes: writable: true, configurable: true, enumerable: true

function set_fun(value) {
    arr.setVerifyHelpProp = value;
}

Object.defineProperties(arr, {
    "1": {
        set: set_fun
    }
});

accessorPropertyAttributesAreCorrect(arr, "1", undefined, set_fun, "setVerifyHelpProp", true, true);
