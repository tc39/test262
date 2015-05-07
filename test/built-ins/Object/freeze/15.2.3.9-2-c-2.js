// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-c-2
description: >
    Object.freeze - The [[Configurable]] attribute of own accessor
    property of 'O' is set to false while other attributes are
    unchanged
includes: [propertyHelper.js]
---*/

var obj = {};

function get_func() {
    return 10;
}

var set_funcCalled = false;
function set_func() {
    set_funcCalled = true;
}

Object.defineProperty(obj, "foo", {
    get: get_func,
    set: set_func,
    enumerable: true,
    configurable: true
});

Object.freeze(obj);

assert(obj.hasOwnProperty("foo"));
verifyNotConfigurable(obj, "foo");

assert.sameValue(obj.foo, 10);

obj.foo = 12;
assert(set_funcCalled);

verifyEnumerable(obj, "foo");

var desc = Object.getOwnPropertyDescriptor(obj, "foo");
assert.sameValue(desc.configurable, false);
