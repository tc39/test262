// Copyright (C) 2021 Caio Lima (Igalia SL). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: we might have partially initalized objects with only some private fields
esid: sec-privatefieldget
info: |
  PrivateFieldGet (P, O)
    1. Assert: P is a Private Name.
    2. If O is not an object, throw a TypeError exception.
    3. If P.[[Kind]] is "field",
      a. Let entry be PrivateFieldFind(P, O).
      b. If entry is empty, throw a TypeError exception.
      c. Return entry.[[PrivateFieldValue]].
    4. Perform ? PrivateBrandCheck(O, P).
    5. If P.[[Kind]] is "method",
      a. Return P.[[Value]].
    6. Else,
      a. Assert: P.[[Kind]] is "accessor".
      b. If P does not have a [[Get]] field, throw a TypeError exception.
      c. Let getter be P.[[Get]].
      d. Return ? Call(getter, O).
features: [class, class-fields-private]
---*/

function throwException() {
  throw new Test262Error();
}

let obj = {};

class Base {
  constructor() {
    return obj;
  }
}

class C extends Base {
  #f1 = 'test262';
  #f2 = throwException();
  
  static access(o) {
    assert.sameValue('test262', o.#f1);
    assert.throws(TypeError, function () {
      o.#f2;
    });
  }
}

assert.throws(Test262Error, function () {
  let c = new C();
}, 'Initialization should throw Test262Error');

C.access(obj);

