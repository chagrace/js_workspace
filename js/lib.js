function dan(n){
    for(let i = 1; i <= 9; i++){
        document.write(n + "*" + i + " = " + n*i);
        document.write("<br>");
    }
}


//맥스값까지의 랜덤한 값 구하기.
function getRandom(max){

    let n = (max+1)*Math.random();
    n = parseInt(n);
    return n;
}

function getRandomByRange(min, max){
    let result = min + getRandom(max-min);
    return result;
}