// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-static-semantics-toplevelvarscopeddeclarations
description: >
    tests TopLevelVarScopedDeclarations is called recursively when LabelledItem is a LabelledStatement
info: |
    Static Semantics: TopLevelVarScopedDeclarations ( ): a List of Parse Nodes

    LabelledStatement : LabelIdentifier `:` LabelledItem
    1. Return the TopLevelVarScopedDeclarations of |LabelledItem|.
    
    LabelledItem : Statement
    1. If |Statement| is Statement : LabelledStatement, return the TopLevelVarScopedDeclarations of |Statement|.
    2. Return the VarScopedDeclarations of |Statement|.

    Static Semantics: VarScopedDeclarations ( ): a List of Parse Nodes

    VariableDeclarationList : VariableDeclaration
    1. Return « |VariableDeclaration| ».
---*/

assert.sameValue(x, undefined);
outer: inner: var x;
