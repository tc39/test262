// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  import.meta.moduleId reflects the id passed to $262.createModuleSource;
  import.meta.instanceId is a unique integer per module instance.
info: |
  Per the importMetaHook contract, the host sets import.meta.moduleId to the
  id passed to $262.createModuleSource, and import.meta.instanceId to an
  auto-incrementing integer. Two modules with different ids have different
  moduleId values. Two imports of the same ModuleSource share the same moduleId.
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var idA = baseId + 'module-id-a';
var idB = baseId + 'module-id-b';

var src1 = $262.createModuleSource(
  'export var moduleId = import.meta.moduleId; export var instanceId = import.meta.instanceId;',
  idA
);

var src2 = $262.createModuleSource(
  'export var moduleId = import.meta.moduleId; export var instanceId = import.meta.instanceId;',
  idB
);

asyncTest(async function () {
  var ns1 = await import(src1);
  assert.sameValue(ns1.moduleId, idA,
    'import.meta.moduleId should be the id passed to createModuleSource');
  assert.sameValue(typeof ns1.instanceId, 'number',
    'import.meta.instanceId should be a number');

  var ns2 = await import(src2);
  assert.sameValue(ns2.moduleId, idB,
    'import.meta.moduleId should be the id passed to createModuleSource');

  assert.notSameValue(ns1.moduleId, ns2.moduleId,
    'Two modules with different ids should have different moduleId values');
  assert.notSameValue(ns1.instanceId, ns2.instanceId,
    'Two different modules should have different instanceId values');

  // Importing the same source again returns the same namespace --
  // and therefore the same moduleId and instanceId.
  var ns1Again = await import(src1);
  assert.sameValue(ns1Again, ns1,
    'Re-importing the same ModuleSource should return the same namespace');
  assert.sameValue(ns1Again.moduleId, ns1.moduleId,
    'moduleId should be stable across re-imports');
  assert.sameValue(ns1Again.instanceId, ns1.instanceId,
    'instanceId should be stable across re-imports');
});
