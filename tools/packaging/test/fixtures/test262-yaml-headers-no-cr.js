/*---
info: >
    The production Block { } in strict code can't contain function
    declaration;
description: Trying to declare function at the Block statement
negative: SyntaxError
bestPractice: "http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls"
flags: [onlyStrict]
---*/

"use strict";
{
    function __func(){}
}

