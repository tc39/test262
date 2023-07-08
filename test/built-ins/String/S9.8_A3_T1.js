// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Result of ToString conversion from boolean value is "true" if
    the argument is "true", else is "false"
es5id: 9.8_A3_T1
description: True and false convert to String by explicit transformation
---*/

// CHECK#1
assert.sameValue(String(false), "false", '#1: String(false) === "false"');

// CHECK#2
assert.sameValue(String(true), "true", '#2: String(true) === "true"');
