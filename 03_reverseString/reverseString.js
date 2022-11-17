const reverseString = function(input_string) {
    //grab the size of string and decrement
    //since we are dealing with index
    let swapCharIndex = input_string.length -1;
    //declare empty string we will add to
    let reversed = "";
    //while loop condition will be when swapCharindex is
    //greater than or equal to zero, then that means we have reached the
    //start of string
    while(swapCharIndex>=0){
        reversed+= input_string[swapCharIndex];
        swapCharIndex--;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
