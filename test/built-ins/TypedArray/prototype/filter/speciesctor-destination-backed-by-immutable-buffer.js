// Copyright (C) 2025 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.filter
description: >
  Throws a TypeError exception when the receiver constructs an instance backed
  by an immutable buffer
info: |
  %TypedArray%.prototype.filter ( callback [ , thisArg ] )
  ...
  8. Repeat, while k < len,
     a. Let Pk be ! ToString(𝔽(k)).
     b. Let kValue be ! Get(O, Pk).
     c. Let selected be ToBoolean(? Call(callback, thisArg, « kValue, 𝔽(k), O »)).
     d. If selected is true, then
        i. Append kValue to kept.
        ii. Set captured to captured + 1.
     e. Set k to k + 1.
  9. Let A be ? TypedArraySpeciesCreate(O, « 𝔽(captured) », ~write~).
  10. Assert: IsImmutableBuffer(A.[[ViewedArrayBuffer]]) is false.

  TypedArraySpeciesCreate ( exemplar, argumentList [ , accessMode ] )
  1. If accessMode is not present, set accessMode to ~read~.
  2. Let defaultConstructor be the intrinsic object associated with the constructor name exemplar.[[TypedArrayName]] in Table 73.
  3. Let constructor be ? SpeciesConstructor(exemplar, defaultConstructor).
  4. Let result be ? TypedArrayCreateFromConstructor(constructor, argumentList, accessMode).

  TypedArrayCreateFromConstructor ( constructor, argumentList [ , accessMode ] )
  1. If accessMode is not present, set accessMode to ~read~.
  2. Let newTypedArray be ? Construct(constructor, argumentList).
  3. Let taRecord be ? ValidateTypedArray(newTypedArray, seq-cst, accessMode).

  ValidateTypedArray ( O, order [ , accessMode ] )
  1. If accessMode is not present, set accessMode to read.
  2. Perform ? RequireInternalSlot(O, [[TypedArrayName]]).
  3. Assert: O has a [[ViewedArrayBuffer]] internal slot.
  4. If accessMode is ~write~ and IsImmutableBuffer(O.[[ViewedArrayBuffer]]) is true, throw a TypeError exception.
features: [TypedArray, immutable-arraybuffer]
includes: [testTypedArray.js, compareArray.js]
---*/

testWithAllTypedArrayConstructors((TA, makeCtorArg) => {
  var calls = [];

  var ta = new TA(makeCtorArg(["1", "2"]));
  var constructor = {};
  Object.defineProperty(ta, "constructor", {
    get: function() {
      calls.push("get ta.constructor");
      return constructor;
    }
  });
  Object.defineProperty(constructor, Symbol.species, {
    get: function() {
      calls.push("get ta.constructor[Symbol.species]");
      var iab = (new TA(["3", "4"])).buffer.transferToImmutable();
      var result = new TA(iab);
      calls.push("construct result");
      return result;
    }
  });

  assert.throws(TypeError, function() {
    ta.filter(function(value, index) {
      calls.push("filter index " + index);
      return !index;
    });
  });
  var expectCalls = [
    "filter index 0",
    "filter index 1",
    "get ta.constructor",
    "get ta.constructor[Symbol.species]",
    "construct result"
  ];
  assert.compareArray(calls, expectCalls, "Must visit elements before constructing the result.");
});
