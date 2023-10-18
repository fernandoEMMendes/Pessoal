import "./Home.scss"

import { useState } from "react"

export default function Home() {

    const [escolha1, setEscolha1] = useState("")
    const [escolha2, setEscolha2] = useState("")
    const [escolha3, setEscolha3] = useState("")
    const [classe, setClasse] = useState("???")

    var selectClass
    var primary
    var secondary
    var melee

    //array of arrays : ScoutWeapons[linha][coluna]
    //EX: ScoutWeapons[2][1] => pistol

    //Criar um grande Math.random() que ira selecionar uma das 9 classes e então por meio de ifs vai escolher qual armas roletar"

    var scoutPrimary = ["Scattergun", "Force-A-Nature", "Shortstop", "Sodapopper", "Baby Face's Blaster", "Back Scatter"]
    var scoutSecondary = ["Pistol", "Bonk! Atomic Punch", "Crit-A-Cola", "Mad Milk", "Winger", "Pretty Boy's Pocket Pistol", "Flying Guillotine"]
    var scoutMelee = ["Bat", "Holy Mackerel", "Sandman", "Candy Cane", "Boston Basher", "Sun-on-a-Stick", "Fan O'War", "Atomizer", "Wrap Assassin"]

    var soldierPrimary = ["Rocket Launcher", "DickJoke", "Direct Hit", "Black Box", "Rocket Jumper", "Liberty Launcher", "Cow Mangler 5000", "Beggar's Bazooka", "Air Strike"]
    var soldierSecondary = ["Shotgun", "Buff Banner", "Gunboats", "Battalion's Backup", "Concheror", "Mantreads", "Reserve Shooter", "Righteous Bison", "B.A.S.E. Jumper", "Panic Attack"]
    var soldierMelee = ["Shovel", "Equalizer", "Pain Train", "Half-Zatoichi", "Disciplinary Action", "Market Gardener", "Escape Plan"]

    var pyroPrimary = ["Flame Thrower", "Backburner", "Degreaser", "Phlogistinator", "Rainblower", "Dragon's Fury"]
    var pyroSecondary = ["Shotgun", "Flare Gun", "Detonator", "Reserve Shooter", "Manmelter", "Scorch Shot", "Panic Attack", "Thermal Thruster", "Gas Passer"]
    var pyroMelee = ["Fire Axe", "Axtinguisher", "Postal Pummeler", "Homewrecker", "Powerjack", "Back Scratcher", "Sharpened Volcano Fragment", "Third Degree", "Lollichop", "Neon Annihilator", "Hot Hand"]

    var demoPrimary = ["Grenade Launcher", "loch-n-Load", "Ali Baba's Wee Booties", "Bootlegger", "Loose Cannon", "B.A.S.E. Jumper", "Iron Bomber"]
    var demoSecondary = ["Stickybomb Launcher", "Chargin' Targe", "Scottish Resistance", "Sticky Jumper", "Splendid Screen", "Tide Turner", "Quickiebomb Launcher"]
    var demoMelee = ["Scrumpy", "Eyelander", "Pain Train", "Scotsman's Skullcutter", "Claidheamh Mòr", "Ullapool Caber", "Half-Zatoichi", "Persian Persuader"]

    var heavyPrimary = ["Sasha", "Natascha", "Svetlana", "Oksana", "Sheila"]
    var heavySecondary = ["Shotgun", "Sandvich", "Dalokohs Bar", "Buffalo Steak Sandvich", "Family Business", "Panic Attack", "Second Banana"]
    var heavyMelee = ["Fists", "Killing Gloves of Boxing", "Gloves of Running Urgently", "Warrior's Spirit", "Fists of Steel", "Eviction Notice", "Holiday Punch"]

    var enginnerPrimary = ["Shotgun", "Frontier Justice", "Windowmaker", "Pomson 6000", "Rescue Ranger", "Panic Attack"]
    var enginnerSecondary = ["Pistol", "Wrangler", "Short Circuit"]
    var enginnerMelee = ["Wrench", "Gunslinger", "Southern Hospitality", "Jag", "Eureka Effect", "Teleporter"]

    var medicPrimary = ["Syringe Gun", "Blutsauger", "Crusader's Crossbow", "Overdose"]
    var medicSecondary = ["Medi Gun", "Kritzkrieg", "Quick-Fix", "Vaccinator"]
    var medicMelee = ["Bonesaw", "Ubersaw", "Vita-Saw", "Amputator", "Solemn Vow"]

    var sniperPrimary = ["Sniper Rifle", "Huntsman", "Sydney Sleeper", "Bazaar Bargain", "Machina", "Hitman's Heatmaker", "Classic"]
    var sniperSecondary = ["SMG", "Jarate", "Razorback", "Darwin's Danger Shield", "Cozy Camper", "Cleaner's Carbine"]
    var sniperMelee = ["Kukri", "Tribalman's Shiv", "Bushwacka", "Shahanshah"]

    var spyPrimary = ["Revolver", "Ambassador", "L'Etranger", "Enforcer", "Diamondback"]
    var spyMelee = ["Knife", "Your Eternal Reward", "Conniver's Kunai", "Big Earner", "Spy-cicle"]
    var spyWatch = ["Invis Watch", "Cloak and Dagger", "Dead Ringer"]

    var contracts = ["TBA"]

    function click() {
        selectClass = Math.round(Math.random() * 9)

        if (selectClass === 0) {
            setClasse("Scout")

            primary = Math.round(Math.random() * 5)
            setEscolha1(scoutPrimary[primary])

            secondary = Math.round(Math.random() * 6)
            setEscolha2(scoutSecondary[secondary])

            melee = Math.round(Math.random() * 8)
            setEscolha3(scoutMelee[melee])
        }

        if (selectClass === 1) {
            setClasse("Soldier")

            primary = Math.round(Math.random() * 8)
            setEscolha1(soldierPrimary[primary])

            secondary = Math.round(Math.random() * 9)
            setEscolha2(soldierSecondary[secondary])

            melee = Math.round(Math.random() * 6)
            setEscolha3(soldierMelee[melee])
        }

        if (selectClass === 2) {
            setClasse("Pyro")

            primary = Math.round(Math.random() * 5)
            setEscolha1(pyroPrimary[primary])

            secondary = Math.round(Math.random() * 8)
            setEscolha2(pyroSecondary[secondary])

            melee = Math.round(Math.random() * 10)
            setEscolha3(pyroMelee[melee])
        }

        if (selectClass === 3) {
            setClasse("Demoman")

            primary = Math.round(Math.random() * 6)
            setEscolha1(demoPrimary[primary])

            secondary = Math.round(Math.random() * 6)
            setEscolha2(demoSecondary[secondary])

            melee = Math.round(Math.random() * 7)
            setEscolha3(demoMelee[melee])
        }

        if (selectClass === 4) {
            setClasse("Heavy")

            primary = Math.round(Math.random() * 4)
            setEscolha1(heavyPrimary[primary])

            secondary = Math.round(Math.random() * 6)
            setEscolha2(heavySecondary[secondary])

            melee = Math.round(Math.random() * 6)
            setEscolha3(heavyMelee[melee])
        }

        if (selectClass === 5) {
            setClasse("Enginner")

            primary = Math.round(Math.random() * 5)
            setEscolha1(enginnerPrimary[primary])

            secondary = Math.round(Math.random() * 2)
            setEscolha2(enginnerSecondary[secondary])

            melee = Math.round(Math.random() * 5)
            setEscolha3(enginnerMelee[melee])
        }

        if (selectClass === 6) {
            setClasse("Medic")

            primary = Math.round(Math.random() * 3)
            setEscolha1(medicPrimary[primary])

            secondary = Math.round(Math.random() * 3)
            setEscolha2(medicSecondary[secondary])

            melee = Math.round(Math.random() * 4)
            setEscolha3(medicMelee[melee])
        }

        if (selectClass === 7) {
            setClasse("Sniper")

            primary = Math.round(Math.random() * 6)
            setEscolha1(sniperPrimary[primary])

            secondary = Math.round(Math.random() * 5)
            setEscolha2(sniperSecondary[secondary])

            melee = Math.round(Math.random() * 3)
            setEscolha3(sniperMelee[melee])
        }

        if (selectClass === 8) {
            setClasse("Spy")

            primary = Math.round(Math.random() * 4)
            setEscolha1(spyPrimary[primary])

            secondary = Math.round(Math.random() * 4)
            setEscolha2(spyMelee[secondary])

            melee = Math.round(Math.random() * 2)
            setEscolha3(spyWatch[melee])
        }

    }

    return (
        <>
            <div className="titulo">
                <h1>TF2 Randomizer</h1>
            </div>

            <div className="classe">
                <h1>{classe}</h1>
            </div>

            <div className="escolha1">
                <input readOnly value={escolha1} />
            </div>

            <div className="escolha2">
                <input readOnly value={escolha2} />
            </div>

            <div className="escolha3">
                <input readOnly value={escolha3} />
            </div>

            <div className="botao">
                <button onClick={click}>{"!RTD"}</button>
            </div>

            <div className="contrato">
                <a>Contrato:</a> <br />
                <a>{contracts}</a>
            </div>
        </>
    )
}