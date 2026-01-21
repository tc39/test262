// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    func.arguments and func.caller returns null when the receiver is a non-strict function
    defined through FunctionDeclaration, FunctionExpression or the Function constructor,
    and the receiver is not in the call stack.
flags: [noStrict]
---*/

function f() { }

var listFunctions = {
    'non-strict function defined by a FunctionDeclaration': f
  , 'non-strict function defined by a FunctionExpression': (function () { })
  , 'non-strict function with a non-simple parameter list': function (...args) { }
  , 'non-strict function constructed using the Function constructor': Function("")
}


for (let property of ['caller', 'arguments']) {
    for (let [key, func] of Object.entries(listFunctions)) {
        assert(
            func[property] === null
          , `f.${property} must evaluate to null when the receiver is a ${key} (when not in the call stack).`
        )
    }
}
