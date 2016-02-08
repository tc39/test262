// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.values should have name property with value 'values'
es7id: pending
author: Jordan Harband
includes: [propertyHelper.js]
---*/

assert.sameValue(
    Object.values.name,
    'values',
    'Expected Object.values.name to be "values"'
);

verifyNotEnumerable(Object.values, 'name');
verifyNotWritable(Object.values, 'name');
verifyConfigurable(Object.values, 'name');
