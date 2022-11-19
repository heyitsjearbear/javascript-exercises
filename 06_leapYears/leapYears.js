const leapYears = function(leap) {
    if(leap % 4 == 0 ){
        if(leap%100==0){
            if(leap%400==0){
                return true;
            }
            return false;
        }
        return true;

    }
    else if(leap%400==0){
        return true;
    }
    return false;
};
// Do not edit below this line
module.exports = leapYears;
