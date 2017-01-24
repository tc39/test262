// Copyright (C) 2015 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test Atomics.sub on view values other than TypedArrays
includes: [testAtomics.js]
---*/

testWithAtomicsNonViewValues(function(view) {
    assert.throws(TypeError, (() => Atomics.sub(view, 0, 0)));
});
