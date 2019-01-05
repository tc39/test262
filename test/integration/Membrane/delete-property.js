// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Membrane proxies must support isExtensible and preventExtensions.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

const rawObject = {
  toString: () => "rawObject",
  son: { toString: () => "son" },
};
Reflect.defineProperty(rawObject, "daughter", {
  value: { toString: () => "daughter" },
  writable: false,
  enumerable: true,
  configurable: false,
});

const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

assert.sameValue(
  true,
  Reflect.deleteProperty(dryObject, "son"),
  "Deleting a configurable property should work on a Proxy"
);

assert.sameValue(
  false,
  Reflect.ownKeys(dryObject).includes("son"),
  "Deleting a configurable property on a Proxy should really delete it"
);

assert.sameValue(
  false,
  Reflect.deleteProperty(dryObject, "daughter"),
  "Deleting a non-configurable property should not work on a Proxy"
);

assert.sameValue(
  true,
  Reflect.ownKeys(dryObject).includes("daughter"),
  "Deleting a non-configurable property on a Proxy should have no effect on ownKeys"
);
