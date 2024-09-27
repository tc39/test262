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
---*/var items = {};
var firstIterResult = {
  done: false,
  value: 1
};
var secondIterResult = {
  done: false,
  value: 2
};
var thirdIterResult = {
  done: true,
  value: 3
};
var nextIterResult = firstIterResult;
var nextNextIterResult = secondIterResult;
var result;

items[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = nextIterResult;

      nextIterResult = nextNextIterResult;
      nextNextIterResult = thirdIterResult;

      return result;
    }
  };
};

result = Tuple.from(items);

assert.sameValue(result[0], firstIterResult.value);
assert.sameValue(result[1], secondIterResult.value);

