var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    var dados = [
        {
            englishName: "Bulbasaur",
            japaneseName: "Fushigidane",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 1
        },
        {
            englishName: "Ivysaur",
            japaneseName: "Fushigisou",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 2
        },
        {
            englishName: "Venusaur",
            japaneseName: "Fushigibana",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 3
        },
        {
            englishName: "Mega Venusaur",
            japaneseName: "Mega Fushigibana",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 3
        },
        {
            englishName: "Charmander",
            japaneseName: "Hitokage",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 4
        },
        {
            englishName: "Charmeleon",
            japaneseName: "Lizardo",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 5
        },
        {
            englishName: "Charizard",
            japaneseName: "Lizardon",
            principalType: "fire",
            secondaryType: "flying",
            pokedexNumber: 6
        },
        {
            englishName: "Mega Charizard X",
            japaneseName: "MegaLizardon X",
            principalType: "fire",
            secondaryType: "dragon",
            pokedexNumber: 6
        },
        {
            englishName: "Mega Charizard Y",
            japaneseName: "Mega Lizardon Y",
            principalType: "fire",
            secondaryType: "flying",
            pokedexNumber: 6
        },
        {
            englishName: "Squirtle",
            japaneseName: "Zenigame",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 7
        },
        {
            englishName: "Wartortle",
            japaneseName: "Kameil",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 8
        },
        {
            englishName: "Blastoise",
            japaneseName: "Kamex",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 9
        },
        {
            englishName: "Mega Blastoise",
            japaneseName: "Mega Kamex",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 9
        },
        {
            englishName: "Caterpie",
            japaneseName: "Caterpie",
            principalType: "bug",
            secondaryType: "",
            pokedexNumber: 10
        },
        {
            englishName: "Metapod",
            japaneseName: "Transel",
            principalType: "bug",
            secondaryType: "",
            pokedexNumber: 11
        },
        {
            englishName: "Butterfree",
            japaneseName: "Butterfree",
            principalType: "bug",
            secondaryType: "flying",
            pokedexNumber: 12
        },
        {
            englishName: "Weedle",
            japaneseName: "Beedle",
            principalType: "bug",
            secondaryType: "poison",
            pokedexNumber: 13
        },
        {
            englishName: "Kakuna",
            japaneseName: "Cocoon",
            principalType: "bug",
            secondaryType: "poison",
            pokedexNumber: 14
        },
        {
            englishName: "Beedrill",
            japaneseName: "Spear",
            principalType: "bug",
            secondaryType: "poison",
            pokedexNumber: 15
        },
        {
            englishName: "Mega Beedrill",
            japaneseName: "Mega Spear",
            principalType: "bug",
            secondaryType: "poison",
            pokedexNumber: 15
        },
        {
            englishName: "Pidgey",
            japaneseName: "Poppo",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 16
        },
        {
            englishName: "Pidgeotto",
            japaneseName: "Pigeon",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 17
        },
        {
            englishName: "Pidgeot",
            japaneseName: "Pigeot",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 18
        },
        {
            englishName: "Mega Pidgeot",
            japaneseName: "Mega Pigeot",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 18
        },
        {
            englishName: "Rattata",
            japaneseName: "Koratta",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 19
        },
        {
            englishName: "Raticate",
            japaneseName: "Ratta",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 20
        },
        {
            englishName: "Spearow",
            japaneseName: "Onisuzume",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 21
        },
        {
            englishName: "Fearow",
            japaneseName: "Onidrill",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 22
        },
        {
            englishName: "Ekans",
            japaneseName: "Arbo",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 23
        },
        {
            englishName: "Arbok",
            japaneseName: "Arbok",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 24
        },
        {
            englishName: "Pikachu",
            japaneseName: "Pikachu",
            principalType: "electric",
            secondaryType: "",
            pokedexNumber: 25
        },
        {
            englishName: "Raichu",
            japaneseName: "Raichu",
            principalType: "electric",
            secondaryType: "",
            pokedexNumber: 26
        },
        {
            englishName: "Sandshrew",
            japaneseName: "Sand",
            principalType: "ground",
            secondaryType: "",
            pokedexNumber: 27
        },
        {
            englishName: "Sandslash",
            japaneseName: "Sandpan",
            principalType: "ground",
            secondaryType: "",
            pokedexNumber: 28
        },
        {
            englishName: "Nidoran♀",
            japaneseName: "Nidoran♀",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 29
        },
        {
            englishName: "Nidorina",
            japaneseName: "Nidorina",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 30
        },
        {
            englishName: "Nidoqueen",
            japaneseName: "Nidoquen/Nidoqueen",
            principalType: "poison",
            secondaryType: "ground",
            pokedexNumber: 31
        },
        {
            englishName: "Nidoran♂",
            japaneseName: "Nidoran♂",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 32
        },
        {
            englishName: "Nidorino",
            japaneseName: "Nidorino",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 33
        },
        {
            englishName: "Nidoking",
            japaneseName: "Nidoking",
            principalType: "poison",
            secondaryType: "ground",
            pokedexNumber: 34
        },
        {
            englishName: "Clefairy",
            japaneseName: "Pippi",
            principalType: "fairy",
            secondaryType: "",
            pokedexNumber: 35
        },
        {
            englishName: "Clefable",
            japaneseName: "Pixy",
            principalType: "fairy",
            secondaryType: "",
            pokedexNumber: 36
        },
        {
            englishName: "Vulpix",
            japaneseName: "Rokon",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 37
        },
        {
            englishName: "Ninetales",
            japaneseName: "Kyukon",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 38
        },
        {
            englishName: "Jigglypuff",
            japaneseName: "Purin",
            principalType: "normal",
            secondaryType: "fairy",
            pokedexNumber: 39
        },
        {
            englishName: "Wigglytuff",
            japaneseName: "Pukurin",
            principalType: "normal",
            secondaryType: "fairy",
            pokedexNumber: 40
        },
        {
            englishName: "Zubat",
            japaneseName: "Zubat",
            principalType: "poison",
            secondaryType: "flying",
            pokedexNumber: 41
        },
        {
            englishName: "Golbat",
            japaneseName: "Golbat",
            principalType: "poison",
            secondaryType: "flying",
            pokedexNumber: 42
        },
        {
            englishName: "Oddish",
            japaneseName: "Nazonokusa",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 43
        },
        {
            englishName: "Gloom",
            japaneseName: "Kusaihana",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 44
        },
        {
            englishName: "Vileplume",
            japaneseName: "Ruffresia",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 45
        },
        {
            englishName: "Paras",
            japaneseName: "Paras",
            principalType: "bug",
            secondaryType: "grass",
            pokedexNumber: 46
        },
        {
            englishName: "Parasect",
            japaneseName: "Parasect",
            principalType: "bug",
            secondaryType: "grass",
            pokedexNumber: 47
        },
        {
            englishName: "Venonat",
            japaneseName: "Kongpang",
            principalType: "bug",
            secondaryType: "grass",
            pokedexNumber: 48
        },
        {
            englishName: "Venomoth",
            japaneseName: "Morphon",
            principalType: "bug",
            secondaryType: "poison",
            pokedexNumber: 49
        },
        {
            englishName: "Diglett",
            japaneseName: "Digda",
            principalType: "ground",
            secondaryType: "",
            pokedexNumber: 50
        },
        {
            englishName: "Dugtrio",
            japaneseName: "Dugtrio",
            principalType: "ground",
            secondaryType: "",
            pokedexNumber: 51
        },
        {
            englishName: "Meowth",
            japaneseName: "Nyarth",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 52
        },
        {
            englishName: "Persian",
            japaneseName: "Persian",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 53
        },
        {
            englishName: "Psyduck",
            japaneseName: "Koduck",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 54
        },
        {
            englishName: "Golduck",
            japaneseName: "Golduck",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 55
        },
        {
            englishName: "Mankey",
            japaneseName: "Mankey",
            principalType: "fighting",
            secondaryType: "",
            pokedexNumber: 56
        },
        {
            englishName: "Primeape",
            japaneseName: "Okorizaru",
            principalType: "fighting",
            secondaryType: "",
            pokedexNumber: 57
        },
        {
            englishName: "Growlithe",
            japaneseName: "Gardie",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 58
        },
        {
            englishName: "Arcanine",
            japaneseName: "Windie",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 59
        },
        {
            englishName: "Poliwag",
            japaneseName: "Nyoromo",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 60
        },
        {
            englishName: "Poliwhirl",
            japaneseName: "Nyorozo",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 61
        },
        {
            englishName: "Poliwrath",
            japaneseName: "Nyorobon",
            principalType: "water",
            secondaryType: "fighting",
            pokedexNumber: 62
        },
        {
            englishName: "Abra",
            japaneseName: "Casey",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 63
        },

        {
            englishName: "Kadabra",
            japaneseName: "Yungerer",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 64
        },
        {
            englishName: "Alakazam",
            japaneseName: "Foodin",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 65
        },
        {
            englishName: "Mega Alakazam",
            japaneseName: "Mega Foodin",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 65
        },
        {
            englishName: "Machop",
            japaneseName: "Wanriky",
            principalType: "fighting",
            secondaryType: "",
            pokedexNumber: 66
        },
        {
            englishName: "Machoke",
            japaneseName: "Goriky",
            principalType: "fighting",
            secondaryType: "",
            pokedexNumber: 67
        },
        {
            englishName: "Machamp",
            japaneseName: "Kairiky",
            principalType: "fighting",
            secondaryType: "",
            pokedexNumber: 68
        },
        {
            englishName: "Bellsprout",
            japaneseName: "Madatsubomi",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 69
        },
        {
            englishName: "Weepinbell",
            japaneseName: "Utsudon",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 70
        },
        {
            englishName: "Victreebel",
            japaneseName: "Utsubot",
            principalType: "grass",
            secondaryType: "poison",
            pokedexNumber: 71
        },
        {
            englishName: "Tentacool",
            japaneseName: "Menokurage",
            principalType: "water",
            secondaryType: "poison",
            pokedexNumber: 72
        },
        {
            englishName: "Tentacruel",
            japaneseName: "Dokukurage",
            principalType: "water",
            secondaryType: "poison",
            pokedexNumber: 73
        },
        {
            englishName: "Geodude",
            japaneseName: "Ishitsubute/Isitsubute",
            principalType: "rock",
            secondaryType: "ground",
            pokedexNumber: 74
        },
        {
            englishName: "Graveler",
            japaneseName: "Golone",
            principalType: "rock",
            secondaryType: "ground",
            pokedexNumber: 75
        },
        {
            englishName: "Golem",
            japaneseName: "Golonya",
            principalType: "rock",
            secondaryType: "ground",
            pokedexNumber: 76
        },
        {
            englishName: "Ponyta",
            japaneseName: "Ponyta",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 77
        },
        {
            englishName: "Rapidash",
            japaneseName: "Gallop",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 78
        },
        {
            englishName: "Slowpoke",
            japaneseName: "Yadon",
            principalType: "water",
            secondaryType: "psychic ",
            pokedexNumber: 79
        },
        {
            englishName: "Slowbro",
            japaneseName: "Yadoran",
            principalType: "water",
            secondaryType: "psychic ",
            pokedexNumber: 80
        },
        {
            englishName: "Mega Slowbro",
            japaneseName: "Mega Yadoran",
            principalType: "water",
            secondaryType: "psychic ",
            pokedexNumber: 80
        },
        {
            englishName: "Magnemite",
            japaneseName: "Coil",
            principalType: "electric",
            secondaryType: "steel",
            pokedexNumber: 81
        },
        {
            englishName: "Magneton",
            japaneseName: "Rarecoil",
            principalType: "electric",
            secondaryType: "steel",
            pokedexNumber: 82
        },
        {
            englishName: "Farfetch'd",
            japaneseName: "Kamonegi",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 83
        },
        {
            englishName: "Doduo",
            japaneseName: "Dodo",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 84
        },
        {
            englishName: "Dodrio",
            japaneseName: "Dodrio/Dodorio",
            principalType: "normal",
            secondaryType: "flying",
            pokedexNumber: 85
        },
        {
            englishName: "Seel",
            japaneseName: "Pawou",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 86
        },
        {
            englishName: "Dewgong",
            japaneseName: "Jugon",
            principalType: "water",
            secondaryType: "ice",
            pokedexNumber: 87
        },
        {
            englishName: "Grimer",
            japaneseName: "Betbeter",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 88
        },
        {
            englishName: "Muk",
            japaneseName: "Betbeton",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 89
        },
        {
            englishName: "Shellder",
            japaneseName: "Shellder",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 90
        },
        {
            englishName: "Cloyster",
            japaneseName: "Parshen",
            principalType: "water",
            secondaryType: "ice",
            pokedexNumber: 91
        },
        {
            englishName: "Gastly",
            japaneseName: "Ghos",
            principalType: "ghost",
            secondaryType: "poison",
            pokedexNumber: 92
        },
        {
            englishName: "Haunter",
            japaneseName: "Ghost",
            principalType: "ghost",
            secondaryType: "poison",
            pokedexNumber: 93
        },
        {
            englishName: "Gengar",
            japaneseName: "Gangar",
            principalType: "ghost",
            secondaryType: "poison",
            pokedexNumber: 94
        },
        {
            englishName: "Mega Gengar",
            japaneseName: "Mega Gangar",
            principalType: "ghost",
            secondaryType: "poison",
            pokedexNumber: 94
        },
        {
            englishName: "Onix",
            japaneseName: "Iwark",
            principalType: "rock",
            secondaryType: "ground",
            pokedexNumber: 95
        },
        {
            englishName: "Drowzee",
            japaneseName: "Sleep/Sleepe",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 96
        },
        {
            englishName: "Hypno",
            japaneseName: "Sleeper",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 97
        },
        {
            englishName: "Krabby",
            japaneseName: "Crab",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 98
        },
        {
            englishName: "Kingler",
            japaneseName: "Kingler",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 99
        },
        {
            englishName: "Voltorb",
            japaneseName: "Biriridama",
            principalType: "electric",
            secondaryType: "",
            pokedexNumber: 100
        },
        {
            englishName: "Electrode",
            japaneseName: "Marumine",
            principalType: "electric",
            secondaryType: "",
            pokedexNumber: 101
        },
        {
            englishName: "Exeggcute",
            japaneseName: "Tamatama",
            principalType: "grass",
            secondaryType: "psychic",
            pokedexNumber: 102
        },
        {
            englishName: "Exeggutor",
            japaneseName: "Nassy",
            principalType: "grass",
            secondaryType: "psychic",
            pokedexNumber: 103
        },
        {
            englishName: "Cubone",
            japaneseName: "Karakara",
            principalType: "ground",
            secondaryType: "",
            pokedexNumber: 104
        },
        {
            englishName: "Marowak",
            japaneseName: "Garagara",
            principalType: "ground",
            secondaryType: "",
            pokedexNumber: 105
        },
        {
            englishName: "Hitmonlee",
            japaneseName: "Sawamular",
            principalType: "fighting",
            secondaryType: "",
            pokedexNumber: 106
        },
        {
            englishName: "Hitmonchan",
            japaneseName: "Ebiwalar",
            principalType: "fighting",
            secondaryType: "",
            pokedexNumber: 107
        },
        {
            englishName: "Lickitung",
            japaneseName: "Beroringa",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 108
        },
        {
            englishName: "Koffing",
            japaneseName: "Dogars",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 109
        },
        {
            englishName: "Weezing",
            japaneseName: "Matadogas",
            principalType: "poison",
            secondaryType: "",
            pokedexNumber: 110
        },
        {
            englishName: "Rhyhorn",
            japaneseName: "Sihorn",
            principalType: "ground",
            secondaryType: "rock",
            pokedexNumber: 111
        },
        {
            englishName: "Rhydon",
            japaneseName: "Sidon",
            principalType: "ground",
            secondaryType: "rock",
            pokedexNumber: 112
        },
        {
            englishName: "Chansey",
            japaneseName: "Lucky",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 113
        },
        {
            englishName: "Tangela",
            japaneseName: "Monjara",
            principalType: "grass",
            secondaryType: "",
            pokedexNumber: 114
        },
        {
            englishName: "Kangaskhan",
            japaneseName: "Garura",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 115
        },
        {
            englishName: "Mega Kangaskhan",
            japaneseName: "Mega Garura",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 115
        },
        {
            englishName: "Horsea",
            japaneseName: "Tattu",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 116
        },
        {
            englishName: "Seadra",
            japaneseName: "Seadra",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 117
        },
        {
            englishName: "Goldeen",
            japaneseName: "Tosakinto",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 118
        },
        {
            englishName: "Seaking",
            japaneseName: "Azumao",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 119
        },
        {
            englishName: "Staryu",
            japaneseName: "Hitodeman",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 120
        },
        {
            englishName: "Starmie",
            japaneseName: "Starmie",
            principalType: "water",
            secondaryType: "psychic",
            pokedexNumber: 121
        },
        {
            englishName: "Mr. Mime",
            japaneseName: "Barrierd",
            principalType: "psychic",
            secondaryType: "fairy",
            pokedexNumber: 122
        },
        {
            englishName: "Scyther",
            japaneseName: "Strike",
            principalType: "bug",
            secondaryType: "flying",
            pokedexNumber: 123
        },
        {
            englishName: "Jynx",
            japaneseName: "Rougela",
            principalType: "ice",
            secondaryType: "psychic",
            pokedexNumber: 124
        },
        {
            englishName: "Electabuzz",
            japaneseName: "Eleboo",
            principalType: "electric",
            secondaryType: "",
            pokedexNumber: 125
        },
        {
            englishName: "Magmar",
            japaneseName: "Boober",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 126
        },
        {
            englishName: "Pinsir",
            japaneseName: "Kailios",
            principalType: "bug",
            secondaryType: "",
            pokedexNumber: 127
        },
        {
            englishName: "Mega Pinsir",
            japaneseName: "Mega Kailios",
            principalType: "bug",
            secondaryType: "flying",
            pokedexNumber: 127
        },
        {
            englishName: "Tauros",
            japaneseName: "Kentauros",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 128
        },
        {
            englishName: "Magikarp",
            japaneseName: "Koiking",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 129
        },
        {
            englishName: "Gyarados",
            japaneseName: "Gyarados",
            principalType: "water",
            secondaryType: "flying",
            pokedexNumber: 130
        },
        {
            englishName: "Mega Gyarados",
            japaneseName: "Mega Gyarados",
            principalType: "water",
            secondaryType: "dark",
            pokedexNumber: 130
        },
        {
            englishName: "Lapras",
            japaneseName: "Laplace",
            principalType: "water",
            secondaryType: "ice",
            pokedexNumber: 131
        },
        {
            englishName: "Ditto",
            japaneseName: "Metamon",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 132
        },
        {
            englishName: "Eevee",
            japaneseName: "Eievui",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 133
        },
        {
            englishName: "Vaporeon",
            japaneseName: "Showers",
            principalType: "water",
            secondaryType: "",
            pokedexNumber: 134
        },
        {
            englishName: "Jolteon",
            japaneseName: "Thunders",
            principalType: "electric",
            secondaryType: "",
            pokedexNumber: 135
        },
        {
            englishName: "Flareon",
            japaneseName: "Booster",
            principalType: "fire",
            secondaryType: "",
            pokedexNumber: 136
        },
        {
            englishName: "Porygon",
            japaneseName: "Porygon/Polygon",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 137
        },
        {
            englishName: "Omanyte",
            japaneseName: "Omnite",
            principalType: "rock",
            secondaryType: "water",
            pokedexNumber: 138
        },
        {
            englishName: "Omastar",
            japaneseName: "Omstar",
            principalType: "rock",
            secondaryType: "water",
            pokedexNumber: 139
        },
        {
            englishName: "Kabuto",
            japaneseName: "Kabuto",
            principalType: "rock",
            secondaryType: "water",
            pokedexNumber: 140
        },
        {
            englishName: "Kabutops",
            japaneseName: "Kabutops",
            principalType: "rock",
            secondaryType: "water",
            pokedexNumber: 141
        },
        {
            englishName: "Aerodactyl",
            japaneseName: "Ptera",
            principalType: "rock",
            secondaryType: "flying",
            pokedexNumber: 142
        },
        {
            englishName: "Mega Aerodactyl",
            japaneseName: "Mega Ptera",
            principalType: "rock",
            secondaryType: "flying",
            pokedexNumber: 142
        },
        {
            englishName: "Snorlax",
            japaneseName: "Kabigon",
            principalType: "normal",
            secondaryType: "",
            pokedexNumber: 143
        },
        {
            englishName: "Articuno",
            japaneseName: "Freezer",
            principalType: "ice",
            secondaryType: "flying",
            pokedexNumber: 144
        },
        {
            englishName: "Zapdos",
            japaneseName: "Thunder",
            principalType: "electric",
            secondaryType: "flying",
            pokedexNumber: 145
        },
        {
            englishName: "Moltres",
            japaneseName: "Fire",
            principalType: "fire",
            secondaryType: "flying",
            pokedexNumber: 146
        },
        {
            englishName: "Dratini",
            japaneseName: "Miniryu",
            principalType: "dragon",
            secondaryType: "",
            pokedexNumber: 147
        },
        {
            englishName: "Dragonair",
            japaneseName: "Hakuryu",
            principalType: "dragon",
            secondaryType: "",
            pokedexNumber: 148
        },
        {
            englishName: "Dragonite",
            japaneseName: "Kairyu",
            principalType: "dragon",
            secondaryType: "flying",
            pokedexNumber: 149
        },
        {
            englishName: "Mewtwo",
            japaneseName: "Mewtwo",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 150
        },
        {
            englishName: "Mega Mewtwo X",
            japaneseName: " Mega Mewtwo X",
            principalType: "psychic",
            secondaryType: "fighting",
            pokedexNumber: 150
        },
        {
            englishName: "Mega Mewtwo Y",
            japaneseName: "Mega Mewtwo Y",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 150
        },
        {
            englishName: "Mew",
            japaneseName: "Mew",
            principalType: "psychic",
            secondaryType: "",
            pokedexNumber: 151
        }
    ];
    res.json(dados);
});

module.exports = router;