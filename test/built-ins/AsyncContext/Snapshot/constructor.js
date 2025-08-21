// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot-constructor
description: >
    The AsyncContext.Snapshot constructor is the %AsyncContext.Snapshot%
    intrinsic object and the initial value of the Snapshot property of the
    %AsyncContext% object.
features: [AsyncContext]
---*/

assert.sameValue(
  typeof AsyncContext.Snapshot, 'function',
  'typeof AsyncContext.Snapshot is function'
);
