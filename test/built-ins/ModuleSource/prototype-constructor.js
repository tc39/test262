// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%modulesource%.prototype.constructor
description: >
  %ModuleSource%.prototype.constructor is %ModuleSource%.
info: |
  The initial value of %ModuleSource%.prototype.constructor is %ModuleSource%.
features: [source-phase-imports, esm-phase-imports]
flags: [module]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'proto-ctor');
var ModuleSourcePrototype = Object.getPrototypeOf(src);
var ModuleSource = ModuleSourcePrototype.constructor;

assert.sameValue(typeof ModuleSource, 'function',
  '%ModuleSource%.prototype.constructor should be a function');

// The constructor property on the prototype should point back to %ModuleSource%.
assert.sameValue(ModuleSourcePrototype.constructor, ModuleSource,
  '%ModuleSource%.prototype.constructor should be %ModuleSource%');

// Calling the constructor should throw TypeError (per sec-modulesource).
assert.throws(TypeError, function () {
  ModuleSource();
}, '%ModuleSource% should throw TypeError when called');
