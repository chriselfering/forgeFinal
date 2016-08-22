angular.module('SpoopyDungeon', []);

angular.module('SpoopyDungeon')
    .factory('DungeonFactory', dungeonFactory)

function dungeonFactory (){

    // Define my constructors and data arrays
    var rooms = [];
    var players = [];
    var monsters = [];

    function Player(playerInfo){
        this.name  = playerInfo.name;
        this.class = playerInfo.class;
        this.hp    = 100;
        players.push(this);
    }
    function Monster(monsterInfo){
        this.type  = monsterInfo.type;
        this.hp    = monsterInfo.hp;
        monsters.push(this);
    }

    // Normal Syntax
    // function Room(roomInfo){
    //     this.description = roomInfo.description;
    //     this.items   = roomInfo.items;
    //     this.monster = roomInfo.monster;
    //     this.player  = roomInfo.player
    //     rooms.push(this);
    // }

    // ES6 Syntax
    class Room {
        constructor(roomInfo){
            this.description = roomInfo.description;
            this.items   = roomInfo.items;
            this.monster = roomInfo.monster;
            this.player  = roomInfo.player
            rooms.push(this);
        }
    }

    // You Could Optionally Generate Seed Data!
    // new Monster()

    // Could hold banks of data for random choosings
    var monsterTypes = [
        'Kobold',
        'Beholder',
        'Skeltals',
        'Spoopy Skeltals',
        'Snerks',
        'Undead Telemarketers'
    ]

    return {
        // Constructors
        Player  : Player,
        Monster : Monster,
        Room    : Room,

        // Arrays
        rooms   : rooms,
        players : players,
        monsters: monsters,
        monsterTypes : monsterTypes
    }
}














angular.module('SpoopyDungeon')
    .controller('DungeonController', [
        'DungeonFactory',
        dungeonController
    ])

function dungeonController (DungeonFactory){
    var dCtrl = this;
    window.dCtrl = dCtrl;
    // console.log('!', DungeonFactory)

    // Creating a new player
    dCtrl.createPlayer = function(){
        new DungeonFactory.Player( dCtrl.newPlayer );
        console.log(DungeonFactory.players);

        // Choose the most recently created player
        dCtrl.currentPlayer = DungeonFactory.players[DungeonFactory.players.length - 1];

        // Make a room!
        dCtrl.nextRoom();
    }

    // This function will be used quite a bit, Every time the player moves into a room, we need to create that room as well as items and a monster
    dCtrl.nextRoom = function(){

        // Create A Monster
        var monster = new DungeonFactory.Monster({
            type : DungeonFactory.monsterTypes[ Math.floor(Math.random() * DungeonFactory.monsterTypes.length)],
            hp   : Math.ceil( Math.random() * 100 ),
        });

        // Create A Room / Items / Description
        var room = new DungeonFactory.Room({
            description : 'This room sucks!  It smells bad and everything',
            items : ['Gold', 'Stuff'],
            monster : monster,
            player : dCtrl.currentPlayer,
        })

        dCtrl.currentRoom = room;

    }



}
