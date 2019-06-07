// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-weak-ref.prototype.deref
description: Throws a TypeError if this does not have a [[Target]] internal slot
info: |
  WeakRef.prototype.deref ()

  1. Let weakRef be the this value.
  2. If Type(weakRef) is not Object, throw a TypeError exception.
  3. If weakRef does not have a [[Target]] internal slot, throw a TypeError exception.
  4. Let target be the value of weakRef.[[Target]].
  5. If target is not empty,
    a. Perform ! KeepDuringJob(target).
    b. Return target.
  6. Return undefined.
features: [WeakRef]
---*/

assert.sameValue(typeof WeakRef.prototype.deref, 'function');

var defer = WeakRef.prototype.defer;

assert.throws(TypeError, function() {
  defer.call({ ['[[Target]]']: {} });
}, 'Ordinary object without [[Target]]');

assert.throws(TypeError, function() {
  defer.call(WeakRef.prototype);
}, 'WeakRef.prototype does not have a [[Target]] internal slot');

assert.throws(TypeError, function() {
  defer.call(WeakRef);
}, 'WeakRef does not have a [[Target]] internal slot');

var wm = new WeakMap();
assert.throws(TypeError, function() {
  defer.call(wm);
}, 'WeakMap instance');

var ws = new WeakSet();
assert.throws(TypeError, function() {
  defer.call(ws);
}, 'WeakSet instance');
