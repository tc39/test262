// Copyright (C) 2026 Taras Mankovski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator.prototype.return
description: >
    When generator.return() is called while paused in try block, and the
    finally block contains a yield, the generator suspends at that yield.
info: |
    27.5.3.2 Generator.prototype.return ( value )
    
    8. Return ? GeneratorResumeAbrupt(generator, Completion Record 
       { [[Type]]: return, [[Value]]: value, [[Target]]: empty }, generatorBrand).
    
    When the return completion triggers a finally block containing yield,
    GeneratorYield suspends the generator with done: false.
features: [generators]
---*/

var inFinally = 0;
var afterYield = 0;

function* g() {
  try {
    yield "in-try";
  } finally {
    inFinally += 1;
    yield "in-finally";
    afterYield += 1;
  }
}

var iter = g();
var result;

result = iter.next();
assert.sameValue(result.value, "in-try", "First result value");
assert.sameValue(result.done, false, "First result done");
assert.sameValue(inFinally, 0, "finally not yet entered");

result = iter.return(42);
assert.sameValue(
  result.value,
  "in-finally",
  "Second result value (yield in finally)",
);
assert.sameValue(result.done, false, "Second result done (suspended at yield)");
assert.sameValue(inFinally, 1, "finally block entered");
assert.sameValue(afterYield, 0, "code after yield not yet executed");

result = iter.next();
assert.sameValue(result.value, 42, "Third result value (return value)");
assert.sameValue(result.done, true, "Third result done (completed)");
assert.sameValue(afterYield, 1, "code after yield executed");
