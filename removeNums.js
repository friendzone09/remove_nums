let nums = [0,0,0,1,2,2,2,2,3,3,3,3,4];

function removeDuplicateNums(arrayNums){

    if(arrayNums.length == 0) return 0;

    let i = 0;

    for(let j =1; j < arrayNums.length; j++){
        if(arrayNums[i] != arrayNums[j]){
            i++;
            arrayNums[i] = arrayNums[j];
        }
    }

    return i + 1;

}

let k = removeDuplicateNums(nums);

console.log(`k = ${k}`);

console.log(`Array ordenado: [${nums}]`)