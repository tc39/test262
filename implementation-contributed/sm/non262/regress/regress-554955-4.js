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

function f() {
    return function(a) {
        // This eval must take place before the block is cloned, when the
        // call object is still not marked as a delegate. The scope chain
        // purge for the JSOP_DEFVAR will not change the global's shape,
        // and the property cache entry will remain valid.
        eval(a);
        {
            let c = 3;
            // This eval forces the block to be cloned, so its shape gets
            // used as the property cache key shape.
            eval('');
            return b;
        };
    };
}

var b = 1;
var g1 = f();
var g2 = f();

/* Call the lambda once, caching a reference to the global b. */
g1('');

/*
 * If this call sees the above cache entry, then it will erroneously use the
 * global b.
 */
assert.sameValue(g2('var b=2'), 2);

