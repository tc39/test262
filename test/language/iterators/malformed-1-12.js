// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: malformed-1-12.js
---*/

var iterator = {
    [Symbol.iterator]: function() {
        return Infinity;
    }
};
var error;

try {
    for (result of iterator) {}
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if (error.name !== 'TypeError') {
    $ERROR('expected to have TypeError got ' + error.name + ' instead');
}
