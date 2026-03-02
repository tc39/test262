// Copyright (C) 2026 Taras Mankovski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator.prototype.return
description: >
    When generator.return() triggers a finally block containing yield*,
    the delegated generator's values are yielded before completion.
info: |
    27.5.3.2 Generator.prototype.return ( value )
    
    yield* in a finally block during return delegates to the inner generator.
    Each value from the inner generator is yielded before the outer generator
    completes with the return value.
features: [generators]
---*/

function* delegatedCleanup() {
  yield "cleanup-1";
  yield "cleanup-2";
}

function* withYieldStarCleanup() {
  try {
    yield "work";
  } finally {
    yield* delegatedCleanup();
  }
}

var gen = withYieldStarCleanup();
var result;

result = gen.next();
assert.sameValue(result.value, "work", "r1.value");

result = gen.return("cancelled");
assert.sameValue(result.value, "cleanup-1", "r2.value (first delegated yield)");
assert.sameValue(result.done, false, "r2.done");

result = gen.next();
assert.sameValue(
  result.value,
  "cleanup-2",
  "r3.value (second delegated yield)",
);
assert.sameValue(result.done, false, "r3.done");

result = gen.next();
assert.sameValue(result.value, "cancelled", "r4.value (return value)");
assert.sameValue(result.done, true, "r4.done");
