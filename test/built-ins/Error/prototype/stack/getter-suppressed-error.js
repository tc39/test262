// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  The getter returns a String when called on a SuppressedError instance.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If E does not have an [[ErrorData]] internal slot, return undefined.
  4. Return an implementation-defined string that represents the stack trace of E.

  SuppressedError instances are ordinary objects that inherit properties from
  their SuppressedError prototype object and have an [[ErrorData]] internal
  slot whose value is undefined.
features: [error-stack-accessor, explicit-resource-management]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

var err = new SuppressedError(new Error('inner'), new Error('suppressed'), 'msg');

assert.sameValue(typeof get.call(err), 'string', 'SuppressedError instance via get.call');
assert.sameValue(typeof err.stack, 'string', 'SuppressedError instance via property access');
