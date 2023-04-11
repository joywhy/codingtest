function solution(my_string, num1, num2) {
  let newarr = my_string.split("");
    let savenum = newarr[num1];
    newarr[num1]= newarr[num2];
    newarr[num2]= savenum;
    return newarr.join("");
    
}