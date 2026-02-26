// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot-wrap
description: >
  AsyncContext.Snapshot.wrap.length value and descriptor.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Snapshot.wrap.length, 1,
  'The value of `AsyncContext.Snapshot.wrap.length` is `1`'
);

verifyNotEnumerable(AsyncContext.Snapshot.wrap, 'length');
verifyNotWritable(AsyncContext.Snapshot.wrap, 'length');
verifyConfigurable(AsyncContext.Snapshot.wrap, 'length');
