// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.3
description: >
  Arguments are coerced to integer values.
info: >
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  ...
  5. Let relativeTarget be ToInteger(target).
  ...
  8. Let relativeStart be ToInteger(start).
  ...
  11. If end is undefined, let relativeEnd be len; else let relativeEnd be
  ToInteger(end).
  ...
includes: [compareArray.js]
---*/

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(undefined, undefined),
    [0, 1, 2, 3]
  ),
  'undefined `target` and `start` values coerced to 0'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(false, false),
    [0, 1, 2, 3]
  ),
  'false `target` and `start` values coerced to 0'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(NaN, NaN),
    [0, 1, 2, 3]
  ),
  'NaN `target` and `start` values coerced to 0'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(null, null),
    [0, 1, 2, 3]
  ),
  'null `target` and `start` values coerced to 0'
);


assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(true, 0),
    [0, 0, 1, 2]
  ),
  'true `target` value coerced to 1'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(0, true),
    [1, 2, 3, 3]
  ),
  'true `start` value coerced to 1'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(1, 0, true),
    [0, 0, 2, 3]
  ),
  'true `end` value coerced to 1'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin('1', '', '-2'),
    [0, 0, 1, 3]
  ),
  'string values coerced to integer'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(1.3, 0.4, -2.5),
    [0, 0, 1, 3]
  ),
  'float values coerced to integer'
);
