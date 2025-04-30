/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [compareArray.js]
flags:
  - noStrict
description: |
  String.prototype.split with undefined separator
esid: pending
---*/

var s = '--undefined--undefined--';

assert.compareArray(s.split(undefined, undefined), [s]);
assert.compareArray(s.split(undefined, -1), [s]);

assert.compareArray(s.split(undefined, 1), [s]);
assert.compareArray(s.split("undefined", 1), ["--"]);

assert.compareArray(s.split("-", 0), []);
assert.compareArray(s.split(undefined, 0), []);
assert.compareArray(s.split(s, 0), []);
