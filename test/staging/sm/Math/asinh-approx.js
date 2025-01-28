// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Math-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var sinh_data = [
    [-497.181640625, -6.902103625349695],
    [-495.216552734375, -6.898143347143859],
    [-488.0980224609375, -6.883664481302669],
    [-486.4609375, -6.880304842490273],
    [-482.2261962890625, -6.871561546509046],
    [-468.167236328125, -6.841973895837549],
    [-465.553955078125, -6.836376331805493],
    [-464.288330078125, -6.833654100575195],
    [-463.558837890625, -6.8320816635009045],
    [-453.82861328125, -6.8108680173663085],
    [-448.7835693359375, -6.799689165151487],
    [-446.0499267578125, -6.793579326246197],
    [-432.4046630859375, -6.762510387544996],
    [-424.145751953125, -6.743225720989222],
    [-402.8682861328125, -6.691758395994307],
    [-402.4595947265625, -6.690743430063694],
    [-390.1383056640625, -6.6596501292114505],
    [-387.5355224609375, -6.652956360641761],
    [-381.0023193359375, -6.635954365364267],
    [-374.8172607421875, -6.619587562578274],
    [-374.1033935546875, -6.617681179427804],
    [-373.01318359375, -6.614762741096185],
    [-370.0938720703125, -6.60690568753706],
    [-364.5230712890625, -6.591738907156094],
    [-361.3756103515625, -6.583066984213974],
    [-358.1136474609375, -6.573999516974134],
    [-350.8861083984375, -6.553610904389896],
    [-350.7060546875, -6.553097634736138],
    [-345.5616455078125, -6.538320325468202],
    [-342.386962890625, -6.529090881007076],
    [-341.9425048828125, -6.527791927233787],
    [-337.3883056640625, -6.514383886150781],
    [-328.8133544921875, -6.488639771044976],
    [-326.1348876953125, -6.480460592697477],
    [-313.12744140625, -6.439759999015992],
    [-311.6180419921875, -6.434927968512049],
    [-303.40478515625, -6.4082177348965725],
    [-291.9320068359375, -6.369671035834965],
    [-289.791015625, -6.362310184909175],
    [-288.07568359375, -6.356373428913315],
    [-282.76220703125, -6.337756593913614],
    [-278.9659423828125, -6.32424009706147],
    [-276.1881103515625, -6.314232650754295],
    [-269.843994140625, -6.290994606392703],
    [-256.47509765625, -6.240182555852785],
    [-248.91619873046875, -6.2102675039793604],
    [-245.71783447265625, -6.197335184435549],
    [-244.9049072265625, -6.194021350132335],
    [-242.49176025390625, -6.184119163536406],
    [-223.97491455078125, -6.104686221071835],
    [-223.0770263671875, -6.100669325836893],
    [-221.50177001953125, -6.093582856519022],
    [-214.1610107421875, -6.0598807500687935],
    [-202.9705810546875, -6.0062142965262515],
    [-200.1683349609375, -5.9923121073369945],
    [-198.0869140625, -5.981859446096083],
    [-191.8330078125, -5.9497792165852905],
    [-183.4495849609375, -5.90509449745879],
    [-182.9005126953125, -5.902097012275789],
    [-167.5517578125, -5.8144483910067954],
    [-162.87738037109375, -5.786154254111214],
    [-159.6142578125, -5.765917008989405],
    [-150.01629638671875, -5.703902219845274],
    [-148.34051513671875, -5.6926689504460395],
    [-147.23760986328125, -5.685206387751923],
    [-143.65484619140625, -5.660572815631807],
    [-138.70599365234375, -5.625516713960633],
    [-119.55416870117188, -5.476934234171879],
    [-118.44155883789062, -5.467584665632571],
    [-112.7041015625, -5.417932675603434],
    [-111.43020629882812, -5.406565756574079],
    [-107.77297973632812, -5.373195678988387],
    [-107.6795654296875, -5.3723285712183735],
    [-105.091796875, -5.348004040102253],
    [-101.261474609375, -5.31087758970896],
    [-95.79150390625, -5.255348419702703],
    [-91.26885986328125, -5.206986845736275],
    [-87.33349609375, -5.162914035396619],
    [-78.23873901367188, -5.052952927749896],
    [-77.912353515625, -5.048772883924985],
    [-76.83489990234375, -5.034848487644809],
    [-61.255645751953125, -4.808269821238499],
    [-54.41380310058594, -4.689849459883311],
    [-43.967193603515625, -4.476720236388958],
    [-42.01084899902344, -4.431216695067421],
    [-30.609375, -4.114720236218123],
    [-26.711166381835938, -3.9785790831656023],
    [-25.241317749023438, -3.9220215830953484],
    [-14.624359130859375, -3.3770026324620295],
    [-12.431087493896484, -3.214961448471211],
    [-10.235607147216797, -3.021397455139021],
    [-9.41094970703125, -2.937831931335705],
    [-1.635939121246338, -1.267878515574959],
    [1.6504814008555524e-12, 1.6504814008555524e-12],
    [2.0654207510961697e-12, 2.0654207510961697e-12],
    [6.933230031758164e-12, 6.933230031758164e-12],
    [1.3351444949627478e-11, 1.3351444949627478e-11],
    [1.6399812063916386e-11, 1.6399812063916386e-11],
    [5.730159402528301e-11, 5.730159402528301e-11],
    [1.113731329382972e-10, 1.113731329382972e-10],
    [1.4214707189097453e-10, 1.4214707189097453e-10],
    [3.8006320313144215e-10, 3.8006320313144215e-10],
    [6.09162720266454e-10, 6.09162720266454e-10],
    [1.0221641311147778e-9, 1.0221641311147778e-9],
    [2.8819222563924995e-9, 2.8819222563924995e-9],
    [4.7627768395841485e-9, 4.7627768395841485e-9],
    [8.854133426439148e-9, 8.854133426439148e-9],
    [2.3050326092288742e-8, 2.305032609228874e-8],
    [5.9392490925347374e-8, 5.939249092534734e-8],
    [1.166764889148908e-7, 1.1667648891489053e-7],
    [2.3799674409019644e-7, 2.379967440901942e-7],
    [4.684659415943315e-7, 4.6846594159431437e-7],
    [9.382699772686465e-7, 9.382699772685088e-7],
    [0.00000110398559627356, 0.0000011039855962733358],
    [0.0000032917760108830407, 0.000003291776010877096],
    [0.00000751721381675452, 0.000007517213816683722],
    [0.000015114666894078255, 0.000015114666893502755],
    [0.00002986399340443313, 0.00002986399339999406],
    [0.00003387028118595481, 0.000033870281179478836],
    [0.00009066011989489198, 0.00009066011977069884],
    [0.00021949532674625516, 0.00021949532498377364],
    [0.00043952150736004114, 0.00043952149320897676],
    [0.0006333151832222939, 0.0006333151408864353],
    [0.001115123275667429, 0.0011151230445582744],
    [0.001962467096745968, 0.0019624658370807177],
    [0.005553754046559334, 0.005553725496786973],
    [0.008691128343343735, 0.008691018931968294],
    [0.02993336319923401, 0.02992889492062484],
    [0.05124260485172272, 0.05122020579778827],
    [0.11201295256614685, 0.1117800293787828],
    [0.23480379581451416, 0.23269806521543376],
    [0.4898730516433716, 0.4721357117742938],
    [0.7518312931060791, 0.694611571189336],
    [1.655740737915039, 1.2781607348262256],
    [3.5958566665649414, 1.9917262343245115],
    [3.662705421447754, 2.009484184971722],
    [4.142845153808594, 2.128787712416205],
    [5.957065582275391, 2.4846967934155475],
    [10.890350341796875, 3.083125584533294],
    [27.3714599609375, 4.002981567623351],
    [29.58606719970703, 4.080736210902826],
    [30.79753875732422, 4.120845430011113],
    [38.78157043457031, 4.351258506393416],
    [46.88148498535156, 4.540883728536112],
    [47.21551513671875, 4.547981853382592],
    [47.2205810546875, 4.5480891170767],
    [49.72361755371094, 4.599728302509061],
    [61.557464599609375, 4.8131842711857535],
    [67.82162475585938, 4.910082619934558],
    [68.82363891601562, 4.924747230639767],
    [73.75466918945312, 4.993937439635391],
    [80.95669555664062, 5.087099712053554],
    [85.26406860351562, 5.1389346970196295],
    [85.2677001953125, 5.138977285472121],
    [92.8238525390625, 5.223879832616765],
    [94.50357055664062, 5.241812789460327],
    [116.044677734375, 5.447141014648796],
    [123.77554321289062, 5.511633288238573],
    [132.3592529296875, 5.578681289305598],
    [139.7633056640625, 5.633110296634631],
    [143.9609375, 5.662701238627725],
    [146.31298828125, 5.678906941005323],
    [155.0980224609375, 5.737214893086866],
    [155.47784423828125, 5.739660763047893],
    [155.74066162109375, 5.741349685869528],
    [163.60546875, 5.790614371552514],
    [178.735107421875, 5.879059869096351],
    [179.70269775390625, 5.884458728291027],
    [179.81976318359375, 5.885109945587401],
    [181.3594970703125, 5.893636014368936],
    [194.82861328125, 5.965274032538233],
    [195.23284912109375, 5.967346683696556],
    [199.07666015625, 5.986843466070591],
    [205.77423095703125, 6.019932686217942],
    [206.04608154296875, 6.021252909681261],
    [209.36480712890625, 6.037231102920489],
    [210.703857421875, 6.043606439928324],
    [215.2139892578125, 6.06478541011501],
    [225.83892822265625, 6.112974120371601],
    [226.95465087890625, 6.117902255760311],
    [232.79864501953125, 6.1433256889594094],
    [240.647216796875, 6.176483527820343],
    [243.1324462890625, 6.186757751007361],
    [251.26702880859375, 6.219667373726848],
    [253.72906494140625, 6.229418088083555],
    [254.6866455078125, 6.233184983047428],
    [257.2001953125, 6.243005711460192],
    [257.7401123046875, 6.245102704489327],
    [261.731201171875, 6.260468857392134],
    [263.75, 6.268152459140511],
    [265.5167236328125, 6.2748285545831655],
    [273.9171142578125, 6.305976070434008],
    [278.897705078125, 6.32399546069982],
    [279.167236328125, 6.324961403980197],
    [292.207275390625, 6.370613506132747],
    [293.5975341796875, 6.375359978930309],
    [293.9749755859375, 6.3766447200146],
    [295.1998291015625, 6.380802563199264],
    [297.2799072265625, 6.387824152942429],
    [297.9285888671875, 6.390003820200831],
    [298.1058349609375, 6.3905985680679],
    [300.2803955078125, 6.397866642974941],
    [307.531005859375, 6.421725738171608],
    [308.1754150390625, 6.423818963102848],
    [309.7344970703125, 6.428865255911759],
    [314.2847900390625, 6.443449261058927],
    [314.7236328125, 6.444844602076255],
    [320.8406982421875, 6.464094341970107],
    [321.2459716796875, 6.465356699668166],
    [321.9031982421875, 6.467400466944125],
    [323.457763671875, 6.472218114936839],
    [330.82861328125, 6.4947499213823265],
    [335.008544921875, 6.507305446835735],
    [340.7171630859375, 6.524202033435675],
    [348.4677734375, 6.546694993078936],
    [349.1292724609375, 6.548591493378012],
    [372.4288330078125, 6.613194950203132],
    [376.7574462890625, 6.6247505436339065],
    [378.4306640625, 6.629181796246806],
    [390.9031982421875, 6.6616087711302185],
    [405.7918701171875, 6.698989091751707],
    [407.3646240234375, 6.702857353572475],
    [413.3758544921875, 6.717505881986416],
    [415.7354736328125, 6.723197804327891],
    [417.193603515625, 6.726699007993023],
    [420.874755859375, 6.735483889307782],
    [429.2635498046875, 6.755219602793124],
    [429.756103515625, 6.756366380816258],
    [433.9931640625, 6.766177290841293],
    [434.0106201171875, 6.766217511883346],
    [440.073974609375, 6.780091308338912],
    [450.2220458984375, 6.802889310303153],
    [455.017578125, 6.813484439494547],
    [457.1668701171875, 6.818196843455478],
    [457.5068359375, 6.818940201487998],
    [459.2913818359375, 6.822833193143805],
    [459.492431640625, 6.82327083544577],
    [459.743896484375, 6.823817951018],
    [464.888427734375, 6.834945773756887],
    [464.96630859375, 6.835113285253827],
    [467.6949462890625, 6.840964582694129],
    [468.86767578125, 6.84346890521034],
    [470.5927734375, 6.847141429556457],
    [481.109619140625, 6.869243403190376],
    [487.4595947265625, 6.882355637062964],
    [488.521484375, 6.884531678915821],
    [492.8812255859375, 6.89341643293734],
    [494.0684814453125, 6.895822338701104],
    [496.4613037109375, 6.900653737167637],
    [716.154052734375, 7.2670429692740965],
    [1799.92578125, 8.188647968122073],
    [3564.845703125, 8.872023251113289],
    [7139.869140625, 9.566596912986167],
    [12081.22265625, 10.092554861905608],
    [22810.2421875, 10.728112113864427],
    [46598.96875, 11.442480870715618],
    [108493.375, 12.28759157077177],
    [153860.8125, 12.636950838344218],
    [307019.5, 13.327813723030063],
    [682577.25, 14.126778167009777],
    [1788919, 15.090269265334971],
    [3769169, 15.835512291283944],
    [4327820, 15.973721689554742],
    [11044024, 16.910547205715446],
    [21423208, 17.573132558903225],
    [62828288, 18.649063156437965],
    [70207360, 18.760110887365155],
    [154231424, 19.547111966180875],
    [294509056, 20.193967491567523],
    [1070557184, 21.484592263156223],
    [1957922816, 22.088297141021556],
    [3912507392, 22.780591462699917],
    [7279233024, 23.401438520318692],
    [9665245184, 23.684949498080787],
    [22627590144, 24.5355829820426],
    [60601991168, 25.520740767599584],
    [134018236416, 26.31438890085422],
    [204864946176, 26.73876398039979],
    [284346286080, 27.06660583008718],
    [914576637952, 28.234874284944635],
    [1581915832320, 28.78280496108106]
];

for (var [x, y] of sinh_data)
    assertNear(Math.asinh(x), y);

assertNear(Math.asinh(1e300), 691.4686750787737);
assertNear(Math.asinh(1e-300), 1e-300);
assertNear(Math.asinh(1e-5), 0.000009999999999833334);
assertNear(Math.asinh(0.3), 0.29567304756342244);
assertNear(Math.asinh(1), 0.881373587019543);

for (var i = 0; i <= 80; i++) {
    var x = (i - 40) / 4;
    assertNear(Math.asinh(Math.sinh(x)), x);
}

for (var i = -20; i < 20; i++)
    assertNear(Math.asinh(Math.sinh(i)), i);

