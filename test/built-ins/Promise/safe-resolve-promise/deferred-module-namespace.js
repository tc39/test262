// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: >
    SafePromiseResolve defers resolution when the resolution is a module
    namespace exotic object.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    3. If _o_ has the [[GetPrototypeOf]] and [[GetOwnProperty]] internal methods
       as defined in Module Namespace Exotic Objects, return *true*.
includes: [asyncHelpers.js, compareArray.js]
flags: [module, async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

import * as ns from "./deferred-module-namespace_FIXTURE.js";

var expected = [
  // Being a module namespace object forces deferral without any lookup.
  "start",

  "tick 1",
  "tick 2",

  // No callable "then" is found, so the namespace object fulfills the promise
  // from the deferred job, one microtask behind a synchronous resolution.
  "settled",
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(
        actual,
        expected,
        "Ticks for a module namespace object"
      );
    });

  assert.sameValue(ns.then, undefined, "the fixture module does not export \"then\"");

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability.promise, ns);
  actual.push("start");

  var settled = capability.promise.then(function(settledValue) {
    actual.push("settled");
    assert.sameValue(
      settledValue,
      ns,
      "promise is fulfilled with the module namespace object itself"
    );
  });

  return Promise.all([ruler, settled]);
});
