// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  AsyncContext.Snapshot.prototype.run.name value and descriptor.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(
  AsyncContext.Snapshot.prototype.run.name, 'run',
  'The value of `AsyncContext.Snapshot.prototype.run.name` is `"run"`'
);

verifyNotEnumerable(AsyncContext.Snapshot.prototype.run, 'name');
verifyNotWritable(AsyncContext.Snapshot.prototype.run, 'name');
verifyConfigurable(AsyncContext.Snapshot.prototype.run, 'name');
