// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-265
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, name is accessor property and 'desc' is accessor
    descriptor, test updating the [[Get]] attribute value of 'name'
    (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arrObj = [];

function getFunc() {
    return 100;
}
Object.defineProperty(arrObj, "0", {
    get: function () {
        return 12;
    },
    configurable: true
});
Object.defineProperty(arrObj, "0", {
    get: getFunc
});
verifyEqualTo(arrObj, "0", getFunc());

verifyNotEnumerable(arrObj, "0");

verifyConfigurable(arrObj, "0");
