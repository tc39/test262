// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot-constructor
description: The AsyncContext.Snapshot constructor implements [[Construct]]
includes: [isConstructor.js]
features: [AsyncContext, Reflect.construct]
---*/

assert.sameValue(isConstructor(AsyncContext.Snapshot), true, 'isConstructor(AsyncContext.Snapshot) must return true');
new AsyncContext.Snapshot();
