// This file was procedurally generated from the following sources:
// - src/subclass-builtins/WeakSet.case
// - src/subclass-builtins/default/statement.template
/*---
description: new SubWeakSet() instanceof WeakSet (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends WeakSet {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof WeakSet);
