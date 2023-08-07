import { Link } from "react-router-dom";
import '../App.css'


const NavBar = () => {
    console.log("Nav Bar Main")

    return(
        <>
        <div id="Title-Nav">
            <h1>Puppy Bowl II</h1>
            <section id="Nav-Links">
                <Link to="./" title="Home" className="test">Home</Link>
                <Link to="/Roster" title="Roster" className="test">Roster</Link>
                <Link to="/Submit" title="Submit" className="test">Submit </Link>
            </section>
        </div>
        </>
    )
};

export default NavBar