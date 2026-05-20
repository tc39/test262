// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  The getter returns undefined when called on Error.prototype itself, because
  the Error prototype object is not an Error instance and does not have an
  [[ErrorData]] internal slot.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If E does not have an [[ErrorData]] internal slot, return undefined.
  4. Return an implementation-defined string that represents the stack trace of E.

  Properties of the Error Prototype Object

  The Error prototype object:
    [...]
    is not an Error instance and does not have an [[ErrorData]] internal slot.
features: [error-stack-accessor]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

assert.sameValue(get.call(Error.prototype), undefined, 'Error.prototype');
assert.sameValue(Error.prototype.stack, undefined, 'access via property');

assert.sameValue(get.call(EvalError.prototype), undefined, 'EvalError.prototype');
assert.sameValue(get.call(RangeError.prototype), undefined, 'RangeError.prototype');
assert.sameValue(get.call(ReferenceError.prototype), undefined, 'ReferenceError.prototype');
assert.sameValue(get.call(SyntaxError.prototype), undefined, 'SyntaxError.prototype');
assert.sameValue(get.call(TypeError.prototype), undefined, 'TypeError.prototype');
assert.sameValue(get.call(URIError.prototype), undefined, 'URIError.prototype');
