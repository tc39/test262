// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff
 */

// This test appeared in bug 497789 comment 78.

var a = {x: 'a'},
    b1 = Object.create(a),
    c1 = Object.create(b1),
    b2 = Object.create(a),
    c2 = Object.create(b2);

b2.x = 'b';  // foreshadowing a.x

var s = '';
for (var obj of [c1, c2])
    s += obj.x;
assert.sameValue(s, 'ab');

assert.sameValue(0, 0, "Property cache soundness: objects with the same shape but different prototypes.");
