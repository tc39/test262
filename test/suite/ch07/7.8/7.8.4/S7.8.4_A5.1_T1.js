// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "EscapeSequence :: 0"
description: String.fromCharCode(0x0000)
---*/

//CHECK#1
if (String.fromCharCode(0x0000) !== "\0") {
  $ERROR('#1: String.fromCharCode(0x0000) === "\\0"');
}
