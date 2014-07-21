// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    White space cannot be expressed as a Unicode escape sequence consisting
    of six characters, namely \u plus four hexadecimal digits
description: Use FORM FEED (U+000C)
flags: [negative]
---*/

var\u000Cx;
