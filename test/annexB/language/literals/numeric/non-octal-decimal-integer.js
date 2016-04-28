// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-additional-syntax-numeric-literals
es6id: B1.1
description: Mathematical value for NonOctalDecimalIntegerLiteral
info: >
     DecimalIntegerLiteral ::
       0
       NonZeroDigit DecimalDigits[opt]
       NonOctalDecimalIntegerLiteral

     NonOctalDecimalIntegerLiteral ::
       0 NonOctalDigit
       LegacyOctalLikeDecimalIntegerLiteral NonOctalDigit
       NonOctalDecimalIntegerLiteral DecimalDigit

     LegacyOctalLikeDecimalIntegerLiteral ::
       0 OctalDigit
       LegacyOctalLikeDecimalIntegerLiteral OctalDigit

     NonOctalDigit :: one of
       8 9
flags: [noStrict]
---*/

// NonOctalDecimalIntegerLiteral ::
//   0 NonOctalDigit
assert.sameValue(08, 8);
assert.sameValue(09, 9);

// NonOctalDecimalIntegerLiteral ::
//   LegacyOctalLikeDecimalIntegerLiteral NonOctalDigit
assert.sameValue(008, 8);
assert.sameValue(018, 18);
assert.sameValue(028, 28);
assert.sameValue(038, 38);
assert.sameValue(048, 48);
assert.sameValue(058, 58);
assert.sameValue(068, 68);
assert.sameValue(078, 78);
assert.sameValue(088, 88);
assert.sameValue(098, 98);
assert.sameValue(0708, 708);
assert.sameValue(0718, 718);
assert.sameValue(0728, 728);
assert.sameValue(0738, 738);
assert.sameValue(0748, 748);
assert.sameValue(0758, 758);
assert.sameValue(0768, 768);
assert.sameValue(0778, 778);
assert.sameValue(0788, 788);
assert.sameValue(0798, 798);

assert.sameValue(009, 9);
assert.sameValue(019, 19);
assert.sameValue(029, 29);
assert.sameValue(039, 39);
assert.sameValue(049, 49);
assert.sameValue(059, 59);
assert.sameValue(069, 69);
assert.sameValue(079, 79);
assert.sameValue(089, 89);
assert.sameValue(099, 99);
assert.sameValue(0709, 709);
assert.sameValue(0719, 719);
assert.sameValue(0729, 729);
assert.sameValue(0739, 739);
assert.sameValue(0749, 749);
assert.sameValue(0759, 759);
assert.sameValue(0769, 769);
assert.sameValue(0779, 779);
assert.sameValue(0789, 789);
assert.sameValue(0799, 799);

// NonOctalDecimalIntegerLiteral ::
//   NonOctalDecimalIntegerLiteral DecimalDigit
assert.sameValue(080, 80);
assert.sameValue(081, 81);
assert.sameValue(082, 82);
assert.sameValue(083, 83);
assert.sameValue(084, 84);
assert.sameValue(085, 85);
assert.sameValue(086, 86);
assert.sameValue(087, 87);
assert.sameValue(088, 88);
assert.sameValue(089, 89);

assert.sameValue(0780, 780);
assert.sameValue(0781, 781);
assert.sameValue(0782, 782);
assert.sameValue(0783, 783);
assert.sameValue(0784, 784);
assert.sameValue(0785, 785);
assert.sameValue(0786, 786);
assert.sameValue(0787, 787);
assert.sameValue(0788, 788);
assert.sameValue(0789, 789);

assert.sameValue(090, 90);
assert.sameValue(091, 91);
assert.sameValue(092, 92);
assert.sameValue(093, 93);
assert.sameValue(094, 94);
assert.sameValue(095, 95);
assert.sameValue(096, 96);
assert.sameValue(097, 97);
assert.sameValue(098, 98);
assert.sameValue(099, 99);

assert.sameValue(0790, 790);
assert.sameValue(0791, 791);
assert.sameValue(0792, 792);
assert.sameValue(0793, 793);
assert.sameValue(0794, 794);
assert.sameValue(0795, 795);
assert.sameValue(0796, 796);
assert.sameValue(0797, 797);
assert.sameValue(0798, 798);
assert.sameValue(0799, 799);
