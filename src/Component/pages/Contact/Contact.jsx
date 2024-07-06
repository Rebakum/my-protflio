import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Rotate from "react-reveal/Rotate";
import contact from "../../../assets/images/contact.png";


const Contact = () => {

    //handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const msg = form.msg.value;
        const message = { name, email, msg };
        console.log(message);

        // try {
        //     const res = await axios.post("/api/v1/portfolio/sendEmail", message);

        //     // validation success
        //     if (res.data.success) {
        //         toast.success(res.data.message);
        //         form.reset(); // Clear the form
        //     } else {
        //         toast.error(res.data.message);
        //     }
        // } catch (error) {
        //     toast.error("Something went wrong. Please try again.");
        // }
    };

    return (
        <div className=" bg-[#006989] py-20"  id="contact">
            <div className="px-6 mx-auto lg:px-20">
                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                    <div className="md:flex">
                        <div className=" md:w-1/2">
                            <LightSpeed>
                                <img src={contact } alt="contact" className="object-cover w-full h-full" />
                            </LightSpeed>
                        </div>
                        <div className="p-6 md:w-1/2 sm:p-12">
                            <Rotate>
                                <h2 className="mb-6 text-2xl font-bold text-gray-800">Contact Me</h2>
                                <p className="mb-4 text-gray-600">Feel free to reach out to us by filling the form below or through our social media channels.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email Address"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="msg" className="block mb-2 font-semibold text-gray-700">Message</label>
                                        <textarea
                                            name="msg"
                                            placeholder="Write your message"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="px-6 py-2 font-semibold text-white bg-[#006989] rounded-lg hover:bg-[#87dffa] hover:text-[#E88D67] focus:outline-none focus:ring-2 focus:ring-b[#006989]">
                                            Send Message
                                        </button>
                                        
                                    </div>
                                </form>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
