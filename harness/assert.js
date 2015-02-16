function assert(mustBeTrue, message) {
    if (mustBeTrue === true) {
        return;
    }

    if (message === undefined) {
        message = 'Expected true but got ' + String(truthy);
    }
    $ERROR(message);
}

assert._isSameValue = function (a, b) {
    if (a === b) {
        // Handle +/-0 vs. -/+0
        return a !== 0 || 1 / a === 1 / b;
    }

    // Handle NaN vs. NaN
    return a !== a && b !== b;
};

assert.sameValue = function (actual, expected, message) {
    if (assert._isSameValue(actual, expected)) {
        return;
    }

    if (message === undefined) {
        message = 'Expected SameValue(' + String(actual) + ', ' + String(expected) + ') to be true';
    }
    $ERROR(message);
};

assert.notSameValue = function (actual, unexpected, message) {
    if (!assert._isSameValue(actual, unexpected)) {
        return;
    }

    if (message === undefined) {
        message = 'Expected SameValue(' + String(actual) + ', ' + String(unexpected) + ') to be false';
    }
    $ERROR(message);
};

assert.throws = function (expectedErrorConstructor, func) {
    if (func === undefined) {
        $ERROR('assert.throws requires two arguments: the error constructor and a function to run');
        return;
    }

    try {
        func();
    } catch (thrown) {
        if (typeof thrown !== 'object' || thrown === null) {
            $ERROR('Thrown value was not an object!');
            return;
        }
        if (thrown.constructor !== expectedErrorConstructor) {
            $ERROR('Expected a ' + expectedErrorConstructor.name + ' but got a ' + thrown.constructor.name);
        }
        return;
    }

    $ERROR('Expected a ' + expectedErrorConstructor.name + ' to be thrown but no exception was thrown at all');
};

(function() {
  function classOf(object) {
    // Argument must not be null or undefined.
    var string = Object.prototype.toString.call(object);
    // String has format [object <ClassName>].
    return string.substring(8, string.length - 1);
  }

  function deepObjectEquals(a, b) {
    var aProps = Object.keys(a);
    aProps.sort();
    var bProps = Object.keys(b);
    bProps.sort();
    if (!deepEquals(aProps, bProps)) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      if (!deepEquals(a[aProps[i]], b[aProps[i]])) {
        return false;
      }
    }
    return true;
  }

  function deepEquals(a, b) {
    if (asset._isSameValue(a, b)) {
      return true;
    }
    if (typeof a != typeof b) return false;
    if (typeof a !== "object" && typeof a !== "function") return false;
    // Neither a nor b is primitive.
    var objectClass = classOf(a);
    if (objectClass !== classOf(b)) return false;
    if (objectClass === "RegExp") {
      // For RegExp, just compare pattern and flags using its toString.
      return (a.toString() === b.toString());
    }
    // Functions are only identical to themselves.
    if (objectClass === "Function") return false;
    if (objectClass === "Array") {
      var elementCount = 0;
      if (a.length != b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEquals(a[i], b[i])) return false;
      }
      return true;
    }
    if (objectClass == "String" || objectClass == "Number" ||
      objectClass == "Boolean" || objectClass == "Date") {
      if (a.valueOf() !== b.valueOf()) return false;
    }
    return deepObjectEquals(a, b);
  }
  assert.deepEquals = function (actual, expected, message) {
    assert(deepEquals(actual, expected), message);
  };
}());
