// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-forbodyevaluation
description: >
  A new per-iteration environment is created when the statement body completes
  with a `continue` completion
info: |
  ForBodyEvaluation ( test, increment, stmt, perIterationBindings, labelSet )

  1. Let iterationResult be undefined.
  2. Perform ? CreatePerIterationEnvironment(perIterationBindings).
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
for (let i = 0; i < 3; i++) {
  probes.push(function() { return i; });
  continue;
}
assert.sameValue(probes.map(function(f) { return f(); }).join(), "0,1,2", "unlabelled continue");

probes = [];
label: for (let i = 0; i < 3; i++) {
  probes.push(function() { return i; });
  continue label;
}
assert.sameValue(probes.map(function(f) { return f(); }).join(), "0,1,2", "labelled continue");

probes = [];
for (let i = 0; i < 2; ) {
  probes.push(function() { return i; });
  i++;
  continue;
}
assert.sameValue(probes.map(function(f) { return f(); }).join(), "1,2", "binding updated in the body before continue");

probes = [];
for (let i = 0; i < 3; i++) {
  try {
    probes.push(function() { return i; });
    continue;
  } finally {
    probes.push(function() { return "f" + i; });
  }
}
assert.sameValue(probes.map(function(f) { return f(); }).join(), "0,f0,1,f1,2,f2", "continue in try with finally");

probes = [];
for (let i = 0; i < 4; i++) {
  if (i % 2) continue;
  probes.push(function() { return i; });
}
assert.sameValue(probes.map(function(f) { return f(); }).join(), "0,2", "conditional continue");
