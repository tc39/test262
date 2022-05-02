// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.prototype.format
description: Checks the behavior of Intl.DurationFormat.prototype.format() in Spanish.
features: [Intl.DurationFormat]
locale: [es-ES]
---*/

const stylesList = ["long" , "short" , "narrow", "digital"];

const assertList = {
  "PT1H50M":  {
    "long": "1 hora y 50 minutos",
    "short": "1 h, 50 min",
    "narrow": "1h 50m",
    "digital": "1:50:00",
  },
  "PT2H46M40S":  {
    "long": "2 horas, 46 minutos y 40 segundos",
    "short": "2 h, 46 min, 40 s",
    "narrow": "2h 46m 40s",
    "digital": "2:46:40",
  },
  // Negative durations in Intl.DurationFormat https://github.com/tc39/proposal-intl-duration-format/issues/29
  "-PT1H50M":  {
    "digital": "-1:50:00",
  },
  "-PT2H46M40S":  {
    "digital": "-2:46:40",
  }
};

stylesList.forEach((style)=>{
  for (const [duration, styletestData] of Object.entries(assertList)) {
      const df = new Intl.DurationFormat("es-ES", {style})
      assert.sameValue(df.format(duration), styletestData[style]);
  }
})
