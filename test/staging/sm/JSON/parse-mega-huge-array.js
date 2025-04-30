/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  JSON.parse should parse arrays of essentially unlimited size
esid: pending
---*/

var body = "0,";
for (var i = 0; i < 21; i++)
  body = body + body;
var str = '[' + body + '0]';

var arr = JSON.parse(str);
assert.sameValue(arr.length, Math.pow(2, 21) + 1);
