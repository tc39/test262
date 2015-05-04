// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Substitutions]] Callsite object caching inside eval"
---*/

function getCallsite(callsiteObj, substitutions) {
    return callsiteObj;
}

function getSiteObj(i) {
    var returnObj;
    if (i % 2) {
        eval("returnObj = getCallsite`In ${name}`");
    } else {
        eval("returnObj = getCallsite`In ${name}`");
    }

    return returnObj;
}

var name = "World";
var firstSiteObj, secondSiteObj;
eval("firstSiteObj = getSiteObj(1)");

name = "JavaScript";
eval("secondSiteObj = getSiteObj(2)");

if (firstSiteObj !== secondSiteObj) {
    $ERROR('Two evals returned different call site object');
}
