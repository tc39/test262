// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  import(moduleSource, "string") rejects with TypeError.
info: |
  When import() is called with a second argument that is not an object
  (and is not undefined), it must reject with a TypeError.

  2.1.1.1 EvaluateImportCall ( specifierExpression [ , optionsExpression ] )

  ...
  6. If optionsExpression is present, then
    ...
    e. If the Type of options is not Object, then
      i. Perform ! Call(promiseCapability.[[Reject]], undefined,
         a newly created TypeError object).
      ii. Return promiseCapability.[[Promise]].
features: [source-phase-imports, esm-phase-imports, import-attributes]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'options-non-obj');

asyncTest(async function () {
  await assert.throwsAsync(TypeError, function () {
    return import(src, 'string');
  }, 'import with a string options argument should reject with TypeError');

  await assert.throwsAsync(TypeError, function () {
    return import(src, 42);
  }, 'import with a number options argument should reject with TypeError');

  await assert.throwsAsync(TypeError, function () {
    return import(src, true);
  }, 'import with a boolean options argument should reject with TypeError');
});
