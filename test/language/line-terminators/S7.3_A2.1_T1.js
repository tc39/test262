// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: LINE FEED (U+000A) within strings is not allowed
es5id: 7.3_A2.1_T1
description: Insert LINE FEED (\u000A) into string
---*/

assert.throws(SyntaxError, function() {
  eval("'\u000Astr\u000Aing\u000A'");
});
