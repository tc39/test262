// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot
description: Instances of AsyncContext.Snapshot are extensible
features: [AsyncContext]
---*/

var asyncSnapshot = new AsyncContext.Snapshot();
assert.sameValue(Object.isExtensible(asyncSnapshot), true);
