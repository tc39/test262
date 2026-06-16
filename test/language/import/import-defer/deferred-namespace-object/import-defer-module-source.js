// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-getmodulenamespace
description: >
  import.defer(moduleSource) returns a deferred namespace object for the module.
info: |
  GetModuleNamespace ( _module_, _phase_ )
    1. ...
    1. If _phase_ is ~defer~, let _namespace_ be _module_.[[DeferredNamespace]],
       otherwise let _namespace_ be _module_.[[Namespace]].
    1. If _namespace_ is ~empty~, then
      1. ...
      1. Set _namespace_ to ModuleNamespaceCreate(_module_, _unambiguousNames_, _phase_).
    1. Return _namespace_.

  When import.defer() is called with a ModuleSource object, the host resolves
  the module via the ModuleSource's id and returns a deferred namespace.
  Accessing a property on the deferred namespace triggers evaluation.
  The deferred namespace is distinct from the eager namespace.
  Repeated import.defer() of the same ModuleSource returns the same object.
features: [import-defer, source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource(
  'export var foo = 1; export var bar = 2;',
  baseId + 'defer-module-source'
);

asyncTest(async function () {
  // import.defer() of a ModuleSource returns a deferred namespace.
  var nsDeferred1 = await import.defer(src);
  assert.sameValue(typeof nsDeferred1, 'object',
    'import.defer(moduleSource) should return an object');

  // Repeated import.defer() returns the same deferred namespace.
  var nsDeferred2 = await import.defer(src);
  assert.sameValue(nsDeferred1, nsDeferred2,
    'import.defer(moduleSource) twice should return the same deferred namespace');

  // The deferred namespace has the correct @@toStringTag.
  assert.sameValue(nsDeferred1[Symbol.toStringTag], 'Deferred Module',
    'Deferred namespace @@toStringTag should be "Deferred Module"');

  // Accessing a property triggers evaluation and returns the exported value.
  assert.sameValue(nsDeferred1.foo, 1,
    'Accessing a property on the deferred namespace should trigger evaluation');
  assert.sameValue(nsDeferred1.bar, 2,
    'All exports should be accessible on the deferred namespace');

  // The eager namespace (via import()) is distinct from the deferred one.
  var nsEager = await import(src);
  assert.notSameValue(nsDeferred1, nsEager,
    'Deferred namespace should be distinct from eager namespace');
  assert.sameValue(nsEager.foo, 1,
    'Eager namespace should have the same exported values');
});
