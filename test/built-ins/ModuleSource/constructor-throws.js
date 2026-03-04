// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-modulesource
description: >
  ModuleSource() throws a TypeError.
info: |
  ModuleSource ( )

  1. Throw a *TypeError* exception.

  The ModuleSource constructor is not intended to be called directly.
  It always throws a TypeError.
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

// Get a reference to the ModuleSource constructor via the prototype chain.
var src = $262.createModuleSource('export var x = 1;', baseId + 'ctor-throws');
var ModuleSource = Object.getPrototypeOf(src).constructor;

assert.sameValue(typeof ModuleSource, 'function',
  'ModuleSource should be a function');

assert.throws(TypeError, function () {
  ModuleSource();
}, 'Calling ModuleSource() without new should throw TypeError');

assert.throws(TypeError, function () {
  new ModuleSource();
}, 'Calling new ModuleSource() should throw TypeError');
