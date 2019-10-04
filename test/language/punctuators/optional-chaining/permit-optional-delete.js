/*---
esid: pending
info: |
  Optional deletion as in: `delete a ?.b` is supported.
description: Try to use optional chaining in `delete` statement
features: [optional-chaining]
---*/

let a = null;
assert(delete a ?.b === undefined, 'Permit optional delete from falsey value');

let c = { d: 5 };
assert(delete c ?.d === true, 'Optional delete should proceed normally if property/value are present');
assert(('d' in c) === false, 'Property delete should have succeeded');