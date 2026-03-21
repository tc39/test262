// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-source-objects
description: >
  ModuleSource instances have the correct prototype chain.
info: |
  A ModuleSource object has %ModuleSource.prototype% as its [[Prototype]],
  which in turn has %AbstractModuleSource.prototype% as its [[Prototype]].
features: [source-phase-imports, esm-phase-imports]
flags: [module]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');
assert.sameValue(typeof $262.AbstractModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'proto-chain');

var srcProto = Object.getPrototypeOf(src);
var abstractProto = $262.AbstractModuleSource.prototype;

// ModuleSource instance's [[Prototype]] is %ModuleSource.prototype%
assert.notSameValue(srcProto, abstractProto,
  'ModuleSource.prototype should be distinct from AbstractModuleSource.prototype');

// %ModuleSource.prototype%'s [[Prototype]] is %AbstractModuleSource.prototype%
assert.sameValue(Object.getPrototypeOf(srcProto), abstractProto,
  'ModuleSource.prototype.[[Prototype]] should be AbstractModuleSource.prototype');

// %AbstractModuleSource.prototype%'s [[Prototype]] is %Object.prototype%
assert.sameValue(Object.getPrototypeOf(abstractProto), Object.prototype,
  'AbstractModuleSource.prototype.[[Prototype]] should be Object.prototype');

// The instance is an instanceof AbstractModuleSource
assert(src instanceof $262.AbstractModuleSource,
  'ModuleSource instance should be instanceof AbstractModuleSource');
