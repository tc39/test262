// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  Calling the setter with SuppressedError.prototype as the receiver does NOT
  throw via the home-object check (which is locked to %Error.prototype%); it
  installs an own data property on SuppressedError.prototype.
info: |
  set Error.prototype.stack

  [...]
  4. Perform ? SetterThatIgnoresPrototypeProperties(this value, %Error.prototype%, "stack", v).
includes: [propertyHelper.js]
features: [error-stack-accessor, explicit-resource-management]
---*/

var set = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').set;

assert.sameValue(
  Object.getOwnPropertyDescriptor(SuppressedError.prototype, 'stack'),
  undefined,
  'precondition: SuppressedError.prototype has no own "stack"'
);

set.call(SuppressedError.prototype, 'sentinel');

verifyProperty(SuppressedError.prototype, 'stack', {
  value: 'sentinel',
  writable: true,
  enumerable: true,
  configurable: true,
});

assert.sameValue(
  Object.getOwnPropertyDescriptor(SuppressedError.prototype, 'stack'),
  undefined,
  'cleanup'
);
