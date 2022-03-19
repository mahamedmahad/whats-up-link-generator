import './App.css';


//icons
import {AiFillPhone} from "react-icons/ai";
import {BiCopy} from "react-icons/bi";

function App() {
    return (<div className="App">
            <div className={"wrapper"}>
                <div className="iconContainer">
                    <h2>Whats App Link Generator</h2>
                    <AiFillPhone
                        size={40}
                        color={"#38b000"}
                    />
                </div>
                <form action="" className={"form "}>
                    <label>Enter Your Phone</label>
                    <input
                        type="text"
                        placeholder="Enter your Phone"
                        name={"phone"}
                        className={"input"}
                    />
                    <label>Enter Your Message</label>
                    <textarea
                        placeholder={"Enter Your Message"}
                        cols={50}
                        rows={2}
                        className={"textarea "}
                        name={"message"}

                    />
                    {/***Button-******/}
                    <button className={"onSubmitBtn"}>Generate a Link</button>

                    <div className={"urlContainer"}>
                        <input
                            readOnly={true}
                            type="text"
                            name={"link-url"}
                        />
                        <span className={"copy"}>
                            Copy
                            <BiCopy/>
                        </span>

                    </div>
                </form>
            </div>

        </div>);
}

export default App;
