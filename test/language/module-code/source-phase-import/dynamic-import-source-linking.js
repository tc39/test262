// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  A ModuleSource whose source text has static imports correctly links and evaluates.
info: |
  When a ModuleSource contains import declarations, the host must resolve those
  specifiers against the module's id and link the dependency graph before
  evaluation. This test creates a dependency module first (loading it into
  the module map), then creates a module that imports from it by id.
features: [source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var depId = baseId + 'linking-dep';
var mainId = baseId + 'linking-main';

// Create the dependency module first.
var depSrc = $262.createModuleSource(
  'export var dep = "dependency";',
  depId
);

// Create the main module that imports from the dependency by its id.
var mainSrc = $262.createModuleSource(
  'import { dep } from "' + depId + '"; export { dep };',
  mainId
);

asyncTest(async function () {
  // Ensure the dependency is loaded into the module map.
  var nsDep = await import(depSrc);
  assert.sameValue(nsDep.dep, 'dependency', 'dependency module should export dep');

  // Import the main module which depends on the dependency.
  var nsMain = await import(mainSrc);
  assert.sameValue(nsMain.dep, 'dependency',
    'main module should re-export the dep binding from its dependency');
});
