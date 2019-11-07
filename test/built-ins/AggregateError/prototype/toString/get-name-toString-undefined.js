// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error.prototype.toString
description: >
  ToString(name) where it can return "undefined"
info: |
  AggregateError.prototype.toString ( )

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. Let name be ? Get(O, "name").
  4. If name is undefined, set name to "AggregateError"; otherwise set name to ? ToString(name).
  5. Let msg be ? Get(O, "message").
  6. If msg is undefined, set msg to the empty String; otherwise set msg to ? ToString(msg).
  7. If name is the empty String, return msg.
  8. If msg is the empty String, return name.
  9. Return the string-concatenation of name, the code unit 0x003A (COLON), the code unit 0x0020 (SPACE) and msg.
features: [AggregateError]
---*/

var method = AggregateError.prototype.toString;

var obj = {
  name: {
    toString() {
      return undefined;
    }
  },
  message: '',
};

assert.sameValue(method.call(obj), 'undefined', 'without message');

obj.message = 'lol';

assert.sameValue(method.call(obj), 'undefined\u003A\u0020lol', 'with message');
