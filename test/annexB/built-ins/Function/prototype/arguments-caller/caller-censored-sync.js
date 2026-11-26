// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    func.caller evaluates to null for censored sync callers.
flags: [noStrict]
---*/

function getCaller() { return getCaller.caller }

var listCallers = {
    'strict function': function () {
        "use strict"
        // Beware of PTC!
        let r = getCaller()
        return r
    }
  , 'generator function': _ => (function*() {
        yield getCaller()
    })().next().value
  , 'built-in function': _ => {
        let r
        ;[0].forEach(function g() {
            r = g.caller
        })
        return r
    }
}


for (let [key, func] of Object.entries(listCallers)) {
    try {
        assert(func() === null
          , `f.caller must evaluate to null when the caller is a ${key}`
        )
    }
    catch (e) {
        if (e instanceof Test262Error)
            throw e
        $ERROR(`f.caller must not throw when the caller is a ${key}. Thrown: ${e}`)
    }
}

