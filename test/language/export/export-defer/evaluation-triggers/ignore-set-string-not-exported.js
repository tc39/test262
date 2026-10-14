// This file was procedurally generated from the following sources:
// - src/export-defer/set-string-not-exported.case
// - src/export-defer/no-trigger/no-trigger.template
/*---
description: _ [[Set]] of a string which is not an export name (does not trigger evaluation)
esid: sec-module-namespace-exotic-objects
features: [export-defer]
flags: [generated, module]
includes: [compareArray.js]
info: |
    EvaluateModuleSync is only inserted into [[Get]] by this proposal.
    Operations that do not route through [[Get]] do not reach it,
    even for a deferred-reexported name.


    [[Set]] ( _P_, _V_, _Receiver_ )
      1. Return *false*.

---*/


import "./setup_FIXTURE.js";

import * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, ["barrel"],
  "barrel evaluated eagerly; deferred source not yet evaluated");

try {
  ns.notExported = "hi";
} catch (_) {}

assert.compareArray(globalThis.evaluations, ["barrel"],
  "operation does not route through [[Get]], so deferred source is not evaluated");
