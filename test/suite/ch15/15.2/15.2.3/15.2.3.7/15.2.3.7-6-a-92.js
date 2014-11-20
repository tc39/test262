// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-92
description: >
    Object.defineProperties throws TypeError when P.configurable is
    false, P.[[Get]] is undefined, properties.[[Get]] refers to an
    objcet (8.12.9 step 11.a.ii)
includes: [propertyHelper.js]
---*/


var obj = {};

function set_func(value) {
    obj.setVerifyHelpProp = value;
}

Object.defineProperty(obj, "foo", {
    get: undefined,
    set: set_func,
    enumerable: false,
    configurable: false
});

function get_func() {
    return 0;
}

try {
    Object.defineProperties(obj, {
        foo: {
            get: get_func
        }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyWritable(obj, "foo", "setVerifyHelpProp");

    verifyNotEnumerable(obj, "foo");

    verifyNotConfigurable(obj, "foo");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
