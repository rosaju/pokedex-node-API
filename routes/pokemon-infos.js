var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    var dados = [
        {
            englishName: "Bulbasaur",
            japaneseName: "Fushigidane",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 1
        },
        {
            englishName: "Ivysaur",
            japaneseName: "Fushigisou",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 2
        },
        {
            englishName: "Venusaur",
            japaneseName: "Fushigibana",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 3
        },
        {
            englishName: "Mega Venusaur",
            japaneseName: "Mega Fushigibana",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 3
        },
        {
            englishName: "Charmander",
            japaneseName: "Hitokage",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 4
        },
        {
            englishName: "Charmeleon",
            japaneseName: "Lizardo",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 5
        },
        {
            englishName: "Charizard",
            japaneseName: "Lizardon",
            primaryType: "fire",
            secondaryType: "flying",
            pokedexNumber: 6
        },
        {
            englishName: "Mega Charizard X",
            japaneseName: "MegaLizardon X",
            primaryType: "fire",
            secondaryType: "dragon",
            pokedexNumber: 6
        },
        {
            englishName: "Mega Charizard Y",
            japaneseName: "Mega Lizardon Y",
            primaryType: "fire",
            secondaryType: "flying",
            pokedexNumber: 6
        },
        {
            englishName: "Squirtle",
            japaneseName: "Zenigame",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 7
        },
        {
            englishName: "Wartortle",
            japaneseName: "Kameil",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 8
        },
        {
            englishName: "Blastoise",
            japaneseName: "Kamex",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 9
        },
        {
            englishName: "Mega Blastoise",
            japaneseName: "Mega Kamex",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 9
        },
        {
            englishName: "Caterpie",
            japaneseName: "Caterpie",
            primaryType: "bug",
            secondaryType: "",
            pokedexNumber: 10
        },
        {
            englishName: "Metapod",
            japaneseName: "Transel",
            primaryType: "bug",
            secondaryType: "",
            pokedexNumber: 11
        },
        {
            englishName: "Butterfree",
            japaneseName: "Butterfree",
            primaryType: "bug",
            secondaryType: "flying",
            pokedexNumber: 12
        },
        {
            englishName: "Weedle",
            japaneseName: "Beedle",
            primaryType: "bug",
            secondaryType: "poison",
            pokedexNumber: 13
        },
        {
            englishName: "Kakuna",
            japaneseName: "Cocoon",
            primaryType: "bug",
            secondaryType: "poison",
            pokedexNumber: 14
        },
        {
            englishName: "Beedrill",
            japaneseName: "Spear",
            primaryType: "bug",
            secondaryType: "poison",
            pokedexNumber: 15
        },
        {
            englishName: "Mega Beedrill",
            japaneseName: "Mega Spear",
            primaryType: "bug",
            secondaryType: "poison",
            pokedexNumber: 15
        },
        {
            englishName: "Pidgey",
            japaneseName: "Poppo",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 16
        },
        {
            englishName: "Pidgeotto",
            japaneseName: "Pigeon",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 17
        },
        {
            englishName: "Pidgeot",
            japaneseName: "Pigeot",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 18
        },
        {
            englishName: "Mega Pidgeot",
            japaneseName: "Mega Pigeot",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 18
        },
        {
            englishName: "Rattata",
            japaneseName: "Koratta",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 19
        },
        {
            englishName: "Raticate",
            japaneseName: "Ratta",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 20
        },
        {
            englishName: "Spearow",
            japaneseName: "Onisuzume",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 21
        },
        {
            englishName: "Fearow",
            japaneseName: "Onidrill",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 22
        },
        {
            englishName: "Ekans",
            japaneseName: "Arbo",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 23
        },
        {
            englishName: "Arbok",
            japaneseName: "Arbok",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 24
        },
        {
            englishName: "Pikachu",
            japaneseName: "Pikachu",
            primaryType: "electric",
            secondaryType: "",
            pokedexNumber: 25
        },
        {
            englishName: "Raichu",
            japaneseName: "Raichu",
            primaryType: "electric",
            secondaryType: "",
            pokedexNumber: 26
        },
        {
            englishName: "Sandshrew",
            japaneseName: "Sand",
            primaryType: "ground",
            secondaryType: "",
            pokedexNumber: 27
        },
        {
            englishName: "Sandslash",
            japaneseName: "Sandpan",
            primaryType: "ground",
            secondaryType: "",
            pokedexNumber: 28
        },
        {
            englishName: "Nidoran♀",
            japaneseName: "Nidoran♀",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 29
        },
        {
            englishName: "Nidorina",
            japaneseName: "Nidorina",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 30
        },
        {
            englishName: "Nidoqueen",
            japaneseName: "Nidoquen/Nidoqueen",
            primaryType: "poison",
            secondaryType: "ground",
            pokedexNumber: 31
        },
        {
            englishName: "Nidoran♂",
            japaneseName: "Nidoran♂",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 32
        },
        {
            englishName: "Nidorino",
            japaneseName: "Nidorino",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 33
        },
        {
            englishName: "Nidoking",
            japaneseName: "Nidoking",
            primaryType: "poison",
            secondaryType: "ground",
            pokedexNumber: 34
        },
        {
            englishName: "Clefairy",
            japaneseName: "Pippi",
            primaryType: "fairy",
            secondaryType: "",
            pokedexNumber: 35
        },
        {
            englishName: "Clefable",
            japaneseName: "Pixy",
            primaryType: "fairy",
            secondaryType: "",
            pokedexNumber: 36
        },
        {
            englishName: "Vulpix",
            japaneseName: "Rokon",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 37
        },
        {
            englishName: "Ninetales",
            japaneseName: "Kyukon",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 38
        },
        {
            englishName: "Jigglypuff",
            japaneseName: "Purin",
            primaryType: "normal",
            secondaryType: "fairy",
            pokedexNumber: 39
        },
        {
            englishName: "Wigglytuff",
            japaneseName: "Pukurin",
            primaryType: "normal",
            secondaryType: "fairy",
            pokedexNumber: 40
        },
        {
            englishName: "Zubat",
            japaneseName: "Zubat",
            primaryType: "poison",
            secondaryType: "flying",
            pokedexNumber: 41
        },
        {
            englishName: "Golbat",
            japaneseName: "Golbat",
            primaryType: "poison",
            secondaryType: "flying",
            pokedexNumber: 42
        },
        {
            englishName: "Oddish",
            japaneseName: "Nazonokusa",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 43
        },
        {
            englishName: "Gloom",
            japaneseName: "Kusaihana",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 44
        },
        {
            englishName: "Vileplume",
            japaneseName: "Ruffresia",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 45
        },
        {
            englishName: "Paras",
            japaneseName: "Paras",
            primaryType: "bug",
            secondaryType: "grass",
            pokedexNumber: 46
        },
        {
            englishName: "Parasect",
            japaneseName: "Parasect",
            primaryType: "bug",
            secondaryType: "grass",
            pokedexNumber: 47
        },
        {
            englishName: "Venonat",
            japaneseName: "Kongpang",
            primaryType: "bug",
            secondaryType: "grass",
            pokedexNumber: 48
        },
        {
            englishName: "Venomoth",
            japaneseName: "Morphon",
            primaryType: "bug",
            secondaryType: "poison",
            pokedexNumber: 49
        },
        {
            englishName: "Diglett",
            japaneseName: "Digda",
            primaryType: "ground",
            secondaryType: "",
            pokedexNumber: 50
        },
        {
            englishName: "Dugtrio",
            japaneseName: "Dugtrio",
            primaryType: "ground",
            secondaryType: "",
            pokedexNumber: 51
        },
        {
            englishName: "Meowth",
            japaneseName: "Nyarth",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 52
        },
        {
            englishName: "Persian",
            japaneseName: "Persian",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 53
        },
        {
            englishName: "Psyduck",
            japaneseName: "Koduck",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 54
        },
        {
            englishName: "Golduck",
            japaneseName: "Golduck",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 55
        },
        {
            englishName: "Mankey",
            japaneseName: "Mankey",
            primaryType: "fighting",
            secondaryType: "",
            pokedexNumber: 56
        },
        {
            englishName: "Primeape",
            japaneseName: "Okorizaru",
            primaryType: "fighting",
            secondaryType: "",
            pokedexNumber: 57
        },
        {
            englishName: "Growlithe",
            japaneseName: "Gardie",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 58
        },
        {
            englishName: "Arcanine",
            japaneseName: "Windie",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 59
        },
        {
            englishName: "Poliwag",
            japaneseName: "Nyoromo",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 60
        },
        {
            englishName: "Poliwhirl",
            japaneseName: "Nyorozo",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 61
        },
        {
            englishName: "Poliwrath",
            japaneseName: "Nyorobon",
            primaryType: "water",
            secondaryType: "fighting",
            pokedexNumber: 62
        },
        {
            englishName: "Abra",
            japaneseName: "Casey",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 63
        },

        {
            englishName: "Kadabra",
            japaneseName: "Yungerer",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 64
        },
        {
            englishName: "Alakazam",
            japaneseName: "Foodin",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 65
        },
        {
            englishName: "Mega Alakazam",
            japaneseName: "Mega Foodin",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 65
        },
        {
            englishName: "Machop",
            japaneseName: "Wanriky",
            primaryType: "fighting",
            secondaryType: "",
            pokedexNumber: 66
        },
        {
            englishName: "Machoke",
            japaneseName: "Goriky",
            primaryType: "fighting",
            secondaryType: "",
            pokedexNumber: 67
        },
        {
            englishName: "Machamp",
            japaneseName: "Kairiky",
            primaryType: "fighting",
            secondaryType: "",
            pokedexNumber: 68
        },
        {
            englishName: "Bellsprout",
            japaneseName: "Madatsubomi",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 69
        },
        {
            englishName: "Weepinbell",
            japaneseName: "Utsudon",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 70
        },
        {
            englishName: "Victreebel",
            japaneseName: "Utsubot",
            primaryType: "grass",
            secondaryType: "poison",
            pokedexNumber: 71
        },
        {
            englishName: "Tentacool",
            japaneseName: "Menokurage",
            primaryType: "water",
            secondaryType: "poison",
            pokedexNumber: 72
        },
        {
            englishName: "Tentacruel",
            japaneseName: "Dokukurage",
            primaryType: "water",
            secondaryType: "poison",
            pokedexNumber: 73
        },
        {
            englishName: "Geodude",
            japaneseName: "Ishitsubute/Isitsubute",
            primaryType: "rock",
            secondaryType: "ground",
            pokedexNumber: 74
        },
        {
            englishName: "Graveler",
            japaneseName: "Golone",
            primaryType: "rock",
            secondaryType: "ground",
            pokedexNumber: 75
        },
        {
            englishName: "Golem",
            japaneseName: "Golonya",
            primaryType: "rock",
            secondaryType: "ground",
            pokedexNumber: 76
        },
        {
            englishName: "Ponyta",
            japaneseName: "Ponyta",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 77
        },
        {
            englishName: "Rapidash",
            japaneseName: "Gallop",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 78
        },
        {
            englishName: "Slowpoke",
            japaneseName: "Yadon",
            primaryType: "water",
            secondaryType: "psychic ",
            pokedexNumber: 79
        },
        {
            englishName: "Slowbro",
            japaneseName: "Yadoran",
            primaryType: "water",
            secondaryType: "psychic ",
            pokedexNumber: 80
        },
        {
            englishName: "Mega Slowbro",
            japaneseName: "Mega Yadoran",
            primaryType: "water",
            secondaryType: "psychic ",
            pokedexNumber: 80
        },
        {
            englishName: "Magnemite",
            japaneseName: "Coil",
            primaryType: "electric",
            secondaryType: "steel",
            pokedexNumber: 81
        },
        {
            englishName: "Magneton",
            japaneseName: "Rarecoil",
            primaryType: "electric",
            secondaryType: "steel",
            pokedexNumber: 82
        },
        {
            englishName: "Farfetch'd",
            japaneseName: "Kamonegi",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 83
        },
        {
            englishName: "Doduo",
            japaneseName: "Dodo",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 84
        },
        {
            englishName: "Dodrio",
            japaneseName: "Dodrio/Dodorio",
            primaryType: "normal",
            secondaryType: "flying",
            pokedexNumber: 85
        },
        {
            englishName: "Seel",
            japaneseName: "Pawou",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 86
        },
        {
            englishName: "Dewgong",
            japaneseName: "Jugon",
            primaryType: "water",
            secondaryType: "ice",
            pokedexNumber: 87
        },
        {
            englishName: "Grimer",
            japaneseName: "Betbeter",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 88
        },
        {
            englishName: "Muk",
            japaneseName: "Betbeton",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 89
        },
        {
            englishName: "Shellder",
            japaneseName: "Shellder",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 90
        },
        {
            englishName: "Cloyster",
            japaneseName: "Parshen",
            primaryType: "water",
            secondaryType: "ice",
            pokedexNumber: 91
        },
        {
            englishName: "Gastly",
            japaneseName: "Ghos",
            primaryType: "ghost",
            secondaryType: "poison",
            pokedexNumber: 92
        },
        {
            englishName: "Haunter",
            japaneseName: "Ghost",
            primaryType: "ghost",
            secondaryType: "poison",
            pokedexNumber: 93
        },
        {
            englishName: "Gengar",
            japaneseName: "Gangar",
            primaryType: "ghost",
            secondaryType: "poison",
            pokedexNumber: 94
        },
        {
            englishName: "Mega Gengar",
            japaneseName: "Mega Gangar",
            primaryType: "ghost",
            secondaryType: "poison",
            pokedexNumber: 94
        },
        {
            englishName: "Onix",
            japaneseName: "Iwark",
            primaryType: "rock",
            secondaryType: "ground",
            pokedexNumber: 95
        },
        {
            englishName: "Drowzee",
            japaneseName: "Sleep/Sleepe",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 96
        },
        {
            englishName: "Hypno",
            japaneseName: "Sleeper",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 97
        },
        {
            englishName: "Krabby",
            japaneseName: "Crab",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 98
        },
        {
            englishName: "Kingler",
            japaneseName: "Kingler",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 99
        },
        {
            englishName: "Voltorb",
            japaneseName: "Biriridama",
            primaryType: "electric",
            secondaryType: "",
            pokedexNumber: 100
        },
        {
            englishName: "Electrode",
            japaneseName: "Marumine",
            primaryType: "electric",
            secondaryType: "",
            pokedexNumber: 101
        },
        {
            englishName: "Exeggcute",
            japaneseName: "Tamatama",
            primaryType: "grass",
            secondaryType: "psychic",
            pokedexNumber: 102
        },
        {
            englishName: "Exeggutor",
            japaneseName: "Nassy",
            primaryType: "grass",
            secondaryType: "psychic",
            pokedexNumber: 103
        },
        {
            englishName: "Cubone",
            japaneseName: "Karakara",
            primaryType: "ground",
            secondaryType: "",
            pokedexNumber: 104
        },
        {
            englishName: "Marowak",
            japaneseName: "Garagara",
            primaryType: "ground",
            secondaryType: "",
            pokedexNumber: 105
        },
        {
            englishName: "Hitmonlee",
            japaneseName: "Sawamular",
            primaryType: "fighting",
            secondaryType: "",
            pokedexNumber: 106
        },
        {
            englishName: "Hitmonchan",
            japaneseName: "Ebiwalar",
            primaryType: "fighting",
            secondaryType: "",
            pokedexNumber: 107
        },
        {
            englishName: "Lickitung",
            japaneseName: "Beroringa",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 108
        },
        {
            englishName: "Koffing",
            japaneseName: "Dogars",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 109
        },
        {
            englishName: "Weezing",
            japaneseName: "Matadogas",
            primaryType: "poison",
            secondaryType: "",
            pokedexNumber: 110
        },
        {
            englishName: "Rhyhorn",
            japaneseName: "Sihorn",
            primaryType: "ground",
            secondaryType: "rock",
            pokedexNumber: 111
        },
        {
            englishName: "Rhydon",
            japaneseName: "Sidon",
            primaryType: "ground",
            secondaryType: "rock",
            pokedexNumber: 112
        },
        {
            englishName: "Chansey",
            japaneseName: "Lucky",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 113
        },
        {
            englishName: "Tangela",
            japaneseName: "Monjara",
            primaryType: "grass",
            secondaryType: "",
            pokedexNumber: 114
        },
        {
            englishName: "Kangaskhan",
            japaneseName: "Garura",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 115
        },
        {
            englishName: "Mega Kangaskhan",
            japaneseName: "Mega Garura",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 115
        },
        {
            englishName: "Horsea",
            japaneseName: "Tattu",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 116
        },
        {
            englishName: "Seadra",
            japaneseName: "Seadra",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 117
        },
        {
            englishName: "Goldeen",
            japaneseName: "Tosakinto",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 118
        },
        {
            englishName: "Seaking",
            japaneseName: "Azumao",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 119
        },
        {
            englishName: "Staryu",
            japaneseName: "Hitodeman",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 120
        },
        {
            englishName: "Starmie",
            japaneseName: "Starmie",
            primaryType: "water",
            secondaryType: "psychic",
            pokedexNumber: 121
        },
        {
            englishName: "Mr. Mime",
            japaneseName: "Barrierd",
            primaryType: "psychic",
            secondaryType: "fairy",
            pokedexNumber: 122
        },
        {
            englishName: "Scyther",
            japaneseName: "Strike",
            primaryType: "bug",
            secondaryType: "flying",
            pokedexNumber: 123
        },
        {
            englishName: "Jynx",
            japaneseName: "Rougela",
            primaryType: "ice",
            secondaryType: "psychic",
            pokedexNumber: 124
        },
        {
            englishName: "Electabuzz",
            japaneseName: "Eleboo",
            primaryType: "electric",
            secondaryType: "",
            pokedexNumber: 125
        },
        {
            englishName: "Magmar",
            japaneseName: "Boober",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 126
        },
        {
            englishName: "Pinsir",
            japaneseName: "Kailios",
            primaryType: "bug",
            secondaryType: "",
            pokedexNumber: 127
        },
        {
            englishName: "Mega Pinsir",
            japaneseName: "Mega Kailios",
            primaryType: "bug",
            secondaryType: "flying",
            pokedexNumber: 127
        },
        {
            englishName: "Tauros",
            japaneseName: "Kentauros",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 128
        },
        {
            englishName: "Magikarp",
            japaneseName: "Koiking",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 129
        },
        {
            englishName: "Gyarados",
            japaneseName: "Gyarados",
            primaryType: "water",
            secondaryType: "flying",
            pokedexNumber: 130
        },
        {
            englishName: "Mega Gyarados",
            japaneseName: "Mega Gyarados",
            primaryType: "water",
            secondaryType: "dark",
            pokedexNumber: 130
        },
        {
            englishName: "Lapras",
            japaneseName: "Laplace",
            primaryType: "water",
            secondaryType: "ice",
            pokedexNumber: 131
        },
        {
            englishName: "Ditto",
            japaneseName: "Metamon",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 132
        },
        {
            englishName: "Eevee",
            japaneseName: "Eievui",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 133
        },
        {
            englishName: "Vaporeon",
            japaneseName: "Showers",
            primaryType: "water",
            secondaryType: "",
            pokedexNumber: 134
        },
        {
            englishName: "Jolteon",
            japaneseName: "Thunders",
            primaryType: "electric",
            secondaryType: "",
            pokedexNumber: 135
        },
        {
            englishName: "Flareon",
            japaneseName: "Booster",
            primaryType: "fire",
            secondaryType: "",
            pokedexNumber: 136
        },
        {
            englishName: "Porygon",
            japaneseName: "Porygon/Polygon",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 137
        },
        {
            englishName: "Omanyte",
            japaneseName: "Omnite",
            primaryType: "rock",
            secondaryType: "water",
            pokedexNumber: 138
        },
        {
            englishName: "Omastar",
            japaneseName: "Omstar",
            primaryType: "rock",
            secondaryType: "water",
            pokedexNumber: 139
        },
        {
            englishName: "Kabuto",
            japaneseName: "Kabuto",
            primaryType: "rock",
            secondaryType: "water",
            pokedexNumber: 140
        },
        {
            englishName: "Kabutops",
            japaneseName: "Kabutops",
            primaryType: "rock",
            secondaryType: "water",
            pokedexNumber: 141
        },
        {
            englishName: "Aerodactyl",
            japaneseName: "Ptera",
            primaryType: "rock",
            secondaryType: "flying",
            pokedexNumber: 142
        },
        {
            englishName: "Mega Aerodactyl",
            japaneseName: "Mega Ptera",
            primaryType: "rock",
            secondaryType: "flying",
            pokedexNumber: 142
        },
        {
            englishName: "Snorlax",
            japaneseName: "Kabigon",
            primaryType: "normal",
            secondaryType: "",
            pokedexNumber: 143
        },
        {
            englishName: "Articuno",
            japaneseName: "Freezer",
            primaryType: "ice",
            secondaryType: "flying",
            pokedexNumber: 144
        },
        {
            englishName: "Zapdos",
            japaneseName: "Thunder",
            primaryType: "electric",
            secondaryType: "flying",
            pokedexNumber: 145
        },
        {
            englishName: "Moltres",
            japaneseName: "Fire",
            primaryType: "fire",
            secondaryType: "flying",
            pokedexNumber: 146
        },
        {
            englishName: "Dratini",
            japaneseName: "Miniryu",
            primaryType: "dragon",
            secondaryType: "",
            pokedexNumber: 147
        },
        {
            englishName: "Dragonair",
            japaneseName: "Hakuryu",
            primaryType: "dragon",
            secondaryType: "",
            pokedexNumber: 148
        },
        {
            englishName: "Dragonite",
            japaneseName: "Kairyu",
            primaryType: "dragon",
            secondaryType: "flying",
            pokedexNumber: 149
        },
        {
            englishName: "Mewtwo",
            japaneseName: "Mewtwo",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 150
        },
        {
            englishName: "Mega Mewtwo X",
            japaneseName: " Mega Mewtwo X",
            primaryType: "psychic",
            secondaryType: "fighting",
            pokedexNumber: 150
        },
        {
            englishName: "Mega Mewtwo Y",
            japaneseName: "Mega Mewtwo Y",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 150
        },
        {
            englishName: "Mew",
            japaneseName: "Mew",
            primaryType: "psychic",
            secondaryType: "",
            pokedexNumber: 151
        }
    ];
    res.json(dados);
});

module.exports = router;