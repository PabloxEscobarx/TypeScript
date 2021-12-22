const arr = [1, 2, 3, -1, -2, -3];
function filterArr (array:number[]){
    const exampleArr:number[] = []
    if(array.length ===0) return "array is empty";
    for(let i of array){
        if(i>0){
            exampleArr.push(i)
        }
    }   
    if (exampleArr.length >0) {
        return exampleArr
    }
        else{
            return null
        }
};

console.log(filterArr(arr));