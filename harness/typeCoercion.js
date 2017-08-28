// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Functions to help generate test cases for testing type coercion abstract
    operations like ToNumber.
---*/

function getValuesCoercibleToIntegerZero() {
  var result = [];

  var primitiveValues = [
    // ToNumber
    null,
    false,
    0,
    "0",

    // ToInteger: NaN -> +0
    undefined,
    NaN,
    "",
    "foo",
    "true",

    // ToInteger: floor(abs(number))
    0.9,
    -0,
    -0.9,
    "0.9",
    "-0",
    "-0.9",
  ];

  // ToPrimitive
  primitiveValues.forEach(function(zero) {
    result.push(zero);
    result = result.concat(getPrimitiveWrappers(zero, "number"));
  });

  // Non-primitive values that coerce to 0:
  // toString() returns a string that parses to NaN.
  result = result.concat([
    {},
    [],
  ]);

  return result;
}

function getValuesCoercibleToIntegerOne() {
  var result = [];

  var primitiveValues = [
    // ToNumber
    true,
    1,
    "1",

    // ToInteger: floor(abs(number))
    1.9,
    "1.9",
  ];

  // ToPrimitive
  primitiveValues.forEach(function(value) {
    result.push(value);
    result = result.concat(getPrimitiveWrappers(value, "number"));
  });

  // Non-primitive values that coerce to 1:
  // toString() returns a string that parses to 1.
  result = result.concat([
    [1],
    ["1"],
  ]);

  return result;
}

function getValuesCoercibleToIntegerFromInteger(nominalInteger) {
  assert(Number.isInteger(nominalInteger));
  var result = [];

  var primitiveValues = [ nominalInteger ];

  // ToInteger: floor(abs(number))
  if (nominalInteger >= 0) {
    primitiveValues.push(nominalInteger + 0.9);
  }
  if (nominalInteger <= 0) {
    primitiveValues.push(nominalInteger - 0.9);
  }

  // ToNumber: String -> Number
  primitiveValues = primitiveValues.concat(primitiveValues.map(function(number) { return number.toString(); }));

  // ToPrimitive
  primitiveValues.forEach(function(value) {
    result.push(value);
    result = result.concat(getPrimitiveWrappers(value, "number"));
  });

  // Non-primitive values that coerce to the nominal integer:
  // toString() returns a string that parsers to a primitive value.
  result = result.concat(primitiveValues.map(function(number) { return [number]; }));

  return result;
}

function getPrimitiveWrappers(primitiveValue, hint) {
  assert(hint === "number" || hint === "string");
  var result = [];

  if (primitiveValue != null) {
    // null and undefined result in {} rather than a proper wrapper,
    // so skip this case for those values.
    result.push(Object(primitiveValue));
  }

  result = result.concat(getValuesCoercibleToPrimitiveWithMethod(hint, function() {
    return primitiveValue;
  }));
  return result;
}

function getValuesCoercibleToPrimitiveWithMethod(hint, method) {
  var methodNames;
  if (hint === "number") {
    methodNames = ["valueOf", "toString"];
  } else {
    methodNames = ["toString", "valueOf"];
  }
  return [
    // precedence order
    {
      [Symbol.toPrimitive]: method,
      [methodNames[0]]: function() { throw new Test262Error(); },
      [methodNames[1]]: function() { throw new Test262Error(); },
    }, {
      [methodNames[0]]: method,
      [methodNames[1]]: function() { throw new Test262Error(); },
    }, {
      [methodNames[1]]: method,
    },

    // GetMethod: if func is undefined or null, return undefined.
    {
      [Symbol.toPrimitive]: undefined,
      [methodNames[0]]: method,
      [methodNames[1]]: method,
    }, {
      [Symbol.toPrimitive]: null,
      [methodNames[0]]: method,
      [methodNames[1]]: method,
    },

    // if methodNames[0] is not callable, fallback to methodNames[1]
    {
      [methodNames[0]]: null,
      [methodNames[1]]: method,
    }, {
      [methodNames[0]]: 1,
      [methodNames[1]]: method,
    }, {
      [methodNames[0]]: {},
      [methodNames[1]]: method,
    },

    // if methodNames[0] returns an object, fallback to methodNames[1]
    {
      [methodNames[0]]: function() { return {}; },
      [methodNames[1]]: method,
    }, {
      [methodNames[0]]: function() { return Object(1); },
      [methodNames[1]]: method,
    },
  ];
}

function getValuesNotCoercibleToInteger() {
  // ToInteger only throws from ToNumber.
  return getValuesNotCoercibleToNumber();
}
function getValuesNotCoercibleToNumber() {
  var result = [];

  // ToNumber: Symbol -> TypeError
  var primitiveValues = [
    Symbol("1"),
  ];
  if (typeof BigInt !== "undefined") {
    // ToNumber: BigInt -> TypeError
    primitiveValues.push(BigInt(0));
  }
  primitiveValues.forEach(function(value) {
    result.push({error:TypeError, value:value});
    getPrimitiveWrappers(value, "number").forEach(function(value) {
      result.push({error:TypeError, value:value});
    });
  });

  // ToPrimitive
  result = result.concat(getValuesNotCoercibleToPrimitive("number"));

  return result;
}

function getValuesNotCoercibleToPrimitive(hint) {
  function MyError() {}

  var result = [];

  var methodNames;
  if (hint === "number") {
    methodNames = ["valueOf", "toString"];
  } else {
    methodNames = ["toString", "valueOf"];
  }

  // ToPrimitive: input[@@toPrimitive] is not callable (and non-null)
  result.push({error:TypeError, value:{[Symbol.toPrimitive]: 1}});
  result.push({error:TypeError, value:{[Symbol.toPrimitive]: {}}});

  // ToPrimitive: input[@@toPrimitive] returns object
  result.push({error:TypeError, value:{[Symbol.toPrimitive]: function() { return Object(1); }}});
  result.push({error:TypeError, value:{[Symbol.toPrimitive]: function() { return {}; }}});

  // ToPrimitive: input[@@toPrimitive] throws
  result.push({error:MyError, value:{[Symbol.toPrimitive]: function() { throw new MyError(); }}});

  // OrdinaryToPrimitive: method throws
  result = result.concat(getValuesCoercibleToPrimitiveWithMethod(hint, function() {
    throw new MyError();
  }).map(function(value) {
    return {error:MyError, value:value};
  }));

  // OrdinaryToPrimitive: both methods are unsuitable
  var unsuitableMethods = [
    // not callable:
    null,
    1,
    {},
    // returns object:
    function() { return Object(1); },
    function() { return {}; },
  ];
  unsuitableMethods.forEach(function(method) {
    result.push({error:TypeError, value:{valueOf:method, toString:method}});
  });

  return result;
}
