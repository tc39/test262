// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Greek`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00037F,
    0x000384,
    0x000386,
    0x00038C,
    0x001DBF,
    0x001F59,
    0x001F5B,
    0x001F5D,
    0x002126,
    0x00AB65,
    0x0101A0
  ],
  ranges: [
    [0x000370, 0x000373],
    [0x000375, 0x000377],
    [0x00037A, 0x00037D],
    [0x000388, 0x00038A],
    [0x00038E, 0x0003A1],
    [0x0003A3, 0x0003E1],
    [0x0003F0, 0x0003FF],
    [0x001D26, 0x001D2A],
    [0x001D5D, 0x001D61],
    [0x001D66, 0x001D6A],
    [0x001F00, 0x001F15],
    [0x001F18, 0x001F1D],
    [0x001F20, 0x001F45],
    [0x001F48, 0x001F4D],
    [0x001F50, 0x001F57],
    [0x001F5F, 0x001F7D],
    [0x001F80, 0x001FB4],
    [0x001FB6, 0x001FC4],
    [0x001FC6, 0x001FD3],
    [0x001FD6, 0x001FDB],
    [0x001FDD, 0x001FEF],
    [0x001FF2, 0x001FF4],
    [0x001FF6, 0x001FFE],
    [0x010140, 0x01018E],
    [0x01D200, 0x01D245]
  ]
});
testPropertyEscapes(
  /^\p{Script=Greek}+$/u,
  matchSymbols,
  "\\p{Script=Greek}"
);
testPropertyEscapes(
  /^\p{Script=Grek}+$/u,
  matchSymbols,
  "\\p{Script=Grek}"
);
testPropertyEscapes(
  /^\p{sc=Greek}+$/u,
  matchSymbols,
  "\\p{sc=Greek}"
);
testPropertyEscapes(
  /^\p{sc=Grek}+$/u,
  matchSymbols,
  "\\p{sc=Grek}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000374,
    0x00037E,
    0x000385,
    0x000387,
    0x00038B,
    0x00038D,
    0x0003A2,
    0x001F58,
    0x001F5A,
    0x001F5C,
    0x001F5E,
    0x001FB5,
    0x001FC5,
    0x001FDC,
    0x001FF5
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00036F],
    [0x000378, 0x000379],
    [0x000380, 0x000383],
    [0x0003E2, 0x0003EF],
    [0x000400, 0x001D25],
    [0x001D2B, 0x001D5C],
    [0x001D62, 0x001D65],
    [0x001D6B, 0x001DBE],
    [0x001DC0, 0x001EFF],
    [0x001F16, 0x001F17],
    [0x001F1E, 0x001F1F],
    [0x001F46, 0x001F47],
    [0x001F4E, 0x001F4F],
    [0x001F7E, 0x001F7F],
    [0x001FD4, 0x001FD5],
    [0x001FF0, 0x001FF1],
    [0x001FFF, 0x002125],
    [0x002127, 0x00AB64],
    [0x00AB66, 0x00DBFF],
    [0x00E000, 0x01013F],
    [0x01018F, 0x01019F],
    [0x0101A1, 0x01D1FF],
    [0x01D246, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Greek}+$/u,
  nonMatchSymbols,
  "\\P{Script=Greek}"
);
testPropertyEscapes(
  /^\P{Script=Grek}+$/u,
  nonMatchSymbols,
  "\\P{Script=Grek}"
);
testPropertyEscapes(
  /^\P{sc=Greek}+$/u,
  nonMatchSymbols,
  "\\P{sc=Greek}"
);
testPropertyEscapes(
  /^\P{sc=Grek}+$/u,
  nonMatchSymbols,
  "\\P{sc=Grek}"
);
