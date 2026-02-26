// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
    AsyncContext.Snapshot.prototype.run ( func, ...args )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  typeof AsyncContext.Snapshot.prototype.run,
  'function',
  'typeof AsyncContext.Snapshot.prototype.run is "function"'
);

verifyNotEnumerable(AsyncContext.Snapshot.prototype, 'run');
verifyWritable(AsyncContext.Snapshot.prototype, 'run');
verifyConfigurable(AsyncContext.Snapshot.prototype, 'run');
