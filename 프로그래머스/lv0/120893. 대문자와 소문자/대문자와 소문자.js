function solution(my_string) {
    let newarr = my_string.split("");
   return  newarr.map(x=>{
        if(x.match(new RegExp(/^[A-Z]/)) ){
            return x.toLowerCase();
        }else {
             return x.toUpperCase();
        }
    }).join("");
}