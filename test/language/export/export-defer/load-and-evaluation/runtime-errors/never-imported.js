// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-get-p-receiver-EnsureDeferredNamespaceEvaluation
description: A deferred re-export source that throws on evaluation does not throw if its binding is never accessed
info: |
  InnerModuleLoading ( state, module, importedNames )
    1. Assert: state.[[IsLoading]] is true.
    1. If module is a Cyclic Module Record, then
      1. ...
      1. Let optionalIndirectRequests be GetNewOptionalIndirectExportsModuleRequests(module, importedNames, state.[[Visited]]).
      1. Set requestsToLoad to the list-concatenation of requestsToLoad and optionalIndirectRequests.
      1. ...

  ResolveExport ( exportName [ , resolveSet [ , deferNamespaceExportSet ] ] )
    1. Assert: module.[[Status]] is not NEW.
    1. If resolveSet is not present, set resolveSet to a new empty List.
    1. If deferNamespaceExportSet is not present, set deferNamespaceExportSet to a new empty List.
    1. For each Record { [[Module]], [[ExportName]] } r of resolveSet, do
       1. If module and r.[[Module]] are the same Module Record and exportName is r.[[ExportName]], then
          1. Assert: This is a circular import request.
          1. Return null.
    1. ...

flags: [module]
features: [export-defer]
includes: [compareArray.js]
---*/

import "./setup_FIXTURE.js";
import "./barrel-defer-throws_FIXTURE.js";

assert.compareArray(
  globalThis.evaluations,
  ["barrel-defer-throws"],
  "barrel evaluated; throws_FIXTURE was loaded but never evaluated"
);
