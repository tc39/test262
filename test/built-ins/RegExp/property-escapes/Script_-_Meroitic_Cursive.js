// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Meroitic_Cursive`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0109A0, 0x0109B7],
    [0x0109BC, 0x0109CF],
    [0x0109D2, 0x0109FF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Meroitic_Cursive}+$/u,
  matchSymbols,
  "\\p{Script=Meroitic_Cursive}"
);
testPropertyEscapes(
  /^\p{Script=Merc}+$/u,
  matchSymbols,
  "\\p{Script=Merc}"
);
testPropertyEscapes(
  /^\p{sc=Meroitic_Cursive}+$/u,
  matchSymbols,
  "\\p{sc=Meroitic_Cursive}"
);
testPropertyEscapes(
  /^\p{sc=Merc}+$/u,
  matchSymbols,
  "\\p{sc=Merc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01099F],
    [0x0109B8, 0x0109BB],
    [0x0109D0, 0x0109D1],
    [0x010A00, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Meroitic_Cursive}+$/u,
  nonMatchSymbols,
  "\\P{Script=Meroitic_Cursive}"
);
testPropertyEscapes(
  /^\P{Script=Merc}+$/u,
  nonMatchSymbols,
  "\\P{Script=Merc}"
);
testPropertyEscapes(
  /^\P{sc=Meroitic_Cursive}+$/u,
  nonMatchSymbols,
  "\\P{sc=Meroitic_Cursive}"
);
testPropertyEscapes(
  /^\P{sc=Merc}+$/u,
  nonMatchSymbols,
  "\\P{sc=Merc}"
);
