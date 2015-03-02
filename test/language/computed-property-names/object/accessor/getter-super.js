// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    computed property getters can call super methods
---*/

function ID(x) {
  return x;
}

var proto = {
  m() {
    return ' proto m';
  }
};
var object = {
  get ['a']() { return 'a' + super.m(); },
  get [ID('b')]() { return 'b' + super.m(); },
  get [0]() { return '0' + super.m(); },
  get [ID(1)]() { return '1' + super.m(); },
};

Object.setPrototypeOf(object, proto);

assert.sameValue(object.a, 'a proto m');
assert.sameValue(object.b, 'b proto m');
assert.sameValue(object[0], '0 proto m');
assert.sameValue(object[1], '1 proto m');
