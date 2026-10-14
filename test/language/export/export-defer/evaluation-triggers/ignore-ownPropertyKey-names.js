// This file was procedurally generated from the following sources:
// - src/export-defer/ownPropertyKey-names.case
// - src/export-defer/no-trigger/no-trigger.template
/*---
description: _ [[OwnPropertyKeys]] (does not trigger evaluation)
esid: sec-module-namespace-exotic-objects
features: [export-defer]
flags: [generated, module]
includes: [compareArray.js]
info: |
    EvaluateModuleSync is only inserted into [[Get]] by this proposal.
    Operations that do not route through [[Get]] do not reach it,
    even for a deferred-reexported name.


    [[OwnPropertyKeys]] ( )
      1. Let _exports_ be _O_.[[Exports]].
      1. Let _symbolKeys_ be OrdinaryOwnPropertyKeys(_O_).
      1. Return the list-concatenation of _exports_ and _symbolKeys_.

---*/


import "./setup_FIXTURE.js";

import * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, ["barrel"],
  "barrel evaluated eagerly; deferred source not yet evaluated");

Object.getOwnPropertyNames(ns);

assert.compareArray(globalThis.evaluations, ["barrel"],
  "operation does not route through [[Get]], so deferred source is not evaluated");
