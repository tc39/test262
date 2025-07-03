// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iterator.zipkeyed
description: >
  Basic Iterator.zipKeyed test using all three possible modes.
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

// Assert |actual| is a plain object equal to |expected| with default property attributes.
function assertPlainObject(actual, expected) {
  assert.sameValue(
    Object.getPrototypeOf(actual),
    null,
    "[[Prototype]] of actual is null"
  );

  assert(Object.isExtensible(actual), "actual is extensible");

  var actualKeys = Reflect.ownKeys(actual);
  var expectedKeys = Reflect.ownKeys(expected);

  // All expected property keys are present.
  assert.compareArray(actualKeys, expectedKeys);

  // All expected property values are equal.
  for (var key of expectedKeys) {
    assert.sameValue(actual[key], expected[key], "with key: " + String(key));
  }

  // Ensure all properties have the default property attributes.
  for (var key of expectedKeys) {
    verifyProperty(actual, key, {
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

// Empty object.
var empty = {};

// Object with a single property.
var single = {
  a: 1000,
};

// Object with many properties.
var numbers = new Proxy({}, {
  has(target, key) {
    if (typeof key === "symbol") {
      key = key.description;
    }
    assert.sameValue(key.length, 1, "unsupported key length");
    return true;
  },
  get(target, key, receiver) {
    if (typeof key === "symbol") {
      key = key.description;
    }
    assert.sameValue(key.length, 1, "unsupported key length");
    return key.charCodeAt(0);
  }
});

// |iterables| is an object whose properties are array(-like) objects. Pass it
// as the "iterables" argument to |Iterator.zipKeyed|, using |options| as the
// "options" argument.
//
// Then iterate over the returned |Iterator.zipKeyed| iterator and check all
// returned iteration values have the expected values.
function test(iterables, options) {
  var mode = (options && options.mode) || "shortest";
  var padding = options && options.padding;

  // Not Object.entries to allow symbol property keys.
  var entries = Reflect.ownKeys(iterables).map(function(key) {
    return [key, iterables[key]];
  });

  var lengths = entries.map(function([key, array]) {
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
    padding = entries.map(function([key, array]) {
      if (padding !== undefined && key in padding) {
        return padding[key];
      }
      return undefined;
    });
  }

  // Last returned results object.
  var last = null;

  var it = Iterator.zipKeyed(iterables, options);
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

    // Ensure value is a new object.
    assert.notSameValue(value, last, "returns a new object");
    last = value;

    var expected = Object.fromEntries(entries.map(function([key, array], k) {
      if (i < array.length) {
        return [key, array[i]];
      }
      assert.sameValue(mode, "longest", "padding is only used for 'longest' mode");
      return [key, padding[k]];
    }));

    // Ensure all properties have the expected value.
    // Ensure value is a plain with default data properties.
    assertPlainObject(value, expected);
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
  // Zip an empty object.
  var it = Iterator.zipKeyed({}, options);
  assertIteratorResult(it.next(), undefined, true);

  // Zip a single key.
  for (var prefix of prefixes("abcd")) {
    // Split prefix into an array.
    test({
      a: prefix.split(""),
    }, options);
    test({
      [Symbol("a")]: prefix.split(""),
    }, options);

    // Use String wrapper as the iterable.
    test({
      a: new String(prefix),
    }, options);
  }

  // Zip two keys.
  for (var prefix1 of prefixes("abcd")) {
    for (var prefix2 of prefixes("efgh")) {
      // Split prefixes into arrays.
      test({
        a: prefix1.split(""),
        b: prefix2.split(""),
      }, options);
      test({
        [Symbol("a")]: prefix1.split(""),
        [Symbol("b")]: prefix2.split(""),
      }, options);

      // Use String wrappers as the iterables.
      test({
        a: new String(prefix1),
        b: new String(prefix2),
      }, options);
    }
  }

  // Zip three keys.
  for (var prefix1 of prefixes("abcd")) {
    for (var prefix2 of prefixes("efgh")) {
      for (var prefix3 of prefixes("ijkl")) {
        // Split prefixes into arrays.
        test({
          a: prefix1.split(""),
          b: prefix2.split(""),
          c: prefix3.split(""),
        }, options);
        test({
          [Symbol("a")]: prefix1.split(""),
          [Symbol("b")]: prefix2.split(""),
          [Symbol("c")]: prefix3.split(""),
        }, options);

        // Use String wrappers as the iterables.
        test({
          a: new String(prefix1),
          b: new String(prefix2),
          c: new String(prefix3),
        }, options);
      }
    }
  }
}
