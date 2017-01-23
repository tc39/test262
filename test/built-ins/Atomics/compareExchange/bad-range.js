// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test range checking of Atomics.compareExchange on arrays that allow atomic operations
---*/

var sab = new SharedArrayBuffer(4);

var views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array];

var bad_indices = [ (view) => -1,
                    (view) => view.length,
                    (view) => view.length*2,
                    (view) => undefined,
                    (view) => Number.NaN,
                    (view) => Number.POSITIVE_INFINITY,
                    (view) => Number.NEGATIVE_INFINITY,
                    (view) => '3.5',
                    (view) => 3.5,
                    (view) => { password: "qumquat" },
                    (view) => ({ valueOf: () => 125 }),
                    (view) => ({ toString: () => '125', valueOf: false }) // non-callable valueOf triggers invocation of toString
                  ];

for ( let View of views ) {
    let view = new View(sab);
    for ( let IdxGen of bad_indices ) {
        var Idx = IdxGen(view);
        assert.throws(RangeError, () => Atomics.compareExchange(view, Idx, 10, 0));
    }
}
