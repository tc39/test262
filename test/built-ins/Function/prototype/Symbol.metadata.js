// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function.prototype-@@metadata
description: Function.prototype[Symbol.metadata] property descriptor
info: |
    The initial value of the @@metadata property is null.
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [decorator-metadata]
---*/

verifyProperty(Function.prototype, Symbol.metadata, {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
});
