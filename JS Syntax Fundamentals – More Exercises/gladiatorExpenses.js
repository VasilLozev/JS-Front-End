function lostFight(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
        let fights = Number(lostFights)
        let helmetDmg = 0
        let swordDmg = 0
        let shieldDmg = 0
        let armorDmg = 0
        let expenses = 0
        for(i=1;i<=fights;i++){
            if (i%2==0){
                helmetDmg++
            }
             if(i%3==0){
                swordDmg++
            }  if(i%2==0 && i%3==0){
                shieldDmg++
            } 
            if(shieldDmg%2==0 && shieldDmg>0 && i%2==0 && i%3==0){
                armorDmg++
            }  
    }
    expenses = helmetPrice * helmetDmg + swordPrice * swordDmg + shieldPrice * shieldDmg + armorPrice * armorDmg
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

lostFight(23,

    12.50,
    
    21.50,
    
    40,
    
    200)