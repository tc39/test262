// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[String.Raw]] Passing different object types to String.raw"
---*/

var obj = {
    0 : "Hi",
    raw : {
        length: 2,
        0: "a"
    }
};
var substitutions = [ "b" ];
var output = String.raw(obj, substitutions[0]);
if (output != "abundefined") {
    $ERROR('Passing a raw object with wrong length failed. Expected : abundefined || Actual : ' + output);
}
