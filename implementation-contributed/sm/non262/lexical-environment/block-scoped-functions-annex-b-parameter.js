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
---*/// Annex B.3.3.1 disallows Annex B lexical function behavior when redeclaring a
// parameter.

(function(f) {
  if (true) function f() {  }
  assert.sameValue(f, 123);
}(123));

(function(f) {
  { function f() {  } }
  assert.sameValue(f, 123);
}(123));

(function(f = 123) {
  assert.sameValue(f, 123);
  { function f() { } }
  assert.sameValue(f, 123);
}());

