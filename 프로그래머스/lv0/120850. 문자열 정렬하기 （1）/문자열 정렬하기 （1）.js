function solution(my_string) {
    let arr = my_string.split("");
    let newarr = arr.filter((x)=>{
        let isNum = (/[a-z]/).test(x);
        return !(isNum);
    });

    return newarr.map(x=> Number(x)).sort();
}