import moment from 'moment'
import Vue from 'vue'

export default class api {

    test() {
        let date = moment();
        fetch('http://localhost:3000/').then((err, res, body) => {
            if (err) console.log(err);
            else {
                console.log('HELLOU, YES THIS IS DOG');
            }
        })
        return 'success';
    }

    getCurrentUser() {
        return users[0];
    }

    getPlayers(id = null) {
        if (id !== null) {
            return players.find(e => e.id == id);
        }
        else {
            return players;
        }
    }

    getNationality(id) {
        return nationalities.find(e => e.id == id);
    }

    getTeam(id) {
        return teams.find(e => e.id == id);
    }

    getUsers(id = null) {
        if(id == null) {
            return players;
        }
        else  {
          return players.find(e=> e.id == id);
        }

    }

    getFixtures(day = null) {
        if(day != null) {
            return fixtures;
        }
        else {
            console.log('in get fixtures',fixtures)
            return fixtures;
        }
    }

    getLeagues(id = null) {
        if (id !== null) {
            return leagues.find(e => e.id == id);
        }
    }

    getContractsByTeam(id) {
        return contracts.filter(e => e.team == id);
    }

    getSponsorsByTeam(id) {
        return sponsorContracts.filter(e => e.team == id);
    }

    getFinancesByTeam(id) {
        return finances.filter(e => e.team == id);
    }

    getTeamsByLeague(id) {
        return teams.filter(e => e.league == id);
    }
}


let nationalities = [
{
    id: 0,
    name: "Germany",
    flag: ""
},
{
    id: 1,
    name: "USA",
    flag: ""
},
{
    id: 2,
    name: "Canada",
    flag: ""
},
{
    id: 3,
    name: "South Korea",
    flag: ""
},
{
    id: 4,
    name: "Denmark",
    flag: ""
},
{
    id: 5,
    name: "China",
    flag: ""
},
{
    id: 6,
    name: "Sweden",
    flag: ""
},
{
    id: 7,
    name: "Great Britain",
    flag: ""
}
]

let players =[{
    id: 0,
    tag: "Bjergsen",
    name: "Sören",
    lastname: "Bjerg",
    nationality: 4,
    totalPower: 17,
    lane: "mid",
    team: 0,
    picture: "bjergsen.jpg",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 1,
    tag: "Doublelift",
    name: "Yiliang",
    lastname: "Peng",
    nationality: 1,
    totalPower: 15,
    lane: "bot",
    team: 0,
    picture: "doublelift.jpg",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 2,
    tag: "Svenskeren",
    name: "Dennis",
    lastname: "Johnsen",
    nationality: 4,
    totalPower: 11,
    lane: "jungle",
    team: 0,
    picture: "",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 3,
    tag: "Hauntzer",
    name: "Kevin",
    lastname: "Yarnell",
    nationality: 1,
    totalPower: 15,
    lane: "top",
    team: 0,
    picture: "",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 4,
    tag: "Biofrost",
    name: "Vincent",
    lastname: "Wang",
    nationality: 2,
    totalPower: 15,
    lane: "support",
    team: 0,
    picture: "",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 5,
    tag: "Sneaky",
    name: "Zachary",
    lastname: "Scuderi",
    nationality: 1,
    totalPower: 13,
    lane: "bot",
    team: 1,
    picture: "",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 6,
    tag: "Contractz",
    name: "Juan",
    lastname: "Garcia",
    nationality: 1,
    totalPower: 13,
    lane: "jungle",
    team: 1,
    picture: "",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 7,
    tag: "Jensen",
    name: "Nicolaj",
    lastname: "Jensen",
    nationality: 4,
    totalPower: 16,
    lane: "mid",
    team: 1,
    picture: "",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 8,
    tag: "Impact",
    name: "Jung",
    lastname: "Eon-yeong",
    nationality: 3,
    totalPower: 13,
    lane: "top",
    team: 1,
    picture: "",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
},
{
    id: 9,
    tag: "Smoothie",
    name: "Andy",
    lastname: "Ta",
    nationality: 2,
    totalPower: 13,
    lane: "support",
    team: 1,
    picture: "",
    personality: {

    },
    attributes: {

    },
    stats: {

    }
}

]

let fixtures = [{
    id:0,
    matchday: 1,
    matches: [{
        date: '20.02.2018 - 17 Uhr',
        teams: [0,1],
        result: null,
        done: false
    },
    {
        date: '20.02.2018 - 18 Uhr',
        teams: [1,2],
        result: null,
        done: false
    },
    {
        date: '20.02.2018 - 19 Uhr',
        teams: [2,0],
        result: null,
        done: false
    }
    ]
}]

