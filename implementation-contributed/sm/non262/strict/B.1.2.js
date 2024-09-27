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

assert.sameValue(testLenientAndStrict('"\\010"',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

assert.sameValue(testLenientAndStrict('"\\00"',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

assert.sameValue(testLenientAndStrict('"\\1"',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

assert.sameValue(testLenientAndStrict('"\\08"',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

assert.sameValue(testLenientAndStrict('"\\0"',
                              parsesSuccessfully,
                              parsesSuccessfully),
         true);

assert.sameValue(testLenientAndStrict('"\\0x"',
                              parsesSuccessfully,
                              parsesSuccessfully),
         true);

