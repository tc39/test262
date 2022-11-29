// Copyright 2019 Google Inc. All rights reserved.
// Copyright (C) 2022 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializedatetimeformat
description: >
    Checks error cases for the options argument to the DateTimeFormat constructor.
info: |
    InitializeDateTimeFormat ( dateTimeFormat, locales, options )
     1. Let _value_ be ? GetNumberOption(_options_, *"fractionalSecondDigits"*, 0, 9, *undefined*).
     1. If _value_ is one of *"0"*, *"4"*, *"5"*, *"6"*, *"7"*, *"8"*, *"9"*, set _value_ to *undefined*.

    ...
features: [Intl.DateTimeFormat-fractionalSecondDigits]
---*/


const invalidOptions = [
  "LONG",
  " long",
  "short ",
  "full",
  "numeric",
  -1,
  "-1",
  -0.00001
];
for (const fractionalSecondDigits of invalidOptions) {
  assert.throws(RangeError, function() {
    new Intl.DateTimeFormat("en", { fractionalSecondDigits });
  },
  `new Intl.DateTimeFormat("en", { fractionalSecondDigits: "${fractionalSecondDigits}" }) throws RangeError`);
}
