// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] Callsite object caching insdie Function
    expressions
---*/

function getCallsite(callsiteObj, substitutions) {
    return callsiteObj;
}

var name = "World";
var firstSiteObj, secondSiteObj;

var getCSO1 = new Function('return getCallsite`Hello ${name}`');
var getCSO2 = new Function('return getCallsite`Hello ${name}`');
firstSiteObj = getCSO1();
name = "JavaScript";
secondSiteObj = getCSO2();

if (firstSiteObj !== secondSiteObj) {
    $ERROR('Two evals returned the same call site object');
}
