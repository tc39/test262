// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[PropName]] PropName is a key word"
---*/

var obj = {
    true : 10
};

if (obj[true] !== 10) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj[true] + ". Expected : 10");
}
