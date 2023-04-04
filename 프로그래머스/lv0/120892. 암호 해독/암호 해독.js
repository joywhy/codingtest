function solution(cipher, code) {
    let newarr = cipher.split("");
return  newarr.filter((x,idx)=>{
    console.log(idx%code);
    return ((idx+1)%code===0);
    
}).join("");
}