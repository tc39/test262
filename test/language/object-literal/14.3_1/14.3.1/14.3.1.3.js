// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: It is a SyntaxError if the param list and function body contains the same variable name
includes:
negative: SyntaxError
---*/

"use strict";

var obj = {
    method(a) {
        let a = 10;
        return a;
    }
}
