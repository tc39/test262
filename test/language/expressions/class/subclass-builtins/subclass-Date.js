// This file was procedurally generated from the following sources:
// - src/subclass-builtins/Date.case
// - src/subclass-builtins/default/expression.template
/*---
description: new SubDate() instanceof Date (Subclass instanceof Heritage)
flags: [generated]
---*/


const Subclass = class extends Date {}

const sub = new Subclass(1970);
assert(sub instanceof Subclass);
assert(sub instanceof Date);
