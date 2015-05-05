// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: reduceRight method's length is 1
includes: [TypedArrayHelper.js]
---*/

var array = [  ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].reduceRight.length !== 1) {
        $ERROR("Length of the reduceRight method should be 1. Actual : " + typedArrays[i].reduceRight.length);
    }
}
