// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
  Returns a new ordinary object from the FinalizationRegistry constructor
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
features: [AsyncContext, for-of]
---*/

var optionsBag = {};
var asyncVariable = new AsyncContext.Variable(optionsBag);

assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype);
assert.notSameValue(asyncVariable, optionsBag, 'does not return the same object');
assert.sameValue(asyncVariable instanceof AsyncContext.Variable, true, 'instanceof');

for (let key of Object.getOwnPropertyNames(asyncVariable)) {
  assert(false, `should not set any own named properties: ${key}`);
}

for (let key of Object.getOwnPropertySymbols(asyncVariable)) {
  assert(false, `should not set any own symbol properties: ${String(key)}`);
}

assert.sameValue(Object.getPrototypeOf(asyncVariable), AsyncContext.Variable.prototype);
