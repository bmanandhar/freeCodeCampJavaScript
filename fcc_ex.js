//Just a line comment
/*
Multiline or block comment
example
*/
//example of variable
var ourName;

//define myName below this Multiline
var myName;

//setup
var a;
var b = 2;

//Only change code below this ljne
a = 7;
b = a;

//example
var ourVar = 19;

// Only change code below this Multiline
var a = 9;

//Initialize these three variables
var a = 5;
var b = 10;
var c = "I am 'a'";

//Do not change code below this Multiline
a = a + 1;
b = b + 5
c = c + " String!";

//Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var sum = 10 + 10;
var difference = 45 - 33;
var product = 8 * 10;
var quotient = 66 / 33;
var myVar = 87;

//Only change code below this line
myVar ++;

//Only change code below this line
var myVar = 11;

//Only change code below this line
myVar --;

var ourDecimal = 5.7;
var product = 2.0 * 2.5;
var quotient = 4.4 / 2.0

//Only change code below this line

var remainder = 11 % 3;

var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;
//Only modify code below this line
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

function convertToF(celsius) {
    var fahrenheit;
    fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}
console.log(convertToF(30) == 86); //expected true

//Above this line already pushed to gitHub 'https://github.com/bmanandhar/fcc_javascript_ex/blob/master/fcc.js'





//Below this line already pushed to gitHub
//reverse the given string
function reverseString(str) {
    var strReverse = str.split('').reverse().join('');
    return strReverse;
}

console.log(reverseString('hello') == 'olleh');//expected 'true'

//function for factorial
function factorialize(num) {
    var factorial = 1;
    for (var n = 2; n <= num; n ++)
    factorial *= n;
    return factorial;
}

console.log(factorialize(5) == 120); //expected 120(=1*2*3*4*5)

//palindrome
function palindrome(str) {
    var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
    var reverseStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reverseStr;
}
console.log(palindrome('My age is 0, 0 si ega ym.'));
console.log(palindrome('abcdXdcba'));

//length of the longest word
function findLongestWord(str) {
    var splitWord = [];
    var longest = 0;
    splitWord = str.split(' ');
    for (var i = 0; i < splitWord.length; i++) {
        if (splitWord[i].length > longest) {
            longest = splitWord[i].length;
        }
    }
    return longest;
}
console.log(findLongestWord('the quick brown fox jumped over the lazy dog'));

//titleCase
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(' ');
}
console.log(titleCase("I'm a little tea pot"));

//greatest player number
function greatestPlayerNumber(x){
    var greatest = x[0];
    for (var i = 1; i < x.length; i ++) {
        if (x[i] > greatest) {
            greatest = x[i];
        }
    }
    return greatest
}
console.log(greatestPlayerNumber([[0, 1, 7, 1],[3, 5, 11, -1],[0, 1, 9, 3]]))
