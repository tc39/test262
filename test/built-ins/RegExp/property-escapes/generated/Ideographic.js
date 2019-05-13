// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Ideographic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x003006, 0x003007],
    [0x003021, 0x003029],
    [0x003038, 0x00303A],
    [0x003400, 0x004DB5],
    [0x004E00, 0x009FEF],
    [0x00F900, 0x00FA6D],
    [0x00FA70, 0x00FAD9],
    [0x017000, 0x0187F7],
    [0x018800, 0x018AF2],
    [0x01B170, 0x01B2FB],
    [0x020000, 0x02A6D6],
    [0x02A700, 0x02B734],
    [0x02B740, 0x02B81D],
    [0x02B820, 0x02CEA1],
    [0x02CEB0, 0x02EBE0],
    [0x02F800, 0x02FA1D]
  ]
});
testPropertyEscapes(
  /^\p{Ideographic}+$/u,
  matchSymbols,
  "\\p{Ideographic}"
);
testPropertyEscapes(
  /^\p{Ideo}+$/u,
  matchSymbols,
  "\\p{Ideo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x003005],
    [0x003008, 0x003020],
    [0x00302A, 0x003037],
    [0x00303B, 0x0033FF],
    [0x004DB6, 0x004DFF],
    [0x009FF0, 0x00DBFF],
    [0x00E000, 0x00F8FF],
    [0x00FA6E, 0x00FA6F],
    [0x00FADA, 0x016FFF],
    [0x0187F8, 0x0187FF],
    [0x018AF3, 0x01B16F],
    [0x01B2FC, 0x01FFFF],
    [0x02A6D7, 0x02A6FF],
    [0x02B735, 0x02B73F],
    [0x02B81E, 0x02B81F],
    [0x02CEA2, 0x02CEAF],
    [0x02EBE1, 0x02F7FF],
    [0x02FA1E, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Ideographic}+$/u,
  nonMatchSymbols,
  "\\P{Ideographic}"
);
testPropertyEscapes(
  /^\P{Ideo}+$/u,
  nonMatchSymbols,
  "\\P{Ideo}"
);
