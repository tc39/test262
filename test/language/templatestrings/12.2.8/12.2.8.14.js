// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Tagged template callsite objects are unique based on raw string values
---*/

function getCallsite(c) { return c; }
function getFooCallsite() { return getCallsite`foo`; }

if (getFooCallsite() !== getFooCallsite()) {
    $ERROR('Callsite objects at same source location are strictly equal');
}

if (getCallsite`foo` !== getCallsite`foo`) {
    $ERROR('Callsite objects with the same raw string values are strictly equal');
}

if (getCallsite`foo` !== eval('getCallsite`foo`')) {
    $ERROR("Callsite objects are still strictly equal even if they are eval'd");
}

if (eval('getCallsite`foo`') !== eval('getCallsite`foo`')) {
    $ERROR("Callsite objects are still strictly equal even if they are eval'd");
}

if (getCallsite`string1${'replacement'}string2` !== getCallsite`string1${'something else'}string2`) {
    $ERROR('Callsite objects with the same raw string values are strictly equal when replacement values are different');
}
