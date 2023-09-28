function solution(s) {
   if(s.length%2===0){
       let halfN = s.length/2;
       return s.substr(halfN-1,2);
   }else{
       let halfN = Math.floor(s.length/2);
       return s[halfN];
   }
}