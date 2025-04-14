// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator uses ToNumber
es5id: 9.7_A3.1_T2
description: Type(x) is Number
---*/

// CHECK#1
if (String.fromCharCode(new Number(1)).charCodeAt(0) !== 1) {
  throw new Test262Error('#1: String.fromCharCode(new Number(1)).charCodeAt(0) === 1. Actual: ' + (String.fromCharCode(new Number(1)).charCodeAt(0)));
}

// CHECK#2
assert.sameValue(String.fromCharCode(-1.234).charCodeAt(0), 65535, '#2: String.fromCharCode(-1.234).charCodeAt(0) === 65535');
