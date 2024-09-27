// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/var sample;

sample = #[4,3,2,1].toSorted();
assert.sameValue(sample, #[1,2,3,4]);

sample = #[3, 4, 1, 2].toSorted();
assert.sameValue(sample, #[1, 2, 3, 4]);

sample = #[3,4,3,1,0,1,2].toSorted();
assert.sameValue(sample, #[0,1,1,2,3,3,4]);

sample = #[1,0,-0,2].toSorted();
// This matches the behavior of Array.sort()
assert.sameValue(sample, #[0,-0,1,2]);

sample = #[-4,3,4,-3,2,-1,1,0].toSorted();
assert.sameValue(sample, #[-1,-3,-4,0,1,2,3,4]);

sample = #[0.5,0,1.5,1].toSorted();
assert.sameValue(sample, #[0,0.5,1,1.5]);

sample = #[0.5,0,1.5,-0.5,-1,-1.5,1].toSorted();
assert.sameValue(sample, #[-0.5,-1,-1.5,0,0.5,1,1.5]);

sample = #[3,4,Infinity,-Infinity,1,2].toSorted();
assert.sameValue(sample, #[-Infinity,1,2,3,4,Infinity]);

