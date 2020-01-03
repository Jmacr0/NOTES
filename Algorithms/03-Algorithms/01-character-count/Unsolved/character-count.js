// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    const charObj = {};

    for(char of str){
        if(char in charObj){
            charObj[char]++
        }
        else {
            charObj[char] = 1;
        }
    }
    return charObj;
};
