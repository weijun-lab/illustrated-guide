let treeData = [{
    label: '一级 1',
    children: [{
        label: '二级 1-1',
        children: [{
            label: '三级 1-1-1'
        }]
    }]
}, {
    label: '一级 2',
    children: [{
        label: '二级 2-1',
        children: [{
            label: '三级 2-1-1'
        }]
    }, {
        label: '二级 2-2',
        children: [{
            label: '三级 2-2-1'
        }]
    }]
}, {
    label: '一级 3',
    children: [{
        label: '二级 3-1',
        children: [{
            label: '三级 3-1-1'
        }]
    }, {
        label: '二级 3-2',
        children: [{
            label: '三级 3-2-1'
        }]
    }]
}];

// 递归遍历树
// function readNodes(treeData,result=[]){
//     for(let i=0;i<treeData.length;i++){
//         result.push(treeData[i].label)
//         if(treeData[i].children){
//            return  readNodes(treeData[i].children,result)
//         }
        
//     };
//     return result;
// }


//数组求和
function sum(arr){
    let i=arr.length;
    if(!i){
        return 0
    }else{
        //1 sum([])=>0
        //2 sum([1])=>1
        //3 sum([1,2])=>2  
        return arr[i-1]+sum(arr.slice(0,-1));
    }
}


//实现1-100累加
function _add(num){
    if(num==0){
        return num
    }else{
        return num+=_add(num-1)
    }
    
}