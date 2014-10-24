// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-360-7
description: >
    ES5 Attributes - Updating indexed data property 'P' whose
    attributes are [[Writable]]: false, [[Enumerable]]: true,
    [[Configurable]]: true to an accessor property, 'O' is the global
    object (8.12.9 - step 9.b.i)
includes: [propertyHelper.js, fnGlobalObject.js]
---*/

function getFunc() {
        return 20;
    }

var obj = fnGlobalObject();
try {
    Object.defineProperty(obj, "0", {
        value: 2010,
        writable: false,
        enumerable: true,
        configurable: true
    });
    var desc1 = Object.getOwnPropertyDescriptor(obj, "0");

    Object.defineProperty(obj, "0", {
        get: getFunc
    });
    var desc2 = Object.getOwnPropertyDescriptor(obj, "0");

    accessorPropertyAttributesAreCorrect(obj, "0", getFunc, undefined, undefined,
                                         true, true);
} finally {
    delete obj[0];
}
