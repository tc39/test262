// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-64
description: >
    Object.defineProperty - desc.value = +0 and name.value = -0
    (8.12.9 step 6)
includes: [propertyHelper.js]
negative: TypeError
---*/


var obj = {};

Object.defineProperty(obj, "foo", { value: -0 });

try {
    Object.defineProperty(obj, "foo", { value: +0 });
} catch (e) {

    dataPropertyAttributesAreCorrect(obj, "foo", -0, false, false, false);
    throw e;
}
