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
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/* Object.isFrozen */

assert.sameValue(Object.isFrozen({}), false);

assert.sameValue(Object.isFrozen(Object.preventExtensions({})), true);

var o = Object.defineProperty({}, 'x', { writable:true, configurable:true });
Object.preventExtensions(o);
assert.sameValue(Object.isFrozen(o), false);

var o = Object.defineProperty({}, 'x', { writable:false, configurable:true });
Object.preventExtensions(o);
assert.sameValue(Object.isFrozen(o), false);

var o = Object.defineProperty({}, 'x', { writable:true, configurable:false });
Object.preventExtensions(o);
assert.sameValue(Object.isFrozen(o), false);

var o = Object.defineProperty({}, 'x', { writable:false, configurable:false });
assert.sameValue(Object.isFrozen(o), false);

var o = Object.defineProperty({}, 'x', { writable:false, configurable:false });
Object.preventExtensions(o);
assert.sameValue(Object.isFrozen(o), true);

var o = Object.defineProperties({}, { x: { writable:true,  configurable:true },
                                      y: { writable:false, configurable:false } });
Object.preventExtensions(o);
assert.sameValue(Object.isFrozen(o), false);

var o = Object.defineProperties({}, { x: { writable:false, configurable:false },
                                      y: { writable:true,  configurable:true } });
Object.preventExtensions(o);
assert.sameValue(Object.isFrozen(o), false);

var o = Object.defineProperties({}, { x: { writable:true,  configurable:true },
                                      y: { writable:true,  configurable:true } });
Object.preventExtensions(o);
assert.sameValue(Object.isFrozen(o), false);

