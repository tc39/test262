// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.entries should have name property with value 'entries'
es7id: pending
author: Jordan Harband
includes: [propertyHelper.js]
---*/

assert.sameValue(
    Object.entries.name,
    'entries',
    'Expected Object.entries.name to be "entries"'
);

verifyNotEnumerable(Object.entries, 'name');
verifyNotWritable(Object.entries, 'name');
verifyConfigurable(Object.entries, 'name');
