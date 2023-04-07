function solution(rsp) {
    //가위 2 바위 0보 5
    //바위0<- 가위2 <-  보 5<- 바위
    
    let arr = rsp.split("");
    
    return arr.map((x)=>{
        if(x==="0"){
            return "5";
        }else if(x==="2"){
            return "0";
        }else{
            return "2";
        }
        
    }).join("");
}