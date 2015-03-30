// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.8
description: >
    Expressions should be evaluated and converted to Stings according to the
    ToString abstract operation.
---*/
var plain = {};
var custom = {
  toString: function() {
    return '"own" toString';
  }
};

assert.sameValue(`${plain}`, '[object Object]');
assert.sameValue(`1${plain}`, '1[object Object]');
assert.sameValue(`${plain}2`, '[object Object]2');
assert.sameValue(`1${plain}2`, '1[object Object]2');

assert.sameValue(`${custom}`, '"own" toString');
assert.sameValue(`1${custom}`, '1"own" toString');
assert.sameValue(`${custom}2`, '"own" toString2');
assert.sameValue(`1${custom}2`, '1"own" toString2');
