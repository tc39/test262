// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: It is a SyntaxError if any element of param list is lexically declared in the function body
includes:
negative: SyntaxError
---*/

var obj = {
    _a : 10,
    set a(value) {
        let value = 20;
        _a = value + value;
    }
}
