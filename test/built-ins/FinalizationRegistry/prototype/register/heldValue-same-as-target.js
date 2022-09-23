// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-finalization-registry.prototype.register
description: heldValue may be the same as target
info: |
  FinalizationRegistry.prototype.register ( _target_ , _heldValue_ [, _unregisterToken_ ] )
  1. Let _finalizationRegistry_ be the *this* value.
  2. Perform ? RequireInternalSlot(_finalizationRegistry_, [[Cells]]).
  3. If CanBeHeldWeakly(_target_) is *false*, throw a *TypeError* exception.
  4. If SameValue(_target_, _heldValue_) is *true*, throw a *TypeError* exception.
features: [FinalizationRegistry]
---*/

var finalizationRegistry = new FinalizationRegistry(function() {});

var target = {};
assert.throws(TypeError, () => finalizationRegistry.register(target, target));
