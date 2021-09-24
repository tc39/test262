// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.1.1
description: >
  new Map calls `set` for each item on the iterable argument in order.
info: |
  Map ( [ iterable ] )

  ...
  9. Repeat
    ...
    k. Let status be Call(adder, map, «k.[[value]], v.[[value]]»).
  ...
includes: [compareArray.js]
---*/

var mapSet = Map.prototype.set;
var counter = 0;

var iterable = [
  ["foo", 1],
  ["bar", 2]
];
var results = [];
var _this = [];

Map.prototype.set = function(k, v) {
  counter++;
  results.push([k, v]);
  _this.push(this);
  mapSet.call(this, k, v);
};

var map = new Map(iterable);

assert.sameValue(counter, 2, 'The value of counter is expected to be 2');

assert.compareArray(results[0], iterable[0], 'The value of results[0] is expected to equal the value of iterable[0]');
assert.compareArray(results[1], iterable[1], 'The value of results[1] is expected to equal the value of iterable[1]');
assert.sameValue(_this[0], map, 'The value of _this[0] is expected to equal the value of map');
assert.sameValue(_this[1], map, 'The value of _this[1] is expected to equal the value of map');
