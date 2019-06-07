// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-finalization-group.prototype.unregister
description: Throws a TypeError if unregisterToken is not an Object
info: |
  FinalizationGroup.prototype.unregister ( unregisterToken )

  1. Let finalizationGroup be the this value.
  2. If Type(finalizationGroup) is not Object, throw a TypeError exception.
  3. If finalizationGroup does not have a [[Cells]] internal slot, throw a TypeError exception.
  4. If Type(unregisterToken) is not Object, throw a TypeError exception.
  ...
features: [FinalizationGroup]
---*/

assert.sameValue(typeof FinalizationGroup.prototype.unregister, 'function');

var fg = new FinalizationGroup(function() {});

assert.throws(TypeError, function() {
  fg(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  fg(null);
}, 'null');

assert.throws(TypeError, function() {
  fg(true);
}, 'true');

assert.throws(TypeError, function() {
  fg(false);
}, 'false');

assert.throws(TypeError, function() {
  fg(1);
}, 'number');

assert.throws(TypeError, function() {
  fg('object');
}, 'string');

var s = Symbol();
assert.throws(TypeError, function() {
  fg(s);
}, 'symbol');
