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
