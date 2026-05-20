// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype.stack
description: >
  Returns a String when called on an Error instance.
info: |
  get Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If E does not have an [[ErrorData]] internal slot, return undefined.
  4. Return an implementation-defined string that represents the stack trace of E.
features: [error-stack-accessor]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

var nativeErrors = [
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
];

for (var i = 0; i < nativeErrors.length; ++i) {
  var Ctor = nativeErrors[i];

  var err = new Ctor('msg');
  assert.sameValue(typeof get.call(err), 'string', Ctor.name + ': new Ctor instance via get.call');
  assert.sameValue(typeof err.stack, 'string', Ctor.name + ': new Ctor instance via property access');

  var err2 = Ctor('msg');
  assert.sameValue(typeof get.call(err2), 'string', Ctor.name + ': Ctor called without new');

  assert.sameValue(typeof get.call(err), 'string', Ctor.name + ': second call still returns a string');
}
