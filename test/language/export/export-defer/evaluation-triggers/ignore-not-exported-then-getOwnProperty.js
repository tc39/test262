// This file was procedurally generated from the following sources:
// - src/export-defer/getOwnProperty.case
// - src/export-defer/trigger-on-exported/then-not-exported.template
/*---
description: _ [[GetOwnProperty]] (of "then" when it is not a deferred-reexported name, does not trigger evaluation)
esid: sec-module-namespace-exotic-objects
features: [export-defer]
flags: [generated, module]
includes: [compareArray.js]
info: |
    [[Get]] ( _P_, _Receiver_ )
      1. If _P_ is a Symbol, return OrdinaryGet(_O_, _P_, _Receiver_).
      1. Let _exports_ be _O_.[[Exports]].
      1. If _exports_ does not contain _P_, return *undefined*.
      1. Let _m_ be _O_.[[Module]].
      1. If _m_ is a Cyclic Module Record and _m_.GetOptionalIndirectExportsModuleRequests(« _P_ ») is not empty, then
        1. Perform ? EvaluateModuleSync(_m_, « _P_ »).
      1. ...

      The name "then" is not in [[Exports]] of this barrel, so [[Get]]
      short-circuits at step 3 before reaching the
      GetOptionalIndirectExportsModuleRequests check. The deferred source
      is not evaluated.


    [[GetOwnProperty]] ( _P_ )
      1. If _P_ is a Symbol, return OrdinaryGetOwnProperty(_O_, _P_).
      1. Let _exports_ be _O_.[[Exports]].
      1. If _exports_ does not contain _P_, return *undefined*.
      1. Let value be ? _O_.[[Get]](_P_, _O_).
      1. Return PropertyDescriptor { [[Value]]: _value_, [[Writable]]: *true*, [[Enumerable]]: *true*, [[Configurable]]: *false* }.

---*/


import "./setup_FIXTURE.js";

import * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, ["barrel"],
  "barrel evaluated eagerly; deferred source not yet evaluated");

var key = "then";

Object.getOwnPropertyDescriptor(ns, key);

assert.compareArray(globalThis.evaluations, ["barrel"],
  "operation on non-exported 'then' does not trigger deferred-source evaluation");
