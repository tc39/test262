// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  A ModuleSource created from syntactically invalid source text:
  import(moduleSource) rejects with SyntaxError.
info: |
  When a ModuleSource is created from source text that contains a syntax error,
  dynamically importing it must reject with a SyntaxError. The parse error is
  surfaced at import time.
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = ;', baseId + 'syntax-error');

asyncTest(async function () {
  await assert.throwsAsync(SyntaxError, function () {
    return import(src);
  }, 'Importing a ModuleSource with a syntax error should reject with SyntaxError');
});
