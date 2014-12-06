// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-5
description: >
    Object.defineProperties - 'P' is own accessor property (8.12.9
    step 1 )
includes: [propertyHelper.js]
---*/

var obj = {};
function getFunc() {
    return 11;
}

Object.defineProperty(obj, "prop", {
    get: getFunc,
    configurable: false
});

try {
    Object.defineProperties(obj, {
        prop: {
            value: 12,
            configurable: true
        }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(obj, "prop", getFunc());

    verifyNotEnumerable(obj, "prop");

    verifyNotConfigurable(obj, "prop");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
