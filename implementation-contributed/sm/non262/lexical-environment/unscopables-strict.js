// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-lexical-environment-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Strict assignment to the name of a property that's masked by @@unscopables
// throws a ReferenceError.

let env = {k: 1};
let f;
with (env) {
    f = function () {
        "use strict";
        k = 2;
    };
}

f();
assert.sameValue(env.k, 2);

env[Symbol.unscopables] = {k: true};
assertThrowsInstanceOf(f, ReferenceError);

// @@unscopables is tested when the LHS of assignment is evaluated, so there is
// no effect on the assignment if it is changed while evaluating the RHS.
let g;
with (env) {
    g = function () {
        "use strict";
        k = (env[Symbol.unscopables].k = true, 3);
    }
}
env[Symbol.unscopables].k = false;
g();
assert.sameValue(env.k, 3);

