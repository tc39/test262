// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: FunctionDeclaration within a "while" Statement is not allowed
description: >
    Checking if declaring a function within a "while"  Statement leads
    to an exception
negative: SyntaxError
bestPractice: "http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls"
flags: [onlyStrict]
---*/

"use strict";
while (0) {
    function __func(){};
};
