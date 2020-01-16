// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-thenfinallyfunctions
description: >
  valueThunk is anonymous built-in function with length of 1 that returns value.
info: |
  Then Finally Functions

  ...
  8. Let valueThunk be equivalent to a function that returns value.
  9. Return ? Invoke(promise, "then", « valueThunk »).

  The "length" property of a Then Finally function is 1.
features: [Promise.prototype.finally, Reflect.construct]
includes: [isConstructor.js]
flags: [async]
---*/

var value = {};

Promise.resolve(value)
  .finally(function() {})
  .then($DONE, $DONE);

var then = Promise.prototype.then;
Promise.prototype.then = function(valueThunk) {
  assert(!isConstructor(valueThunk));
  assert.sameValue(valueThunk.length, 1);
  assert.sameValue(valueThunk.name, '');
  assert.sameValue(valueThunk(), value);

  return then.call(this, valueThunk);
};
