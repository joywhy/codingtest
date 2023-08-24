function solution(num_list) {
 const multiply = num_list.reduce((acc, cur, idx) => { return acc =acc* cur; });
    
    const sum = num_list.reduce((acc, cur, idx) => { return acc =acc+ cur; });
    const result =  multiply< sum*sum?1:0;
    return result;
}