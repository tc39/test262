// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-isextensible
description: >
  [[IsExtensible]] does not trigger evaluation of the module
info: |
  [[IsExtensible]] ( )
    1. Return **false**.

features: [import-defer]
---*/

import "./setup_FIXTURE.js";

import defer * as ns1 "./dep-1_FIXTURE.js";

assert(globalThis.evaluations.length === 0, "import defer does not trigger evaluation");

Object.isExtensible(ns1);

assert(globalThis.evaluations.length === 0, "[[GetPrototypeOf]] does not trigger evaluation");
