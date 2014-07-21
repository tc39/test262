// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Line Terminator cannot be expressed as a Unicode escape sequence
    consisting of six characters, namely \u plus four hexadecimal digits
description: Insert PARAGRAPH SEPARATOR (U+2029) in var x
flags: [negative]
---*/

var\u2029x;