let contracts = [{
    id: 0,
    type: 'player',
    player: 0,
    team: 0,
    wage: 5000,
    boni: {
        winDomesticTitle: 10000,
        winMSI: 50000,
        winWorlds: 200000,
        winMVP: 2500
    },
    expiry: '30.11.2018'
},
{
    id: 1,
    type: 'player',
    player: 1,
    team: 0,
    wage: 3000,
    boni: {
        winDomesticTitle: 10000,
        winMSI: 50000,
        winWorlds: 200000,
        winMVP: 2500
    },
    expiry: '30.11.2018'
},
{
    id: 2,
    type: 'player',
    player: 2,
    team: 0,
    wage: 4000,
    boni: {
        winDomesticTitle: 10000,
        winMSI: 50000,
        winWorlds: 200000,
        winMVP: 2500
    },
    expiry: '30.11.2018'
},
{
    id: 3,
    type: 'player',
    player: 3,
    team: 0,
    wage: 3500,
    boni: {
        winDomesticTitle: 10000,
        winMSI: 50000,
        winWorlds: 200000,
        winMVP: 2500
    },
    expiry: '30.11.2018'
},
{
    id: 4,
    type: 'coach',
    staff: 1,
    player: null,
    team: 0,
    wage: 5500,
    boni: {
        winDomesticTitle: 10000,
        winMSI: 50000,
        winWorlds: 200000,
        winMVP: 2500
    },
    expiry: '30.11.2018'
}

]

let sponsorContracts = [{
    id: 0,
    name: "Logitech",
    team: 0,
    amount: 8000,
    expiry: '01.01.2019'
},
{
    id: 1,
    name: "HTC",
    team: 0,
    amount: 6800,
    expiry: '01.01.2019'
},
{
    id: 2,
    name: "HyperX",
    team: 0,
    amount: 3000,
    expiry: '01.01.2020'
},
{
    id: 3,
    name: "Red Bull",
    team: 0,
    amount: 6000,
    expiry: '01.01.2019'
},
{
    id: 4,
    name: "T-Mobile",
    team: 0,
    amount: 12000,
    expiry: '01.01.2020'
}
]

let finances = [{
    id: 0,
    team: 0,
    total: 2500000,
    income: {
        
    },
    expenses: {
        
    }
}]

let teams = [{
    id: 0,
    tag: "TSM",
    name: "Team SoloMid",
    points: 0,
    games: 0,
    matches: 0,
    logo: "tsm.png",
    league: 0
},
{
    id: 1,
    tag: "C9",
    name: "Cloud 9",
    points: 0,
    games: 0,
    matches: 0,
    logo: "c9.png",
    league: 0
},
{
    id: 2,
    tag: "CLG",
    name: "CounterLogic Gaming",
    points: 0,
    games: 0,
    matches: 0,
    logo: "clg.png",
    league: 0
}

]

let leagues = [{
    id: 0,
    name: "NA LCS"
}]

let users = [{
    id: 0,
    name: "MrMoelZ",
    email: "mrmoerlin@gmail.com",
    password: "asd"
},
{
    id: 1,
    name: "Hans",
    email: "hans@gmail.com",
    password: "asd"
}
]


let games = [{
    name: "testgame",
    participants: [0, 1],

}]


let champions = [{
    id: 0,
    name: "Gnar",
    icon: "gnar.png",
    skills: [{

    }],
    attributes: {
        health: 0 
    },
    meta: {
        lane: "top",
        priority: 0.8,
        tankyness: 6,
        engage: 5,
        damage: 6,
        teamfight: 7,
        splitpush: 8,
        heal: 0,
        shield: 0,
        disengage: 6,
        early: 6,
        mid: 8,
        late: 5,
        damageType: "physical",
        attackType: "ranged",
        cc: "stun, knockback, slow"
    }
},
{
    id: 1,
    name: "Janna",
    icon: "janna.png",
    skills: [{

    }],
    attributes: {
        health: 0 
    },
    meta: {
        lane: "support",
        priority: 1.2,
        tankyness: 1,
        engage: 3,
        damage: 2,
        teamfight: 8,
        splitpush: 0,
        heal: 4,
        shield: 10,
        disengage: 10,
        early: 9,
        mid: 9,
        late: 10,
        damageType: "magical",
        attackType: "ranged",
        cc: "knockup, slow, knockback"
    }
}
]