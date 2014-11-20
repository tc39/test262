// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-97
description: >
    Object.defineProperty will throw TypeError when name.configurable
    = false, name.[[Set]] is undefined, desc.[[Set]] refers to an
    object (8.12.9 step 11.a.i)
includes: [propertyHelper.js]
---*/


var obj = {};

function getFunc() {
    return "property";
}

Object.defineProperty(obj, "property", {
    get: getFunc,
    configurable: false
});

try {
    Object.defineProperty(obj, "property", {
        get: getFunc,
        set: function () { },
        configurable: false
    });

    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(obj, "property", getFunc());

    verifyNotEnumerable(obj, "property");

    verifyNotConfigurable(obj, "property");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
