// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-disposablestack.prototype.adopt
description: Throws a TypeError if this does not have a [[DisposableState]] internal slot
info: |
  DisposableStack.prototype.adopt ( )

  1. Let disposableStack be the this value.
  2. Perform ? RequireInternalSlot(disposableStack, [[DisposableState]]).
  3. ...

  RequireInternalSlot ( O, internalSlot )

  1. If O is not an Object, throw a TypeError exception.
  2. If O does not have an internalSlot internal slot, throw a TypeError exception.
  ...

features: [explicit-resource-management]
---*/

assert.sameValue(typeof DisposableStack.prototype.adopt, 'function');

var adopt = DisposableStack.prototype.adopt;

assert.throws(TypeError, function() {
  adopt.call({ ['[[DisposableState]]']: {} });
}, 'Ordinary object without [[DisposableState]]');

assert.throws(TypeError, function() {
  adopt.call(DisposableStack.prototype);
}, 'DisposableStack.prototype does not have a [[DisposableState]] internal slot');

assert.throws(TypeError, function() {
  adopt.call(DisposableStack);
}, 'DisposableStack does not have a [[DisposableState]] internal slot');

var asyncStack = new AsyncDisposableStack(function() {});
assert.throws(TypeError, function() {
  adopt.call(asyncStack);
}, 'AsyncDisposableStack instance');
