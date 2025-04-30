/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  String.prototype.match behavior with zero-length matches involving forward lookahead
esid: pending
---*/

var r = /(?=x)/g;

var res = "aaaaaaaaaxaaaaaaaaax".match(r);
assert.sameValue(res.length, 2);
