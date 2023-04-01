function solution(str1, str2) {
    //입 문자열 str1, str2 
    //출  있다면 1 없으면 2 
    // replace ?  정규식 

     if (str1.match(str2)) {
      return 1;
   
    } else {
       return 2;
    }
}