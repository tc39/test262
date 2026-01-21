// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    func.caller evaluates to null for async callers.
flags: [noStrict, async]
---*/

function getCaller() { return getCaller.caller }

var listCallers = {
    'async function': async function () { return getCaller() }
  , 'async arow function': async _ => getCaller()
  , 'async generator': async _ => {
        let f = async function*() { yield getCaller() }
        let result = await (f().next())
        return result.value
    }
  , 'async arrow function': async _=> getCaller()
}

;(async function () {
    for (let [key, func] of Object.entries(listCallers)) {
        assert((await func()) === null
          , `f.caller must evaluate to null when the caller is a ${key}`
        )
    }
    print('Test262:AsyncTestComplete')
})().then(
    _ => print('Test262:AsyncTestComplete')
  , _ => print('Test262:AsyncTestFailure: ' + _)
)
