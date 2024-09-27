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

function potatoMasher(obj, arg) { this.eval(arg); }
potatoMasher(this, "var s = Error().stack");
assert.sameValue(/potatoMasher/.exec(s) instanceof Array, true);

