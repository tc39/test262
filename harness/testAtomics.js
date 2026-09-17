// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of functions used to assert the correctness of Atomics methods.
defines:
  - testAtomicsIndexRevalidation
  - testWithAtomicsOutOfBoundsIndices
  - testWithAtomicsInBoundsIndices
  - testWithAtomicsNonViewValues
---*/


/**
 * Invokes the provided function with (TypedArray, makeIndex) pairs for
 * use in testing index revalidation by Atomics methods.
 * The provided function is required to invoke each makeIndex exactly once and
 * then use the result in such a way that [RevalidateAtomicAccess](
 * https://tc39.es/ecma262/multipage/structured-data.html#sec-revalidateatomicaccess
 * ) fails with a thrown exception when makeIndex shrinks the resizable
 * ArrayBuffer backing the corresponding TypedArray and returns an index made
 * invalid by the shrinking (e.g., using makeIndex as the valueOf or toString
 * method of an object used as the index argument for an Atomics method call).
 *
 * @param TA - a TypedArray constructor
 * @param f - the function to call for each (typedArray, getBadIndex)
 *   combination
 */
function testAtomicsIndexRevalidation(TA, f) {
  // Make a resizable ArrayBuffer big enough to hold exactly four elements, and
  // use it to back two TypedArrays:
  // * one fixed at two elements that start halfway into the ArrayBuffer, and
  // * one length-tracking that uses the entire ArrayBuffer.
  var bytesPerElement = TA.prototype.BYTES_PER_ELEMENT;
  var maxByteLength = bytesPerElement * 4;
  var fixedByteOffset = maxByteLength / 2;
  var rab = new ArrayBuffer(maxByteLength, { maxByteLength: maxByteLength });
  assert(rab.resizable, 'testAtomicsIndexRevalidation requires ArrayBuffer resizing');
  var fixedLength = new TA(rab, fixedByteOffset, 2);
  var autoLength = new TA(rab);

  // Shrinking a fixed-length TypedArray's backing ArrayBuffer to exclude a
  // single byte of its last element makes it out-of-bounds.
  var callCount = 0;
  assert.throws(TypeError, function() {
    f(fixedLength, function() {
      callCount++;
      rab.resize(fixedByteOffset + bytesPerElement * 2 - 1);
      return 1;
    });
  }, 'shrink fixed-length TypedArray buffer');
  assert.sameValue(callCount, 1, 'fixed-length TypedArray buffer shrinker must be called');

  // Shrinking a length-tracking TypedArray's backing ArrayBuffer to exclude a
  // single byte of its second element makes its length 1.
  callCount = 0;
  assert.throws(RangeError, function() {
    f(autoLength, function() {
      callCount++;
      rab.resize(bytesPerElement * 2 - 1);
      return 1;
    });
  }, 'shrink auto-length TypedArray buffer to just under 2 elements');
  assert.sameValue(callCount, 1, 'first auto-length TypedArray buffer shrinker must be called');

  // Shrinking a length-tracking TypedArray's backing ArrayBuffer to exclude a
  // single byte of its first element makes its length 0.
  callCount = 0;
  assert.throws(RangeError, function() {
    f(autoLength, function() {
      callCount++;
      rab.resize(bytesPerElement - 1);
      return 0;
    });
  }, 'shrink auto-length TypedArray buffer to just under 1 element');
  assert.sameValue(callCount, 1, 'second auto-length TypedArray buffer shrinker must be called');

  // The TypedArrays become valid again when sufficient length is restored to
  // their backing ArrayBuffer.
  rab.resize(maxByteLength);
  f(fixedLength, function() { return 1; });
  f(autoLength, function() { return 3; });
}

/**
 * Constructs a collection of callbacks that each return a bad index for a
 * provided TypedArray (i.e., that should cause a RangeError when passed to an
 * Atomics method along with that TypedArray) and calls the provided function
 * once with each of them.
 *
 * @param f - the function to call for each bad index.
 */
function testWithAtomicsOutOfBoundsIndices(f) {
  var cases = [
    { label: '-1', makeBadIndex: function(view) { return -1; } },
    { label: 'view.length', makeBadIndex: function(view) { return view.length; } },
    { label: 'view.length * 2', makeBadIndex: function(view) { return view.length * 2; } },
    { label: 'Infinity', makeBadIndex: function(view) { return Number.POSITIVE_INFINITY; } },
    { label: '-Infinity', makeBadIndex: function(view) { return Number.NEGATIVE_INFINITY; } },
    {
      label: '{ valueOf: () => view.length }',
      makeBadIndex: function(view) {
        var length = view.length;
        return { valueOf: function() { return length; } };
      }
    },
    {
      label: '{ toString: () => view.length }',
      makeBadIndex: function(view) {
        var strLength = String(view.length);
        // non-callable valueOf triggers invocation of toString
        return { toString: function() { return strLength; }, valueOf: false };
      }
    },
  ];

  for (var i = 0; i < cases.length; ++i) {
    try {
      f(cases[i].makeBadIndex);
    } catch (e) {
      e.message += ' (Testing with index ' + cases[i].label + '.)';
      throw e;
    }
  }
}

/**
 * Calls the provided function for each good index that should not throw when
 * passed to an Atomics method on a SAB-backed view.
 *
 * The view must have length greater than zero.
 *
 * @param f - the function to call for each good index.
 */
function testWithAtomicsInBoundsIndices(f) {
  // Most of these are eventually coerced to +0 by ToIndex.
  var good_indices = [
    function(view) { return 0/-1; },
    function(view) { return '-0'; },
    function(view) { return undefined; },
    function(view) { return NaN; },
    function(view) { return 0.5; },
    function(view) { return '0.5'; },
    function(view) { return -0.9; },
    function(view) { return { password: 'qumquat' }; },
    function(view) { return view.length - 1; },
    function(view) { return { valueOf: function() { return 0; } }; },
    function(view) { return { toString: function() { return '0'; }, valueOf: false }; }, // non-callable valueOf triggers invocation of toString
  ];

  for (var i = 0; i < good_indices.length; ++i) {
    var IdxGen = good_indices[i];
    try {
      f(IdxGen);
    } catch (e) {
      e.message += ' (Testing with index gen ' + IdxGen + '.)';
      throw e;
    }
  }
}

/**
 * Calls the provided function for each value that should throw a TypeError
 * when passed to an Atomics method as a view.
 *
 * @param f - the function to call for each non-view value.
 */
function testWithAtomicsNonViewValues(f) {
  var values = [
    null,
    undefined,
    true,
    false,
    new Boolean(true),
    10,
    3.14,
    new Number(4),
    'Hi there',
    new Date,
    /a*utomaton/g,
    { password: 'qumquat' },
    new ArrayBuffer(128),
    new Error('Ouch'),
    [1,1,2,3,5,8],
    function(x) { return -x; },
    // TODO: Proxy?
    Object,
    Int32Array,
    Date,
    Math,
    Atomics
  ];
  if (typeof DataView !== 'undefined') {
    values.push(new DataView(new ArrayBuffer(10)));
  }
  if (typeof SharedArrayBuffer !== 'undefined') {
    values.push(new SharedArrayBuffer(128));
  }
  if (typeof Symbol !== 'undefined') {
    values.push(Symbol('halleluja'));
  }

  for (var i = 0; i < values.length; ++i) {
    var nonView = values[i];
    try {
      f(nonView);
    } catch (e) {
      e.message += ' (Testing with non-view value ' + nonView + '.)';
      throw e;
    }
  }
}

