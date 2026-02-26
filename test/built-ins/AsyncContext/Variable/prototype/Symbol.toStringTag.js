// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "AsyncContext.Variable".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [AsyncContext, Symbol.toStringTag]
---*/

assert.sameValue(AsyncContext.Variable.prototype[Symbol.toStringTag], 'AsyncContext.Variable');

verifyNotEnumerable(AsyncContext.Variable.prototype, Symbol.toStringTag);
verifyNotWritable(AsyncContext.Variable.prototype, Symbol.toStringTag);
verifyConfigurable(AsyncContext.Variable.prototype, Symbol.toStringTag);
