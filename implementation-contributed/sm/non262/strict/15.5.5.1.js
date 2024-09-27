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

function str() {
  return new String("foo");
}

assert.sameValue(testLenientAndStrict('var s = str(); s.length = 1; s.length',
                              returns(3), raisesException(TypeError)),
         true);
assert.sameValue(testLenientAndStrict('var s = str(); delete s.length',
                              returns(false), raisesException(TypeError)),
         true);

assert.sameValue(testLenientAndStrict('"foo".length = 1',
                              returns(1), raisesException(TypeError)),
         true);
assert.sameValue(testLenientAndStrict('delete "foo".length',
                              returns(false), raisesException(TypeError)),
         true);

