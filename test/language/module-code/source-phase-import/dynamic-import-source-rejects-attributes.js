// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  import(moduleSource, { with: { type: "json" } }) rejects with TypeError.
info: |
  Import attributes are not supported for source imports. When import() is
  called with a ModuleSource and a non-empty `with` attribute, it must reject
  with a TypeError.
features: [source-phase-imports, source-phase-imports-module-source, import-attributes]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'rejects-attrs');

asyncTest(async function () {
  await assert.throwsAsync(TypeError, function () {
    return import(src, { with: { type: 'json' } });
  }, 'import with attributes on a ModuleSource should reject with TypeError');
});
