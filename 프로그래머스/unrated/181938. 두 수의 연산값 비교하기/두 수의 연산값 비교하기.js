function solution(a, b) {
 let num = String(a)+String(b);
    let num2 = 2*a*b;
    
    if(Number(num)>=num2){
        return Number(num);
    }else{
        return num2;
    }
}