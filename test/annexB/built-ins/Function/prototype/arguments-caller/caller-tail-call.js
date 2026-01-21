// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Test interactions between .caller and proper tail calls.
flags: [noStrict]
---*/

function getCaller() { return getCaller.caller }

var listCallers = {
    get 'g calls f in apparent tail position in non-strict mode'() {
        let shouldNotTriggerTailCall = function () {
            return getCaller()
        }
        let wrapper = function() {
            let r = shouldNotTriggerTailCall()
            return r
        }
        return [ shouldNotTriggerTailCall, wrapper ]
    }
  , get 'g calls a strict function that calls f in tail position'() {
        let willTriggerTailCall = function () {
            "use strict"
            return getCaller()
        }
        let wrapper = function () {
            let r = willTriggerTailCall()
            return r
        }
        return [ wrapper, wrapper ]
    }
}

for (let [key, [caller, func]] of Object.entries(listCallers)) {
    let result
    try {
        assert(func() === caller
          , `f.caller must return g when ${key}`
        )
    }
    catch (e) {
        if (e instanceof Test262Error)
            throw e
        $ERROR(`f.caller must not throw when ${key}. Thrown: ${e}`)
    }
}
