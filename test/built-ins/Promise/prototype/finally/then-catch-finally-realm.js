// Copyright (C) 2020 Tooru Fujisawa. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  Promise.prototype.finally creates thenFinally and catchFinally in onFinally's
  realm
esid: sec-promise.prototype.finally
info: |
  Promise.prototype.finally ( _onFinally_ )
  6. Else,
    a. Let realm be ? GetFunctionRealm(_onFinally_).
    c. Let _thenFinally_ be ! CreateBuiltinFunction(_stepsThenFinally_, &laquo; [[Constructor]], [[OnFinally]] &raquo;, realm).
    g. Let _catchFinally_ be ! CreateBuiltinFunction(_stepsCatchFinally_, &laquo; [[Constructor]], [[OnFinally]] &raquo;, realm).
  7. Return ? Invoke(_promise_, *"then"*, &laquo; _thenFinally_, _catchFinally_ &raquo;).
features: [Promise.prototype.finally]
---*/

var other = $262.createRealm().global;

var onFinally = () => {};

var [thenFinally, catchFinally] = other.Promise.prototype.finally.call({
  then(thenFinally, catchFinally) {
    return [thenFinally, catchFinally];
  }
}, onFinally);

assert.sameValue(thenFinally.constructor, onFinally.constructor);
assert.sameValue(catchFinally.constructor, onFinally.constructor);
