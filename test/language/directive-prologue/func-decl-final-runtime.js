// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: use-strict-directive
description: >
    Strict Mode - Function code of a FunctionDeclaration contains Use
    Strict Directive which appears at the end of the block
flags: [noStrict]
---*/
        function fun() {
            test262unresolvable = null;
            assert.sameValue(test262unresolvable, null);
            "use strict";
        }
        fun();
