
import './style.scss'

function Navbar({ toggle, state }) {

    const handleClick = () => {
        toggle(!state)
        console.log(state);
    }

    return (

        <nav>
            <div className="btn"
            onClick={handleClick}>
                <div className={state ? "open" : "close"}></div>
                <div className={state ? "open" : "close"}></div>
            </div>
        </nav>

    );
}

export default Navbar;