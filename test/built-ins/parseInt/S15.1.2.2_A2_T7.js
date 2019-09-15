// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-parseint-string-radix
description: "StrWhiteSpaceChar :: LF (U+000A)"
---*/

//CHECK#1
if (parseInt("\u000A1") !== parseInt("1")) {
  throw new Test262Error('#1: parseInt("\\u000A1") === parseInt("1"). Actual: ' + (parseInt("\u000A1")));
}

//CHECK#2
if (parseInt("\u000A\u000A-1") !== parseInt("-1")) {
  throw new Test262Error('#2: parseInt("\\u000A\\u000A-1") === parseInt("-1"). Actual: ' + (parseInt("\u000A\u000A-1")));
}

//CHECK#3
assert.sameValue(parseInt("\u000A"), NaN);
