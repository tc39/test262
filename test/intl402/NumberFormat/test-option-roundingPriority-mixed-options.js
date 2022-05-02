// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

  /*---
  esid: sec-intl.numberformat.prototype.format
  description: Tests that the digits are determined correctly when specifying at same time «"minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"»
  features: [Intl.NumberFormat-v3]
  includes: [testIntl.js]
  ---*/

  var locales = [new Intl.NumberFormat().resolvedOptions().locale, "ar", "de", "th", "ja"];

  var numberingSystems =  ['arab', 'latn', 'thai', 'hanidec'];

  var expectedResults = {
    'auto' : [
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' }
      ]
    ,
    'lessPrecision' : [
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' }
    ],
    'morePrecision' : [
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' },
      { '1': '1.0', '1.500': '1.5', '1.625': '1.6', '1.750': '2.0', '1.875': '2.0', '2.000': '2.0' }
    ]
  }

  var optionsMatrix = [
    { useGrouping: false, minimumSignificantDigits: 2, minimumFractionDigits: 2},
    { useGrouping: false, minimumSignificantDigits: 3, minimumFractionDigits: 1},
    { useGrouping: false, maximumSignificantDigits: 2, minimumFractionDigits: 2},
    { useGrouping: false, maximumSignificantDigits: 3, minimumFractionDigits: 1},
    { useGrouping: false, minimumSignificantDigits: 2, maximumFractionDigits: 2},
    { useGrouping: false, minimumSignificantDigits: 3, maximumFractionDigits: 1},
    { useGrouping: false, minimumFractionDigits: 1, maximumFractionDigits: 4, minimumSignificantDigits: 1, maximumSignificantDigits: 2 },
    { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 4, minimumSignificantDigits: 1, maximumSignificantDigits: 2 },
    { useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 4, minimumSignificantDigits: 2, maximumSignificantDigits: 3 },
    { useGrouping: false, minimumFractionDigits: 1, maximumFractionDigits: 2, minimumSignificantDigits: 1, maximumSignificantDigits: 4 },
    { useGrouping: false, minimumFractionDigits: 1, maximumFractionDigits: 2, minimumSignificantDigits: 2, maximumSignificantDigits: 4 },
  ];

  function testPrecision(mode){
    optionsMatrix.forEach((nfTestOptions)=>{
      Object.keys(expectedResults[mode]).forEach((i)=>{
        testNumberFormat(locales, numberingSystems , {...nfTestOptions  , roundingIncrement: mode },  expectedResults[mode][i]);
      })
    })
  }

  ['auto' , 'lessPrecision' , 'morePrecision'].forEach(testPrecision);
