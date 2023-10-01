function solution(s) {
  if((s.length!==4) &&( s.length!==6)){
      return false  
  }
    let error =false;
 [...s].forEach(el=>{
        let num =isNaN(el);
         if(num){
             error=true;
    
         } })
   
return error?false:true;
}
