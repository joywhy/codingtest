function solution(s){
    var answer = true;

    const Pnum = [...s].reduce((acc,cur)=>{
        if (cur==="P"|| cur==="p"){
            return acc=acc+1;
        } return acc;
    },0)
     const Ynum = [...s].reduce((acc,cur)=>{
        if (cur==="Y"|| cur==="y"){
            return acc=acc+1;
        } return acc;
    },0)
     console.log(Pnum,Ynum);
    return Pnum ===Ynum?true:false;
}