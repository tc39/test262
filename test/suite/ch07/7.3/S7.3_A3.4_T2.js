// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Single line comments can not contain PARAGRAPH SEPARATOR (U+2029) inside
description: >
    Insert PARAGRAPH SEPARATOR (\u2029) into begin of single line
    comment
flags: [negative]
---*/

// CHECK#1
eval("//\u2029 single line comment");
