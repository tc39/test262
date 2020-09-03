// This file was procedurally generated from the following sources:
// - tools/generation/test/fixtures/async-negative-invalid.case
// - tools/generation/test/fixtures/async/async.template
/*---
description: Early SyntaxError tests should not include "async" in flags[] (async function declaration)
esid: prod-AsyncFunctionDeclaration
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
---*/
$DONOTEVALUATE();

async function fn() {
  await 1;
  1=1;
}
