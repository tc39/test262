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
---*//* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

(function (y) {
    arguments.y = 2;
    var x = Object.create(arguments);
    x[0] = 3;
    assert.sameValue(x[0], 3);
    assert.sameValue(x.y, 2);
    assert.sameValue(y, 1);
})(1);

