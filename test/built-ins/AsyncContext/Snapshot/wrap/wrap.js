// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot-wrap
description: >
    AsyncContext.Snapshot.wrap ( fn )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  typeof AsyncContext.Snapshot.wrap,
  'function',
  'typeof AsyncContext.Snapshot.wrap is "function"'
);

verifyNotEnumerable(AsyncContext.Snapshot, 'wrap');
verifyWritable(AsyncContext.Snapshot, 'wrap');
verifyConfigurable(AsyncContext.Snapshot, 'wrap');
