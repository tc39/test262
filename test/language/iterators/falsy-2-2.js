// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: falsy-2-2.js
---*/

var iterator = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return {
                    done: Symbol
                };
            }
        };
    }
};
var error;
var iteration = 0;

try {
    for (result of iterator) {
        iteration++;
    }
} catch (e) {
    error = e;
}

if (error !== undefined) {
    $ERROR('expected to run without an error but an error was thrown');
} else if (iteration !== 0) {
    $ERROR('expected iteration to have value 0, got ' + iteration + ' instead');
}
