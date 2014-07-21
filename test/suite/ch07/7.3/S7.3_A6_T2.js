// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Line Terminator cannot be expressed as a Unicode escape sequence
    consisting of six characters, namely \u plus four hexadecimal digits
description: Insert CARRIAGE RETURN (U+000D) in var x
flags: [negative]
---*/

var\u000Dx;
