// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  Returns undefined when called on an object that does not have an
  [[ErrorData]] internal slot.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If E does not have an [[ErrorData]] internal slot, return undefined.
  4. Return an implementation-defined string that represents the stack trace of E.
features: [error-stack-accessor]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

assert.sameValue(get.call({}), undefined, 'plain object');
assert.sameValue(get.call([]), undefined, 'array');
assert.sameValue(get.call(function () {}), undefined, 'function');
assert.sameValue(get.call(/re/), undefined, 'RegExp');
assert.sameValue(get.call(new Date()), undefined, 'Date');
assert.sameValue(get.call(new Boolean(true)), undefined, 'Boolean wrapper');
assert.sameValue(get.call(new Number(0)), undefined, 'Number wrapper');
assert.sameValue(get.call(new String('')), undefined, 'String wrapper');

// An object that inherits from Error.prototype but lacks [[ErrorData]] still
// returns undefined: the getter checks for the internal slot, not the prototype.
var fakeError = Object.create(Error.prototype);
assert.sameValue(get.call(fakeError), undefined, 'object with Error.prototype on its prototype chain');

var fakeErrorWithStack = Object.create(Error.prototype);
Object.defineProperty(fakeErrorWithStack, 'stack', { value: 'imposter', writable: true, enumerable: true, configurable: true });
assert.sameValue(
  get.call(fakeErrorWithStack),
  undefined,
  'an existing own "stack" data property is ignored by the getter on a non-Error object'
);
