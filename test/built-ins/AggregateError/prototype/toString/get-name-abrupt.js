// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error.prototype.toString
description: >
  Gets the Object name, returning abrupt completion
info: |
  AggregateError.prototype.toString ( )

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. Let name be ? Get(O, "name").
  4. If name is undefined, set name to "AggregateError"; otherwise set name to ? ToString(name).
  ...
features: [AggregateError]
---*/

var method = AggregateError.prototype.toString;

var called = 0;
var obj = {
  get name() {
    called += 1;
    throw new Test262Error();
  }
};

assert.throws(Test262Error, () => {
  method.call(obj);
});

assert.sameValue(called, 1);
