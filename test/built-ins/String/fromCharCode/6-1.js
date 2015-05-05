// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Return the String value whose elements are, in order, the elements
    in the List elements
author: Murat Sutunc
---*/

if (String.fromCodePoint(0x76, 0x10FFFF) !== "\u0076\uDBFF\uDFFF") {
    $ERROR("fromCodePoint(0x76, 0x10FFFF) and \\u0076\\uDBFF\\uDFFF should be equal")
}
