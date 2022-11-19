const removeFromArray = function(arrList,removeElement1) {
    //how to access args: arguments[i];

  
        //want to store paramters excluding array into a a separate array
        let removals = [];
        let newArr = [];
        let index = 0;
        for(let i = 1; i<arguments.length; i++){
            removals[index] = arguments[i];
            index++;
        }
        // loop through removal elememnts and see if they equal
        // to any of the elements inside of the array
        arrList.forEach(element => {
            if(!removals.includes(element)){
                newArr.push(element);
            }
        });
        
    
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
