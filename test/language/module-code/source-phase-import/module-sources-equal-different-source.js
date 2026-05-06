// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-modulesourcesequal
description: >
  Two different ModuleSource objects (even with same text) produce different namespaces.
info: |
  ModuleSourcesEqual ( left, right )

  1. Assert: left.[[ModuleSource]] is not ~empty~.
  2. Assert: right.[[ModuleSource]] is not ~empty~.
  3. If left.[[ModuleSource]] is not right.[[ModuleSource]], return *false*.
  4. Return *true*.

  Two ModuleSource objects created with different ids have different
  [[ModuleSource]] objects, so ModuleSourcesEqual returns false. This means
  they map to different Module Records and produce different namespaces.
features: [source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src1 = $262.createModuleSource('export var x = 1;', baseId + 'mse-diff-a');
var src2 = $262.createModuleSource('export var x = 1;', baseId + 'mse-diff-b');

asyncTest(async function () {
  var ns1 = await import(src1);
  var ns2 = await import(src2);
  assert.notSameValue(ns1, ns2,
    'Different ModuleSource objects should produce different namespaces (ModuleRequestsEqual is false)');
});
