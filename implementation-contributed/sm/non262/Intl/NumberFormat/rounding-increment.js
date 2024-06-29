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
features:
- Intl
description: |
  pending
esid: pending
---*/
// Nickel rounding.
{
  let nf = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    roundingIncrement: 5,
  });

  assert.sameValue(nf.format(1.22), "1.20");
  assert.sameValue(nf.format(1.224), "1.20");
  assert.sameValue(nf.format(1.225), "1.25");
  assert.sameValue(nf.format(1.23), "1.25");
}

// Dime rounding.
{
  let nf = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    roundingIncrement: 10,
  });

  assert.sameValue(nf.format(1.24), "1.20");
  assert.sameValue(nf.format(1.249), "1.20");
  assert.sameValue(nf.format(1.250), "1.30");
  assert.sameValue(nf.format(1.25), "1.30");
}

// Rounding increment option is rounded down.
{
  let nf1 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    roundingIncrement: 10,
  });

  let nf2 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    roundingIncrement: 10.1,
  });

  let nf3 = new Intl.NumberFormat("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    roundingIncrement: 10.9,
  });

  assert.sameValue(nf1.resolvedOptions().roundingIncrement, 10);
  assert.sameValue(nf2.resolvedOptions().roundingIncrement, 10);
  assert.sameValue(nf3.resolvedOptions().roundingIncrement, 10);

  assert.sameValue(nf1.format(123), "120");
  assert.sameValue(nf2.format(123), "120");
  assert.sameValue(nf3.format(123), "120");
}

// |minimumFractionDigits| must be equal to |maximumFractionDigits| when
// |roundingIncrement| is used.
//
// |minimumFractionDigits| defaults to zero.
{
  let nf = new Intl.NumberFormat("en", {
    roundingIncrement: 10,
    // minimumFractionDigits: 0, (default)
    maximumFractionDigits: 0,
  });

  let resolved = nf.resolvedOptions();
  assert.sameValue(resolved.minimumFractionDigits, 0);
  assert.sameValue(resolved.maximumFractionDigits, 0);
  assert.sameValue(resolved.roundingIncrement, 10);

  assert.sameValue(nf.format(123), "120");
  assert.sameValue(nf.format(123.456), "120");
}

// |maximumFractionDigitsDefault| is set to |minimumFractionDigitsDefault| when
// roundingIncrement isn't equal to 1.
{
  let options = {
    roundingIncrement: 10,
    // minimumFractionDigits: 0, (default)
    // maximumFractionDigits: 0, (default)
  };
  let nf = new Intl.NumberFormat("en", options);
  assert.sameValue(nf.resolvedOptions().minimumFractionDigits, 0);
  assert.sameValue(nf.resolvedOptions().maximumFractionDigits, 0);
}

// |maximumFractionDigits| must be equal to |minimumFractionDigits| when
// roundingIncrement isn't equal to 1.
{
  let options = {
    roundingIncrement: 10,
    // minimumFractionDigits: 0, (default)
    maximumFractionDigits: 1,
  };
  assertThrowsInstanceOf(() => new Intl.NumberFormat("en", options), RangeError);
}

// Invalid values.
for (let roundingIncrement of [-1, 0, Infinity, NaN]){
  let options = {
    roundingIncrement,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  assertThrowsInstanceOf(() => new Intl.NumberFormat("en", options), RangeError);
}

