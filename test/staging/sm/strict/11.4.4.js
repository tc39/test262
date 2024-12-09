/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-shell.js, sm/non262-strict-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
/*
 * Prefix increment expressions must not have 'eval' or 'arguments' as
 * their operands.
 */
assert.sameValue(testLenientAndStrict('++arguments',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('++eval',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('++(arguments)',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('++(eval)',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

