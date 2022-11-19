const sumAll = function(int1,int2) {
    
    if(!Number.isInteger(int1) || !Number.isInteger(int2)){
        return "ERROR";
    }
    if(int1<0 || int2<0){
        return "ERROR";
    }

    let max;
    let min;
    if(int1>int2){
        max = int1;
        min = int2;
    }
    else{
        max = int2;
        min = int1;
    }
    let sum = 0;
    for(let i = min; i<max+1; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
