// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/var args = [];
var firstResult = {
  done: false,
  value: {}
};
var secondResult = {
  done: false,
  value: {}
};
var mapFn = function(value, idx) {
  args.push(arguments);
};
var items = {};
var nextResult = firstResult;
var nextNextResult = secondResult;

items[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = nextResult;
      nextResult = nextNextResult;
      nextNextResult = {
        done: true
      };

      return result;
    }
  };
};

Tuple.from(items, mapFn);

assert.sameValue(args.length, 2);

assert.sameValue(args[0].length, 2);
assert.sameValue(args[0][0], firstResult.value);
assert.sameValue(args[0][1], 0);

assert.sameValue(args[1].length, 2);
assert.sameValue(args[1][0], secondResult.value);
assert.sameValue(args[1][1], 1);

