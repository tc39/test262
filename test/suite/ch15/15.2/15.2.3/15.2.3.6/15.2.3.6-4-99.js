// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-99
description: >
    Object.defineProperty will throw TypeError when name.configurable
    = false, name.[[Get]] is undefined, desc.[[Get]] refers to an
    object (8.12.9 step 11.a.ii)
includes: [propertyHelper.js]
---*/


var obj = {};

function setFunc(value) {
    obj.setVerifyHelpProp = value;
}

Object.defineProperty(obj, "foo", {
    set: setFunc,
    configurable: false
});

function getFunc() {
    return 10;
}

try {
    Object.defineProperty(obj, "foo", {
        get: getFunc,
        set: setFunc
    });
} catch (e) {
    accessorPropertyAttributesAreCorrect(obj, "foo", undefined, setFunc, "setVerifyHelpProp", false, false);

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
