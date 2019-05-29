// Copyright (C) 2019 Caio Lima. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Public class fields initialization calls [[DefineOwnProperty]]
esid: sec-define-field
info: |
  DefineField(receiver, fieldRecord)
    ...
    8. If fieldName is a Private Name,
      a. Perform ? PrivateFieldAdd(fieldName, receiver, initValue).
    9. Else,
      a. Assert: IsPropertyKey(fieldName) is true.
      b. Perform ? CreateDataPropertyOrThrow(receiver, fieldName, initValue).
    10. Return.
includes: [compareArray.js]
features: [class, class-fields-public, Proxy]
---*/

let arr = [];

class ProxyBase {
  constructor() {
    return new Proxy(this, {
      defineProperty: function (target, key, descriptor) {
        arr.push(key);
        assert(descriptor.enumerable);
        assert(descriptor.configurable);
        assert(descriptor.writable);
        return Reflect.defineProperty(target, key, descriptor);
      }
    });
  }
}

class Test extends ProxyBase {
  f = 3;
  g = "test";
}

let t = new Test();
assert.sameValue(t.f, 3);
assert.sameValue(t.g, "test");

assert.compareArray(arr, ["f", "g"]);
