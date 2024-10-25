// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-setprototypeof-v
description: >
  [[SetPrototypeOf]] does not trigger evaluation of the module
info: |
  [[SetPrototypeOf]] ( _V_ )
    1. Return ! SetImmutablePrototype(_O_, _V_).

features: [import-defer]
---*/

import "./setup_FIXTURE.js";

import defer * as ns1 "./dep-1_FIXTURE.js";

assert(globalThis.evaluations.length === 0, "import defer does not trigger evaluation");

Reflect.setPrototypeOf(ns1, null);
Reflect.setPrototypeOf(ns1, {});

assert(globalThis.evaluations.length === 0, "[[GetPrototypeOf]] does not trigger evaluation");
