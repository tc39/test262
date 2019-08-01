// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: LINE SEPARATOR (U+2028) may occur between any two tokens
esid: sec-line-terminators
description: Insert LINE SEPARATOR (\u2028) between tokens of var x=1
---*/

var x = 1 ;

assert.sameValue(x, 1);
