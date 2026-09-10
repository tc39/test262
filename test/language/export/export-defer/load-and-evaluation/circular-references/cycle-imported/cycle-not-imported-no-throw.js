// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-resolveexport
description: Cyclic deferred re-exports do not throw SyntaxError if the cyclic binding is never imported
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

    Not imported names aren't loaded, so their cycle nevergets visited and resolved.
flags: [module]
features: [export-defer]
includes: [compareArray.js]
---*/

import "../setup_FIXTURE.js";
import "./a_FIXTURE.js";

assert.compareArray(
  globalThis.evaluations,
  ["a"],
  "a evaluated; b's cycle never forced because no consumer requested x"
);
