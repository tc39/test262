// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  The setter installs an own "stack" data property on a SuppressedError instance.
info: |
  set Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If v is not a String, throw a TypeError exception.
  4. Perform ? SetterThatIgnoresPrototypeProperties(this value, %Error.prototype%, "stack", v).
  5. Return undefined.
includes: [propertyHelper.js]
features: [error-stack-accessor, explicit-resource-management]
---*/

var set = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').set;

var err = new SuppressedError(new Error('inner'), new Error('suppressed'), 'msg');

assert.sameValue(
  Object.prototype.hasOwnProperty.call(err, 'stack'),
  false,
  'precondition: SuppressedError instance has no own "stack" property at construction'
);

var result = set.call(err, 'sentinel');
assert.sameValue(result, undefined, 'setter returns undefined');

verifyProperty(err, 'stack', {
  value: 'sentinel',
  writable: true,
  enumerable: true,
  configurable: true,
});
