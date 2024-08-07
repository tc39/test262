// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-reflect-parse-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*/function test() {

function testParamPatternCombinations(makePattSrc, makePattPatt) {
    var pattSrcs = makePatternCombinations(n => ("x" + n), makePattSrc);
    var pattPatts = makePatternCombinations(n => (ident("x" + n)), makePattPatt);

    for (var i = 0; i < pattSrcs.length; i++) {
        function makeSrc(body) {
            return "(function(" + pattSrcs[i].join(",") + ") " + body + ")";
        }
        function makePatt(body) {
            return funExpr(null, pattPatts[i], body);
        }

        // no upvars, block body
        assertExpr(makeSrc("{ }"), makePatt(blockStmt([])));
        // upvars, block body
        assertExpr(makeSrc("{ return [x1,x2,x3,x4,x5]; }"),
                   makePatt(blockStmt([returnStmt(arrExpr([ident("x1"), ident("x2"), ident("x3"), ident("x4"), ident("x5")]))])));
    }
}

testParamPatternCombinations(n => ("{a" + n + ":x" + n + "," + "b" + n + ":y" + n + "," + "c" + n + ":z" + n + "}"),
                             n => (objPatt([assignProp("a" + n, ident("x" + n)),
                                            assignProp("b" + n, ident("y" + n)),
                                            assignProp("c" + n, ident("z" + n))])));

testParamPatternCombinations(n => ("{a" + n + ":x" + n + " = 10," + "b" + n + ":y" + n + " = 10," + "c" + n + ":z" + n + " = 10}"),
                             n => (objPatt([assignProp("a" + n, ident("x" + n), lit(10)),
                                            assignProp("b" + n, ident("y" + n), lit(10)),
                                            assignProp("c" + n, ident("z" + n), lit(10))])));

testParamPatternCombinations(n => ("[x" + n + "," + "y" + n + "," + "z" + n + "]"),
                             n => (arrPatt([assignElem("x" + n), assignElem("y" + n), assignElem("z" + n)])));

testParamPatternCombinations(n => ("[a" + n + ", ..." + "b" + n + "]"),
                             n => (arrPatt([assignElem("a" + n), spread(ident("b" + n))])));

testParamPatternCombinations(n => ("[a" + n + ", " + "b" + n + " = 10]"),
                             n => (arrPatt([assignElem("a" + n), assignElem("b" + n, lit(10))])));

}

runtest(test);
