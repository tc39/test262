// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iterator.zip
description: >
  Basic Iterator.zip test using all three possible modes.
includes: [compareArray.js, propertyHelper.js]
features: [joint-iteration]
---*/

// Assert |result| is an object created by CreateIteratorResultObject.
function assertIteratorResult(result, value, done) {
  assert.sameValue(
    Object.getPrototypeOf(result),
    Object.prototype,
    "[[Prototype]] of iterator result is Object.prototype"
  );

  assert(Object.isExtensible(result), "iterator result is extensible");

  var ownKeys = Reflect.ownKeys(result);
  assert.sameValue(ownKeys.length, 2, "iterator result has two own properties");
  assert.sameValue(ownKeys[0], "value", "first property is 'value'");
  assert.sameValue(ownKeys[1], "done", "second property is 'done'");

  verifyProperty(result, "value", {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  verifyProperty(result, "done", {
    value: done,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}

// Assert |array| is a packed array with default property attributes.
function assertIsPackedArray(array) {
  assert(Array.isArray(array), "array is an array exotic object");

  assert.sameValue(
    Object.getPrototypeOf(array),
    Array.prototype,
    "[[Prototype]] of array is Array.prototype"
  );

  assert(Object.isExtensible(array), "array is extensible");

  // Ensure "length" property has its default property attributes.
  verifyProperty(array, "length", {
    writable: true,
    enumerable: false,
    configurable: false,
  });

  // Ensure no holes and all elements have the default property attributes.
  for (var i = 0; i < array.length; i++) {
    verifyProperty(array, i, {
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}

// Yield all prefixes of the string |s|.
function* prefixes(s) {
  for (var i = 0; i <= s.length; ++i) {
    yield s.slice(0, i);
  }
}

// Empty iterable doesn't yield any values.
var empty = {
  *[Symbol.iterator]() {
  }
};

// Yield a single value.
var single = {
  *[Symbol.iterator]() {
    yield 1000;
  }
};

// Yield an infinite amount of numbers.
var numbers = {
  *[Symbol.iterator]() {
    var i = 0;
    while (true) {
      yield 100 + i++;
    }
  }
};

// |iterables| is an array whose elements are array(-like) objects. Pass it as
// the "iterables" argument to |Iterator.zip|, using |options| as the "options"
// argument.
//
// Then iterate over the returned |Iterator.zip| iterator and check all
// returned iteration values have the expected values.
function test(iterables, options) {
  var mode = (options && options.mode) || "shortest";
  var padding = options && options.padding;

  var lengths = iterables.map(function(array) {
    return array.length;
  });

  var min = Math.min.apply(null, lengths);
  var max = Math.max.apply(null, lengths);

  // Expected number of iterations.
  var count;
  switch (mode) {
    case "shortest":
      count = min;
      break;
    case "longest":
      count = max;
      break;
    case "strict":
      count = max;
      break;
  }

  // Compute padding array when |mode| is "longest".
  if (mode === "longest") {
    if (padding) {
      padding = Iterator.from(padding).take(iterables.length).toArray();
    } else {
      padding = [];
    }

    // Fill with undefined until there are exactly |iterables.length| elements.
    padding = padding.concat(Array(iterables.length - padding.length).fill(undefined));
    assert.sameValue(padding.length, iterables.length);
  }

  // Last returned elements array.
  var last = null;

  var it = Iterator.zip(iterables, options);
  for (var i = 0; i < count; i++) {
    // "strict" mode throws an error if number of elements don't match.
    if (mode === "strict" && min < max && i === min) {
      assert.throws(TypeError, function() {
        it.next();
      });
      break;
    }

    var result = it.next();
    var value = result.value;

    // Test IteratorResult structure.
    assertIteratorResult(result, value, false);

    // Ensure value is a new array.
    assert.notSameValue(value, last, "returns a new array");
    last = value;

    // Ensure all array elements have the expected value.
    var expected = iterables.map(function(array, k) {
      if (i < array.length) {
        return array[i];
      }
      assert.sameValue(mode, "longest", "padding is only used for 'longest' mode");
      return padding[k];
    });
    assert.compareArray(value, expected);

    // Ensure value is a packed array with default data properties.
    //
    // This operation is destructive, so it has to happen last.
    assertIsPackedArray(value);
  }

  // Iterator is closed.
  assertIteratorResult(it.next(), undefined, true);
}

var validOptions = [
  undefined,
  {},
  {mode: "shortest"},
  {mode: "longest"},
  {mode: "longest", padding: empty},
  {mode: "longest", padding: single},
  {mode: "longest", padding: numbers},
  {mode: "strict"},
];

for (var options of validOptions) {
  // Zip an empty iterable.
  var it = Iterator.zip([], options);
  assertIteratorResult(it.next(), undefined, true);

  // Zip a single iterator.
  for (var prefix of prefixes("abcd")) {
    // Split prefix into an array.
    test([prefix.split("")], options);

    // Use String wrapper as the iterable.
    test([new String(prefix)], options);
  }

  // Zip two iterators.
  for (var prefix1 of prefixes("abcd")) {
    for (var prefix2 of prefixes("efgh")) {
      // Split prefixes into arrays.
      test([prefix1.split(""), prefix2.split("")], options);

      // Use String wrappers as the iterables.
      test([new String(prefix1), new String(prefix2)], options);
    }
  }

  // Zip three iterators.
  for (var prefix1 of prefixes("abcd")) {
    for (var prefix2 of prefixes("efgh")) {
      for (var prefix3 of prefixes("ijkl")) {
        // Split prefixes into arrays.
        test([prefix1.split(""), prefix2.split(""), prefix3.split("")], options);

        // Use String wrappers as the iterables.
        test([new String(prefix1), new String(prefix2), new String(prefix3)], options);
      }
    }
  }
}
