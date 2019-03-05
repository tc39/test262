// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Other_Punctuation`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00002A,
    0x00002C,
    0x00005C,
    0x0000A1,
    0x0000A7,
    0x0000BF,
    0x00037E,
    0x000387,
    0x000589,
    0x0005C0,
    0x0005C3,
    0x0005C6,
    0x00061B,
    0x0006D4,
    0x00085E,
    0x000970,
    0x0009FD,
    0x000A76,
    0x000AF0,
    0x000C77,
    0x000C84,
    0x000DF4,
    0x000E4F,
    0x000F14,
    0x000F85,
    0x0010FB,
    0x00166E,
    0x001CD3,
    0x002053,
    0x002D70,
    0x002E0B,
    0x002E1B,
    0x002E41,
    0x00303D,
    0x0030FB,
    0x00A673,
    0x00A67E,
    0x00A8FC,
    0x00A95F,
    0x00ABEB,
    0x00FE19,
    0x00FE30,
    0x00FE68,
    0x00FF0A,
    0x00FF0C,
    0x00FF3C,
    0x00FF61,
    0x01039F,
    0x0103D0,
    0x01056F,
    0x010857,
    0x01091F,
    0x01093F,
    0x010A7F,
    0x0111CD,
    0x0111DB,
    0x0112A9,
    0x01145B,
    0x01145D,
    0x0114C6,
    0x01183B,
    0x0119E2,
    0x011FFF,
    0x016AF5,
    0x016B44,
    0x016FE2,
    0x01BC9F
  ],
  ranges: [
    [0x000021, 0x000023],
    [0x000025, 0x000027],
    [0x00002E, 0x00002F],
    [0x00003A, 0x00003B],
    [0x00003F, 0x000040],
    [0x0000B6, 0x0000B7],
    [0x00055A, 0x00055F],
    [0x0005F3, 0x0005F4],
    [0x000609, 0x00060A],
    [0x00060C, 0x00060D],
    [0x00061E, 0x00061F],
    [0x00066A, 0x00066D],
    [0x000700, 0x00070D],
    [0x0007F7, 0x0007F9],
    [0x000830, 0x00083E],
    [0x000964, 0x000965],
    [0x000E5A, 0x000E5B],
    [0x000F04, 0x000F12],
    [0x000FD0, 0x000FD4],
    [0x000FD9, 0x000FDA],
    [0x00104A, 0x00104F],
    [0x001360, 0x001368],
    [0x0016EB, 0x0016ED],
    [0x001735, 0x001736],
    [0x0017D4, 0x0017D6],
    [0x0017D8, 0x0017DA],
    [0x001800, 0x001805],
    [0x001807, 0x00180A],
    [0x001944, 0x001945],
    [0x001A1E, 0x001A1F],
    [0x001AA0, 0x001AA6],
    [0x001AA8, 0x001AAD],
    [0x001B5A, 0x001B60],
    [0x001BFC, 0x001BFF],
    [0x001C3B, 0x001C3F],
    [0x001C7E, 0x001C7F],
    [0x001CC0, 0x001CC7],
    [0x002016, 0x002017],
    [0x002020, 0x002027],
    [0x002030, 0x002038],
    [0x00203B, 0x00203E],
    [0x002041, 0x002043],
    [0x002047, 0x002051],
    [0x002055, 0x00205E],
    [0x002CF9, 0x002CFC],
    [0x002CFE, 0x002CFF],
    [0x002E00, 0x002E01],
    [0x002E06, 0x002E08],
    [0x002E0E, 0x002E16],
    [0x002E18, 0x002E19],
    [0x002E1E, 0x002E1F],
    [0x002E2A, 0x002E2E],
    [0x002E30, 0x002E39],
    [0x002E3C, 0x002E3F],
    [0x002E43, 0x002E4F],
    [0x003001, 0x003003],
    [0x00A4FE, 0x00A4FF],
    [0x00A60D, 0x00A60F],
    [0x00A6F2, 0x00A6F7],
    [0x00A874, 0x00A877],
    [0x00A8CE, 0x00A8CF],
    [0x00A8F8, 0x00A8FA],
    [0x00A92E, 0x00A92F],
    [0x00A9C1, 0x00A9CD],
    [0x00A9DE, 0x00A9DF],
    [0x00AA5C, 0x00AA5F],
    [0x00AADE, 0x00AADF],
    [0x00AAF0, 0x00AAF1],
    [0x00FE10, 0x00FE16],
    [0x00FE45, 0x00FE46],
    [0x00FE49, 0x00FE4C],
    [0x00FE50, 0x00FE52],
    [0x00FE54, 0x00FE57],
    [0x00FE5F, 0x00FE61],
    [0x00FE6A, 0x00FE6B],
    [0x00FF01, 0x00FF03],
    [0x00FF05, 0x00FF07],
    [0x00FF0E, 0x00FF0F],
    [0x00FF1A, 0x00FF1B],
    [0x00FF1F, 0x00FF20],
    [0x00FF64, 0x00FF65],
    [0x010100, 0x010102],
    [0x010A50, 0x010A58],
    [0x010AF0, 0x010AF6],
    [0x010B39, 0x010B3F],
    [0x010B99, 0x010B9C],
    [0x010F55, 0x010F59],
    [0x011047, 0x01104D],
    [0x0110BB, 0x0110BC],
    [0x0110BE, 0x0110C1],
    [0x011140, 0x011143],
    [0x011174, 0x011175],
    [0x0111C5, 0x0111C8],
    [0x0111DD, 0x0111DF],
    [0x011238, 0x01123D],
    [0x01144B, 0x01144F],
    [0x0115C1, 0x0115D7],
    [0x011641, 0x011643],
    [0x011660, 0x01166C],
    [0x01173C, 0x01173E],
    [0x011A3F, 0x011A46],
    [0x011A9A, 0x011A9C],
    [0x011A9E, 0x011AA2],
    [0x011C41, 0x011C45],
    [0x011C70, 0x011C71],
    [0x011EF7, 0x011EF8],
    [0x012470, 0x012474],
    [0x016A6E, 0x016A6F],
    [0x016B37, 0x016B3B],
    [0x016E97, 0x016E9A],
    [0x01DA87, 0x01DA8B],
    [0x01E95E, 0x01E95F]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Other_Punctuation}+$/u,
  matchSymbols,
  "\\p{General_Category=Other_Punctuation}"
);
testPropertyEscapes(
  /^\p{General_Category=Po}+$/u,
  matchSymbols,
  "\\p{General_Category=Po}"
);
testPropertyEscapes(
  /^\p{gc=Other_Punctuation}+$/u,
  matchSymbols,
  "\\p{gc=Other_Punctuation}"
);
testPropertyEscapes(
  /^\p{gc=Po}+$/u,
  matchSymbols,
  "\\p{gc=Po}"
);
testPropertyEscapes(
  /^\p{Other_Punctuation}+$/u,
  matchSymbols,
  "\\p{Other_Punctuation}"
);
testPropertyEscapes(
  /^\p{Po}+$/u,
  matchSymbols,
  "\\p{Po}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000024,
    0x00002B,
    0x00002D,
    0x00060B,
    0x000F13,
    0x0017D7,
    0x001806,
    0x001AA7,
    0x002052,
    0x002054,
    0x002CFD,
    0x002E17,
    0x002E1A,
    0x002E2F,
    0x002E40,
    0x002E42,
    0x00A8FB,
    0x00FE53,
    0x00FE69,
    0x00FF04,
    0x00FF0B,
    0x00FF0D,
    0x0110BD,
    0x0111DC,
    0x01145C,
    0x011A9D
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000020],
    [0x000028, 0x000029],
    [0x000030, 0x000039],
    [0x00003C, 0x00003E],
    [0x000041, 0x00005B],
    [0x00005D, 0x0000A0],
    [0x0000A2, 0x0000A6],
    [0x0000A8, 0x0000B5],
    [0x0000B8, 0x0000BE],
    [0x0000C0, 0x00037D],
    [0x00037F, 0x000386],
    [0x000388, 0x000559],
    [0x000560, 0x000588],
    [0x00058A, 0x0005BF],
    [0x0005C1, 0x0005C2],
    [0x0005C4, 0x0005C5],
    [0x0005C7, 0x0005F2],
    [0x0005F5, 0x000608],
    [0x00060E, 0x00061A],
    [0x00061C, 0x00061D],
    [0x000620, 0x000669],
    [0x00066E, 0x0006D3],
    [0x0006D5, 0x0006FF],
    [0x00070E, 0x0007F6],
    [0x0007FA, 0x00082F],
    [0x00083F, 0x00085D],
    [0x00085F, 0x000963],
    [0x000966, 0x00096F],
    [0x000971, 0x0009FC],
    [0x0009FE, 0x000A75],
    [0x000A77, 0x000AEF],
    [0x000AF1, 0x000C76],
    [0x000C78, 0x000C83],
    [0x000C85, 0x000DF3],
    [0x000DF5, 0x000E4E],
    [0x000E50, 0x000E59],
    [0x000E5C, 0x000F03],
    [0x000F15, 0x000F84],
    [0x000F86, 0x000FCF],
    [0x000FD5, 0x000FD8],
    [0x000FDB, 0x001049],
    [0x001050, 0x0010FA],
    [0x0010FC, 0x00135F],
    [0x001369, 0x00166D],
    [0x00166F, 0x0016EA],
    [0x0016EE, 0x001734],
    [0x001737, 0x0017D3],
    [0x0017DB, 0x0017FF],
    [0x00180B, 0x001943],
    [0x001946, 0x001A1D],
    [0x001A20, 0x001A9F],
    [0x001AAE, 0x001B59],
    [0x001B61, 0x001BFB],
    [0x001C00, 0x001C3A],
    [0x001C40, 0x001C7D],
    [0x001C80, 0x001CBF],
    [0x001CC8, 0x001CD2],
    [0x001CD4, 0x002015],
    [0x002018, 0x00201F],
    [0x002028, 0x00202F],
    [0x002039, 0x00203A],
    [0x00203F, 0x002040],
    [0x002044, 0x002046],
    [0x00205F, 0x002CF8],
    [0x002D00, 0x002D6F],
    [0x002D71, 0x002DFF],
    [0x002E02, 0x002E05],
    [0x002E09, 0x002E0A],
    [0x002E0C, 0x002E0D],
    [0x002E1C, 0x002E1D],
    [0x002E20, 0x002E29],
    [0x002E3A, 0x002E3B],
    [0x002E50, 0x003000],
    [0x003004, 0x00303C],
    [0x00303E, 0x0030FA],
    [0x0030FC, 0x00A4FD],
    [0x00A500, 0x00A60C],
    [0x00A610, 0x00A672],
    [0x00A674, 0x00A67D],
    [0x00A67F, 0x00A6F1],
    [0x00A6F8, 0x00A873],
    [0x00A878, 0x00A8CD],
    [0x00A8D0, 0x00A8F7],
    [0x00A8FD, 0x00A92D],
    [0x00A930, 0x00A95E],
    [0x00A960, 0x00A9C0],
    [0x00A9CE, 0x00A9DD],
    [0x00A9E0, 0x00AA5B],
    [0x00AA60, 0x00AADD],
    [0x00AAE0, 0x00AAEF],
    [0x00AAF2, 0x00ABEA],
    [0x00ABEC, 0x00DBFF],
    [0x00E000, 0x00FE0F],
    [0x00FE17, 0x00FE18],
    [0x00FE1A, 0x00FE2F],
    [0x00FE31, 0x00FE44],
    [0x00FE47, 0x00FE48],
    [0x00FE4D, 0x00FE4F],
    [0x00FE58, 0x00FE5E],
    [0x00FE62, 0x00FE67],
    [0x00FE6C, 0x00FF00],
    [0x00FF08, 0x00FF09],
    [0x00FF10, 0x00FF19],
    [0x00FF1C, 0x00FF1E],
    [0x00FF21, 0x00FF3B],
    [0x00FF3D, 0x00FF60],
    [0x00FF62, 0x00FF63],
    [0x00FF66, 0x0100FF],
    [0x010103, 0x01039E],
    [0x0103A0, 0x0103CF],
    [0x0103D1, 0x01056E],
    [0x010570, 0x010856],
    [0x010858, 0x01091E],
    [0x010920, 0x01093E],
    [0x010940, 0x010A4F],
    [0x010A59, 0x010A7E],
    [0x010A80, 0x010AEF],
    [0x010AF7, 0x010B38],
    [0x010B40, 0x010B98],
    [0x010B9D, 0x010F54],
    [0x010F5A, 0x011046],
    [0x01104E, 0x0110BA],
    [0x0110C2, 0x01113F],
    [0x011144, 0x011173],
    [0x011176, 0x0111C4],
    [0x0111C9, 0x0111CC],
    [0x0111CE, 0x0111DA],
    [0x0111E0, 0x011237],
    [0x01123E, 0x0112A8],
    [0x0112AA, 0x01144A],
    [0x011450, 0x01145A],
    [0x01145E, 0x0114C5],
    [0x0114C7, 0x0115C0],
    [0x0115D8, 0x011640],
    [0x011644, 0x01165F],
    [0x01166D, 0x01173B],
    [0x01173F, 0x01183A],
    [0x01183C, 0x0119E1],
    [0x0119E3, 0x011A3E],
    [0x011A47, 0x011A99],
    [0x011AA3, 0x011C40],
    [0x011C46, 0x011C6F],
    [0x011C72, 0x011EF6],
    [0x011EF9, 0x011FFE],
    [0x012000, 0x01246F],
    [0x012475, 0x016A6D],
    [0x016A70, 0x016AF4],
    [0x016AF6, 0x016B36],
    [0x016B3C, 0x016B43],
    [0x016B45, 0x016E96],
    [0x016E9B, 0x016FE1],
    [0x016FE3, 0x01BC9E],
    [0x01BCA0, 0x01DA86],
    [0x01DA8C, 0x01E95D],
    [0x01E960, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Other_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Other_Punctuation}"
);
testPropertyEscapes(
  /^\P{General_Category=Po}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Po}"
);
testPropertyEscapes(
  /^\P{gc=Other_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{gc=Other_Punctuation}"
);
testPropertyEscapes(
  /^\P{gc=Po}+$/u,
  nonMatchSymbols,
  "\\P{gc=Po}"
);
testPropertyEscapes(
  /^\P{Other_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{Other_Punctuation}"
);
testPropertyEscapes(
  /^\P{Po}+$/u,
  nonMatchSymbols,
  "\\P{Po}"
);
