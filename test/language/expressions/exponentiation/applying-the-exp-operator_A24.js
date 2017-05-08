// Copyright 2016 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-applying-the-exp-operator
description: >
    Checking if Math.pow(argument1, argument2) is approximately equals
    to its mathematical value on the set of 64 argument1 values and 64
    argument2 values; all the sample values is calculated with LibC
includes:
    - math_precision.js
    - math_isequal.js
---*/

var vnum = 64;
var base1 = [];
base1[0] = 0.00000000000000000000;
base1[1] = 0.25396825396825395000;
base1[2] = 0.50793650793650791000;
base1[3] = 0.76190476190476186000;
base1[4] = 1.01587301587301580000;
base1[5] = 1.26984126984126980000;
base1[6] = 1.52380952380952370000;
base1[7] = 1.77777777777777770000;
base1[8] = 2.03174603174603160000;
base1[9] = 2.28571428571428560000;
base1[10] = 2.53968253968253950000;
base1[11] = 2.79365079365079350000;
base1[12] = 3.04761904761904740000;
base1[13] = 3.30158730158730140000;
base1[14] = 3.55555555555555540000;
base1[15] = 3.80952380952380930000;
base1[16] = 4.06349206349206330000;
base1[17] = 4.31746031746031720000;
base1[18] = 4.57142857142857120000;
base1[19] = 4.82539682539682510000;
base1[20] = 5.07936507936507910000;
base1[21] = 5.33333333333333300000;
base1[22] = 5.58730158730158700000;
base1[23] = 5.84126984126984090000;
base1[24] = 6.09523809523809490000;
base1[25] = 6.34920634920634890000;
base1[26] = 6.60317460317460280000;
base1[27] = 6.85714285714285680000;
base1[28] = 7.11111111111111070000;
base1[29] = 7.36507936507936470000;
base1[30] = 7.61904761904761860000;
base1[31] = 7.87301587301587260000;
base1[32] = 8.12698412698412650000;
base1[33] = 8.38095238095238140000;
base1[34] = 8.63492063492063440000;
base1[35] = 8.88888888888888930000;
base1[36] = 9.14285714285714230000;
base1[37] = 9.39682539682539720000;
base1[38] = 9.65079365079365030000;
base1[39] = 9.90476190476190510000;
base1[40] = 10.15873015873015800000;
base1[41] = 10.41269841269841300000;
base1[42] = 10.66666666666666600000;
base1[43] = 10.92063492063492100000;
base1[44] = 11.17460317460317400000;
base1[45] = 11.42857142857142900000;
base1[46] = 11.68253968253968200000;
base1[47] = 11.93650793650793700000;
base1[48] = 12.19047619047619000000;
base1[49] = 12.44444444444444500000;
base1[50] = 12.69841269841269800000;
base1[51] = 12.95238095238095300000;
base1[52] = 13.20634920634920600000;
base1[53] = 13.46031746031746000000;
base1[54] = 13.71428571428571400000;
base1[55] = 13.96825396825396800000;
base1[56] = 14.22222222222222100000;
base1[57] = 14.47619047619047600000;
base1[58] = 14.73015873015872900000;
base1[59] = 14.98412698412698400000;
base1[60] = 15.23809523809523700000;
base1[61] = 15.49206349206349200000;
base1[62] = 15.74603174603174500000;
base1[63] = 16.00000000000000000000;



var base2 = [];
base2[0] = -16.00000000000000000000;
base2[1] = -15.49206349206349200000;
base2[2] = -14.98412698412698400000;
base2[3] = -14.47619047619047600000;
base2[4] = -13.96825396825396800000;
base2[5] = -13.46031746031746000000;
base2[6] = -12.95238095238095300000;
base2[7] = -12.44444444444444500000;
base2[8] = -11.93650793650793700000;
base2[9] = -11.42857142857142900000;
base2[10] = -10.92063492063492100000;
base2[11] = -10.41269841269841300000;
base2[12] = -9.90476190476190510000;
base2[13] = -9.39682539682539720000;
base2[14] = -8.88888888888888930000;
base2[15] = -8.38095238095238140000;
base2[16] = -7.87301587301587350000;
base2[17] = -7.36507936507936560000;
base2[18] = -6.85714285714285770000;
base2[19] = -6.34920634920634970000;
base2[20] = -5.84126984126984180000;
base2[21] = -5.33333333333333390000;
base2[22] = -4.82539682539682600000;
base2[23] = -4.31746031746031810000;
base2[24] = -3.80952380952381020000;
base2[25] = -3.30158730158730230000;
base2[26] = -2.79365079365079440000;
base2[27] = -2.28571428571428650000;
base2[28] = -1.77777777777777860000;
base2[29] = -1.26984126984127070000;
base2[30] = -0.76190476190476275000;
base2[31] = -0.25396825396825484000;
base2[32] = 0.25396825396825307000;
base2[33] = 0.76190476190476275000;
base2[34] = 1.26984126984126890000;
base2[35] = 1.77777777777777860000;
base2[36] = 2.28571428571428470000;
base2[37] = 2.79365079365079440000;
base2[38] = 3.30158730158730050000;
base2[39] = 3.80952380952381020000;
base2[40] = 4.31746031746031630000;
base2[41] = 4.82539682539682600000;
base2[42] = 5.33333333333333210000;
base2[43] = 5.84126984126984180000;
base2[44] = 6.34920634920634800000;
base2[45] = 6.85714285714285770000;
base2[46] = 7.36507936507936380000;
base2[47] = 7.87301587301587350000;
base2[48] = 8.38095238095237960000;
base2[49] = 8.88888888888888930000;
base2[50] = 9.39682539682539540000;
base2[51] = 9.90476190476190510000;
base2[52] = 10.41269841269841100000;
base2[53] = 10.92063492063492100000;
base2[54] = 11.42857142857142700000;
base2[55] = 11.93650793650793700000;
base2[56] = 12.44444444444444300000;
base2[57] = 12.95238095238095300000;
base2[58] = 13.46031746031745900000;
base2[59] = 13.96825396825396800000;
base2[60] = 14.47619047619047400000;
base2[61] = 14.98412698412698400000;
base2[62] = 15.49206349206349000000;
base2[63] = 16.00000000000000000000;


