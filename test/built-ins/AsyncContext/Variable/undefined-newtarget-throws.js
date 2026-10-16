// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: Throws a TypeError if NewTarget is undefined.
features: [AsyncContext]
---*/

assert.sameValue(
  typeof AsyncContext.Variable, 'function',
  'typeof AsyncContext.Variable is function'
);

assert.throws(TypeError, function() {
  AsyncContext.Variable();
});

assert.throws(TypeError, function() {
  AsyncContext.Variable({});
});
