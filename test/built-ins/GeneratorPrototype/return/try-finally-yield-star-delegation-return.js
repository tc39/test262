// Copyright (C) 2026 Taras Mankovski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator.prototype.return
description: >
    When generator.return() is called on an outer generator delegating via
    yield*, and the inner generator has a yield in its finally block, the
    generator suspends at the inner finally yield.
info: |
    27.5.3.2 Generator.prototype.return ( value )
    
    When return is called on a generator that is delegating via yield*,
    the return is forwarded to the inner generator. If the inner generator
    has a finally block with yield, it suspends there.
features: [generators]
---*/

var cleanupOrder = [];

function* inner() {
  try {
    yield "inner-work";
    return "inner-done";
  } finally {
    yield "inner-cleanup";
    cleanupOrder.push("inner");
  }
}

function* outer() {
  try {
    var result = yield* inner();
    return result;
  } finally {
    yield "outer-cleanup";
    cleanupOrder.push("outer");
  }
}

var gen = outer();
var result;

result = gen.next();
assert.sameValue(
  result.value,
  "inner-work",
  "First yield from inner generator",
);
assert.sameValue(result.done, false, "First result done");

result = gen.return("cancelled");
assert.sameValue(
  result.value,
  "inner-cleanup",
  "Should yield from inner finally",
);
assert.sameValue(result.done, false, "Should suspend at inner finally yield");

result = gen.next();
assert.sameValue(
  result.value,
  "outer-cleanup",
  "Should yield from outer finally",
);
assert.sameValue(result.done, false, "Should suspend at outer finally yield");

result = gen.next();
assert.sameValue(result.value, "cancelled", "Should return original return value");
assert.sameValue(result.done, true, "Should be done after all finally blocks");
assert.sameValue(
  cleanupOrder.join(","),
  "inner,outer",
  "Cleanup order should be inner then outer",
);
