/*
 * PROBLEM `checkData`: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
	if (typeof inputString !== 'string') {
		throw 'Invalid Input';
	} else {
		if (inputString.length === 3) {
			return true;
		} else {
			return false;
		}
	}
}
/*
 * PROBLEM `concatenateArrays`: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
	if (typeof a !== 'object' || typeof b !== 'object' 
		|| a.length === 0 || b.length === 0) {
		throw 'Invalid Input';
	}
	for (var i=0; i<a.length;  i++) {
		if ( typeof a[i] !== 'number' || a[i]%1 !== 0) {
			throw 'Invalid Input';
		}
	}
	for (var j=0; j<b.length; j++) {
		if (typeof b[j] !== 'number' || b[j]%1 !== 0) {
			throw 'Invalid Input';
		}
	}
	a = a.concat(b);
	return a;
	// /* or we can do 
	// for (var i=0; i<b.length; i++) {
	//  	a.push(b[i]);
	// }
	//  return a;
//or 
// Array.prototype.push.apply(a,b);
//return a;
	//
}

/*
 * PROBLEM `fixProperNoun`: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	if (typeof noun !== 'string' || noun.length<1 || typeof noun == 'undefined') {
		throw 'Invalid Input';
	} else {
		noun = noun.toLowerCase();
		noun = noun.charAt(0).toUpperCase() + noun.slice(1);
		return noun;
	}
}
/*
 * PROBLEM `sortLetters`: (easy)
 * Write a function called `sortLetters` that returns a string that sorts all 
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
	if (typeof inputString !== 'string' || typeof inputString == 'undefined') {
		throw 'Invalid Input';
	} else {
		inputString = inputString.split('').sort().join('');
	}
	return inputString;
}

/*
 * PROBLEM `absVal`: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	if (typeof integer !== 'number' || integer.length<1 || 
		typeof integer == 'undefined'|| integer%1 !== 0) {
		throw 'Invalid Input';
	} else if (integer < 0) {
		integer = - integer; 
	}
	return integer;
}

/*
 * PROBLEM `myMin`: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function myMin (integer1, integer2) {
 	if (typeof integer1 !== 'number' || integer1.length<1 || 
		typeof integer1 == 'undefined'|| integer1%1 !== 0) {
		throw 'Invalid Input';
	} else if (typeof integer2 !== 'number' || integer2.length<1 || 
		typeof integer2 == 'undefined'|| integer2%1 !== 0) {
		throw 'Invalid Input';
	}else {
		var numbers = [integer1, integer2];
		numbers.sort(integer1>integer2);
		return numbers[0]; 
	}
 }

/*
 * PROBLEM `myMax`: (easy) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */
 function myMax (array) {
    if (array instanceof Array !==true || array.length === 0 || 
        typeof array == 'undefined' || array == null ) {
        throw 'Invalid Input';
    }
    for (var i=0; i<array.length;  i++) {
        if ( typeof array[i] !== 'number' || array[i]%1 !== 0) {
            throw 'Invalid Input';
        }
    }
    for (var i=0; i<array.length; i++){

    }
	array.sort(function(a,b) {return a-b});
	var max = array[array.length-1];
	return max;
 }

/*
 * PROBLEM `getMonth`: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function getMonth (integer) {
	if (typeof integer !== 'number' || typeof integer == 'undefined' 
		|| integer<1 || integer>12 || integer%1 !== 0 ) {
		throw 'Invalid Input';
	} else {
		var months = [ ,'January','February', 'March', 'April', 'May', 'June', 
		'July', 'August', 'September', 'October', 'November', 'December'];
		var month = months[integer];
		return month;
	}
}
/*
 * PROBLEM `randomElement`: (medium)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */
 function randomElement (array) {
 	if (typeof array !== 'object' || array.length === 0 || typeof array == 'undefined') {
		throw 'Invalid Input';
	} else {
		var random = Math.floor(Math.random()*array.length);
		var selected = array[random];
		return selected;
	}
 }

/*
 * PROBLEM `studentPairs`: (medium)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */
 function studentPairs (array) {
	if (typeof array !== 'object' || array.length < 2) {
		throw 'Invalid Input';
	}
	for (var i=0; i<array.length;  i++) {
		if (typeof array[i] !== 'string') {
			throw 'Invalid Input';
		}
	}
	var newArray = [];
	
	while (array.length>0) {
		var pair = [];
		var index1 = Math.floor(Math.random()*array.length);
		var index2 = Math.floor(Math.random()*array.length);
		if (pair.length<2){
			pair.push(array.splice(index1, 1)[0]);
			pair.push(array.splice(index2, 1)[0]);
		}
		newArray.push(pair);
	}
		return newArray;
 }


