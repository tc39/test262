// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-hasproperty-p
description: >
  in operator triggers barrel evaluation only under `import defer`
info: |
  [[HasProperty]] ( _P_ )
    1. If _P_ is a Symbol, return ! OrdinaryHasProperty(_O_, _P_).
    1. Let _exports_ be _O_.[[Exports]].
    1. If _exports_ contains _P_, return *true*.
    1. Return *false*.

  EvaluateModuleSync is only inserted into [[Get]]; [[HasProperty]] does
  not route through [[Get]] and so does not trigger deferred-dep
  evaluation, but it does interact with the deferred namespace and
  therefore triggers barrel evaluation.
flags: [module]
features: [export-defer, import-defer]
includes: [compareArray.js]
---*/

import "./setup_FIXTURE.js";
import defer * as ns from "./barrel_FIXTURE.js";

assert.compareArray(globalThis.evaluations, [],
  "barrel deferred until first interaction with ns");

assert.sameValue("exported" in ns, true,
  "deferred-reexported name is reported as a member of the namespace");

assert.compareArray(globalThis.evaluations, ["barrel"],
  "`in` triggers barrel evaluation but not the deferred dep");
