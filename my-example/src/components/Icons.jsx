
import declarativeIcon from "../assets/images/icon1.png"
import componentsIcon from "../assets/images/icon2.png"
import singleWayIcon from "../assets/images/icon3.png"
import jsxIcon from "../assets/images/icon4.png"

const Icons = () => {
    return (
        <>
            <div className="icon-container">
                <div>
                    <img src={declarativeIcon} />

                    <h1>Declarative</h1>
                    <p>
                        React makes it painless to create interactiv UIs
                    </p>
                </div>
                <div>
                    <img src={componentsIcon} />
                    <h1>Components</h1>
                    <p>
                        Build encapsulated components that manage their state.
                    </p>
                </div>
                <div>
                    <img src={singleWayIcon} />
                    <h1>Single-Way</h1>
                    <p>
                        A set of immutable values are passed to the component&apos;s.
                    </p>
                </div>
                <div>
                    <img src={jsxIcon} />
                    <h1>JSX</h1>
                    <p>
                        Statically-typed, designed to run on modern browsers.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Icons;