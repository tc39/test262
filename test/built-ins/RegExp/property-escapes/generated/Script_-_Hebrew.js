// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Hebrew`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00FB3E
  ],
  ranges: [
    [0x000591, 0x0005C7],
    [0x0005D0, 0x0005EA],
    [0x0005EF, 0x0005F4],
    [0x00FB1D, 0x00FB36],
    [0x00FB38, 0x00FB3C],
    [0x00FB40, 0x00FB41],
    [0x00FB43, 0x00FB44],
    [0x00FB46, 0x00FB4F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Hebrew}+$/u,
  matchSymbols,
  "\\p{Script=Hebrew}"
);
testPropertyEscapes(
  /^\p{Script=Hebr}+$/u,
  matchSymbols,
  "\\p{Script=Hebr}"
);
testPropertyEscapes(
  /^\p{sc=Hebrew}+$/u,
  matchSymbols,
  "\\p{sc=Hebrew}"
);
testPropertyEscapes(
  /^\p{sc=Hebr}+$/u,
  matchSymbols,
  "\\p{sc=Hebr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00FB37,
    0x00FB3D,
    0x00FB3F,
    0x00FB42,
    0x00FB45
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000590],
    [0x0005C8, 0x0005CF],
    [0x0005EB, 0x0005EE],
    [0x0005F5, 0x00DBFF],
    [0x00E000, 0x00FB1C],
    [0x00FB50, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Hebrew}+$/u,
  nonMatchSymbols,
  "\\P{Script=Hebrew}"
);
testPropertyEscapes(
  /^\P{Script=Hebr}+$/u,
  nonMatchSymbols,
  "\\P{Script=Hebr}"
);
testPropertyEscapes(
  /^\P{sc=Hebrew}+$/u,
  nonMatchSymbols,
  "\\P{sc=Hebrew}"
);
testPropertyEscapes(
  /^\P{sc=Hebr}+$/u,
  nonMatchSymbols,
  "\\P{sc=Hebr}"
);
