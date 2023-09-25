function solution(phone_number) {
    var answer = [...phone_number].reduce((acc,cur,idx)=>{
        
        return idx<phone_number.length-4?acc=acc+"*":acc=acc+cur
    },'');
    return answer;
}