// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%abstractmodulesource%25.prototype.@@tostringtag
description: >
  The @@toStringTag property on %AbstractModuleSource%.prototype has the
  correct property descriptor: accessor with set=undefined,
  enumerable=false, configurable=true; the getter's name is
  "get [Symbol.toStringTag]".
info: |
  get %AbstractModuleSource%.prototype [ %Symbol.toStringTag% ]

  This property has the attributes { [[Enumerable]]: false, [[Configurable]]: true }.
  The initial value of the "name" property of this function is "get [Symbol.toStringTag]".
features: [source-phase-imports, esm-phase-imports]
flags: [module]
---*/

assert.sameValue(typeof $262.AbstractModuleSource, 'function');

var desc = Object.getOwnPropertyDescriptor(
  $262.AbstractModuleSource.prototype, Symbol.toStringTag
);

assert.sameValue(typeof desc.get, 'function',
  '@@toStringTag should be an accessor property with a get function');
assert.sameValue(desc.set, undefined,
  '@@toStringTag set accessor should be undefined');
assert.sameValue(desc.enumerable, false,
  '@@toStringTag should not be enumerable');
assert.sameValue(desc.configurable, true,
  '@@toStringTag should be configurable');

// The getter's name property.
assert.sameValue(desc.get.name, 'get [Symbol.toStringTag]',
  'The getter name should be "get [Symbol.toStringTag]"');
