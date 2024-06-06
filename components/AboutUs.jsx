import React from 'react';
import ContactUsSnippet from './ContactUsSnippet';

const AboutUs = ({data}) => {
    
    return (
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8 pt-12">
        <div className="container mx-auto px-4">
            <section id="about" className="mb-8">
                <h1 className="text-center bg-gradient-to-r from-pink-800 via-indigo-500 to-red-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl mb-8">
                    {data.heading}
                </h1>
                <p className="text-gray-700">
                   {data.description}
                </p>
            </section>

            {/* Assuming the 'snippets/contact_us_snippet.html' is a separate component */}
            {/* Uncomment the below line if you have the 'ContactUsSnippet' component */}
           <ContactUsSnippet />

            {data.points.map((point, index) => (
                <section key={index} id={point.heading.toLowerCase().replace(/ /g, "-")} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{point.heading}</h2>
                    <p className="text-gray-700">
                        {point.description}
                    </p>
                </section>
            ))}
            <section id="why-choose-us" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{data.heading2}</h2>
                <ul className="list-none list-inside text-gray-700 pl-10">
                    {data.points2.map((point, index) => (
                        <li key={index} className="mb-2">{point}</li>
                    ))}
                </ul>
            </section>
            

            <section id="join-community" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{data.heading3}</h2>
                <p className="text-gray-700">
                    {data.description3}
                </p>
            </section>

            <section id="contact" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{data.heading4}</h2>
                <p className="text-gray-700">{data.description4.line1}</p>
                <p>
                    <a href="https://wa.me/919591058978" className="text-blue-500 hover:underline">Contact us</a>{data.description4.line2}
                </p>
                <p>{data.description4.line3}</p>
            </section>
        </div>
        </div>
    );
};

export default AboutUs;
