// Copyright 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.RelativeTimeFormat.prototype.format
description: Checks that numberingSystem option used correctly.
info: |
    17.5.2 PartitionRelativeTimePattern ( relativeTimeFormat, value, unit )

    11. Let fv be PartitionNumberPattern(relativeTimeFormat.[[NumberFormat]], ℝ(value)).

locale: [en-US]
---*/

const localesAndResults = [
  ["en-US", "1,234,567,890"],
  ["en-US-u-nu-arab", "١٬٢٣٤٬٥٦٧٬٨٩٠"],
  ["en-US-u-nu-deva", "१,२३४,५६७,८९०"],
  ["en-US-u-nu-hanidec", "一,二三四,五六七,八九〇"],
];
const seconds = 1234567890;

for (const [locale, expected] of localesAndResults){
  const formatted = new Intl.RelativeTimeFormat(locale, {style: "short"}).format(seconds, "seconds");
  assert.sameValue(formatted.includes(expected), true, `locale: ${locale}`);
}
