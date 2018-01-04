// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatten
description: >
    arrays with empty object elements
---*/

assert.sameValue(JSON.stringify(Array.prototype.flatten.call([{}])), JSON.stringify([{}]));
assert.sameValue(JSON.stringify(Array.prototype.flatten.call([{}, [{}]])), JSON.stringify([{}, {}]));
assert.sameValue(JSON.stringify(Array.prototype.flatten.call([[{null: {}}], [{}]])), JSON.stringify([{null: {}}, {}]));
assert.sameValue(JSON.stringify(Array.prototype.flatten.call([[{null: null}], [{}]])), JSON.stringify([{null: null}, {}]));
