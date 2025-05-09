// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap.prototype.delete
description: >
  WeakMap.prototype.delete property descriptor
info: |
  WeakMap.prototype.delete ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof WeakMap.prototype.delete,
  'function',
  'typeof WeakMap.prototype.delete is "function"'
);

verifyProperty(WeakMap.prototype, 'delete', {
  writable: true,
  enumerable: false,
  configurable: true,
});
