// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  The getter and setter of a private auto-accessor are named "get #<name>"
  and "set #<name>"
esid: sec-makeautoaccessorgetter
info: |
  MakeAutoAccessorGetter ( name, privateStateName )

  ...
  2. Return CreateBuiltinFunction(getterClosure, 0, name, « », the current Realm Record, %Function.prototype%, "get").

  MakeAutoAccessorSetter ( name, privateStateName )

  ...
  2. Return CreateBuiltinFunction(setterClosure, 1, name, « », the current Realm Record, %Function.prototype%, "set").
features: [decorators, class-fields-private]
---*/

var getters = {};
var setters = {};

function dec(value, context) {
  getters[context.name] = value.get;
  setters[context.name] = value.set;
}

class C {
  @dec accessor #x;
  @dec static accessor #y;
}

assert.sameValue(getters['#x'].name, 'get #x', 'instance getter name');
assert.sameValue(setters['#x'].name, 'set #x', 'instance setter name');
assert.sameValue(getters['#y'].name, 'get #y', 'static getter name');
assert.sameValue(setters['#y'].name, 'set #y', 'static setter name');
assert.sameValue(getters['#x'].length, 0, 'getter length');
assert.sameValue(setters['#x'].length, 1, 'setter length');
