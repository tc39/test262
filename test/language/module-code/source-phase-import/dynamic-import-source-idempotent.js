// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  import(moduleSource) twice with the same ModuleSource returns the same namespace.
info: |
  When the same ModuleSource object (same identity) is imported multiple times,
  the host returns the same Module Record. Because the same Module Record
  produces the same module namespace object, both import() calls resolve to
  the same namespace.

  Tested with both $262.createModuleSource and the import source declaration.
features: [source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

import source srcDecl from '<module source>';

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var srcCreated = $262.createModuleSource('export var x = 1;', baseId + 'idempotent');

asyncTest(async function () {
  // Via $262.createModuleSource
  var ns1 = await import(srcCreated);
  var ns2 = await import(srcCreated);
  assert.sameValue(ns1, ns2,
    'Importing the same created ModuleSource twice should return the same namespace');

  // Via import source declaration
  var ns3 = await import(srcDecl);
  var ns4 = await import(srcDecl);
  assert.sameValue(ns3, ns4,
    'Importing the same declared source twice should return the same namespace');
});
