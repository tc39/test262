// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: BigInt.asUintN type coercion for bigint parameter
info: >
  BigInt.asUintN ( bits, bigint )

  2. Let bigint ? ToBigInt(bigint).

features: [BigInt, Symbol, Symbol.toPrimitive]
includes: [typeCoercion.js]
---*/

assert.continueOnFailure(function() {

  testCoercibleToBigIntZero(function(zero) {
    assert.notThrows(function() {
      assert.sameValue(BigInt.asUintN(2, zero), 0n);
    });
  });

  testCoercibleToBigIntOne(function(one) {
    assert.notThrows(function() {
      assert.sameValue(BigInt.asUintN(2, one), 1n);
    });
  });

  testCoercibleToBigIntFromBigInt(10n, function(ten) {
    assert.notThrows(function() {
      assert.sameValue(BigInt.asUintN(3, ten), 2n);
    });
  });

  testCoercibleToBigIntFromBigInt(12345678901234567890003n, function(value) {
    assert.notThrows(function() {
      assert.sameValue(BigInt.asUintN(4, value), 3n);
    });
  });

  testNotCoercibleToBigInt(function(error, value) {
    assert.throws(error, function() {
      BigInt.asUintN(0, value);
    });
  });

});
