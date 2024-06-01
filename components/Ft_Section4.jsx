import React from 'react';
import Link from 'next/link';

export default function Ft_section4() {
  const data={
    "title":"Use your Original Voice!",
    "description":"VideoDubber.ai is the first and only AI to offer Voice Cloning! Use VideoDubber.ai to clone your voice in seconds with a single click!",
    "image":"https://cdn.jsdelivr.net/gh/souvic/autodubber@latest/assets/ai-voice-cloning-free.webp",
    "alt":"AI Voice Cloning Free",
    "points_heading":"Why is Voice Cloning essential for content creators?",
    "points":[
      "Authenticity: The creator's natural voice adds a genuine touch to the content, enhancing credibility",
      "Unique Identity: The creator's voice is distinctive making their content instantly recognizable.",
      "Emotional Expression: The creator's voice carries their emotions and intentions which are important for audience.",
      "Personal Branding: The creator's voice becomes an integral part of their personal brand, reinforcing their image and message.",
      "Trust and Engagement: Hearing the creator's actual voice fosters trust and deeper engagement as viewers feel a personal connection to the content."
    ],
    "button":{
      "text":"Dub in Your Own Voice",
      "link":"/login"
    }
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt={data.alt}
              src={data.image}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:py-4">
            <h2 className="text-3xl font-bold sm:text-4xl">{data.title}</h2>
            <p className="mt-4 text-gray-600">{data.description}</p>
            <p className="mt-4 text-gray-800"><strong>{data.points_heading}</strong></p>

            <div className="mt-4 text-gray-600">
              <ul className="list-disc pl-5">
                {data.points.map((point, index) => ( 
                  <li key={index} className="mb-2">{point}</li>
                 ))}
              </ul> <strong>10x your audience</strong> with the power of AI<em>!</em>
            </div>

            <Link href={data.button.link} className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                {data.button.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}