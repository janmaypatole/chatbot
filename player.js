class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }

getCount (){
var playercountref = database.ref("playerCount")
playercountref.on("value",function(data){
 playerCount = data.val()    
})
}

updateCount(count){
 database.ref("/").update({
 playerCount:count  
 })   
}

update(){
var playerindex = "player/player"+this.index
database.ref(playerindex).set({
name:this.name, 
distance:this.distance
})
}

static getplayerinfo(){
    var inforef = database.ref("Player")
    inforef.on("value",function(data){
    allplayers = data.val()
})   
}
}