// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-forbodyevaluation
description: >
  A new per-iteration environment is created for the outer loop when an inner
  loop continues it by label
info: |
  ForBodyEvaluation ( test, increment, stmt, perIterationBindings, labelSet )

  [...]
  3. Repeat,
     [...]
     b. Let result be Completion(Evaluation of stmt).
     c. If LoopContinues(result, labelSet) is false, return ? UpdateEmpty(result, iterationResult).
     d. If result.[[Value]] is not empty, set iterationResult to result.[[Value]].
     e. Perform ? CreatePerIterationEnvironment(perIterationBindings).
     [...]
features: [let]
---*/

var probes = [];
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j > i) continue outer;
    probes.push(function() { return i + ":" + j; });
  }
}
assert.sameValue(
  probes.map(function(f) { return f(); }).join(),
  "0:0,1:0,1:1,2:0,2:1,2:2"
);
