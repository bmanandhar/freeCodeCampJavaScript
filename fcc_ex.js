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

//longest word
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
