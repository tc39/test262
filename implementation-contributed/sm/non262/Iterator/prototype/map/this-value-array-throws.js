// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

//

/*---
esid: pending
description: |
  TypeError not thrown when `this` is an Array.
features:
- Iterator
- Symbol.iterator
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
---*/

Iterator.prototype.map.call([], x => x);

