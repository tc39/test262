// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  The getter returns undefined when called on Error.prototype itself or any
  NativeError prototype: each is an ordinary object that is not an Error
  instance and does not have an [[ErrorData]] internal slot.
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

var prototypes = [
  ['Error.prototype', Error.prototype],
  ['EvalError.prototype', EvalError.prototype],
  ['RangeError.prototype', RangeError.prototype],
  ['ReferenceError.prototype', ReferenceError.prototype],
  ['SyntaxError.prototype', SyntaxError.prototype],
  ['TypeError.prototype', TypeError.prototype],
  ['URIError.prototype', URIError.prototype],
  typeof AggregateError === 'undefined' ? null : ['AggregateError.prototype', AggregateError.prototype],
  typeof SuppressedError === 'undefined' ? null : ['SuppressedError.prototype', SuppressedError.prototype]
];

for (var i = 0; i < prototypes.length; ++i) {
  if (!prototypes[i]) continue;
  var label = prototypes[i][0];
  var proto = prototypes[i][1];
  assert.sameValue(get.call(proto), undefined, label);
}

// Access via the property also returns undefined on Error.prototype.
assert.sameValue(Error.prototype.stack, undefined, 'Error.prototype.stack property access');
