// Copyright (C) 2019 Caio Lima. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: It is possible to add private fields on frozen objects
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
features: [class, class-fields-private]
flags: [onlyStrict]
---*/

class Test {
  f = Object.freeze(this);
  #g = "Test262";

  get g() {
    return this.#g;
  }
}

let t = new Test();
assert.sameValue(t.g, "Test262");
