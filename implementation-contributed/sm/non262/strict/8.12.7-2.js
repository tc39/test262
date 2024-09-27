// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- non262-strict-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

// delete o[p] only performs ToString(p) once, even if there's a strict error.
var hits = 0;
var p = {
    toString: function () {
        hits++;
        return "noconfig";
    }
};
assert.sameValue(testLenientAndStrict('var o = Object.freeze({noconfig: "ow"}); delete o[p]',
                              returns(false), raisesException(TypeError)),
         true);
assert.sameValue(hits, 2);

