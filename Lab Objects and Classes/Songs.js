function type(arr){
    let songs = []
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }
    let number = arr[0]
    for (let i = 1; i <= number; i++) {
        [typeList, name, time] = arr[i].split('_');
        songs.push(new Song(typeList, name, time))        
    }
    if(arr[arr.length-1] == "all") 
    {
        for (const song of songs) {
            console.log(song.name)
        }
    }
    for (const song of songs) {
        if(song.typeList == arr[arr.length-1])
        console.log(song.name)
    }
}

type([2,

    'like_Replay_3:15',
    
    'ban_Photoshop_3:48',
    
    'all'])