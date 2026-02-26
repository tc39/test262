// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
  [[Prototype]] defaults to %AsyncContext.Variable.prototype% if NewTarget.prototype is not an object.
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
features: [AsyncContext, Reflect.construct, Symbol]
---*/

var asyncVariable;
function newTarget() { }

newTarget.prototype = undefined;
asyncVariable = Reflect.construct(AsyncContext.Variable, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype, 'newTarget.prototype is undefined');

newTarget.prototype = null;
asyncVariable = Reflect.construct(AsyncContext.Variable, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype, 'newTarget.prototype is null');

newTarget.prototype = true;
asyncVariable = Reflect.construct(AsyncContext.Variable, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype, 'newTarget.prototype is a Boolean');

newTarget.prototype = '';
asyncVariable = Reflect.construct(AsyncContext.Variable, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype, 'newTarget.prototype is a String');

newTarget.prototype = Symbol();
asyncVariable = Reflect.construct(AsyncContext.Variable, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype, 'newTarget.prototype is a Symbol');

newTarget.prototype = 1;
asyncVariable = Reflect.construct(AsyncContext.Variable, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype, 'newTarget.prototype is a Number');
