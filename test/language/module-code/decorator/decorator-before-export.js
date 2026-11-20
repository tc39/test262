// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A class decorator can come before `export`
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

@dec export class C {}
@dec export default class D {}

assert.sameValue(names.join(), 'C,D');
