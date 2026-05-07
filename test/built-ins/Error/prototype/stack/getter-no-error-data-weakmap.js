// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  Returns undefined when called on a WeakMap, which does not have an
  [[ErrorData]] internal slot.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If E does not have an [[ErrorData]] internal slot, return undefined.
  4. Return an implementation-defined string that represents the stack trace of E.
features: [error-stack-accessor, WeakMap]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

assert.sameValue(get.call(new WeakMap()), undefined);
