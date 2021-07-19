// Copyright (C) 2021 Chengzhong Wu. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Error prototype properties
esid: sec-properties-of-the-error-prototype-object
includes: [propertyHelper.js]
---*/

const desc = {
  writable: true,
  enumerable: false,
  configurable: true
};
verifyProperty(Error.prototype, 'cause', undefined);
verifyProperty(Error.prototype, 'constructor', desc);
verifyProperty(Error.prototype, 'name', desc);
verifyProperty(Error.prototype, 'message', desc);
verifyProperty(Error.prototype, 'toString', desc);
