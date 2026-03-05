// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%abstractmodulesource%25.prototype.@@tostringtag
description: >
  Symbol.toStringTag getter returns "ModuleSource" for ModuleSource instances.
info: |
  get %AbstractModuleSource%.prototype [ %Symbol.toStringTag% ]

  1. Let O be the this value.
  2. If O is not an Object, return undefined.
  3. Let module be GetModuleSourceRecord(O).
  4. If module is ~not-a-source~, return undefined.
  5. Let name be module.[[ModuleSourceKind]].
  6. Assert: name is a String.
  7. Return name.

  For Source Text Module Records, [[ModuleSourceKind]] is "ModuleSource".
features: [source-phase-imports, esm-phase-imports]
flags: [module]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');
assert.sameValue(typeof $262.AbstractModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'tostringtag');

var toStringTag = src[Symbol.toStringTag];
assert.sameValue(toStringTag, 'ModuleSource',
  'Symbol.toStringTag should return "ModuleSource" for a ModuleSource instance');

// Verify via Object.prototype.toString
assert.sameValue(Object.prototype.toString.call(src), '[object ModuleSource]',
  'Object.prototype.toString should return "[object ModuleSource]"');

// Verify the getter is inherited from AbstractModuleSource.prototype
var getter = Object.getOwnPropertyDescriptor(
  $262.AbstractModuleSource.prototype, Symbol.toStringTag
).get;
assert.sameValue(typeof getter, 'function');
assert.sameValue(getter.call(src), 'ModuleSource',
  'The inherited @@toStringTag getter should return "ModuleSource" when called on a ModuleSource instance');
