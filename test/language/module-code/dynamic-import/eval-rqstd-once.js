// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Requested modules are evaluated exactly once
esid: sec-moduleevaluation
info: |
    [...]
    4. If module.[[Evaluated]] is true, return undefined.
    5. Set module.[[Evaluated]] to true.
    6. For each String required that is an element of module.[[RequestedModules]] do,
       a. Let requiredModule be ? HostResolveImportedModule(module, required).
       b. Perform ? requiredModule.ModuleEvaluation().
    [...]
includes: [fnGlobalObject.js]
flags: [async, module]
features: [dynamic-import]
---*/

var global = fnGlobalObject();



Promise.all([
  import('./eval-rqstd-once_FIXTURE.js'),
  import('./eval-rqstd-once_FIXTURE.js'),
  import('./eval-rqstd-once_FIXTURE.js'),
]).then((...importeds) => {

  assert.sameValue(global.test262, 262, 'global property was defined');

}).then($DONE, $DONE);
