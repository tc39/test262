// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  When the file-system module is imported first by string specifier, a later
  source import of a ModuleSource with the same id unifies with it.
info: |
  HostLoadImportedModule invariant (condition 2 of the equality rule):

  If moduleRequest1.[[Specifier]] is a String, and
  ModuleSourcesEqual(moduleRequest2.[[Specifier]], module1.[[SourceRecord]])
  is true, then module1 must equal module2.

  Additionally, the standalone constraint requires that when
  moduleRequest.[[Specifier]] is a Module Source Record,
  ModuleSourcesEqual(module.[[SourceRecord]], moduleRequest.[[Specifier]])
  must be true.

  Here the file-system module (exporting source = "file") is imported first
  by string specifier (moduleRequest1). A ModuleSource is then created with
  the same id (moduleRequest2). Per the $262.createModuleSource contract,
  same id = same Module Record, so the created ModuleSource's
  [[ModuleSourceRecord]] equals the file module's [[SourceRecord]]. The
  source import must therefore unify with the already-loaded file module.
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

asyncTest(async function () {
  // Import the file-system module first -- this populates the module map.
  var nsFile = await import('./import-source-order_FIXTURE.js');
  assert.sameValue(nsFile.source, 'file',
    'File-system module should export source = "file"');

  // Discover the host-assigned id for this module via import.meta.moduleId.
  var hostId = nsFile.moduleId;
  assert.sameValue(typeof hostId, 'string',
    'The fixture should export its import.meta.moduleId as a string');

  // Create a ModuleSource with that same id but different source text.
  var inlineSrc = $262.createModuleSource(
    'export var source = "inline";',
    hostId
  );

  // Import the created ModuleSource with the same id second.
  // It should unify with the already-loaded file-system module.
  var nsInline = await import(inlineSrc);
  assert.sameValue(nsInline.source, 'file',
    'Created ModuleSource with same id should unify with the already-loaded file module');

  assert.sameValue(nsFile, nsInline,
    'Both imports should return the same namespace object');
});
