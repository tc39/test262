// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.entries should have length 1
es7id: pending
author: Jordan Harband
includes: [propertyHelper.js]
---*/

assert.sameValue(Object.entries.length, 1, 'Expected Object.entries.length to be 1');

verifyNotEnumerable(Object.entries, 'length');
verifyNotWritable(Object.entries, 'length');
verifyConfigurable(Object.entries, 'length');
