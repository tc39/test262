// Copyright (C) 2019 Toru Nagashima. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    BigInt in LiteralPropertyName must be valid and the property name must be
    the string representation of the numeric value.
esid: sec-object-initializer-runtime-semantics-evaluation
info: |
    LiteralPropertyName: NumericLiteral
        1. Let _nbr_ be the NumericValue of |NumericLiteral|.
        1. Return ! ToString(_nbr_).
features: [BigInt]
---*/

var obj = { 999999999999999999n: true };

assert.sameValue(obj["999999999999999999"], true,
    "the property name must be the string representation of the numeric value.");
