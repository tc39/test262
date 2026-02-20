// Copyright (C) 2026 Taras Mankovski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator.prototype.return
description: >
    When generator.return() triggers a finally block that throws before
    yielding, the exception propagates to the caller.
info: |
    27.5.3.2 Generator.prototype.return ( value )
    
    If a finally block throws an exception before any yield, that exception
    replaces the return completion and propagates to the caller.
features: [generators]
---*/

function* genWithThrowingCleanup() {
  try {
    yield "work";
  } finally {
    throw new Error("cleanup-failed");
  }
}

var gen = genWithThrowingCleanup();
gen.next();

var caught;
try {
  gen.return("cancelled");
} catch (e) {
  caught = e.message;
}

assert.sameValue(
  caught,
  "cleanup-failed",
  "Exception from finally should propagate",
);

var result = gen.next();
assert.sameValue(result.value, undefined, "Generator completion value");
assert.sameValue(result.done, true, "Generator should be completed");
