// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
class base {
    constructor(a, b, c) {
        assert.sameValue(a, 1);
        assert.sameValue(b, 2);
        assert.sameValue(c, 3);
        this.calledBase = true;
    }
}

class doTest extends base {
    constructor(arr) {
        super(...arr);
    }
}

assert.sameValue(new doTest([1,2,3]).calledBase, true);

class testRest extends base {
   constructor(...args) {
       super(...args);
   }
}

assert.sameValue(new testRest(1,2,3).calledBase, true);

