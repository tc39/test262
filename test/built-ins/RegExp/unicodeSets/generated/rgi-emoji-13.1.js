// Copyright 2023 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Test that Unicode property escapes for `RGI_Emoji` (property of strings)
  match Emoji 13.1 strings.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes, regexp-v-flag]
includes: [regExpUtils.js]
---*/

testPropertyOfStrings({
  regExp: /^\p{RGI_Emoji}+$/v,
  expression: "\\p{RGI_Emoji}",
  matchStrings: [
    "\u2764\uFE0F\u200D\u{1F525}",
    "\u2764\uFE0F\u200D\u{1FA79}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}",
    "\u{1F48F}\u{1F3FB}",
    "\u{1F48F}\u{1F3FC}",
    "\u{1F48F}\u{1F3FD}",
    "\u{1F48F}\u{1F3FE}",
    "\u{1F48F}\u{1F3FF}",
    "\u{1F491}\u{1F3FB}",
    "\u{1F491}\u{1F3FC}",
    "\u{1F491}\u{1F3FD}",
    "\u{1F491}\u{1F3FE}",
    "\u{1F491}\u{1F3FF}",
    "\u{1F62E}\u200D\u{1F4A8}",
    "\u{1F635}\u200D\u{1F4AB}",
    "\u{1F636}\u200D\u{1F32B}\uFE0F",
    "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}",
    "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}",
    "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}",
    "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}",
    "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}",
    "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}",
    "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}",
    "\u{1F9D1}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}",
    "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}",
    "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}",
    "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}",
    "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}",
    "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}",
    "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}",
    "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}",
    "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}",
    "\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}",
    "\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}",
    "\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}",
    "\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}",
    "\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}",
    "\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}",
    "\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}",
    "\u{1F9D1}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}",
    "\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}",
    "\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}",
    "\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}",
    "\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FF}",
    "\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}",
    "\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}",
    "\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}",
    "\u{1F9D1}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FF}",
    "\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}",
    "\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FC}",
    "\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FD}",
    "\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FE}",
    "\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FB}",
    "\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FC}",
    "\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FD}",
    "\u{1F9D1}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F9D1}\u{1F3FE}",
    "\u{1F9D4}\u200D\u2640\uFE0F",
    "\u{1F9D4}\u200D\u2642\uFE0F",
    "\u{1F9D4}\u{1F3FB}\u200D\u2640\uFE0F",
    "\u{1F9D4}\u{1F3FB}\u200D\u2642\uFE0F",
    "\u{1F9D4}\u{1F3FC}\u200D\u2640\uFE0F",
    "\u{1F9D4}\u{1F3FC}\u200D\u2642\uFE0F",
    "\u{1F9D4}\u{1F3FD}\u200D\u2640\uFE0F",
    "\u{1F9D4}\u{1F3FD}\u200D\u2642\uFE0F",
    "\u{1F9D4}\u{1F3FE}\u200D\u2640\uFE0F",
    "\u{1F9D4}\u{1F3FE}\u200D\u2642\uFE0F",
    "\u{1F9D4}\u{1F3FF}\u200D\u2640\uFE0F",
    "\u{1F9D4}\u{1F3FF}\u200D\u2642\uFE0F"
  ],
});
