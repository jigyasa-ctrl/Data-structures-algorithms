function flipCoins(n) {
    let coins = new Array(n).fill('H');
    for(let round=2; round<=n; round++) {
        for(let item=0; item<=coins.length-1;item++){
            if(item !== 0){
              if( (item+1) % round == 0){
                 coins[item] = coins[item] == "H" ? "T" : "H"
            }  
            } 
        }
        // console.log(coins)
        
    }
    return coins.filter((item) => item == "T").length
}

console.log(flipCoins(2))