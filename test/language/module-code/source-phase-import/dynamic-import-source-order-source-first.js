// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  When a created ModuleSource is imported first, a later string import
  via the same id unifies with it.
info: |
  HostLoadImportedModule invariant (condition 3 of the equality rule):

  If moduleRequest2.[[Specifier]] is a String, and
  ModuleSourcesEqual(moduleRequest1.[[Specifier]], module2.[[SourceRecord]])
  is true, then module1 must equal module2.

  Here a ModuleSource (exporting source = "first") is imported first via
  source import (moduleRequest1). Then the same id is imported as a string
  (moduleRequest2). Per the $262.createModuleSource contract, the id is the
  module's registry key, so the string import resolves to the same Canonical
  ModuleRequest Record. The source import's Module Source Record satisfies
  ModuleSourcesEqual with the resolved module's [[SourceRecord]], so both
  must be the same Module Record.
features: [source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var inlineId = baseId + 'order-source-first';

var inlineSrc = $262.createModuleSource(
  'export var source = "first"; export var moduleId = import.meta.moduleId;',
  inlineId
);

asyncTest(async function () {
  // Import the created ModuleSource first -- this populates the module map.
  var nsFirst = await import(inlineSrc);
  assert.sameValue(nsFirst.source, 'first',
    'Created ModuleSource should export source = "first"');
  assert.sameValue(nsFirst.moduleId, inlineId,
    'import.meta.moduleId should reflect the id passed to createModuleSource');

  // Import via the id string second -- should unify with the first.
  var nsSecond = await import(inlineId);
  assert.sameValue(nsSecond.source, 'first',
    'String import should unify with the already-loaded created module');

  assert.sameValue(nsFirst, nsSecond,
    'Both imports should return the same namespace object');
});
