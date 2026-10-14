// This file was procedurally generated from the following sources:
// - src/export-defer/super-property-define.case
// - src/export-defer/trigger-on-exported/string-not-exported.template
/*---
description: _ [[DefineOwnProperty]] called from class field definition (of a string that is not a deferred-reexported name, does not trigger evaluation)
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

      The name is not in [[Exports]], so [[Get]] short-circuits at step 3
      before reaching the GetOptionalIndirectExportsModuleRequests check.
      The deferred source is not evaluated.


    [[DefineOwnProperty]] ( _P_, _Desc_ )
      1. If _P_ is a Symbol, return OrdinaryDefineOwnProperty(_O_, _P_, _Desc_).
      1. Let _current_ be ? _O_.[[GetOwnProperty]](_P_).
      1. If _current_ is *undefined*, return *false*.
      1. ...

    DefineField ( receiver, fieldRecord )
      1. Let fieldName be fieldRecord.[[Name]].
      1. Let initializer be fieldRecord.[[Initializer]].
      1. ...
      1. If fieldName is a Private Name, then
        a. Perform ? PrivateFieldAdd(receiver, fieldName, initValue).
      1. Else,
        1. Assert: fieldName is a property key.
        a. Perform ? CreateDataPropertyOrThrow(receiver, fieldName, initValue).
      1. Return unused.

---*/


import "./setup_FIXTURE.js";

import * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, ["barrel"],
  "barrel evaluated eagerly; deferred source not yet evaluated");

var key = "notExported";

class A { constructor() { return ns; } };
class B extends A {
  [key] = 10;
};

try {
  new B();
} catch (_) {}

assert.compareArray(globalThis.evaluations, ["barrel"],
  "operation on non-exported name does not trigger deferred-source evaluation");
