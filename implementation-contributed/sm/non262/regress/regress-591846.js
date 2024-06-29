// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function check(obj, name, value, readonly) {
    // Start with a non-configurable, writable data property implemented via
    // js::PropertyOp getter and setter.
    var pd = Object.getOwnPropertyDescriptor(obj, name);

    assert.sameValue(pd.configurable, false, "non-configurable " + name);
    assert.sameValue(pd.writable, !readonly, "writable " + name);

    try {
        // Do not allow a transition from js::PropertyOp to writable js::Value
        // data property.
        Object.defineProperty(obj, name, {writable: true});
        assert.sameValue(0, 1);
    } catch (e) {
        assert.sameValue('' + e, "TypeError: can't redefine non-configurable property '" + name + "'");
    }

    if (!readonly) {
        try {
            // Do not allow the property denoted by name to become a true data
            // property via a descriptor that preserves the native property's
            // writable attribute.
            Object.defineProperty(obj, name, {value: value});
            assert.sameValue(0, 1);
        } catch (e) {
            assert.sameValue('' + e, "TypeError: can't redefine non-configurable property '" + name + "'");
        }
    }

    try {
        // Do not allow the property to be frozen at some bogus value.
        Object.defineProperty(obj, name, {value: "bogus", writable: false});
        assert.sameValue(0, 1);
    } catch (e) {
        assert.sameValue('' + e, "TypeError: can't redefine non-configurable property '" + name + "'");
    }

    // Now make name non-writable.
    Object.defineProperty(obj, name, {writable: false})

    // Assert that the right getter result "stuck".
    assert.sameValue(obj[name], value);

    // Test that it is operationally non-writable now.
    obj[name] = "eek!";
    assert.sameValue(obj[name], value);
}

// Reset RegExp.leftContext to the empty string.
/x/.test('x');

var d = Object.getOwnPropertyDescriptor(RegExp, "leftContext");
assert.sameValue(d.set, undefined);
assert.sameValue(typeof d.get, "function");
assert.sameValue(d.enumerable, true);
assert.sameValue(d.configurable, false);
assert.sameValue(d.get.call(RegExp), "");

