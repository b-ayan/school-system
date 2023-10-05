
//First way using for 
function square(array){
    var newArray=[];
    for(i=0;i<array.length;i++){
        newArray.push(Math.pow(array[i],2)) ;
    }
    return newArray;
};


var passedArray=[1,2,3,4,5,"bayan"];
var newArr=square(passedArray);
console.log(newArr);

//Second way using forEach
var eachArray =[]
passedArray.forEach((element) =>  eachArray.push(Math.pow(element,2)))
console.log(eachArray);

//Third way using map 
var mapArr = passedArray.map(sq);
console.log(mapArr);

function sq(num){
    return (num*num);
};


function oddEven(num){
    if (num%2==0){
        return "even";
    }
    else if (isNaN(num)){
        return "N/A";
    }
    else if (num%2 != 0){
        return "odd"
    };


}

var eoArr=passedArray.map(oddEven);
console.log(eoArr);



function fizzbuzz(array){
    var outArr=[]
    array.forEach((element)=>{
        if (element%3==0)
        outArr.push("fuzz");
        else if (element%5==0)
        outArr.push("buzz");
        else outArr.push(element);
    })

    return outArr;

}
var inArr=[1,3,5,9,10,7];
var fizzbuzzArr= fizzbuzz(inArr);
console.log(fizzbuzzArr);