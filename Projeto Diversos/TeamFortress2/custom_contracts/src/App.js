import "./Home.scss"

import { useState } from "react"

export default function App() {

    const [escolha1, setEscolha1] = useState("")
    const [escolha2, setEscolha2] = useState("")
    const [escolha3, setEscolha3] = useState("")
    const [classe, setClasse] = useState("???")
    const [obj1, setObj1] = useState()
    const [obj2, setObj2] = useState()
    const [obj3, setObj3] = useState()
    const [obj4, setObj4] = useState()

    var selectClass
    var primary
    var secondary
    var melee

    var contratosSalvos = []

    //setObj1(Math.floor(Math.random() * contracts.length))
    //contratosSalvos.push(obj1)

    //array of arrays : nome[linha][coluna]

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

    var contracts = ["10x kills", "4x airbone kills", "5x primary kills", "Domination + Trash Talk", "3x Taunt Kill", "Érica Triplekill","7x enviroment hazard kill", "Touch Grass", "Crit kill + kill bind"]
    var contractsScout = ["5 killstreak + taunt on kill", "ez on kill / kys on death"]
    var contractsSoldier = ["Crocket multikill"]
    var contractsPyro = ["Reflect crocket"]
    var contractsDemo = ["Airbone crit pan kill", "Trimp crit pan kill"]
    var contractsHeavy = ["5 jojo reference kills"]
    var contractsEnginner = ["Idle enginnering sentry 5 killstreak"]
    var contractsMedic = ["Pocket heavy ヾ(•ω•`)o", "The battle medic moment"]
    var contractsSniper = ["'Lmao box' after kill until kicked"]
    var contractsSpy = ["Facestab", "Weebspy trash talk"]

    var contractMap = []

    function click() {
        selectClass = Math.round(Math.random() * 9)

        if (selectClass === 0) {
            setClasse("Scout")
            WeaponRandomizer(5, 6, 8, scoutPrimary, scoutSecondary, scoutMelee)
            //ContractRandomizer(contractsScout)
        }

        if (selectClass === 1) {
            setClasse("Soldier")
            WeaponRandomizer(8, 9, 6, soldierPrimary, soldierSecondary, soldierMelee)
            //ContractRandomizer(contractsSoldier)
        }

        if (selectClass === 2) {
            setClasse("Pyro")
            WeaponRandomizer(5, 8, 10, pyroPrimary, pyroSecondary, pyroMelee)
           //ContractRandomizer(contractsPyro)
        }

        if (selectClass === 3) {
            setClasse("Demoman")
            WeaponRandomizer(6, 6, 7, demoPrimary, demoSecondary, demoMelee)
            //ContractRandomizer(contractsDemo)
        }

        if (selectClass === 4) {
            setClasse("Heavy")
            WeaponRandomizer(4, 6, 6, heavyPrimary, heavySecondary, heavyMelee)
            //ContractRandomizer(contractsHeavy)
        }

        if (selectClass === 5) {
            setClasse("Enginner")
            WeaponRandomizer(5, 2, 5, enginnerPrimary, enginnerSecondary, enginnerMelee)
           //ContractRandomizer(contractsEnginner)
        }

        if (selectClass === 6) {
            setClasse("Medic")
            WeaponRandomizer(3, 3, 4, medicPrimary, medicSecondary, medicMelee)
            //ContractRandomizer(contractsMedic)
        }

        if (selectClass === 7) {
            setClasse("Sniper")
            WeaponRandomizer(6, 5, 3, sniperPrimary, sniperSecondary, sniperMelee)
            //ContractRandomizer(contractsSniper)
        }

        if (selectClass === 8) {
            setClasse("Spy")
            WeaponRandomizer(4, 4, 2, spyPrimary, spyMelee, spyWatch)
            //ContractRandomizer(contractsSpy)
        }

        ContractRandomizer()
    }

    function WeaponRandomizer(num, num2, num3, array, array2, array3) {

        primary = Math.round(Math.random() * num)
        setEscolha1(array[primary])

        secondary = Math.round(Math.random() * num2)
        setEscolha2(array2[secondary])

        melee = Math.round(Math.random() * num3)
        setEscolha3(array3[melee])
    }

    function ContractRandomizer() {

        setObj1(Math.floor(Math.random() * contracts.length))
        contratosSalvos.push(obj1)
        //console.log(contratosSalvos)

        setObj2(Math.floor(Math.random() * contracts.length))
        contratosSalvos.push(obj2)
        //console.log(contratosSalvos)

        setObj3(Math.floor(Math.random() * contracts.length))
        contratosSalvos.push(obj3)
        //console.log(contratosSalvos)
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
                <input readOnly placeholder="???" value={contracts[obj1]} />
                <input readOnly placeholder="???" value={contracts[obj2]} />
                <input readOnly placeholder="???" value={contracts[obj3]} />
            </div>
        </>
    )
}