/*
 * PROBLEM `sumSquares`: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sumSquares (integerN) {
	if (typeof integerN !== 'number' || typeof integerN == 'undefined' 
		|| integerN%1 !== 0) {
		throw 'Invalid Input';
	} else {
		var range = [];
		for (var i=1; i<integerN+1; i++) {
			range.push(i);
		}
		var total = 0;
		for (var j = 0; j<range.length; j++) {
			var squareNum = range[j]*range[j];
			total = total + squareNum;
		}
	}
	return total;
}
/* 
 * PROBLEM `findMaxDiff`: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findMaxDiff (array){
	if (typeof array !== 'object' || typeof array == 'undefined' || array == null || Object.getOwnPropertyNames(array).length === 0) {
		throw 'Invalid Input';
	} else if (array.length<2) {
		return 0;
	}
	for (var i=0; i<array.length;  i++) {
		if ( typeof array[i] !== 'number' || array[i]%1 !== 0) {
			throw 'Invalid Input';
		}
	}
	var diffArray = [];
	for (var i=0; i<array.length-1; i++) {
		var diff = array[i]-array[i+1];
		if (diff<0){
			diff = -diff;
		} 
		diffArray.push(diff);
	}
	diffArray.sort(function(a,b){return a-b});
	var max = diffArray[diffArray.length-1];
	return max;
}
/*
 * PROBLEM `insertDashes`: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function insertDashes (sentence){
	if (typeof sentence !== 'string' || sentence == 'undefined') {
		throw	'Invalid Input';
	} else {
		var newSentence = sentence.split('').join('-');
		//could'n think of better way of replacing '- -' then with RegExpr.
		var a = /- -/g; 
		newSentence = newSentence.replace(a, ' ');
		return newSentence;
	}
}
/* 
 * PROBLEM `mySubstring`mySubstring: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function mySubstring (myString, index1, index2) {
	if (typeof myString !== 'string' || myString == 'undefined' || myString.length<2 
		|| typeof index1 !=='number' || typeof index2 !== 'number' || index2 == 'undefined' 
		|| index1 == 'undefined' || index2%1 !==0) {
		throw	'Invalid Input';
	} else {
		var result = myString.split('').slice(index1,index2+1).join('');
		return result;
	}
}
/*
 * PROBLEM `splitSwap`: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function splitSwap (givenArray) {
	if (givenArray instanceof Array !== true || givenArray == 'undefined') {
		throw	'Invalid Input';
	}
	var half = Math.floor(givenArray.length/2);
	var arraySecondHalf = givenArray.splice(half, givenArray.length-1);
	var result = arraySecondHalf.concat(givenArray);
	return result;
}
/*
 * PROBLEM `smallMultiples`: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function smallMultiples (n, k) {
 	if (typeof n !== 'number' || typeof k !== 'number' || n == 'undefined' 
 		|| k == 'undefined' || isNaN(k) == true) {
 		throw 'Invalid Input';
 	} else {
 		var multiples = 0;
 		for (var i=2; i<n+1; i++) {
 			if (k*i <= n) {
 			multiples++;
 			} 
 		}
 		return multiples;
 	}
 }

/* 
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
function rot13 (unencryptedString) {
	if (typeof unencryptedString !== 'string' || unencryptedString == 'undefined' 
		|| unencryptedString.length<1) {
		throw	'Invalid Input';
	}
	for (var i=0; i<unencryptedString.length; i++) {
		if (unencryptedString.charCodeAt(i) < 97 || unencryptedString.charCodeAt(i) >122) {
			throw 'Invalid Input';
		}
	}
	var charCodeArray = [];
	for (var j=0; j<unencryptedString.length; j++) {
		charCodeArray.push(unencryptedString.charCodeAt(j));
	}
	for (var k =0; k<charCodeArray.length; k++) {
		if (charCodeArray[k]<110) {
			charCodeArray[k] = charCodeArray[k]+13;
		} else if (charCodeArray[k]>109) {
			charCodeArray[k] = charCodeArray[k]-13;
		}
	}
		var newString = String.fromCharCode.apply(String, charCodeArray);
		return newString;
}
/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
function derot13 (encryptedString) {
	return rot13(encryptedString);
}
/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */
function rotn (unencryptedString, n){
	if (typeof unencryptedString !== 'string' || unencryptedString == 'undefined' 
		|| unencryptedString.length<1 || typeof n !=='number' || n>13 || n<1) {
		throw	'Invalid Input';
	}
	for (var i=0; i<unencryptedString.length; i++) {
		if (unencryptedString.charCodeAt(i) < 97 || unencryptedString.charCodeAt(i) >122) {
			throw 'Invalid Input';
		}
	}
	var charCodeArray = [];
	for (var j=0; j<unencryptedString.length; j++) {
		charCodeArray.push(unencryptedString.charCodeAt(j));
	}
	for (var k =0; k<charCodeArray.length; k++) {
		if (charCodeArray[k]<110) {
			charCodeArray[k] = charCodeArray[k]+n;
		} else if (charCodeArray[k]>109) {
			charCodeArray[k] = charCodeArray[k]-n;
		}
	}
		var newString = String.fromCharCode.apply(String, charCodeArray);
		return newString;
}
/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b 
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findBoth (a, b) {
	if (a instanceof Array !==true || a.length === 0 || 
        typeof a == 'undefined' || a == null || 
        b instanceof Array !==true || b.length === 0 || 
        typeof b == 'undefined' || b == null) {
        throw 'Invalid Input';
    }
    for (var i=0; i<a.length;  i++) {
        if (typeof a[i] !== 'number' || a[i]%1 !== 0) {
            throw 'Invalid Input';
        }
    }
     for (var j=0; j<b.length;  j++) {
        if (typeof b[j] !== 'number' || b[j]%1 !== 0) {
            throw 'Invalid Input';
        }
    }
     a.sort(function(a,b){return a-b});
    b.sort(function(a,b){return a-b});
    var result =[];
	while (a.length>0 && b.length>0) {
		if (a[0]<b[0]) {
			a.shift();
		} else if (a[0]>b[0]) {
			b.shift();
		} else {
			result.push(a.shift());
			b.shift();
		}
	}
    return result;
}
/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and 
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function countBoth (a,b) {
	if (a instanceof Array !==true || a.length === 0 || 
        typeof a == 'undefined' || a == null || 
        b instanceof Array !==true || b.length === 0 || 
        typeof b == 'undefined' || b == null) {
        throw 'Invalid Input';
    }
    for (var i=0; i<a.length;  i++) {
        if (typeof a[i] !== 'number' || a[i]%1 !== 0) {
            throw 'Invalid Input';
        }
    }
    for (var i=0; i<b.length;  i++) {
        if (typeof b[i] !== 'number' || b[i]%1 !== 0) {
            throw 'Invalid Input';
        }
    }
    a.sort(function(a,b){return a-b});
    b.sort(function(a,b){return a-b});
    var result =[];
	while (a.length>0 && b.length>0) {
		if (a[0]<b[0]) {
			a.shift();
		} else if (a[0]>b[0]) {
			b.shift();
		} else {
			result.push(a.shift());
			b.shift();
		}
	}
    var length = result.length;
    return length;
}
/* 
 * PROBLEM `isDiagonalMatrix`: (hard)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal 
 * matrix if all entries outside the main diagonal are zero (the diagonal from 
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function isDiagonalMatrix (matrix) {
	if (typeof matrix !== 'object' || matrix.length<1) {
		throw 'Invalid Input';
	}
	for (var i=0; i<matrix.length; i++) {
		if (matrix[i] instanceof Array !== true) {
			throw 'Invalid Input';
		}
	}
	function checkArray (myArray, n) {
	    var myArrayResult = true;
	    for (var k=0; k<myArray.length; k++) {
	    	if (k!==n && myArray[k]!==0) {
	            myArrayResult = false;
	       }
	    }
		return myArrayResult;
		}
	var res =[];
	for (var j=0; j<matrix.length; j++) {
		var innerArray = matrix[j];
		res.push(checkArray(innerArray, j));
	}
	if (res.every(function(arg) {return arg==true})) {
			return true;
	} else { return false } 
}
/*
 * PROBLEM `isAnagram`: (hard) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal 
 * lengths arr1 and arr2. The function should return a new array of the same 
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function isAnagram (arr1, arr2) {
	if (typeof arr1 !== 'object' || arr1.length<2 || typeof arr2 !== 'object' 
		|| arr2.length<2 || arr1.length !== arr2.length) {
		throw 'Invalid Input';
	}
	var result = [];
	for (var i=0; i<arr1.length, i<arr2.length; i++) {
		arr1[i] = arr1[i].split('').sort().join('');
		arr2[i] = arr2[i].split('').sort().join('');
		if (arr1[i] !== arr2[i]) {
			result.push(false);
		}
		else { result.push(true); } 
	}
	return result;
}
/*
 * PROBLEM `validateParentheses`: (hard) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function validateParentheses (stringOfParentheses) {
	if (typeof stringOfParentheses !== 'string' || stringOfParentheses == 'undefined') {
		throw 'Invalid Input';
	}
	for (var i=0; i<stringOfParentheses.length; i++) {
		if (stringOfParentheses.charCodeAt(i) >96 && stringOfParentheses.charCodeAt(i) <123) {
			throw 'Invalid Input';
		}
	}
	var parentheses = '[]{}()';
	var myArray = [];
	// for (var j=0; j<stringOfParentheses.length; j++) {
	// 	if 
}
/* 
 * PROBLEM `flattenArray`: (hard) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */
function flattenArray (myArray) {
	if (myArray instanceof Array !==true || myArray.length === 0 || 
        typeof myArray == 'undefined' || myArray == null) {
        throw 'Invalid Input';
    }
	// for (var i=0; i<myArray.length; i++) {
		// if (myArray[i] instanceof Object == true) {
		// 	var objectElement = myArray.splice(i,1);
		// 	console.log(objectElement);
		// // } else {
			// var flat = [].concat.apply([], myArray);
			// return flat;
	// 	}
	// }
}


