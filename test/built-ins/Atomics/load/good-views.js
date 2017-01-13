// Copyright (C) 2016 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Test Atomics.load on arrays that allow atomic operations.
---*/

var sab = new SharedArrayBuffer(1024);
var ab = new ArrayBuffer(16);

var int_views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array];

var good_indices = [ (view) => 0/-1, // -0
                     (view) => '-0',
                     (view) => view.length - 1,
                     (view) => ({ valueOf: () => 0 }),
                     (view) => ({ toString: () => '0', valueOf: false }) // non-callable valueOf triggers invocation of toString
                   ];

for ( let View of int_views ) {
    // Make it interesting - use non-zero byteOffsets and non-zero indexes.

    var view = new View(sab, 32, 20);
    var control = new View(ab, 0, 2);

    // Result is subject to coercion
    view[3] = -5;
    control[0] = -5;
    assert.sameValue(Atomics.load(view, 3), control[0]);

    // Result is subject to chopping
    control[0] = 12345;
    view[3] = 12345;
    assert.sameValue(Atomics.load(view, 3), control[0]);

    // And again
    control[0] = 123456789;
    view[3] = 123456789;
    assert.sameValue(Atomics.load(view, 3), control[0]);

    // In-bounds boundary cases for indexing
    for ( let IdxGen of good_indices ) {
        let Idx = IdxGen(view);
        view.fill(0);
        // Atomics.store() computes an index from Idx in the same way as other
        // Atomics operations, not quite like view[Idx].
        Atomics.store(view, Idx, 37);
        assert.sameValue(Atomics.load(view, Idx), 37);
    }
}
