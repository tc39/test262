// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  Different instances of the same ModuleSource (in different realms) each
  receive their own distinct import.meta object, even though moduleId is
  the same.
info: |
  HostGetImportMetaProperties creates a new import.meta object for each
  module instance. When the same ModuleSource is imported in two different
  realms, each realm creates a separate Module Record and therefore a
  separate import.meta object. The moduleId is the same (derived from the
  source's id), but the import.meta objects are distinct.
features: [source-phase-imports, esm-phase-imports, cross-realm]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource(
  'export var meta = import.meta;',
  baseId + 'meta-distinct'
);

var otherRealm = $262.createRealm();
otherRealm.global.src = src;

otherRealm.evalScript(
  'globalThis.testPromise = (async () => {' +
  '  globalThis.ns = await import(src);' +
  '})();'
);

asyncTest(async function () {
  var nsHere = await import(src);
  await otherRealm.global.testPromise;
  var nsOther = otherRealm.global.ns;

  // Both instances export the same moduleId.
  assert.sameValue(nsHere.meta.moduleId, nsOther.meta.moduleId,
    'Both instances should have the same import.meta.moduleId');

  // But the import.meta objects themselves are distinct.
  assert.notSameValue(nsHere.meta, nsOther.meta,
    'Different instances of the same source should have distinct import.meta objects');
});
