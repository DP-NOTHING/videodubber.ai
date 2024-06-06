import React, { useState } from 'react';

const ContactUsSnippet = () => {
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = () => {
        setMessageSent(true);

        const formData = new FormData();
        formData.append("email", document.getElementById("email").value);
        formData.append("name", document.getElementById("name").value);
        formData.append("message", document.getElementById("message").value);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/message", true);
        xhr.send(formData);
    };

    return (
        <div className="max-w-3xl mx-auto my-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row">
                {/* Left Div - Founder's Information */}
                <div className="md:w-1/2 p-4">
                    <img className="w-full" src="https://cdn.jsdelivr.net/gh/souvic/autodubber/assets/profilephoto.webp" alt="Founder's Image" />
                    <div className="px-4 py-2">
                        <div className="font-bold text-xl mb-2">Souvic Chakraborty, Ph.D.</div>
                        <p className="text-gray-700 text-base">Founder and CEO</p>
                        <p className="text-gray-700 text-base">Solopreneur, Ph.D. in AI, Building in public<em>!</em></p>
                    </div>
                    <div className="px-4 py-2 flex justify-left">
                        <a href="https://www.linkedin.com/in/souvic-chakraborty/" className="text-blue-500 hover:text-blue-700 mr-12 my-4 inline-flex">
                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" transform="scale(2)">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com/ChakraSouvic" className="text-blue-500 hover:text-blue-700 mr-12 my-4 inline-flex">
                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16" transform="scale(2)">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </a>
                        <a href="https://wa.me/919591058978" className="text-green-500 hover:text-green-700 mr-12 my-4 inline-flex">
                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" transform="scale(2)">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
                        </a>
                        <a href="mailto:contact@videodubber.ai" className="text-red-500 hover:text-red-700 inline-flex my-4">
                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16" transform="scale(2)">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Right Div - Message Section */}
                <div className="md:w-1/2 bg-gray-100 p-4">
                    {!messageSent ? (
                        <div id="message-section">
                            <p className="text-2xl font-semibold mb-4">Send a Message</p>
                            <form id="message-form" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-bold">Your Name:</label>
                                    <input type="text" id="name" name="name"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                        placeholder="John Doe" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-bold">Your Email:</label>
                                    <input type="email" id="email" name="email"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                        placeholder="john@example.com" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-bold">Message:</label>
                                    <textarea id="message" name="message"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                        rows="4" placeholder="Your message here..." required></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div id="message-delivered" className="text-center">
                            <p className="text-gray-700 font-bold pt-0 md:pt-24 flex justify-center">Thanks! &nbsp;<svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                            </svg></p>
                            <p className="text-gray-700 font-bold pt-2">We have received your message!</p>
                            <p className="text-gray-700 font-bold pt-2">Expect to hear from us soon!</p>
                            <p className="text-gray-700  font-bold pt-2">Meanwhile please try out our platform <a className="text-indigo-700" onClick={() => window.location.href = '/login'}>here</a> for free!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactUsSnippet;
