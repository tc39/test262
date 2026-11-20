// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  The getter and setter of a public auto-accessor are built-in functions
  named "get <name>" and "set <name>"
esid: sec-makeautoaccessorgetter
info: |
  MakeAutoAccessorGetter ( name, privateStateName )

  ...
  2. Return CreateBuiltinFunction(getterClosure, 0, name, « », the current Realm Record, %Function.prototype%, "get").

  MakeAutoAccessorSetter ( name, privateStateName )

  ...
  2. Return CreateBuiltinFunction(setterClosure, 1, name, « », the current Realm Record, %Function.prototype%, "set").
includes: [propertyHelper.js, isConstructor.js]
features: [decorators, Symbol, Reflect.construct]
---*/

var sym = Symbol('sym');
var anonymous = Symbol();

class C {
  accessor x;
  static accessor y;
  accessor 'z';
  accessor 1;
  accessor [sym];
  accessor [anonymous];
}

function check(target, key, name) {
  var desc = Object.getOwnPropertyDescriptor(target, key);
  assert.sameValue(desc.enumerable, false, name + ' is not enumerable');
  assert.sameValue(desc.configurable, true, name + ' is configurable');

  verifyProperty(desc.get, 'name', {
    value: 'get ' + name,
    writable: false,
    enumerable: false,
    configurable: true
  });
  verifyProperty(desc.set, 'name', {
    value: 'set ' + name,
    writable: false,
    enumerable: false,
    configurable: true
  });
  verifyProperty(desc.get, 'length', {
    value: 0,
    writable: false,
    enumerable: false,
    configurable: true
  });
  verifyProperty(desc.set, 'length', {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: true
  });

  assert.sameValue(Object.getPrototypeOf(desc.get), Function.prototype, name + ' getter prototype');
  assert.sameValue(Object.getPrototypeOf(desc.set), Function.prototype, name + ' setter prototype');
  assert.sameValue(isConstructor(desc.get), false, name + ' getter is not a constructor');
  assert.sameValue(isConstructor(desc.set), false, name + ' setter is not a constructor');
  assert.sameValue(Object.prototype.hasOwnProperty.call(desc.get, 'prototype'), false, name + ' getter has no prototype property');
}

check(C.prototype, 'x', 'x');
check(C, 'y', 'y');
check(C.prototype, 'z', 'z');
check(C.prototype, '1', '1');
check(C.prototype, sym, '[sym]');
check(C.prototype, anonymous, '');
