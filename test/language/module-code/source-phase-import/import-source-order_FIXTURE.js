// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Fixture module used by the import-source-order-* tests.
// The file-system version exports source = "file" and its moduleId.

export var source = "file";
export var moduleId = import.meta.moduleId;
