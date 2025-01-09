// |reftest| skip -- support file
// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
if (globalThis.testArray === undefined) {
  globalThis.testArray = [];
}
globalThis.testArray.push("async 1");
await 0;
globalThis.testArray.push("async 2");
