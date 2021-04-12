function find_max(arr){
    let max=-Infinity;
    let index=0;
    arr.forEach((element,_index) => {
       if(element>max){
           max=element;
           index=_index;
       } 
    });
    return index
}
function _sort(arr){
    let result=[];
    while(arr.length>0){
        result.push(...arr.splice(find_max(arr),1));
    }
    return result;
};
console.log(_sort([2,1,3,4,5,3,2]))
