// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
id: sec-string.prototype.trim
description: >
  String.prototype.trim - 'S' is a string starting with U+180E
info: >
  21.1.3.25 String.prototype.trim ( )

  ...
  4. Let T be a String value that is a copy of S with both leading and
     trailing white space removed. The definition of white space is the
     union of WhiteSpace and LineTerminator. When determining whether a
     Unicode code point is in Unicode general category “Zs”, code unit
     sequences are interpreted as UTF-16 encoded code point sequences
     as specified in 6.1.4
  ...
---*/

var mongolianVowelSeparator = "\u180E";
var str = mongolianVowelSeparator + "abc";

assert.sameValue(str.trim(), "\u180Eabc", "Leading U+180E");
