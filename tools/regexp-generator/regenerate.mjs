// From unicode-property-escapes-tests 
// https://github.com/mathiasbynens/unicode-property-escapes-tests/blob/60f2dbec2b2a840ee67aa04dbd3449bb90fd2999/regenerate.js
import regenerate from 'regenerate';

const toHex = (codePoint) => {
	return '0x' + ('00000' + codePoint.toString(16).toUpperCase()).slice(-6);
};

regenerate.prototype.isEmpty = function() {
	return this.data.length === 0;
};

regenerate.prototype.toTestData = function() {
	const data = this.data;
	// Iterate over the data per `(start, end)` pair.
	let index = 0;
	const length = data.length;
	const loneCodePoints = [];
	const ranges = [];
	while (index < length) {
		let start = data[index];
		let end = data[index + 1] - 1; // Note: the `- 1` makes `end` inclusive.
		if (start == end) {
			loneCodePoints.push(start);
		} else {
			ranges.push([start, end]);
		}
		index += 2;
	}
	return [ loneCodePoints, ranges ];
};

const LOW_SURROGATES = regenerate().addRange(0xDC00, 0xDFFF);

regenerate.prototype.toTestCode = function() {
	const lowSurrogates = this.clone().intersection(LOW_SURROGATES);
	if (lowSurrogates.isEmpty()) {
		return prettyPrint([...this.toTestData()]);
	}
	const rest = this.clone().remove(LOW_SURROGATES);
	const [ lowLoneCodePoints, lowRanges ] = lowSurrogates.toTestData();
	const [ loneCodePoints, ranges ] = rest.toTestData();
	loneCodePoints.unshift(...lowLoneCodePoints);
	ranges.unshift(...lowRanges);
	return prettyPrint([ loneCodePoints, ranges ]);
};

const prettyPrint = ([ loneCodePoints, ranges ]) => {
	const indent = '  '; // Test 262 uses two-space indents.
	loneCodePoints = loneCodePoints.map((codePoint) => toHex(codePoint));
	ranges = ranges.map(
		(range) => `[${ toHex(range[0]) }, ${ toHex(range[1]) }]`
	);
	const loneCodePointsOutput = loneCodePoints.length ?
		`[\n${indent}${indent}${ loneCodePoints.join(`,\n${indent}${indent}`) }\n${indent}]` :
		`[]`;
	const rangesOutput = ranges.length ?
		`[\n${indent}${indent}${ ranges.join(`,\n${indent}${indent}`) }\n${indent}]` :
		`[]`;
	return `{\n${indent}loneCodePoints: ${ loneCodePointsOutput },\n${indent}ranges: ${ rangesOutput }\n}`;
};

export default regenerate;
