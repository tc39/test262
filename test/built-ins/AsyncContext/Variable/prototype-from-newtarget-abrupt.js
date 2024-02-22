// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
  Return abrupt from getting the NewTarget prototype
info: |
  AsyncContext.Variable ( options )

  ...
  5. Let asyncVariable be ? OrdinaryCreateFromConstructor(NewTarget, "%AsyncContext.Variable.prototype%", « [[AsyncVariableName]], [[AsyncVariableDefaultValue]] »).
  ...
  8. Return asyncVariable.

  OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )

  ...
  2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
  3. Return ObjectCreate(proto, internalSlotsList).

  GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

  3. Let proto be ? Get(constructor, 'prototype').
features: [AsyncContext, Reflect.construct]
---*/

var calls = 0;
var newTarget = function() {}.bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function() {
    calls += 1;
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.construct(AsyncContext.Variable, [], newTarget);
});

assert.sameValue(calls, 1);