var exponents = [];
exponents[0] = +Infinity;
exponents[1] = 1664158979.11096290000000000000;
exponents[2] = 25596.98862206424700000000;
exponents[3] = 51.24224360332205900000;
exponents[4] = 0.80253721621001273000;
exponents[5] = 0.04013281604184240600;
exponents[6] = 0.00427181167466968250;
exponents[7] = 0.00077698684629307839;
exponents[8] = 0.00021140449751288852;
exponents[9] = 0.00007886641216275820;
exponents[10] = 0.00003797970495625904;
exponents[11] = 0.00002260186576944384;
exponents[12] = 0.00001608735704675994;
exponents[13] = 0.00001335526639440840;
exponents[14] = 0.00001267782407825002;
exponents[15] = 0.00001354410739307298;
exponents[16] = 0.00001607404700077214;
exponents[17] = 0.00002096489798949858;
exponents[18] = 0.00002978033411316872;
exponents[19] = 0.00004572015769326707;
exponents[20] = 0.00007536620884896827;
exponents[21] = 0.00013263967558882687;
exponents[22] = 0.00024800091950917796;
exponents[23] = 0.00049049578772052680;
exponents[24] = 0.00102225521238885490;
exponents[25] = 0.00223744147356661880;
exponents[26] = 0.00512739755878587920;
exponents[27] = 0.01226918030754863000;
exponents[28] = 0.03058049475427409400;
exponents[29] = 0.07921771472569966200;
exponents[30] = 0.21285098601167457000;
exponents[31] = 0.59211846233860321000;
exponents[32] = 1.70252376919407730000;
exponents[33] = 5.05197994186350920000;
exponents[34] = 15.44896866758827700000;
exponents[35] = 48.62279949816147700000;
exponents[36] = 157.31086033139039000000;
exponents[37] = 522.60021277476767000000;
exponents[38] = 1780.82316713426990000000;
exponents[39] = 6218.58509846337710000000;
exponents[40] = 22232.54916898025500000000;
exponents[41] = 81310.50695814844200000000;
exponents[42] = 303962.39599994919000000000;
exponents[43] = 1160609.39151835810000000000;
exponents[44] = 4523160.16396183520000000000;
exponents[45] = 17980506.53105686600000000000;
exponents[46] = 72861260.63140085300000000000;
exponents[47] = 300795965.18372804000000000000;
exponents[48] = 1264408843.88636260000000000000;
exponents[49] = 5408983705.82595920000000000000;
exponents[50] = 23536438485.32324600000000000000;
exponents[51] = 104125724201.77888000000000000000;
exponents[52] = 468137079409.17462000000000000000;
exponents[53] = 2137965865913.91260000000000000000;
exponents[54] = 9914368643808.25200000000000000000;
exponents[55] = 46665726995317.89800000000000000000;
exponents[56] = 222863786409039.87000000000000000000;
exponents[57] = 1079534443702065.00000000000000000000;
exponents[58] = 5302037850329952.00000000000000000000;
exponents[59] = 26394813313751084.00000000000000000000;
exponents[60] = 133146543235024720.00000000000000000000;
exponents[61] = 680375082351885950.00000000000000000000;
exponents[62] = 3520878542447823900.00000000000000000000;
exponents[63] = 18446744073709552000.00000000000000000000;



var val;
for (var i = 0; i < vnum; i++) {
  val = base1[i] ** base2[i];
  if (!isEqual(val, exponents[i])) {
    $ERROR("\nx1 = " + base1[i] + "\nx2 = " + base2[i] + "\nlibc.pow(x1,x2) = " + exponents[i] + "\n(x1 ** base2) = " + (base1[i] ** base2[i]) + "\nMath.abs(libc.pow(x1,x2) - (x1 ** base2)) > " + prec + "\n\n");
  }
}
