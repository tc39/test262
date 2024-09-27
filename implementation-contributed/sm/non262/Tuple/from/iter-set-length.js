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
var result, nextIterResult, lastIterResult;
items[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = nextIterResult;
      nextIterResult = lastIterResult;
      return result;
    }
  };
};

nextIterResult = lastIterResult = {
  done: true
};
result = Tuple.from(items);

assert.sameValue(result.length, 0);

nextIterResult = {
  done: false
};
lastIterResult = {
  done: true
};
result = Tuple.from(items);

assert.sameValue(result.length, 1);

