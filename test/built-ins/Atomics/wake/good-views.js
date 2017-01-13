// Copyright (C) 2016 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test Atomics.wait on arrays that allow atomic operations,
  in an Agent that is allowed to wait.  There is only the one Agent.
---*/

var sab = new SharedArrayBuffer(1024);
var ab = new ArrayBuffer(16);
var int_views = [Int32Array];

var good_indices = [ (view) => 0/-1, // -0
                     (view) => '-0',
                     (view) => view.length - 1,
                     (view) => ({ valueOf: () => 0 }),
                     (view) => ({ toString: () => '0', valueOf: false }) // non-callable valueOf triggers invocation of toString
                   ];

var view = new Int32Array(sab, 32, 20);

view[0] = 0;
assert.sameValue(Atomics.wake(view, 0, 1), 0);

// In-bounds boundary cases for indexing
for ( let IdxGen of good_indices ) {
    let Idx = IdxGen(view);
    view.fill(0);
    // Atomics.store() computes an index from Idx in the same way as other
    // Atomics operations, not quite like view[Idx].
    Atomics.store(view, Idx, 37);
    assert.sameValue(Atomics.wake(view, Idx, 1), 0);
}
