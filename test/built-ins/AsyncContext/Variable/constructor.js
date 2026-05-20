// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable-constructor
description: >
    The AsyncContext.Variable constructor is the %AsyncContext.Variable%
    intrinsic object and the initial value of the Variable property of the
    %AsyncContext% object.
features: [AsyncContext]
---*/

assert.sameValue(
  typeof AsyncContext.Variable, 'function',
  'typeof AsyncContext.Variable is function'
);
