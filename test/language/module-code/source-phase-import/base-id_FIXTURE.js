// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Fixture that exports its own moduleId so that script-context tests
// can discover the host's id scheme.

export var moduleId = import.meta.moduleId;
