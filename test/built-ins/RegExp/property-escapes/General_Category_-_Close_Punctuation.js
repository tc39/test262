// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Close_Punctuation`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000029,
    0x00005D,
    0x00007D,
    0x000F3B,
    0x000F3D,
    0x00169C,
    0x002046,
    0x00207E,
    0x00208E,
    0x002309,
    0x00230B,
    0x00232A,
    0x002769,
    0x00276B,
    0x00276D,
    0x00276F,
    0x002771,
    0x002773,
    0x002775,
    0x0027C6,
    0x0027E7,
    0x0027E9,
    0x0027EB,
    0x0027ED,
    0x0027EF,
    0x002984,
    0x002986,
    0x002988,
    0x00298A,
    0x00298C,
    0x00298E,
    0x002990,
    0x002992,
    0x002994,
    0x002996,
    0x002998,
    0x0029D9,
    0x0029DB,
    0x0029FD,
    0x002E23,
    0x002E25,
    0x002E27,
    0x002E29,
    0x003009,
    0x00300B,
    0x00300D,
    0x00300F,
    0x003011,
    0x003015,
    0x003017,
    0x003019,
    0x00301B,
    0x00FD3E,
    0x00FE18,
    0x00FE36,
    0x00FE38,
    0x00FE3A,
    0x00FE3C,
    0x00FE3E,
    0x00FE40,
    0x00FE42,
    0x00FE44,
    0x00FE48,
    0x00FE5A,
    0x00FE5C,
    0x00FE5E,
    0x00FF09,
    0x00FF3D,
    0x00FF5D,
    0x00FF60,
    0x00FF63
  ],
  ranges: [
    [0x00301E, 0x00301F]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Close_Punctuation}+$/u,
  matchSymbols,
  "\\p{General_Category=Close_Punctuation}"
);
testPropertyEscapes(
  /^\p{General_Category=Pe}+$/u,
  matchSymbols,
  "\\p{General_Category=Pe}"
);
testPropertyEscapes(
  /^\p{gc=Close_Punctuation}+$/u,
  matchSymbols,
  "\\p{gc=Close_Punctuation}"
);
testPropertyEscapes(
  /^\p{gc=Pe}+$/u,
  matchSymbols,
  "\\p{gc=Pe}"
);
testPropertyEscapes(
  /^\p{Close_Punctuation}+$/u,
  matchSymbols,
  "\\p{Close_Punctuation}"
);
testPropertyEscapes(
  /^\p{Pe}+$/u,
  matchSymbols,
  "\\p{Pe}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000F3C,
    0x00230A,
    0x00276A,
    0x00276C,
    0x00276E,
    0x002770,
    0x002772,
    0x002774,
    0x0027E8,
    0x0027EA,
    0x0027EC,
    0x0027EE,
    0x002985,
    0x002987,
    0x002989,
    0x00298B,
    0x00298D,
    0x00298F,
    0x002991,
    0x002993,
    0x002995,
    0x002997,
    0x0029DA,
    0x002E24,
    0x002E26,
    0x002E28,
    0x00300A,
    0x00300C,
    0x00300E,
    0x003010,
    0x003016,
    0x003018,
    0x00301A,
    0x00FE37,
    0x00FE39,
    0x00FE3B,
    0x00FE3D,
    0x00FE3F,
    0x00FE41,
    0x00FE43,
    0x00FE5B,
    0x00FE5D
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000028],
    [0x00002A, 0x00005C],
    [0x00005E, 0x00007C],
    [0x00007E, 0x000F3A],
    [0x000F3E, 0x00169B],
    [0x00169D, 0x002045],
    [0x002047, 0x00207D],
    [0x00207F, 0x00208D],
    [0x00208F, 0x002308],
    [0x00230C, 0x002329],
    [0x00232B, 0x002768],
    [0x002776, 0x0027C5],
    [0x0027C7, 0x0027E6],
    [0x0027F0, 0x002983],
    [0x002999, 0x0029D8],
    [0x0029DC, 0x0029FC],
    [0x0029FE, 0x002E22],
    [0x002E2A, 0x003008],
    [0x003012, 0x003014],
    [0x00301C, 0x00301D],
    [0x003020, 0x00DBFF],
    [0x00E000, 0x00FD3D],
    [0x00FD3F, 0x00FE17],
    [0x00FE19, 0x00FE35],
    [0x00FE45, 0x00FE47],
    [0x00FE49, 0x00FE59],
    [0x00FE5F, 0x00FF08],
    [0x00FF0A, 0x00FF3C],
    [0x00FF3E, 0x00FF5C],
    [0x00FF5E, 0x00FF5F],
    [0x00FF61, 0x00FF62],
    [0x00FF64, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Close_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Close_Punctuation}"
);
testPropertyEscapes(
  /^\P{General_Category=Pe}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Pe}"
);
testPropertyEscapes(
  /^\P{gc=Close_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{gc=Close_Punctuation}"
);
testPropertyEscapes(
  /^\P{gc=Pe}+$/u,
  nonMatchSymbols,
  "\\P{gc=Pe}"
);
testPropertyEscapes(
  /^\P{Close_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{Close_Punctuation}"
);
testPropertyEscapes(
  /^\P{Pe}+$/u,
  nonMatchSymbols,
  "\\P{Pe}"
);
