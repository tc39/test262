// Copyright (C) 2026 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.sort
description: >
  Each hole found in pre-comparison iteration prompts a property deletion after sorting.
includes: [compareArray.js]
---*/

// First, try observing with a length-tracking TypedArray by starting the sort
// with a too-high length (creating what `sort` observes as holes) and resizing
// up to that length inside the comparison callback (after which deletion of a
// valid index will fail, cf. #sec-typedarray-delete).
if (typeof ArrayBuffer !== "undefined") {
  var ab = new ArrayBuffer(0, { maxByteLength: 256 });

  // The buffer must actually be resizable.
  var testable = false;
  try {
    ab.resize(2);
    ab.resize(1);
    testable = ab.byteLength === 1;
  } catch (err) {}

  if (testable) {
    // Cover both 1 and more than 1 bytes per element.
    var ctors = [Uint8Array, Uint32Array];
    for (var i = 0; i < ctors.length; i++) {
      var ctor = ctors[i];
      var label = ctor.name + " resized from 2 to 4 elements";
      ab.resize(ctor.BYTES_PER_ELEMENT * 2);
      var ta = new ctor(ab);
      ta[0] = 2;
      ta[1] = 1;
      Object.defineProperty(ta, "length", {
        get() { return 4; },
        set(v) { throw new Test262Error(ctor.name + " unexpected set length"); }
      });
      assert.throws(TypeError, function() {
        Array.prototype.sort.call(ta, function(a, b) {
          ab.resize(ctor.BYTES_PER_ELEMENT * 4);
          return a - b;
        });
      }, label);
      // The pre-deletion writes must succeed.
      assert.compareArray(ta, [1, 2, 0, 0], label);
    }
  }
}

// Then, try direct observation via Proxy of a frozen all-holes array.
if (typeof Proxy !== "undefined") {
  var holes = Object.freeze(new Array(2));
  var checks = [];
  var deletions = [];
  var spy = new Proxy(holes, {
    has: function(_target, key) {
      checks.push(key);
      return false;
    },
    get: function(target, key) {
      if (key === "length") return target.length;
      throw new Test262Error("unexpected get of " + String(key));
    },
    deleteProperty: function(_target, key) {
      deletions.push(key);
      return true;
    }
  });
  Array.prototype.sort.call(spy);
  assert.compareArray(checks, ["0", "1"], "Proxy-observed has-property checks");
  assert.compareArray(deletions, ["0", "1"], "Proxy-observed deletions");
  assert.compareArray(holes, [undefined, undefined]);
  assert.sameValue("0" in holes, false, "non-overwritten original hole remains");
}

// And finally, an array whose hole is replaced with a non-configurable property
// inside the comparison callback.
var arr = new Array(3);
arr[0] = 2;
arr[1] = 1;
assert.throws(TypeError, function() {
  arr.sort(function(a, b) {
    Object.defineProperty(arr, "2", { value: -1, configurable: false, writable: true });
    return a - b;
  });
}, "Array whose hole becomes non-configurable");
assert.compareArray(arr, [1, 2, -1], "Array whose hole becomes non-configurable");
