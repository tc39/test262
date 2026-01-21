// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    func.caller evaluates to the caller of func for uncensored callers..
flags: [noStrict]
---*/

function getCaller() { return getCaller.caller }

var listCallers = {
    get 'non-strict function defined by a FunctionDeclaretion'() {
        function f() { return getCaller() }
        return [ f, f ]
    }
  , get 'non-strict function defined by a FunctionExpression'() {
        var f = function () { return getCaller() }
        return [ f, f ]
    }
  , get 'non-strict function defined using the Function constructor'() {
        var f = Function("return getCaller()")
        return [ f, f ]
    }
  , get 'non-strict function with non-simple parameter list'() {
        function f(...args) { return getCaller() }
        return [ f, f ]
    }
  , get 'non-strict target of bound function'() {
        function f() { return getCaller() }
        let bound = f.bind(null)
        return [ f, bound ]
    }
  , get 'non-strict arrow function'() {
        let f =  _ => getCaller()
        return [ f, f ]
    }
  , get 'non-strict method from object literal'() {
        let obj = { foo() { return getCaller() } }
        return [ obj.foo, _ => obj.foo() ]
    }
  , get 'non-strict getter from object literal'() {
        let obj = { get foo() { return getCaller() } }
        let getFoo = Object.getOwnPropertyDescriptor(obj, 'foo').get
        return [ getFoo, _ => obj.foo ]
    }
  , get 'non-strict proxy target'() {
        let target = function() { return getCaller() }
        let proxy = new Proxy(target, { })
        return [ target, proxy ]
    }
  , get 'non-strict proxy handler'() {
        let applyHandler = function() { return getCaller() }
        let proxy = new Proxy(function () { }, { apply: applyHandler })
        return [ applyHandler, proxy ]
    }
  , get 'non-strict function using call'() {
        function f() { return getCaller.call() }
        return [ f, f ]
    }
}

for (let [key, [expectedCaller, func]] of Object.entries(listCallers)) {
    assert(func() === expectedCaller
      , `func.caller must evaluate to its caller when the caller is a ${key}`
    )
}
