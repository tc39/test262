// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  Throws a TypeError if the value being assigned is not a String.
info: |
  set Error.prototype.stack

  1. Let E be the this value.
  2. If E is not an Object, throw a TypeError exception.
  3. If v is not a String, throw a TypeError exception.
features: [error-stack-accessor]
---*/

var set = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').set;

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

  assert.throws(TypeError, function () {
    set.call(err, undefined);
  }, Ctor.name + ': undefined');

  assert.throws(TypeError, function () {
    set.call(err, null);
  }, Ctor.name + ': null');

  assert.throws(TypeError, function () {
    set.call(err, true);
  }, Ctor.name + ': true');

  assert.throws(TypeError, function () {
    set.call(err, false);
  }, Ctor.name + ': false');

  assert.throws(TypeError, function () {
    set.call(err, 1);
  }, Ctor.name + ': number');

  assert.throws(TypeError, function () {
    set.call(err, {});
  }, Ctor.name + ': object');

  assert.throws(TypeError, function () {
    set.call(err, []);
  }, Ctor.name + ': array');

  // An object with a toString method is not coerced; the algorithm requires v
  // to already be a String.
  var coercible = {
    toString: function () { return 'coerced'; },
    valueOf: function () { return 'coerced'; },
  };
  assert.throws(TypeError, function () {
    set.call(err, coercible);
  }, Ctor.name + ': object with toString');

  // Boxed strings are still objects, not Strings.
  assert.throws(TypeError, function () {
    set.call(err, new String('boxed'));
  }, Ctor.name + ': String wrapper object');
}
