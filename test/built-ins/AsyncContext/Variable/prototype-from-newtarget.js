// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
  The [[Prototype]] internal slot is computed from NewTarget.
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
  4. If Type(proto) is not Object, then
    a. Let realm be ? GetFunctionRealm(constructor).
    b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
  5. Return proto.
features: [AsyncContext]
---*/

var asyncVariable = new AsyncContext.Variable();
assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype);
