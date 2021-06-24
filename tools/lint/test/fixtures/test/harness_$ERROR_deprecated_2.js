HARNESS - $ERROR() is deprecated, do not use in new or edited tests. https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#test-environment
^ expected errors | v input
// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-whatever
description: Minimal test
---*/

const _ = $ERROR;

_('whatever');
