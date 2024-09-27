// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

function foo()
{
  assert.sameValue(foo.arguments.length, 0);
  assert.sameValue(foo.caller, null);
}

assert.sameValue(foo.arguments, null);
assert.sameValue(foo.caller, null);
foo();
assert.sameValue(foo.arguments, null);
assert.sameValue(foo.caller, null);

/******************************************************************************/

print("Tests complete");
