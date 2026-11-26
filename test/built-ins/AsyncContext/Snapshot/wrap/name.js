// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot-wrap
description: >
  AsyncContext.Snapshot.wrap.name value and descriptor.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Snapshot.wrap.name, 'wrap',
  'The value of `AsyncContext.Snapshot.wrap.name` is `"wrap"`'
);

verifyNotEnumerable(AsyncContext.Snapshot.wrap, 'name');
verifyNotWritable(AsyncContext.Snapshot.wrap, 'name');
verifyConfigurable(AsyncContext.Snapshot.wrap, 'name');
