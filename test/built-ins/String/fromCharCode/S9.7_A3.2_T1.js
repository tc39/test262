// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator uses floor, abs
es5id: 9.7_A3.2_T1
description: >
    For testing use String.fromCharCode(Number).charCodeAt(0)
    construction
---*/

// CHECK#1
assert.sameValue(String.fromCharCode(1.2345).charCodeAt(0), 1, '#1: String.fromCharCode(1.2345).charCodeAt(0) === 1');

// CHECK#2
assert.sameValue(String.fromCharCode(-5.4321).charCodeAt(0), 65531, '#2: String.fromCharCode(-5.4321).charCodeAt(0) === 65531');
