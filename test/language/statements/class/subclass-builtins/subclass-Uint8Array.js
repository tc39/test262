// This file was procedurally generated from the following sources:
// - src/subclass-builtins/Uint8Array.case
// - src/subclass-builtins/default/statement.template
/*---
description: new SubUint8Array() instanceof Uint8Array (Subclass instanceof Heritage)
flags: [generated]
---*/


class Subclass extends Uint8Array {}

const sub = new Subclass();
assert(sub instanceof Subclass);
assert(sub instanceof Uint8Array);
