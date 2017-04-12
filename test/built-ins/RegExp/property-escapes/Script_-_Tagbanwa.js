// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tagbanwa`
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
    [0x001760, 0x00176C],
    [0x00176E, 0x001770],
    [0x001772, 0x001773]
  ]
});
testPropertyEscapes(
  /^\p{Script=Tagbanwa}+$/u,
  matchSymbols,
  "\\p{Script=Tagbanwa}"
);
testPropertyEscapes(
  /^\p{Script=Tagb}+$/u,
  matchSymbols,
  "\\p{Script=Tagb}"
);
testPropertyEscapes(
  /^\p{sc=Tagbanwa}+$/u,
  matchSymbols,
  "\\p{sc=Tagbanwa}"
);
testPropertyEscapes(
  /^\p{sc=Tagb}+$/u,
  matchSymbols,
  "\\p{sc=Tagb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00176D,
    0x001771
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00175F],
    [0x001774, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Tagbanwa}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tagbanwa}"
);
testPropertyEscapes(
  /^\P{Script=Tagb}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tagb}"
);
testPropertyEscapes(
  /^\P{sc=Tagbanwa}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tagbanwa}"
);
testPropertyEscapes(
  /^\P{sc=Tagb}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tagb}"
);
