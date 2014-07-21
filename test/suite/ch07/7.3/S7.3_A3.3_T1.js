// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Single line comments can not contain LINE SEPARATOR (U+2028) inside
description: Insert LINE SEPARATOR (\u2028) into single line comment
flags: [negative]
---*/

// CHECK#1
eval("// single line \u2028 comment");
