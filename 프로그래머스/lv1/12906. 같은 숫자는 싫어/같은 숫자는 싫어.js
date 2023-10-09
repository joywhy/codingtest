function solution(arr)
{
    var answer = arr.filter((el,idx,arr)=> arr[idx-1]!==arr[idx])

   
    return answer;
}