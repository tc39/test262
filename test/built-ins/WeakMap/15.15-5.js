// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Add own property on WeakMap
---*/

WeakMap.prop1 = 1;
Object.defineProperty(WeakMap, 'prop2', { value: 1, enumerable: true, configurable: true, writable: true });
if (WeakMap.prop1 !== 1) {
    $ERROR('Own property did not get defined');
}

try{
    if (!delete WeakMap.pro1) $ERROR('Own Property could not be deleted on WeaKMap global object');
} catch (e) {
    $ERROR('Unable to delete own property');
}
