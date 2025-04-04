// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: transferToImmutable is extensible
features: [immutable-arraybuffer]
---*/

assert(Object.isExtensible(ArrayBuffer.prototype.transferToImmutable));
