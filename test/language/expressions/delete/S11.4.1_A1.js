// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
info: |
    White Space and Line Terminator between "delete" and UnaryExpression are
    allowed
es5id: 11.4.1_A1
description: Checking by using eval
---*/

var result;

result = delete	0;
assert.sameValue(result, true, '\\u0009');

result = delete0;
assert.sameValue(result, true, '\\u000B');

result = delete0;
assert.sameValue(result, true, '\\u000C');

result = delete 0;
assert.sameValue(result, true, '\\u0020');

result = delete 0;
assert.sameValue(result, true, '\\u00A0');

result = delete
0;
assert.sameValue(result, true, '\\u000A');

result = delete0;
assert.sameValue(result, true, '\\u000D');

result = delete 0;
assert.sameValue(result, true, '\\u2028');

result = delete 0;
assert.sameValue(result, true, '\\u2029');

result = delete	  
  0;
assert.sameValue(result, true, '\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029');
