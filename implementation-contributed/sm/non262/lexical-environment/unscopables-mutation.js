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
---*/// When obj[@@unscopables].x changes, bindings appear and disappear accordingly.

let x = "global";
function getX() { return x; }

let unscopables = {x: true};
let obj = {x: "obj", [Symbol.unscopables]: unscopables};

with (obj) {
    assert.sameValue(x, "global");
    x = "global-1";
    assert.sameValue(x, "global-1");
    assert.sameValue(obj.x, "obj");

    unscopables.x = false;  // suddenly x appears in the with-environment

    assert.sameValue(x, "obj");
    x = "obj-1";
    assert.sameValue(getX(), "global-1");  // unchanged
    assert.sameValue(obj.x, "obj-1");

    unscopables.x = true;  // *poof*

    assert.sameValue(x, "global-1");
    x = "global-2";
    assert.sameValue(getX(), "global-2");
    assert.sameValue(obj.x, "obj-1");  // unchanged

    // The determination of which binding is assigned happens when the LHS of
    // assignment is evaluated, before the RHS. This is observable if we make
    // the binding appear or disappear during evaluation of the RHS, before
    // assigning.
    x = (unscopables.x = false, "global-3");
    assert.sameValue(getX(), "global-3");
    assert.sameValue(obj.x, "obj-1");

    x = (unscopables.x = true, "obj-2");
    assert.sameValue(getX(), "global-3");
    assert.sameValue(obj.x, "obj-2");
}

assert.sameValue(x, "global-3");

