function solution(num_list) {
return num_list.reduce((acc , cur,idx,arr)=>{
    if(arr.length>=11){
        return acc+cur;
    }else{
        return acc*cur;
    }   
});
}