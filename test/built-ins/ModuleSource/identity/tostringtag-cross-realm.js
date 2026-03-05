// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%abstractmodulesource%25.prototype.@@tostringtag
description: >
  The @@toStringTag getter works on cross-realm ModuleSource objects because
  it uses a brand check ([[ModuleSourceRecord]] internal slot), not a
  prototype check.
info: |
  get %AbstractModuleSource%.prototype [ %Symbol.toStringTag% ]

  1. Let O be the this value.
  2. If O is not an Object, return undefined.
  3. Let module be GetModuleSourceRecord(O).
  4. If module is ~not-a-source~, return undefined.
  5. Let name be module.[[ModuleSourceKind]].
  6. Assert: name is a String.
  7. Return name.

  GetModuleSourceRecord checks for the [[ModuleSourceRecord]] internal slot,
  which is an object brand — it works regardless of which realm created the
  object. A ModuleSource from another realm still has the slot, so the getter
  returns "ModuleSource".
features: [source-phase-imports, source-phase-imports-module-source, cross-realm]
flags: [module]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');
assert.sameValue(typeof $262.AbstractModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var otherRealm = $262.createRealm();
var otherCreateModuleSource = otherRealm.global.$262.createModuleSource;

// Create a ModuleSource in the other realm.
var crossRealmSrc = otherCreateModuleSource('export var x = 1;', baseId + 'cross-realm-tag');

// The @@toStringTag getter from the current realm should still work on
// a cross-realm ModuleSource, because it uses the [[ModuleSourceRecord]]
// internal slot (brand check), not a prototype chain check.
var getter = Object.getOwnPropertyDescriptor(
  $262.AbstractModuleSource.prototype, Symbol.toStringTag
).get;

assert.sameValue(getter.call(crossRealmSrc), 'ModuleSource',
  'Current realm @@toStringTag getter should return "ModuleSource" for a cross-realm ModuleSource');

// Direct property access uses the other realm's prototype chain, so
// crossRealmSrc[Symbol.toStringTag] resolves through the other realm's
// AbstractModuleSource.prototype getter — which also works.
assert.sameValue(crossRealmSrc[Symbol.toStringTag], 'ModuleSource',
  'Direct @@toStringTag access on a cross-realm ModuleSource should return "ModuleSource"');

// Object.prototype.toString also works cross-realm.
assert.sameValue(Object.prototype.toString.call(crossRealmSrc), '[object ModuleSource]',
  'Object.prototype.toString should return "[object ModuleSource]" for a cross-realm ModuleSource');
