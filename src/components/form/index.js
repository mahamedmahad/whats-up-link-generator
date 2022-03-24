import React, {useState, useEffect} from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//icons
import {AiFillPhone} from "react-icons/ai";
import {BiCopy} from "react-icons/bi";

const Form = () => {

    const [data, setData] = useState({
        phone: "",
        message: ""
    })

    const [whatsapp, setWhatsapp] = useState("")
    const [generateLink, setGenerateLink] = useState({
        value: "",
        copied: false
    })
    const [copyText, setCopyText] = useState("Copy")

    /**
     * The function takes in an event object and a string.
     * It then sets the data object to a new object with the same key but with the value of the event object's target's
     * value
     * @param e - The event object that was triggered.
     */
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})

    }

    /**
     * This function is used to handle the submit event of the form.
     * It prevents the default action of the form and then checks if the phone number and message are entered or not.
     * If not, it displays an error message.
     * If yes, it generates the link and displays it
     * @param e - The event object that was triggered.
     * @returns Nothing.
     */
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!data.phone  || !data.message) {

            toast.error("Please Enter the fields")
            return true;
        }

        setGenerateLink({
            ...generateLink,
            value: whatsapp
        });

    }

    /* useEffect. It is used to run a function after a component is mounted. In this case, it is used to
    generate the link after the form is submitted. */
    useEffect(() => {
        setWhatsapp(`https://api.whatsapp.com/send?phone=${data.phone}&text=${data.message}`)

    }, [data])

    return (
        <div className={"wrapper"}>
            <div className="iconContainer">
                <h2>Whats App Link Generator</h2>
                <AiFillPhone
                    size={40}
                    color={"#38b000"}
                />
            </div>
            <form className={"form "} onSubmit={handleSubmit}>
                <label>Enter Your Phone</label>
                <input
                    type="text"
                    placeholder="Enter your Phone"
                    name={"phone"}
                    className={"input"}
                    onChange={handleChange}

                />
                <label>Enter Your Message</label>
                <textarea
                    placeholder={"Enter Your Message"}
                    cols={50}
                    rows={4}
                    className={"textarea "}
                    name={"message"}
                    onChange={handleChange}


                />
                {/***Button-******/}
                <button className={"onSubmitBtn"}>Generate a Link</button>

                <div className={"urlContainer"}>
                    <input
                        readOnly
                        type="text"
                        value={generateLink.value}
                    />
                    <CopyToClipboard
                        text={generateLink.value}
                        onCopy={()=> {
                            setGenerateLink({
                                ...generateLink,
                                copied: true,

                            });
                            setCopyText("Copied");
                            toast.success("Copied successfully");
                        }}
                    >
                        <div className={"copy"}>
                            <span>{copyText}</span>
                            <BiCopy color={"#38B000"} size={25}/>
                        </div>
                    </CopyToClipboard>

                </div>
            </form>
            <ToastContainer
                autoClose={2000}
            />
        </div>
    )
}
export default Form;