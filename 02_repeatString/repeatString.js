const repeatString = function(word, times) {
    let repeatedString = "";
    if(times>1){
        for(let i = 0; i<times; i++){
            repeatedString+=word;
        }
    }
    else if(times == 0){
        return "";
    }
    else if(times<0){
        return "ERROR";
    }
    else if(word == ''){
        return "";
    }
    else{
        return word;
    }

    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
