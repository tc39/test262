// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Value Property PI of the Math Object has the attribute DontDelete
es5id: 15.8.1.6_A3
description: Checking if Math.PI property has the attribute DontDelete
flags: [noStrict]
---*/

// CHECK#1
if (delete Math.PI === true) {
    $ERROR('#1: Value Property PI of the Math Object hasn\'t attribute DontDelete: \'Math.PI === true\'');
}
