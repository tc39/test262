// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Add own property on Set
---*/

Set.prop1 = 1;
Object.defineProperty(Set, 'prop2', { value: 1, enumerable: true, configurable: true, writable: true });
if (Set.prop1 !== 1) {
    $ERROR('Own property did not get defined');
}

try{
    delete Set.pro1;
} catch (e) {
    $ERROR('Unable to delete own property');
}
