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

//example
var firstName = 'Alan';
var lastName = 'Turing';

//Only change code below this line
var myFirstName = "Elizabeth";
var myLastName = "Green";

var myStr = "I'm a \"double quoted\" string inside \"double quotes\".";// change this line
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
var myStr = "FirstLine\n\\SecondLine\\\rThirdLine";// Change this line
//Example
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start. " + "This is the end.";

var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence.";
myStr += "This is the second sentence.";

var ourName = "Free Code Camp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Jack";
var myStr = "I am " + myName + ", a good programmer.";

var anAdjective = "awesome!";
ourStr += anAdjective;

var someAdjective = "good";
var myStr = "Learning to code is ";
myStr += someAdjective;

var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

var newStr = myStr.slice(1);

myStr = 'H' + newStr;

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";
var lastLetterOfFirstName = lastName[lastName.length - 1];

var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//Functions
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "My " + myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));//Expected: My big dog ran very quickly.

var ourArray = ["john", 23];
var myArray = ["Bill", 14];

var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [[2, "house"], ["dog", "cat"]];

var ourArray = [1, 2, 3];
var ourData = ourArray[0]; // equals 1 (from above var)

var myArray = [1, 2, 3];
var myData;
myData = myArray[0];

var ourData = myArray[0];

var ourArray = [1, 2, 3];
ourArray[1] = 3; // ourArray now equals [1, 3, 3].

myArray[0] = 3;

var myArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
//ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); // myArray now equals [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
//removedFromOurArray now equals [1, 2]

var myArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

var myArray = [["John", 23], ["dog", 3]];
myArray.unshift(["Paul", 35]);
// myArray now equals [["Paul", 35], "Stimpson", "J", ["cat"]];

var myList = [["Sean", 59], ["Paula", 3], ["canada", 4, "China", 4], ["Patty", 5, "John"], ["Mexico", 8]];

//example
function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();
//
function ourReusableFunction() {
    console.log("Hi World");
}
ourReusableFunction();
//
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 3); //Outputs 7
//
function ourFunctionWithArgs(a, b) {
    console.log(a + b);
}
ourFunctionWithArgs(1, 2); // Outputs 3
//
var myGlobal = 10;
function fun1() {
    //Assign 5 to oopsGlobal here
}
var oopsGlobal = 5;
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
//
function myLocalScope() {
    'use strict';
    var myVar = 99;
    console.log(myVar)
}
myLocalScope();
//Run and check the console
//myVar is not defined outside of myLocalScope
//Try with and without console.log(myVar)

var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "Sweater";
    return outerWear;
}
myOutfit();
//
function minusSeven(num) {
    return num - 7;
}
//
function timesFive(num) {
    return num * 5;
}
//
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10)
//var changed now equals 5 (=(10+5)/3), originally it was 0

var processed = 0;
function processArg(num) {
    return (num + 3)/5;
}
processed = processArg(7);// var processed now equals 2(=(7+3)/5), originally it was 0








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
