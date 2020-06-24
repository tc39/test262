// Copyright 2018 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asyncgenerator-prototype-return
description: return rejects promise when `this` value not an object
info: |
  AsyncGenerator.prototype.return ( value )
  1. Let generator be the this value.
  2. Let completion be Completion{[[Type]]: return, [[Value]]: value,
     [[Target]]: empty}.
  3. Return ! AsyncGeneratorEnqueue(generator, completion).

  AsyncGeneratorEnqueue ( generator, completion )
  ...
  3. If Type(generator) is not Object, or if generator does not have an
     [[AsyncGeneratorState]] internal slot, then
    a. Let badGeneratorError be a newly created TypeError object.
    b. Perform ! Call(promiseCapability.[[Reject]], undefined, « badGeneratorError »).
    c. Return promiseCapability.[[Promise]].

flags: [async]
features: [async-iteration]
---*/

async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;

var symbol = Symbol();

var testPromises = [
  AsyncGeneratorPrototype.return.call(undefined).then(
    function () {
      $ERROR("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value `undefined`");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       $ERROR("(undefined) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call(1).then(
    function () {
      $ERROR("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value is a Number");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       $ERROR("(Number) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call("string").then(
    function () {
      $ERROR("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value is a String");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       $ERROR("(String) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call(null).then(
    function () {
      $ERROR("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value `null`");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       $ERROR("(null) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call(true).then(
    function () {
      $ERROR("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value is a Boolean");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       $ERROR("(Boolean) expected TypeError but got " + e);
      }
    }
  ),
  AsyncGeneratorPrototype.return.call(symbol).then(
    function () {
      $ERROR("AsyncGeneratorPrototype.return should reject promise" +
                             " when `this` value is a Symbol");
    },
    function (e) {
      if (!(e instanceof TypeError)) {
       $ERROR("(Symbol) expected TypeError but got " + e);
      }
    }
  )
]

Promise.all(testPromises).then(() => {}).then($DONE, $DONE)
