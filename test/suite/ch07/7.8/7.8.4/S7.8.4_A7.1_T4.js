// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    EscapeSequence :: UnicodeEscapeSequence :: u HexDigit HexDigit HexDigit
    HexDigit
description: "UnicodeEscapeSequence :: u000G is incorrect"
flags: [negative]
---*/

//CHECK#
"\u000G"
