// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    func.caller evaluates to null for cross-realm caller.
flags: [noStrict]
---*/

var foreignGetCaller = $262.createRealm().global.Function("return arguments.callee.caller")

assert((function () { return foreignGetCaller() })() === null
  , `f.caller must evaluate to null when the caller is from another realm`
)
