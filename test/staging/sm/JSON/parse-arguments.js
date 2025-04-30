/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  JSON.parse handling of omitted arguments
esid: pending
---*/

assert.throws(SyntaxError, function() {
  JSON.parse();
});
