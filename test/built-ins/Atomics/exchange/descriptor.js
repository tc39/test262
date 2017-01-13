// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Atomics.exchange
includes: [propertyHelper.js]
---*/

verifyWritable(Atomics, "exchange");
verifyNotEnumerable(Atomics, "exchange");
verifyConfigurable(Atomics, "exchange");
