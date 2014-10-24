// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-c-4
description: >
    Object.freeze - all own properties of 'O' are not writable and not
    configurable
includes: [propertyHelper.js]
---*/

var obj = {};
var resultSetFun = false;

Object.defineProperty(obj, "foo1", {
    value: 10,
    writable: false,
    enumerable: true,
    configurable: false
});

function get_func() {
    return 10;
}

function set_func() {
    resultSetFun = true;
}

Object.defineProperty(obj, "foo2", {
    get: get_func,
    set: set_func,
    enumerable: true,
    configurable: true
});

Object.freeze(obj);

if (isConfigurable(obj, "foo2")) {
    $ERROR('Expected obj["foo2"] to not be configurable.');
}

if (obj.foo2 !== 10) {
    $ERROR('Expected obj["foo2"] get() to return 10, actually ', obj.foo2);
}

obj.foo2 = 12;
if (!resultSetFun) {
    $ERROR('Expected obj["foo2"] set() to be called, but was not.');
}

if (!isEnumerable(obj, "foo2")) {
    $ERROR('Expected obj["foo2"] to be enumerable.');
}

var desc1 = Object.getOwnPropertyDescriptor(obj, "foo1");
if (desc1.configurable || desc1.writable) {
    $ERROR('Expected obj["foo1"] to be non-writable, non-configurable; actually ' + JSON.stringify(desc1));
}

var desc2 = Object.getOwnPropertyDescriptor(obj, "foo2");
if (desc2.configurable || desc2.writable) {
    $ERROR('Expected obj["foo2"] to be non-writable, non-configurable; actually ' + JSON.stringify(desc2));
}

dataPropertyAttributesAreCorrect(obj, "foo1", 10, false, true, false);
