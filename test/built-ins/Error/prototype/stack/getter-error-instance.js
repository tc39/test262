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
includes: [nativeErrors.js]
features: [error-stack-accessor]
---*/

var get = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;

var errors = [];
for (var i = 0; i < nativeErrors.length; ++i) {
  var Ctor = nativeErrors[i];
  errors.push([Ctor.name, new Ctor('msg'), Ctor('msg')]);
}
if (typeof AggregateError !== 'undefined') {
  errors.push([
    'AggregateError',
    new AggregateError([new Error('inner')], 'outer'),
    AggregateError([new Error('inner')], 'outer')
  ]);
}
if (typeof SuppressedError !== 'undefined') {
  errors.push([
    'SuppressedError',
    new SuppressedError(new Error('inner'), new Error('suppressed'), 'msg'),
    SuppressedError(new Error('inner'), new Error('suppressed'), 'msg')
  ]);
}

for (var i = 0; i < errors.length; ++i) {
  var name = errors[i][0];
  var err = errors[i][1];
  var err2 = errors[i][2];

  assert.sameValue(typeof get.call(err), 'string', name + ': new Ctor instance via get.call');
  assert.sameValue(typeof err.stack, 'string', name + ': new Ctor instance via property access');

  assert.sameValue(typeof get.call(err2), 'string', name + ': Ctor called without new');

  assert.sameValue(typeof get.call(err), 'string', name + ': second call still returns a string');
}
