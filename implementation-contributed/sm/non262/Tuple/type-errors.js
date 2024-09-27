// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*//*
3.1.2 ToNumber ( argument )
The abstract operation ToNumber takes argument argument. It converts argument to a value of type Number according to Table 2:

...
Tuple	Throw a TypeError exception.
...
*/
assertThrowsInstanceOf(() => #[1, 2] + 3, TypeError,
                       "cannot convert record or tuple to number");
assertThrowsInstanceOf(() => 3 + #[1, 2], TypeError,
                       "cannot convert record or tuple to number");
assertThrowsInstanceOf(() => 3 - #[1, 2], TypeError,
                       "cannot convert record or tuple to number");
assertThrowsInstanceOf(() => 3 * #[1, 2], TypeError,
                       "cannot convert record or tuple to number");
assertThrowsInstanceOf(() => 3 / #[1, 2], TypeError,
                       "cannot convert record or tuple to number");
assertThrowsInstanceOf(() => #[1, 2] > #[1, 3], TypeError,
                       "cannot convert record or tuple to number");
assertThrowsInstanceOf(() => #[1, 2] < #[1, 3], TypeError,
                       "cannot convert record or tuple to number");
assertThrowsInstanceOf(() => #[1, 2] >= #[1, 3], TypeError,
                       "cannot convert record or tuple to number");
assertThrowsInstanceOf(() => #[1, 2] <= #[1, 3], TypeError,
                       "cannot convert record or tuple to number");



