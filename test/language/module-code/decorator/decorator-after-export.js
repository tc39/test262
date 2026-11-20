// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A class decorator can come after `export` and after `export default`
esid: sec-exports
info: |
  ExportDeclaration :
    DecoratorList[~Yield, +Await]? export Declaration[~Yield, +Await]
    DecoratorList[~Yield, +Await]? export default ClassDeclaration[~Yield, +Await, +Default]
flags: [module]
features: [decorators]
---*/

var names = [];
function dec(value, context) {
  names.push(context.name);
}

export @dec class C {}
export default @dec class {}

assert.sameValue(names.join(), 'C,default');
