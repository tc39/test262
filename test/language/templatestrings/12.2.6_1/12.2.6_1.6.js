// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Substitutions]] Callsite object caching in a function"
---*/

function getCallsite(callsiteObj, substitutions) {
    return callsiteObj;
}

function getSiteObj() {
    return getCallsite`In ${name}`;
}

var name = "Iteration";
var originalCallSiteObj;
for (i = 0; i < 10; i++) {
    name += i;
    var callsiteObj = getSiteObj();
    if (!originalCallSiteObj) {
        originalCallSiteObj = callsiteObj;
    } else if (originalCallSiteObj !== callsiteObj) {
        $ERROR('Got a different call site object');
    }
}

if (originalCallSiteObj !== getSiteObj()) {
    $ERROR('Call site objects are expected to be different');
}
