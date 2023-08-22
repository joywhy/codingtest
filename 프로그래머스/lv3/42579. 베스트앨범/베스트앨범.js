function solution(genres, plays) {
    const answer = [];
    const genreMap = new Map(); // { 장르: 총 재생횟수 }
    const countMap = new Map(); // { 장르: [[고유번호, 재생횟수], [고유번호, 재생횟수], ...] }
    // 장르의 총 재생횟수를 저장
    genres.forEach((genre, idx) => {
        const cnt = genreMap.get(genre);
        genreMap.has(genre) 
            ? genreMap.set(genre, cnt+plays[idx]) 
            : genreMap.set(genre, plays[idx]);
    });
    // 각 장르별 고유 번호와 재생횟수 배열을 저장
    genres.forEach((genre, idx) => {
        if (countMap.has(genre)) {
            const arr = countMap.get(genre);
            arr.push([idx, plays[idx]]);
            countMap.set(genre, arr);
        } else {
            countMap.set(genre, [[idx, plays[idx]]]);
        }
    });
    // 총 재생횟수를 저장한 Map을 내림차순으로 정렬
    const genreMapToArr = [...genreMap].sort((a,b) => b[1]-a[1]);
    const sortGenreMap = new Map(genreMapToArr);
    // 정렬한 Map을 순회하여 value 값인 배열을 할당하고 정렬한 뒤 2개를 자르기
    for (const [key, val] of sortGenreMap) {
        const countArr = countMap.get(key).sort((a,b) => b[1]-a[1]);
        const sliceArr = countArr.slice(0, 2);
        sliceArr.forEach(val => answer.push(val[0]));
    }
    
    return answer;
}