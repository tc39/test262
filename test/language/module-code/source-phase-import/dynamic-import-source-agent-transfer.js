// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-source-objects
description: >
  ModuleSource objects can be transferred to another agent via postObject.
  The child agent can import them and observe the correct import.meta.moduleId.
  Distinct ModuleSource objects remain distinct across agents, and importing
  the same ModuleSource twice returns the same namespace.
info: |
  ModuleSource objects are transferable to other agents via $262.agent.postObject.
  The transferred ModuleSource retains its Module Source Record identity. The
  HostLoadImportedModule invariant requires that if the [[ModuleSource]] object
  is the same, the resolved Module Record must be the same.

  This test creates two ModuleSource objects (srcA, srcB) with different ids,
  each exporting import.meta.moduleId. Both are posted to a child agent. The
  child:
    1. Imports srcA and srcB and verifies their import.meta.moduleId values.
    2. Verifies the two namespaces are distinct objects.
    3. Imports srcA a second time and verifies it returns the same namespace
       (the host invariant for same [[ModuleSource]] object).
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module, async]
includes: [asyncHelpers.js, atomicsHelper.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var idA = baseId + 'agent-xfer-a';
var idB = baseId + 'agent-xfer-b';

var srcA = $262.createModuleSource(
  'export var moduleId = import.meta.moduleId;',
  idA
);

var srcB = $262.createModuleSource(
  'export var moduleId = import.meta.moduleId;',
  idB
);

$262.agent.start(`
  $262.agent.receiveObject(function(payload) {
    var srcA = payload.srcA;
    var srcB = payload.srcB;
    var expectedIdA = payload.idA;
    var expectedIdB = payload.idB;

    Promise.all([import(srcA), import(srcB)]).then(function(namespaces) {
      var nsA = namespaces[0];
      var nsB = namespaces[1];

      // 1. Verify import.meta.moduleId reflects the id from createModuleSource.
      $262.agent.report('idA:' + (nsA.moduleId === expectedIdA));
      $262.agent.report('idB:' + (nsB.moduleId === expectedIdB));

      // 2. Verify the two namespaces are distinct.
      $262.agent.report('distinct:' + (nsA !== nsB));

      // 3. Import srcA again — should return the same namespace.
      return import(srcA).then(function(nsA2) {
        $262.agent.report('idempotent:' + (nsA === nsA2));
        $262.agent.leaving();
      });
    }).catch(function(err) {
      $262.agent.report('error:' + err.message);
      $262.agent.leaving();
    });
  });
`);

asyncTest(async function () {
  // Post both ModuleSource objects and their expected ids to the child agent.
  $262.agent.postObject({ srcA: srcA, srcB: srcB, idA: idA, idB: idB });

  var reportIdA = await $262.agent.getReportAsync();
  assert.sameValue(reportIdA, 'idA:true',
    'Child agent should see import.meta.moduleId matching idA for srcA');

  var reportIdB = await $262.agent.getReportAsync();
  assert.sameValue(reportIdB, 'idB:true',
    'Child agent should see import.meta.moduleId matching idB for srcB');

  var reportDistinct = await $262.agent.getReportAsync();
  assert.sameValue(reportDistinct, 'distinct:true',
    'The two namespaces in the child agent should be distinct objects');

  var reportIdempotent = await $262.agent.getReportAsync();
  assert.sameValue(reportIdempotent, 'idempotent:true',
    'Importing the same transferred ModuleSource twice should return the same namespace');
});
