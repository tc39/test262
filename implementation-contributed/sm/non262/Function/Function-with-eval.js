// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Function-shell.js
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
 */

assert.sameValue(new Function(
            "eval('var foo = 915805');" +
            "return foo;"
         )(),
         915805);

assert.sameValue(new Function(
            "eval('function foo() {" +
                      "return 915805;" +
                  "}');" +
            "return foo;"
         )()(),
         915805);

/******************************************************************************/

print("Tests complete");
