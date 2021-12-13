// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype-@@unscopables
description: >
    Initial value of `Symbol.unscopables` property
info: |
    22.1.3.32 Array.prototype [ @@unscopables ]

    ...
    11. Perform ! CreateDataPropertyOrThrow(unscopableList, "toReversed", true).
    12. Perform ! CreateDataPropertyOrThrow(unscopableList, "toSorted", true).
    13. Perform ! CreateDataPropertyOrThrow(unscopableList, "toSpliced", true).
    ...
includes: [propertyHelper.js]
features: [Symbol.unscopables, change-array-by-copy]
---*/

var unscopables = Array.prototype[Symbol.unscopables];

assert.sameValue(unscopables.toReversed, true, '`toReversed` property value');
verifyEnumerable(unscopables, 'toReversed');
verifyWritable(unscopables, 'toReversed');
verifyConfigurable(unscopables, 'toReversed');

assert.sameValue(unscopables.toSorted, true, '`toSorted` property value');
verifyEnumerable(unscopables, 'toSorted');
verifyWritable(unscopables, 'toSorted');
verifyConfigurable(unscopables, 'toSorted');

assert.sameValue(unscopables.toSpliced, true, "`toSpliced` property value");
verifyEnumerable(unscopables, "toSpliced");
verifyWritable(unscopables, "toSpliced");
verifyConfigurable(unscopables, "toSpliced");

assert.sameValue(Object.hasOwnProperty.call(unscopables, "with"), false, "does not have `with`");
