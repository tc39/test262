/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Don't crash constant-folding an |if| governed by a truthy constant, whose alternative statement is another |if|
esid: pending
---*/

// Perform |if| constant folding correctly when the condition is constantly
// truthy and the alternative statement is another |if|.
if (true)
{
  assert.sameValue(true, true, "sanity");
}
else if (42)
{
  assert.sameValue(false, true, "not reached");
  assert.sameValue(true, false, "also not reached");
}
