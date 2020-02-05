// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-catchfinallyfunctions
description: >
  thrower is anonymous built-in function with length of 1 that throws reason.
info: |
  Catch Finally Functions

  ...
  8. Let thrower be equivalent to a function that throws reason.
  9. Return ? Invoke(promise, "then", « thrower »).

  The "length" property of a Catch Finally function is 1.
features: [Promise.prototype.finally, Reflect.construct]
includes: [isConstructor.js]
flags: [async]
---*/

Promise.reject(new Test262Error())
  .finally(function() {})
  .then($DONE, $DONE);

var calls = 0;
var expected = [
  { length: 0, name: '' },
  { length: 1, name: '' }
];

var then = Promise.prototype.then;
Promise.prototype.then = function(resolve) {
  assert(!isConstructor(resolve));
  assert.sameValue(resolve.length, expected[calls].length);
  assert.sameValue(resolve.name, expected[calls].name);
  if (calls === 0) {
    assert.throws(Test262Error, resolve);
  }

  calls += 1;

  return then.call(this, resolve);
};
