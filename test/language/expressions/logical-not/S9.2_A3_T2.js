// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Result of boolean conversion from boolean value is no conversion
es5id: 9.2_A3_T2
description: true and false convert to Boolean by implicit transformation
---*/

// CHECK#1
assert.sameValue(!(true), false, '#1: !(true) === false');

// CHECK#2
assert.sameValue(!(false), true, '#2: !(false) === true');
