// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[MethodDefinition]] Keyword as the method definition name"
---*/

var obj = {
    static() {
        return 10;
    }
}

var output = obj.static();
if (output !== 10) {
    $ERROR("Got a wrong value returned by the method definition. Actual : " + output + ". Expected : 10");
}
