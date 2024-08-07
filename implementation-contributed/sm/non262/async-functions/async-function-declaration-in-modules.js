// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-async-functions-shell.js
- non262-shell.js
- shell.js
flags:
- module
- noStrict
features: []
description: |
  pending
esid: pending
---*/
async function f() {
    return "success";
}

var AsyncFunction = (async function(){}).constructor;

assert.sameValue(f instanceof AsyncFunction, true);

f().then(v => {
    assert.sameValue("success", v);
});
