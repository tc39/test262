// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-static-semantics-toplevelvarscopeddeclarations
description: >
    tests TopLevelVarScopedDeclarations is called recursively when |Statement| is Statement : LabelledStatement
info: |
    Static Semantics: TopLevelVarScopedDeclarations ( )

    StatementListItem : Statement
    1. If |Statement| is Statement : LabelledStatement, return the TopLevelVarScopedDeclarations of |Statement|.

    LabelledStatement : LabelIdentifier `:` LabelledItem
    1. Return the TopLevelVarScopedDeclarations of |LabelledItem|.
---*/

assert.sameValue(x, undefined);
outer: var x;
