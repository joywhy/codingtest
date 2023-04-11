function solution(n, numlist) {
  return numlist.filter((x)=>{
      return x%n===0;
  });
}