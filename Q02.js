var card = [];

var iniv = 1;

var incrmnt = 2;

//枚数
var cnt = 100;

//反転処理
function reverse(cardList,inivalu,incrmntvalu){
    while(inivalu < cnt){
        cardList[inivalu] = !cardList[inivalu];
        inivalu = inivalu + incrmntvalu;
    }
}
//カード初期化
for(var i = 0; i < cnt ; i++ ){
    card[i] = false; 
}

while(iniv <= cnt){
    reverse(card,iniv,incrmnt);
    iniv++;
    incrmnt++;
}
//出力
for(var v in card){
    if(card[v] == false){
        console.log(Number(v)+1);
    }
}

