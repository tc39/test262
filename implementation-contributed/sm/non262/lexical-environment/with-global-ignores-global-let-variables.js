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
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

let v = "global-v";

function f(v, global)
{
  with (global)
    return v;
}

assert.sameValue(f("argument-v", this), "argument-v",
         "let-var shouldn't appear in global for |with| purposes");

print("Tests complete");
