// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Single line comments can not contain CARRIAGE RETURN (U+000D) inside
description: Insert CARRIAGE RETURN (\u000D) into single line comment
flags: [negative]
---*/

// CHECK#1
eval("// single line \u000D comment");
