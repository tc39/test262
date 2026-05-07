// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  The getter returns undefined when called on SuppressedError.prototype, which
  is an ordinary object that does not have an [[ErrorData]] internal slot.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If E does not have an [[ErrorData]] internal slot, return undefined.
  4. Return an implementation-defined string that represents the stack trace of E.

  Properties of the SuppressedError Prototype Object

  The SuppressedError prototype object:
    [...]
    is not an Error instance or a SuppressedError instance and does not have
    an [[ErrorData]] internal slot.
features: [error-stack-accessor, explicit-resource-management]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

assert.sameValue(get.call(SuppressedError.prototype), undefined);
