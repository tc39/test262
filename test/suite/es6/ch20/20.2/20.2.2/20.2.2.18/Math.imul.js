/*
Copyright (c) 2014, nebu@nebupookins.net All rights reserved. Redistribution
and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors
   may be used to endorse or promote products derived from this software without
   specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/**
 * Tests for the specification of Math.imul
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.imul
 * @author Nebu Pookins (nebupookins@gmail.com)
 */
(function() {
	var TWO_TO_THE_THIRTY_ONE = 2147483648;
	var TWO_TO_THE_THIRTY_TWO = 4294967296;


	function assert(claim, msg) {
		if (!claim) {
			$ERROR(msg);
		}
	}

	/**
	 * Manual implementation of the abstract operation ToNumber, as per the
	 * spec https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tonumber
	 */
	function manualToNumber(arg) {
		/*
		 * TODO: The spec talks about completion records; I don't think we can
		 * explicitly handle those.
		 */
		if (arg === undefined) {
			return NaN;
		}
		if (arg === null) {
			return 0;
		}
		if (arg === true) {
			return 1;
		}
		if (arg === false) {
			return 0;
		}
		if (typeof arg === 'number') {
			return arg;
		}
		if (typeof arg === 'string') {
			throw new Error('TODO: not implemented yet: String')
		}
		if (typeof arg === 'symbol') {
			return NaN;
		}
		if (typeof arg === 'object') {
			throw new Error('TODO: not implemented yet: Object')
		}
		throw new Error('TODO: not implemented yet. Type: ' + typeof arg);
	}

	/**
	 * Manual implementation of the mathematical function sign, as per the spec
	 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-algorithm-conventions
	 *
	 * The mathematical function sign(x) produces 1 if x is positive and −1 if x
	 * is negative. The sign function is not used in this standard for cases when
	 * x is zero.
	 */
	function manualSign(x) {
		if (x > 0) {
			return 1;
		}
		if (x < 0) {
			return -1;
		}
		if (x === 0) {
			throw new Error("Specification says this is 'not used'.");
		}
	}

	/**
	 * Manual implementation of the mathematical function abs, as per the spec
	 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-algorithm-conventions
	 *
	 * The mathematical function abs(x) produces the absolute value of x, which is
	 * −x if x is negative (less than zero) and otherwise is x itself.
	 */
	function manualAbs(x) {
		if (x < 0) {
			return -x;
		} else {
			return x;
		}
	}

	/**
	 * Manual implementation of the mathematical function floor, as per the spec
	 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-algorithm-conventions
	 *
	 * The mathematical function floor(x) produces the largest integer (closest to
	 * positive infinity) that is not larger than x.
	 */
	function manualFloor(x) {
		/*
		 * TODO: Note that I suspect the behaviour of Math.floor, and the behaviour
		 * specified above, differ slightly, in the case where x is larger than
		 * 2^32.
		 */
		if (x > 4294967296) {
			throw new Error("TODO: Not implemented");
		}
		if (x <- 4294967296) {
			throw new Error("TODO: Not implemented");
		}
		return Math.floor(x);
	}


	/**
	 * Manual implementation of the mathematical operator modulo, as per the spec
	 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-algorithm-conventions
	 *
	 * The notation “x modulo y” (y must be finite and nonzero) computes a value k
	 * of the same sign as y (or zero) such that abs(k) < abs(y) and x−k = q × y
	 * for some integer q.
	 */
	function manualModulo(x, y) {
		if (!Number.isFinite(y)) {
			throw new Error("y must be finite.");
		}
		if (y === 0) {
			throw new Error("y must be nonzero.");
		}
		/*
		 * NOTE: the JS % operator does not have the same semantics as the contract
		 * above. For example, the above semantics say 13 modulo -10 === -7, but in
		 * JS, 13 % -10 === 3.
		 */
		var k = x % y;
		if (y < 0) {
			k = k + y;
		}
		if (k !== 0 && manualSign(k) !== manualSign(y)) {
			throw new Error("k "+k+" and y "+y+" must have the same sign.");
		}
		if (manualAbs(k) >= manualAbs(y)) {
			throw new Error("abs(k) < abs(y) must be true.");
		}
		return k;
	}

	//Some sanity checks on our implementation of manualModulo
	(function() {
		assert(manualModulo(26,10) === 6);
		assert(manualModulo(13,-10) === -7);
	})();

	/**
	 * Manual implementation of the abstract operation ToUint32, as per the
	 * spec https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	 *
	 * The abstract operation ToUint32 converts its argument to one of 232 integer
	 * values in the range 0 through 232−1, inclusive. This abstract operation
	 * functions as follows:
	 *
	 * Let number be the result of calling ToNumber on the input argument.
	 * ReturnIfAbrupt(number).
	 * If number is NaN, +0, −0, +∞, or −∞, return +0.
	 * Let int be sign(number) × floor(abs(number)).
	 * Let int32bit be int modulo 232.
	 * Return int32bit.
	 */
	function manualToUint32(arg) {
		var num = manualToNumber(arg);
		if (Number.isNaN(num) || num === 0 || num === Infinity || num === -Infinity) {
			return 0;
		}
		var i = manualSign(num) * manualFloor(manualAbs(num));
		var int32bit = manualModulo(i, TWO_TO_THE_THIRTY_TWO);
		return int32bit;
	}

	assert(typeof Math.imul === 'function', 'Math.imul should be a function.');

	//Function test very simple case
	(function() {
		assert(Math.imul(5,7) === 35);
	})();

	//ToUint32 does (unsigned) flooring, and Math.imul uses ToUint32, so it should also floor.
	(function() {
		assert(Math.imul(5.99,7.99) === 35);
	})();

	//Negative factors
	(function() {
		/*
		 * Negative factors are kind of complicated. Let's do Math.iMul(3, -5).
		 * First, we'd convert each one to UInt32. 3 is 3, but -5 becomes
		 * 4294967291, (i.e. 2^32 - 5). We then perform the multiplication,
		 * 3 * 4294967291 = 12884901873. Then, we take 12884901873 modulo
		 * 4294967296 = 4294967281. Finally, because 4294967281 >= TWO_TO_THE_THIRTY_ONE,
		 * we the final answer is the negative -4294967281.
		 */
		assert(Math.imul(3, -5) === -4294967281);
	})();
})();
