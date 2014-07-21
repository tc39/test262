// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionChar :: BackslashSequence :: \\LineTerminator is incorrect"
description: Line separator, with eval
---*/

//CHECK#1
try {
   eval("/a\\\u2028/").source;
   $ERROR('#1.1: RegularExpressionChar :: BackslashSequence :: \\Line separator is incorrect. Actual: ' + (eval("/a\\\u2028/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionChar :: BackslashSequence :: \\Line separator is incorrect. Actual: ' + (e));
  }
}
