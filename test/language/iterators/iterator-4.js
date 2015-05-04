// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: iterator-4.js
includes: [compareArray.js]
---*/

var iterator = {
    [Symbol.iterator]: function() {
        return {
            i: 0,
            next: function() {
                if (this.i === 2)
                    delete this.next;
                return {
                    done: this.i == 3,
                    value: this.i++
                };
            }
        }
    }
};

var error, test = [];

try {
    for (result of iterator) {
        test.push(result);
    }
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if (error.name !== 'TypeError') {
    $ERROR('expected to have TypeError, got ' + error.name + ' instead');
} else if (!compareArray(test, [0, 1, 2])) {
    $ERROR('array test is not equal to [0,1,2]');
}
