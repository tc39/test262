// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Dives_Akuru`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x011909
  ],
  ranges: [
    [0x011900, 0x011906],
    [0x01190C, 0x011913],
    [0x011915, 0x011916],
    [0x011918, 0x011935],
    [0x011937, 0x011938],
    [0x01193B, 0x011946],
    [0x011950, 0x011959]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Dives_Akuru}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Dives_Akuru}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Diak}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Diak}"
);
testPropertyEscapes(
  /^\p{scx=Dives_Akuru}+$/u,
  matchSymbols,
  "\\p{scx=Dives_Akuru}"
);
testPropertyEscapes(
  /^\p{scx=Diak}+$/u,
  matchSymbols,
  "\\p{scx=Diak}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011914,
    0x011917,
    0x011936
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0118FF],
    [0x011907, 0x011908],
    [0x01190A, 0x01190B],
    [0x011939, 0x01193A],
    [0x011947, 0x01194F],
    [0x01195A, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Dives_Akuru}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Dives_Akuru}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Diak}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Diak}"
);
testPropertyEscapes(
  /^\P{scx=Dives_Akuru}+$/u,
  nonMatchSymbols,
  "\\P{scx=Dives_Akuru}"
);
testPropertyEscapes(
  /^\P{scx=Diak}+$/u,
  nonMatchSymbols,
  "\\P{scx=Diak}"
);
