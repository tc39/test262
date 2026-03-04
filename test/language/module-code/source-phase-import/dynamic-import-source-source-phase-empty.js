// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-ContinueDynamicImport
description: >
  import.source() of a module whose [[ModuleSource]] is ~empty~ rejects with SyntaxError.
info: |
  ContinueDynamicImport ( promiseCapability, phase, moduleCompletion )

  ...
  3. If phase is ~source~, then
    a. Let moduleSource be module.[[SourceRecord]].[[ModuleSource]].
    b. If moduleSource is ~empty~, then
      i. Perform ! Call(promiseCapability.[[Reject]], undefined, « a new SyntaxError »).
    c. Else,
      i. Perform ! Call(promiseCapability.[[Resolve]], undefined, « moduleSource »).
    d. Return ~unused~.

  A JSON module (imported via a string specifier with the "json" import
  attribute) is backed by a Synthetic Module Record whose [[ModuleSource]] is
  ~empty~, so requesting its source phase must reject with SyntaxError.
features: [source-phase-imports, source-phase-imports-module-source, import-attributes, json-modules]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

asyncTest(async function () {
  await assert.throwsAsync(SyntaxError, function () {
    return import.source('./dynamic-import-source-source-phase-empty_FIXTURE.json', { with: { type: 'json' } });
  }, 'import.source() of a JSON module should reject with SyntaxError because its [[ModuleSource]] is ~empty~');
});
