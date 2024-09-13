// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tulu_Tigalari`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01138B,
    0x01138E,
    0x0113C2,
    0x0113C5
  ],
  ranges: [
    [0x011380, 0x011389],
    [0x011390, 0x0113B5],
    [0x0113B7, 0x0113C0],
    [0x0113C7, 0x0113CA],
    [0x0113CC, 0x0113D5],
    [0x0113D7, 0x0113D8],
    [0x0113E1, 0x0113E2]
  ]
});
testPropertyEscapes(
  /^\p{Script=Tulu_Tigalari}+$/u,
  matchSymbols,
  "\\p{Script=Tulu_Tigalari}"
);
testPropertyEscapes(
  /^\p{Script=Tutg}+$/u,
  matchSymbols,
  "\\p{Script=Tutg}"
);
testPropertyEscapes(
  /^\p{sc=Tulu_Tigalari}+$/u,
  matchSymbols,
  "\\p{sc=Tulu_Tigalari}"
);
testPropertyEscapes(
  /^\p{sc=Tutg}+$/u,
  matchSymbols,
  "\\p{sc=Tutg}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x01138A,
    0x01138F,
    0x0113B6,
    0x0113C1,
    0x0113C6,
    0x0113CB,
    0x0113D6
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01137F],
    [0x01138C, 0x01138D],
    [0x0113C3, 0x0113C4],
    [0x0113D9, 0x0113E0],
    [0x0113E3, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Tulu_Tigalari}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tulu_Tigalari}"
);
testPropertyEscapes(
  /^\P{Script=Tutg}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tutg}"
);
testPropertyEscapes(
  /^\P{sc=Tulu_Tigalari}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tulu_Tigalari}"
);
testPropertyEscapes(
  /^\P{sc=Tutg}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tutg}"
);
