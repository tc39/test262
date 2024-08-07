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
---*//* Step 6b. */
/* AddEntriesFromIterable should throw if next() throws */

var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = {};
      Object.defineProperty(result, 'value', {
        get: function() {
          throw new SyntaxError();
        }
      });

      return result;
    }
  };
};

assertThrowsInstanceOf(function() {
  Tuple.from(iter);
}, SyntaxError, "from() should throw if next() returns value that throws");

