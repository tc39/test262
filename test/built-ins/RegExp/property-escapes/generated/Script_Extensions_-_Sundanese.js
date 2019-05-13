// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Sundanese`
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
    [0x001B80, 0x001BBF],
    [0x001CC0, 0x001CC7]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Sundanese}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sundanese}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Sund}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sund}"
);
testPropertyEscapes(
  /^\p{scx=Sundanese}+$/u,
  matchSymbols,
  "\\p{scx=Sundanese}"
);
testPropertyEscapes(
  /^\p{scx=Sund}+$/u,
  matchSymbols,
  "\\p{scx=Sund}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x001B7F],
    [0x001BC0, 0x001CBF],
    [0x001CC8, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Sundanese}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sundanese}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Sund}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sund}"
);
testPropertyEscapes(
  /^\P{scx=Sundanese}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sundanese}"
);
testPropertyEscapes(
  /^\P{scx=Sund}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sund}"
);
