// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Punctuator cannot be expressed as a Unicode escape sequence consisting of
    six characters, namely \u plus four hexadecimal digits
description: Try to use () as Unicode \u00281\u0029
flags: [negative]
---*/

\u00281\u0029;
