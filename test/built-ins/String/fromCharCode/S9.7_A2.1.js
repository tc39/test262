// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: ToUint16 returns values between 0 and 2^16-1
es5id: 9.7_A2.1
description: >
    Converting numbers, which are in\outside of Uint16 scopes, with
    String.fromCharCode(Number).charCodeAt(0) construction
---*/

// CHECK#1
assert.sameValue(String.fromCharCode(0).charCodeAt(0), 0, '#1: String.fromCharCode(0).charCodeAt(0) === 0');

// CHECK#2
assert.sameValue(String.fromCharCode(1).charCodeAt(0), 1, '#2: String.fromCharCode(1).charCodeAt(0) === 1');

// CHECK#3
assert.sameValue(String.fromCharCode(-1).charCodeAt(0), 65535, '#3: String.fromCharCode(-1).charCodeAt(0) === 65535');

// CHECK#4
assert.sameValue(String.fromCharCode(65535).charCodeAt(0), 65535, '#4: String.fromCharCode(65535).charCodeAt(0) === 65535');

// CHECK#5
assert.sameValue(String.fromCharCode(65534).charCodeAt(0), 65534, '#5: String.fromCharCode(65534).charCodeAt(0) === 65534');

// CHECK#6
assert.sameValue(String.fromCharCode(65536).charCodeAt(0), 0, '#6: String.fromCharCode(65536).charCodeAt(0) === 0');

// CHECK#7
assert.sameValue(String.fromCharCode(4294967295).charCodeAt(0), 65535, '#7: String.fromCharCode(4294967295).charCodeAt(0) === 65535');

// CHECK#8
assert.sameValue(String.fromCharCode(4294967294).charCodeAt(0), 65534, '#8: String.fromCharCode(4294967294).charCodeAt(0) === 65534');

// CHECK#9
assert.sameValue(String.fromCharCode(4294967296).charCodeAt(0), 0, '#9: String.fromCharCode(4294967296).charCodeAt(0) === 0');
