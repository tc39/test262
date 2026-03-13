// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  import(moduleSource) triggers evaluation from script context; side effects
  are observable.
info: |
  When a ModuleSource is dynamically imported from a script, the module is
  evaluated and its side effects become observable. This test runs as a script
  (not a module) to verify that import() of a ModuleSource works in script
  context. It uses a fixture to discover the host's base id.
features: [source-phase-imports, esm-phase-imports]
flags: [async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

asyncTest(async function () {
  var fixture = await import('./base-id_FIXTURE.js');
  var baseId = fixture.moduleId.slice(0, fixture.moduleId.lastIndexOf('/') + 1);

  var src = $262.createModuleSource(
    'export var counter = 0; counter++;',
    baseId + 'evaluates'
  );

  var ns = await import(src);
  assert.sameValue(ns.counter, 1,
    'Module should have been evaluated, incrementing counter from 0 to 1');
});
