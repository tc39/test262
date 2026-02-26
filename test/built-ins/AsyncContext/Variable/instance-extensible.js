// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: Instances of AsyncContext.Variable are extensible
features: [AsyncContext]
---*/

var asyncVariable = new AsyncContext.Variable();
assert.sameValue(Object.isExtensible(asyncVariable), true);
