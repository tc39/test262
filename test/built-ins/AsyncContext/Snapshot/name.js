// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot
description: AsyncContext.Snapshot.name value and descriptor
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(AsyncContext.Snapshot.name, 'Snapshot', 'The value of AsyncContext.Snapshot.name is "Snapshot"');

verifyNotEnumerable(AsyncContext.Snapshot, 'name');
verifyNotWritable(AsyncContext.Snapshot, 'name');
verifyConfigurable(AsyncContext.Snapshot, 'name');
