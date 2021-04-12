function  binary_search(list,item) {
    let low=0;
    let high=list.length-1;//low和high表示查找的范围
    while (low<=high) {//只要范围没缩减到一个就继续查找
        let mid=Math.floor((low+high)/2);//每次取范围的中位元素于参数二比较
        let guess=list[mid];
        if(guess<item){
            low=mid+1;
        }else if(guess>item){
            high=mid-1
        }else if(guess==item){
            return mid;
        }
    };
    return null
}

