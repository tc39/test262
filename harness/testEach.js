// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
    This defines a helper function to test table templates.
defines: [testEach]
---*/


function testEach(strings, ...args) {

  /*
   * testEach`
   *    num     | names
   *    ${num1} | ${names1}
   *    ${numN} | ${namesN}
   *  `(({ num, names }) => {
   *    .. fn called for each table row ..
   *    .. asserts go here ..
   *  })
   *
   *
   * Tagged template string that accepts table of arguments and calls passed
   * function once with each row's values.
   *
  */

  const variableNames = strings.raw[0].split('|').map((name) => name.trim());

  const zipped = args.reduce((acc, arg, idx) => {
    const variableIdx = idx % variableNames.length;

    if (variableIdx === 0) {
      acc.push({})
    }

    const varToUpdate = variableNames[variableIdx];
    const currentCollection = acc[acc.length - 1];

    currentCollection[varToUpdate] = arg;
    return acc;

  }, []);


  return (fn) => {
    zipped.forEach((argumentSet) => {
      fn(argumentSet)
    });
  }
}
