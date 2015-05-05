// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype object
includes: [runTestCase.js]
---*/

function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Map,'prototype' );
    if (desc.writable !== false || desc.enumerable !== false || desc.configurable !== false) return false;

    if (Map.prototype.__proto__ !== Object.prototype) return false;

    if (!Map.prototype.hasOwnProperty('get') ||
        !Map.prototype.hasOwnProperty('clear') ||
        !Map.prototype.hasOwnProperty('delete') ||
        !Map.prototype.hasOwnProperty('forEach') ||
        !Map.prototype.hasOwnProperty('set') ||
        !Map.prototype.hasOwnProperty('has') ||
        !Map.prototype.hasOwnProperty('size')) return false;

    return true;
};
runTestCase(testcase);
