function solution(numbers, direction) {
    let num = numbers.length;
   return (direction==="right"? [numbers[num-1],...numbers.slice(0,-1)]:[...numbers.slice(1),numbers[0]]);
}