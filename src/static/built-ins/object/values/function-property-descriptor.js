// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.values should be writable, non-enumerable, and configurable
es7id: pending
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Object, 'values');
verifyWritable(Object, 'values');
verifyConfigurable(Object, 'values');
