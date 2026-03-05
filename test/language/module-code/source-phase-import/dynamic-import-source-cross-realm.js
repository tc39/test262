// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  A ModuleSource created in one realm can be dynamically imported in another
  realm. The target realm gets a fresh module instance with the same moduleId.
  Importing the same source twice in the target realm returns the same namespace.
info: |
  PR #61 removes the prototype chain check from EvaluateImportCall that
  previously rejected cross-realm ModuleSource objects. The removed code
  verified the ModuleSource's grandparent prototype was the current realm's
  %AbstractModuleSource.prototype%, effectively a same-realm check.

  With this change, a source import in one realm and imported in another realm
  will have a unique instance and instance identity in that other realm. Its
  ID string will define into the realm's module registry when its ID has not
  previously been defined.

  The ModuleSource retains its Module Source Record identity across realms.
  The HostLoadImportedModule invariant requires that if the [[ModuleSource]]
  object is the same, the resolved Module Record must be the same within
  that realm.

  Additionally, the source's ID string defines into the target realm's
  module registry when that ID has not previously been defined. A subsequent
  string-based import of the same ID in the target realm must resolve to the
  same Module Record (HostLoadImportedModule condition 2: when one specifier
  is a String and ModuleSourcesEqual matches the other's source record).
features: [source-phase-imports, esm-phase-imports, cross-realm]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var idA = baseId + 'cross-realm-a';
var idB = baseId + 'cross-realm-b';

var srcA = $262.createModuleSource(
  'export var moduleId = import.meta.moduleId;',
  idA
);

var srcB = $262.createModuleSource(
  'export var moduleId = import.meta.moduleId;',
  idB
);

var otherRealm = $262.createRealm();

// Pass ModuleSource objects to the other realm via its global.
otherRealm.global.srcA = srcA;
otherRealm.global.srcB = srcB;

// Pass the id string so the other realm can also import by string.
otherRealm.global.idA = idA;

// Import both sources in the other realm, then re-import srcA by source
// and by string id.
otherRealm.evalScript(
  'globalThis.testPromise = (async () => {' +
  '  globalThis.nsA = await import(srcA);' +
  '  globalThis.nsB = await import(srcB);' +
  '  globalThis.nsA2 = await import(srcA);' +
  '  globalThis.nsAById = await import(idA);' +
  '})();'
);

asyncTest(async function () {
  await otherRealm.global.testPromise;

  var nsA = otherRealm.global.nsA;
  var nsB = otherRealm.global.nsB;
  var nsA2 = otherRealm.global.nsA2;
  var nsAById = otherRealm.global.nsAById;

  // 1. Verify import.meta.moduleId reflects the id from createModuleSource.
  assert.sameValue(nsA.moduleId, idA,
    'import.meta.moduleId in other realm should match idA');
  assert.sameValue(nsB.moduleId, idB,
    'import.meta.moduleId in other realm should match idB');

  // 2. Verify the two namespaces are distinct.
  assert.notSameValue(nsA, nsB,
    'Namespaces from different sources in the other realm should be distinct');

  // 3. Importing srcA a second time in the same realm should return the same
  //    namespace (same Module Record, idempotent within a realm).
  assert.sameValue(nsA, nsA2,
    'Importing the same ModuleSource twice in the other realm should return the same namespace');

  // 4. The source's ID string defines into the other realm's module registry.
  //    A subsequent string-based import of the same ID in the other realm
  //    should resolve to the same Module Record.
  assert.sameValue(nsAById, nsA,
    'Importing by string ID in the other realm should return the same namespace as importing the source');
  assert.sameValue(nsAById.moduleId, idA,
    'String-based import in the other realm should have the same moduleId');

  // 5. Import srcA in the current realm too — it should be a different
  //    instance (different realm = different module registry).
  var nsAHere = await import(srcA);
  assert.sameValue(nsAHere.moduleId, idA,
    'import.meta.moduleId in current realm should also match idA');
  assert.notSameValue(nsA, nsAHere,
    'Namespace from the other realm should be a different instance than the current realm namespace');
});
