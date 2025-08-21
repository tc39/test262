// Copyright (C) 2019 Caio Lima. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: It is not possible to add private fields on frozen objects
esid: sec-define-field
info: |
  1.1 PrivateFieldAdd ( O, P, value )
    1. If O.[[Extensible]] is false, throw a TypeError exception.
    ...

features: [class, class-fields-private, class-fields-public]
flags: [onlyStrict]
---*/

class NonExtensibleBase {
  constructor(seal) {
    if (seal) Object.preventExtensions(this);
  }
}

class ClassWithPrivateField extends NonExtensibleBase {
  #val;

  constructor(seal) {
    super(seal);
    this.#val = 42;
  }
  val() {
    return this.#val;
  }
}

let t = new ClassWithPrivateField(false);
assert.sameValue(t.val(), 42);

assert.throws(TypeError, function() {
  new ClassWithPrivateField(true);
});


class TestFreeze {
  #g = (Object.freeze(this), "Test262");
}

assert.throws(TypeError, function() {
  new TestFreeze();
});
