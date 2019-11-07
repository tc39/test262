// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error.prototype.toString
description: >
  Gets the Object message
info: |
  AggregateError.prototype.toString ( )

  ...
  5. Let msg be ? Get(O, "message").
  ...
features: [AggregateError]
---*/

var method = AggregateError.prototype.toString;

var called = 0;
var nameCalled = 0;
var obj = {
  get name() {
    nameCalled += 1;
  },
  get message() {
    called += 1;
  }
};

method.call(obj);

assert.sameValue(nameCalled, 1);
assert.sameValue(called, 1);
