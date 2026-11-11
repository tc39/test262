// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "AsyncContext.Snapshot".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [AsyncContext, Symbol.toStringTag]
---*/

assert.sameValue(AsyncContext.Snapshot.prototype[Symbol.toStringTag], 'AsyncContext.Snapshot');

verifyNotEnumerable(AsyncContext.Snapshot.prototype, Symbol.toStringTag);
verifyNotWritable(AsyncContext.Snapshot.prototype, Symbol.toStringTag);
verifyConfigurable(AsyncContext.Snapshot.prototype, Symbol.toStringTag);
