// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-315
description: >
    Object.create - all properties in 'Properties' are enumerable
    (data property and accessor property) (15.2.3.7 step 7)
includes: [propertyHelper.js]
---*/

var newObj = {};
function getFunc() {
    return 10;
}
function setFunc(value) {
    newObj.setVerifyHelpProp = value;
}

newObj = Object.create({}, {
    foo1: {
        value: 200,
        enumerable: true,
        writable: true,
        configurable: true
    },
    foo2: {
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: true
    }
});

if (newObj.foo1 !== 200) {
    $ERROR("Expected newObj.foo1 === 200, actually " + newObj.foo1);
}

dataPropertyAttributesAreCorrect(newObj, "foo1", 200, true, true, true);

accessorPropertyAttributesAreCorrect(newObj, "foo2", getFunc, setFunc, "setVerifyHelpProp", true, true);
