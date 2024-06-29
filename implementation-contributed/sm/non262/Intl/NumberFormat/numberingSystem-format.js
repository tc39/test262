// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-NumberFormat-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/for (let [numberingSystem, {digits, algorithmic}] of Object.entries(numberingSystems)) {
  if (algorithmic) {
    // We don't yet support algorithmic numbering systems.
    continue;
  }

  let nf = new Intl.NumberFormat("en", {numberingSystem});

  assert.sameValue([...digits].length, 10, "expect exactly ten digits for each numbering system");

  let i = 0;
  for (let digit of digits) {
    assert.sameValue(nf.format(i++), digit);
  }
}

