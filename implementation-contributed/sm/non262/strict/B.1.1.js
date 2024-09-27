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

/* Octal integer literal at top level. */
assert.sameValue(testLenientAndStrict('010',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

/* Octal integer literal in strict function body */
assert.sameValue(parseRaisesException(SyntaxError)
         ('function f() { "use strict"; 010; }'),
         true);
                              

/*
 * Octal integer literal after strict function body (restoration of
 * scanner state)
 */
assert.sameValue(parsesSuccessfully('function f() { "use strict"; }; 010'),
         true);

/* Octal integer literal in function body */
assert.sameValue(parsesSuccessfully('function f() { 010; }'),
         true);

