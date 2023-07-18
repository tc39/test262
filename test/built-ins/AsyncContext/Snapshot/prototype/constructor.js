// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.constructor
description: AsyncContext.Snapshot.prototype.constructor value and descriptor
info: |
  The initial value of AsyncContext.Snapshot.prototype.constructor is
  %AsyncContext.Snapshot%.
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(AsyncContext.Snapshot.prototype.constructor, AsyncContext.Snapshot);
assert.sameValue((new AsyncContext.Snapshot()).constructor, AsyncContext.Snapshot);

verifyNotEnumerable(AsyncContext.Snapshot.prototype, 'constructor');
verifyWritable(AsyncContext.Snapshot.prototype, 'constructor');
verifyConfigurable(AsyncContext.Snapshot.prototype, 'constructor');
