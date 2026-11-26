// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    func.arguments evaluates to an object with some defined characteristics.
flags: [noStrict]
---*/


function f() { return [f, f.arguments, arguments] }

var listFunctions = {
    'non-strict function defined by a FunctionDeclaration': f
  , 'non-strict function defined by a FunctionExpression': (function f() { return [f, f.arguments, arguments] })
  , 'non-strict function constructed using the Function constructor': Function("return [arguments.callee, arguments.callee.arguments, arguments]")
  , 'non-strict function with a non-simple parameter list': function f(...args) { return [f, f.arguments, arguments] }
}


for (let [key, func] of Object.entries(listFunctions)) {

    let [receiver, argObject, trueArguments] = func('a', 'b')

    assert(typeof argObject === "object" && argObject !== null
      , `f.arguments must be an object when f is ${key}.`
    )

    assert(Object.getPrototypeOf(argObject) === Object.prototype
      , `f.arguments must inherit from Object.prototype when f is ${key}.`
    )

    assert(argObject.toString() === '[object Arguments]'
      , `f.arguments.toString() must be "[object Arguments]" when f is ${key}.`
    )

    assert(argObject !== trueArguments
      , `f.arguments must be distinct from the arguments binding when f is ${key}.`
    )

    assert(argObject.length === 2 && argObject[0] === 'a' && argObject[1] === 'b'
      , `f.arguments must reflect the arguments passed to f when f is ${key}.`
    )

    assert(argObject[Symbol.iterator] === Array.prototype.values
      , `f.arguments[Symbol.iterator] must be Array.prototype.values when f is ${key}.`
    )

    let hasThrown = 0
    try {
        assert(trueArguments.callee === receiver)
    }
    catch (e) {
        if (e instanceof Test262Error)
            throw e
        hasThrown++
    }

    try {
        assert(argObject.callee === receiver
          , `f.arguments.callee must evaluates to the callee when f is ${key}`
        )
    }
    catch (e) {
        if (e instanceof Test262Error)
            throw e
        hasThrown++
    }

    assert(hasThrown === 0 || hasThrown === 2
      , `f.arguments.callee must be poisoned if and only if arguments.callee is poisoned when f is ${key}`
    )
}
