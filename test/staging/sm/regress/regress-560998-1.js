/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
for (let j = 0; j < 4; ++j) {
  function g() { j; }
  g();
}

