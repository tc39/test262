// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Result of boolean conversion from number value is false if the argument
    is +0, -0, or NaN; otherwise, is true
es5id: 9.2_A4_T2
description: +0, -0 and NaN convert to Boolean by implicit transformation
---*/

// CHECK#1
assert.sameValue(!(+0), true, '#1: !(+0) === true');

// CHECK#2
assert.sameValue(!(-0), true, '#2: !(-0) === true');

// CHECK#3
assert.sameValue(!(Number.NaN), true, '#3: !(Number.NaN) === true');
