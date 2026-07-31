// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype
description: >
  The initial value of AsyncContext.Snapshot.prototype is the
  AsyncContext.Snapshot prototype object.
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Snapshot.prototype.isPrototypeOf(new AsyncContext.Snapshot()), true,
  'AsyncContext.Snapshot.prototype.isPrototypeOf(new AsyncContext.Snapshot()) returns true'
);

verifyNotEnumerable(AsyncContext.Snapshot, 'prototype');
verifyNotWritable(AsyncContext.Snapshot, 'prototype');
verifyNotConfigurable(AsyncContext.Snapshot, 'prototype');
