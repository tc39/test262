// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production QuantifierPrefix :: { DecimalDigits , }evaluates as follows:
    i) Let i be the MV of DecimalDigits
    ii) Return the two results i and \infty
description: Execute /b{8,}c/.test("aaabbbbcccddeeeefffff") and check results
---*/

__executed = /b{8,}c/.test("aaabbbbcccddeeeefffff");

//CHECK#1
if (__executed) {
	$ERROR('#1: /b{8,}c/.test("aaabbbbcccddeeeefffff") === false');
}
