// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Membrane proxies must by default pass through setters, with proper wrapping.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

const rawObject = {
  toString: () => "rawObject",
  son: {
    toString: () => "son",
  }
};
const daughter = {
  toString: () => "daughter",
  grandParent: rawObject
};

const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

M.convertToProxy(daughter, wetGraph, true);

{
  const x = dryObject.son;
  const y = M.convertToProxy(daughter, dryGraph);
  x.daughter = y;
}

assert.sameValue(
  wetObject.son.daughter.grandParent,
  wetObject,
  "Looking up a cycle of properties through a Membrane proxy should work"
);
