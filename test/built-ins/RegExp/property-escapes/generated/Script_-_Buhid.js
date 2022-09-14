// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Buhid`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001740, 0x001753]
  ]
});
testPropertyEscapes(
  /^\p{Script=Buhid}+$/u,
  matchSymbols,
  "\\p{Script=Buhid}"
);
testPropertyEscapes(
  /^\p{Script=Buhd}+$/u,
  matchSymbols,
  "\\p{Script=Buhd}"
);
testPropertyEscapes(
  /^\p{sc=Buhid}+$/u,
  matchSymbols,
  "\\p{sc=Buhid}"
);
testPropertyEscapes(
  /^\p{sc=Buhd}+$/u,
  matchSymbols,
  "\\p{sc=Buhd}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00173F],
    [0x001754, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Buhid}+$/u,
  nonMatchSymbols,
  "\\P{Script=Buhid}"
);
testPropertyEscapes(
  /^\P{Script=Buhd}+$/u,
  nonMatchSymbols,
  "\\P{Script=Buhd}"
);
testPropertyEscapes(
  /^\P{sc=Buhid}+$/u,
  nonMatchSymbols,
  "\\P{sc=Buhid}"
);
testPropertyEscapes(
  /^\P{sc=Buhd}+$/u,
  nonMatchSymbols,
  "\\P{sc=Buhd}"
);
