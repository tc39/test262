// This file was procedurally generated from the following sources:
// - src/export-defer/delete.case
// - src/export-defer/no-trigger-on-exported/string-exported.template
/*---
description: _ [[Delete]] (of a string that is a deferred-reexported name, does not trigger evaluation)
esid: sec-module-namespace-exotic-objects
features: [export-defer]
flags: [generated, module]
includes: [compareArray.js]
info: |
    EvaluateModuleSync is only inserted into [[Get]] by this proposal.
    Operations that do not route through [[Get]] do not reach it,
    even for a deferred-reexported name.


    [[Delete]] ( _P_ )
      1. If _P_ is a Symbol, return OrdinaryDelete(_O_, _P_).
      1. Let _exports_ be _O_.[[Exports]].
      1. If _exports_ contains _P_, return *false*.
      1. Return *true*.

---*/


import "./setup_FIXTURE.js";

import * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, ["barrel"],
  "barrel evaluated eagerly; deferred source not yet evaluated");

var key = "exported";

try {
  delete ns[key];
} catch (_) {}

assert.compareArray(globalThis.evaluations, ["barrel"],
  "operation does not route through [[Get]], so deferred source is not evaluated");
