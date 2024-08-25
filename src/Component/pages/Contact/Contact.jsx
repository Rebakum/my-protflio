import React, { useState } from "react";
import Lottie from 'react-lottie';
import animation from '../../../assets/lottie.json';


const Contact = () => {
    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b76ad003-7ff6-4c8b-8430-8f585a965ed1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Your message Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="py-20 border-t border-t-blue-950 " id="contact">
            <div className="px-5 mx-auto lg:px-10">
                <div className="overflow-hidden ">
                <h2 className="text-3xl font-bold text-center text-white uppercase lg:text-4xl title-border">Contact Me</h2>

                    <div className="my-20 border rounded-lg md:flex">
                        <div className=" md:w-1/2">
                            
                            <Lottie animationData={animation }  />
                           
                        </div>
                        <div className="shadow-lg md:w-1/2 sm:p-12">
                         
                                <p className="mb-4 text-gray-400">Feel free to reach out to us by filling the form below or through our social media channels.</p>
                                <form onSubmit={handleSubmit}>
                                    <input type="hidden" name="access_key" value="b76ad003-7ff6-4c8b-8430-8f585a965ed1" />
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block mb-2 font-semibold text-gray-400">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block mb-2 font-semibold text-gray-400">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email Address"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="msg" className="block mb-2 font-semibold text-gray-400">Message</label>
                                        <textarea
                                            name="msg"
                                            placeholder="Write your message"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="w-full button gradient-border">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                <span>{result}</span>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
