// Copyright 2019 Google Inc. All rights reserved.
// Copyright (C) 2022 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializedatetimeformat
description: >
    Checks handling of the options argument to the DateTimeFormat constructor.
info: |
    InitializeDateTimeFormat ( dateTimeFormat, locales, options )
     1. Let _value_ be ? GetNumberOption(_options_, *"fractionalSecondDigits"*, 0, 9, *undefined*).
     1. If _value_ is one of *"0"*, *"4"*, *"5"*, *"6"*, *"7"*, *"8"*, *"9"*, set _value_ to *undefined*.
features: [Intl.DateTimeFormat-fractionalSecondDigits]
---*/


const validOptions = [
  [undefined, undefined],
  [0, undefined],
  ["0", undefined],
  [4, undefined],
  ["4", undefined],
  [5, undefined],
  ["5", undefined],
  [6, undefined],
  ["6", undefined],
  [7, undefined],
  ["7", undefined],
  [8, undefined],
  ["8", undefined],
  [9, undefined],
  ["9", undefined],
  [1, 1],
  ["1", 1],
  [2, 2],
  ["2", 2],
  [3, 3],
  ["3", 3],
  [2.9, 2],
  ["2.9", 2],
  [1.00001, 1],
  [{ toString() { return "3"; } }, 3],
];
for (const [fractionalSecondDigits, expected] of validOptions) {
  const dtf = new Intl.DateTimeFormat("en", { fractionalSecondDigits });
  const options = dtf.resolvedOptions();
  assert.sameValue(options.fractionalSecondDigits, expected);
  const propdesc = Object.getOwnPropertyDescriptor(options, "fractionalSecondDigits");
  if (expected === undefined) {
    assert.sameValue(propdesc, undefined);
  } else {
    assert.sameValue(propdesc.value, expected);
  }
}
