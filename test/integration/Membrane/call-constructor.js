// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Ensure wrapping and unwrapping of constructors and instances is correct.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

let thisObj, firstArg;

const rawObject = function(arg) {
  thisObj = this;
  firstArg = arg;
  this.firstArg = arg;
};
rawObject.prototype.toString = () => "object prototype";

const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

const wetArgument = M.convertToProxy({ toString: () => "argument" }, wetGraph, true);
const dryArgument = M.convertToProxy(wetArgument, dryGraph);

const dryInstance = new dryObject(dryArgument);

// In unwrapping, we switched to the wet object graph.
assert.sameValue(
  dryInstance,
  M.convertToProxy(thisObj, dryGraph),
  "Constructor should receive a Proxy as this."
);

assert.sameValue(
  dryArgument,
  dryInstance.firstArg,
  "Constructor should correctly wrap its arguments."
);

assert.sameValue(
  wetArgument,
  firstArg,
  "First argument to constructor should have been unwrapped."
);

/* XXX ajvincent I'm not testing Reflect.construct here.  The receiver argument
 * confuses me every time I look at it.  Feel free to write a test for it here.
 */
