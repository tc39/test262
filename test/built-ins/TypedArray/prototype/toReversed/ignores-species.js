// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toReversed
description: >
  %TypedArray%.prototype.toReversed ignores @@species
info: |
  %TypedArray%.prototype.toReversed ( )

  ...
  4. Let A be ? TypedArrayCreateSameType(O, « 𝔽(length) »).
  ...

  TypedArraySpeciesCreate ( exemplar, argumentList [ , noSpeciesOverride ] )
  ...
  2. Let defaultConstructor be the intrinsic object listed in column one of Table 63 for exemplar.[[TypedArrayName]].
  3. If noSpeciesOverride is true, let constructor be defaultConstructor.
  ...
includes: [testTypedArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = new TA();
  ta.constructor = TA === Uint8Array ? Int32Array : Uint8Array;
  assert.sameValue(Object.getPrototypeOf(ta.toReversed()), TA.prototype);

  ta = new TA();
  ta.constructor = {
    [Symbol.species]: TA === Uint8Array ? Int32Array : Uint8Array,
  };
  assert.sameValue(Object.getPrototypeOf(ta.toReversed()), TA.prototype);

  ta = new TA();
  Object.defineProperty(ta, "constructor", {
    get() {
      throw new Test262Error("Should not get .constructor");
    }
  });
  ta.toReversed();
});
