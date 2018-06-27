// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test Atomics.wait on arrays that allow atomic operations,
  in an Agent that is allowed to wait.
includes: [atomicsHelper.js]
features: [Atomics, BigInt]
---*/

// Let's assume 'wait' is not allowed on the main thread,
// even in the shell.

$262.agent.start(`
  const sab = new SharedArrayBuffer(1024);
  const ab = new ArrayBuffer(16);

  const good_indices = [ (view) => 0/-1, // -0
                       (view) => '-0',
                       (view) => view.length - 1,
                       (view) => ({ valueOf: () => 0 }),
                       (view) => ({ toString: () => '0', valueOf: false }) // non-callable valueOf triggers invocation of toString
                     ];

  const view = new BigInt64Array(sab, 32, 20);

  view[0] = 0;
  $262.agent.report("A " + Atomics.wait(view, 0, 0, 0))
  $262.agent.report("B " + Atomics.wait(view, 0, 37, 0));

  // In-bounds boundary cases for indexing
  for ( let IdxGen of good_indices ) {
    let Idx = IdxGen(view);
    view.fill(0);
    // Atomics.store() computes an index from Idx in the same way as other
    // Atomics operations, not quite like view[Idx].
    Atomics.store(view, Idx, 37);
    $262.agent.report("C " + Atomics.wait(view, Idx, 0));
  }

  $262.agent.report("done");
  $262.agent.leaving();
`);

assert.sameValue($262.agent.getReport(), 'A timed-out');
assert.sameValue($262.agent.getReport(), 'B not-equal');
assert.sameValue($262.agent.getReport(), 'C not-equal');
