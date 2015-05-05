// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Substitutions]] Weakmaps inside string template in UTF8 encoding"
---*/

var weakMap;
`${weakMap = new WeakMap()}`;
var obj1 = {}, obj2 = function () { };

`${(weakMap.set(obj1, "Hello"), weakMap.set(obj2, 10))}`;

if (weakMap.get(obj2) !== 10) {
    $ERROR('obj2 is not inserted to the map');
}

if (!weakMap.has(obj1)) {
    $ERROR('obj1 is not inserted to the map');
}
