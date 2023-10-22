function solution(num_list, n) {
    var answer = num_list.filter((el,idx)=>idx>=n-1)
    return answer;
}