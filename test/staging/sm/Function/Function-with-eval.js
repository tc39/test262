/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
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
