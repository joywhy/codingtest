function solution(sizes) {
    //[[]] 2차원 배열을 정렬 a-b 후 sizes[n][0] 들의 최댓값  sizes[n][1]  최댓값 
    let sortsizes = sizes.map((x,idx,arr)=>{
        if(x[0]<x[1]){
            return [x[1],x[0] ];
        }else{
            return x;
        }
    });
    
    const firstMax = Math.max(...sortsizes.map((x,idx,arr)=>{return x[0];}));
    const secondMax = Math.max(...sortsizes.map((x)=>{return x[1]}));
    
    return firstMax*secondMax;
    
}