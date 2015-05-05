// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[String.Raw]] Different types of arrays as input to String.raw"
---*/

var obj = {
    raw : {
    }
};
var output = String.raw(obj);
if (output !== '') {
    $ERROR('[String.Raw] Invoking String.raw with raw strings and string substitutions failed. Expected :  || Actual : ' + output);
}
