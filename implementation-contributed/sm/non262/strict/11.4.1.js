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

/* Deleting an identifier is a syntax error in strict mode code only. */
assert.sameValue(testLenientAndStrict('delete x;',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

/*
 * A reference expression surrounded by parens is itself a reference
 * expression.
 */
assert.sameValue(testLenientAndStrict('delete (x);',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

/* Deleting other sorts of expressions are not syntax errors in either mode. */
assert.sameValue(testLenientAndStrict('delete x.y;',
                              parsesSuccessfully,
                              parsesSuccessfully),
         true);
assert.sameValue(testLenientAndStrict('delete Object();',
                              returns(true),
                              returns(true)),
         true);

/* Functions should inherit the surrounding code's strictness. */
assert.sameValue(testLenientAndStrict('function f() { delete x; }',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

/* Local directives override the surrounding code's strictness. */
assert.sameValue(testLenientAndStrict('function f() { "use strict"; delete x; }',
                              parseRaisesException(SyntaxError),
                              parseRaisesException(SyntaxError)),
         true);

