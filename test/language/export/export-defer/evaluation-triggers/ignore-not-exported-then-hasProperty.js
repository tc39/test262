// This file was procedurally generated from the following sources:
// - src/export-defer/hasProperty.case
// - src/export-defer/no-trigger-on-exported/then-not-exported.template
/*---
description: _ [[HasProperty]] (of "then" when it is not a deferred-reexported name, does not trigger evaluation)
esid: sec-module-namespace-exotic-objects
features: [export-defer]
flags: [generated, module]
includes: [compareArray.js]
info: |
    EvaluateModuleSync is only inserted into [[Get]] by this proposal.
    Operations that do not route through [[Get]] do not reach it,
    even for a deferred-reexported name.


    [[HasProperty]] ( _P_ )
      1. If _P_ is a Symbol, return OrdinaryHasProperty(_O_, _P_).
      1. Let _exports_ be _O_.[[Exports]].
      1. If _exports_ contains _P_, return *true*.
      1. Return *false*.

---*/


import "./setup_FIXTURE.js";

import * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, ["barrel"],
  "barrel evaluated eagerly; deferred source not yet evaluated");

var key = "then";

key in ns;

assert.compareArray(globalThis.evaluations, ["barrel"],
  "operation does not route through [[Get]], so deferred source is not evaluated");
