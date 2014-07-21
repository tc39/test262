// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    FunctionDeclaration within a "do-while" Block in strict code is not
    allowed
description: Declaring function within a "do-while" loop
negative: SyntaxError
bestPractice: "http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls"
flags: [onlyStrict]
---*/

"use strict";
do {
    function __func(){};
} while(0);
