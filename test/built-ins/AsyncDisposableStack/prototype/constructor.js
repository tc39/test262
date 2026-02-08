// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-the-asyncdisposablestack-prototype-object
description: AsyncDisposableStack.prototype.constructor
info: |
  AsyncDisposableStack.prototype.constructor

  Normative Optional

  The initial value of AsyncDisposableStack.prototype.constructor is the intrinsic object %AsyncDisposableStack%.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

  This section is to be treated identically to the "Annex B" of ECMA-262, but to be written in-line with the main specification.
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

var actual = AsyncDisposableStack.prototype.hasOwnProperty('constructor');

// If implemented, it should conform to the spec text
if (actual) {
  verifyProperty(AsyncDisposableStack.prototype, 'constructor', {
    value: AsyncDisposableStack,
    writable: true,
    enumerable: false,
    configurable: true
  });
}
