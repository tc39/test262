// Copyright (C) 2026 Taras Mankovski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator.prototype.return
description: >
    When generator.return() is called while paused in nested try blocks,
    yields in both inner and outer finally blocks should suspend the generator.
info: |
    27.5.3.2 Generator.prototype.return ( value )
    
    When return triggers nested finally blocks, each yield in each finally
    block causes the generator to suspend. The generator completes only
    after all finally blocks have finished executing.
features: [generators]
---*/

function* nestedCleanup() {
  try {
    try {
      yield "work";
    } finally {
      yield "inner-cleanup";
    }
  } finally {
    yield "outer-cleanup";
  }
}

var gen = nestedCleanup();
var result;

result = gen.next();
assert.sameValue(result.value, "work", "r1.value");
assert.sameValue(result.done, false, "r1.done");

result = gen.return("cancelled");
assert.sameValue(
  result.value,
  "inner-cleanup",
  "r2.value (inner finally yield)",
);
assert.sameValue(result.done, false, "r2.done (suspended at inner finally)");

result = gen.next();
assert.sameValue(
  result.value,
  "outer-cleanup",
  "r3.value (outer finally yield)",
);
assert.sameValue(result.done, false, "r3.done (suspended at outer finally)");

result = gen.next();
assert.sameValue(result.value, "cancelled", "r4.value (return value)");
assert.sameValue(result.done, true, "r4.done (completed)");
