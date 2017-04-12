// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Meroitic_Hieroglyphs`
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
    [0x010980, 0x01099F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Meroitic_Hieroglyphs}+$/u,
  matchSymbols,
  "\\p{Script=Meroitic_Hieroglyphs}"
);
testPropertyEscapes(
  /^\p{Script=Mero}+$/u,
  matchSymbols,
  "\\p{Script=Mero}"
);
testPropertyEscapes(
  /^\p{sc=Meroitic_Hieroglyphs}+$/u,
  matchSymbols,
  "\\p{sc=Meroitic_Hieroglyphs}"
);
testPropertyEscapes(
  /^\p{sc=Mero}+$/u,
  matchSymbols,
  "\\p{sc=Mero}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01097F],
    [0x0109A0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Meroitic_Hieroglyphs}+$/u,
  nonMatchSymbols,
  "\\P{Script=Meroitic_Hieroglyphs}"
);
testPropertyEscapes(
  /^\P{Script=Mero}+$/u,
  nonMatchSymbols,
  "\\P{Script=Mero}"
);
testPropertyEscapes(
  /^\P{sc=Meroitic_Hieroglyphs}+$/u,
  nonMatchSymbols,
  "\\P{sc=Meroitic_Hieroglyphs}"
);
testPropertyEscapes(
  /^\P{sc=Mero}+$/u,
  nonMatchSymbols,
  "\\P{sc=Mero}"
);
