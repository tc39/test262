// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-ContinueDynamicImport
description: >
  import.source(moduleSource) returns the same ModuleSource object.
info: |
  ContinueDynamicImport ( promiseCapability, phase, moduleCompletion )

  3. If phase is ~source~, then
    a. Let moduleSource be module.[[SourceRecord]].[[ModuleSource]].
    b. If moduleSource is ~empty~, then
      i. Perform ! Call(promiseCapability.[[Reject]], ..., « a new SyntaxError »).
    c. Else,
      i. Perform ! Call(promiseCapability.[[Resolve]], ..., « moduleSource »).

  HostLoadImportedModule constraint:

  If moduleRequest.[[Specifier]] is a Module Source Record, then
  ModuleSourcesEqual(module.[[SourceRecord]], moduleRequest.[[Specifier]])
  must be true.

  Since ModuleSourcesEqual checks [[ModuleSource]] object identity, and
  ContinueDynamicImport resolves with module.[[SourceRecord]].[[ModuleSource]],
  import.source(src) must return src itself.

  Tested with both $262.createModuleSource and the import source declaration.
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

import source srcDecl from '<module source>';

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var srcCreated = $262.createModuleSource('export var x = 1;', baseId + 'import-source-identity');

asyncTest(async function () {
  // import.source() of a created ModuleSource returns the same object.
  var srcFromCreated = await import.source(srcCreated);
  assert.sameValue(srcFromCreated, srcCreated,
    'import.source(createdModuleSource) should return the same ModuleSource object');

  // import.source() of a declared source binding returns the same object.
  var srcFromDecl = await import.source(srcDecl);
  assert.sameValue(srcFromDecl, srcDecl,
    'import.source(declaredModuleSource) should return the same ModuleSource object');
});
