// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "AsyncContext".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [AsyncContext, Symbol.toStringTag]
---*/

assert.sameValue(AsyncContext[Symbol.toStringTag], 'AsyncContext');

verifyNotEnumerable(AsyncContext, Symbol.toStringTag);
verifyNotWritable(AsyncContext, Symbol.toStringTag);
verifyConfigurable(AsyncContext, Symbol.toStringTag);
