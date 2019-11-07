// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error.prototype.toString
description: >
  Gets the Object message, returning abrupt completion
info: |
  AggregateError.prototype.toString ( )

  ...
  5. Let msg be ? Get(O, "message").
  6. If msg is undefined, set msg to the empty String; otherwise set msg to ? ToString(msg).
  7. If name is the empty String, return msg.
  8. If msg is the empty String, return name.
  9. Return the string-concatenation of name, the code unit 0x003A (COLON), the code unit 0x0020 (SPACE) and msg.
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
    throw new Test262Error();
  }
};

assert.throws(Test262Error, () => {
  method.call(obj);
});

assert.sameValue(called, 1);
assert.sameValue(nameCalled, 1);
