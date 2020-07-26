// Copyright (C) 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function.prototype.tostring
description: >
  toString of built-in Function object
info: |
  ...
  If func is a built-in Function object, then return an implementation-dependent String source code representation of func.
  The representation must have the syntax of a NativeFunction.
  ...

  NativeFunction:
    function NativeFunctionAccessor_opt IdentifierName_opt ( FormalParameters ) { [ native code ] }
  NativeFunctionAccessor :
    get
    set

includes: [nativeFunctionMatcher.js, fnGlobalObject.js]
features: [arrow-function, Reflect]
---*/

const visited = [];
function visit(ns, path) {
  if (visited.includes(ns)) {
    return;
  }
  visited.push(ns);

  if (typeof ns === 'function') {
    assertNativeFunction(ns, path);
  }
  if (typeof ns !== 'function' && (typeof ns !== 'object' || ns === null)) {
    return;
  }

  const descriptors = Object.getOwnPropertyDescriptors(ns);
  Reflect.ownKeys(descriptors)
    .forEach((name) => {
      const desc = descriptors[name];
      const p = typeof name === 'symbol'
        ? `${path}[Symbol(${name.description})]`
        : `${path}.${name}`;
      if ('value' in desc) {
        visit(desc.value, p);
      } else {
        visit(desc.get, p);
        visit(desc.set, p);
      }
    });
}

[
  // Function Properties of the Global Object
  'eval',
  'isFinite',
  'isNaN',
  'parseFloat',
  'parseInt',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',

  // Constructor Properties of the Global Object
  'AggregateError',
  'Array',
  'ArrayBuffer',
  'Boolean',
  'BigInt',
  'BigInt64Array',
  'BigUint64Array',
  'DataView',
  'Date',
  'Error',
  'EvalError',
  'FinalizationRegistry',
  'Float32Array',
  'Float64Array',
  'Function',
  'Int8Array',
  'Int16Array',
  'Int32Array',
  'Map',
  'Number',
  'Object',
  'Promise',
  'Proxy',
  'RangeError',
  'ReferenceError',
  'RegExp',
  'Set',
  'SharedArrayBuffer',
  'String',
  'Symbol',
  'SyntaxError',
  'TypeError',
  'Uint8Array',
  'Uint8ClampedArray',
  'Uint16Array',
  'Uint32Array',
  'URIError',
  'WeakMap',
  'WeakRef',
  'WeakSet',

  // Other Properties of the Global Object
  'Atomics',
  'JSON',
  'Math',
  'Reflect',
].forEach((n) => {
  const ref = fnGlobalObject()[n];
  if (ref === undefined) {
    return;
  }
  visit(ref, `globalThis.${n}`);
});
assert.notSameValue(visited.length, 0);
