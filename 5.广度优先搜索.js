// 实现图
let graph = {};
graph.me = ["alice","bob","claire"];
graph.bob = ["anuj","peggy","claire"];
graph.alice = ["peggy"];
graph.claire = ["thom","jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

// graph.me = ["alice"];
// graph.bob = ["alice"];
// graph.alice = ["bob"];


function isMangoSe(name){
    return name.slice(-1)=="m"
}
//在图里到距离我关系最近的芒果经销商
function findMangoSe(graph,perform=[]){
    let searchQueue=graph.me;
    while(searchQueue.length){//只要队列不为空
        let first = searchQueue[0];
        if(!perform.includes(first)){//对已经被检查过的人 不再检查，否则如果使用类似图2数据会导致死循环
            if(isMangoSe(first)){//是芒果经销商直接返回
                return first;
            }else{//不是 将这个人的所有朋友放到队列
                searchQueue.push(...graph[first]);
            };
            perform.push(first);//将验证完的人放到记录数组中
        };
        let index = searchQueue.findIndex(name=>name==first);
        searchQueue.splice(index,1)//从队列删除刚刚被检查的人
    };
    return null
}
console.log(findMangoSe(graph))
