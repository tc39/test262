// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Compute result modulo 2^16
es5id: 9.7_A2.2
description: >
    For testing use String.fromCharCode(Number).charCodeAt(0)
    construction
---*/

// CHECK#1
assert.sameValue(String.fromCharCode(-32767).charCodeAt(0), 32769, '#1: String.fromCharCode(-32767).charCodeAt(0) === 32769');

// CHECK#2
assert.sameValue(String.fromCharCode(-32768).charCodeAt(0), 32768, '#2: String.fromCharCode(-32768).charCodeAt(0) === 32768');

// CHECK#3
assert.sameValue(String.fromCharCode(-32769).charCodeAt(0), 32767, '#3: String.fromCharCode(-32769).charCodeAt(0) === 32767');

// CHECK#4
assert.sameValue(String.fromCharCode(-65535).charCodeAt(0), 1, '#4: String.fromCharCode(-65535).charCodeAt(0) === 1');

// CHECK#5
assert.sameValue(String.fromCharCode(-65536).charCodeAt(0), 0, '#5: String.fromCharCode(-65536).charCodeAt(0) === 0');

// CHECK#6
assert.sameValue(String.fromCharCode(-65537).charCodeAt(0), 65535, '#6: String.fromCharCode(-65537).charCodeAt(0) === 65535');

// CHECK#7
assert.sameValue(String.fromCharCode(65535).charCodeAt(0), 65535, '#7: String.fromCharCode(65535).charCodeAt(0) === 65535');

// CHECK#8
assert.sameValue(String.fromCharCode(65536).charCodeAt(0), 0, '#8: String.fromCharCode(65536).charCodeAt(0) === 0');

// CHECK#9
assert.sameValue(String.fromCharCode(65537).charCodeAt(0), 1, '#9: String.fromCharCode(65537).charCodeAt(0) === 1');

// CHECK#10
assert.sameValue(String.fromCharCode(131071).charCodeAt(0), 65535, '#10: String.fromCharCode(131071).charCodeAt(0) === 65535');

// CHECK#11
assert.sameValue(String.fromCharCode(131072).charCodeAt(0), 0, '#11: String.fromCharCode(131072).charCodeAt(0) === 0');

// CHECK#12
assert.sameValue(String.fromCharCode(131073).charCodeAt(0), 1, '#12: String.fromCharCode(131073).charCodeAt(0) === 1');
