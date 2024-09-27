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
 * Simple assignment expressions in strict mode code must not be
 * assignments to 'eval' or 'arguments'.
 */
assert.sameValue(testLenientAndStrict('arguments=1',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('eval=1',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('(arguments)=1',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('(eval)=1',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

