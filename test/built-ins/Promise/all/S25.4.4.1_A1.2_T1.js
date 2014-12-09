// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.all expects 1 argument
es5id: 25.4.4.1_A1.2_T1
author: Sam Mikes
description: Promise.all expects 1 argument
---*/

// CHECK#1
if (Promise.all.length !== 1) {
    $ERROR('Expected Promise.all to be a function of one argument.');
}
