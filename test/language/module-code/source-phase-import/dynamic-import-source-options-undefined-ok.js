// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  import(moduleSource, {}) and import(moduleSource, { with: undefined }) succeed.
info: |
  When the options argument is present but has no `with` property, or `with` is
  undefined, the import should proceed normally without error.
features: [source-phase-imports, esm-phase-imports, import-attributes]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'options-undef');

asyncTest(async function () {
  // Options present but no `with` property
  var ns1 = await import(src, {});
  assert.sameValue(ns1.x, 1, 'import with empty options should succeed');

  // `with` property is explicitly undefined
  var ns2 = await import(src, { with: undefined });
  assert.sameValue(ns2.x, 1, 'import with { with: undefined } should succeed');
});
