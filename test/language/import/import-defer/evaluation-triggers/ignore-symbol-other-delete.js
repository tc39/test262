// This file was procedurally generated from the following sources:
// - src/import-defer/delete.case
// - src/import-defer/trigger-on-possible-export/symbol-other.template
/*---
description: _ [[Delete]] (of a symbol that is not a property of the namespace object, does not trigger execution)
esid: sec-module-namespace-exotic-objects
features: [import-defer]
flags: [generated, module]
info: |
    IsSymbolLikeNamespaceKey ( _P_, _O_ )
      1. If _P_ is a Symbol, return *true*.
      1. If _ns_.[[Deferred]] is *true* and _P_ is "then", return *true*.
      1. Return *false*.

    GetModuleExportsList ( _O_ )
      1. If _O_.[[Deferred]] is *true*, then
        1. Let _m_ be _O_.[[Module]].
        1. If _m_ is a Cyclic Module Record, _m_.[[Status]] is not ~evaluated~, and ReadyForSyncExecution(_m_) is *false*, throw a *TypeError* exception.
        1. Perform ? EvaluateSync(_m_).
      1. Return _O_.[[Exports]].


    [[Delete]] ( _P_ )
      1. If IsSymbolLikeNamespaceKey(_P_, _O_), return ! OrdinaryDelete(_O_, _P_).
      1. Let _exports_ be ? GetModuleExportsList(_O_).
      1. ...

---*/


import "./setup_FIXTURE.js";

import defer * as ns from "./dep_FIXTURE.js";

assert.sameValue(globalThis.evaluations.length, 0, "import defer does not trigger evaluation");

var key = Symbol();

try {
  delete ns[key];
} catch (_) {}

assert.sameValue(globalThis.evaluations.length, 0, "It does not trigger evaluation");
