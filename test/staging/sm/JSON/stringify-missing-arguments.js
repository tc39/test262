/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  JSON.stringify with no arguments
esid: pending
---*/

assert.sameValue(JSON.stringify(), undefined);
