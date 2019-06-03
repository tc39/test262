// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-weak-ref.prototype.constructor
description: WeakRef.prototype.constructor property descriptor
info: |
  WeakRef.prototype.constructor

  The initial value of WeakRef.prototype.constructor is the intrinsic
  object %WeakRef%.

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [WeakRef]
---*/

verifyProperty(WeakRef.prototype, "constructor", {
  value: WeakRef,
  writable: true,
  enumerable: false,
  configurable: true
});
