// Copyright 2015 Jordan Harband.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.all is not enumerable
es6id: 25.4.4.1_A1.3_T1
author: Jordan Harband
description: Promise.all should be non-enumerable
includes:
  - propertyHelper.js
---*/

// CHECK#1
verifyNotEnumerable(Promise, 'all');
