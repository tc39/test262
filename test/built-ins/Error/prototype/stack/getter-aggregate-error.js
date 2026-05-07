// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  The getter returns a String when called on an AggregateError instance.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If E does not have an [[ErrorData]] internal slot, return undefined.
  4. Return an implementation-defined string that represents the stack trace of E.

  AggregateError instances are ordinary objects that inherit properties from
  their AggregateError prototype object and have an [[ErrorData]] internal slot
  whose value is undefined.
features: [error-stack-accessor, AggregateError]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

var err = new AggregateError([new Error('inner')], 'outer');

assert.sameValue(typeof get.call(err), 'string', 'AggregateError instance via get.call');
assert.sameValue(typeof err.stack, 'string', 'AggregateError instance via property access');
