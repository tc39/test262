// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: MethodDefinition and duplicate accessor
includes:
---*/

var obj = {
    set b(value) {
        this.a = value;
    },
    b() {
        return 1;
    }
};
if (obj.b() !== 1) {
    $ERROR("Data member definition is expected win over the accessor definition.");
}
