// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-ContinueDynamicImport
description: >
  import.source() of a cross-realm ModuleSource returns the same ModuleSource
  object. The source identity is preserved across realms.
info: |
  ContinueDynamicImport ( promiseCapability, phase, moduleCompletion )

  3. If phase is ~source~, then
    a. Let moduleSource be module.[[SourceRecord]].[[ModuleSource]].
    b. If moduleSource is ~empty~, then
      i. Perform ! Call(promiseCapability.[[Reject]], ..., « a new SyntaxError »).
    c. Else,
      i. Perform ! Call(promiseCapability.[[Resolve]], ..., « moduleSource »).

  PR #61 removes the prototype chain check from EvaluateImportCall that
  previously rejected cross-realm ModuleSource objects. With the check removed,
  import.source(crossRealmSource) succeeds and resolves with the same
  [[ModuleSource]] object from the Module Source Record, since
  ModuleSourcesEqual checks [[ModuleSource]] object identity.
features: [source-phase-imports, source-phase-imports-module-source, cross-realm]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'cross-realm-source');

var otherRealm = $262.createRealm();
otherRealm.global.src = src;

// Perform import.source() in the other realm.
otherRealm.evalScript(
  'globalThis.testPromise = (async () => {' +
  '  globalThis.srcFromOther = await import.source(src);' +
  '})();'
);

asyncTest(async function () {
  await otherRealm.global.testPromise;

  var srcFromOther = otherRealm.global.srcFromOther;

  // import.source() should return the same ModuleSource object, regardless
  // of which realm performed the import.source() call.
  assert.sameValue(srcFromOther, src,
    'import.source(crossRealmSource) should return the same ModuleSource object');

  // Also verify import.source() in the current realm returns the same object.
  var srcFromHere = await import.source(src);
  assert.sameValue(srcFromHere, src,
    'import.source(src) in the current realm should also return the same object');

  assert.sameValue(srcFromOther, srcFromHere,
    'Both realms should see the same ModuleSource object identity');
});
