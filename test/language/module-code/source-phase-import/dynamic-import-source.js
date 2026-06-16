// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  import(moduleSource) resolves to a module namespace object with accessible bindings.
info: |
  When import() is called with a ModuleSource object (an object with a
  [[ModuleSourceRecord]] internal slot), the host uses that Module Source
  Record to load and evaluate the module, returning the module namespace.

  Tested with both $262.createModuleSource and the import source declaration.
features: [source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

import source srcDecl from '<module source>';

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var srcCreated = $262.createModuleSource(
  'export var x = 42; export var y = "hello";',
  baseId + 'dynamic-import'
);

asyncTest(async function () {
  // Via $262.createModuleSource
  var ns = await import(srcCreated);
  assert.sameValue(ns.x, 42, 'exported binding x should be 42');
  assert.sameValue(ns.y, 'hello', 'exported binding y should be "hello"');

  // Via import source declaration -- the binding is a ModuleSource object
  assert.sameValue(typeof srcDecl, 'object', 'import source binding should be an object');
  assert(srcDecl instanceof $262.AbstractModuleSource,
    'import source binding should be an instance of AbstractModuleSource');
  var nsDecl = await import(srcDecl);
  assert.sameValue(typeof nsDecl, 'object', 'namespace from declared source should be an object');
});
