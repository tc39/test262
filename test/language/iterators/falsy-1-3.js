// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: falsy-1-3.js
---*/

var iterator = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return {
                    done: undefined
                };
            }
        };
    }
};
var error;

try {
    var iteration = 0;
    for (result of iterator) {
        iteration++;
        if (iteration === 3)
            break;
    }
} catch (e) {
    error = e;
}

if (error !== undefined) {
    $ERROR('expected to run without an error but an error was thrown');
}
