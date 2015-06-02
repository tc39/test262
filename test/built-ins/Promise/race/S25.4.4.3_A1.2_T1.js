// Copyright 2015 Jordan Harband.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.race is not enumerable
es6id: 25.4.4.3_A1.2_T1
author: Jordan Harband
description: Promise.race should be non-enumerable
includes:
  - propertyHelper.js
---*/

// CHECK#1
verifyNotEnumerable(Promise, 'race');
