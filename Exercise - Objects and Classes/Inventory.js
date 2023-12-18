function register(arr){
    let hero = {}
    let heroes = []
    for (const data of arr) {
        let arrData = data.split(' / ')
        let Hero = arrData[0]
        let level = arrData[1]
        let items = arrData[2]
        hero = {Hero,level,items}
        heroes.push(hero)
    }
    heroes.sort((a,b) => a.level - b.level)
    for (const hero of heroes) {
        console.log(`Hero: ${hero.Hero}
level => ${hero.level}
items => ${hero.items}`)
    }
}

register([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    
    'Poppy / 28 / Sentinel, Antara'
    
    ])