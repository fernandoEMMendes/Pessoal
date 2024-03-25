import { Link } from "react-router-dom"
import "./Home.scss"

export default function Home() {

    return (
        <>
            <div className="titleCSS">
                <h1>Links</h1>
            </div>
            <div className="optionsCSS">
                <Link to="/Test_TurnBased"><h2>TurnBased</h2></Link>
                <Link to="/Test_ClickerGame"><h2>Clicker</h2></Link>
            </div>
        </>
    )

}