// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-DateTimeFormat-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
for (let weekday of ["long", "short", "narrow"]) {
    let dtf = new Intl.DateTimeFormat("en", {weekday});
    let options = dtf.resolvedOptions();

    assert.sameValue(options.weekday, weekday);
}

