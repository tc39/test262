// This file was procedurally generated from the following sources:
// - src/export-defer/defineOwnProperty.case
// - src/export-defer/trigger-on-exported/string-exported.template
/*---
description: _ [[DefineOwnProperty]] (of a string that is a deferred-reexported name, triggers evaluation)
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

      The namespace is an ordinary module namespace (not deferred), so
      [[Deferred]] is false. The trigger is inside [[Get]] at the
      GetOptionalIndirectExportsModuleRequests check for the given name.


    [[DefineOwnProperty]] ( _P_, _Desc_ )
      1. If _P_ is a Symbol, return OrdinaryDefineOwnProperty(_O_, _P_, _Desc_).
      1. Let _current_ be ? _O_.[[GetOwnProperty]](_P_).
      1. If _current_ is *undefined*, return *false*.
      1. ...

---*/


import "./setup_FIXTURE.js";

import * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, ["barrel"],
  "barrel evaluated eagerly; deferred source not yet evaluated");

var key = "exported";

try {
  Object.defineProperty(ns, key, { value: "hi" });
} catch (_) {}

assert.compareArray(globalThis.evaluations, ["barrel", "dep"],
  "operation on deferred-reexported name triggers source evaluation");
