// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error.prototype.toString
description: >
  An undefined message property value is cast to 'AggregateError'
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

var result = method.call({
  message: undefined,
});

assert.sameValue(result, 'AggregateError', 'explicit from own property');

result = false;
result = method.call({});

assert.sameValue(result, 'AggregateError', 'implicit');

result = false;
result = method.call(Object.create({
  message: undefined,
}));

assert.sameValue(result, 'AggregateError', 'explicit from prototype');

result = false;
result = method.call({
  message: undefined,
  name: 'a name',
});

assert.sameValue(result, 'a name', 'explicit from own property, name is set');

result = false;
result = method.call({
  name: 'a name',
});

assert.sameValue(result, 'a name', 'implicit, name is set');

result = false;
result = method.call(Object.create({
  message: undefined,
  name: 'a name',
}));

assert.sameValue(result, 'a name', 'explicit from prototype, name is set');
