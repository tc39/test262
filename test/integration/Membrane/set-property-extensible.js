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
};

const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

assert.sameValue(
  true,
  Reflect.isExtensible(dryObject),
  "Membrane proxies should forward their extensibility (true)"
);

assert.sameValue(
  true,
  Reflect.preventExtensions(dryObject),
  "Membrane proxies should allow Reflect.preventExtensions"
);

assert.sameValue(
  false,
  Reflect.isExtensible(dryObject),
  "Membrane proxies should forward their extensibility (true)"
);

const son = M.convertToProxy({
  toString: () => "son"
}, wetGraph, true);
const drySon = M.convertToProxy(son, dryGraph);

assert.sameValue(
  false,
  Reflect.defineProperty(
    dryObject,
    "son",
    {
      value: drySon,
      writable: true,
      enumerable: true,
      configurable: true
    }
  ),
  "Proxies which had preventExtensions called on them should fail to set new properties"
);

assert.sameValue(
  undefined,
  Reflect.getOwnPropertyDescriptor(dryObject, "son"),
  "Prevented extensions on a membrane proxy should disallow setting properties"
);
