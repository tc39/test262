// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  AsyncContext.Snapshot.prototype.run.length value and descriptor.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Snapshot.prototype.run.length, 1,
  'The value of `AsyncContext.Snapshot.prototype.run.length` is `1`'
);

verifyNotEnumerable(AsyncContext.Snapshot.prototype.run, 'length');
verifyNotWritable(AsyncContext.Snapshot.prototype.run, 'length');
verifyConfigurable(AsyncContext.Snapshot.prototype.run, 'length');
