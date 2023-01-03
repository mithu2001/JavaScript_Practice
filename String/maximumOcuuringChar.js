

function getCharString(str){
    const map = {};

    str.split("").forEach(element => {
        map[element] = map[element]?map[element]+1:1;
    });
    // console.log(map);
    let max = 1;
    ch = str[0];
    for(k in map){
        if(map[k]>max){
            max = map[k];
            ch = k;
        }
    }
    return ch;
}
let str = "Rama Setuuuuuu";
const res = getCharString(str);
console.log(res);