// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-get
description: >
  ns.direct triggers barrel evaluation only under `import defer`
info: |
  [[Get]] ( _P_, _Receiver_ )
    1. ...
    1. Let _m_ be _O_.[[Module]].
    1. If _m_ is a Cyclic Module Record and _m_.GetOptionalIndirectExportsModuleRequests(« _P_ »)
       is not empty, then
      1. Perform ? EvaluateModuleSync(_m_, « _P_ »).
    1. ...
    
  For names that are NOT deferred-reexported, GetOptionalIndirectExportsModuleRequests
  returns an empty list, so EvaluateModuleSync is not called for them.
flags: [module]
features: [export-defer, import-defer]
includes: [compareArray.js]
---*/

import "./setup_FIXTURE.js";
import defer * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, [],
  "barrel deferred until first interaction with ns");

assert.sameValue(ns.direct, 1,
  "non-deferred binding resolves to the value defined in the barrel");

assert.compareArray(globalThis.evaluations, ["barrel"],
  "ns.direct triggers barrel evaluation but not the deferred dep");
