// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Expression resulting in a key word under strict mode
includes:
---*/

"use strict";
var obj = {
    ["imple" + "ments"] : 20
};

if (obj.implements !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.implements + ". Expected : 20");
}
