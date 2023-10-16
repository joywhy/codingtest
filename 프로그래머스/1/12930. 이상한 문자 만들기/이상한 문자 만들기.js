function solution(s) {
    let arr = s.split(" ");
    
    return arr.map((el,idx)=>{
      let Arr= [...el];
        for(let i = 0;i<Arr.length; i++){
            if(i%2===0){
                Arr[i]= Arr[i].toUpperCase();
            }else{
                Arr[i]= Arr[i].toLowerCase()
            }
        }
        return Arr.join("");
    }).join(" ")
}