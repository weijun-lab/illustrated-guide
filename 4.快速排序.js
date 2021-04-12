function quick_sort(arr){
    if(arr.length<2){//基线条件
        return arr;
    }else{
        let base=arr[0]//取0号元素作为基准值
        let min=[];//小于基准值放入这个数组
        let max=[];//大于基准值放入这个数组
        for(let i=1;i<arr.length;i++){//循环比较时记得别让基准值和自身比较
            let el=arr[i];
            el>base?max.push(el):min.push(el)
        };
        return [...quick_sort(max),base,...quick_sort(min)]
    }
}

