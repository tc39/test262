// Copyright (C) 2026 Taras Mankovski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator.prototype.return
description: >
    When generator.return() triggers a finally block with yield, the yield
    can receive a value from the subsequent next() call, just like normal yields.
info: |
    27.5.3.2 Generator.prototype.return ( value )
    
    Yields in finally blocks during return behave like normal yields -
    they can receive values passed to next().
features: [generators]
---*/

var cleanupInput;

function* cleanupNeedsAck() {
  try {
    yield "work";
  } finally {
    cleanupInput = yield "cleanup-1";
    yield "cleanup-2";
  }
}

var gen = cleanupNeedsAck();
var result;

result = gen.next();
assert.sameValue(result.value, "work", "r1.value");

result = gen.return("cancelled");
assert.sameValue(result.value, "cleanup-1", "r2.value");
assert.sameValue(result.done, false, "r2.done");

result = gen.next("ack");
assert.sameValue(result.value, "cleanup-2", "r3.value");
assert.sameValue(result.done, false, "r3.done");

result = gen.next();
assert.sameValue(result.value, "cancelled", "r4.value");
assert.sameValue(result.done, true, "r4.done");

assert.sameValue(
  cleanupInput,
  "ack",
  "yield in finally received value from next()",
);
