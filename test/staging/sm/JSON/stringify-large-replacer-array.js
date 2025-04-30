/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  JSON.stringify with a large replacer array
esid: pending
---*/

var replacer = [];
for (var i = 0; i < 4096; i++)
  replacer.push(i);

assert.sameValue(JSON.stringify({ "foopy": "FAIL", "4093": 17 }, replacer), '{"4093":17}');
