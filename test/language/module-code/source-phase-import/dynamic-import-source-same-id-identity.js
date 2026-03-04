// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-HostLoadImportedModule
description: >
  Two createModuleSource calls with the same id return ModuleSource objects
  that share the same underlying Module Record, so importing either yields the
  same namespace.
info: |
  HostLoadImportedModule constraint:

  If moduleRequest.[[Specifier]] is a Module Source Record, then
  ModuleSourcesEqual(module.[[SourceRecord]], moduleRequest.[[Specifier]])
  must be true.

  ModuleSourcesEqual checks [[ModuleSource]] object identity. Combined with
  the host invariant (condition 4): when two source imports have
  ModuleSourcesEqual specifiers, they must resolve to the same Module Record.

  Per the $262.createModuleSource contract, two calls with the same id
  produce ModuleSource objects that share the same underlying Module Record
  identity (and thus the same [[ModuleSource]] object). Importing either
  must yield the same Module Record and therefore the same namespace.
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);
var sharedId = baseId + 'same-id-identity';

var src1 = $262.createModuleSource('export var x = 1;', sharedId);
var src2 = $262.createModuleSource('export var x = 1;', sharedId);

// The two ModuleSource objects share the same underlying Module Record,
// so they should be the same object (same [[ModuleSource]] on the shared
// Module Source Record).
assert.sameValue(src1, src2,
  'Two createModuleSource calls with the same id should return the same ModuleSource object');

asyncTest(async function () {
  var ns1 = await import(src1);
  var ns2 = await import(src2);
  assert.sameValue(ns1, ns2,
    'Importing two ModuleSource objects with the same id should yield the same namespace');
  assert.sameValue(ns1.x, 1, 'The module should export x = 1');
});
