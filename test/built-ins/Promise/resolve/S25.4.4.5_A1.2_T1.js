// Copyright 2015 Jordan Harband.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.resolve is not enumerable
es6id: 25.4.4.5_A1.2_T1
author: Jordan Harband
description: Promise.resolve should be non-enumerable
includes:
  - propertyHelper.js
---*/

// CHECK#1
verifyNotEnumerable(Promise, 'resolve');
