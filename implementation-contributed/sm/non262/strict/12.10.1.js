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

/*
 * 'with' statements are forbidden in strict top-level code. This is
 * eval code, but that's close enough.
 */
assert.sameValue(testLenientAndStrict('with (1) {}',
                              completesNormally,
                              raisesException(SyntaxError)),
         true);

/* 'with' statements are forbidden in strict function code. */
assert.sameValue(testLenientAndStrict('function f() { "use strict"; with (1) {} }',
                              parseRaisesException(SyntaxError),
                              parseRaisesException(SyntaxError)),
         true);
                              
/*
 * A use strict directive in a function mustn't affect the strictness
 * of subsequent code.
 */
assert.sameValue(parsesSuccessfully('function f() { "use strict"; }; with (1) {}'),
         true);

