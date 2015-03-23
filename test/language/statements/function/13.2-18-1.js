// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 13.2-18-1
description: >
    Function Object has 'prototype' as its own property, it is not
    enumerable and does not invoke the setter defined on
    Function.prototype (Step 18)
includes: [assert.js, propertyHelper.js]
---*/

try {
    var getFunc = function () {
        return 100;
    };

    var data = "data";
    var setFunc = function (value) {
        data = value;
    };
    Object.defineProperty(Function.prototype, "prototype", {
        get: getFunc,
        set: setFunc,
        configurable: true
    });

    var fun = function () { };

    assert.notSameValue(fun.prototype, 100);
    assert.sameValue(fun.prototype.toString(), "[object Object]");

    verifyNotEnumerable(fun, "prototype");
    verifyWritable(fun, "prototype");
    verifyNotConfigurable(fun, "prototype");

    assert.sameValue(data, "data");
} finally {
    delete Function.prototype.prototype;
}
