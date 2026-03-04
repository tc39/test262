// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-evaluate-import-call
description: >
  import(moduleSource, null) rejects with TypeError because null is not an Object.
info: |
  EvaluateImportCall ( specifierExpression, phase [, optionsExpression] )

  ...
  11. If specifier is an Object, then
    a. Let moduleSourceRecord be GetModuleSourceRecord(specifier).
    b. If moduleSourceRecord is not ~not-a-source~, then
      i. If options is not undefined, then
        1. If options is not an Object, then
          a. Perform ! Call(promiseCapability.[[Reject]], undefined,
             « a newly created TypeError object »).
          b. Return promiseCapability.[[Promise]].

  Since null is not undefined and not an Object, the import rejects with TypeError.
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'options-null');

asyncTest(async function () {
  await assert.throwsAsync(TypeError, function () {
    return import(src, null);
  }, 'import(moduleSource, null) should reject with TypeError');
});
