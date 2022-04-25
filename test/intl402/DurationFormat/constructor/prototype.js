// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat
description: The prototype of the Intl.DurationFormat constructor is %FunctionPrototype%.
info: |
    Unless specified otherwise in this document, the objects, functions, and constructors described in this standard are subject to the generic requirements and restrictions specified for standard built-in ECMAScript objects in the ECMAScript 2019 Language Specification, 10th edition, clause 17, or successor.
    Unless otherwise specified every built-in function object has the %FunctionPrototype% object as the initial value of its [[Prototype]] internal slot.
features: [Intl.DurationFormat]
---*/

assert.sameValue(
  Object.getPrototypeOf(Intl.DurationFormat),
  Function.prototype,
  "Object.getPrototypeOf(Intl.DurationFormat) equals the value of Function.prototype"
);
