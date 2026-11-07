// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    func.arguments and func.caller must not exist as own properties on individual functions.
flags: [noStrict]
---*/

function f() {}

var listFunctions = {
    'non-strict function defined by a FunctionDeclaration': f
  , 'non-strict function defined by a FunctionExpression': function () { }
  , 'non-strict function with a non-simple parameter list': function (...args) { }
  , 'non-strict function constructed using the Function constructor': Function("")
  , 'non-function': Object.create(Function.prototype)
  , 'strict function': function f() { "use strict"; }
  , 'class constructor': class { constructor() { } }
  , 'implicit class constructor': class { }
  , 'implicit derived class constructor': class extends (class { }) { }
  , 'class method': (class { foo() { }}).prototype.foo
  , 'class static method': (class { static foo() { } }).foo
  , 'builtin function': [].reduce
  , 'builtin getter': Object.getOwnPropertyDescriptor(Set.prototype, 'size').get
  , 'bound function': (function() { }).bind(null)
  , 'arrow function': _ => _
  , 'generator function': function* () { yield 42; }
  , '.next method of generator': (function* () { yield 42; })().next
  , 'async function': async function() { }
  , 'async generator function': async function*() { }
  , 'async arrow function': async _ => _
  , 'method from object literal': ({ f() { } }).f
  , 'getter from object literal': Object.getOwnPropertyDescriptor({ get f() { } }, "f").get
  , 'setter from object literal': Object.getOwnPropertyDescriptor({ set f(v) { } }, "f").set
  , 'proxy function': new Proxy(function () { }, { })
}

for (let property of ['caller', 'arguments']) {
    for (let [key, func] of Object.entries(listFunctions)) {
        assert(func.hasOwnProperty(property) === false
          , `func.${property} must not be an own property of a ${key}.`
        )
    }
}
