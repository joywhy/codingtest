function solution(n) {
 
    const str = String(n);
    const mapfn = (arg) => Number(arg);
    const newArr = str.split('').map(mapfn);
        
        return newArr.reduce((acc,cur)=> acc+cur);
    }