var i = 10;
while(true){
    // if (true){
    //     console.log("a");
    //     break;
    // }
     if(judge(i.toString(10)) && judge(i.toString(2))  && judge(i.toString(8))){
                 console.log(i);
                 break;
     }
     i++;
}

 function judge(data){
     return data == data.toString().split("").reverse().join("");
 }
// for ( var i = 10 ; i < 10000 ; i++ ){
//     if(judge(i) != false){
//         if(judge(i.toString(2)) != false){
//             if(judge(i.toString(8)) != false){
//                 console.log(i);
//             }
//         }
//     }
// }
//
// function judge(data){
//     var tmp;
//     tmp = data.toString().split("").reverse().join("");
//     if(tmp == data){
//         return true;
//     }else{
//         return false;
//     }
// }
