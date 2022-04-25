// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat
description: Checks handling of valid value for the localeMatcher option to the DurationFormat constructor.
info: |
    Intl.DurationFormat ( [ locales [ , options ] ] )
    (...)
    5. Let matcher be ? GetOption(options, "localeMatcher", "string", « "lookup", "best fit" », "best fit").
features: [Intl.DurationFormat]
---*/

const validOptions = [
  undefined,
  'lookup',
  'best fit'
];

for (const localeMatcher of validOptions) {
  const obj = new Intl.DurationFormat('en', { localeMatcher });

  assert.sameValue(Object.getPrototypeOf(obj), Intl.DurationFormat.prototype, `proto check - ${localeMatcher}`);
}

