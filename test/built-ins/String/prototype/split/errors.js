// Copyright (C) 2020 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.split
description: Abrupt completions occur at the correct steps.
info: |
  1. Let _O_ be ? RequireObjectCoercible(*this* value).
  1. If _separator_ is neither *undefined* nor *null*, then
    1. Let _splitter_ be ? GetMethod(_separator_, @@split).
    1. If _splitter_ is not *undefined*, then
      1. Return ? Call(_splitter_, _separator_, &laquo; _O_, _limit_ &raquo;).
  1. Let _S_ be ? ToString(_O_).
  1. Let _A_ be ! ArrayCreate(0).
  1. Let _lengthA_ be 0.
  1. If _limit_ is *undefined*, let _lim_ be 2<sup>32</sup> - 1; else let _lim_ be ? ToUint32(_limit_).
  1. Let _R_ be ? ToString(_separator_).
features: [Symbol.split]
---*/

var split = String.prototype.split;

// invoker accepts `String.prototype.split` input
// as a bag of named value descriptors (details below)
// and returns a function that invokes it with that input.
function invoker(input) {
  return function callSplit() {
    callCount++;
    return split.call(input._this.value, input.separator.value, input.limit.value);
  };
}
var callCount = 0;
var lastCallCount = callCount;

// badValueDescriptor defines a unique error type with a specified name
// and returns a descriptor exposing that type and a value from `valueFactory`
// that should throw an instance of it upon use.
function badValueDescriptor(errorName, valueFactory) {
  var errorConstructor = function UniqueError(message) {
    this.message = message || "";
  };
  errorConstructor.prototype.toString = function () {
    return errorConstructor.name + ": " + this.message;
  };
  Object.defineProperty(errorConstructor, "name", {value: errorName});

  return { value: valueFactory(errorConstructor), errorType: errorConstructor };
}

// Start with input consisting of descriptors for values
// that should each throw an error at the earliest possible step.
var input = {
  _this: { value: undefined, errorType: TypeError },
  separator: badValueDescriptor("SeparatorGetSplitError", function(UniqueError) {
    return new Proxy({}, {
      get(target, prop) {
        if (prop === Symbol.split) {
          throw new UniqueError();
        }
        return target[prop];
      }
    });
  }),
  limit: badValueDescriptor("LimitToUint32Error", function (UniqueError) {
    return { valueOf() { throw new UniqueError(); } };
  })
};

// After veryifying the expected error, replace the responsible descriptor
// with a new one that throws the next specified error, ultimately using
// a descriptor corresponding to "good" input.
assert.throws(input._this.errorType, invoker(input),
    "Abrupt completions from RequireObjectCoercible(*this* value) are propagated.");
input._this = badValueDescriptor("ReceiverToStringError", function (UniqueError) {
  return { toString() { throw new UniqueError(); } };
});

// Proceed accordingly through each step that can throw an error.
assert.throws(input.separator.errorType, invoker(input),
    "Abrupt completions from GetMethod(_separator_, @@split) are propagated.");
input.separator = badValueDescriptor("SeparatorCallSplitError", function(UniqueError) {
  return Object.defineProperty({}, Symbol.split,
      { value: function () { throw new UniqueError(); } });
});

assert.throws(input.separator.errorType, invoker(input),
    "Abrupt completions from Call(_splitter_, _separator_, &laquo; _O_, _limit_ &raquo;)" +
    " are propagated.");
input.separator = {
  value: Object.defineProperty({}, Symbol.split, { value: function () {} })
};

lastCallCount = callCount;
invoker(input)();
assert.sameValue(callCount, lastCallCount + 1,
    "No steps are evaluated after Call(_splitter_, _separator_, &laquo; _O_, _limit_ &raquo;)");
input.separator = badValueDescriptor("SeparatorToStringError", function (UniqueError) {
  return Object.defineProperty(
    { toString() { throw new UniqueError(); } },
    Symbol.split,
    { value: undefined });
});

assert.throws(input._this.errorType, invoker(input),
    "Abrupt completions from ToString(_O_) are propagated.");
input._this = { value: "" };

assert.throws(input.limit.errorType, invoker(input),
    "Abrupt completions from ToUint32(_limit_) are propagated.");
input.limit = { value: 0 };

assert.throws(input.separator.errorType, invoker(input),
    "Abrupt completions from ToString(_separator_) are propagated.");
input.separator = {
  value: Object.defineProperty(
    { toString() { return undefined; } },
    Symbol.split,
    { value: undefined })
};

// End with a verification of non-abrupt completion when invoking
// the final (all "good") invoker.
lastCallCount = callCount;
invoker(input)();
assert.sameValue(callCount, lastCallCount + 1);
