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
---*/var array = [2, 4, 8, 16, 32, 64, 128];
var obj = {
  [Symbol.iterator]() {
    return {
      index: 0,
      next() {
        throw new RangeError();
      },
      isDone: false,
      get val() {
        this.index++;
        if (this.index > 7) {
          this.isDone = true;
        }
        return 1 << this.index;
      }
    };
  }
};
assertThrowsInstanceOf(function() {
  Tuple.from(obj);
}, RangeError, 'Tuple.from(obj) throws');

