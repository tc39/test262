// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Punctuator cannot be expressed as a Unicode escape sequence consisting of
    six characters, namely \u plus four hexadecimal digits
description: Try to use ; as a Unicode \u003B
flags: [negative]
---*/

\u003B;
