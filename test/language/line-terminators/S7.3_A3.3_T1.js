// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Single line comments can not contain LINE SEPARATOR (U+2028) inside
es5id: 7.3_A3.3_T1
description: Insert LINE SEPARATOR (\u2028) into single line comment
negative: ReferenceError
---*/

// CHECK#1
eval("// single line \u2028 comment");
