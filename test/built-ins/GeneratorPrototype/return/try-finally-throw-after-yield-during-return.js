// Copyright (C) 2026 Taras Mankovski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator.prototype.return
description: >
    When generator.return() triggers a finally block that yields and then
    throws, the yield suspends normally and the throw occurs on next resume.
info: |
    27.5.3.2 Generator.prototype.return ( value )
    
    If a finally block yields and then throws, the generator suspends at
    the yield. When resumed with next(), execution continues and the
    exception is thrown.
features: [generators]
---*/

function* genWithSuspendingThrowingCleanup() {
  try {
    yield "work";
  } finally {
    yield "cleanup";
    throw new Error("cleanup-failed-after-yield");
  }
}

var gen = genWithSuspendingThrowingCleanup();
var result;

result = gen.next();
assert.sameValue(result.value, "work", "r1.value");

result = gen.return("cancelled");
assert.sameValue(result.value, "cleanup", "r2.value (yield in finally)");
assert.sameValue(result.done, false, "r2.done (suspended at yield)");

var caught;
try {
  gen.next();
} catch (e) {
  caught = e.message;
}

assert.sameValue(
  caught,
  "cleanup-failed-after-yield",
  "Exception after yield should propagate on resume",
);

result = gen.next();
assert.sameValue(result.value, undefined, "Generator completion value");
assert.sameValue(result.done, true, "Generator should be completed");
