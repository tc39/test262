// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: It is not a syntax error if the duplicate entries occur twice as get and set accessors
includes:
---*/

var obj = {
    _b : 10,
    set b(value) {
        _b = value;
    },
    get b() {
        return _b;
    }
};
obj.b = 20;
if (obj.b !== 20) {
    $ERROR("Get accessor is expected to return 20");
}
