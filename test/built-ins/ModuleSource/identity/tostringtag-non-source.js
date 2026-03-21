// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%abstractmodulesource%25.prototype.@@tostringtag
description: >
  The @@toStringTag getter returns undefined for non-objects and objects
  without a [[ModuleSourceRecord]] internal slot.
info: |
  get %AbstractModuleSource%.prototype [ %Symbol.toStringTag% ]

  1. Let O be the this value.
  2. If O is not an Object, return undefined.
  3. Let module be GetModuleSourceRecord(O).
  4. If module is ~not-a-source~, return undefined.
  ...
features: [source-phase-imports, esm-phase-imports]
flags: [module]
---*/

assert.sameValue(typeof $262.AbstractModuleSource, 'function');

var getter = Object.getOwnPropertyDescriptor(
  $262.AbstractModuleSource.prototype, Symbol.toStringTag
).get;

// Non-object this values return undefined.
assert.sameValue(getter.call(undefined), undefined,
  'undefined this should return undefined');
assert.sameValue(getter.call(null), undefined,
  'null this should return undefined');
assert.sameValue(getter.call(42), undefined,
  'number this should return undefined');
assert.sameValue(getter.call('string'), undefined,
  'string this should return undefined');
assert.sameValue(getter.call(true), undefined,
  'boolean this should return undefined');
assert.sameValue(getter.call(Symbol()), undefined,
  'symbol this should return undefined');

// Objects without [[ModuleSourceRecord]] return undefined.
assert.sameValue(getter.call({}), undefined,
  'plain object should return undefined');
assert.sameValue(getter.call([]), undefined,
  'array should return undefined');
assert.sameValue(getter.call(function () {}), undefined,
  'function should return undefined');
