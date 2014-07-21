// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    White space cannot be expressed as a Unicode escape sequence consisting
    of six characters, namely \u plus four hexadecimal digits
description: Use SPACE (U+0020)
flags: [negative]
---*/

var\u0020x;
