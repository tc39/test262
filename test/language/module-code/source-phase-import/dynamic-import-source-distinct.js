// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  Two distinct ModuleSource objects with the same source text produce different namespaces.
info: |
  Two ModuleSource objects created with different ids have different
  host-defined keys and therefore map to different Module Records. Different
  Module Records produce different module namespace objects.
features: [source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src1 = $262.createModuleSource('export var x = 1;', baseId + 'distinct-a');
var src2 = $262.createModuleSource('export var x = 1;', baseId + 'distinct-b');

asyncTest(async function () {
  var ns1 = await import(src1);
  var ns2 = await import(src2);
  assert.notSameValue(ns1, ns2,
    'Distinct ModuleSource objects should produce different namespace objects');
});
