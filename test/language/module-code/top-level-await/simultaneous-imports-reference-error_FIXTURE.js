// Copyright (C) 2025 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

globalThis.executionStarted();

let importCount = 0;
importCount++;

await globalThis.promise;

export const exportedValue = "success";
export { importCount }; 