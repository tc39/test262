// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-names-and-keywords
description: Test astral characters of ID_Continue.
info: |
  Astral characters (Other_ID_Continue)
---*/

// Other_ID_Continue (Unicode 4.1)
var a𐒤; // U+104A4
var a𐨏; // U+10A0F

// Other_ID_Continue (Unicode 5.2)
var a𑂺; // U+110BA
var a𑂸; // U+110B8

// Other_ID_Continue (Unicode 6.3)
var a𑄁; // U+11101
var a𑁪; // U+1106A

// Other_ID_Continue (Unicode 7.0)
var a𑖿; // U+115BF
var a𑌁; // U+11301

// Other_ID_Continue (Unicode 8.0)
var a𝨅; // U+1DA05
var a𑜪; // U+1172A

// Other_ID_Continue (Unicode 9.0)
var a𑱗; // U+11C57
var a𑲟; // U+11C9F

// Other_ID_Continue (Unicode 10.0)
var a𑨹; // U+11A39
var a𑵁; // U+11D41

// Other_ID_Continue (Unicode 11.0)
var a𐴱; // U+10D31
var a𐽍; // U+10F4D

// Other_ID_Continue (Unicode 12.0)
var a𞄵; // U+1E135
var a𞅃; // U+1E143
