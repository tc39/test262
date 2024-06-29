// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-object-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 430133;
var summary = 'ES5 Object.defineProperty(O, P, Attributes)';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var o = [];
Object.defineProperty(o, 0, { value: 17 });
var desc = Object.getOwnPropertyDescriptor(o, 0);
assert.sameValue(desc !== undefined, true);
assert.sameValue(desc.value, 17);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, false);
assert.sameValue(desc.writable, false);

desc = Object.getOwnPropertyDescriptor(o, "length");
assert.sameValue(desc !== undefined, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, false);
assert.sameValue(desc.writable, true);
assert.sameValue(desc.value, 1);
assert.sameValue(o.length, 1);

Object.defineProperty(o, "foobar",
                      { value: 42, enumerable: false, configurable: true });
assert.sameValue(o.foobar, 42);
desc = Object.getOwnPropertyDescriptor(o, "foobar");
assert.sameValue(desc !== undefined, true);
assert.sameValue(desc.value, 42);
assert.sameValue(desc.configurable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.writable, false);

var called = false;
o = { set x(a) { called = true; } };
Object.defineProperty(o, "x", { get: function() { return "get"; } });
desc = Object.getOwnPropertyDescriptor(o, "x");
assert.sameValue("set" in desc, true);
assert.sameValue("get" in desc, true);
assert.sameValue(called, false);
o.x = 13;
assert.sameValue(called, true);

var toSource = Object.prototype.toSource || function() { };
toSource.call(o); // a test for this not crashing

var called = false;
var o =
  Object.defineProperty({}, "foo",
                        { get: function() { return 17; },
                          set: function(v) { called = true; } });

assert.sameValue(o.foo, 17);
o.foo = 42;
assert.sameValue(called, true);

/*
 * XXX need tests for Object.defineProperty(array, "length", { ... }) when we
 * support it!
 */

/******************************************************************************/

print("All tests passed!");
