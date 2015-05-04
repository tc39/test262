// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: toString() of IdentifierReference should match the original method
includes:
---*/

var test = function () {
    return 10;
}
var obj = {
    test
};

if (obj.test !== test) {
    $ERROR("Got a wrong value for toString() of test. Actual : " + obj.test + ". Expected : " + test);
}
