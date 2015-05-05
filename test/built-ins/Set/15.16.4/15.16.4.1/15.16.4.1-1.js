// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype object
includes: [runTestCase.js]
---*/

function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Set,'prototype' );
    if (desc.writable !== false || desc.enumerable !== false || desc.configurable !== false) return false;

    if (Set.prototype.__proto__ !== Object.prototype) return false;

    if (!Set.prototype.hasOwnProperty('add') ||
       !Set.prototype.hasOwnProperty('clear') ||
       !Set.prototype.hasOwnProperty('delete') ||
       !Set.prototype.hasOwnProperty('forEach') ||
       !Set.prototype.hasOwnProperty('has')) return false;

    return true;
};
runTestCase(testcase);
